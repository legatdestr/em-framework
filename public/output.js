/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _web_logo = __webpack_require__(1);\n\nvar _web_logo2 = _interopRequireDefault(_web_logo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n__webpack_require__(2);\n\n// Importing\n\n/**\n * Demonstration of new feature - class declaration\n */\nvar Demo = function () {\n    function Demo() {\n        _classCallCheck(this, Demo);\n    }\n\n    _createClass(Demo, null, [{\n        key: \"renderIntro\",\n\n        /**\n         * Renders greetings text\n         * @returns {string} html code\n         */\n        value: function renderIntro() {\n            var html = \"<ul><li>\";\n            html += [\"Webpack + Webpack Dev Server\", \"ES2015/ES6 support with Babel loader (class, import)\", \"SCSS to CSS compilation\", \"CSS and JS minification\", \"CSS autoprefixer\", \"Images loader and minification\", \"Shortcut to  paths (aliases)\", \"UglifyJS\", \"Image Webpack Loader\", \"Hot-module-reloading support for styles\", \"Automatic code analyzing with ESLint\"].join(\"</li><li>\");\n\n            html += \"</li></ul>\";\n\n            return html;\n        }\n    }]);\n\n    return Demo;\n}();\n\nvar img = document.createElement(\"img\");\nimg.src = \"\" + _web_logo2.default;\ndocument.querySelector(\".logo\").appendChild(img);\ndocument.querySelector(\".intro\").innerHTML = Demo.renderIntro();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRGVtbyIsImh0bWwiLCJqb2luIiwiaW1nIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwicmVuZGVySW50cm8iXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTs7Ozs7Ozs7QUFIQSxtQkFBQUEsQ0FBUSxDQUFSOztBQUVBOztBQUlBOzs7SUFHTUMsSTs7Ozs7Ozs7QUFDRjs7OztzQ0FJcUI7QUFDakIsZ0JBQUlDLE9BQU8sVUFBWDtBQUNBQSxvQkFDSSxDQUNJLDhCQURKLEVBRUksc0RBRkosRUFHSSx5QkFISixFQUlJLHlCQUpKLEVBS0ksa0JBTEosRUFNSSxnQ0FOSixFQU9JLDhCQVBKLEVBUUksVUFSSixFQVNJLHNCQVRKLEVBVUkseUNBVkosRUFXSSxzQ0FYSixFQVlFQyxJQVpGLENBWU8sV0FaUCxDQURKOztBQWVBRCxvQkFBUSxZQUFSOztBQUVBLG1CQUFPQSxJQUFQO0FBQ0g7Ozs7OztBQUlMLElBQU1FLE1BQU1DLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBRixJQUFJRyxHQUFKO0FBQ0FGLFNBQVNHLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0NDLFdBQWhDLENBQTRDTCxHQUE1QztBQUNBQyxTQUFTRyxhQUFULENBQXVCLFFBQXZCLEVBQWlDRSxTQUFqQyxHQUE2Q1QsS0FBS1UsV0FBTCxFQUE3QyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZShcIi4vYXNzZXRzL3N0eWxlc2hlZXRzL3N0eWxlcy5zY3NzXCIpO1xuXG4vLyBJbXBvcnRpbmdcbmltcG9ydCB3ZWJMb2dvIGZyb20gXCJpbWFnZXMvd2ViX2xvZ29cIjtcblxuXG4vKipcbiAqIERlbW9uc3RyYXRpb24gb2YgbmV3IGZlYXR1cmUgLSBjbGFzcyBkZWNsYXJhdGlvblxuICovXG5jbGFzcyBEZW1vIHtcbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGdyZWV0aW5ncyB0ZXh0XG4gICAgICogQHJldHVybnMge3N0cmluZ30gaHRtbCBjb2RlXG4gICAgICovXG4gICAgc3RhdGljIHJlbmRlckludHJvKCkge1xuICAgICAgICBsZXQgaHRtbCA9IFwiPHVsPjxsaT5cIjtcbiAgICAgICAgaHRtbCArPVxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiV2VicGFjayArIFdlYnBhY2sgRGV2IFNlcnZlclwiLFxuICAgICAgICAgICAgICAgIFwiRVMyMDE1L0VTNiBzdXBwb3J0IHdpdGggQmFiZWwgbG9hZGVyIChjbGFzcywgaW1wb3J0KVwiLFxuICAgICAgICAgICAgICAgIFwiU0NTUyB0byBDU1MgY29tcGlsYXRpb25cIixcbiAgICAgICAgICAgICAgICBcIkNTUyBhbmQgSlMgbWluaWZpY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJDU1MgYXV0b3ByZWZpeGVyXCIsXG4gICAgICAgICAgICAgICAgXCJJbWFnZXMgbG9hZGVyIGFuZCBtaW5pZmljYXRpb25cIixcbiAgICAgICAgICAgICAgICBcIlNob3J0Y3V0IHRvICBwYXRocyAoYWxpYXNlcylcIixcbiAgICAgICAgICAgICAgICBcIlVnbGlmeUpTXCIsXG4gICAgICAgICAgICAgICAgXCJJbWFnZSBXZWJwYWNrIExvYWRlclwiLFxuICAgICAgICAgICAgICAgIFwiSG90LW1vZHVsZS1yZWxvYWRpbmcgc3VwcG9ydCBmb3Igc3R5bGVzXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRvbWF0aWMgY29kZSBhbmFseXppbmcgd2l0aCBFU0xpbnRcIlxuICAgICAgICAgICAgXS5qb2luKFwiPC9saT48bGk+XCIpO1xuXG4gICAgICAgIGh0bWwgKz0gXCI8L2xpPjwvdWw+XCI7XG5cbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxufVxuXG5cbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5pbWcuc3JjID0gYCR7d2ViTG9nb31gO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvXCIpLmFwcGVuZENoaWxkKGltZyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvXCIpLmlubmVySFRNTCA9IERlbW8ucmVuZGVySW50cm8oKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/web_logo.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy93ZWJfbG9nby5wbmc/ZTRlYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3dlYl9sb2dvLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9pbWFnZXMvd2ViX2xvZ28ucG5nXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("// removed by extract-text-webpack-plugin\n    if(false) {\n      // 1507797933206\n      var cssReload = require(\"../../../node_modules/css-hot-loader/hotModuleReplacement.js\")(module.id, {\"fileMap\":\"{fileName}\"});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL3N0eWxlcy5zY3NzPzU0NTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsMEdBQTBHLFlBQVksU0FBUyxFQUFFO0FBQ2pJO0FBQ0E7QUFDQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTA3Nzk3OTMzMjA2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);