(function(){"use strict";var n={8316:function(n,e,t){var r=t(144),o=function(){var n=this,e=n._self._c;return e("div",{staticClass:"container py-4",attrs:{id:"app"}},[e("Header"),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view",{key:n.rerender})],1)],1)},i=[],u=(t(7658),function(){var n=this,e=n._self._c;return e("div",{staticClass:"container"},[e("h1",[n._v("Welcome to Vue Forms")]),e("div",[e("button",{staticClass:"btn btn-primary m-1",on:{click:function(e){return n.$router.push({path:"/starter"})}}},[n._v(" Starter Form ")]),e("button",{staticClass:"btn btn-primary",on:{click:function(e){return n.$router.push({path:"/"})}}},[n._v(" Home ")])])])}),a=[],c={name:"HeaderVue"},f=c,s=t(1001),l=(0,s.Z)(f,u,a,!1,null,null,null),p=l.exports,d={name:"App",components:{Header:p}},v=d,m=(0,s.Z)(v,o,i,!1,null,null,null),b=m.exports,h=t(8345);r.ZP.use(h.Z);const g=[{path:"/",name:"Home",component:()=>t.e(268).then(t.bind(t,7892))},{path:"/starter",name:"starter",component:()=>t.e(268).then(t.bind(t,3956))}],y=new h.Z({routes:g});var k=y;r.ZP.config.productionTip=!1,new r.ZP({render:n=>n(b),router:k}).$mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,i){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(s--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/Home.b6e13a98.js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="vue-forms:";t.l=function(r,o,i,u){if(n[r])n[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",e+i),a.src=r),n[r]=[o];var p=function(e,t){a.onerror=a.onload=null,clearTimeout(d);var o=n[r];if(delete n[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(n){return n(t)})),e)return e(t)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/vue-forms/"}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(e),a=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(e){return 0!==n[e]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(e&&e(r);f<u.length;f++)i=u[f],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},r=self["webpackChunkvue_forms"]=self["webpackChunkvue_forms"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8316)}));r=t.O(r)})();
//# sourceMappingURL=app.be77b4cc.js.map