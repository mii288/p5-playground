(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/h46":function(e,t,n){n("cHUd")("Map")},"0iUn":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var r,i=n("q1tI");var o=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return o.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=s},"8iia":function(e,t,n){var r=n("QMMT"),i=n("RRc/");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return i(this)}}},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var e=a(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9Dj+":function(e,t,n){"use strict";var r=n("MX0m"),i=n.n(r),o=n("q1tI"),s=n.n(o),a=n("YFqc"),u=n.n(a),c=s.a.createElement;t.a=function(e){var t=e.subtitle,n=void 0===t?"":t,r=e.content,o=e.posts;return c("div",{className:"jsx-929276978"},c("header",{className:"jsx-929276978"},c("h1",{className:"jsx-929276978"},c(u.a,{href:"/"},c("a",{className:"jsx-929276978"},"The Nature Of Code")),n&&c("span",{className:"jsx-929276978"},n))),c("nav",{className:"jsx-929276978"},o.map((function(e,t){return c(u.a,{key:e.title,href:"/post?title=".concat(e.title)},c("a",{className:"jsx-929276978"},t+1,". ",e.title))}))),c("main",{className:"jsx-929276978"},r),c("footer",{className:"jsx-929276978"},c("a",{href:"https://github.com/mii288/p5-playground",className:"jsx-929276978"},"@mii288")),c(i.a,{id:"1040170997"},["header.jsx-929276978 h1.jsx-929276978{padding:0.5em 0;font-size:1.5rem;font-weight:900;}","header.jsx-929276978 a.jsx-929276978{-webkit-transition:color 0.2s;transition:color 0.2s;}","header.jsx-929276978 a.jsx-929276978:hover{color:#cc0066;}","header.jsx-929276978 span.jsx-929276978{color:#aaa;font-size:1.2rem;}","header.jsx-929276978 span.jsx-929276978:before{content:'>';margin:0 0.5em;}","div.jsx-929276978{box-sizing:border-box;min-height:100vh;max-width:800px;margin:0 auto;display:grid;padding:1rem;grid-gap:1rem;grid-template-rows:auto 1fr auto;grid-template-columns:250px auto;grid-template-areas: 'header   header' 'sidebar  content' 'footer   footer';}","header.jsx-929276978{grid-area:header;}","nav.jsx-929276978{grid-area:sidebar;}","nav.jsx-929276978 a.jsx-929276978{z-index:0;padding:0.75em 0.5em;position:relative;display:block;width:100%;box-sizing:border-box;}","nav.jsx-929276978 a.jsx-929276978:after{content:'';z-index:-2;display:block;position:absolute;background-color:rgba(255,255,255,0.6);box-sizing:border-box;border:3px solid #cc0066;left:0;top:0;height:100%;width:100%;opacity:0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:all 0.2s;transition:all 0.2s;}","nav.jsx-929276978 a.jsx-929276978:hover.jsx-929276978:after{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}","main.jsx-929276978{grid-area:content;}","footer.jsx-929276978{grid-area:footer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#aaa;padding-bottom:2rem;}","@media screen and (max-width:1000px){div.jsx-929276978{grid-template-columns:none;grid-template-rows:auto auto 1fr auto;grid-template-areas: 'header' 'sidebar' 'content' 'footer';}nav.jsx-929276978 a.jsx-929276978{display:inline-block;width:auto;}}"]),c(i.a,{id:"3998491534"},["html{color:#333;font-size:15px;font-weight:400;font-family:'Rubik',monospace;background:#efefef;}","*{padding:0;margin:0;}","a{-webkit-text-decoration:none;text-decoration:none;color:currentColor;}"]))}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},"9xNB":function(e,t,n){"use strict";n.r(t),t.default=function(e){e.setup=function(){e.createCanvas(400,400),e.background(127)},e.draw=function(){var t=e.constrain(e.randomGaussian(0,250),0,255),n=e.constrain(e.randomGaussian(50,100),0,255),r=e.constrain(e.randomGaussian(200,50),0,255);e.fill(t,n,r,20),e.noStroke();var i=e.width/2,o=e.width/15,s=e.randomGaussian(i,o),a=e.randomGaussian(i,o);e.ellipse(s,a,40,40)}}},BpgR:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=e.createVector(0,0),n=e.createVector(1,3.3);e.setup=function(){e.createCanvas(640,360),e.background(127)},e.draw=function(){e.background(127),t.x+=n.x,t.y+=n.y,(t.x>e.width||t.x<0)&&(n.x*=-1),(t.y>e.height||t.y<0)&&(n.y*=-1),e.stroke(0),e.fill(175),e.ellipse(t.x,t.y,16,16)}}},CuAY:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),i=n("sLSF"),o=n("vYYK");t.default=function(e){var t,n=function(){function t(){Object(r.a)(this,t),Object(o.a)(this,"x",void 0),Object(o.a)(this,"y",void 0),this.x=e.width/2,this.y=e.height/2}return Object(i.a)(t,[{key:"render",value:function(){e.stroke(0),e.point(this.x,this.y)}},{key:"step",value:function(){var t=e.randomGaussian(0,0),n=e.randomGaussian(0,0);console.log(t,n),this.x+=t,this.y+=n,this.x=e.constrain(this.x,0,e.width-1),this.y=e.constrain(this.y,0,e.height-1)}}]),t}();e.setup=function(){e.createCanvas(640,360),t=new n,e.background(127)},e.draw=function(){t.step(),t.render()}}},"J/zq":function(e,t,n){"use strict";n.r(t),t.default=function(e){e.setup=function(){e.createCanvas(640,360),e.background(127)},e.draw=function(){var t=e.width/2,n=e.randomGaussian(t,60);e.noStroke(),e.fill(255,10),e.ellipse(n,180,16,16)}}},LX0d:function(e,t,n){e.exports=n("UDep")},MX0m:function(e,t,n){e.exports=n("3niX")},NOk4:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),i=n("sLSF"),o=n("vYYK");t.default=function(e){var t,n=function(){function t(){Object(r.a)(this,t),Object(o.a)(this,"position",void 0),Object(o.a)(this,"noff",void 0),this.position=e.createVector(e.width/2,e.height/2),this.noff=e.createVector(0,1e4)}return Object(i.a)(t,[{key:"render",value:function(){e.stroke(0),e.point(this.position.x,this.position.y)}},{key:"step",value:function(){this.position.x=e.map(e.noise(this.noff.x),0,1,0,e.width),this.position.y=e.map(e.noise(this.noff.y),0,1,0,e.height),this.noff.add(.01,.01,0)}}]),t}();e.setup=function(){e.createCanvas(640,360),t=new n,e.background(127)},e.draw=function(){t.step(),t.render()}}},"RRc/":function(e,t,n){var r=n("oioR");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),o=t+i;return e[o]||(e[o]="jsx-"+(0,r.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},Tr6G:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=e.createVector(0,0);e.setup=function(){e.createCanvas(640,360),e.noLoop(),e.pixelDensity(1),e.background(0)},e.draw=function(){e.loadPixels(),t.x=0;for(var n=0;n<e.width;n++){t.x+=.02,t.y=0;for(var r=0;r<e.height;r++){t.y+=.02;var i=4*(n+r*e.width);e.pixels[i+0]=0,e.pixels[i+1]=0,e.pixels[i+2]=0,e.pixels[i+3]=255*e.noise(t.x,t.y)}}e.updatePixels()}}},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},Wu5q:function(e,t,n){"use strict";var r=n("2faE").f,i=n("oVml"),o=n("XJU/"),s=n("2GTP"),a=n("EXMj"),u=n("oioR"),c=n("MPFp"),l=n("UO39"),h=n("TJWN"),f=n("jmDH"),d=n("6/1s").fastKey,p=n("n3ko"),v=f?"_s":"size",m=function(e,t){var n,r=d(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var l=e((function(e,r){a(e,l,t,"_i"),e._t=t,e._i=i(null),e._f=void 0,e._l=void 0,e[v]=0,void 0!=r&&u(r,n,e[c],e)}));return o(l.prototype,{clear:function(){for(var e=p(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[v]=0},delete:function(e){var n=p(this,t),r=m(n,e);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[v]--}return!!r},forEach:function(e){p(this,t);for(var n,r=s(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!m(p(this,t),e)}}),f&&r(l.prototype,"size",{get:function(){return p(this,t)[v]}}),l},def:function(e,t,n){var r,i,o=m(e,t);return o?o.v=n:(e._l=o={i:i=d(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=o),r&&(r.n=o),e[v]++,"F"!==i&&(e._i[i]=o)),e},getEntry:m,setStrong:function(e,t,n){c(e,t,(function(e,n){this._t=p(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?l(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,l(1))}),n?"entries":"values",!n,!0),h(t)}}},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,u=void 0===a?r:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,o,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),i=n("WaGi"),o=n("ZDA2"),s=n("/+P4"),a=n("N9n2"),u=n("LX0d"),c=n("KI45"),l=n("5Uuq");t.__esModule=!0,t.default=void 0;var h,f=n("CxY0"),d=l(n("q1tI")),p=c(n("nOHt")),v=n("g/15");function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var _=new u,y=window.IntersectionObserver,g={};function x(){return h||(y?h=new y((function(e){e.forEach((function(e){if(_.has(e.target)){var t=_.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(h.unobserve(e.target),_.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var b=function(e){function t(e){var n;return r(this,t),(n=o(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(i,o){if(r&&i===t&&o===n)return r;var s=e(i,o);return t=i,n=o,r=s,s}}((function(e,t){return{href:m(e),as:t?m(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,i=t.target;if("A"!==r||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),s=o.href,a=o.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var u=window.location.pathname;s=(0,f.resolve)(u,s),a=a?(0,f.resolve)(u,a):s,e.preventDefault();var c=n.props.scroll;null==c&&(c=a.indexOf("#")<0),p.default[n.props.replace?"replace":"push"](s,a,{shallow:n.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return a(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,f.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,n=g[this.getHref()];this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),_.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}_.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();p.default.prefetch(e),g[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=i||r),d.default.cloneElement(o,s)}}]),t}(d.Component);t.default=b},dVTT:function(e,t,n){n("aPfg")("Map")},fOu1:function(e,t,n){var r={"./1_1_BouncingBallNoVectors.ts":"BpgR","./I_1_RandomWalkTraditional.ts":"xSzc","./I_2_RandomDistribution.ts":"lTys","./I_4_Ex_I_4.ts":"9xNB","./I_4_Ex_I_5.ts":"CuAY","./I_4_Gaussian.ts":"J/zq","./I_5_NoiseWalk.ts":"NOk4","./I_Noise2D.ts":"Tr6G"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id="fOu1"},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),i=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(i(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(i(this,"Map"),0===e?0:e,t)}},r,!0)},lTys:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=[];e.setup=function(){e.createCanvas(640,240),t=Array(20).fill(0)},e.draw=function(){e.background(255);var n=e.int(e.random(t.length));t[n]++,e.stroke(0),e.fill(175);var r=e.width/t.length;t.map((function(t,n){e.rect(n*r,e.height-t,r-1,t)}))}}},sLSF:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("hfKm"),i=n.n(r);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(e,r.key,r)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},vYYK:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("hfKm"),i=n.n(r);function o(e,t,n){return t in e?i()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},xSzc:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),i=n("sLSF"),o=n("vYYK");t.default=function(e){var t,n=function(){function t(){Object(r.a)(this,t),Object(o.a)(this,"x",void 0),Object(o.a)(this,"y",void 0),this.x=e.width/2,this.y=e.height/2}return Object(i.a)(t,[{key:"render",value:function(){e.stroke(0),e.point(this.x,this.y)}},{key:"step",value:function(){var t=e.random(-1,1),n=e.random(-1,1);this.x+=t,this.y+=n,this.x=e.constrain(this.x,0,e.width-1),this.y=e.constrain(this.y,0,e.height-1)}}]),t}();e.setup=function(){e.createCanvas(640,360),t=new n,e.background(127)},e.draw=function(){t.step(),t.render()}}}}]);