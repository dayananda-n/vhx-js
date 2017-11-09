!function(t,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("superagent")):"function"==typeof define&&define.amd?define(["superagent"],o):t.VhxApi=o(t.request)}(this,function(t){"use strict";function o(t){return r(t)&&t.method?t.method:t}function e(t){return t&&isNaN(parseInt(t,10))}function r(t){var o=typeof t;return"function"===o||"object"===o&&!!t}function n(t){return t&&!!(t&&t.constructor&&t.call&&t.apply)}function i(t,o,e){return"products"===o.path?a(t,o,e):"videos"===o.path?a(t,o,e):"collections"===o.path?a(t,o,e):"customers"===o.path?a(t,o,e):"browse"===o.path?c(t,o):s(o)}t="default"in t?t.default:t;var p={HOST:"api.vhx.tv",PROTOCOL:"https://",TIMEOUT:"30000",NODE:!0,TOKEN_EXPIRES_IN:"1800000"},c=function(t,o){return r(t)?""+o._api.protocol+o._api.host+"/"+o.path:""+o._api.protocol+o._api.host+"/"+o.path+"?product="+t},a=function(t,o,i){return i&&i.scope&&"items"!==i.scope?t&&e(t)?t+"/"+i.scope:""+o._api.protocol+o._api.host+"/"+o.path+"/"+t+"/"+i.scope:t&&e(t)&&!n(t)&&!r(t)?t:!t||n(t)||r(t)?s(o):""+o._api.protocol+o._api.host+"/"+o.path+"/"+t},s=function(t){return""+t._api.protocol+t._api.host+"/"+t.path},u=function(t,o,e,r){this._api=t,this.methods=e,this.path=o,this.init()};u.prototype.init=function(){var t=this;this.methods.forEach(function(e){var n=o(e),p={http_method:"get",client_method:n};n.match(/files|items|watching|watchlist/)&&(p.scope=e),t[n]=function(o,e){return p.url=i(o,t,p),r(o)?p.options=o:p.options=e,t.createRequestParams(p)}})},u.prototype.getParams=function(t,o,e,n,i){var p={timeout:this._api.timeout,method:t,url:o};return r(e)&&(p.qs=e||null),this._api.auth&&(p.headers={Authorization:this._api.auth}),this._api.internal&&(p.headers={Authorization:"Bearer "+this._api.token}),p},u.prototype.createRequestParams=function(t){var o=this.getParams(t.client_method,t.url,t.options,t.scope,t.read_only);return this.ajaxRequest(t,o)},u.prototype.ajaxRequest=function(o,e){return new Promise(function(r,n){return function(){t[o.http_method](e.url).withCredentials().set(e.headers||{}).set("Content-Type","application/json").query(e.qs).then(function(t){t.ok&&r(t.body),n(t)}).catch(function(t){return n(t)})}()})};var h=function(t){function o(o){t.call(this,o,"collections",["all","retrieve","items","update","create"])}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o}(u),l=function(t){function o(o){t.call(this,o,"videos",["all","retrieve","files","create","update"])}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o}(u),f=function(t){function o(o){t.call(this,o,"customers",["retrieve","all","watching","watchlist","addProduct","removeProduct","update"])}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o}(u),_=function(t){function o(o){t.call(this,o,"browse",["list"])}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o}(u),d={products:function(t){function o(o){t.call(this,o,"products",["retrieve","all"])}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o}(u),browse:_,videos:l,collections:h,customers:f,analytics:function(t){function o(o){t.call(this,o,"analytics",["retrieve"])}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o}(u)};"undefined"==typeof btoa&&(global.btoa=function(t){return new Buffer(t).toString("base64")});var y=function(t,o){void 0===o&&(o={}),this.api=o.internal?this.setToken(t,o):this.setApi(t,o),this.prepareResources()};return y.prototype.setApi=function(t,o){return void 0===o&&(o={}),{auth:"Basic "+btoa(t),host:o.host||p.HOST,protocol:o.protocol||p.PROTOCOL,timeout:p.TIMEOUT,token_expiration:null}},y.prototype.setToken=function(t,o){return void 0===o&&(o={}),{token:t,host:o.host||p.HOST,protocol:o.protocol||p.PROTOCOL,timeout:o.timeout||p.TIMEOUT,token_expiration:o.TOKEN_EXPIRES_IN||p.TOKEN_EXPIRES_IN,internal:!0}},y.prototype.prepareResources=function(){var t=this;for(var o in d)t[o[0].toLowerCase()+o.substring(1)]=new d[o](t.api)},y});
//# sourceMappingURL=index.js.map
