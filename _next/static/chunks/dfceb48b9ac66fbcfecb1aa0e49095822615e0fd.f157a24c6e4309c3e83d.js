(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/h46":function(t,e,i){i("cHUd")("Map")},"0iUn":function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,"a",(function(){return n}))},"3niX":function(t,e,i){"use strict";e.__esModule=!0,e.flush=function(){var t=r.cssRules();return r.flush(),t},e.default=void 0;var n,o=i("q1tI");var r=new(((n=i("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(t){var e,i;function n(e){var i;return(i=t.call(this,e)||this).prevProps={},i}i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i,n.dynamic=function(t){return t.map((function(t){var e=t[0],i=t[1];return r.computeId(e,i)})).join(" ")};var o=n.prototype;return o.shouldComponentUpdate=function(t){return this.props.id!==t.id||String(this.props.dynamic)!==String(t.dynamic)},o.componentWillUnmount=function(){r.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&r.remove(this.prevProps),r.add(this.props),this.prevProps=this.props),null},n}(o.Component);e.default=s},"6SYY":function(t,e,i){"use strict";i.r(e);var n=i("0iUn"),o=i("sLSF"),r=i("vYYK"),s=i("I335");e.default=function(t){var e,i=function(){function e(){Object(n.a)(this,e),Object(r.a)(this,"location",void 0),Object(r.a)(this,"velocity",void 0),Object(r.a)(this,"acceleration",void 0),Object(r.a)(this,"topSpeed",void 0),this.location=t.createVector(t.width,t.height),this.velocity=t.createVector(0,0),this.acceleration=t.createVector(-.001,.01),this.topSpeed=10}return Object(o.a)(e,[{key:"createRandom2DVector",value:function(){var e=t.random(t.TWO_PI);return t.createVector(t.cos(e),t.sin(e))}},{key:"update",value:function(){var e=t.createVector(t.mouseX,t.mouseY),i=s.Vector.sub(e,this.location);i.normalize(),i.mult(.5),this.acceleration=i,this.velocity.add(this.acceleration),this.velocity.limit(this.topSpeed),this.location.add(this.velocity)}},{key:"checkEdges",value:function(){this.location.x>t.width?this.location.x=0:this.location.x<0&&(this.location.x=t.width),this.location.y>t.height?this.location.y=0:this.location.y<0&&(this.location.y=t.height)}},{key:"display",value:function(){t.stroke(0),t.fill(175),t.ellipse(this.location.x,this.location.y,16,16)}}]),e}();t.setup=function(){t.createCanvas(640,360),e=new i},t.draw=function(){t.background(255),e.update(),e.checkEdges(),e.display()}}},"8iia":function(t,e,i){var n=i("QMMT"),o=i("RRc/");t.exports=function(t){return function(){if(n(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},"8oxB":function(t,e){var i,n,o=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(i===setTimeout)return setTimeout(t,0);if((i===r||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"===typeof setTimeout?setTimeout:r}catch(t){i=r}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var t=a(d);l=!0;for(var e=u.length;e;){for(c=u,u=[];++h<e;)c&&c[h].run();h=-1,e=u.length}c=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];u.push(new p(t,e)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9Dj+":function(t,e,i){"use strict";var n=i("MX0m"),o=i.n(n),r=i("q1tI"),s=i.n(r),a=i("YFqc"),c=i.n(a),u=s.a.createElement;e.a=function(t){var e=t.subtitle,i=void 0===e?"":e,n=t.content,r=t.posts;return u("div",{className:"jsx-3338146293"},u("header",{className:"jsx-3338146293"},u("h1",{className:"jsx-3338146293"},u(c.a,{href:"/"},u("a",{className:"jsx-3338146293"},"The Nature Of Code")),i&&u("span",{className:"jsx-3338146293"},i))),u("nav",{className:"jsx-3338146293"},r.map((function(t,e){return u(c.a,{key:t.title,href:"/post?title=".concat(t.title)},u("a",{className:"jsx-3338146293"},e+1,". ",t.title))}))),u("main",{className:"jsx-3338146293"},n),u("footer",{className:"jsx-3338146293"},u("a",{href:"https://github.com/mii288/p5-playground",className:"jsx-3338146293"},"@mii288")),u(o.a,{id:"2797948978"},["header.jsx-3338146293 h1.jsx-3338146293{padding:0.5em 0;font-size:1.5rem;font-weight:900;}","header.jsx-3338146293 a.jsx-3338146293{-webkit-transition:color 0.2s;transition:color 0.2s;}","header.jsx-3338146293 a.jsx-3338146293:hover{color:#cc0066;}","header.jsx-3338146293 span.jsx-3338146293{color:#aaa;font-size:1.2rem;}","header.jsx-3338146293 span.jsx-3338146293:before{content:'>';margin:0 0.5em;}","div.jsx-3338146293{box-sizing:border-box;min-height:100vh;max-width:800px;margin:0 auto;display:grid;padding:1rem;grid-gap:1rem;grid-template-rows:auto 1fr auto;grid-template-columns:300px auto;grid-template-areas: 'header   header' 'sidebar  content' 'footer   footer';}","header.jsx-3338146293{grid-area:header;}","nav.jsx-3338146293{grid-area:sidebar;}","nav.jsx-3338146293 a.jsx-3338146293{z-index:0;padding:0.5em 0.5em;position:relative;display:block;width:100%;box-sizing:border-box;}","nav.jsx-3338146293 a.jsx-3338146293:after{content:'';z-index:-2;display:block;position:absolute;background-color:rgba(255,255,255,0.6);box-sizing:border-box;border:3px solid #cc0066;left:0;top:0;height:100%;width:100%;opacity:0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:all 0.2s;transition:all 0.2s;}","nav.jsx-3338146293 a.jsx-3338146293:hover.jsx-3338146293:after{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}","main.jsx-3338146293{grid-area:content;}","footer.jsx-3338146293{grid-area:footer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#aaa;padding-bottom:2rem;}","@media screen and (max-width:1000px){div.jsx-3338146293{grid-template-columns:none;grid-template-rows:auto auto 1fr auto;grid-template-areas: 'header' 'sidebar' 'content' 'footer';}nav.jsx-3338146293 a.jsx-3338146293{display:inline-block;width:auto;}}"]),u(o.a,{id:"3998491534"},["html{color:#333;font-size:15px;font-weight:400;font-family:'Rubik',monospace;background:#efefef;}","*{padding:0;margin:0;}","a{-webkit-text-decoration:none;text-decoration:none;color:currentColor;}"]))}},"9kyW":function(t,e,i){"use strict";t.exports=function(t){for(var e=5381,i=t.length;i;)e=33*e^t.charCodeAt(--i);return e>>>0}},"9xNB":function(t,e,i){"use strict";i.r(e),e.default=function(t){t.setup=function(){t.createCanvas(400,400),t.background(127)},t.draw=function(){var e=t.constrain(t.randomGaussian(0,250),0,255),i=t.constrain(t.randomGaussian(50,100),0,255),n=t.constrain(t.randomGaussian(200,50),0,255);t.fill(e,i,n,20),t.noStroke();var o=t.width/2,r=t.width/15,s=t.randomGaussian(o,r),a=t.randomGaussian(o,r);t.ellipse(s,a,40,40)}}},B8zJ:function(t,e,i){"use strict";i.r(e);var n=i("0iUn"),o=i("sLSF"),r=i("vYYK");e.default=function(t){var e,i=function(){function e(){Object(n.a)(this,e),Object(r.a)(this,"location",void 0),Object(r.a)(this,"velocity",void 0),Object(r.a)(this,"acceleration",void 0),Object(r.a)(this,"topSpeed",void 0),this.location=t.createVector(t.width,t.height),this.velocity=t.createVector(0,0),this.acceleration=t.createVector(-.001,.01),this.topSpeed=10}return Object(o.a)(e,[{key:"update",value:function(){var e=t.random(t.TWO_PI);this.acceleration=t.createVector(t.cos(e),t.sin(e)),this.acceleration.mult(t.random(2)),this.velocity.add(this.acceleration),this.velocity.limit(this.topSpeed),this.location.add(this.velocity)}},{key:"checkEdges",value:function(){this.location.x>t.width?this.location.x=0:this.location.x<0&&(this.location.x=t.width),this.location.y>t.height?this.location.y=0:this.location.y<0&&(this.location.y=t.height)}},{key:"display",value:function(){t.stroke(0),t.fill(175),t.ellipse(this.location.x,this.location.y,16,16)}}]),e}();t.setup=function(){t.createCanvas(640,360),e=new i},t.draw=function(){t.background(255),e.update(),e.checkEdges(),e.display()}}},BpgR:function(t,e,i){"use strict";i.r(e),e.default=function(t){var e=t.createVector(0,0),i=t.createVector(1,3.3);t.setup=function(){t.createCanvas(640,360),t.background(127)},t.draw=function(){t.background(127),e.x+=i.x,e.y+=i.y,(e.x>t.width||e.x<0)&&(i.x*=-1),(e.y>t.height||e.y<0)&&(i.y*=-1),t.stroke(0),t.fill(175),t.ellipse(e.x,e.y,16,16)}}},CuAY:function(t,e,i){"use strict";i.r(e);var n=i("0iUn"),o=i("sLSF"),r=i("vYYK");e.default=function(t){var e,i=function(){function e(){Object(n.a)(this,e),Object(r.a)(this,"x",void 0),Object(r.a)(this,"y",void 0),this.x=t.width/2,this.y=t.height/2}return Object(o.a)(e,[{key:"render",value:function(){t.stroke(0),t.point(this.x,this.y)}},{key:"step",value:function(){var e=t.randomGaussian(0,0),i=t.randomGaussian(0,0);console.log(e,i),this.x+=e,this.y+=i,this.x=t.constrain(this.x,0,t.width-1),this.y=t.constrain(this.y,0,t.height-1)}}]),e}();t.setup=function(){t.createCanvas(640,360),e=new i,t.background(127)},t.draw=function(){e.step(),e.render()}}},E1oA:function(t,e,i){"use strict";i.r(e),e.default=function(t){t.setup=function(){t.createCanvas(640,360)},t.draw=function(){t.background(255);var e=t.createVector(t.mouseX,t.mouseY),i=t.createVector(t.width/2,t.height/2);e.sub(i),t.translate(t.width/2,t.height/2),t.line(0,0,e.x,e.y)}}},IxgX:function(t,e,i){"use strict";i.r(e);var n=i("0iUn"),o=i("sLSF"),r=i("vYYK");e.default=function(t){var e,i=function(){function e(){Object(n.a)(this,e),Object(r.a)(this,"location",void 0),Object(r.a)(this,"velocity",void 0),this.location=t.createVector(t.random(t.width),t.random(t.height)),this.velocity=t.createVector(t.random(-2,2),t.random(-2,2))}return Object(o.a)(e,[{key:"update",value:function(){this.location.add(this.velocity)}},{key:"checkEdges",value:function(){this.location.x>t.width?this.location.x=0:this.location.x<0&&(this.location.x=t.width),this.location.y>t.height?this.location.y=0:this.location.y<0&&(this.location.y=t.height)}},{key:"display",value:function(){t.stroke(0),t.fill(175),t.ellipse(this.location.x,this.location.y,16,16)}}]),e}();t.setup=function(){t.createCanvas(640,360),e=new i},t.draw=function(){t.background(255),e.update(),e.checkEdges(),e.display()}}},"J/zq":function(t,e,i){"use strict";i.r(e),e.default=function(t){t.setup=function(){t.createCanvas(640,360),t.background(127)},t.draw=function(){var e=t.width/2,i=t.randomGaussian(e,60);t.noStroke(),t.fill(255,10),t.ellipse(i,180,16,16)}}},LX0d:function(t,e,i){t.exports=i("UDep")},MX0m:function(t,e,i){t.exports=i("3niX")},NOk4:function(t,e,i){"use strict";i.r(e);var n=i("0iUn"),o=i("sLSF"),r=i("vYYK");e.default=function(t){var e,i=function(){function e(){Object(n.a)(this,e),Object(r.a)(this,"position",void 0),Object(r.a)(this,"noff",void 0),this.position=t.createVector(t.width/2,t.height/2),this.noff=t.createVector(0,1e4)}return Object(o.a)(e,[{key:"render",value:function(){t.stroke(0),t.point(this.position.x,this.position.y)}},{key:"step",value:function(){this.position.x=t.map(t.noise(this.noff.x),0,1,0,t.width),this.position.y=t.map(t.noise(this.noff.y),0,1,0,t.height),this.noff.add(.01,.01,0)}}]),e}();t.setup=function(){t.createCanvas(640,360),e=new i,t.background(127)},t.draw=function(){e.step(),e.render()}}},NtpV:function(t,e,i){"use strict";i.r(e);var n=i("0iUn"),o=i("sLSF"),r=i("vYYK"),s=i("I335"),a=i.n(s);e.default=function(t){var e,i=function(){function e(i,o,s){Object(n.a)(this,e),Object(r.a)(this,"location",void 0),Object(r.a)(this,"velocity",void 0),Object(r.a)(this,"acceleration",void 0),Object(r.a)(this,"mass",void 0),this.location=t.createVector(o,s),this.velocity=t.createVector(0,0),this.acceleration=t.createVector(0,0),this.mass=i}return Object(o.a)(e,[{key:"applyForce",value:function(t){var e=a.a.Vector.div(t,this.mass);this.acceleration.add(e)}},{key:"update",value:function(){this.velocity.add(this.acceleration),this.location.add(this.velocity),this.acceleration.mult(0)}},{key:"checkEdges",value:function(){this.location.x>t.width?(this.velocity.x*=-1,this.location.x=t.width):this.location.x<0&&(this.velocity.x*=-1,this.location.x=0),this.location.y>t.height&&(this.velocity.y*=-1,this.location.y=t.height)}},{key:"display",value:function(){t.stroke(0),t.fill(175),t.ellipse(this.location.x,this.location.y,16,16)}}]),e}();t.setup=function(){t.createCanvas(640,360),e=Array(100).fill(0).map((function(){return new i(t.random(.1,5),1,1)}))},t.draw=function(){t.background(255);var i=t.createVector(0,.1),n=t.createVector(.1,0);e.map((function(t){t.applyForce(i),t.applyForce(n),t.update(),t.display(),t.checkEdges()}))}}},NtzS:function(t,e,i){"use strict";i.r(e);var n=i("0iUn"),o=i("sLSF"),r=i("vYYK"),s=i("I335"),a=i.n(s);e.default=function(t){var e,i=function(){function e(i,o,s){Object(n.a)(this,e),Object(r.a)(this,"location",void 0),Object(r.a)(this,"velocity",void 0),Object(r.a)(this,"acceleration",void 0),Object(r.a)(this,"mass",void 0),this.location=t.createVector(o,s),this.velocity=t.createVector(0,0),this.acceleration=t.createVector(0,0),this.mass=i}return Object(o.a)(e,[{key:"applyForce",value:function(t){var e=a.a.Vector.div(t,this.mass);this.acceleration.add(e)}},{key:"update",value:function(){this.velocity.add(this.acceleration),this.location.add(this.velocity),this.acceleration.mult(0)}},{key:"checkEdges",value:function(){this.location.x>t.width?(this.velocity.x*=-1,this.location.x=t.width):this.location.x<0&&(this.velocity.x*=-1,this.location.x=0),this.location.y>t.height&&(this.velocity.y*=-1,this.location.y=t.height)}},{key:"display",value:function(){t.stroke(0),t.fill(t.map(this.mass,.1,5,255,0),100),t.ellipse(this.location.x,this.location.y,20,20)}}]),e}();t.setup=function(){t.createCanvas(640,360),e=Array(100).fill(0).map((function(){return new i(t.random(.1,5),1,1)}))},t.draw=function(){t.background(255);var i=t.createVector(.001,0);e.map((function(e){var n=t.createVector(0,.1*e.mass);e.applyForce(n),e.applyForce(i),e.update(),e.display(),e.checkEdges()}))}}},PM1y:function(t,e,i){"use strict";i.r(e);var n=i("0iUn"),o=i("sLSF"),r=i("vYYK"),s=i("I335"),a=i.n(s);e.default=function(t){var e,i=function(){function e(){Object(n.a)(this,e),Object(r.a)(this,"location",void 0),Object(r.a)(this,"velocity",void 0),Object(r.a)(this,"acceleration",void 0),Object(r.a)(this,"topSpeed",void 0),this.location=t.createVector(t.width,t.height),this.velocity=t.createVector(0,0),this.acceleration=t.createVector(-.001,.01),this.topSpeed=10}return Object(o.a)(e,[{key:"update",value:function(){var e=t.createVector(t.mouseX,t.mouseY);this.acceleration=a.a.Vector.sub(e,this.location),this.acceleration.setMag(.2),this.velocity.add(this.acceleration),this.velocity.limit(this.topSpeed),this.location.add(this.velocity)}},{key:"checkEdges",value:function(){this.location.x>t.width?this.location.x=0:this.location.x<0&&(this.location.x=t.width),this.location.y>t.height?this.location.y=0:this.location.y<0&&(this.location.y=t.height)}},{key:"display",value:function(){t.stroke(0),t.fill(175),t.ellipse(this.location.x,this.location.y,16,16)}}]),e}();t.setup=function(){t.createCanvas(640,360),e=Array(20).fill(new i)},t.draw=function(){t.background(255),e.map((function(t){t.update(),t.checkEdges(),t.display()}))}}},"RRc/":function(t,e,i){var n=i("oioR");t.exports=function(t,e){var i=[];return n(t,!1,i.push,i,e),i}},SevZ:function(t,e,i){"use strict";e.__esModule=!0,e.default=void 0;var n=r(i("9kyW")),o=r(i("bVZc"));function r(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(t){var e=void 0===t?{}:t,i=e.styleSheet,n=void 0===i?null:i,r=e.optimizeForSpeed,s=void 0!==r&&r,a=e.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var e=t.prototype;return e.add=function(t){var e=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(t.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(t,e){return t[e]=0,t}),{}));var i=this.getIdAndRules(t),n=i.styleId,o=i.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var r=o.map((function(t){return e._sheet.insertRule(t)})).filter((function(t){return-1!==t}));this._indices[n]=r,this._instancesCounts[n]=1}},e.remove=function(t){var e=this,i=this.getIdAndRules(t).styleId;if(function(t,e){if(!t)throw new Error("StyleSheetRegistry: "+e+".")}(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var n=this._fromServer&&this._fromServer[i];n?(n.parentNode.removeChild(n),delete this._fromServer[i]):(this._indices[i].forEach((function(t){return e._sheet.deleteRule(t)})),delete this._indices[i]),delete this._instancesCounts[i]}},e.update=function(t,e){this.add(e),this.remove(t)},e.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},e.cssRules=function(){var t=this,e=this._fromServer?Object.keys(this._fromServer).map((function(e){return[e,t._fromServer[e]]})):[],i=this._sheet.cssRules();return e.concat(Object.keys(this._indices).map((function(e){return[e,t._indices[e].map((function(t){return i[t].cssText})).join(t._optimizeForSpeed?"":"\n")]})).filter((function(t){return Boolean(t[1])})))},e.createComputeId=function(){var t={};return function(e,i){if(!i)return"jsx-"+e;var o=String(i),r=e+o;return t[r]||(t[r]="jsx-"+(0,n.default)(e+"-"+o)),t[r]}},e.createComputeSelector=function(t){void 0===t&&(t=/__jsx-style-dynamic-selector/g);var e={};return function(i,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=i+n;return e[o]||(e[o]=n.replace(t,i)),e[o]}},e.getIdAndRules=function(t){var e=this,i=t.children,n=t.dynamic,o=t.id;if(n){var r=this.computeId(o,n);return{styleId:r,rules:Array.isArray(i)?i.map((function(t){return e.computeSelector(r,t)})):[this.computeSelector(r,i)]}}return{styleId:this.computeId(o),rules:Array.isArray(i)?i:[i]}},e.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(t,e){return t[e.id.slice(2)]=e,t}),{})},t}();e.default=s},Tr6G:function(t,e,i){"use strict";i.r(e),e.default=function(t){var e=t.createVector(0,0);t.setup=function(){t.createCanvas(640,360),t.noLoop(),t.pixelDensity(1),t.background(0)},t.draw=function(){t.loadPixels(),e.x=0;for(var i=0;i<t.width;i++){e.x+=.02,e.y=0;for(var n=0;n<t.height;n++){e.y+=.02;var o=4*(i+n*t.width);t.pixels[o+0]=0,t.pixels[o+1]=0,t.pixels[o+2]=0,t.pixels[o+3]=255*t.noise(e.x,e.y)}}t.updatePixels()}}},UDep:function(t,e,i){i("wgeU"),i("FlQf"),i("bBy9"),i("g33z"),i("XLbu"),i("/h46"),i("dVTT"),t.exports=i("WEpk").Map},Wu5q:function(t,e,i){"use strict";var n=i("2faE").f,o=i("oVml"),r=i("XJU/"),s=i("2GTP"),a=i("EXMj"),c=i("oioR"),u=i("MPFp"),l=i("UO39"),h=i("TJWN"),d=i("jmDH"),f=i("6/1s").fastKey,p=i("n3ko"),v=d?"_s":"size",y=function(t,e){var i,n=f(e);if("F"!==n)return t._i[n];for(i=t._f;i;i=i.n)if(i.k==e)return i};t.exports={getConstructor:function(t,e,i,u){var l=t((function(t,n){a(t,l,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=n&&c(n,i,t[u],t)}));return r(l.prototype,{clear:function(){for(var t=p(this,e),i=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete i[n.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var i=p(this,e),n=y(i,t);if(n){var o=n.n,r=n.p;delete i._i[n.i],n.r=!0,r&&(r.n=o),o&&(o.p=r),i._f==n&&(i._f=o),i._l==n&&(i._l=r),i[v]--}return!!n},forEach:function(t){p(this,e);for(var i,n=s(t,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)for(n(i.v,i.k,this);i&&i.r;)i=i.p},has:function(t){return!!y(p(this,e),t)}}),d&&n(l.prototype,"size",{get:function(){return p(this,e)[v]}}),l},def:function(t,e,i){var n,o,r=y(t,e);return r?r.v=i:(t._l=r={i:o=f(e,!0),k:e,v:i,p:n=t._l,n:void 0,r:!1},t._f||(t._f=r),n&&(n.n=r),t[v]++,"F"!==o&&(t._i[o]=r)),t},getEntry:y,setStrong:function(t,e,i){u(t,e,(function(t,i){this._t=p(t,e),this._k=i,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?l(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,l(1))}),i?"entries":"values",!i,!0),h(e)}}},XLbu:function(t,e,i){var n=i("Y7ZC");n(n.P+n.R,"Map",{toJSON:i("8iia")("Map")})},YFqc:function(t,e,i){t.exports=i("cTJO")},a3o8:function(t,e,i){"use strict";i.r(e);var n=i("0iUn"),o=i("sLSF"),r=i("vYYK"),s=i("I335"),a=i.n(s);e.default=function(t){var e,i=function(){function e(){Object(n.a)(this,e),Object(r.a)(this,"location",void 0),Object(r.a)(this,"velocity",void 0),Object(r.a)(this,"acceleration",void 0),Object(r.a)(this,"mass",void 0),this.location=t.createVector(30,30),this.velocity=t.createVector(0,0),this.acceleration=t.createVector(0,0),this.mass=1}return Object(o.a)(e,[{key:"applyForce",value:function(t){var e=a.a.Vector.div(t,this.mass);this.acceleration.add(e)}},{key:"update",value:function(){this.velocity.add(this.acceleration),this.location.add(this.velocity),this.acceleration.mult(0)}},{key:"checkEdges",value:function(){this.location.x>t.width?(this.velocity.x*=-1,this.location.x=t.width):this.location.x<0&&(this.velocity.x*=-1,this.location.x=0),this.location.y>t.height&&(this.velocity.y*=-1,this.location.y=t.height)}},{key:"display",value:function(){t.stroke(0),t.fill(175),t.ellipse(this.location.x,this.location.y,16,16)}}]),e}();t.setup=function(){t.createCanvas(640,360),e=new i},t.draw=function(){t.background(255);var i=t.createVector(0,.1),n=t.createVector(.1,0);e.applyForce(i),e.applyForce(n),e.update(),e.display(),e.checkEdges()}}},aYIH:function(t,e,i){"use strict";i.r(e);var n=i("0iUn"),o=i("sLSF"),r=i("vYYK");e.default=function(t){var e,i=function(){function e(){Object(n.a)(this,e),Object(r.a)(this,"location",void 0),Object(r.a)(this,"velocity",void 0),Object(r.a)(this,"acceleration",void 0),Object(r.a)(this,"topSpeed",void 0),this.location=t.createVector(t.width,t.height),this.velocity=t.createVector(0,0),this.acceleration=t.createVector(-.001,.01),this.topSpeed=10}return Object(o.a)(e,[{key:"update",value:function(){this.velocity.add(this.acceleration),this.velocity.limit(this.topSpeed),this.location.add(this.velocity)}},{key:"checkEdges",value:function(){this.location.x>t.width?this.location.x=0:this.location.x<0&&(this.location.x=t.width),this.location.y>t.height?this.location.y=0:this.location.y<0&&(this.location.y=t.height)}},{key:"display",value:function(){t.stroke(0),t.fill(175),t.ellipse(this.location.x,this.location.y,16,16)}}]),e}();t.setup=function(){t.createCanvas(640,360),e=new i},t.draw=function(){t.background(255),e.update(),e.checkEdges(),e.display()}}},bVZc:function(t,e,i){"use strict";(function(t){function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e.__esModule=!0,e.default=void 0;var n="undefined"!==typeof t&&t.env&&!0,o=function(t){return"[object String]"===Object.prototype.toString.call(t)},r=function(){function t(t){var e=void 0===t?{}:t,i=e.name,r=void 0===i?"stylesheet":i,a=e.optimizeForSpeed,c=void 0===a?n:a,u=e.isBrowser,l=void 0===u?"undefined"!==typeof window:u;s(o(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",s("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var e,r,a,c=t.prototype;return c.setOptimizeForSpeed=function(t){s("boolean"===typeof t,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=t,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var t=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(e,i){return"number"===typeof i?t._serverSheet.cssRules[i]={cssText:e}:t._serverSheet.cssRules.push({cssText:e}),i},deleteRule:function(e){t._serverSheet.cssRules[e]=null}}},c.getSheetForTag=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(t,e){if(s(o(t),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof e&&(e=this._serverSheet.cssRules.length),this._serverSheet.insertRule(t,e),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();"number"!==typeof e&&(e=i.cssRules.length);try{i.insertRule(t,e)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[e];this._tags.push(this.makeStyleTag(this._name,t,r))}return this._rulesCount++},c.replaceRule=function(t,e){if(this._optimizeForSpeed||!this._isBrowser){var i=this._isBrowser?this.getSheet():this._serverSheet;if(e.trim()||(e=this._deletedRulePlaceholder),!i.cssRules[t])return t;i.deleteRule(t);try{i.insertRule(e,t)}catch(r){n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),i.insertRule(this._deletedRulePlaceholder,t)}}else{var o=this._tags[t];s(o,"old rule at index `"+t+"` not found"),o.textContent=e}return t},c.deleteRule=function(t){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(t,"");else{var e=this._tags[t];s(e,"rule at index `"+t+"` not found"),e.parentNode.removeChild(e),this._tags[t]=null}else this._serverSheet.deleteRule(t)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(t){return t&&t.parentNode.removeChild(t)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var t=this;return this._isBrowser?this._tags.reduce((function(e,i){return i?e=e.concat(Array.prototype.map.call(t.getSheetForTag(i).cssRules,(function(e){return e.cssText===t._deletedRulePlaceholder?null:e}))):e.push(null),e}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(t,e,i){e&&s(o(e),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+t,""),e&&n.appendChild(document.createTextNode(e));var r=document.head||document.getElementsByTagName("head")[0];return i?r.insertBefore(n,i):r.appendChild(n),n},e=t,(r=[{key:"length",get:function(){return this._rulesCount}}])&&i(e.prototype,r),a&&i(e,a),t}();function s(t,e){if(!t)throw new Error("StyleSheet: "+e+".")}e.default=r}).call(this,i("8oxB"))},cTJO:function(t,e,i){"use strict";var n=i("/HRN"),o=i("WaGi"),r=i("ZDA2"),s=i("/+P4"),a=i("N9n2"),c=i("LX0d"),u=i("KI45"),l=i("5Uuq");e.__esModule=!0,e.default=void 0;var h,d=i("CxY0"),f=l(i("q1tI")),p=u(i("nOHt")),v=i("g/15");function y(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var m=new c,g=window.IntersectionObserver,_={};function b(){return h||(g?h=new g((function(t){t.forEach((function(t){if(m.has(t.target)){var e=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(h.unobserve(t.target),m.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var x=function(t){function e(t){var i;return n(this,e),(i=r(this,s(e).call(this,t))).p=void 0,i.cleanUpListeners=function(){},i.formatUrls=function(t){var e=null,i=null,n=null;return function(o,r){if(n&&o===e&&r===i)return n;var s=t(o,r);return e=o,i=r,n=s,s}}((function(t,e){return{href:y(t),as:e?y(e):e}})),i.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,o=e.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var r=i.formatUrls(i.props.href,i.props.as),s=r.href,a=r.as;if(function(t){var e=(0,d.parse)(t,!1,!0),i=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===i.protocol&&e.host===i.host}(s)){var c=window.location.pathname;s=(0,d.resolve)(c,s),a=a?(0,d.resolve)(c,a):s,t.preventDefault();var u=i.props.scroll;null==u&&(u=a.indexOf("#")<0),p.default[i.props.replace?"replace":"push"](s,a,{shallow:i.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},i.p=!1!==t.prefetch,i}return a(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href;return(0,d.resolve)(t,e)}},{key:"handleRef",value:function(t){var e=this,i=_[this.getHref()];this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),i||(this.cleanUpListeners=function(t,e){var i=b();return i?(i.observe(t),m.set(t,e),function(){try{i.unobserve(t)}catch(e){console.error(e)}m.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();p.default.prefetch(t),_[t]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,i=this.formatUrls(this.props.href,this.props.as),n=i.href,o=i.as;"string"===typeof e&&(e=f.default.createElement("a",null,e));var r=f.Children.only(e),s={ref:function(e){t.handleRef(e),r&&"object"===typeof r&&r.ref&&("function"===typeof r.ref?r.ref(e):"object"===typeof r.ref&&(r.ref.current=e))},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),t.prefetch()},onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(s.href=o||n),f.default.cloneElement(r,s)}}]),e}(f.Component);e.default=x},dVTT:function(t,e,i){i("aPfg")("Map")},fOu1:function(t,e,i){var n={"./1_10_Motion101Acceleration.ts":"6SYY","./1_11_Motion101AccelerationArray.ts":"PM1y","./1_1_BouncingBallNoVectors.ts":"BpgR","./1_3_VectorSubtraction.ts":"E1oA","./1_4_VectorMultiplication.ts":"iK8+","./1_5_VectorMagnitude.ts":"qmE0","./1_6_VectorNormalize.ts":"yGFY","./1_7_Motion101.ts":"IxgX","./1_8_Motion101Acceleration.ts":"aYIH","./1_9_Motion101Acceleration2.ts":"B8zJ","./2_1_ForcesTrail.ts":"a3o8","./2_2_ForcesManyTrail.ts":"NtpV","./2_3_ForcesManyRealGravity.ts":"NtzS","./2_4_ForcesFriction.ts":"zGPT","./I_1_RandomWalkTraditional.ts":"xSzc","./I_2_RandomDistribution.ts":"lTys","./I_4_Ex_I_4.ts":"9xNB","./I_4_Ex_I_5.ts":"CuAY","./I_4_Gaussian.ts":"J/zq","./I_5_NoiseWalk.ts":"NOk4","./I_Noise2D.ts":"Tr6G"};function o(t){var e=r(t);return i(e)}function r(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=r,t.exports=o,o.id="fOu1"},g33z:function(t,e,i){"use strict";var n=i("Wu5q"),o=i("n3ko");t.exports=i("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=n.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return n.def(o(this,"Map"),0===t?0:t,e)}},n,!0)},"iK8+":function(t,e,i){"use strict";i.r(e),e.default=function(t){t.setup=function(){t.createCanvas(640,360)},t.draw=function(){t.background(255);var e=t.createVector(t.mouseX,t.mouseY),i=t.createVector(t.width/2,t.height/2);e.sub(i),e.mult(.5),t.translate(t.width/2,t.height/2),t.line(0,0,e.x,e.y)}}},lTys:function(t,e,i){"use strict";i.r(e),e.default=function(t){var e=[];t.setup=function(){t.createCanvas(640,240),e=Array(20).fill(0)},t.draw=function(){t.background(255);var i=t.int(t.random(e.length));e[i]++,t.stroke(0),t.fill(175);var n=t.width/e.length;e.map((function(e,i){t.rect(i*n,t.height-e,n-1,e)}))}}},qmE0:function(t,e,i){"use strict";i.r(e),e.default=function(t){t.setup=function(){t.createCanvas(640,360)},t.draw=function(){t.background(255);var e=t.createVector(t.mouseX,t.mouseY),i=t.createVector(t.width/2,t.height/2);e.sub(i);var n=e.mag();t.fill(0),t.rect(0,0,n,10),t.translate(t.width/2,t.height/2),t.line(0,0,e.x,e.y)}}},sLSF:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("hfKm"),o=i.n(n);function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),o()(t,n.key,n)}}function s(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}},vYYK:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("hfKm"),o=i.n(n);function r(t,e,i){return e in t?o()(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},xSzc:function(t,e,i){"use strict";i.r(e);var n=i("0iUn"),o=i("sLSF"),r=i("vYYK");e.default=function(t){var e,i=function(){function e(){Object(n.a)(this,e),Object(r.a)(this,"x",void 0),Object(r.a)(this,"y",void 0),this.x=t.width/2,this.y=t.height/2}return Object(o.a)(e,[{key:"render",value:function(){t.stroke(0),t.point(this.x,this.y)}},{key:"step",value:function(){var e=t.random(-1,1),i=t.random(-1,1);this.x+=e,this.y+=i,this.x=t.constrain(this.x,0,t.width-1),this.y=t.constrain(this.y,0,t.height-1)}}]),e}();t.setup=function(){t.createCanvas(640,360),e=new i,t.background(127)},t.draw=function(){e.step(),e.render()}}},yGFY:function(t,e,i){"use strict";i.r(e),e.default=function(t){t.setup=function(){t.createCanvas(640,360)},t.draw=function(){t.background(255);var e=t.createVector(t.mouseX,t.mouseY),i=t.createVector(t.width/2,t.height/2);e.sub(i),e.normalize(),e.mult(50),t.translate(t.width/2,t.height/2),t.line(0,0,e.x,e.y)}}},zGPT:function(t,e,i){"use strict";i.r(e);var n=i("0iUn"),o=i("sLSF"),r=i("vYYK"),s=i("I335"),a=i.n(s);e.default=function(t){var e,i=function(){function e(i,o,s){Object(n.a)(this,e),Object(r.a)(this,"location",void 0),Object(r.a)(this,"velocity",void 0),Object(r.a)(this,"acceleration",void 0),Object(r.a)(this,"mass",void 0),this.location=t.createVector(o,s),this.velocity=t.createVector(0,0),this.acceleration=t.createVector(0,0),this.mass=i}return Object(o.a)(e,[{key:"applyForce",value:function(t){var e=a.a.Vector.div(t,this.mass);this.acceleration.add(e)}},{key:"update",value:function(){this.velocity.add(this.acceleration),this.location.add(this.velocity),this.acceleration.mult(0)}},{key:"checkEdges",value:function(){this.location.x>t.width?(this.velocity.x*=-1,this.location.x=t.width):this.location.x<0&&(this.velocity.x*=-1,this.location.x=0),this.location.y>t.height&&(this.velocity.y*=-1,this.location.y=t.height)}},{key:"display",value:function(){t.stroke(0),t.fill(t.map(this.mass,.1,5,255,0),100),t.ellipse(this.location.x,this.location.y,20,20)}}]),e}();t.setup=function(){t.createCanvas(640,360),e=Array(100).fill(0).map((function(){return new i(t.random(.1,5),1,1)}))},t.draw=function(){t.background(255);var i=t.createVector(.001,0);e.map((function(e){e.applyForce(i);var n=t.createVector(0,.1*e.mass);e.applyForce(n);var o=e.velocity.copy();o.mult(-1),o.normalize(),o.mult(.01),e.applyForce(o),e.update(),e.display(),e.checkEdges()}))}}}}]);