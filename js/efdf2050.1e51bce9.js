(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["efdf2050"],{"37c8":function(t,e,r){e.f=r("2b4c")},"3a72":function(t,e,r){var n=r("7726"),o=r("8378"),a=r("2d00"),i=r("37c8"),c=r("86cc").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=a?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:i.f(t)})}},"454f":function(t,e,r){r("46a7");var n=r("584a").Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},"46a7":function(t,e,r){var n=r("63b6");n(n.S+n.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"7bbc":function(t,e,r){var n=r("6821"),o=r("9093").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?c(t):o(n(t))}},"7c73":function(t,e,r){},"85f2":function(t,e,r){t.exports=r("454f")},"8a81":function(t,e,r){"use strict";var n=r("7726"),o=r("69a8"),a=r("9e1e"),i=r("5ca1"),c=r("2aba"),s=r("67ab").KEY,f=r("79e5"),l=r("5537"),u=r("7f20"),p=r("ca5a"),b=r("2b4c"),y=r("37c8"),d=r("3a72"),v=r("d4c0"),h=r("1169"),m=r("cb7c"),g=r("d3f4"),w=r("4bf8"),O=r("6821"),S=r("6a99"),q=r("4630"),j=r("2aeb"),P=r("7bbc"),x=r("11e9"),_=r("2621"),k=r("86cc"),C=r("0d58"),D=x.f,E=k.f,F=P.f,N=n.Symbol,J=n.JSON,$=J&&J.stringify,M="prototype",I=b("_hidden"),T=b("toPrimitive"),z={}.propertyIsEnumerable,A=l("symbol-registry"),G=l("symbols"),K=l("op-symbols"),L=Object[M],R="function"==typeof N&&!!_.f,W=n.QObject,H=!W||!W[M]||!W[M].findChild,Q=a&&f((function(){return 7!=j(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=D(L,e);n&&delete L[e],E(t,e,r),n&&t!==L&&E(L,e,n)}:E,V=function(t){var e=G[t]=j(N[M]);return e._k=t,e},Y=R&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},B=function(t,e,r){return t===L&&B(K,e,r),m(t),e=S(e,!0),m(r),o(G,e)?(r.enumerable?(o(t,I)&&t[I][e]&&(t[I][e]=!1),r=j(r,{enumerable:q(0,!1)})):(o(t,I)||E(t,I,q(1,{})),t[I][e]=!0),Q(t,e,r)):E(t,e,r)},U=function(t,e){m(t);var r,n=v(e=O(e)),o=0,a=n.length;while(a>o)B(t,r=n[o++],e[r]);return t},X=function(t,e){return void 0===e?j(t):U(j(t),e)},Z=function(t){var e=z.call(this,t=S(t,!0));return!(this===L&&o(G,t)&&!o(K,t))&&(!(e||!o(this,t)||!o(G,t)||o(this,I)&&this[I][t])||e)},tt=function(t,e){if(t=O(t),e=S(e,!0),t!==L||!o(G,e)||o(K,e)){var r=D(t,e);return!r||!o(G,e)||o(t,I)&&t[I][e]||(r.enumerable=!0),r}},et=function(t){var e,r=F(O(t)),n=[],a=0;while(r.length>a)o(G,e=r[a++])||e==I||e==s||n.push(e);return n},rt=function(t){var e,r=t===L,n=F(r?K:O(t)),a=[],i=0;while(n.length>i)!o(G,e=n[i++])||r&&!o(L,e)||a.push(G[e]);return a};R||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(r){this===L&&e.call(K,r),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),Q(this,t,q(1,r))};return a&&H&&Q(L,t,{configurable:!0,set:e}),V(t)},c(N[M],"toString",(function(){return this._k})),x.f=tt,k.f=B,r("9093").f=P.f=et,r("52a7").f=Z,_.f=rt,a&&!r("2d00")&&c(L,"propertyIsEnumerable",Z,!0),y.f=function(t){return V(b(t))}),i(i.G+i.W+i.F*!R,{Symbol:N});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ot=0;nt.length>ot;)b(nt[ot++]);for(var at=C(b.store),it=0;at.length>it;)d(at[it++]);i(i.S+i.F*!R,"Symbol",{for:function(t){return o(A,t+="")?A[t]:A[t]=N(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in A)if(A[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),i(i.S+i.F*!R,"Object",{create:X,defineProperty:B,defineProperties:U,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:rt});var ct=f((function(){_.f(1)}));i(i.S+i.F*ct,"Object",{getOwnPropertySymbols:function(t){return _.f(w(t))}}),J&&i(i.S+i.F*(!R||f((function(){var t=N();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))}))),"JSON",{stringify:function(t){var e,r,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(r=e=n[1],(g(e)||void 0!==t)&&!Y(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!Y(e))return e}),n[1]=e,$.apply(J,n)}}),N[M][T]||r("32e9")(N[M],T,N[M].valueOf),u(N,"Symbol"),u(Math,"Math",!0),u(n.JSON,"JSON",!0)},"8e6e":function(t,e,r){var n=r("5ca1"),o=r("990b"),a=r("6821"),i=r("11e9"),c=r("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),s=i.f,f=o(n),l={},u=0;while(f.length>u)r=s(n,e=f[u++]),void 0!==r&&c(l,e,r);return l}})},"990b":function(t,e,r){var n=r("9093"),o=r("2621"),a=r("cb7c"),i=r("7726").Reflect;t.exports=i&&i.ownKeys||function(t){var e=n.f(a(t)),r=o.f;return r?e.concat(r(t)):e}},c47a:function(t,e,r){var n=r("85f2");function o(t,e,r){return e in t?n(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}t.exports=o},d4c0:function(t,e,r){var n=r("0d58"),o=r("2621"),a=r("52a7");t.exports=function(t){var e=n(t),r=o.f;if(r){var i,c=r(t),s=a.f,f=0;while(c.length>f)s.call(t,i=c[f++])&&e.push(i)}return e}},eb60:function(t,e,r){"use strict";var n=r("7c73"),o=r.n(n);o.a},f1ae:function(t,e,r){"use strict";var n=r("86cc"),o=r("4630");t.exports=function(t,e,r){e in t?n.f(t,e,o(0,r)):t[e]=r}},f241:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-layout",{staticClass:"bg-grey-1",attrs:{view:"lHh Lpr lFf"}},[r("q-header",{staticClass:"bg-grey-10",attrs:{reveal:t.$q.platform.is.desktop,elevated:""}},[r("q-toolbar",{staticClass:"container",class:{"q-my-lg":t.$q.platform.is.desktop}},[t.$q.platform.is.mobile?r("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[r("q-icon",{attrs:{name:"menu"}})],1):t._e(),r("q-toolbar-title",{attrs:{shrink:""}},[r("q-btn",{attrs:{to:"/",dense:"",flat:"",stretch:"",label:t.name,color:"deep-orange",icon:"gamepad",size:"xl"}})],1)],1),r("q-toolbar",{staticClass:"bg-white flex-center desktop-only gt-sm"},t._l(t.categories,(function(e,n){return r("q-list",{key:n,staticClass:"row"},[r("q-item",{attrs:{active:"",to:e.path}},[r("q-item-section",[r("q-item-label",{attrs:{overline:""}},[r("div",{staticClass:"text-subtitle1"},[t._v(t._s(e.name))])])],1)],1)],1)})),1)],1),t.$q.platform.is.mobile?r("q-drawer",{attrs:{"show-if-above":"","content-class":"bg-grey-10"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[r("div",{staticClass:"text-h4 flex text-left flex-left q-pa-md text-deep-orange"},[r("div",[t._v(t._s(t.name))])]),t._l(t.categories,(function(e,n){return r("q-list",{key:n,attrs:{dark:""}},[r("q-item",{attrs:{to:e.path,dense:"",active:""}},[r("q-item-section",[r("q-item-label",{staticStyle:{"font-size":"1.0rem"},attrs:{overline:""}},[t._v(t._s(e.name))])],1)],1),r("q-separator",{attrs:{spaced:"",inset:"",color:"transparent"}})],1)})),r("div",{staticClass:"q-px-md"},[r("q-btn",{staticStyle:{width:"120px"},attrs:{label:"Sair",outline:"",color:"deep-orange",unelevated:"","no-caps":""}})],1)],2):t._e(),r("q-page-container",[r("router-view")],1),r("q-footer",[r("div",{},[r("div",{staticClass:"bg-red"})])])],1)},o=[],a=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),i=r.n(a),c=r("2f62");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(r,!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"MyLayout",data:function(){return{name:"GAMEOVER",leftDrawerOpen:!1}},computed:{categories:function(){return this.$store.state.Category.categories}},methods:f({},Object(c["b"])("Category",["setCategories"])),mounted:function(){this.setCategories()}},u=l,p=(r("eb60"),r("2877")),b=Object(p["a"])(u,n,o,!1,null,null,null);e["default"]=b.exports}}]);