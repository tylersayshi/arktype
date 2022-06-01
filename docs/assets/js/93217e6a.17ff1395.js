"use strict";(self.webpackChunk_re_docs=self.webpackChunk_re_docs||[]).push([[172],{9352:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(8055);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,f=m["".concat(i,".").concat(u)]||m[u]||s[u]||o;return t?n.createElement(f,l(l({ref:r},d),{},{components:t})):n.createElement(f,l({ref:r},d))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7054:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>u,default:()=>O,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var n=t(9352),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&d(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&d(e,t,r[t]);return e};const m={},u=void 0,f={unversionedId:"api/model.declare",id:"api/model.declare",title:"model.declare",description:"@re-/model &gt; declare",source:"@site/docs/model/api/model.declare.md",sourceDirName:"api",slug:"/api/model.declare",permalink:"/model/next/api/model.declare",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"model.compile",permalink:"/model/next/api/model.compile"}},y={},b=[{value:"declare variable",id:"declare-variable",level:2}],v={toc:b};function O(e){var r,t=e,{components:a}=t,d=((e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=s(s({},v),d),o(r,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/model/next/api/model"}),"@re-/model")," ",">"," ",(0,n.kt)("a",s({parentName:"p"},{href:"/model/next/api/model.declare"}),"declare")),(0,n.kt)("h2",s({},{id:"declare-variable"}),"declare variable"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-typescript"}),'declare: <DeclaredTypeNames extends string[]>(...names: import("@re-/tools").CastWithExclusion<DeclaredTypeNames, import("@re-/tools").NarrowRecurse<DeclaredTypeNames>, []>) => {\n    define: DeclaredDefineFunctionMap<import("@re-/tools").CastWithExclusion<DeclaredTypeNames, import("@re-/tools").NarrowRecurse<DeclaredTypeNames>, []>>;\n    compile: CompileFunction<DeclaredTypeNames>;\n}\n')))}O.isMDXComponent=!0}}]);