(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{194:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(207),i=r(205),c=r(208),u=(r(99),r(47),r(44),r(509)),l=r.n(u),s=(r(34),r(355),r(510)),h=r.n(s),f=r(538),m=r(543),d=r(511),p=r(513),v=r.n(p),g={facingMode:"environment"},y=Object(f.a)(function(t){return{container:{position:"relative",maxWidth:"100%",width:"100%"},video:{zIndex:-1,maxWidth:"100%",position:"absolute"},canvas:{maxWidth:"100%",position:"absolute"},toggler:{marginBottom:t.spacing(2)},noModelMessage:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}});function b(t,e){var r=t.bbox[0],n=t.bbox[1],a=t.bbox[2],o=t.bbox[3],i="16px sans-serif";e.strokeStyle="green",e.lineWidth=4,e.strokeRect(r,n,a,o),e.font=i,e.textBaseline="top",e.fillStyle="green";var c=e.measureText(t.class).width,u=parseInt(i,10);e.fillRect(r,n,c+4,u+4),e.fillStyle="#FFFFFF",e.fillText(t.class,r,n)}var E=null;"undefined"!=typeof Worker&&(E=d());var w=null;"undefined"!=typeof document&&(w=document.createElement("canvas"));var x=function(){var t=y(),e=Object(n.useState)(!0),r=e[0],o=e[1],i=Object(n.useState)(!0),c=i[0],u=i[1],s=Object(n.useState)(!1),f=s[0],d=s[1],p=Object(n.useRef)(null),x=Object(n.useRef)(null),k=(_=h()(l.a.mark(function t(e){var r,n,a,o;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=p.current,!e&&0!==r.videoWidth&&0!==r.videoHeight){t.next=3;break}return t.abrupt("return",null);case 3:return w.width=r.videoWidth,w.height=r.videoHeight,(n=w.getContext("2d")).drawImage(r,0,0,r.videoWidth,r.videoHeight),a=n.getImageData(0,0,r.videoWidth,r.videoHeight),t.next=10,E.getPrediction(a);case 10:return o=t.sent,t.abrupt("return",Object.assign({},o,{width:r.videoWidth,height:r.videoHeight}));case 12:case"end":return t.stop()}},t)})),function(t){return _.apply(this,arguments)});var _;return Object(n.useEffect)(function(){var t=!c;return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({audio:!1,video:g}).then(function(t){return window.stream=t,p.current.srcObject=t,new Promise(function(t){p.current.onloadedmetadata=function(){t()}})}).then(h()(l.a.mark(function e(){var r,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=l.a.mark(function e(){var r,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:if(r=e.sent,x){e.next=5;break}return e.abrupt("return",{v:!1});case 5:x.current.width!==r.width&&(x.current.width=r.width),x.current.height!==r.height&&(x.current.height=r.height),f||null==r||d(!0),n=x.current.getContext("2d"),r&&null!=r.result&&r.result[0]&&(n.clearRect(0,0,x.current.width,x.current.height),r.result.forEach(function(t){b(t,n)}));case 10:case"end":return e.stop()}},e)});case 1:if(t){e.next=8;break}return e.delegateYield(r(),"t0",3);case 3:if("object"!=typeof(n=e.t0)){e.next=6;break}return e.abrupt("return",n.v);case 6:e.next=1;break;case 8:return e.abrupt("return",!0);case 9:case"end":return e.stop()}},e)}))).catch(function(t){console.error(t)}):o(!1),function(){t=!0}},[p,c]),a.a.createElement(a.a.Fragment,null,!f&&a.a.createElement("h2",{className:t.noModelMessage},"Give it a moment, model has to be loaded first (~5MB)",a.a.createElement("img",{src:v.a,alt:": ("})),a.a.createElement(m.a,{className:t.toggler,onClick:function(){u(!c)},margin:"normal",fullWidth:!0,variant:"contained",type:"submit",color:"primary"},c?"Turn OFF":"Turn ON"),!r&&a.a.createElement("span",null,"Cannot access webcam :("),a.a.createElement("div",{className:t.container},a.a.createElement("video",{className:t.video,autoPlay:!0,playsInline:!0,muted:!0,ref:p}),a.a.createElement("canvas",{className:t.canvas,ref:x})))},k=r(196);e.default=function(){var t=Object(k.a)(),e=t.title,r=t.subtitle;return a.a.createElement(i.a,{title:"Object Detection TF2 - "+e,description:r},a.a.createElement(o.a,null),a.a.createElement(c.a,{title:"Simple Detector"},a.a.createElement(x,null)))}},196:function(t,e,r){"use strict";var n=r(201),a=function(){return n.data.site.siteMetadata},o=r(202),i=function(){return o.data.allMarkdownRemark.group};r.d(e,"a",function(){return a}),r.d(e,"b",function(){return i})},199:function(t,e,r){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"}},a={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a})},201:function(t){t.exports={data:{site:{siteMetadata:{author:{name:"Kemal Erdem",bio:"Javascript Architect, Freelance Consultant, IoT enthusiast, MTB lover",photo:"/main.jpg",contacts:{email:"kemalpiro@gmail.com",twitter:"burnpiro",github:"burnpiro",rss:"/rss.xml"}},menu:[{label:"About me",path:"/pages/about"},{label:"Contact me",path:"/contact"}],url:"https://erdem.pl",title:"Blog by Kemal Erdem",subtitle:"Even complex things could be explain in a simple way.",copyright:"© All rights reserved.",disqusShortname:"",contactFormUrl:"https://docs.google.com/forms/d/e/1FAIpQLSdksRjFLVeWW2-wq8QSeKyJwUOs5LAq1bxsv0D9bTNEAQiu1g/formResponse"}}}}},202:function(t){t.exports={data:{allMarkdownRemark:{totalCount:10,group:[{totalCount:1,fieldValue:"AI"},{totalCount:1,fieldValue:"DOM"},{totalCount:1,fieldValue:"Data"},{totalCount:2,fieldValue:"Engines"},{totalCount:1,fieldValue:"Events"},{totalCount:4,fieldValue:"Internals"},{totalCount:9,fieldValue:"Javascript"},{totalCount:3,fieldValue:"Libraries"},{totalCount:1,fieldValue:"Machine Learning"},{totalCount:5,fieldValue:"Performance"},{totalCount:3,fieldValue:"React"},{totalCount:2,fieldValue:"State"},{totalCount:1,fieldValue:"Tensorflow"},{totalCount:1,fieldValue:"Web Workers"}]}}}},204:function(t,e,r){"use strict";var n=r(199),a=function(t){var e;switch(t){case"twitter":e=n.a.TWITTER;break;case"github":e=n.a.GITHUB;break;case"email":e=n.a.EMAIL;break;case"rss":e=n.a.RSS;break;default:e={}}return e},o=function(t,e){var r;switch(t){case"twitter":r="https://www.twitter.com/"+e;break;case"github":r="https://github.com/"+e;break;case"email":r="mailto:"+e;break;default:r=e}return r};r.d(e,"b",function(){return a}),r.d(e,"a",function(){return o})},205:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(220),i=r.n(o),c=r(169),u=r.n(c),l=r(221),s=r.n(l),h=function(t){var e=t.children,r=t.title,n=t.description;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:u.a.layout},a.a.createElement(i.a,null,a.a.createElement("html",{lang:"en"}),a.a.createElement("title",null,r),a.a.createElement("meta",{name:"description",content:n}),a.a.createElement("meta",{property:"og:site_name",content:r}),a.a.createElement("meta",{name:"twitter:card",content:"summary"}),a.a.createElement("meta",{name:"twitter:title",content:r})),e),a.a.createElement(s.a,{location:"bottom"},"This website uses cookies to enhance the user experience"))};r.d(e,"a",function(){return h})},207:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=(r(200),r(65)),i=r(170),c=r.n(i),u=function(t){var e=t.author,r=t.isIndex;return a.a.createElement("div",{className:c.a.author},a.a.createElement(o.Link,{to:"/"},a.a.createElement("img",{src:Object(o.withPrefix)(e.photo),className:c.a.author__photo,width:"75",height:"75",alt:e.name})),r?a.a.createElement("h1",{className:c.a.author__title},a.a.createElement(o.Link,{className:c.a["author__title-link"],to:"/"},e.name)):a.a.createElement("h2",{className:c.a.author__title},a.a.createElement(o.Link,{className:c.a["author__title-link"],to:"/"},e.name)),a.a.createElement("p",{className:c.a.author__subtitle},e.bio))},l=(r(99),r(66),r(44),r(206),r(204)),s=r(171),h=r.n(s),f=function(t){var e=t.icon;return a.a.createElement("svg",{className:h.a.icon,viewBox:e.viewBox},a.a.createElement("path",{d:e.path}))},m=r(172),d=r.n(m),p=function(t){var e=t.contacts;return a.a.createElement("div",{className:d.a.contacts},a.a.createElement("ul",{className:d.a.contacts__list},Object.keys(e).map(function(t){return a.a.createElement("li",{className:d.a["contacts__list-item"],key:t},a.a.createElement("a",{className:d.a["contacts__list-item-link"],href:Object(l.a)(t,e[t]),rel:"noopener noreferrer",target:"_blank"},a.a.createElement(f,{icon:Object(l.b)(t)})))})))},v=r(173),g=r.n(v),y=function(t){var e=t.copyright;return a.a.createElement("div",{className:g.a.copyright},e)},b=r(174),E=r.n(b),w=function(t){var e=t.menu;return a.a.createElement("nav",{className:E.a.menu},a.a.createElement("ul",{className:E.a.menu__list},e.map(function(t){return a.a.createElement("li",{className:E.a["menu__list-item"],key:t.path},a.a.createElement(o.Link,{to:t.path,className:E.a["menu__list-item-link"],activeClassName:E.a["menu__list-item-link--active"]},t.label))})))},x=r(175),k=r.n(x),_=r(196),N=function(t){var e=t.isIndex,r=Object(_.a)(),n=r.author,o=r.copyright,i=r.menu;return a.a.createElement("div",{className:k.a.sidebar},a.a.createElement("div",{className:k.a.sidebar__inner},a.a.createElement(u,{author:n,isIndex:e}),a.a.createElement(w,{menu:i}),a.a.createElement(p,{contacts:n.contacts}),a.a.createElement(y,{copyright:o})))};r.d(e,"a",function(){return N})},208:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(176),i=r.n(o),c=function(t){var e=t.title,r=t.children,o=Object(n.useRef)();return Object(n.useEffect)(function(){o.current.scrollIntoView()}),a.a.createElement("div",{ref:o,className:i.a.page},a.a.createElement("div",{className:i.a.page__inner},e&&a.a.createElement("h1",{className:i.a.page__title},e),a.a.createElement("div",{className:i.a.page__body},r)))};r.d(e,"a",function(){return c})},355:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n=s;return function(a,o){if(n===f)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw o;return M()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?m:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=m,r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var s="suspendedStart",h="suspendedYield",f="executing",m="completed",d={};function p(){}function v(){}function g(){}var y={};y[o]=function(){return this};var b=Object.getPrototypeOf,E=b&&b(b(j([])));E&&E!==r&&n.call(E,o)&&(y=E);var w=g.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(r,a){function o(){return new Promise(function(e,o){!function e(r,a,o,i){var c=l(t[r],t,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(s).then(function(t){u.value=t,o(u)},function(t){return e("throw",t,o,i)})}i(c.arg)}(r,a,e,o)})}return e=e?e.then(o,o):o()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function j(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:M}}function M(){return{value:e,done:!0}}return v.prototype=w.constructor=g,g.constructor=v,g[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,a){var o=new k(u(e,r,n,a));return t.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(w),w[c]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},509:function(t,e,r){t.exports=r(355)},510:function(t,e){function r(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,a)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,u,"next",t)}function u(t){r(i,a,o,c,u,"throw",t)}c(void 0)})}}},511:function(t,e,r){var n=r(512),a=["getPrediction"];t.exports=function(){var t=new Worker(r.p+"802a36d68ae167d812d2.worker.js",{name:"[hash].worker.js"});return n(t,a),t}},512:function(t,e){t.exports=function(t,e){var r=0,n={};t.addEventListener("message",function(e){var r=e.data;if("RPC"===r.type)if(r.id){var a=n[r.id];a&&(delete n[r.id],r.error?a[1](Object.assign(Error(r.error.message),r.error)):a[0](r.result))}else{var o=document.createEvent("Event");o.initEvent(r.method,!1,!1),o.data=r.params,t.dispatchEvent(o)}}),e.forEach(function(e){t[e]=function(){for(var a=[],o=arguments.length;o--;)a[o]=arguments[o];return new Promise(function(o,i){var c=++r;n[c]=[o,i],t.postMessage({type:"RPC",id:c,method:e,params:a})})}})}},513:function(t,e,r){t.exports=r.p+"static/loading-323d8b7d3d7937404db8f570a40e63c2.gif"}}]);
//# sourceMappingURL=component---src-pages-object-detection-js-1b1e7421d30470278aad.js.map