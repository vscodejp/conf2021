if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const o=e=>n(e,t),r={module:{uri:t},exports:i,require:o};s[t]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(a(...e),i)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/conf2021/_next/static/F9OJq4-S4sln6sz2g0O55/_buildManifest.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/F9OJq4-S4sln6sz2g0O55/_ssgManifest.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/126-f53fa71357b40844ab8c.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/489-b787c6cf32caf1ec51b0.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/framework-ba739959830eed930663.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/main-5d5111a3b5c70caa5cb5.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D-b86a57263ccee31ebed0.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/code-for-conduct-32fb47545ba39079105f.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/contact-e118a126acfe092cc3a9.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/pre-event-908613fab12887bc4da0.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/privacy-policy-65302194b5540f36e822.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/pages/_app-5ee35e6c91492ffd1cfd.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/pages/_error-cc9ed718d2e503e1510e.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/pages/index-89b021e5c56db437243f.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerDailyMotion.78c75ae8c4a35707c27c.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerFacebook.0f7a93564bc01a916677.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerFilePlayer.811fd9878b7fe9175933.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerKaltura.42efb1960a45d07f13e3.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerMixcloud.c9ebfc112d3823c8bf7c.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerPreview.dbab61a51d63f7ec7a5e.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerSoundCloud.6a7e5214443822c1a871.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerStreamable.6bb97aa6d9e40625b87d.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerTwitch.1682e5455572fc4c15d5.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerVidyard.8d179774909ca642e633.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerVimeo.1bbfb3d73f477b99096f.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerWistia.294d468731c43363751f.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/reactPlayerYouTube.7d11061183950231dd36.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/chunks/webpack-97b0b5a2448eb0053321.js",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/css/7f91f433a148b890af2d.css",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/css/8db14f5fd8fc20988433.css",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/css/e324a452a3403ed957e1.css",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/_next/static/css/e3bd07596dca7f650dad.css",revision:"F9OJq4-S4sln6sz2g0O55"},{url:"/conf2021/concept.png",revision:"2f0d1407c7dadf3c35e056f60e51aa36"},{url:"/conf2021/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/conf2021/icons/bakeneko2.png",revision:"892ced2bffcef5aed920dc9b318120c5"},{url:"/conf2021/icons/yamachu.jpeg",revision:"62c53f4880ca4694e46a0b7995d42530"},{url:"/conf2021/locales/en/common.json",revision:"2060f9897247ca4e61a797c316287e2b"},{url:"/conf2021/locales/ja/common.json",revision:"96af010450a088a07caa5978300532fb"},{url:"/conf2021/manifest.json",revision:"cc0fa605489e352d8828f361907d7ea2"},{url:"/conf2021/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/conf2021",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
