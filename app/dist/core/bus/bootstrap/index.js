"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ObserverContractNotHoneredError=require("./error/observer-contract-not-honered"),BusBootstrap=function(){function a(b,c,d){_classCallCheck(this,a),this.configuration=b,this.busFactory=c,this.locator=d}return _createClass(a,[{key:"bootstrap",value:function bootstrap(){var a=this.configuration.find("core.bus.channels"),b=this.busFactory.create();for(var d in a){b.addChannel(d);var e=this.configuration.find("core.bus.channels.".concat(d,".observers"));for(var f in e)for(var g in e[f])if(e[f][g]){var c=this.locator.locate(g);if("function"!=typeof c.observe)throw new ObserverContractNotHoneredError("\"".concat(g,"\" does not implement the BusObserver interface"));b.on({channelId:d,observer:c.observe.bind(c),event:f})}this.locator.set("core/bus",this.bus)}}}]),a}();module.exports=BusBootstrap;