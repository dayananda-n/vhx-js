!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VhxApi=e()}(this,function(){"use strict";function t(t,e){return e={exports:{}},t(e,e.exports),e.exports}function e(t){return null!==t&&"object"==typeof t}function r(t,e,r){return"function"==typeof r?new t("GET",e).end(r):2==arguments.length?new t("GET",e):new t(e,r)}function o(t){return i(t)&&t.method?t.method:t}function n(t){return t&&isNaN(parseInt(t,10))}function i(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function s(t){return t&&!!(t&&t.constructor&&t.call&&t.apply)}function a(t,e,r){return"products"===e.path?_(t,e,r):"videos"===e.path?_(t,e,r):"collections"===e.path?_(t,e,r):"customers"===e.path?_(t,e,r):"browse"===e.path?y(t,e):m(e)}var u={HOST:"api.vhx.tv",PROTOCOL:"https://",TIMEOUT:"30000",NODE:!1,TOKEN_EXPIRES_IN:"1800000"},h="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=t(function(t){function e(t){if(t)return r(t)}function r(t){for(var r in e.prototype)t[r]=e.prototype[r];return t}t.exports=e,e.prototype.on=e.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},e.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},e.prototype.off=e.prototype.removeListener=e.prototype.removeAllListeners=e.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var o,n=0;n<r.length;n++)if((o=r[n])===e||o.fn===e){r.splice(n,1);break}return this},e.prototype.emit=function(t){var e=this;this._callbacks=this._callbacks||{};var r=[].slice.call(arguments,1),o=this._callbacks["$"+t];if(o)for(var n=0,i=(o=o.slice(0)).length;n<i;++n)o[n].apply(e,r);return this},e.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},e.prototype.hasListeners=function(t){return!!this.listeners(t).length}}),p=e,l=t(function(t,e){e.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},e.parse=function(t){return this._parser=t,this},e.serialize=function(t){return this._serializer=t,this},e.timeout=function(t){return this._timeout=t,this},e.then=function(t,e){if(!this._fullfilledPromise){var r=this;this._fullfilledPromise=new Promise(function(t,e){r.end(function(r,o){r?e(r):t(o)})})}return this._fullfilledPromise.then(t,e)},e.catch=function(t){return this.then(void 0,t)},e.use=function(t){return t(this),this},e.get=function(t){return this._header[t.toLowerCase()]},e.getHeader=e.get,e.set=function(t,e){var r=this;if(p(t)){for(var o in t)r.set(o,t[o]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},e.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},e.field=function(t,e){var r=this;if(null===t||void 0===t)throw new Error(".field(name, val) name can not be empty");if(p(t)){for(var o in t)r.field(o,t[o]);return this}if(null===e||void 0===e)throw new Error(".field(name, val) val can not be empty");return this._getFormData().append(t,e),this},e.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},e.withCredentials=function(){return this._withCredentials=!0,this},e.redirects=function(t){return this._maxRedirects=t,this},e.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},e._isHost=function(t){switch({}.toString.call(t)){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}},e.send=function(t){var e=this,r=p(t),o=this._header["content-type"];if(r&&p(this._data))for(var n in t)e._data[n]=t[n];else"string"==typeof t?(o||this.type("form"),o=this._header["content-type"],this._data="application/x-www-form-urlencoded"==o?this._data?this._data+"&"+t:t:(this._data||"")+t):this._data=t;return!r||this._isHost(t)?this:(o||this.type("json"),this)}}),f=r,d=t(function(t){function e(){}function r(t){if(!p(t))return t;var e=[];for(var r in t)o(e,r,t[r]);return e.join("&")}function o(t,e,r){if(null!=r)if(Array.isArray(r))r.forEach(function(r){o(t,e,r)});else if(p(r))for(var n in r)o(t,e+"["+n+"]",r[n]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));else null===r&&t.push(encodeURIComponent(e))}function n(t){for(var e,r,o={},n=t.split("&"),i=0,s=n.length;i<s;++i)-1==(r=(e=n[i]).indexOf("="))?o[decodeURIComponent(e)]="":o[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return o}function i(t){var e,r,o,n,i=t.split(/\r?\n/),s={};i.pop();for(var a=0,u=i.length;a<u;++a)e=(r=i[a]).indexOf(":"),o=r.slice(0,e).toLowerCase(),n=b(r.slice(e+1)),s[o]=n;return s}function s(t){return/[\/+]json\b/.test(t)}function a(t){return t.split(/ *; */).shift()}function u(t){return t.split(/ *; */).reduce(function(t,e){var r=e.split(/ *= */),o=r.shift(),n=r.shift();return o&&n&&(t[o]=n),t},{})}function d(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this._setStatusProperties(this.xhr.status),this.header=this.headers=i(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function y(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new d(r)}catch(e){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=e,t.rawResponse=r.xhr&&r.xhr.responseText?r.xhr.responseText:null,t.statusCode=r.xhr&&r.xhr.status?r.xhr.status:null,r.callback(t)}r.emit("response",e);var o;try{(e.status<200||e.status>=300)&&((o=new Error(e.statusText||"Unsuccessful HTTP response")).original=t,o.response=e,o.status=e.status)}catch(t){o=t}o?r.callback(o,e):r.callback(null,e)})}function _(t,e){var r=v("DELETE",t);return e&&r.end(e),r}var m;"undefined"!=typeof window?m=window:"undefined"!=typeof self?m=self:(console.warn("Using browser-only version of superagent in non-browser environment"),m=h);var v=t.exports=f.bind(null,y);v.getXHR=function(){if(!(!m.XMLHttpRequest||m.location&&"file:"==m.location.protocol&&m.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Browser-only verison of superagent could not find XHR")};var b="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};v.serializeObject=r,v.parseString=n,v.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},v.serialize={"application/x-www-form-urlencoded":r,"application/json":JSON.stringify},v.parse={"application/x-www-form-urlencoded":n,"application/json":JSON.parse},d.prototype.get=function(t){return this.header[t.toLowerCase()]},d.prototype._setHeaderProperties=function(t){var e=this,r=this.header["content-type"]||"";this.type=a(r);var o=u(r);for(var n in o)e[n]=o[n]},d.prototype._parseBody=function(t){var e=v.parse[this.type];return!e&&s(this.type)&&(e=v.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null},d.prototype._setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},d.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,o="cannot "+e+" "+r+" ("+this.status+")",n=new Error(o);return n.status=this.status,n.method=e,n.url=r,n},v.Response=d,c(y.prototype);for(var w in l)y.prototype[w]=l[w];y.prototype.type=function(t){return this.set("Content-Type",v.types[t]||t),this},y.prototype.responseType=function(t){return this._responseType=t,this},y.prototype.accept=function(t){return this.set("Accept",v.types[t]||t),this},y.prototype.auth=function(t,e,r){switch(r||(r={type:"basic"}),r.type){case"basic":var o=btoa(t+":"+e);this.set("Authorization","Basic "+o);break;case"auto":this.username=t,this.password=e}return this},y.prototype.query=function(t){return"string"!=typeof t&&(t=r(t)),t&&this._query.push(t),this},y.prototype.attach=function(t,e,r){return this._getFormData().append(t,e,r||e.name),this},y.prototype._getFormData=function(){return this._formData||(this._formData=new m.FormData),this._formData},y.prototype.callback=function(t,e){var r=this._callback;this.clearTimeout(),r(t,e)},y.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},y.prototype._timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},y.prototype._appendQueryString=function(){var t=this._query.join("&");t&&(this.url+=~this.url.indexOf("?")?"&"+t:"?"+t)},y.prototype.end=function(t){var r=this,o=this,n=this.xhr=v.getXHR(),i=this._timeout,a=this._formData||this._data;this._callback=t||e,n.onreadystatechange=function(){if(4==n.readyState){var t;try{t=n.status}catch(e){t=0}if(0==t){if(o.timedout)return o._timeoutError();if(o._aborted)return;return o.crossDomainError()}o.emit("end")}};var u=function(t,e){e.total>0&&(e.percent=e.loaded/e.total*100),e.direction=t,o.emit("progress",e)};if(this.hasListeners("progress"))try{n.onprogress=u.bind(null,"download"),n.upload&&(n.upload.onprogress=u.bind(null,"upload"))}catch(t){}if(i&&!this._timer&&(this._timer=setTimeout(function(){o.timedout=!0,o.abort()},i)),this._appendQueryString(),this.username&&this.password?n.open(this.method,this.url,!0,this.username,this.password):n.open(this.method,this.url,!0),this._withCredentials&&(n.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof a&&!this._isHost(a)){var h=this._header["content-type"],c=this._serializer||v.serialize[h?h.split(";")[0]:""];!c&&s(h)&&(c=v.serialize["application/json"]),c&&(a=c(a))}for(var p in r.header)null!=r.header[p]&&n.setRequestHeader(p,r.header[p]);return this._responseType&&(n.responseType=this._responseType),this.emit("request",this),n.send(void 0!==a?a:null),this},v.Request=y,v.get=function(t,e,r){var o=v("GET",t);return"function"==typeof e&&(r=e,e=null),e&&o.query(e),r&&o.end(r),o},v.head=function(t,e,r){var o=v("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&o.send(e),r&&o.end(r),o},v.options=function(t,e,r){var o=v("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&o.send(e),r&&o.end(r),o},v.del=_,v.delete=_,v.patch=function(t,e,r){var o=v("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&o.send(e),r&&o.end(r),o},v.post=function(t,e,r){var o=v("POST",t);return"function"==typeof e&&(r=e,e=null),e&&o.send(e),r&&o.end(r),o},v.put=function(t,e,r){var o=v("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&o.send(e),r&&o.end(r),o}}),y=function(t,e){return i(t)?""+e._api.protocol+e._api.host+"/"+e.path:""+e._api.protocol+e._api.host+"/"+e.path+"?product="+t},_=function(t,e,r){return r&&r.scope&&"items"!==r.scope?t&&n(t)?t+"/"+r.scope:""+e._api.protocol+e._api.host+"/"+e.path+"/"+t+"/"+r.scope:t&&n(t)&&!s(t)&&!i(t)?t:!t||s(t)||i(t)?m(e):""+e._api.protocol+e._api.host+"/"+e.path+"/"+t},m=function(t){return""+t._api.protocol+t._api.host+"/"+t.path},v=function(t,e,r,o){this._api=t,this.methods=r,this.path=e,this.init()};v.prototype.init=function(){var t=this;this.methods.forEach(function(e){var r=o(e),n={http_method:"get",client_method:r};r.match(/files|items|watching|watchlist/)&&(n.scope=e),t[r]=function(e,r){return n.url=a(e,t,n),i(e)?n.options=e:n.options=r,t.createRequestParams(n)}})},v.prototype.getParams=function(t,e,r,o,n){var s={timeout:this._api.timeout,method:t,url:e};return i(r)&&(s.qs=r||null),this._api.auth&&(s.headers={Authorization:this._api.auth}),this._api.internal&&(s.headers={Authorization:"Bearer "+this._api.token}),s},v.prototype.createRequestParams=function(t){var e=this.getParams(t.client_method,t.url,t.options,t.scope,t.read_only);return this.ajaxRequest(t,e)},v.prototype.ajaxRequest=function(t,e){return new Promise(function(r,o){return function(){d[t.http_method](e.url).withCredentials().set(e.headers||{}).set("Content-Type","application/json").query(e.qs).then(function(t){t.ok&&r(t.body),o(t)}).catch(function(t){return o(t)})}()})};var b=function(t){function e(e){t.call(this,e,"collections",["all","retrieve","items"])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(v),w=function(t){function e(e){t.call(this,e,"videos",["all","retrieve","files"])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(v),x=function(t){function e(e){t.call(this,e,"customers",["retrieve","all","watching","watchlist"])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(v),T=function(t){function e(e){t.call(this,e,"browse",["list"])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(v),g={products:function(t){function e(e){t.call(this,e,"products",["retrieve","all"])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(v),browse:T,videos:w,collections:b,customers:x,analytics:function(t){function e(e){t.call(this,e,"analytics",["retrieve"])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(v)};"undefined"==typeof btoa&&(global.btoa=function(t){return new Buffer(t).toString("base64")});var E=function(t,e){void 0===e&&(e={}),this.api=e.internal?this.setToken(t,e):this.setApi(t,e),this.prepareResources()};return E.prototype.setApi=function(t,e){return void 0===e&&(e={}),{auth:"Basic "+btoa(t),host:e.host||u.HOST,protocol:e.protocol||u.PROTOCOL,timeout:u.TIMEOUT,token_expiration:null}},E.prototype.setToken=function(t,e){return void 0===e&&(e={}),{token:t,host:e.host||u.HOST,protocol:e.protocol||u.PROTOCOL,timeout:e.timeout||u.TIMEOUT,token_expiration:e.TOKEN_EXPIRES_IN||u.TOKEN_EXPIRES_IN,internal:!0}},E.prototype.prepareResources=function(){var t=this;for(var e in g)t[e[0].toLowerCase()+e.substring(1)]=new g[e](t.api)},E});
//# sourceMappingURL=client.js.map
