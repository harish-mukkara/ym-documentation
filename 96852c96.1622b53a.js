(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{131:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(2),o=t(6),r=(t(0),t(189)),c={},d={unversionedId:"encodingAndDecodingPayload",id:"encodingAndDecodingPayload",isDocsHomePage:!1,title:"encodingAndDecodingPayload",description:"Encoding a payload sending it to a bot:",source:"@site/docs/encodingAndDecodingPayload.md",slug:"/encodingAndDecodingPayload",permalink:"/ym-documentation/docs/encodingAndDecodingPayload",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/encodingAndDecodingPayload.md",version:"current",sidebar:"docs",previous:{title:"documentUrl",permalink:"/ym-documentation/docs/documentUrl"},next:{title:"encrypt",permalink:"/ym-documentation/docs/encrypt"}},i=[{value:"Encoding a payload sending it to a bot:",id:"encoding-a-payload-sending-it-to-a-bot",children:[]},{value:"Decoding the payload sent to a bot:",id:"decoding-the-payload-sent-to-a-bot",children:[]}],l={rightToc:i};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"encoding-a-payload-sending-it-to-a-bot"},"Encoding a payload sending it to a bot:"),Object(r.b)("p",null,"First, the payload has to be encoded in a base64 format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'\nlet payload = {\n    "hello" : "world"\n};\n\n//the payload can be anything; we\'ve used object as an example here\n\nlet encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64"); \n')),Object(r.b)("p",null,"Then, append 'ym.payload' param to the botlink and send the encodedPayload, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"`https://app.yellowmessenger.com/pwa/mobile/x16**********9?ym.payload=${encodedPayload}`\n")),Object(r.b)("h2",{id:"decoding-the-payload-sent-to-a-bot"},"Decoding the payload sent to a bot:"),Object(r.b)("p",null,"The payload will be stored in app.profile.payload.\nConvert the incoming payload to a string:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"let decodedPayload = Buffer.from(app.profile.payload, 'base64').toString();\n")),Object(r.b)("p",null,"If your payload is an object, you'll have to parse it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"let parsedPayload = JSON.parse(decodedPayload);\napp.log(decodedPayload.hello) //output: world\n")))}p.isMDXComponent=!0},189:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return y}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,y=u["".concat(c,".").concat(b)]||u[b]||s[b]||r;return t?o.a.createElement(y,d(d({ref:n},l),{},{components:t})):o.a.createElement(y,d({ref:n},l))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=b;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,c[1]=d;for(var l=2;l<r;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);