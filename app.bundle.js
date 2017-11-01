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


var _require = __webpack_require__(1),
    upperCaseAndUnderscoreFormatter = _require.upperCaseAndUnderscoreFormatter,
    camelCaseFormatter = _require.camelCaseFormatter;

var _require2 = __webpack_require__(2),
    constantsTemplate = _require2.constantsTemplate,
    actionsTemplate = _require2.actionsTemplate;

var input = document.getElementById('input');
var constantsResult = document.getElementById('constants-result');
var actionsResult = document.getElementById('actions-result');

input.addEventListener('input', function (e) {
  var value = e.target.value;

  var upperCased = upperCaseAndUnderscoreFormatter(value);
  var camelCased = camelCaseFormatter(value);
  var constantsCode = constantsTemplate(upperCased);
  var actionsCode = actionsTemplate(upperCased, camelCased);
  constantsResult.innerHTML = constantsCode;
  actionsResult.innerHTML = actionsCode;
}, false);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function upperCaseAndUnderscoreFormatter(value) {
  return value.replace(/\s/g, '_').toUpperCase();
}

function camelCaseFormatter(value) {
  return value.replace(/\s\w{1}/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

module.exports = {
  upperCaseAndUnderscoreFormatter: upperCaseAndUnderscoreFormatter,
  camelCaseFormatter: camelCaseFormatter
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var STATUSES = ['REQUESTED', 'SUCCEEDED', 'FAILED'];

function constantsTemplate(ACTIONTYPE) {
  var objectContent = STATUSES.reduce(function (accum, currentVal) {
    return accum + ' ' + currentVal + ': \'' + ACTIONTYPE + '_' + currentVal + '\',';
  }, '');
  return 'export const ' + ACTIONTYPE + ' = {' + objectContent + '}';
}

function actionTemplate(ACTIONTYPE, actionType, status) {
  var formattedStatus = status.charAt(0) + status.slice(1).toLowerCase();
  return 'export function ' + actionType + formattedStatus + '() { return { type: ' + ACTIONTYPE + '.' + status + ' } }';
}

function actionsTemplate(ACTIONTYPE, actionType) {
  return STATUSES.map(function (status) {
    return actionTemplate(ACTIONTYPE, actionType, status);
  }).join('\n');
}

module.exports = {
  STATUSES: STATUSES,
  constantsTemplate: constantsTemplate,
  actionTemplate: actionTemplate,
  actionsTemplate: actionsTemplate
};

/***/ })
/******/ ]);