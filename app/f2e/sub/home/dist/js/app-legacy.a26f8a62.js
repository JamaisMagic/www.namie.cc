(function(e){function t(t){for(var r,a,i=t[0],u=t[1],c=t[2],l=0,p=[];l<i.length;l++)a=i[l],o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function a(e){return i.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-76c838f8":"6ab5d747"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var s,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e),s=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");a.type=r,a.request=s,n[1](a)}o[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,u.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/sub/home/dist/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2856:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("d1e7");var r=n("2b0e"),o=n("ce5b"),s=n.n(o),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{staticClass:"blue",attrs:{app:"",light:"",fixed:!0}},[n("v-toolbar-side-icon",{attrs:{light:""}}),n("v-toolbar-title",{staticClass:"white--text"},[e._v("www.namie.cc")]),n("v-spacer"),n("v-toolbar-items"),n("GhIcon",{attrs:{light:""}})],1),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)},i=[],u={name:"App",components:{GhIcon:function(){return n.e("chunk-76c838f8").then(n.bind(null,"c9d8"))}}},c=u,l=(n("5c0b"),n("2877")),f=Object(l["a"])(c,a,i,!1,null,null,null);f.options.__file="App.vue";var p=f.exports,d=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-home"},[n("div",{staticClass:"text-xs-center"},[e._v("\n        Please enter your url and click the submit button.\n    ")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("v-text-field",{attrs:{autofocus:"",type:"url",placeholder:"Url here."},model:{value:e.longUrl,callback:function(t){e.longUrl=t},expression:"longUrl"}}),n("div",{staticClass:"text-xs-center"},[n("v-btn",{attrs:{round:"",large:"",color:"info",type:"submit",loading:e.isRequesting}},[e._v("Submit to shorten")])],1)],1),e.shortUrl?n("v-card",{attrs:{flat:""}},[n("v-card-text",{staticClass:"text-xs-center"},[e._v("\n            Short url is here:\n        ")]),n("v-card-text",{staticClass:"text-xs-center"},[n("a",{staticClass:"blue--text",attrs:{target:"_blank",href:e.shortUrl},domProps:{textContent:e._s(e.shortUrl)}})])],1):e._e()],1)},v=[],b=(n("96cf"),n("3040")),m=n("bc3a"),g=n.n(m),y=g.a.create({baseURL:"/",timeout:3e5});function w(e,t){return y.post(e,t).catch(function(e){return{}})}function x(e){return w("/api/shorten/",{url:e})}y.interceptors.request.use(function(e){return console.log("request",e),e}),y.interceptors.response.use(function(e){return console.log("response",e),e});var _={name:"home",data:function(){return{longUrl:"",isRequesting:!1,shortUrl:""}},components:{},methods:{onSubmit:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.isRequesting=!0,e.next=3,x(this.longUrl);case 3:if(t=e.sent,this.isRequesting=!1,n=t.data||{},0!==n.code){e.next=8;break}return e.abrupt("return",this.shortUrl=n.data.url);case 8:alert("error");case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},j=_,k=Object(l["a"])(j,h,v,!1,null,null,null);k.options.__file="Home.vue";var O=k.exports;r["default"].use(d["a"]);var U=new d["a"]({mode:"history",base:"/sub/home/dist/",routes:[{path:"/",name:"home",component:O}]}),C=n("2f62");r["default"].use(C["a"]);var P=new C["a"].Store({state:{},mutations:{},actions:{}}),S=n("9483");Object(S["a"])("".concat("/sub/home/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,r["default"].use(s.a),new r["default"]({router:U,store:P,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),o=n.n(r);o.a}});
//# sourceMappingURL=app-legacy.a26f8a62.js.map