"use strict";(self.webpackChunkwebsitev_3=self.webpackChunkwebsitev_3||[]).push([[2353],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(b,a(a({ref:t},l),{},{components:n})):r.createElement(b,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5007:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"introduction",title:"Introduction",sidebar_label:"Introduction",sidebar_position:1},s=void 0,u={unversionedId:"getting-started/introduction",id:"getting-started/introduction",title:"Introduction",description:"Orionjs was born with the vision of being a NodeJS framework that is focused on looking for simplicity when developing and being friendly for the developer.",source:"@site/docs/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/docs/getting-started/introduction",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/getting-started/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/getting-started/installation"}},l={},p=[{value:"Architecture Proposed",id:"architecture-proposed",level:2}],d={toc:p};function f(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Orionjs was born with the vision of being a NodeJS framework that is focused on looking for simplicity when developing and being friendly for the developer."),(0,i.kt)("p",null,"This framework consists basically in controllers, services and models.\nA controller is a function that starts an operation in your app, service is the logic of the application and a model contains the business rules."),(0,i.kt)("h2",{id:"architecture-proposed"},"Architecture Proposed"),(0,i.kt)("p",null,"What you will see below is a proposed architecture, but you are free to choose the one that best suits your needs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OrionJS",src:n(407).Z,width:"1718",height:"1098"})),(0,i.kt)("p",null,"This architecture proposes, the use of the following folder structure in a project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"app\n\u251c\u2500\u2500 controllers\n\u2502  \u251c\u2500\u2500 http\n\u2502  \u251c\u2500\u2500 echoes\n\u2502  \u251c\u2500\u2500 jobs\n\u2502  \u2514\u2500\u2500 resolvers\n\u251c\u2500\u2500 services\n\u2514\u2500\u2500 models\n")))}f.isMDXComponent=!0},407:function(e,t,n){t.Z=n.p+"assets/images/orionjs-architecture-18ce8b651e72b0bf8a842f536ed1b688.png"}}]);