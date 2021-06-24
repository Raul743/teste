module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Google({\n    clientId: \"375429109056-n3q996gki545cuci4mv92rqg6hqd8lnl.apps.googleusercontent.com\",\n    clientSecret: \"Rcx8LUeyKKEx23ULgScj1kZe\",\n    authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Facebook({\n    clientId: \"2936861616589160\",\n    clientSecret: \"df4992a16779f15139e6af82295d6ac0\"\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Twitter({\n    clientId: process.env.TWITTER_CLIENT_ID,\n    clientSecret: process.env.TWITTER_CLIENT_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.GitHub({\n    clientId: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SECRET\n  })],\n  session: {\n    jwt: true\n  },\n  jwt: {\n    secret: process.env.JWT_SECRET\n  },\n  debug: true\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzI4YzIiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJHb29nbGUiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImF1dGhvcml6YXRpb25VcmwiLCJGYWNlYm9vayIsIlR3aXR0ZXIiLCJwcm9jZXNzIiwiZW52IiwiVFdJVFRFUl9DTElFTlRfSUQiLCJUV0lUVEVSX0NMSUVOVF9TRUNSRVQiLCJHaXRIdWIiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJzZXNzaW9uIiwiand0Iiwic2VjcmV0IiwiSldUX1NFQ1JFVCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlQSwrR0FBUSxDQUFDO0FBQ3RCQyxXQUFTLEVBQUUsQ0FDVEMsMERBQVMsQ0FBQ0MsTUFBVixDQUFpQjtBQUNmQyxZQUFRLEVBQUUsMEVBREs7QUFFZkMsZ0JBQVksRUFBRSwwQkFGQztBQUdmQyxvQkFBZ0IsRUFDZDtBQUphLEdBQWpCLENBRFMsRUFPVEosMERBQVMsQ0FBQ0ssUUFBVixDQUFtQjtBQUNqQkgsWUFBUSxFQUFFLGtCQURPO0FBRWpCQyxnQkFBWSxFQUFFO0FBRkcsR0FBbkIsQ0FQUyxFQVdUSCwwREFBUyxDQUFDTSxPQUFWLENBQWtCO0FBQ2hCSixZQUFRLEVBQUVLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxpQkFETjtBQUVoQk4sZ0JBQVksRUFBRUksT0FBTyxDQUFDQyxHQUFSLENBQVlFO0FBRlYsR0FBbEIsQ0FYUyxFQWVUViwwREFBUyxDQUFDVyxNQUFWLENBQWlCO0FBQ2ZULFlBQVEsRUFBRUssT0FBTyxDQUFDQyxHQUFSLENBQVlJLGdCQURQO0FBRWZULGdCQUFZLEVBQUVJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSztBQUZYLEdBQWpCLENBZlMsQ0FEVztBQXFCdEJDLFNBQU8sRUFBRTtBQUNQQyxPQUFHLEVBQUU7QUFERSxHQXJCYTtBQXdCdEJBLEtBQUcsRUFBRTtBQUNIQyxVQUFNLEVBQUVULE9BQU8sQ0FBQ0MsR0FBUixDQUFZUztBQURqQixHQXhCaUI7QUEyQnRCQyxPQUFLLEVBQUM7QUEzQmdCLENBQUQsQ0FBdkIiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5Hb29nbGUoe1xuICAgICAgY2xpZW50SWQ6IFwiMzc1NDI5MTA5MDU2LW4zcTk5NmdraTU0NWN1Y2k0bXY5MnJxZzZocWQ4bG5sLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIsXG4gICAgICBjbGllbnRTZWNyZXQ6IFwiUmN4OExVZXlLS0V4MjNVTGdTY2oxa1plXCIsXG4gICAgICBhdXRob3JpemF0aW9uVXJsOlxuICAgICAgICAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGg/cHJvbXB0PWNvbnNlbnQmYWNjZXNzX3R5cGU9b2ZmbGluZSZyZXNwb25zZV90eXBlPWNvZGUnLFxuICAgIH0pLFxuICAgIFByb3ZpZGVycy5GYWNlYm9vayh7XG4gICAgICBjbGllbnRJZDogXCIyOTM2ODYxNjE2NTg5MTYwXCIsXG4gICAgICBjbGllbnRTZWNyZXQ6IFwiZGY0OTkyYTE2Nzc5ZjE1MTM5ZTZhZjgyMjk1ZDZhYzBcIixcbiAgICB9KSxcbiAgICBQcm92aWRlcnMuVHdpdHRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LlRXSVRURVJfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBQcm92aWRlcnMuR2l0SHViKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgc2Vzc2lvbjoge1xuICAgIGp3dDogdHJ1ZSxcbiAgfSxcbiAgand0OiB7XG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICB9LFxuICBkZWJ1Zzp0cnVlXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n");

/***/ })

/******/ });