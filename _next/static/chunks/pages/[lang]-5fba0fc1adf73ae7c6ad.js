(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{4668:function(e,t,n){"use strict";var r=n(5893),c=n(1664),o=n(2181),s=n(7130),i=n.n(s),a=n(7120);t.Z=function(){var e=o.Z.language.substring(0,2);return(0,r.jsxs)("footer",{className:i().footer,children:[(0,r.jsxs)("p",{className:i().contact,children:[(0,r.jsx)(c.default,{href:"/".concat(e,"/code-for-conduct"),children:o.Z.t("code_of_conduct")}),(0,r.jsx)(c.default,{href:"/".concat(e,"/privacy-policy"),children:o.Z.t("privacy_policy")}),(0,r.jsx)(c.default,{href:"/".concat(e,"/contact"),children:o.Z.t("contact")})]}),(0,r.jsx)("p",{className:i().copyright,children:"Created \xa9 2021 ".concat(a.Ax,". All Rights Reserved.")})]})}},3403:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893),c=n(1664),o=n(2181),s=n(5281),i=n.n(s),a=n(7120),l=n(7294),d=n(7097),f=n.n(d),u=n(7059),p=function(){var e=(0,l.useContext)(u.v),t="dark"===e.colorMode;return(0,r.jsxs)("span",{className:f().switch,children:[(0,r.jsx)("input",{type:"checkbox",checked:t,onChange:function(t){var n=t.target.checked?"dark":"light";e.changeColorMode(n)}}),(0,r.jsx)("label",{style:{border:t?"#767676":"#fff",background:t?"#03256c":"#fff"},"aria-hidden":"true"})]})},h=function(){return(0,r.jsxs)("div",{className:i().header,children:[(0,r.jsx)(c.default,{href:"/",children:(0,r.jsx)("a",{className:i().logo,children:a.tu})}),(0,r.jsx)("div",{className:i().linksWrapper,children:(0,r.jsxs)("nav",{className:i().links,children:[(0,r.jsx)(c.default,{href:"/#about",children:(0,r.jsx)("a",{className:i().link,children:o.Z.t("about")})}),(0,r.jsx)(c.default,{href:"/#speakers",children:(0,r.jsx)("a",{className:i().link,children:o.Z.t("speakers")})}),(0,r.jsx)(c.default,{href:"/#timetable",children:(0,r.jsx)("a",{className:i().link,children:o.Z.t("timetable")})}),(0,r.jsx)(c.default,{href:"/#staffs",children:(0,r.jsx)("a",{className:i().link,children:o.Z.t("staffs")})}),(0,r.jsx)("a",{href:"#",className:i().link,children:(0,r.jsx)(p,{})})]})})]})}},2167:function(e,t,n){"use strict";var r=n(3848),c=n(9448);t.default=void 0;var o=c(n(7294)),s=n(9414),i=n(4651),a=n(7426),l={};function d(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,c=(0,i.useRouter)(),f=o.default.useMemo((function(){var t=(0,s.resolveHref)(c,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,s.resolveHref)(c,e.as):i||o}}),[c,e.href,e.as]),u=f.href,p=f.as,h=e.children,_=e.replace,x=e.shallow,j=e.scroll,m=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var v=(t=o.Children.only(h))&&"object"===typeof t&&t.ref,g=(0,a.useIntersection)({rootMargin:"200px"}),y=r(g,2),k=y[0],b=y[1],N=o.default.useCallback((function(e){k(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,k]);(0,o.useEffect)((function(){var e=b&&n&&(0,s.isLocalURL)(u),t="undefined"!==typeof m?m:c&&c.locale,r=l[u+"%"+p+(t?"%"+t:"")];e&&!r&&d(c,u,p,{locale:t})}),[p,u,b,m,n,c]);var w={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,i,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[c?"replace":"push"](n,r,{shallow:o,locale:a,scroll:i}))}(e,c,u,p,_,x,j,m)},onMouseEnter:function(e){(0,s.isLocalURL)(u)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(c,u,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var Z="undefined"!==typeof m?m:c&&c.locale,C=c&&c.isLocaleDomain&&(0,s.getDomainLocale)(p,Z,c&&c.locales,c&&c.domainLocales);w.href=C||(0,s.addBasePath)((0,s.addLocale)(p,Z,c&&c.defaultLocale))}return o.default.cloneElement(t,w)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,a=(0,c.useRef)(),l=(0,c.useState)(!1),d=r(l,2),f=d[0],u=d[1],p=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,o=r.observer,s=r.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),i.delete(c))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!s&&!f){var e=(0,o.requestIdleCallback)((function(){return u(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=n(7294),o=n(3447),s="undefined"!==typeof IntersectionObserver;var i=new Map},7378:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return w},default:function(){return Z}});var r=n(5893),c=(n(7294),n(9008)),o=n(152),s=n.n(o),i=n(7120),a="https://vscodejp.github.io/conf2021",l=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:i.tu}),(0,r.jsx)("link",{rel:"icon",href:"".concat(a,"/favicon.ico")}),(0,r.jsx)("link",{rel:"manifest",href:"".concat(a,"/manifest.json")}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{property:"description",content:i.WL}),(0,r.jsx)("meta",{property:"og:site_name",content:i.tu}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:description",content:i.WL}),(0,r.jsx)("meta",{property:"og:title",content:i.tu}),(0,r.jsx)("meta",{property:"og:url",content:i.tu}),(0,r.jsx)("meta",{property:"og:image",content:"".concat(a,"/concept.png")}),(0,r.jsx)("meta",{property:"twitter:description",content:i.WL}),(0,r.jsx)("meta",{property:"twitter:title",content:i.tu}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:site",content:"@vscodejp"}),(0,r.jsx)("meta",{property:"twitter:creator",content:"@vscodejp"}),(0,r.jsx)("meta",{property:"twitter:site",content:"@vscodejp"}),(0,r.jsx)("meta",{property:"og:image",content:"".concat(a,"/concept.png")},"twitter:title")]})})},d=n(3403),f=n(2665),u=n.n(f),p=function(){return(0,r.jsx)("div",{id:"concept",className:u().concept,children:(0,r.jsx)("img",{alt:"conference concept",src:"".concat("/conf2021","/concept.png")})})},h=n(2181),_=n(7424),x=n.n(_),j=function(){return(0,r.jsxs)("section",{id:"about",className:x().section,children:[(0,r.jsx)("h2",{children:"About"}),(0,r.jsxs)("div",{className:x().detail,children:[(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:h.Z.t("date_and_time")}),(0,r.jsx)("dd",{children:h.Z.t("november_20_2021")})]}),(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:h.Z.t("venue")}),(0,r.jsx)("dd",{children:h.Z.t("online")})]}),(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:h.Z.t("entry_fee")}),(0,r.jsx)("dd",{children:h.Z.t("free")})]}),(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:h.Z.t("way_to_participate")}),(0,r.jsx)("dd",{children:(0,r.jsx)("a",{href:"https://vscode.connpass.com/event/221961/","aria-label":h.Z.t("apply_for_participation_from_connpass_form"),target:"_blank",rel:"noopener noreferrer",children:h.Z.t("apply_for_participation_from_connpass_form")})})]})]})]})},m=function(){return(0,r.jsxs)("section",{id:"speakers",className:x().section,children:[(0,r.jsx)("h2",{children:h.Z.t("speakers")}),(0,r.jsx)("h3",{children:h.Z.t("coming_soon")})]})},v=function(){return(0,r.jsxs)("section",{id:"timetable",className:x().section,children:[(0,r.jsx)("h2",{children:h.Z.t("timetable")}),(0,r.jsx)("h3",{children:h.Z.t("coming_soon")})]})},g=n(2671),y=n.n(g),k=[{name:"jiyuujin",iconFilename:"bakeneko2.png"}],b=function(){return(0,r.jsxs)("section",{id:"staffs",className:y().section,children:[(0,r.jsx)("h2",{children:h.Z.t("staffs")}),(0,r.jsx)("div",{className:y().staffs,children:k.map((function(e){return(0,r.jsxs)("div",{className:y().icon,children:[(0,r.jsx)("img",{alt:"Image ".concat(e.name),src:"../icons/".concat(e.iconFilename)}),(0,r.jsx)("div",{className:y().info,children:(0,r.jsx)("div",{className:y().name,children:e.name})})]},e.name)}))})]})},N=n(4668),w=!0;function Z(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{}),(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:i.tu}),(0,r.jsx)("link",{rel:"icon",href:"".concat("/conf2021","/favicon.ico")})]}),(0,r.jsx)(d.Z,{}),(0,r.jsxs)("main",{className:s().main,children:[(0,r.jsx)(p,{}),(0,r.jsx)(j,{}),(0,r.jsx)(m,{}),(0,r.jsx)(v,{}),(0,r.jsx)(b,{})]}),(0,r.jsx)(N.Z,{})]})]})}},7120:function(e,t,n){"use strict";n.d(t,{tu:function(){return r},WL:function(){return c},Ax:function(){return o}});var r="VS Code Conference JP 2021",c="VS Code Meetup \u4e3b\u50ac\u306e\u5e74\u6b21\u30ab\u30f3\u30d5\u30a1\u30ec\u30f3\u30b9\u3001VS Code Conference Japan 2021\u3092\u4eca\u5e74\u3082\u958b\u50ac\u3057\u307e\u3059\uff01\uff01\uff01",o="VS Code Meetup"},9209:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]",function(){return n(7378)}])},7097:function(e){e.exports={switch:"ColorThemeSwitch_switch__2Zfll"}},2665:function(e){e.exports={concept:"Concept_concept__FBvIO"}},7130:function(e){e.exports={footer:"Footer_footer__2tGaj",contact:"Footer_contact__F2Rsc",copyright:"Footer_copyright__rVWqL"}},5281:function(e){e.exports={header:"Header_header__1dag3",logo:"Header_logo__26awG","links-wrapper":"Header_links-wrapper__tDyz6",links:"Header_links__1c_JS",link:"Header_link__1h3m6"}},152:function(e){e.exports={container:"Home_container__dEP1C",main:"Home_main__1yo5N",title:"Home_title__2KqcX",description:"Home_description__1dvQE",content:"Home_content__1aTdr",logo:"Home_logo__Mqs7H"}},7424:function(e){e.exports={section:"Section_section__1JZ-K",detail:"Section_detail__i2GiZ"}},2671:function(e){e.exports={section:"Staff_section__2jPP-",staffs:"Staff_staffs__2OMVN",icon:"Staff_icon__1bzmX",info:"Staff_info__Sq-CH"}},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=9209,e(e.s=t);var t}));var t=e.O();_N_E=t}]);