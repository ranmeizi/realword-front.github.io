!function(){function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var o,a,n=[],i=!0,c=!1;try{for(e=e.call(t);!(i=(o=e.next()).done)&&(n.push(o.value),!r||n.length!==r);i=!0);}catch(l){c=!0,a=l}finally{try{i||null==e.return||e.return()}finally{if(c)throw a}}return n}(t,r)||f(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function o(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,r,e){return r&&o(t.prototype,r),e&&o(t,e),t}function n(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&i(t,r)}function i(t,r){return(i=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function c(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=s(t);if(r){var a=s(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return l(this,e)}}function l(r,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(r)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,o)}return e}function u(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?p(Object(e),!0).forEach((function(r){b(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function b(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function f(t,r){if(t){if("string"==typeof t)return m(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(t,r):void 0}}function m(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=t[e];return o}var h=document.createElement("style");h.innerHTML='body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,"Courier New",monospace}.f-r{display:flex;flex-direction:row}.f-c{display:flex;flex-direction:column}.j-center{justify-content:center}.j-start{justify-content:flex-start}.j-end{justify-content:flex-end}.j-around{justify-content:space-around}.j-between{justify-content:space-between}.a-center{align-items:center}.a-start{align-items:flex-start}.a-end{align-items:flex-end}.f-w{flex-wrap:wrap}.rvt-body-dark .rvt-app{background-color:#363636;transition:.3s}.rvt-body-dark .rvt-app .am-tab-bar{position:fixed;bottom:0;width:100%;height:50px;z-index:3000}.rvt-body-dark .rvt-app .am-tab-bar .am-tab-bar-bar{transition:.3s}.rvt-body-dark .rvt-app .am-tab-bar .am-tab-bar-bar:before{background-color:#363636;transition:.3s}.rvt-body-dark .rvt-app .am-navbar{position:fixed;height:36px;top:0;width:100%;z-index:3000;background-color:#3f3f3f;color:#868686;box-shadow:0 0 5px 2px #363636}.rvt-body-dark .rvt-app .am-navbar .am-navbar-title{color:#aeaeae;font-size:14px}.rvt-body-dark .rvt-app .am-list-body:before,.rvt-body-dark .rvt-app .am-list-body:after{background-color:#363636}.rvt-body-dark .rvt-app .am-tabs-default-bar{background-color:#3f3f3f!important}.rvt-body-dark .rvt-app .am-tabs-default-bar .am-tabs-default-bar-prevpage,.rvt-body-dark .rvt-app .am-tabs-default-bar .am-tabs-default-bar-nextpage{display:none}.rvt-body-dark .rvt-app .am-tabs-default-bar .am-tabs-default-bar-tab{color:#b1b1b1}.rvt-body-dark .rvt-app .am-tabs-default-bar .am-tabs-default-bar-tab:after{background-color:transparent!important}.rvt-body-dark .rvt-app .am-tabs-default-bar .am-tabs-default-bar-tab-active{color:#da7561}.rvt-body-dark .rvt-app .am-tabs-default-bar .am-tabs-default-bar-underline{border:1px #da7561 solid;transform-origin:center;transform:scaleX(.4)}.rvt-body-dark .rvt-app input,.rvt-body-dark .rvt-app textarea{color:#b1b1b1!important;caret-color:#da7561}.rvt-body-dark .rvt-app input::placeholder,.rvt-body-dark .rvt-app textarea::placeholder{color:#868686}.rvt-body-dark .rvt-app .am-list-item{padding-right:15px;background-color:#3f3f3f}.rvt-body-dark .rvt-app .am-list-item .am-textarea-label,.rvt-body-dark .rvt-app .am-list-item .am-input-label{font-size:14px;color:#b1b1b1}.rvt-body-dark .rvt-app .am-list-item .am-list-content{color:#b1b1b1;font-size:14px}.rvt-body-dark .rvt-app .am-list-item .am-list-line{padding-right:0}.rvt-body-dark .rvt-app .am-list-item .am-list-line:after{background-color:#363636!important}.rvt-body-dark .rvt-app .am-switch{right:8px}.rvt-body-dark .rvt-app .am-switch .checkbox{height:14px;width:32px;background-color:#363636}.rvt-body-dark .rvt-app .am-switch .checkbox:before{width:32px;height:16px;top:0px;left:-1px;background-color:#4d4d4d1a}.rvt-body-dark .rvt-app .am-switch .checkbox:after{height:18px;width:18px;top:-2px;left:-6px}.rvt-body-dark .rvt-app .am-switch input[type=checkbox]:checked+.checkbox{background-color:#da7561}.rvt-body-dark .rvt-app .am-switch input[type=checkbox]:checked+.checkbox:before{transform:scale(1);background-color:#4d4d4db3}.rvt-body-dark .rvt-app .am-switch input[type=checkbox]:checked+.checkbox:after{background-color:#da7561}.rvt-body-dark .rvt-app .divider{height:1px;width:100%;background-color:#363636;margin:16px 0}.rvt-body-dark .tag{display:inline-block;margin-right:8px;height:24px;line-height:24px;color:#da7561;padding:0 8px;position:relative}.rvt-body-dark .tag:before{position:absolute;height:100%;width:100%;content:"";left:0;top:0;background-color:#da7561;border-radius:12px;opacity:.3}.rvt-body-dark .tag:after{position:absolute;border-radius:12px;box-sizing:border-box;height:100%;width:100%;content:"";left:0;top:0;border:1px solid #da7561;opacity:.7}.rvt-body-dark .fcList .am-list-body{height:100%;display:flex;flex-direction:column}.rvt-body-dark .fcList .f1{flex:1}.rvt-body-dark .am-modal-content{background-color:#3f3f3f}.rvt-body-dark .am-modal-content .am-modal-title{font-size:16px;color:#aeaeae}.rvt-body-dark .am-modal-content .am-modal-alert-content{font-size:14px;color:#b1b1b1}.rvt-body-dark .am-modal-content .am-modal-button-group-normal:before{background-color:#363636}.rvt-body-dark .am-modal-content .am-modal-button-group-normal .am-modal-button{font-size:14px;color:#da7561}.rvt-body-dark .am-modal-content .am-modal-button-group-normal .am-modal-button.am-modal-button-active{transition:.3s;background-color:#da7561;opacity:.5;color:#fff}.rvt-body-dark .am-modal-content .am-modal-button-group-normal .am-modal-button:first-child{color:#868686}.rvt-body-dark .am-modal-content .am-modal-button-group-normal .am-modal-button:last-child:before{background-color:#363636}.rvt-body-dark .am-textarea-item{background-color:#363636}.rvt-body-dark .am-textarea-item:after{background-color:transparent!important}.rvt-body-dark .am-textarea-item textarea{font-size:12px;color:#b1b1b1}.rvt-body-dark .ka-wrapper{position:fixed;height:100vh;height:calc(100vh - var(--vh-offset, 0px));width:100vw;top:0;left:0}.rvt-body-dark .rvt-headerview{height:100vh;height:calc(100vh - var(--vh-offset, 0px));padding-top:45px;box-sizing:border-box;overflow-y:scroll}.rvt-body-dark .rvt-tabview{height:100vh;height:calc(100vh - var(--vh-offset, 0px));padding-bottom:50px;box-sizing:border-box;overflow-y:scroll}.rvt-body-dark .transition-group .forward-enter{opacity:0;transform:translate(100%)}.rvt-body-dark .transition-group .forward-enter-active{opacity:1;transform:translate(0);transition:all .5s}.rvt-body-dark .transition-group .forward-exit{opacity:1;transform:translate(0)}.rvt-body-dark .transition-group .forward-exit-active{opacity:0;transform:translate(-100%);transition:all .5s}.rvt-body-dark .transition-group .back-enter{opacity:0;transform:translate(-100%)}.rvt-body-dark .transition-group .back-enter-active{opacity:1;transform:translate(0);transition:all .5s}.rvt-body-dark .transition-group .back-exit{opacity:1;transform:translate(0)}.rvt-body-dark .transition-group .back-exit-active{opacity:0;transform:translate(100%);transition:all .5s}.rvt-body-light .rvt-app{background-color:#f5f5f5;transition:.3s}.rvt-body-light .rvt-app .am-tab-bar{position:fixed;bottom:0;width:100%;height:50px;z-index:3000}.rvt-body-light .rvt-app .am-tab-bar .am-tab-bar-bar{transition:.3s}.rvt-body-light .rvt-app .am-tab-bar .am-tab-bar-bar:before{background-color:#f5f5f5;transition:.3s}.rvt-body-light .rvt-app .am-navbar{position:fixed;height:36px;top:0;width:100%;z-index:3000;background-color:#fff;color:#9c9c9c;box-shadow:0 0 5px 2px #f5f5f5}.rvt-body-light .rvt-app .am-navbar .am-navbar-title{color:#2f2f2f;font-size:14px}.rvt-body-light .rvt-app .am-list-body:before,.rvt-body-light .rvt-app .am-list-body:after{background-color:#f5f5f5}.rvt-body-light .rvt-app .am-tabs-default-bar{background-color:#fff!important}.rvt-body-light .rvt-app .am-tabs-default-bar .am-tabs-default-bar-prevpage,.rvt-body-light .rvt-app .am-tabs-default-bar .am-tabs-default-bar-nextpage{display:none}.rvt-body-light .rvt-app .am-tabs-default-bar .am-tabs-default-bar-tab{color:#565656}.rvt-body-light .rvt-app .am-tabs-default-bar .am-tabs-default-bar-tab:after{background-color:transparent!important}.rvt-body-light .rvt-app .am-tabs-default-bar .am-tabs-default-bar-tab-active{color:#da7561}.rvt-body-light .rvt-app .am-tabs-default-bar .am-tabs-default-bar-underline{border:1px #da7561 solid;transform-origin:center;transform:scaleX(.4)}.rvt-body-light .rvt-app input,.rvt-body-light .rvt-app textarea{color:#565656!important;caret-color:#da7561}.rvt-body-light .rvt-app input::placeholder,.rvt-body-light .rvt-app textarea::placeholder{color:#9c9c9c}.rvt-body-light .rvt-app .am-list-item{padding-right:15px;background-color:#fff}.rvt-body-light .rvt-app .am-list-item .am-textarea-label,.rvt-body-light .rvt-app .am-list-item .am-input-label{font-size:14px;color:#565656}.rvt-body-light .rvt-app .am-list-item .am-list-content{color:#565656;font-size:14px}.rvt-body-light .rvt-app .am-list-item .am-list-line{padding-right:0}.rvt-body-light .rvt-app .am-list-item .am-list-line:after{background-color:#f5f5f5!important}.rvt-body-light .rvt-app .am-switch{right:8px}.rvt-body-light .rvt-app .am-switch .checkbox{height:14px;width:32px;background-color:#f5f5f5}.rvt-body-light .rvt-app .am-switch .checkbox:before{width:32px;height:16px;top:0px;left:-1px;background-color:#4d4d4d1a}.rvt-body-light .rvt-app .am-switch .checkbox:after{height:18px;width:18px;top:-2px;left:-6px}.rvt-body-light .rvt-app .am-switch input[type=checkbox]:checked+.checkbox{background-color:#da7561}.rvt-body-light .rvt-app .am-switch input[type=checkbox]:checked+.checkbox:before{transform:scale(1);background-color:#4d4d4db3}.rvt-body-light .rvt-app .am-switch input[type=checkbox]:checked+.checkbox:after{background-color:#da7561}.rvt-body-light .rvt-app .divider{height:1px;width:100%;background-color:#f5f5f5;margin:16px 0}.rvt-body-light .tag{display:inline-block;margin-right:8px;height:24px;line-height:24px;color:#da7561;padding:0 8px;position:relative}.rvt-body-light .tag:before{position:absolute;height:100%;width:100%;content:"";left:0;top:0;background-color:#da7561;border-radius:12px;opacity:.3}.rvt-body-light .tag:after{position:absolute;border-radius:12px;box-sizing:border-box;height:100%;width:100%;content:"";left:0;top:0;border:1px solid #da7561;opacity:.7}.rvt-body-light .fcList .am-list-body{height:100%;display:flex;flex-direction:column}.rvt-body-light .fcList .f1{flex:1}.rvt-body-light .am-modal-content{background-color:#fff}.rvt-body-light .am-modal-content .am-modal-title{font-size:16px;color:#2f2f2f}.rvt-body-light .am-modal-content .am-modal-alert-content{font-size:14px;color:#565656}.rvt-body-light .am-modal-content .am-modal-button-group-normal:before{background-color:#f5f5f5}.rvt-body-light .am-modal-content .am-modal-button-group-normal .am-modal-button{font-size:14px;color:#da7561}.rvt-body-light .am-modal-content .am-modal-button-group-normal .am-modal-button.am-modal-button-active{transition:.3s;background-color:#da7561;opacity:.5;color:#fff}.rvt-body-light .am-modal-content .am-modal-button-group-normal .am-modal-button:first-child{color:#9c9c9c}.rvt-body-light .am-modal-content .am-modal-button-group-normal .am-modal-button:last-child:before{background-color:#f5f5f5}.rvt-body-light .am-textarea-item{background-color:#f5f5f5}.rvt-body-light .am-textarea-item:after{background-color:transparent!important}.rvt-body-light .am-textarea-item textarea{font-size:12px;color:#565656}.rvt-body-light .ka-wrapper{position:fixed;height:100vh;height:calc(100vh - var(--vh-offset, 0px));width:100vw;top:0;left:0}.rvt-body-light .rvt-headerview{height:100vh;height:calc(100vh - var(--vh-offset, 0px));padding-top:45px;box-sizing:border-box;overflow-y:scroll}.rvt-body-light .rvt-tabview{height:100vh;height:calc(100vh - var(--vh-offset, 0px));padding-bottom:50px;box-sizing:border-box;overflow-y:scroll}.rvt-body-light .transition-group .forward-enter{opacity:0;transform:translate(100%)}.rvt-body-light .transition-group .forward-enter-active{opacity:1;transform:translate(0);transition:all .5s}.rvt-body-light .transition-group .forward-exit{opacity:1;transform:translate(0)}.rvt-body-light .transition-group .forward-exit-active{opacity:0;transform:translate(-100%);transition:all .5s}.rvt-body-light .transition-group .back-enter{opacity:0;transform:translate(-100%)}.rvt-body-light .transition-group .back-enter-active{opacity:1;transform:translate(0);transition:all .5s}.rvt-body-light .transition-group .back-exit{opacity:1;transform:translate(0)}.rvt-body-light .transition-group .back-exit-active{opacity:0;transform:translate(100%);transition:all .5s}.user-img{height:36px;width:36px;border-radius:18px;object-fit:cover}.user-img.md{height:48px;width:48px;border-radius:24px}.user-img.lg{height:64px;width:64px;border-radius:32px}\n',document.head.appendChild(h),System.register(["./vendor-legacy.c5e93638.js"],(function(t,o){"use strict";var i,l,s,p,f,m,h,v,g,y,x,k,w,E,O,j,C,S,z,T,_,A,P,H,I,M,N,L,R,B;return{setters:[function(t){i=t.R,l=t.I,s=t.a,p=t.u,f=t.b,m=t.r,h=t.c,v=t.w,g=t.d,y=t.m,x=t.T,k=t.C,w=t.S,E=t.e,O=t.f,j=t.g,C=t.h,S=t.p,z=t.i,T=t.j,_=t.t,A=t.A,P=t._,H=t.k,I=t.l,M=t.L,N=t.v,L=t.B,R=t.P,B=t.n}],execute:function(){var D;t({c:K,m:function(t){return function(){var r=ft();return h.exports.useMemo((function(){return t(r)}),[r])}},o:function(){if(Y)return;F||(F=document.createElement("div"),document.body.appendChild(F));Y=!0,s.render(i.createElement(G,null),F)}});var U={root:{height:"".concat(window.innerHeight-76,"px"),width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:"36px"}};function G(){return i.createElement("div",{className:"rvt-loading",style:U.root},i.createElement(l,{type:"loading"}))}var F=null,Y=!1;function K(){F&&(Y=!1,s.unmountComponentAtNode(F))}window.addEventListener("popstate",(function(){K()}));var X={PUSH:"forward",POP:"back"};var W=v((function(t){var r=t.routes,e=t.location,o=t.history,a=h.exports.useMemo((function(){var t=r.find((function(t){return y(e.pathname,t)}));return null!=t&&t.isTransition?t.path:"notransition"}),[e.pathname]);return i.createElement(x,{className:"transition-group",childFactory:function(t){return i.cloneElement(t,{classNames:X[o.action]})}},i.createElement(k,{timeout:500,key:a},i.createElement(w,{location:e},q(r))))}));function $(t){var r=h.exports.useMemo((function(){return t.match.url}),[]);return function(t){var r=t.name,e=t.match,o=p(),a=f(),n=m.exports.useAliveController().refresh;h.exports.useEffect((function(){"PUSH"===o.action&&e.url===r&&(n(r),console.log("我应该ger屁了"))}),[a.pathname])}({name:r,match:t.match}),i.createElement(m.exports.KeepAlive,{id:r,name:r},t.children)}function q(t){return t.map((function(t,r){var e,o=g,a=t.render?t.render:function(r){var e=t.component;return i.createElement(h.exports.Suspense,{fallback:i.createElement(G,null)},i.createElement(e,u({},r)))};return t.isCache&&(e=a,a=function(t){return i.createElement($,u({},t),e(t))}),i.createElement(o,{key:r,path:t.path,exact:t.exact,strict:t.strict,render:function(r){return a(u(u({},r),{},{route:t}))}})}))}var J=function(t){n(o,t);var r=c(o);function o(){var t;e(this,o);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return b(d(t=r.call.apply(r,[this].concat(n))),"state",{hasError:!1}),t}return a(o,[{key:"render",value:function(){var t=this.state.hasError;return i.createElement("div",{style:{height:"100%",width:"100%"}},t?i.createElement("div",null,"出错啦"):i.createElement(W,u({},this.props.route)))}}],[{key:"getDerivedStateFromError",value:function(t){return{hasError:!0}}}]),o}(h.exports.PureComponent),Q=function(t,r){return t()},V=function(){function t(){e(this,t)}return a(t,null,[{key:"getModule",value:function(t,r){return"default"===r?t:t.then((function(t){return{default:t[r]}}))}}]),t}(),Z=function(t){n(i,t);var r=c(i);function i(){return e(this,i),r.apply(this,arguments)}return a(i,[{key:"get",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return i._instance||(i._instance=Q((function(){return o.import("./Article-legacy.1247aa18.js")}))),V.getModule(i._instance,t)}}]),i}(V);b(Z,"_instance",null);var tt=function(t){n(i,t);var r=c(i);function i(){return e(this,i),r.apply(this,arguments)}return a(i,[{key:"get",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return i._instance||(i._instance=Q((function(){return o.import("./User-legacy.e56bc8c8.js")}))),V.getModule(i._instance,t)}}]),i}(V);b(tt,"_instance",null);var rt=Object.freeze((b(D={__proto__:null},Symbol.toStringTag,"Module"),b(D,"THEME_CHANGE","THEME_CHANGE"),b(D,"HISTORY_BACK_CLOSE_LOADING","HISTORY_BACK_CLOSE_LOADING"),D)),et=function(){function t(){e(this,t),b(this,"events",{})}return a(t,[{key:"on",value:function(t,r){var e;(null===(e=this.events[t])||void 0===e?void 0:e.length)>0?this.events[t].push(r):this.events[t]=[r]}},{key:"un",value:function(t,r){if(!this.events[t])return console.warn("enentbus error,eventname:".concat(t," is not in enents"));var e=this.events[t].findIndex((function(t){return t===r}));if(e<0)return console.warn("enentbus error,un can`t find fn in events");this.events[t].splice(e,1)}},{key:"emit",value:function(t,r){if(!this.events[t])return console.warn("enentbus error,eventname:".concat(t," is not in enents"));this.events[t].forEach((function(t){return t(r)}))}}]),t}();b(et,"TYPES",rt);var ot=new et,at=t("a","SET_THEME"),nt=t("S","SET_UINFO"),it=t("C","CLEAR_UINFO"),ct={theme:"dark",appTab:"",hideTabbar:!1,hideHeader:!1,uinfo:{}};var lt=E({app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case at:return u(u({},t),{},{theme:r.data});case nt:return u(u({},t),{},{uinfo:r.data});case it:return u(u({},t),{},{uinfo:{}});default:return t}}}),dt=t("s",O(S({key:"root",storage:T},lt),j(C(_),window&&window.devToolsExtension?window.devToolsExtension():function(t){return t}))),st=z(dt),pt=et.TYPES,ut={light:{bg:{pri:"#ffffff",sec:"#f5f5f5"},fc:{header:"#2f2f2f",text:"#565656",desc:"#9c9c9c",active:"#da7561"},transition:"300ms"},dark:{bg:{pri:"#3f3f3f",sec:"#363636"},fc:{header:"#aeaeae",text:"#b1b1b1",desc:"#868686",active:"#da7561"},transition:"300ms"}},bt=t("t",(function(t){ot.emit(pt.THEME_CHANGE,t)}));function ft(){var t=r(h.exports.useState(dt.getState().app.theme),2),e=t[0],o=t[1];return h.exports.useEffect((function(){return ot.on(pt.THEME_CHANGE,o),function(){return ot.un(pt.THEME_CHANGE,o)}}),[]),ut[e]}var mt={home:"/f/home",user:"/f/user"};var ht=new Z,vt=new tt,gt=[{path:"/",component:J,routes:[{path:"/",exact:!0,render:function(){return i.createElement(I,{to:"/f/home"})}},{path:"/f",isCache:!0,isTransition:!0,component:function(t){var e=r(h.exports.useState("home"),2),o=e[0],a=e[1],n=ft(),c=p();return h.exports.useEffect((function(){c.replace(mt[o])}),[o]),i.createElement("div",{style:{position:"fixed",width:"100%",bottom:0,zIndex:3e3}},i.createElement("div",{className:"rvt-tabview"},q(t.route.routes)),i.createElement(A,{unselectedTintColor:n.fc.text,tintColor:n.fc.active,barTintColor:n.bg.pri,noRenderContent:!0},i.createElement(A.Item,{title:"首页",key:"home",icon:i.createElement(P,null),selectedIcon:i.createElement(P,null),selected:"home"===o,onPress:function(){return a("home")}}),i.createElement(A.Item,{icon:i.createElement(H,null),selectedIcon:i.createElement(H,null),title:"我的",key:"user",selected:"user"===o,onPress:function(){return a("user")}})))},routes:[{path:"/f/home",isCache:!0,component:h.exports.lazy((function(){return ht.get()}))},{path:"/f/user",isCache:!0,component:h.exports.lazy((function(){return vt.get()}))}]},{path:["/edit","/edit/:slug"],isCache:!0,isTransition:!0,component:h.exports.lazy((function(){return ht.get("Edit")}))},{path:"/posts/:slug",isCache:!0,isTransition:!0,component:h.exports.lazy((function(){return ht.get("Posts")}))},{path:"/test",component:function(){return i.createElement("div",null,i.createElement(M,{to:"/f/home"},"Article"),"/",i.createElement(M,{to:"/f/user"},"User"))}},{path:"/realworld-login",isCache:!0,isTransition:!0,component:h.exports.lazy((function(){return vt.get("RealWorldLogin")}))},{path:"/register",isCache:!0,isTransition:!0,component:h.exports.lazy((function(){return vt.get("Register")}))},{path:"/login",isCache:!0,isTransition:!0,component:h.exports.lazy((function(){return vt.get("Login")}))},{path:"/profile/:username",isCache:!0,isTransition:!0,component:h.exports.lazy((function(){return ht.get("Profile")}))},{path:"/myArticles/:type",isCache:!0,isTransition:!0,component:h.exports.lazy((function(){return ht.get("MyArticles")}))},{path:"/account/:username",isCache:!0,isTransition:!0,component:h.exports.lazy((function(){return vt.get("Account")}))}]}];var yt={routeBasename:"/ranmeizi/realword-front.github.io"};!global&&window&&window.rvtConfig&&Object.assign(yt,window.rvtConfig),N();var xt={app:{height:window.innerHeight+"px"}};function kt(){return h.exports.useEffect((function(){!function(){var t=dt.getState().app.theme;bt(t),document.body.className="rvt-body-"+t}()}),[]),i.createElement("div",{className:"rvt-app",style:xt.app},i.createElement(L,{basename:yt.routeBasename},q(gt)))}s.render(i.createElement(R,{store:dt},i.createElement(B,{loading:null,persistor:st},i.createElement(m.exports.AliveScope,null,i.createElement(kt,null)))),document.getElementById("root"))}}}))}();
