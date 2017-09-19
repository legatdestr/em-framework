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
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _web_logo = __webpack_require__(1);\n\nvar _web_logo2 = _interopRequireDefault(_web_logo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n__webpack_require__(2);\n\n// demonstration of new feature - class declaration\nvar Demo = function () {\n    function Demo() {\n        _classCallCheck(this, Demo);\n    }\n\n    _createClass(Demo, [{\n        key: 'intro',\n        value: function intro() {\n            var introList = ['SCSS', 'autoprefixer', 'ES2015/ES6 support', 'UglifyJS', 'Image Webpack Loader'];\n            var html = '<ul><li>' + introList.join('</li><li>') + '</li></ul>';\n            return html;\n        }\n    }]);\n\n    return Demo;\n}();\n\nvar img = document.createElement('img');\nimg.src = '' + _web_logo2.default;\ndocument.querySelector('body').appendChild(img);\n\nvar demo = new Demo();\n\ndocument.querySelector('.intro').innerHTML = demo.intro();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRGVtbyIsImludHJvTGlzdCIsImh0bWwiLCJqb2luIiwiaW1nIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwiZGVtbyIsImlubmVySFRNTCIsImludHJvIl0sIm1hcHBpbmdzIjoiOzs7O0FBRUE7Ozs7Ozs7O0FBRkEsbUJBQUFBLENBQVEsQ0FBUjs7QUFJQTtJQUNNQyxJOzs7Ozs7O2dDQUNPO0FBQ0wsZ0JBQU1DLFlBQVksQ0FBQyxNQUFELEVBQVMsY0FBVCxFQUF5QixvQkFBekIsRUFBK0MsVUFBL0MsRUFBMkQsc0JBQTNELENBQWxCO0FBQ0EsZ0JBQU1DLE9BQU8sYUFBYUQsVUFBVUUsSUFBVixDQUFlLFdBQWYsQ0FBYixHQUEyQyxZQUF4RDtBQUNBLG1CQUFPRCxJQUFQO0FBQ0g7Ozs7OztBQUlMLElBQUlFLE1BQU1DLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBRixJQUFJRyxHQUFKO0FBQ0FGLFNBQVNHLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFdBQS9CLENBQTJDTCxHQUEzQzs7QUFFQSxJQUFNTSxPQUFPLElBQUlWLElBQUosRUFBYjs7QUFFQUssU0FBU0csYUFBVCxDQUF1QixRQUF2QixFQUFpQ0csU0FBakMsR0FBNkNELEtBQUtFLEtBQUwsRUFBN0MiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vYXNzZXRzL3N0eWxlc2hlZXRzL3N0eWxlcy5zY3NzJyk7XG5cbmltcG9ydCB3ZWJfbG9nbyBmcm9tICdpbWFnZXMvd2ViX2xvZ28nO1xuXG4vLyBkZW1vbnN0cmF0aW9uIG9mIG5ldyBmZWF0dXJlIC0gY2xhc3MgZGVjbGFyYXRpb25cbmNsYXNzIERlbW8ge1xuICAgIGludHJvICgpIHtcbiAgICAgICAgY29uc3QgaW50cm9MaXN0ID0gWydTQ1NTJywgJ2F1dG9wcmVmaXhlcicsICdFUzIwMTUvRVM2IHN1cHBvcnQnLCAnVWdsaWZ5SlMnLCAnSW1hZ2UgV2VicGFjayBMb2FkZXInXTtcbiAgICAgICAgY29uc3QgaHRtbCA9ICc8dWw+PGxpPicgKyBpbnRyb0xpc3Quam9pbignPC9saT48bGk+JykgKyAnPC9saT48L3VsPic7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbn1cblxuXG5sZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pbWcuc3JjPWAke3dlYl9sb2dvfWA7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoaW1nKTtcblxuY29uc3QgZGVtbyA9IG5ldyBEZW1vKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRybycpLmlubmVySFRNTCA9IGRlbW8uaW50cm8oKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/web_logo.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy93ZWJfbG9nby5wbmc/M2EyNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3dlYl9sb2dvLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9pbWFnZXMvd2ViX2xvZ28ucG5nXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("// removed by extract-text-webpack-plugin\n    if(false) {\n      // 1505826339794\n      var cssReload = require(\"../../../node_modules/css-hot-loader/hotModuleReplacement.js\")(module.id, {\"fileMap\":\"{fileName}\"});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL3N0eWxlcy5zY3NzPzFiYzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsMEdBQTBHLFlBQVksU0FBUyxFQUFFO0FBQ2pJO0FBQ0E7QUFDQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTA1ODI2MzM5Nzk0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);