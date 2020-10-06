(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(189)),u={},i={unversionedId:"getMultipleJourneysBySlug",id:"getMultipleJourneysBySlug",isDocsHomePage:!1,title:"getMultipleJourneysBySlug",description:"This function returns the journey details",source:"@site/docs/getMultipleJourneysBySlug.md",slug:"/getMultipleJourneysBySlug",permalink:"/ym-documentation/docs/getMultipleJourneysBySlug",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getMultipleJourneysBySlug.md",version:"current",sidebar:"docs",previous:{title:"getMultipleJourneysByCategoryType",permalink:"/ym-documentation/docs/getMultipleJourneysByCategoryType"},next:{title:"getSessionMessageLogUrl",permalink:"/ym-documentation/docs/getSessionMessageLogUrl"}},l=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example",id:"example",children:[]}],c={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function returns the journey details\n\u200b"),Object(a.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"journeySlugs - Array")),Object(a.b)("p",null,"\u200b"),Object(a.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Returns the journey details Array")),Object(a.b)("p",null,"\u200b"),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'let journeySlugs = ["new-account", "food-invoice"];\napp.getMultipleJourneysBySlug(journeysSlugs).then(journeysData => {\n    // Do something with the journeysData Array\n\n}).catch(error => {\n    // Do something when journeyData fetching failed\n    \n});\n')))}p.isMDXComponent=!0},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,b=s["".concat(u,".").concat(m)]||s[m]||y[m]||a;return r?o.a.createElement(b,i(i({ref:t},c),{},{components:r})):o.a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var c=2;c<a;c++)u[c]=r[c];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);