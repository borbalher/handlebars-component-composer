"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Queue=function(){function a(b){var c=b.items;_classCallCheck(this,a),this.items=c,this[Symbol["for"]("schema")]="data-structure/queue"}return _createClass(a,[{key:"enqueue",value:function enqueue(a){this.items.push(a)}},{key:"dequeue",value:function dequeue(){return this.isEmpty()?void 0:this.items.shift()}},{key:"front",value:function front(){return this.isEmpty()?void 0:this.items[0]}},{key:"isEmpty",value:function isEmpty(){return 0===this.items.length}},{key:"reset",value:function reset(){this.items=[]}},{key:Symbol.toStringTag,get:function get(){return"Queue"}}]),a}();module.exports=Queue;