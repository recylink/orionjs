"use strict";(self.webpackChunkwebsitev_3=self.webpackChunkwebsitev_3||[]).push([[8506],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5429:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"cli",title:"CLI",sidebar_label:"CLI",sidebar_position:6},s=void 0,c={unversionedId:"getting-started/cli",id:"getting-started/cli",title:"CLI",description:"The cli is a module that will help you creating, running, and building your Orionjs app.",source:"@site/docs/getting-started/cli.md",sourceDirName:"getting-started",slug:"/getting-started/cli",permalink:"/docs/getting-started/cli",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/getting-started/cli.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"cli",title:"CLI",sidebar_label:"CLI",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Deploying",permalink:"/docs/getting-started/deploying"},next:{title:"Database",permalink:"/docs/getting-started/database"}},p={},u=[{value:"Create",id:"create",level:2},{value:"Start",id:"start",level:2},{value:"Build",id:"build",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The cli is a module that will help you creating, running, and building your Orionjs app."),(0,o.kt)("p",null,"You must install the cli globally in your computer by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add @orion-js/core\n")),(0,o.kt)("p",null,"To list all available commands run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"orion --help\n")),(0,o.kt)("h2",{id:"create"},"Create"),(0,o.kt)("p",null,"This command will create a new Orionjs project using a boilerplate available in the Orionjs repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"orion create --kit <kit-name> --name <app-name>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Remember to always run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," after creating a new app.")),(0,o.kt)("p",null,"Available kits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"typescript-starter"),": Contains a basic Orionjs TypeScript starter project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"graphql-starter"),": Contains a basic Orionjs GraphQL server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"http-starter"),": Contains a basic Orionjs HTTP server.")),(0,o.kt)("h2",{id:"start"},"Start"),(0,o.kt)("p",null,"This command will start the app for local developing. It compiles your code, refreshes to changes\nand starts a MongoDB instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"orion start\n")),(0,o.kt)("p",null,"You can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"--shell")," option to start Node inspector."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Google Chrome dev tool ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj"},"Node Inspector Manager")," will help you opening the console in Google Chrome.")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,"An Orionjs app compiles to a standard Node.js project.\nYou can deploy Orionjs to any server that run Node v8.\nTo build the app you must run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"orion build --output <build-dir>\n")))}m.isMDXComponent=!0}}]);