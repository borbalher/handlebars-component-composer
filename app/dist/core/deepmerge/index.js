"use strict";function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var DeepMerge=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"merge",value:function merge(d,a){for(var b=this._merge(d,a),e=arguments.length,f=Array(2<e?e-2:0),c=2;c<e;c++)f[c-2]=arguments[c];return f.length?this.merge.apply(this,[b,f[0]].concat(_toConsumableArray(f.slice(1)))):b}},{key:"_merge",value:function _merge(c,a){return"object"!==_typeof(c)||null===c?a:Array.isArray(c)?this._mergeArray(c,a):this._mergeObject(c,a)}},{key:"_mergeArray",value:function _mergeArray(c,a){return Array.isArray(a)?(c.push.apply(c,_toConsumableArray(a)),c):a}},{key:"_mergeObject",value:function _mergeObject(c,a){for(var b in a)c[b]=b in c?this._merge(c[b],a[b]):a[b];return c}}]),a}();module.exports=DeepMerge;