(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{160:function(e,t,r){var content=r(223);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("1b7833da",content,!0,{sourceMap:!1})},164:function(e,t,r){var n=r(10);e.exports=function(e,t){if(!n(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},165:function(e,t,r){"use strict";var n=r(157),o=r.n(n),c=r(207),l=r.n(c),d=(r(78),r(30),r(61),r(31),r(9),r(209),r(44),r(43),r(41)),h=r(212),f=r.n(h),m=r(58);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={mixins:[o()(f.a)],computed:v(v({},Object(m.c)(["allVehicles","getTheme"])),{},{getTypes:function(){return Array.from(new Set(this.allVehicles.map((function(element){return element.type}))))}}),data:function(){return{selected:"whatever"}},methods:{add:function(){this.$emit("onAdd",!0)}}},y=r(19),O=Object(y.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grid-header",attrs:{styleName:"grid-header"}},[r("span",{class:{cWhite:e.getTheme}},[e._v("Rent ")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],class:{bckgBlack:e.getTheme},attrs:{change:e.$emit("onChange",e.selected)},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?r:r[0]}}},[r("option",{attrs:{selected:""}},[e._v("whatever")]),e._v(" "),e._l(e.getTypes,(function(t){return r("option",{key:t},[e._v(e._s(t))])}))],2),e._v(" "),r("span",[e._v("Add new")]),e._v(" "),r("button",{on:{click:e.add}},[r("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"white",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z",fill:"#FCFCFC"}})])])])}),[],!1,null,null,null).exports,_=r(176),j={mixins:[o()(l.a)],components:{gridHeader:O,grid:_.default},data:function(){return{selected:""}},created:function(){},methods:{setScrollTop:function(e){this.selected=e,document.getElementsByClassName("grid-container")[0]&&(document.getElementsByClassName("grid-container")[0].scrollTop=0)},add:function(e){this.$emit("onAdd",e)}}},k=Object(y.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grid-wrapper",attrs:{styleName:"grid-wrapper"}},[r("gridHeader",{on:{onChange:function(t){return e.setScrollTop(t)},onAdd:function(t){return e.add(t)}}}),e._v(" "),r("grid",{attrs:{width:4,height:3,selected:e.selected}})],1)}),[],!1,null,null,null);t.a=k.exports;installComponents(k,{Grid:r(176).default})},167:function(e,t,r){"use strict";r.r(t);r(78),r(30),r(31),r(9),r(61);var n=r(41),o=r(157),c=r.n(o),l=r(218),d=r.n(l),h=(r(165),r(58));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={mixins:[c()(d.a)],methods:m({},Object(h.b)(["getVehicles"])),computed:m({},Object(h.c)(["getTheme"]))},v=r(19),component=Object(v.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"error",class:{bckgBlack:e.getTheme},attrs:{styleName:"error"}},[r("div",{staticClass:"error-content"},[r("h3",{class:{cWhite:e.getTheme}},[e._v("An error has occurred")]),e._v(" "),r("p",{class:{cLtGray:e.getTheme}},[e._v("Please refresh the page")]),e._v(" "),r("button",{on:{click:e.getVehicles}},[e._v("Reload page")])])])}),[],!1,null,null,null);t.default=component.exports},176:function(e,t,r){"use strict";r.r(t);r(78),r(30),r(31),r(9),r(61);var n=r(41),o=r(157),c=r.n(o),l=r(214),d=r.n(l),h=r(177),f=r(58);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={mixins:[c()(d.a)],props:["width","height","selected"],components:{card:h.default},computed:x(x({},Object(f.c)(["allVehicles","getTheme"])),{},{filtered:function(){var e=this;return""==this.selected||"whatever"==this.selected?this.allVehicles:this.allVehicles.filter((function(element){return element.type===e.selected}))}}),data:function(){return{}},methods:x(x({},Object(f.d)(["setCurrentVehicle"])),{},{details:function(e){this.setCurrentVehicle(e),this.$router.push({name:"details"})}})},w=r(19),component=Object(w.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grid-container"},[r("div",{staticClass:"grid",attrs:{styleName:"grid"}},e._l(e.filtered,(function(t){return r("card",{key:t.id,class:{bckgDblue:e.getTheme},attrs:{card_data:t},nativeOn:{click:function(r){return e.details(t)}}})})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Card:r(177).default})},177:function(e,t,r){"use strict";r.r(t);r(78),r(30),r(31),r(9),r(61);var n=r(41),o=r(157),c=r.n(o),l=r(216),d=r.n(l),h=r(58);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var m={mixins:[c()(d.a)],props:["card_data"],computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(h.c)(["getTheme"]))},x=r(19),component=Object(x.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card",attrs:{styleName:"card"}},[r("img",{attrs:{src:e.card_data.preview,alt:e.card_data.name,loading:"lazy"}}),e._v(" "),r("div",{staticClass:"info"},[r("h4",{class:{cWhite:e.getTheme}},[e._v(e._s(e.card_data.name))]),e._v(" "),r("p",[e._v(e._s(e.card_data.description))]),e._v(" "),r("p",[e._v(e._s(e.card_data.rent)+" $/h")])])])}),[],!1,null,null,null);t.default=component.exports},207:function(e,t,r){var content=r(208);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("5c6b496e",content,!0,{sourceMap:!1})},208:function(e,t,r){(t=r(59)(!1)).push([e.i,".grid-wrapper{width:1312px;height:952px;background:#f3f4f7;border-radius:48px;margin:0 auto;display:flex;display:-ms-flexbox;flex-direction:column}@media (max-width:375px){.grid-wrapper{width:375px;height:907px;border-radius:24px}}",""]),e.exports=t},209:function(e,t,r){"use strict";var strong=r(210),n=r(164);e.exports=r(211)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return strong.def(n(this,"Set"),e=0===e?0:e,e)}},strong)},210:function(e,t,r){"use strict";var n=r(8).f,o=r(79),c=r(111),l=r(20),d=r(109),h=r(110),f=r(81),m=r(112),x=r(82),v=r(7),w=r(108).fastKey,y=r(164),O=v?"_s":"size",_=function(e,t){var r,n=w(t);if("F"!==n)return e._i[n];for(r=e._f;r;r=r.n)if(r.k==t)return r};e.exports={getConstructor:function(e,t,r,f){var m=e((function(e,n){d(e,m,t,"_i"),e._t=t,e._i=o(null),e._f=void 0,e._l=void 0,e[O]=0,null!=n&&h(n,r,e[f],e)}));return c(m.prototype,{clear:function(){for(var e=y(this,t),data=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete data[r.i];e._f=e._l=void 0,e[O]=0},delete:function(e){var r=y(this,t),n=_(r,e);if(n){var o=n.n,c=n.p;delete r._i[n.i],n.r=!0,c&&(c.n=o),o&&(o.p=c),r._f==n&&(r._f=o),r._l==n&&(r._l=c),r[O]--}return!!n},forEach:function(e){y(this,t);for(var r,n=l(e,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(n(r.v,r.k,this);r&&r.r;)r=r.p},has:function(e){return!!_(y(this,t),e)}}),v&&n(m.prototype,"size",{get:function(){return y(this,t)[O]}}),m},def:function(e,t,r){var n,o,c=_(e,t);return c?c.v=r:(e._l=c={i:o=w(t,!0),k:t,v:r,p:n=e._l,n:void 0,r:!1},e._f||(e._f=c),n&&(n.n=c),e[O]++,"F"!==o&&(e._i[o]=c)),e},getEntry:_,setStrong:function(e,t,r){f(e,t,(function(e,r){this._t=y(e,t),this._k=r,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?m(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,m(1))}),r?"entries":"values",!r,!0),x(t)}}},211:function(e,t,r){"use strict";var n=r(4),o=r(6),c=r(12),l=r(111),meta=r(108),d=r(110),h=r(109),f=r(10),m=r(11),x=r(80),v=r(42),w=r(113);e.exports=function(e,t,r,y,O,_){var j=n[e],k=j,C=O?"set":"add",P=k&&k.prototype,T={},L=function(e){var t=P[e];c(P,e,"delete"==e||"has"==e?function(a){return!(_&&!f(a))&&t.call(this,0===a?0:a)}:"get"==e?function(a){return _&&!f(a)?void 0:t.call(this,0===a?0:a)}:"add"==e?function(a){return t.call(this,0===a?0:a),this}:function(a,b){return t.call(this,0===a?0:a,b),this})};if("function"==typeof k&&(_||P.forEach&&!m((function(){(new k).entries().next()})))){var D=new k,E=D[C](_?{}:-0,1)!=D,V=m((function(){D.has(1)})),z=x((function(e){new k(e)})),S=!_&&m((function(){for(var e=new k,t=5;t--;)e[C](t,t);return!e.has(-0)}));z||((k=t((function(t,r){h(t,k,e);var n=w(new j,t,k);return null!=r&&d(r,O,n[C],n),n}))).prototype=P,P.constructor=k),(V||S)&&(L("delete"),L("has"),O&&L("get")),(S||E)&&L(C),_&&P.clear&&delete P.clear}else k=y.getConstructor(t,e,O,C),l(k.prototype,r),meta.NEED=!0;return v(k,e),T[e]=k,o(o.G+o.W+o.F*(k!=j),T),_||y.setStrong(k,e,O),k}},212:function(e,t,r){var content=r(213);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("3f07cc2c",content,!0,{sourceMap:!1})},213:function(e,t,r){(t=r(59)(!1)).push([e.i,".grid-header{display:flex;display:-ms-flexbox;margin:56px 64px 40px}.grid-header select{margin-top:-1px}.grid-header select::-ms-expand{border:none;color:#4f5ffe;background:none}.grid-header select::-ms-expand:hover{background:none}.grid-header select,.grid-header span:first-of-type{height:48px;font-style:normal;font-weight:700;font-size:40px;line-height:48px}.grid-header span:first-of-type{color:#012345}.grid-header span:last-of-type{height:28px;font-style:normal;font-weight:700;font-size:20px;line-height:28px;display:block;margin:10px 20px 0 0}.grid-header select,.grid-header span:last-of-type{color:#4f5ffe}.grid-header select{background-color:#f3f4f7;border:none;margin-right:717px}.grid-header select:active .grid-header select:focus{outline:none}.grid-header button{width:48px;height:48px;background:#4959ff;border-radius:16px;border:none}@media (max-width:375px){.grid-header{width:375px;height:29px;margin:26px 51px 25px 16px}.grid-header select,.grid-header span:first-of-type{font-size:24px;line-height:120%;height:24px;margin-top:0}.grid-header select{margin-right:51px}.grid-header span:last-of-type{font-size:16px;line-height:136%;margin:4.5px 12px 0 0}.grid-header button{width:32px;height:32px;border-radius:8px}.grid-header button>svg{width:12px;height:12px}}",""]),e.exports=t},214:function(e,t,r){var content=r(215);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("0db2a398",content,!0,{sourceMap:!1})},215:function(e,t,r){(t=r(59)(!1)).push([e.i,".grid{width:1183.99px;height:752px;display:grid;grid-template-columns:repeat(3,373.33px);grid-template-rows:repeat(4,164px);grid-gap:32px;grid-column-gap:32px;-moz-column-gap:32px;column-gap:32px;grid-row-gap:32px;row-gap:32px;margin:0 auto;display:-ms-grid;-ms-grid-columns:373.33px 32px 373.33px 32px 373.33px;-ms-grid-rows:164px 32px 164px 32px 164px 32px 164px}::-webkit-scrollbar{width:0;background:transparent}.grid-container{-ms-overflow-style:none;scrollbar-width:none;overflow-y:scroll}@media (max-width:375px){.grid{width:343px;grid-row-gap:12px;row-gap:12px;grid-template-columns:repeat(1,343px);grid-template-rows:repeat(1,151px);-ms-grid-columns:343px 12px 343px 12px 343px;-ms-grid-rows:151px 12px 151px 12px 151px 12px 151px}.grid-container{height:803px}}",""]),e.exports=t},216:function(e,t,r){var content=r(217);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("0967ef2c",content,!0,{sourceMap:!1})},217:function(e,t,r){(t=r(59)(!1)).push([e.i,".card{width:373.33px;height:164px;background:#fcfcfc;border-radius:32px;display:flex;display:-ms-flexbox}.card:first-child{-ms-grid-column:1;-ms-grid-row:1}.card:nth-child(2){-ms-grid-column:3;-ms-grid-row:1}.card:nth-child(3){-ms-grid-column:5;-ms-grid-row:1}.card:nth-child(4){-ms-grid-column:1;-ms-grid-row:3}.card:nth-child(5){-ms-grid-column:3;-ms-grid-row:3}.card:nth-child(6){-ms-grid-column:5;-ms-grid-row:3}.card:nth-child(7){-ms-grid-column:1;-ms-grid-row:5}.card:nth-child(8){-ms-grid-column:3;-ms-grid-row:5}.card:nth-child(9){-ms-grid-column:5;-ms-grid-row:5}.card:nth-child(10){-ms-grid-column:1;-ms-grid-row:7}.card:nth-child(11){-ms-grid-column:3;-ms-grid-row:7}.card:nth-child(12){-ms-grid-column:5;-ms-grid-row:7}.card:hover{cursor:pointer}.card img{width:88px;height:88px;display:block;margin:24px 0 0 32px;border-radius:24px;-o-object-fit:cover;object-fit:cover}.info{margin:16px 0 0 24px}.info h4{height:14px;font-family:Codec Pro;font-style:normal;font-weight:700;font-size:16px;line-height:14px;color:#012345}.info p:first-of-type{width:197px;height:36px;font-weight:300;font-size:12px;color:#677b8f}.info p:first-of-type,.info p:last-of-type{font-family:Codec Pro;font-style:normal;line-height:18px}.info p:last-of-type{height:21px;font-weight:700;font-size:14px;color:#f84ab3}@media (max-width:375px){.card{width:343px;height:151px;border-radius:24px}.card img,.info{margin:20px 0 0 20px}.info>h4{margin:12px 0 0}.info p:first-of-type{margin:12px 0 16px}}",""]),e.exports=t},218:function(e,t,r){var content=r(219);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("5d2b7c00",content,!0,{sourceMap:!1})},219:function(e,t,r){(t=r(59)(!1)).push([e.i,".error-content{width:428px;height:180px;margin:264px auto;text-align:center}.error{width:1312px;height:708px;background:#f3f4f7;border-radius:48px;margin:0 auto;display:flex;flex-direction:column}.error h3{height:48px;font-style:normal;font-weight:700;font-size:40px;line-height:120%;color:#012345;margin:0 auto}.error p{height:20px;font-style:normal;font-weight:300;font-size:14px;line-height:146%;color:#677b8f;margin:24px 0 40px}.error button{width:161px;height:48px;background:#4959ff;color:#fff;border-radius:12px;border:none}.error button:hover{cursor:pointer}@media (max-width:375px){.error{width:375px;height:684px;border-radius:24px;margin:0 auto 20px}.error-content{width:249px;height:141px}.error h3{height:29px;font-size:24px}.error p{height:20px;font-size:14px;margin:16px 0 32px}.error button{width:133px;height:44px;font-size:14px;line-height:12px}}",""]),e.exports=t},220:function(e,t,r){var content=r(221);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("c9eaaa56",content,!0,{sourceMap:!1})},221:function(e,t,r){(t=r(59)(!1)).push([e.i,".modal-background{position:fixed;z-index:9998;top:0;left:0;width:100vw;height:100vh;display:table;transition:opacity .3s ease;background:rgba(52,79,106,.32);-webkit-backdrop-filter:blur(32px);backdrop-filter:blur(32px)}.modal-wrapper{width:600px;height:100%;background:#fcfcfc;border-radius:48px 0 0 48px;float:right;display:flex;flex-direction:column}.modal-frame{width:456px;height:772px;padding:64px 72px}.modal-header{display:flex;height:48px}.modal-header h5{height:48px;font-style:normal;font-weight:700;font-size:40px;line-height:120%;color:#012345;margin:0 91px 0 0}.modal-header button{width:48px;height:48px;background:#f3f4f7;border-radius:16px;border:none}.image-field{display:flex;flex-direction:column;justify-content:center;width:100%;height:348px;background:#f3f4f7;border-radius:24px;margin:40px 0 24px;background-size:cover;background-repeat:no-repeat;background-position:50%}.image-field-wrapper>input{width:48px;height:48px;opacity:0}.image-field-wrapper>input:hover,.image-field-wrapper svg:hover{cursor:pointer}.image-field-wrapper svg{overflow:visible;margin:15px 0 0 -34px}.image-field-wrapper{width:48px;height:48px;background:#fcfcfc;border-radius:16px;margin:0 auto;display:flex}.input-form{display:flex;flex-direction:column}.name-type{width:456px;display:flex;justify-content:space-between}.input-form input,.input-form select{width:206px;height:56px;background-color:#f3f4f7;border-radius:12px;font-style:normal;font-weight:300;font-size:16px;line-height:14px;color:#677b8f;border:none;padding:0 0 0 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none}.type{width:206px;display:flex}.type>svg{margin:25px 0 0 -28px}.input-form>input,.rent-price>input{width:436px;margin:24px 0 0}.input-form>button{width:100%;height:56px;left:912px;top:780px;background:#4959ff;font-style:normal;font-weight:700;font-size:16px;line-height:14px;color:#fcfcfc;border-radius:12px;border:none;margin:40px 0 0}.rent-price{display:flex;flex-direction:row}.rent-price>span{height:14px;font-style:normal;font-weight:300;font-size:16px;line-height:14px;text-align:right;color:#99a7b5;margin:45px 0 0 -47px}@media (max-width:375px){.modal-wrapper{height:765px;width:375px;margin-top:47px;border-radius:24px 24px 0 0}.modal-frame{height:690px;padding:28px 16px}.modal-header{height:29px}.modal-header h5{height:29px;font-size:24px;line-height:120%;margin:0 125px 0 0}.modal-header button{width:32px;height:32px;border-radius:8px}.modal-header button>svg{height:11px;width:11px}.image-field{width:343px;height:260px}.image-field-wrapper{border-radius:8px}.image-field-wrapper,.image-field-wrapper>input{width:32px;height:32px}.image-field-wrapper svg{margin:6px 0 0 -26px}.name-type{flex-direction:column}.type,.type select{width:343px}.input-form input{width:323px;height:52px;border-radius:12px;font-size:14px;line-height:12px}.input-form>input,.rent-price>input,.type{margin-top:16px}.input-form>button{width:343px;height:52px;border-radius:12px;margin:24px 0 0}.rent-price>span{font-size:14px;line-height:12px;margin:35px 0 0 -38px}}",""]),e.exports=t},222:function(e,t,r){"use strict";var n=r(160);r.n(n).a},223:function(e,t,r){var n=r(59),o=r(162),c=r(163);t=n(!1);var l=o(c);t.push([e.i,'@font-face{font-family:"Codec Pro";src:url('+l+")}body{overflow:hidden}.main{width:100vw;height:100vh;font-family:Codec Pro}button:hover,svg:hover{cursor:pointer}button:active,button:focus,input:active,input:focus,select:active,select:focus{outline:none}.bckgDblue{background-color:#012345!important}.bckgBlack{background-color:#011c37!important}.fillWhite{fill:#fcfcfc!important;stroke:#fff!important}.cLtGray{color:#99a7b5!important}.cDGray{color:#677b8f!important}.cWhite{color:#fcfcfc!important}",""]),e.exports=t},224:function(e,t,r){"use strict";r.r(t);r(78),r(30),r(31),r(9),r(61);var n=r(41),o=r(158),c=r(165),l=r(167),d=(r(32),r(33),r(157)),h=r.n(d),f=r(220),m=r.n(f),x=r(58);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={mixins:[h()(m.a)],computed:w({},Object(x.c)(["getTheme"])),data:function(){return{vehicle:{description:"",id:this.getRandomId(),image:"",name:"",preview:"",rent:"",specifications_text:"Some specifications text",team_text:"Some team text",term_text:"Some term text",type:"Type"}}},methods:w(w({},Object(x.d)(["addVehicle"])),{},{close:function(){this.$emit("onClose",!1)},add:function(){""===this.vehicle.type&&(this.vehicle.type="custom"),this.addVehicle(this.vehicle),this.close()},getRandomId:function(){for(var e=[],i=0;i<24;i++)e.push(Math.round(10*Math.random()).toString(16));return e.join("")},setImagePath:function(e){console.log(e),this.vehicle.image=URL.createObjectURL(e.target.files[0]),this.vehicle.preview=URL.createObjectURL(e.target.files[0])}})},O=r(19),_=Object(O.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"modal-window",styleName:"modal-window"}},[r("div",{staticClass:"modal-background",attrs:{styleName:"modal-background"}},[r("div",{staticClass:"modal-wrapper",class:{bckgDblue:e.getTheme}},[r("div",{staticClass:"modal-frame"},[r("div",{staticClass:"modal-header"},[r("h5",{class:{cWhite:e.getTheme}},[e._v("Add new vehicle")]),e._v(" "),r("button",{class:{bckgBlack:e.getTheme},on:{click:e.close}},[r("svg",{class:{fillWhite:e.getTheme},attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M6.99999 5.58623L11.95 0.63623L13.364 2.05023L8.41399 7.00023L13.364 11.9502L11.95 13.3642L6.99999 8.41423L2.04999 13.3642L0.635986 11.9502L5.58599 7.00023L0.635986 2.05023L2.04999 0.63623L6.99999 5.58623Z",fill:"#012345"}})])])]),e._v(" "),r("div",{staticClass:"image-field",class:{bckgBlack:e.getTheme},style:"background-image: url("+e.vehicle.image+")"},[r("div",{staticClass:"image-field-wrapper",class:{bckgDblue:e.getTheme}},[r("input",{attrs:{type:"file",accept:"image/*"},on:{change:e.setImagePath}}),e._v(" "),r("svg",{attrs:{width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M19 12V15H22V17H19V20H17V17H14V15H17V12H19ZM19.008 0C19.556 0 20 0.445 20 0.993V10.342C19.3576 10.1151 18.6813 9.99944 18 10V2H2L2.001 16L11.293 6.707C11.465 6.53448 11.694 6.43073 11.9371 6.41526C12.1802 6.39979 12.4206 6.47367 12.613 6.623L12.706 6.708L16.252 10.258C15.4766 10.4943 14.7572 10.8851 14.1369 11.407C13.5167 11.9288 13.0086 12.5709 12.6432 13.2944C12.2779 14.0179 12.0628 14.808 12.0111 15.6169C11.9593 16.4258 12.0719 17.2368 12.342 18.001L0.992 18C0.728813 17.9997 0.476497 17.895 0.290489 17.7088C0.104482 17.5226 -1.33455e-07 17.2702 0 17.007V0.993C0.00183004 0.730378 0.1069 0.479017 0.292513 0.293218C0.478126 0.107418 0.72938 0.00209465 0.992 0H19.008ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z",fill:"#4959FF"}})])])]),e._v(" "),r("div",{staticClass:"input-form"},[r("div",{staticClass:"name-type"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicle.name,expression:"vehicle.name"}],class:{bckgBlack:e.getTheme,cLtGray:e.getTheme},attrs:{type:"text",placeholder:"Name"},domProps:{value:e.vehicle.name},on:{input:function(t){t.target.composing||e.$set(e.vehicle,"name",t.target.value)}}}),e._v(" "),r("div",{staticClass:"type"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.vehicle.type,expression:"vehicle.type"}],class:{bckgBlack:e.getTheme,cLtGray:e.getTheme},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.vehicle,"type",t.target.multiple?r:r[0])}}},[r("option",{staticStyle:{display:"none"},attrs:{selected:"",disabled:""}},[e._v("Type")]),e._v(" "),r("option",{class:{bckgBlack:e.getTheme,cLtGray:e.getTheme},attrs:{selected:""}},[e._v("custom")])]),e._v(" "),r("svg",{attrs:{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M4.99996 6.00002L0.756958 1.75702L2.17196 0.343018L4.99996 3.17202L7.82796 0.343018L9.24296 1.75702L4.99996 6.00002Z",fill:"#4959FF"}})])])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicle.description,expression:"vehicle.description"}],class:{bckgBlack:e.getTheme,cLtGray:e.getTheme},attrs:{type:"text",placeholder:"Description"},domProps:{value:e.vehicle.description},on:{input:function(t){t.target.composing||e.$set(e.vehicle,"description",t.target.value)}}}),e._v(" "),r("div",{staticClass:"rent-price"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicle.rent,expression:"vehicle.rent"}],class:{bckgBlack:e.getTheme,cLtGray:e.getTheme},attrs:{type:"text",placeholder:"Rent price"},domProps:{value:e.vehicle.rent},on:{input:function(t){t.target.composing||e.$set(e.vehicle,"rent",t.target.value)}}}),r("span",{class:{cDGray:e.getTheme}},[e._v("$/h")])]),e._v(" "),r("button",{on:{click:e.add}},[e._v("Complete")])])])])])])}),[],!1,null,null,null).exports;function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C={components:{navigation:o.default,gridWrapper:c.a,error:l.default,modalWindow:_},computed:k({},Object(x.c)(["getStatus","getTheme"])),data:function(){return{showModal:!1}},methods:k({},Object(x.b)(["getVehicles"])),created:function(){this.getVehicles()}},P=(r(222),Object(O.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main",class:{bckgDblue:e.getTheme}},[r("navigation"),e._v(" "),e.getStatus?r("error"):r("gridWrapper",{class:{bckgBlack:e.getTheme},style:{},on:{onAdd:function(t){e.showModal=t}}}),e._v(" "),e.showModal?r("modalWindow",{on:{onClose:function(t){e.showModal=t}}}):e._e()],1)}),[],!1,null,null,null));t.default=P.exports;installComponents(P,{Navigation:r(158).default,Error:r(167).default})}}]);