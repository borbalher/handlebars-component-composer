"use strict";function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Bootstrap=function(){function a(b){_classCallCheck(this,a),this.locator=b}return _createClass(a,[{key:"bootstrap",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(){var b,c,d,e;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:b=this.locator.locate("core/configuration"),c=b.find("core.bootstrap"),a.t0=regeneratorRuntime.keys(c);case 2:if((a.t1=a.t0()).done){a.next=9;break}return d=a.t1.value,e=this.locator.locate(c[d]),a.next=7,e.bootstrap();case 7:a.next=2;break;case 9:case"end":return a.stop();}},a,this)}));return function bootstrap(){return a.apply(this,arguments)}}()}]),a}();module.exports=Bootstrap;