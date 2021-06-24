var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export default function transCore(_a) {
    var config = _a.config, allNamespaces = _a.allNamespaces, pluralRules = _a.pluralRules;
    var _b = config.logger, logger = _b === void 0 ? missingKeyLogger : _b;
    var t = function (key, query, options) {
        if (key === void 0) { key = ''; }
        var k = Array.isArray(key) ? key[0] : key;
        var _a = k.split(/:(.+)/), namespace = _a[0], i18nKey = _a[1];
        var dic = allNamespaces[namespace] || {};
        var keyWithPlural = plural(pluralRules, dic, i18nKey, query);
        var value = getDicValue(dic, keyWithPlural, options);
        var empty = typeof value === 'undefined' ||
            (typeof value === 'object' && !Object.keys(value).length);
        var fallbacks = typeof (options === null || options === void 0 ? void 0 : options.fallback) === 'string'
            ? [options.fallback]
            : (options === null || options === void 0 ? void 0 : options.fallback) || [];
        if (typeof window !== 'undefined' && empty) {
            logger({ namespace: namespace, i18nKey: i18nKey });
        }
        if (empty && Array.isArray(fallbacks) && fallbacks.length) {
            var firstFallback = fallbacks[0], restFallbacks = fallbacks.slice(1);
            if (typeof firstFallback === 'string') {
                return t(firstFallback, query, __assign(__assign({}, options), { fallback: restFallbacks }));
            }
        }
        if (empty) {
            return k;
        }
        if (value instanceof Object) {
            return objectInterpolation({
                obj: value,
                query: query,
                config: config,
            });
        }
        return interpolation({ text: value, query: query, config: config });
    };
    return t;
}
function getDicValue(dic, key, options) {
    if (key === void 0) { key = ''; }
    if (options === void 0) { options = {
        returnObjects: false,
    }; }
    var value = key
        .split('.')
        .reduce(function (val, key) {
        if (typeof val === 'string') {
            return {};
        }
        var res = val[key];
        return res || (typeof res === 'string' ? res : {});
    }, dic);
    if (typeof value === 'string' ||
        (value instanceof Object && options.returnObjects)) {
        return value;
    }
    return undefined;
}
function plural(pluralRules, dic, key, query) {
    if (!query || typeof query.count !== 'number')
        return key;
    var numKey = key + "_" + query.count;
    if (getDicValue(dic, numKey) !== undefined)
        return numKey;
    var pluralKey = key + "_" + pluralRules.select(query.count);
    if (query.count > 0 && getDicValue(dic, pluralKey) !== undefined) {
        return pluralKey;
    }
    var nestedNumKey = key + "." + query.count;
    if (getDicValue(dic, nestedNumKey) !== undefined)
        return nestedNumKey;
    var nestedKey = key + "." + pluralRules.select(query.count);
    if (getDicValue(dic, nestedKey) !== undefined)
        return nestedKey;
    return key;
}
function interpolation(_a) {
    var text = _a.text, query = _a.query, config = _a.config;
    if (!text || !query)
        return text || '';
    var escapeRegex = function (str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };
    var _b = config.interpolation, _c = _b === void 0 ? { prefix: '{{', suffix: '}}' } : _b, prefix = _c.prefix, suffix = _c.suffix;
    var regexEnd = suffix === '' ? '' : "\\s*" + escapeRegex(suffix);
    return Object.keys(query).reduce(function (all, varKey) {
        var regex = new RegExp(escapeRegex(prefix) + "\\s*" + varKey + regexEnd, 'gm');
        all = all.replace(regex, "" + query[varKey]);
        return all;
    }, text);
}
function objectInterpolation(_a) {
    var obj = _a.obj, query = _a.query, config = _a.config;
    if (!query || Object.keys(query).length === 0)
        return obj;
    Object.keys(obj).forEach(function (key) {
        if (obj[key] instanceof Object)
            objectInterpolation({
                obj: obj[key],
                query: query,
                config: config,
            });
        if (typeof obj[key] === 'string')
            obj[key] = interpolation({ text: obj[key], query: query, config: config });
    });
    return obj;
}
function missingKeyLogger(_a) {
    var namespace = _a.namespace, i18nKey = _a.i18nKey;
    if (process.env.NODE_ENV === 'production')
        return;
    if (!i18nKey) {
        console.warn("[next-translate] The text \"" + namespace + "\" has no namespace in front of it.");
        return;
    }
    console.warn("[next-translate] \"" + namespace + ":" + i18nKey + "\" is missing in current namespace configuration. Try adding \"" + i18nKey + "\" to the namespace \"" + namespace + "\".");
}
