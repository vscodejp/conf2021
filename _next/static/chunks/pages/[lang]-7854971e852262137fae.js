(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{4668:function(e,t,r){"use strict";var s=r(1664),n=r(1261),i=r(2472),a=r.n(i),c=r(7120),o=r(5893);t.Z=function(){var e=n.Z.language.substring(0,2);return(0,o.jsxs)("footer",{className:a().footer,children:[(0,o.jsxs)("p",{className:a().contact,children:[(0,o.jsx)(s.default,{href:"/".concat(e,"/code-for-conduct"),children:(0,o.jsx)("a",{"aria-label":"Link to Code for Conduct","aria-describedby":n.Z.t("code_of_conduct"),children:n.Z.t("code_of_conduct")})}),(0,o.jsx)(s.default,{href:"/".concat(e,"/privacy-policy"),children:(0,o.jsx)("a",{"aria-label":"Link to Privacy Policy","aria-describedby":n.Z.t("privacy_policy"),children:n.Z.t("privacy_policy")})}),(0,o.jsx)(s.default,{href:"/".concat(e,"/contact"),children:(0,o.jsx)("a",{"aria-label":"Link to Contact","aria-describedby":n.Z.t("contact"),children:n.Z.t("contact")})})]}),(0,o.jsx)("p",{className:a().copyright,children:"Created \xa9 2021 ".concat(c.Ax,". All Rights Reserved.")})]})}},3403:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var s=r(1664),n=r(1261),i=r(2117),a=r.n(i),c=r(7120),o=r(7294),l=r(6622),d=r.n(l),p=r(7059),u=r(5893),m=function(){var e=(0,o.useContext)(p.v),t="dark"===e.colorMode;return(0,u.jsxs)("span",{className:d().switch,children:[(0,u.jsx)("input",{type:"checkbox",checked:t,onChange:function(t){var r=t.target.checked?"dark":"light";e.changeColorMode(r)}}),(0,u.jsx)("label",{style:{border:t?"#767676":"#fff",background:t?"#03256c":"#fff"},"aria-hidden":"true"})]})},f=function(){var e=n.Z.language.substring(0,2);return(0,u.jsxs)("div",{className:a().header,children:[(0,u.jsx)(s.default,{href:"/".concat(e,"/"),children:(0,u.jsx)("a",{"aria-label":"link to title","aria-describedby":"Title",className:a().logo,children:c.tu})}),(0,u.jsx)("div",{className:a().links_wrapper,children:(0,u.jsxs)("nav",{className:a().links,children:[(0,u.jsx)(s.default,{href:"/".concat(e,"/#about"),children:(0,u.jsx)("a",{"aria-label":"Link to About","aria-describedby":n.Z.t("about"),className:a().link,children:n.Z.t("about")})}),(0,u.jsx)(s.default,{href:"/".concat(e,"/#timetable"),children:(0,u.jsx)("a",{"aria-label":"Link to Timetable","aria-describedby":n.Z.t("timetable"),className:a().link,children:n.Z.t("timetable")})}),(0,u.jsx)(s.default,{href:"/".concat(e,"/#staffs"),children:(0,u.jsx)("a",{"aria-label":"Link to Staffs","aria-describedby":n.Z.t("staffs"),className:a().link,children:n.Z.t("staffs")})}),(0,u.jsx)(s.default,{href:"/".concat(e,"/#supporters"),children:(0,u.jsx)("a",{"aria-label":"link to Aupporters","aria-describedby":"Supporters",className:a().link,children:n.Z.t("supporters")})}),(0,u.jsx)("a",{href:"#","aria-label":"switch color theme","aria-describedby":"Switch Color Theme",className:a().link,children:(0,u.jsx)(m,{})})]})})]})}},2167:function(e,t,r){"use strict";var s=r(3848);t.default=void 0;var n,i=(n=r(7294))&&n.__esModule?n:{default:n},a=r(1063),c=r(4651),o=r(7426);var l={};function d(e,t,r,s){if(e&&a.isLocalURL(t)){e.prefetch(t,r,s).catch((function(e){0}));var n=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;l[t+"%"+r+(n?"%"+n:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),p=i.default.useMemo((function(){var t=a.resolveHref(n,e.href,!0),r=s(t,2),i=r[0],c=r[1];return{href:i,as:e.as?a.resolveHref(n,e.as):c||i}}),[n,e.href,e.as]),u=p.href,m=p.as,f=e.children,h=e.replace,_=e.shallow,k=e.scroll,x=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var j=(t=i.default.Children.only(f))&&"object"===typeof t&&t.ref,y=o.useIntersection({rootMargin:"200px"}),g=s(y,2),v=g[0],T=g[1],b=i.default.useCallback((function(e){v(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,v]);i.default.useEffect((function(){var e=T&&r&&a.isLocalURL(u),t="undefined"!==typeof x?x:n&&n.locale,s=l[u+"%"+m+(t?"%"+t:"")];e&&!s&&d(n,u,m,{locale:t})}),[m,u,T,x,r,n]);var N={ref:b,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,s,n,i,c,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==c&&s.indexOf("#")>=0&&(c=!1),t[n?"replace":"push"](r,s,{shallow:i,locale:o,scroll:c}))}(e,n,u,m,h,_,k,x)},onMouseEnter:function(e){a.isLocalURL(u)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(n,u,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var w="undefined"!==typeof x?x:n&&n.locale,E=n&&n.isLocaleDomain&&a.getDomainLocale(m,w,n&&n.locales,n&&n.domainLocales);N.href=E||a.addBasePath(a.addLocale(m,w,n&&n.defaultLocale))}return i.default.cloneElement(t,N)};t.default=p},7426:function(e,t,r){"use strict";var s=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,o=n.useRef(),l=n.useState(!1),d=s(l,2),p=d[0],u=d[1],m=n.useCallback((function(e){o.current&&(o.current(),o.current=void 0),r||p||e&&e.tagName&&(o.current=function(e,t,r){var s=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var s=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=s.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:n,elements:s}),r}(r),n=s.id,i=s.observer,a=s.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(n))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[r,t,p]);return n.useEffect((function(){if(!a&&!p){var e=i.requestIdleCallback((function(){return u(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),[m,p]};var n=r(7294),i=r(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},921:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return A},default:function(){return H}});var s=r(7294),n=r(9008),i=r(2777),a=r.n(i),c=r(1163),o=r(1261),l=r(7120),d=r(5893),p="https://vscodejp.github.io/conf2021",u=function(){var e=(0,c.useRouter)().pathname;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(n.default,{children:[(0,d.jsx)("title",{children:l.tu}),(0,d.jsx)("link",{rel:"icon",href:"".concat(p,"/favicon.ico")}),(0,d.jsx)("link",{rel:"manifest",href:"".concat(p,"/manifest.json")}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,d.jsx)("meta",{property:"description",content:"/"!==e?o.Z.t("og_description"):l.WL}),(0,d.jsx)("meta",{property:"og:site_name",content:l.tu}),(0,d.jsx)("meta",{property:"og:type",content:"website"}),(0,d.jsx)("meta",{property:"og:description",content:"/"!==e?o.Z.t("og_description"):l.WL}),(0,d.jsx)("meta",{property:"og:title",content:l.tu}),(0,d.jsx)("meta",{property:"og:url",content:l.tu}),(0,d.jsx)("meta",{property:"og:image",content:"".concat(p,"/concept.png")}),(0,d.jsx)("meta",{property:"twitter:description",content:"/"!==e?o.Z.t("og_description"):l.WL}),(0,d.jsx)("meta",{property:"twitter:title",content:l.tu}),(0,d.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,d.jsx)("meta",{property:"twitter:site",content:"@vscodejp"}),(0,d.jsx)("meta",{property:"twitter:creator",content:"@vscodejp"}),(0,d.jsx)("meta",{property:"twitter:site",content:"@vscodejp"}),(0,d.jsx)("meta",{property:"og:image",content:"".concat(p,"/concept.png")},"twitter:title")]})})},m=r(3403),f=r(1951),h=r.n(f),_=function(){return(0,d.jsx)("div",{id:"concept",className:h().concept,children:(0,d.jsx)("img",{alt:"conference concept",src:"".concat("/conf2021","/concept.png")})})},k=r(6721),x=r.n(k),j=function(){return(0,d.jsxs)("section",{id:"about",className:x().section,children:[(0,d.jsx)("h2",{children:"About"}),(0,d.jsxs)("div",{className:x().detail,children:[(0,d.jsxs)("dl",{children:[(0,d.jsx)("dt",{children:o.Z.t("date_and_time")}),(0,d.jsx)("dd",{children:o.Z.t("november_20_2021")})]}),(0,d.jsxs)("dl",{children:[(0,d.jsx)("dt",{children:o.Z.t("venue")}),(0,d.jsx)("dd",{children:o.Z.t("online")})]}),(0,d.jsxs)("dl",{children:[(0,d.jsx)("dt",{children:o.Z.t("entry_fee")}),(0,d.jsx)("dd",{children:o.Z.t("free")})]}),(0,d.jsxs)("dl",{children:[(0,d.jsx)("dt",{children:o.Z.t("way_to_participate")}),(0,d.jsx)("dd",{children:(0,d.jsx)("a",{href:"https://vscode.connpass.com/event/221961/","aria-label":o.Z.t("apply_for_participation_from_connpass_form"),target:"_blank",rel:"noopener noreferrer",children:o.Z.t("apply_for_participation_from_connpass_form")})})]})]})]})},y=r(5474),g=r.n(y),v=["track1","track2"],T=[{tracks:[{isEmpty:!1,isRest:!1,trackId:"track1",personType:"inviter",presenterName:"\u85e4\u4e95\u592a\u6d0b",presenterBio:"\u81ea\u5206\u306e\u30ad\u30e3\u30ea\u30a2\u306e\u30b9\u30bf\u30fc\u30c8\u306fiOS\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u306e\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u958b\u59cb\u3057\u305f\u3002\u30a2\u30d7\u30ea\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u696d\u52d9\u3092\u901a\u3058\u57fa\u790e\u7684\u306a\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u53d6\u5f97\u3057\u306a\u304c\u3089\u3001\u305d\u306e\u88cf\u5074\u3067\u52d5\u304f\u7ba1\u7406\u753b\u9762 (PHP) \u306eUX\u6539\u5584\u306b\u3082\u53d6\u308a\u7d44\u3093\u3060\u3002\u3053\u3046\u3057\u305fWeb\u306e\u6539\u5584\u30d7\u30ed\u30bb\u30b9\u3092\u7d4c\u308b\u90e8\u5206\u306b\u3072\u3068\u3064\u306e\u9b45\u529b\u3092\u611f\u3058\u3001Node.js\u3092\u59cb\u3081\u3068\u3057\u305f\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u3084CSS\u8a2d\u8a08\u3001\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u4f7f\u7528\u306a\u3069\u5f90\u3005\u306b\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3044\u3046\u9818\u57df\u306b\u3082\u8e0f\u307f\u8fbc\u3093\u3060\u3002",presenterTitle:"\u62db\u5f85\u8b1b\u6f14 VS Code\u3067\u5c0f\u8aac\u3092\u66f8\u304f",presenterUrl:""},{isEmpty:!0,isRest:!1,trackId:"track2"}],startTime:"1300",endTime:"1320"},{tracks:[{isEmpty:!0,isRest:!0,trackId:"track1"},{isEmpty:!0,isRest:!1,trackId:"track2"}],startTime:"1320",endTime:"1330"},{tracks:[{isEmpty:!1,isRest:!1,trackId:"track1",personType:"presenter",presenterName:"Atsushi Morimoto",presenterTitle:"PlatformIO \u3067 \u30b7\u30e5\u30c3\u3068 Arduino \u958b\u767a\u3092\u9ad8\u901f\u5316\u3057\u3088\u3046",presenterUrl:""},{isEmpty:!1,isRest:!1,trackId:"track2",personType:"presenter",presenterName:"Takekazuomi",presenterTitle:"bicep + vscode \u3067\u3089\u304f\u3089\u304fAzure Deploy",presenterUrl:""}],startTime:"1330",endTime:"1400"},{tracks:[{isEmpty:!0,isRest:!0,trackId:"track1"},{isEmpty:!0,isRest:!0,trackId:"track2"}],startTime:"1400",endTime:"1410"},{tracks:[{isEmpty:!1,isRest:!1,trackId:"track1",personType:"presenter",presenterName:"kyusque",presenterTitle:"github.dev\u3067\u30de\u30a4\u30ca\u30fc\u8a00\u8a9e\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30cf\u30a4\u30e9\u30a4\u30c8",presenterUrl:""},{isEmpty:!1,isRest:!1,trackId:"track2",personType:"presenter",presenterName:"\u3048\u3093\u3067\u3043",presenterTitle:"Ansible\u30e6\u30fc\u30b6\u30fc\u306e\u305f\u3081\u306eVS Code\u62e1\u5f35\u6a5f\u80fd\u306e\u7d39\u4ecb",presenterUrl:""}],startTime:"1410",endTime:"1425"},{tracks:[{isEmpty:!1,isRest:!1,trackId:"track1",personType:"presenter",presenterName:"miekoma",presenterTitle:"VS\u306e\u4e2d\u5fc3\u3067\u3001COBOL\u3092\u53eb\u3076",presenterUrl:""},{isEmpty:!1,isRest:!1,trackId:"track2",personType:"presenter",presenterName:"\u30ed\u30d5\u30c8\u304f\u3093",presenterTitle:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u4f5c\u6210\u3060\u3051\u3067\u306f\u3082\u3063\u305f\u3044\u306a\u3044\uff01VSCode + Markdown\u3067\u767a\u8868\u30b9\u30e9\u30a4\u30c9\u3084\u66f8\u7c4d\u3082\u66f8\u3044\u3061\u3083\u304a\u3046\uff01",presenterUrl:""}],startTime:"1425",endTime:"1440"},{tracks:[{isEmpty:!0,isRest:!0,trackId:"track1"},{isEmpty:!0,isRest:!0,trackId:"track2"}],startTime:"1440",endTime:"1450"},{tracks:[{isEmpty:!1,isRest:!1,trackId:"track1",personType:"presenter",presenterName:"Ryo Nakamaru",presenterTitle:"\u30b3\u30f3\u30c6\u30ca / k8s \u30a2\u30d7\u30ea\u958b\u767a\u3092\u652f\u63f4\u3059\u308b Google \u306e\u30d7\u30e9\u30b0\u30a4\u30f3 Cloud Code",presenterUrl:""},{isEmpty:!1,isRest:!1,trackId:"track2",personType:"presenter",presenterName:"Karan Balkar",presenterTitle:"How we used the Live Share extension to reduce our issue resolution time?",presenterUrl:""}],startTime:"1450",endTime:"1520"},{tracks:[{isEmpty:!0,isRest:!0,trackId:"track1"},{isEmpty:!0,isRest:!0,trackId:"track2"}],startTime:"1520",endTime:"1530"},{tracks:[{isEmpty:!1,isRest:!1,trackId:"track1",personType:"presenter",presenterName:"Kazuya Houdatsu",presenterTitle:"\u4eca\u3084VSCode\u3067\u3001\u30af\u30e9\u30a6\u30c9\u30b5\u30fc\u30d0\u30ec\u30b9\u30fb\u30b3\u30f3\u30c6\u30ca\u958b\u767a\u3060\u3063\u3066\u3067\u304d\u308b\uff01\uff08AWS/OpenShift\uff09",presenterUrl:""},{isEmpty:!1,isRest:!1,trackId:"track2",personType:"presenter",presenterName:"Marcell Endrey",presenterTitle:"vim in VS Code: the best of both worlds",presenterUrl:""}],startTime:"1530",endTime:"1600"},{tracks:[{isEmpty:!0,isRest:!0,trackId:"track1"},{isEmpty:!0,isRest:!0,trackId:"track2"}],startTime:"1600",endTime:"1610"},{tracks:[{isEmpty:!1,isRest:!1,trackId:"track1",personType:"presenter",presenterName:"\u677e\u6751\u512a\u5927",presenterTitle:"VSCode\u3067\u59cb\u3081\u308bAzure Static Web Apps\u958b\u767a",presenterUrl:""},{isEmpty:!1,isRest:!1,trackId:"track2",personType:"presenter",presenterName:"ypresto",presenterTitle:"VS Code\u306e\u30d7\u30ed\u30bb\u30b9\u30e2\u30c7\u30eb\u3068\u30c7\u30d0\u30c3\u30b0\u65b9\u6cd5 \u301c\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8996\u70b9\u304b\u3089\u301c",presenterUrl:""}],startTime:"1610",endTime:"1640"},{tracks:[{isEmpty:!0,isRest:!0,trackId:"track1"},{isEmpty:!0,isRest:!0,trackId:"track2"}],startTime:"1640",endTime:"1650"},{tracks:[{isEmpty:!1,isRest:!1,trackId:"track1",presenterName:"",presenterTitle:"LT",presenterUrl:""},{isEmpty:!0,isRest:!1,trackId:"track2"}],startTime:"1650",endTime:"1710"}],b=function(e){return e.slice(0,2)+":"+e.slice(2)},N=function(e){return"string"===typeof e&&e?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():e},w=function(){return(0,d.jsxs)("div",{className:g().schedule,"aria-labelledby":"schedule-heading",children:[(0,d.jsx)(d.Fragment,{children:v.map((function(e,t){return(0,d.jsx)("span",{className:g().trackslot,"aria-hidden":"true",style:{gridColumn:e,gridRow:"tracks"},children:N(e)},t)}))}),(0,d.jsx)(d.Fragment,{children:T.map((function(e,t){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{className:g().timeslot,"aria-hidden":"true",style:{gridRow:"time-".concat(e.startTime)},children:b(e.startTime)},t),e.tracks.map((function(t,r){return(0,d.jsxs)(d.Fragment,{children:[t.isEmpty&&t.isRest&&(0,d.jsx)("div",{className:"".concat(g().session," ").concat(g().rest),"aria-hidden":"true",style:{gridColumn:t.trackId,gridRow:"time-".concat(e.startTime," time-").concat(e.endTime)},children:o.Z.t("rest_ask_the_speaker")},r),!t.isEmpty&&!t.isRest&&!t.hasOwnProperty("presenterName")&&(0,d.jsx)("div",{},r),!t.isEmpty&&!t.isRest&&t.hasOwnProperty("presenterName")&&(0,d.jsxs)("div",{className:"".concat(g().session," ").concat(g().track1),style:{gridColumn:t.trackId,gridRow:"time-".concat(e.startTime," time-").concat(e.endTime)},children:[(0,d.jsx)("h3",{className:g().sessionTitle,children:(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:t.presenterName}),(0,d.jsx)("p",{children:t.presenterTitle})]})}),(0,d.jsx)("h4",{className:g().sessionTime,children:"".concat(b(e.startTime)," - ").concat(b(e.endTime))}),(0,d.jsx)("p",{className:g().sessionPresenter,children:N(t.personType)})]},r)]})}))]})}))})]})},E=function(){return(0,d.jsxs)("section",{id:"timetable",className:x().section,children:[(0,d.jsx)("h2",{children:o.Z.t("timetable")}),(0,d.jsx)(w,{})]})},S=[{name:"jiyuujin",url:"https://twitter.com/jiyuujinlab",iconFilename:"bakeneko2.png"},{name:"setoazu",url:"https://twitter.com/setoazusa",iconName:"https://pbs.twimg.com/profile_images/1392132106449420288/eF0s_kDi_400x400.jpg"},{name:"Nori Suzuki",url:"https://twitter.com/szkn27",iconName:"https://pbs.twimg.com/profile_images/1362573976711561216/qAxHDZyi_400x400.jpg"},{name:"Atsushi Morimoto",url:"https://twitter.com/74th",iconName:"https://pbs.twimg.com/profile_images/1296047865798696963/42BVehEz_400x400.jpg"},{name:"Aya Tokura",url:"https://twitter.com/ayatokura",iconName:"https://pbs.twimg.com/profile_images/1379041781623390213/SvPXdZwE_400x400.jpg"},{name:"\u3075\u3058\u3044",url:"https://twitter.com/dafujii_k",iconName:"https://pbs.twimg.com/profile_images/1300633615299084290/2I55c5_2_400x400.jpg"},{name:"\u30ed\u30d5\u30c8\u304f\u3093",url:"https://twitter.com/loftkun",iconName:"https://pbs.twimg.com/profile_images/1130041560471486464/2vwZ3x9u_400x400.png"},{name:"\u3082\u3063\u3061\u3083\u3093\uff0fTakashi Kawamoto",url:"https://twitter.com/kawamoto_LINER",iconName:"https://pbs.twimg.com/profile_images/1420920544841453572/aYcVk3c__400x400.jpg"}],R=r(2254),C=r.n(R),I=function(e){var t=(0,s.useMemo)((function(){return e.people.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))}),[]);return(0,d.jsxs)("section",{id:e.sectionName,className:C().section,children:[(0,d.jsx)("h2",{children:o.Z.t(e.sectionName)}),(0,d.jsx)("div",{className:C().staffs,children:t.map((function(e){return(0,d.jsx)("div",{className:C().icon,children:(0,d.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,d.jsx)("img",{alt:"Image ".concat(e.name),src:null!==e&&void 0!==e&&e.iconFilename?"../icons/".concat(null===e||void 0===e?void 0:e.iconFilename):null===e||void 0===e?void 0:e.iconName}),(0,d.jsx)("div",{className:C().info,children:(0,d.jsx)("div",{className:C().name,children:e.name})})]})},e.name)}))})]})},Z=function(){return(0,d.jsx)(I,{people:S,sectionName:"staffs"})},L=[{name:"iginari",url:"https://twitter.com/iganari_",iconName:"https://pbs.twimg.com/profile_images/458378547736752128/-8Y1rE_r_400x400.jpeg"}],M=function(){return(0,d.jsx)(I,{people:L,sectionName:"supporters"})},P=r(4668),A=!0;function H(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,{}),(0,d.jsxs)("div",{className:a().container,children:[(0,d.jsxs)(n.default,{children:[(0,d.jsx)("title",{children:l.tu}),(0,d.jsx)("link",{rel:"icon",href:"".concat("/conf2021","/favicon.ico")})]}),(0,d.jsx)(m.Z,{}),(0,d.jsxs)("main",{className:a().main,children:[(0,d.jsx)(_,{}),(0,d.jsx)(j,{}),(0,d.jsx)(E,{}),(0,d.jsx)(Z,{}),(0,d.jsx)(M,{})]}),(0,d.jsx)(P.Z,{})]})]})}},7120:function(e,t,r){"use strict";r.d(t,{tu:function(){return s},WL:function(){return n},Ax:function(){return i}});var s="VSCode Conference Japan 2021",n="VS Code Meetup \u4e3b\u50ac\u306e\u5e74\u6b21\u30ab\u30f3\u30d5\u30a1\u30ec\u30f3\u30b9\u3001VS Code Conference Japan 2021\u3092\u4eca\u5e74\u3082\u958b\u50ac\u3057\u307e\u3059\uff01\uff01\uff01",i="VS Code Meetup"},9209:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]",function(){return r(921)}])},6622:function(e){e.exports={switch:"ColorThemeSwitch_switch__2Zfll"}},1951:function(e){e.exports={concept:"Concept_concept__FBvIO"}},2472:function(e){e.exports={footer:"Footer_footer__2tGaj",contact:"Footer_contact__F2Rsc",copyright:"Footer_copyright__rVWqL"}},2117:function(e){e.exports={header:"Header_header__1dag3",links_wrapper:"Header_links_wrapper__3FPwQ"}},2777:function(e){e.exports={container:"Home_container__dEP1C",main:"Home_main__1yo5N",title:"Home_title__2KqcX",description:"Home_description__1dvQE",content:"Home_content__1aTdr",logo:"Home_logo__Mqs7H"}},5474:function(e){e.exports={section:"Schedule_section__38_Zg",schedule:"Schedule_schedule__Y3Kgq",trackslot:"Schedule_trackslot__1XlR6",timeslot:"Schedule_timeslot__EkMA0",session:"Schedule_session__2D3V5",sessionTitle:"Schedule_sessionTitle__1J8oP",sessionTime:"Schedule_sessionTime__3xBPG",sessionTrack:"Schedule_sessionTrack__mkRQ5",sessionPresenter:"Schedule_sessionPresenter__3Nd1O",rest:"Schedule_rest__3kLA1",track1:"Schedule_track1__3QECJ",track2:"Schedule_track2__3CWqH",track3:"Schedule_track3__1oQrD",track4:"Schedule_track4__tHHJ-",allTrack:"Schedule_allTrack__3eOvJ",text:"Schedule_text__116lM",meta:"Schedule_meta__1O08C"}},6721:function(e){e.exports={section:"Section_section__1JZ-K",detail:"Section_detail__i2GiZ"}},2254:function(e){e.exports={section:"Staff_section__2jPP-",staffs:"Staff_staffs__2OMVN",icon:"Staff_icon__1bzmX",info:"Staff_info__Sq-CH"}},1664:function(e,t,r){e.exports=r(2167)},1163:function(e,t,r){e.exports=r(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=9209,e(e.s=t);var t}));var t=e.O();_N_E=t}]);