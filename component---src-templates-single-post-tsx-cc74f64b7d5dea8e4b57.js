(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),c=r("ZhPi"),i=r("Bnag");t.exports=function(t){return n(t)||o(t)||c(t)||i()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),c=r("lSNA"),i=r("8OQS");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=r("q1tI"),p=r("7ljp"),l=p.useMDXComponents,s=p.mdx,m=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,c=t.children,u=i(t,["scope","components","children"]),p=l(r),y=m(e),b=f.useMemo((function(){if(!c)return null;var t=a({React:f,mdx:s},y),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+c])).apply(void 0,[{}].concat(o(r)))}),[c,e]);return f.createElement(b,a({components:p},u))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},ilNY:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",(function(){return a}));var n=r("q1tI"),o=r.n(n),c=r("A2+M"),i=r("7cJT"),u=r("WGKq");e.default=function(t){var e=t.data,r=e.mdx.frontmatter.featureImage.childImageSharp.fluid,n=e.mdx.frontmatter.featureImage.publicURL;return o.a.createElement(i.c,null,o.a.createElement(i.k,{title:e.mdx.frontmatter.title,image:n,description:e.mdx.frontmatter.excerpt}),o.a.createElement(i.f,{fluid:r}),o.a.createElement(i.j,null,o.a.createElement(u.i,{margin:"0 0 2rem 0"},e.mdx.frontmatter.title),o.a.createElement(c.MDXRenderer,null,e.mdx.body)))};var a="2812774890"},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function c(e,r,i){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,r){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return r&&n(c,r.prototype),c},c.apply(null,arguments)}t.exports=c}}]);
//# sourceMappingURL=component---src-templates-single-post-tsx-cc74f64b7d5dea8e4b57.js.map