(this.webpackJsonp=this.webpackJsonp||[]).push([[12],{188:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});var n=a(0),i=a.n(n),r=a(205),c=a(207),s=a(298),l=a(208),o=a(299),m=a(196),u="2538056049";t.default=function(e){var t=e.data,a=e.pageContext,n=Object(m.a)(),u=n.title,M=n.subtitle,d=a.tag,N=a.currentPage,E=a.prevPagePath,f=a.nextPagePath,x=a.hasPrevPage,g=a.hasNextPage,w=t.allMarkdownRemark.edges,y=N>0?'All Posts tagged as "'+d+'" - Page '+N+" - "+u:'All Posts tagged as "'+d+'" - '+u;return i.a.createElement(r.a,{title:y,description:M},i.a.createElement(c.a,null),i.a.createElement(l.a,{title:d},i.a.createElement(s.a,{edges:w}),i.a.createElement(o.a,{prevPagePath:E,nextPagePath:f,hasPrevPage:x,hasNextPage:g})))}},196:function(e,t,a){"use strict";var n=a(201),i=function(){return n.data.site.siteMetadata},r=a(202),c=function(){return r.data.allMarkdownRemark.group};a.d(t,"a",function(){return i}),a.d(t,"b",function(){return c})},199:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"}},i={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},201:function(e){e.exports={data:{site:{siteMetadata:{author:{name:"Kemal Erdem",bio:"Javascript Architect, Freelance Consultant, IoT enthusiast, MTB lover",photo:"/main.jpg",contacts:{email:"kemalpiro@gmail.com",twitter:"burnpiro",github:"burnpiro",rss:"/rss.xml"}},menu:[{label:"About me",path:"/pages/about"},{label:"Contact me",path:"/contact"}],url:"https://erdem.pl",title:"Blog by Kemal Erdem",subtitle:"Even complex things could be explain in a simple way.",copyright:"© All rights reserved.",disqusShortname:"",contactFormUrl:"https://docs.google.com/forms/d/e/1FAIpQLSdksRjFLVeWW2-wq8QSeKyJwUOs5LAq1bxsv0D9bTNEAQiu1g/formResponse"}}}}},202:function(e){e.exports={data:{allMarkdownRemark:{totalCount:9,group:[{totalCount:1,fieldValue:"DOM"},{totalCount:2,fieldValue:"Engines"},{totalCount:1,fieldValue:"Events"},{totalCount:4,fieldValue:"Internals"},{totalCount:9,fieldValue:"Javascript"},{totalCount:3,fieldValue:"Libraries"},{totalCount:5,fieldValue:"Performance"},{totalCount:3,fieldValue:"React"},{totalCount:2,fieldValue:"State"},{totalCount:1,fieldValue:"Web Workers"}]}}}},204:function(e,t,a){"use strict";var n=a(199),i=function(e){var t;switch(e){case"twitter":t=n.a.TWITTER;break;case"github":t=n.a.GITHUB;break;case"email":t=n.a.EMAIL;break;case"rss":t=n.a.RSS;break;default:t={}}return t},r=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"email":a="mailto:"+t;break;default:a=t}return a};a.d(t,"b",function(){return i}),a.d(t,"a",function(){return r})},205:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(220),c=a.n(r),s=a(169),l=a.n(s),o=a(221),m=a.n(o),u=function(e){var t=e.children,a=e.title,n=e.description;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:l.a.layout},i.a.createElement(c.a,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("title",null,a),i.a.createElement("meta",{name:"description",content:n}),i.a.createElement("meta",{property:"og:site_name",content:a}),i.a.createElement("meta",{name:"twitter:card",content:"summary"}),i.a.createElement("meta",{name:"twitter:title",content:a})),t),i.a.createElement(m.a,{location:"bottom"},"This website uses cookies to enhance the user experience"))};a.d(t,"a",function(){return u})},206:function(e,t,a){var n=a(32),i=a(26);a(212)("keys",function(){return function(e){return i(n(e))}})},207:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=(a(200),a(65)),c=a(170),s=a.n(c),l=function(e){var t=e.author,a=e.isIndex;return i.a.createElement("div",{className:s.a.author},i.a.createElement(r.Link,{to:"/"},i.a.createElement("img",{src:Object(r.withPrefix)(t.photo),className:s.a.author__photo,width:"75",height:"75",alt:t.name})),a?i.a.createElement("h1",{className:s.a.author__title},i.a.createElement(r.Link,{className:s.a["author__title-link"],to:"/"},t.name)):i.a.createElement("h2",{className:s.a.author__title},i.a.createElement(r.Link,{className:s.a["author__title-link"],to:"/"},t.name)),i.a.createElement("p",{className:s.a.author__subtitle},t.bio))},o=(a(99),a(66),a(44),a(206),a(204)),m=a(171),u=a.n(m),M=function(e){var t=e.icon;return i.a.createElement("svg",{className:u.a.icon,viewBox:t.viewBox},i.a.createElement("path",{d:t.path}))},d=a(172),N=a.n(d),E=function(e){var t=e.contacts;return i.a.createElement("div",{className:N.a.contacts},i.a.createElement("ul",{className:N.a.contacts__list},Object.keys(t).map(function(e){return i.a.createElement("li",{className:N.a["contacts__list-item"],key:e},i.a.createElement("a",{className:N.a["contacts__list-item-link"],href:Object(o.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(M,{icon:Object(o.b)(e)})))})))},f=a(173),x=a.n(f),g=function(e){var t=e.copyright;return i.a.createElement("div",{className:x.a.copyright},t)},w=a(174),y=a.n(w),h=function(e){var t=e.menu;return i.a.createElement("nav",{className:y.a.menu},i.a.createElement("ul",{className:y.a.menu__list},t.map(function(e){return i.a.createElement("li",{className:y.a["menu__list-item"],key:e.path},i.a.createElement(r.Link,{to:e.path,className:y.a["menu__list-item-link"],activeClassName:y.a["menu__list-item-link--active"]},e.label))})))},p=a(175),v=a.n(p),A=a(196),I=function(e){var t=e.isIndex,a=Object(A.a)(),n=a.author,r=a.copyright,c=a.menu;return i.a.createElement("div",{className:v.a.sidebar},i.a.createElement("div",{className:v.a.sidebar__inner},i.a.createElement(l,{author:n,isIndex:t}),i.a.createElement(h,{menu:c}),i.a.createElement(E,{contacts:n.contacts}),i.a.createElement(g,{copyright:r})))};a.d(t,"a",function(){return I})},208:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(176),c=a.n(r),s=function(e){var t=e.title,a=e.children,r=Object(n.useRef)();return Object(n.useEffect)(function(){r.current.scrollIntoView()}),i.a.createElement("div",{ref:r,className:c.a.page},i.a.createElement("div",{className:c.a.page__inner},t&&i.a.createElement("h1",{className:c.a.page__title},t),i.a.createElement("div",{className:c.a.page__body},a)))};a.d(t,"a",function(){return s})},212:function(e,t,a){var n=a(11),i=a(20),r=a(13);e.exports=function(e,t){var a=(i.Object||{})[e]||Object[e],c={};c[e]=t(a),n(n.S+n.F*r(function(){a(1)}),"Object",c)}},236:function(e,t,a){e.exports=a.p+"static/coffee-pika-fa945bf54f0e4127f87458537a283f69.svg"},237:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojYWE3YjUwO30uY2xzLTJ7ZmlsbDojYmI5NTczO30uY2xzLTN7ZmlsbDojZTZlNmU2O30uY2xzLTR7ZmlsbDojZjJmMmYyO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMjUiIGlkPSJMYXllcl8yNSI+PHJlY3QgY2xhc3M9ImNscy0xIiBoZWlnaHQ9IjYiIHdpZHRoPSI0NiIgeD0iOSIgeT0iMTMiLz48cmVjdCBjbGFzcz0iY2xzLTIiIGhlaWdodD0iNiIgd2lkdGg9IjMiIHg9IjUyIiB5PSIxMyIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSI1MyAxMyAxMSAxMyAxMiA5IDUyIDkgNTMgMTMiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iNTIgOSA0OSA5IDUwIDEzIDUzIDEzIDUyIDkiLz48cmVjdCBjbGFzcz0iY2xzLTEiIGhlaWdodD0iNCIgd2lkdGg9IjM2IiB4PSIxNCIgeT0iNSIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgaGVpZ2h0PSI0IiB3aWR0aD0iMyIgeD0iNDciIHk9IjUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iNDggNSA0OCAxIDQwIDUgNDggNSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSI1MSAxOSA0OS43MyAzMyA0OC4yNyA0OSA0NyA2MyAxNyA2MyAxNS43MyA0OSAxNC4yNyAzMyAxMyAxOSA1MSAxOSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSI0OCAxOSA0Ni43MyAzMyA0NS4yNyA0OSA0NCA2MyA0NyA2MyA0OC4yNyA0OSA0OS43MyAzMyA1MSAxOSA0OCAxOSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI0OS43MyAzMyA0OC4yNyA0OSAxNS43MyA0OSAxNC4yNyAzMyAyOCAzMyAzMiAzNyAzNiAzMyA0OS43MyAzMyIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSI0OS43MyAzMyA0OC4yNyA0OSA0NS4yNyA0OSA0Ni43MyAzMyA0OS43MyAzMyIvPjxwYXRoIGQ9Ik01NSwxMkg1My43ODFMNTIuOTcsOC43NTdBMSwxLDAsMCwwLDUyLDhINTFWNWExLDEsMCwwLDAtMS0xSDQ5VjFBMSwxLDAsMCwwLDQ3LjU1My4xMDVMMzkuNzY0LDRIMTRhMSwxLDAsMCwwLTEsMVY4SDEyYTEsMSwwLDAsMC0uOTcuNzU3TDEwLjIxOSwxMkg5YTEsMSwwLDAsMC0xLDF2NmExLDEsMCwwLDAsMSwxaDMuMDg3bDEuMTg4LDEzLjA3OHMwLC4wMDgsMCwuMDEzbC43MzYsOC4wNjVMMTYsNjMuMDkxQTEsMSwwLDAsMCwxNyw2NEg0N2ExLDEsMCwwLDAsMS0uOTA5TDQ5Ljk5LDQxLjE1NmwuNzM2LTguMDY1YzAtLjAwNSwwLS4wMDksMC0uMDEzTDUxLjkxMywyMEg1NWExLDEsMCwwLDAsMS0xVjEzQTEsMSwwLDAsMCw1NSwxMlpNNDcsMi42MThWNEg0NC4yMzZaTTE1LDZINDlWOEgxNVptLTIuMjE5LDRINTEuMjE5bC41LDJIMTIuMjgxWk00OCw0MWwtLjYzOSw3SDE2LjY0M0wxNiw0MWwtLjYzNi03SDI3LjU4NmwzLjcwNywzLjcwN2ExLDEsMCwwLDAsMS40MTQsMEwzNi40MTQsMzRINDguNjMyWm0tMS45MSwyMUgxNy45MTRMMTYuODIyLDUwSDQ3LjE3OFptMi43MjgtMzBIMzZhMSwxLDAsMCwwLS43MDcuMjkzTDMyLDM1LjU4NmwtMy4yOTMtMy4yOTNBMSwxLDAsMCwwLDI4LDMySDE1LjE4NkwxNC4xLDIwaDM1LjgxWk01NCwxOEgxMFYxNEg1NFoiLz48L2c+PC9zdmc+"},241:function(e,t,a){"use strict";a(269),a(102),a(270);var n=a(0),i=a.n(n),r=a(177),c=a.n(r),s=a(236),l=a.n(s),o=a(237),m=a.n(o),u=function(e){var t=e.readTime,a=t.text,n=t.minutes;return i.a.createElement("span",{className:c.a.readTime},Array.from(new Array(Math.floor(Number(n/20)))).map(function(e,t){return i.a.createElement("img",{src:l.a,key:t,className:c.a["readTime__icon-pika"]})}),Array.from(new Array(Math.floor(n/5)%4+(n<20?1:0))).map(function(e,t){return i.a.createElement("img",{src:m.a,key:t,className:c.a.readTime__icon})}),i.a.createElement("span",{className:c.a.readTime__text},a))};a.d(t,"a",function(){return u})},271:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(i.apply(this,n));else if("object"===r)for(var c in n)a.call(n,c)&&n[c]&&e.push(this&&this[c]||c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},298:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(268),c=a.n(r),s=a(65),l=a(178),o=a.n(l),m=a(241),u=function(e){var t=e.edges;return i.a.createElement("div",{className:o.a.feed},t.map(function(e){return i.a.createElement("div",{className:o.a.feed__item,key:e.node.fields.slug},i.a.createElement("div",{className:o.a["feed__item-meta"]},i.a.createElement("time",{className:o.a["feed__item-meta-time"],dateTime:c()(e.node.frontmatter.date).format("MMMM D, YYYY")},c()(e.node.frontmatter.date).format("MMMM D, YYYY")),i.a.createElement("span",{className:o.a["feed__item-meta-divider"]})),i.a.createElement("h2",{className:o.a["feed__item-title"]},i.a.createElement(s.Link,{className:o.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),i.a.createElement(m.a,{readTime:e.node.fields.readTime}),i.a.createElement("p",{className:o.a["feed__item-description"]},e.node.frontmatter.description),i.a.createElement(s.Link,{className:o.a["feed__item-readmore"],to:e.node.fields.slug},"Read"))}))};a.d(t,"a",function(){return u})},299:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(271),c=a.n(r),s=a(65),l=a(199),o=a(179),m=a.n(o),u=c.a.bind(m.a),M=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,r=e.hasPrevPage,c=u({"pagination__prev-link":!0,"pagination__prev-link--disable":!r}),o=u({"pagination__next-link":!0,"pagination__next-link--disable":!n});return i.a.createElement("div",{className:m.a.pagination},i.a.createElement("div",{className:m.a.pagination__prev},i.a.createElement(s.Link,{rel:"prev",to:t,className:c},l.b.PREV_PAGE)),i.a.createElement("div",{className:m.a.pagination__next},i.a.createElement(s.Link,{rel:"next",to:a,className:o},l.b.NEXT_PAGE)))};a.d(t,"a",function(){return M})}}]);
//# sourceMappingURL=component---src-templates-tag-template-js-fab11bf0cc5364746477.js.map