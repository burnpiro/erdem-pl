(this.webpackJsonp=this.webpackJsonp||[]).push([[10],{"+bWt":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("/d1K"),o=n("Zttt"),c=n("RXmK"),s=(n("rzGZ"),n("6kNP"),n("8npG"),n("kD0k")),u=n.n(s),l=(n("E5k/"),n("ls82"),n("R/WZ")),d=n("Z3vd"),f=n("Jw/v"),v=n("9pL1"),m=n.n(v);function h(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,a)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){h(i,r,a,o,c,"next",e)}function c(e){h(i,r,a,o,c,"throw",e)}o(void 0)}))}}var g={facingMode:"environment"},b=Object(l.a)((function(e){return{container:{position:"relative",maxWidth:"100%",width:"100%"},video:{zIndex:-1,maxWidth:"100%",position:"absolute"},canvas:{maxWidth:"100%",position:"absolute"},toggler:{marginBottom:e.spacing(2)},noModelMessage:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}}));function w(e,t){var n=e.bbox[0],r=e.bbox[1],a=e.bbox[2],i=e.bbox[3],o="16px sans-serif";t.strokeStyle="green",t.lineWidth=4,t.strokeRect(n,r,a,i),t.font=o,t.textBaseline="top",t.fillStyle="green";var c=t.measureText(e.class).width,s=parseInt(o,10);t.fillRect(n,r,c+4,s+4),t.fillStyle="#FFFFFF",t.fillText(e.class,n,r)}var x=null;"undefined"!=typeof Worker&&(x=f());var k=null;"undefined"!=typeof document&&(k=document.createElement("canvas"));var E=function(){var e=b(),t=Object(r.useState)(!0),n=t[0],i=t[1],o=Object(r.useState)(!0),c=o[0],s=o[1],l=Object(r.useState)(!1),f=l[0],v=l[1],h=Object(r.useRef)(null),E=Object(r.useRef)(null),y=function(){var e=p(u.a.mark((function e(t){var n,r,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=h.current,!t&&0!==n.videoWidth&&0!==n.videoHeight){e.next=3;break}return e.abrupt("return",null);case 3:return k.width=n.videoWidth,k.height=n.videoHeight,(r=k.getContext("2d")).drawImage(n,0,0,n.videoWidth,n.videoHeight),a=r.getImageData(0,0,n.videoWidth,n.videoHeight),e.next=10,x.getPrediction(a);case 10:return i=e.sent,e.abrupt("return",Object.assign({},i,{width:n.videoWidth,height:n.videoHeight}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=!c;return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({audio:!1,video:g}).then((function(e){return window.stream=e,h.current.srcObject=e,new Promise((function(e){h.current.onloadedmetadata=function(){e()}}))})).then(p(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:if(n=t.sent,E){t.next=5;break}return t.abrupt("return",{v:!1});case 5:E.current.width!==n.width&&(E.current.width=n.width),E.current.height!==n.height&&(E.current.height=n.height),f||null==n||v(!0),r=E.current.getContext("2d"),n&&null!=n.result&&n.result[0]&&(r.clearRect(0,0,E.current.width,E.current.height),n.result.forEach((function(e){w(e,r)})));case 10:case"end":return t.stop()}}),t)}));case 1:if(e){t.next=8;break}return t.delegateYield(n(),"t0",3);case 3:if("object"!=typeof(r=t.t0)){t.next=6;break}return t.abrupt("return",r.v);case 6:t.next=1;break;case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t)})))).catch((function(e){console.error(e)})):i(!1),function(){e=!0}}),[h,c]),a.a.createElement(a.a.Fragment,null,!f&&a.a.createElement("h2",{className:e.noModelMessage},"Give it a moment, model has to be loaded first (~5MB)",a.a.createElement("img",{src:m.a,alt:": ("})),a.a.createElement(d.a,{className:e.toggler,onClick:function(){s(!c)},margin:"normal",fullWidth:!0,variant:"contained",type:"submit",color:"primary"},c?"Turn OFF":"Turn ON"),!n&&a.a.createElement("span",null,"Cannot access webcam :("),a.a.createElement("div",{className:e.container},a.a.createElement("video",{className:e.video,autoPlay:!0,playsInline:!0,muted:!0,ref:h}),a.a.createElement("canvas",{className:e.canvas,ref:E})))},y=n("gGy4");t.default=function(){var e=Object(y.a)(),t=e.title,n=e.subtitle;return a.a.createElement(o.a,{title:"Object Detection TF2 - "+t,description:n},a.a.createElement(i.a,null),a.a.createElement(c.a,{title:"Simple Detector"},a.a.createElement(E,null)))}},"9pL1":function(e,t,n){e.exports=n.p+"static/loading-323d8b7d3d7937404db8f570a40e63c2.gif"},"Jw/v":function(e,t,n){var r=n("PWc5"),a=["getPrediction"];e.exports=function(){var e=new Worker(n.p+"b65b17852393eddd3c07.worker.js",{name:"[hash].worker.js"});return r(e,a),e}},PWc5:function(e,t,n){n("6kNP"),n("8npG"),n("JHok"),n("E5k/"),e.exports=function(e,t){var n=0,r={};e.addEventListener("message",(function(t){var n=t.data;if("RPC"===n.type)if(n.id){var a=r[n.id];a&&(delete r[n.id],n.error?a[1](Object.assign(Error(n.error.message),n.error)):a[0](n.result))}else{var i=document.createEvent("Event");i.initEvent(n.method,!1,!1),i.data=n.params,e.dispatchEvent(i)}})),t.forEach((function(t){e[t]=function(){for(var a=[],i=arguments.length;i--;)a[i]=arguments[i];return new Promise((function(i,o){var c=++n;r[c]=[i,o],e.postMessage({type:"RPC",id:c,method:t,params:a})}))}}))}}}]);
//# sourceMappingURL=component---src-pages-object-detection-js-7543e4659dbd966e1e9a.js.map