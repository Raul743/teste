export default function wrapTWithDefaultNs(oldT, defaultNs) {
    if (typeof defaultNs !== 'string')
        return oldT;
    var t = function (key, query, options) {
        if (key === void 0) { key = ''; }
        var k = Array.isArray(key) ? key[0] : key;
        if (!k.includes(':'))
            k = defaultNs + ":" + k;
        if (options === null || options === void 0 ? void 0 : options.fallback) {
            if (Array.isArray(options.fallback)) {
                options.fallback = options.fallback.map(function (k) {
                    return k.includes(':') ? k : defaultNs + ":" + k;
                });
            }
            else {
                var k_1 = options.fallback;
                options.fallback = k_1.includes(':') ? k_1 : defaultNs + ":" + k_1;
            }
        }
        return oldT(k, query, options);
    };
    return t;
}
