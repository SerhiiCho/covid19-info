(function(t){function e(e){for(var r,o,c=e[0],i=e[1],l=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,c=1;c<a.length;c++){var i=a[c];0!==s[i]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"03f3":function(t,e,a){"use strict";var r=a("4077"),s=a.n(r);s.a},"21bb":function(t,e,a){"use strict";var r=a("2dad"),s=a.n(r);s.a},"2dad":function(t,e,a){},4046:function(t,e,a){},4077:function(t,e,a){},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),s=a.n(r);s.a},"680b":function(t,e,a){t.exports=a.p+"img/covid.f87509aa.png"},"6bb7":function(t,e,a){"use strict";var r=a("7f53"),s=a.n(r);s.a},"6f13":function(t,e,a){"use strict";var r=a("4046"),s=a.n(r);s.a},"7f53":function(t,e,a){},"9c0c":function(t,e,a){},"9f3b":function(t,e,a){},bd6c:function(t,e,a){"use strict";var r=a("9f3b"),s=a.n(r);s.a},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("div",{staticClass:"container section"},[a("transition",{attrs:{name:"fade-in-left"}},[a("router-view")],1)],1),a("Footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"blue-grey darken-4"},[r("div",{staticClass:"container"},[r("div",{staticClass:"nav-wrapper"},[r("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t._v(" C"),r("img",{attrs:{src:a("680b"),alt:"covid logo",height:"30"}}),t._v("VID-19 ")])],1)])])},c=[],i=r["a"].extend({}),l=i,u=(a("6bb7"),a("2877")),d=Object(u["a"])(l,o,c,!1,null,"8bd0328c",null),f=d.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"indigo lighten-5"},[r("a",{attrs:{href:"https://serhii.tk","footer-link":"",target:"_blank"}},[r("img",{attrs:{src:a("cf05"),alt:"serhii cho logo",height:"35"}})])])}],b=(a("6f13"),{}),h=Object(u["a"])(b,p,v,!1,null,"1ea2c0e0",null),m=h.exports,_=r["a"].extend({components:{Navbar:f,Footer:m}}),y=_,C=(a("5c0b"),Object(u["a"])(y,s,n,!1,null,null,null)),g=C.exports,w=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"covid-page":""}},[null===t.stats?a("div",[a("div",{staticClass:"spinner"})]):a("div",[a("TotalCards",{attrs:{data:t.total}}),a("div",[a("label",{attrs:{"search-label":"",for:"search-country"}},[t._v("Search country")]),a("input",{staticClass:"browser-default",attrs:{type:"text",placeholder:"Country name",id:"search-country"},on:{keyup:t.filterStats}})]),a("div",{staticClass:"section"},[a("CovidTable",{attrs:{stats:t.stats}})],1)],1)])},S=[],O=(a("4de4"),a("7db0"),a("d81d"),a("4d63"),a("ac1f"),a("25f0"),a("bc3a")),j=a.n(O),k={requestHost:"covid-193.p.rapidapi.com",requestURL:"https://covid-193.p.rapidapi.com/statistics",requestKey:"091b42d8ecmsh380ec626aa86af5p14908ajsne8ee54be4633"},N=k,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"striped responsive-table"},[t._m(0),a("tbody",t._l(t.stats,(function(e){return a("tr",{key:e.country},[a("td",[t._v(t._s(e.country))]),a("td",[t._v(t._s(t.formatNumber(e.cases)))]),a("td",[t._v(" "+t._s(0===e.newCases?0:"+"+t.formatNumber(e.newCases))+" ")]),a("td",{staticClass:"red-text text-darken-3"},[t._v(" "+t._s(t.formatNumber(e.deaths))+" ")]),a("td",{staticClass:"green-text text-darken-4"},[t._v(" "+t._s(t.formatNumber(e.recovered))+" ")])])})),0)])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"blue-grey darken-4"},[a("th",[t._v("Country")]),a("th",[t._v("Confirmed")]),a("th",[t._v("New cases")]),a("th",[t._v("Deceased")]),a("th",[t._v("Recovered")])])])}],R=r["a"].extend({props:{stats:{default:null}}}),T=R,P=(a("03f3"),Object(u["a"])(T,$,E,!1,null,"f24eec4c",null)),q=P.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[null===t.data?a("div"):a("div",{staticClass:"row"},[a("div",{staticClass:"col m6 s12 l3"},[a("div",{staticClass:"card",staticStyle:{"border-top-color":"#a1bdf3"}},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Confirmed")]),a("p",[t._v(t._s(t.formatNumber(t.data.cases)))])])])]),a("div",{staticClass:"col m6 s12 l3"},[a("div",{staticClass:"card",staticStyle:{"border-top-color":"rgb(235, 94, 94)"}},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Deaths")]),a("p",[t._v(t._s(t.formatNumber(t.data.deaths)))])])])]),a("div",{staticClass:"col m6 s12 l3"},[a("div",{staticClass:"card",staticStyle:{"border-top-color":"rgb(235, 94, 94)"}},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("New cases")]),a("p",[t._v(t._s(0===t.data.newCases?0:"+"+t.formatNumber(t.data.newCases)))])])])]),a("div",{staticClass:"col m6 s12 l3"},[a("div",{staticClass:"card",staticStyle:{"border-top-color":"#00be89"}},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Recovered")]),a("p",[t._v(t._s(t.formatNumber(t.data.recovered)))])])])])])])},L=[],M=r["a"].extend({props:{data:{default:null}}}),A=M,D=(a("bd6c"),Object(u["a"])(A,I,L,!1,null,"6f1b97ea",null)),H=D.exports,B=r["a"].extend({data:function(){return{stats:null,initialStats:null,total:null,search:""}},created:function(){var t=this;this.getStats(),setInterval((function(){return t.getStats()}),1e4)},methods:{filterStats:function(t){if(null!==t.target&&null!==this.initialStats&&""!==t.target.value){var e=t.target.value;this.stats=this.initialStats.filter((function(t){return RegExp(e.toLowerCase()).test(t.country.toLowerCase())}))}else this.stats=this.initialStats},getStats:function(){var t=this,e={"x-rapidapi-host":N.requestHost,"x-rapidapi-key":N.requestKey};j.a.get(N.requestURL,{headers:e}).then((function(e){t.handleResponse(e.data.response)})).catch((function(t){return console.error(t)}))},remapResponseToStatsItem:function(t){return t.map((function(t){var e=0;if(null!==t.cases.new){var a=t.cases.new.length;e=parseInt(t.cases.new.substring(1,a))}return{cases:t.cases.total,recovered:t.cases.recovered,newCases:e,country:t.country,deaths:t.deaths.total,time:t.time}}))},handleResponse:function(t){var e=this.remapResponseToStatsItem(t);this.sortBy("cases",e),this.total=e.find((function(t){return"All"===t.country||"World"===t.country}))||null,this.stats=e.filter((function(t){return"All"!==t.country&&"World"!==t.country})),this.initialStats=e},sortBy:function(t,e){e.sort((function(e,a){return e[t]<a[t]?1:e[t]>a[t]?-1:0}))}},components:{CovidTable:q,TotalCards:H}}),F=B,J=(a("21bb"),Object(u["a"])(F,x,S,!1,null,null,null)),K=J.exports;r["a"].use(w["a"]);var U=[{path:"/",name:"Home",component:K}],W=new w["a"]({mode:"history",base:"/",linkActiveClass:"active",routes:U}),V=W,z=(a("8266"),a("6885"),a("d3b7"),a("5319"),function(t){return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")});r["a"].config.productionTip=!1,r["a"].prototype.formatNumber=z,new r["a"]({router:V,render:function(t){return t(g)}}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.c9bd5ce8.png"}});
//# sourceMappingURL=app.de3d2fcd.js.map