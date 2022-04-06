"use strict";(self.webpackChunkwebsitev_3=self.webpackChunkwebsitev_3||[]).push([[7732],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"echoes",title:"Echoes",sidebar_label:"Echoes",sidebar_position:7},l=void 0,p={unversionedId:"modules/echoes",id:"version-2.x/modules/echoes",title:"Echoes",description:"Echoes is an abstraction of kafkajs. It can be used as a standalone package without installing other orionjs packages.",source:"@site/versioned_docs/version-2.x/modules/echoes.md",sourceDirName:"modules",slug:"/modules/echoes",permalink:"/docs/2.x/modules/echoes",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/modules/echoes.md",tags:[],version:"2.x",sidebarPosition:7,frontMatter:{id:"echoes",title:"Echoes",sidebar_label:"Echoes",sidebar_position:7},sidebar:"version-2.x/tutorialSidebar",previous:{title:"Autoform",permalink:"/docs/2.x/modules/autoform"},next:{title:"Services",permalink:"/docs/2.x/modules/services"}},c={},u=[{value:"<code>startService</code>",id:"startservice",level:2},{value:"<code>echo</code>",id:"echo",level:2},{value:"<code>publish</code>",id:"publish",level:2},{value:"<code>request</code>",id:"request",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Echoes is an abstraction of ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.js.org/docs/consuming"},"kafkajs"),". It can be used as a standalone package without installing other orionjs packages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add @orion-js/echoes\n")),(0,o.kt)("h2",{id:"startservice"},(0,o.kt)("inlineCode",{parentName:"h2"},"startService")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.js.org/docs/configuration#broker-discovery"},"Client configuration")," for client params. See ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.js.org/docs/consuming"},"Consuming messages")," for consumer params. See ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.js.org/docs/producing"},"Producing messages")," for producer params."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"echoes")," is an object containing all of the service ",(0,o.kt)("inlineCode",{parentName:"p"},"echo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {startService} from '@orion-js/echoes'\nimport echoes from 'app/components/echoes'\nimport {route} from '@orion-js/app'\n\nstartService({\n  client: {\n    clientId: 'appName',\n    brokers: ['localhost:9092']\n  },\n  consumer: {\n    groupId: 'microserviceId'\n  },\n  producer: {},\n  requests: {\n    key: 'secretPassword',\n    startHandler: handler => route('/echoes-services', handler),\n    services: {\n      example: 'http://localhost:4100/echoes-services'\n    }\n  },\n  echoes\n})\n")),(0,o.kt)("h2",{id:"echo"},(0,o.kt)("inlineCode",{parentName:"h2"},"echo")),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"echo")," is a message handler. You can define multiple echoes in your app. All must be passed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"echoes")," param of ",(0,o.kt)("inlineCode",{parentName:"p"},"startService"),". The key in the ",(0,o.kt)("inlineCode",{parentName:"p"},"echoes")," params will be the name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"topic"),". An ",(0,o.kt)("inlineCode",{parentName:"p"},"echo")," definition must have 2 params. ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve"),":"),(0,o.kt)("p",null,"Type can be ",(0,o.kt)("inlineCode",{parentName:"p"},"echo.types.event")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"echo.types.request"),"."),(0,o.kt)("p",null,"You must pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," function, which has 2 arguments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params"),": The params passed when this event is called"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context"),": Contains the arguments in the ",(0,o.kt)("a",{parentName:"li",href:"https://kafka.js.org/docs/consuming#a-name-each-message-a-eachmessage"},(0,o.kt)("inlineCode",{parentName:"a"},"eachMessage")," Kafkajs function"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {echo} from '@orion-js/echoes'\n\nexport default echo({\n  type: echo.types.event,\n  async resolve(params, context) {\n    console.log('Received an event', params)\n  }\n})\n")),(0,o.kt)("h2",{id:"publish"},(0,o.kt)("inlineCode",{parentName:"h2"},"publish")),(0,o.kt)("p",null,"Publish sends a message that doesn't expects a response. It expects the following params:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"topic"),": Topic (",(0,o.kt)("inlineCode",{parentName:"li"},"echo"),") to send the message to"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params"),": The params that the ",(0,o.kt)("inlineCode",{parentName:"li"},"echo")," will receive. This params are serialized using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/yahoo/serialize-javascript"},(0,o.kt)("inlineCode",{parentName:"a"},"serialize-javascript"))," so you can pass all JavaScript basic types (not including functions)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ack"),": See ",(0,o.kt)("a",{parentName:"li",href:"https://kafka.js.org/docs/producing"},"Producing ack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout"),": See ",(0,o.kt)("a",{parentName:"li",href:"https://kafka.js.org/docs/producing"},"Producing timeout"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {publish} from '@orion-js/echoes'\n\nawait publish({\n  topic: 'onEvent',\n  params: {\n    hello: 'world',\n    date: new Date(),\n    number: 134433,\n    bool: true,\n    regexp: /alsothis/gi\n  }\n})\n")),(0,o.kt)("h2",{id:"request"},(0,o.kt)("inlineCode",{parentName:"h2"},"request")),(0,o.kt)("p",null,"Publish sends a http request that expects an instant response. It expects the following params:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method"),": Topic (",(0,o.kt)("inlineCode",{parentName:"li"},"echo"),") to send the message to"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"service"),": Service name that has an url mapped on the startService function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params"),": The params that the ",(0,o.kt)("inlineCode",{parentName:"li"},"echo")," will receive. This params are serialized using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/yahoo/serialize-javascript"},(0,o.kt)("inlineCode",{parentName:"a"},"serialize-javascript"))," so you can pass all JavaScript basic types (not including functions).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {request} from '@orion-js/echoes'\n\nawait request({\n  service: 'example',\n  method: 'getResponse',\n  params: {\n    hello: 'world',\n    date: new Date(),\n    number: 134433,\n    bool: true,\n    regexp: /alsothis/gi\n  }\n})\n")))}d.isMDXComponent=!0}}]);