if(!self.define){let e,n={};const s=(s,c)=>(s=new URL(s+".js",c).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let i={};const o=e=>s(e,t),r={module:{uri:t},exports:i,require:o};n[t]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(a(...e),i)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/conf2021/_next/static/chunks/126-f53fa71357b40844ab8c.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/970-35a7d1769ffb6fe4e242.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/framework-ba739959830eed930663.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/main-5d5111a3b5c70caa5cb5.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D-ff09af2aae51c4f5dd22.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/code-for-conduct-59e464839eb7efa35d13.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/contact-41df386280ed7988b141.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/privacy-policy-8035dd083b00858998bc.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/pages/_app-ae85cbcd749c93853d42.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/pages/_error-cc9ed718d2e503e1510e.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/pages/index-89b021e5c56db437243f.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerDailyMotion.78c75ae8c4a35707c27c.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerFacebook.0f7a93564bc01a916677.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerFilePlayer.811fd9878b7fe9175933.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerKaltura.42efb1960a45d07f13e3.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerMixcloud.c9ebfc112d3823c8bf7c.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerPreview.dbab61a51d63f7ec7a5e.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerSoundCloud.6a7e5214443822c1a871.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerStreamable.6bb97aa6d9e40625b87d.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerTwitch.1682e5455572fc4c15d5.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerVidyard.8d179774909ca642e633.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerVimeo.1bbfb3d73f477b99096f.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerWistia.294d468731c43363751f.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/reactPlayerYouTube.7d11061183950231dd36.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/chunks/webpack-b6c2c064ce1d0319ecb3.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/css/46f2f1279e66ad4f7ffc.css",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/css/8db14f5fd8fc20988433.css",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/css/924c53b7f1e6e50f7c65.css",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/k1yZKknuMKL_LkIvnj8YF/_buildManifest.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/_next/static/k1yZKknuMKL_LkIvnj8YF/_ssgManifest.js",revision:"k1yZKknuMKL_LkIvnj8YF"},{url:"/conf2021/concept.png",revision:"2f0d1407c7dadf3c35e056f60e51aa36"},{url:"/conf2021/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/conf2021/icons/bakeneko2.png",revision:"892ced2bffcef5aed920dc9b318120c5"},{url:"/conf2021/icons/yamachu.jpeg",revision:"62c53f4880ca4694e46a0b7995d42530"},{url:"/conf2021/locales/en/common.json",revision:"3b109d06878414699adb2ff1afab0f0d"},{url:"/conf2021/locales/ja/common.json",revision:"658d6f847a0f1aefb1c9138a3cf8425a"},{url:"/conf2021/manifest.json",revision:"cc0fa605489e352d8828f361907d7ea2"},{url:"/conf2021/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/conf2021",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:c})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
