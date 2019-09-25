"use strict";function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var InvalidStringError=require("./error/invalid"),SchemaValidatorString=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"valid",value:function valid(a,b){if("string"!=typeof b){var c="Invalid type: \"".concat(_typeof(b),"\", string expected");throw new InvalidStringError(c)}if(a["not-empty"]&&!b.length){throw new InvalidStringError("Must not be empty")}if("min"in a&&b.length<a.min){var d="String length must be minimum: \"".concat(a.min,"\" long");throw new InvalidStringError(d)}if("max"in a&&b.length>a.max){var e="String length can't be more then: \"".concat(a.max,"\" long");throw new InvalidStringError(e)}if(a["enum"]&&!a["enum"].includes(b)){var f="Expected one of the enumeral values: \"".concat(a["enum"],"\"");throw new InvalidStringError(f)}if(a.uppercase&&b!==b.toUpperCase()){throw new InvalidStringError("Upper case string expected")}if(a.lowercase&&b!==b.toLowerCase()){throw new InvalidStringError("Lower case string expected")}}}]),a}();module.exports=SchemaValidatorString;