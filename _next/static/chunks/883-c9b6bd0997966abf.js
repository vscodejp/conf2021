(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{3579:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,o=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=r({},o,e));!1;(o=r({},o,t)).suspense&&(delete o.ssr,delete o.loading);o.loadableGenerated&&delete(o=r({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,i(n,o);delete o.ssr}return n(o)},t.noSSR=i;var r=n(6495).Z,o=n(2648).Z,a=(o(n(1720)),o(n(3668)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3982:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(1720)).default.createContext(null);t.LoadableContext=r},3668:function(e,t,n){"use strict";var r=n(3227),o=n(8361);function a(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(6495).Z,u=(0,n(2648).Z)(n(1720)),c=n(3982),s=n(1720).useSyncExternalStore,d=[],f=[],h=!1;function _(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function b(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=u.default.lazy(n.loader));var r=null;function o(){if(!r){var t=new p(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!h){var i=n.webpack?n.webpack():n.modules;i&&f.push((function(e){var t,n=a(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(l){n.e(l)}finally{n.f()}}))}function d(){o();var e=u.default.useContext(c.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach((function(t){e(t)}))}var _=n.suspense?function(e,t){return d(),u.default.createElement(n.lazy,l({},e,{ref:t}))}:function(e,t){d();var o=s(r.subscribe,r.getCurrentValue,r.getCurrentValue);return u.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),u.default.useMemo((function(){return o.loading||o.error?u.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:r.retry}):o.loaded?u.default.createElement((t=o.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,o])};return _.preload=function(){return o()},_.displayName="LoadableComponent",u.default.forwardRef(_)}(_,e)}function v(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return v(e,t)}))}b.preloadAll=function(){return new Promise((function(e,t){v(d).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return h=!0,t()};v(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var y=b;t.default=y},2689:function(e,t,n){"use strict";n.d(t,{e:function(){return u},z:function(){return l}});n(1720);var r=n(7665),o=n.n(r),a=n(3064),i=n(7997),l=function(e){var t=e.path,n=e.tooltip,r=e.isExternalLink,a=e.children;return(0,i.tZ)("a",{href:t,title:n,target:r&&"_blank",rel:r&&"noopener noreferrer",className:o().button,role:"button",children:a})},u=function(e){var t=e.path,n=e.tooltip,r=e.isExternalLink,l=e.showSpaces,u=e.children;return(0,i.BX)("a",{href:t,title:n,target:r&&"_blank",rel:r&&"noopener noreferrer",className:o().tweet_button,style:l?{backgroundColor:"#8f5dfc"}:{backgroundColor:"#1da1f2"},role:"button",children:[u,(0,i.tZ)("div",{className:o().icon_wrapper,children:(0,i.tZ)(a.u,{})})]})}},8099:function(e,t,n){"use strict";var r=n(4595),o=n(8060),a=n.n(o),i=n(2586),l=n(7997);t.Z=function(){var e=r.ZP.language.substring(0,2);return(0,l.BX)("footer",{className:a().footer,children:[(0,l.BX)("p",{className:a().contact,children:[(0,l.tZ)("a",{href:"/".concat(e,"/code-for-conduct"),"aria-label":"Link to Code for Conduct","aria-describedby":r.ZP.t("code_of_conduct"),children:r.ZP.t("code_of_conduct")}),(0,l.tZ)("a",{href:"/".concat(e,"/privacy-policy"),"aria-label":"Link to Privacy Policy","aria-describedby":r.ZP.t("privacy_policy"),children:r.ZP.t("privacy_policy")}),(0,l.tZ)("a",{href:"/".concat(e,"/contact"),"aria-label":"Link to Contact","aria-describedby":r.ZP.t("contact"),children:r.ZP.t("contact")}),(0,l.tZ)("a",{href:"/".concat(e,"/pre-event"),"aria-label":"Link to Pre Event","aria-describedby":r.ZP.t("pre_event"),children:r.ZP.t("pre_event")})]}),(0,l.tZ)("p",{className:a().copyright,children:"Created \xa9 2021 ".concat(i.Ax,". All Rights Reserved.")})]})}},3064:function(e,t,n){"use strict";n.d(t,{D:function(){return o},u:function(){return a}});var r=n(7997),o=function(){return(0,r.tZ)("svg",{version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",children:(0,r.BX)("g",{children:[(0,r.tZ)("path",{className:"st0",d:"M332.998,291.918c52.2-71.895,45.941-173.338-18.834-238.123c-71.736-71.728-188.468-71.728-260.195,0 c-71.746,71.745-71.746,188.458,0,260.204c64.775,64.775,166.218,71.034,238.104,18.844l14.222,14.203l40.916-40.916 L332.998,291.918z M278.488,278.333c-52.144,52.134-136.699,52.144-188.852,0c-52.152-52.153-52.152-136.717,0-188.861 c52.154-52.144,136.708-52.144,188.852,0C330.64,141.616,330.64,226.18,278.488,278.333z"}),(0,r.tZ)("path",{className:"st0",d:"M109.303,119.216c-27.078,34.788-29.324,82.646-6.756,119.614c2.142,3.489,6.709,4.603,10.208,2.46 c3.49-2.142,4.594-6.709,2.462-10.198v0.008c-19.387-31.7-17.45-72.962,5.782-102.771c2.526-3.228,1.946-7.898-1.292-10.405 C116.48,115.399,111.811,115.979,109.303,119.216z"}),(0,r.tZ)("path",{className:"st0",d:"M501.499,438.591L363.341,315.178l-47.98,47.98l123.403,138.168c12.548,16.234,35.144,13.848,55.447-6.456 C514.505,474.576,517.743,451.138,501.499,438.591z"})]})})},a=function(){return(0,r.tZ)("svg",{version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.tZ)("path",{className:"st0",fill:"#fff",d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}},450:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(1720),o=n(1664),a=n.n(o),i=n(4595),l=n(6049),u=n.n(l),c=n(2586),s=n(3002),d=n.n(s),f=n(2453),h=n(7997),_=function(){var e=(0,r.useContext)(f.v),t="dark"===e.colorMode;return(0,h.BX)("span",{className:d().switch,children:[(0,h.tZ)("input",{type:"checkbox",checked:t,onChange:function(t){var n=t.target.checked?"dark":"light";e.changeColorMode(n)}}),(0,h.tZ)("label",{style:{border:t?"#767676":"#fff",background:t?"#03256c":"#fff"},"aria-hidden":"true"})]})},p=function(){var e=i.ZP.language.substring(0,2),t=(0,r.useRef)();return(0,r.useEffect)((function(){window.onscroll=function(){var e,n;(function(){var e,n=null===(e=t.current)||void 0===e?void 0:e.offsetTop;return window.pageYOffset>n})()?null===(e=t.current)||void 0===e||e.classList.add(u().navActive):null===(n=t.current)||void 0===n||n.classList.remove(u().navActive)}}),[]),(0,h.BX)("div",{ref:t,className:u().header,children:[(0,h.tZ)(a(),{href:"/".concat(e,"/"),className:u().logo,children:c.tu}),(0,h.tZ)("div",{className:u().links_wrapper,children:(0,h.BX)("nav",{className:u().links,children:[(0,h.tZ)(a(),{href:"/".concat(e,"/#about"),className:u().link,children:i.ZP.t("about")}),(0,h.tZ)(a(),{href:"/".concat(e,"/#timetable"),className:u().link,children:i.ZP.t("timetable")}),(0,h.tZ)(a(),{href:"/".concat(e,"/#staffs"),className:u().link,children:i.ZP.t("staffs")}),(0,h.tZ)(a(),{href:"/".concat(e,"/#supporters"),className:u().link,children:i.ZP.t("supporters")}),(0,h.tZ)("a",{href:"src/components#","aria-label":"switch color theme","aria-describedby":"Switch Color Theme",className:u().link,children:(0,h.tZ)(_,{})})]})})]})}},3305:function(e,t,n){"use strict";n.d(t,{C:function(){return h},k:function(){return f}});var r=n(5152),o=n.n(r),a=n(4595),i=n(3469),l=n.n(i),u=n(6595),c=n.n(u),s=n(7997),d=o()((function(){return n.e(310).then(n.bind(n,6310))}),{ssr:!1,loadableGenerated:{webpack:function(){return[6310]}}}),f=function(){return(0,s.BX)("div",{id:"player",className:c().player,children:[(0,s.tZ)("h2",{className:l().title,children:a.ZP.t("pre_event")}),(0,s.tZ)("p",{children:a.ZP.t("subscribing_to_the_youtube_channel")}),(0,s.tZ)(d,{width:"100%",url:"https://youtu.be/Y8dl1y2qdG8"})]})},h=function(){return(0,s.BX)("div",{id:"player",className:c().player,children:[(0,s.tZ)("h2",{children:"Handson"}),(0,s.tZ)("p",{children:a.ZP.t("subscribing_to_the_youtube_channel")}),(0,s.tZ)(d,{width:"100%",url:"https://youtu.be/wmjX6-mDsME"}),(0,s.tZ)("h2",{children:"Track A"}),(0,s.tZ)("p",{children:a.ZP.t("subscribing_to_the_youtube_channel")}),(0,s.tZ)(d,{width:"100%",url:"https://youtu.be/AAVTnEa4vEs"}),(0,s.tZ)("h2",{children:"Track B"}),(0,s.tZ)("p",{children:a.ZP.t("subscribing_to_the_youtube_channel")}),(0,s.tZ)(d,{width:"100%",url:"https://youtu.be/J2li3qYgu9U"})]})}},2586:function(e,t,n){"use strict";n.d(t,{Ax:function(){return a},WL:function(){return o},tu:function(){return r}});var r="VS Code Conference Japan 2021",o="VS Code Meetup \u4e3b\u50ac\u306e\u5e74\u6b21\u30ab\u30f3\u30d5\u30a1\u30ec\u30f3\u30b9\u3001VS Code Conference Japan 2021\u3092\u4eca\u5e74\u3082\u958b\u50ac\u3057\u307e\u3059\uff01\uff01\uff01",a="VS Code Meetup"},7665:function(e){e.exports={button:"Button_button__fVoOr",tweet_button:"Button_tweet_button__Xz0e1",icon_wrapper:"Button_icon_wrapper__8ZfWi"}},3002:function(e){e.exports={switch:"ColorThemeSwitch_switch__FOUIT"}},8060:function(e){e.exports={footer:"Footer_footer__xymob",contact:"Footer_contact__l3x3X",copyright:"Footer_copyright__qPE5k"}},6049:function(e){e.exports={header:"Header_header__8lmpi",links_wrapper:"Header_links_wrapper__TzPQs",logo:"Header_logo__6I_bM",link:"Header_link__CxvxL",navActive:"Header_navActive__2Zafy"}},3469:function(e){e.exports={container:"Home_container__ZhryT",main:"Home_main__bAmjC",title:"Home_title__L4O9v",description:"Home_description__7SfvA",content:"Home_content__N4idO",logo:"Home_logo__ZMi0L"}},6595:function(e){e.exports={player:"Player_player__1rCLF"}},5152:function(e,t,n){e.exports=n(3579)}}]);