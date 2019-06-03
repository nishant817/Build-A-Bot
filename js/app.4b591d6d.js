(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],n[o]&&p.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/build-a-bot/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"00d0":function(t,e,r){},"034f":function(t,e,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"064b":function(t,e,r){},"0d38":function(t,e,r){},"27a3":function(t,e,r){"use strict";var a=r("cf94"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("nav",[a("ul",[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"},exact:""}},[a("img",{staticClass:"logo",attrs:{src:r("6649")}})])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Build"},exact:""}},[t._v("\n            Build a Bot\n          ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"BrowseParts"},exact:""}},[t._v("\n            Browse Parts\n          ")])],1)])])]),a("div",{staticClass:"container"},[a("aside",{staticClass:"aside"},[a("router-view",{attrs:{name:"sidebar"}})],1),a("main",[a("router-view")],1)])])},s=[],o={name:"app",components:{}},i=o,c=(r("034f"),r("2877")),l=Object(c["a"])(i,n,s,!1,null,null,null),u=l.exports,d=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[t._m(0),r("div",{staticClass:"getStarted"},[r("router-link",{attrs:{to:"/build"}},[t._v("Get Started")]),t._v("\n    Building your first Robot!\n  ")],1)])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"robot",attrs:{src:r("8c6e")}})])}],f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.availableParts?r("div",{staticClass:"content"},[r("button",{staticClass:"add-to-cart",on:{click:t.addToCart}},[t._v("Add to Cart")]),r("div",{staticClass:"top-row"},[r("PartSelector",{attrs:{parts:t.availableParts.heads}})],1),r("div",{staticClass:"middle-row"},[r("div",{staticClass:"left part"},[r("PartSelector",{attrs:{parts:t.availableParts.arms}})],1),r("div",{staticClass:"center part"},[r("PartSelector",{attrs:{parts:t.availableParts.torsos}})],1),r("div",{staticClass:"right part"},[r("PartSelector",{attrs:{parts:t.availableParts.arms}})],1)]),r("div",{staticClass:"bottom-row"},[r("div",{staticClass:"bottom part"},[r("PartSelector",{attrs:{parts:t.availableParts.bases}})],1)])]):t._e()},m=[],h=r("a4bb"),b=r.n(h),_=(r("ac6a"),{bind:function(t,e){"position"==e.arg&&(b()(e.modifiers).forEach(function(e){t.style[e]="1px"}),t.style.position="absolute",t.style.color="blue")}}),P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"part"},[r("router-link",{attrs:{to:{name:"Parts",params:{id:this.selectedPart.id,partType:this.selectedPart.type}}}},[r("img",{attrs:{src:t.selectedPart.src,title:"head"},on:{click:function(e){return t.showPartInfo()}}})]),r("button",{staticClass:"prev-selector",on:{click:function(e){return t.selectPreviousPart()}}},[t._v("◄")]),r("button",{staticClass:"next-selector",on:{click:function(e){return t.selectNextPart()}}},[t._v("►")]),r("span",{directives:[{name:"pin2",rawName:"v-pin2",value:{top:"5px",right:t.rightSide+"px",backgroundColor:"red",position:"absolute",color:"blue"},expression:"{top: '5px', right: rightSide+'px', backgroundColor: 'red', position: 'absolute', color: 'blue'}"},{name:"show",rawName:"v-show",value:t.selectedPart.onSale,expression:"selectedPart.onSale"}],on:{click:function(e){t.rightSide=t.rightSide+2,t.console.log(t.rightSide)}}},[t._v("Sale!")]),r("span",{directives:[{name:"pin1",rawName:"v-pin1:position.bottom.right",arg:"position",modifiers:{bottom:!0,right:!0}}],staticClass:"sale"},[t._v(t._s(t._f("currency")(t.selectedPart.cost,"$")))])],1)},g=[];function x(t,e){var r=t+1;return r>e-1?0:r}function y(t,e){var r=t-1;return r<0?e-1:r}var w={name:"PartSelector",props:["parts"],data:function(){return{selectedPartIndex:0,rightSide:5}},computed:{selectedPart:function(){return this.parts[this.selectedPartIndex]}},methods:{selectPreviousPart:function(){this.selectedPartIndex=y(this.selectedPartIndex,this.parts.length)},selectNextPart:function(){this.selectedPartIndex=x(this.selectedPartIndex,this.parts.length)},showPartInfo:function(){this.$router.push({name:"Parts",params:{id:this.selectedPart.id,partType:this.selectedPart.type}})}},directives:{pin1:_}},C=w,S=(r("8b96"),Object(c["a"])(C,P,g,!1,null,"4cd51a32",null)),k=S.exports,$={name:"RobotBuilder",created:function(){this.$store.dispatch("getParts")},components:{PartSelector:k},data:function(){return{cart:[],selectedRobot:{head:{},leftArm:{},rightArm:{},torso:{},base:{}}}},computed:{availableParts:function(){return this.$store.state.parts}},methods:{addToCart:function(){}}},O=$,j=(r("c894"),Object(c["a"])(O,f,m,!1,null,null,null)),B=j.exports,R={name:"HomePage",props:{msg:String},components:{RobotBuilder:B}},T=R,E=(r("ef35"),Object(c["a"])(T,p,v,!1,null,"860cba52",null)),H=E.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(t._s(t.part.title))]),r("div",[t._v("\r\n      "+t._s(t.part.description)+"\r\n   ")])])},A=[],N=(r("7514"),r("3be2")),M=r.n(N),J=(r("c5f6"),{name:"PartInfo",props:{partType:{type:String},id:{type:[Number,String],validator:function(t){return M()(Number(t))}}},computed:{part:function(){var t=this.partType,e=this.id,r=this.$store.state.parts;return r[t].find(function(t){return t.id===+e})}}}),F=J,G=Object(c["a"])(F,I,A,!1,null,null,null),q=G.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Browse Parts")]),r("ul",{staticClass:"menu"},[r("li",[r("router-link",{attrs:{to:{name:"RobotHeads"}}},[t._v(" Head ")])],1),r("li",[r("router-link",{attrs:{to:{name:"RobotArms"}}},[t._v(" Arms ")])],1),r("li",[r("router-link",{attrs:{to:{name:"RobotTorsos"}}},[t._v(" Torsos ")])],1),r("li",[r("router-link",{attrs:{to:{name:"RobotBases"}}},[t._v(" Bases ")])],1)]),r("router-view")],1)},D=[],K={name:"BrowseParts"},L=K,Q=(r("8ad9"),Object(c["a"])(L,z,D,!1,null,"65c0a0e0",null)),U=Q.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Heads")]),t._v("\r\n   Here are the heads\r\n\r\n   "),t._l(t.heads,function(e,a){return r("div",{key:a},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},W=[],X={name:"RobotHeads",data:function(){var t=this.$store.state.parts;return{heads:t.heads}}},Y=X,Z=Object(c["a"])(Y,V,W,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Arms")]),t._v("\r\n   The arms are how your robot will interact with the world.\r\n\r\n   "),t._l(t.arms,function(e,a){return r("div",{key:a},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},rt=[],at={name:"RobotArms",data:function(){var t=this.$store.state.parts;return{arms:t.arms}}},nt=at,st=Object(c["a"])(nt,et,rt,!1,null,null,null),ot=st.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Torsos")]),t._v("\r\n   Here are the torsos\r\n\r\n   "),t._l(t.torsos,function(e,a){return r("div",{key:a},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},ct=[],lt={name:"RobotTorsos",data:function(){var t=this.$store.state.parts;return{torsos:t.torsos}}},ut=lt,dt=Object(c["a"])(ut,it,ct,!1,null,null,null),pt=dt.exports,vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Bases")]),t._v("\r\n   Here are the bases\r\n\r\n   "),t._l(t.bases,function(e,a){return r("div",{key:a},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},ft=[],mt={name:"RobotBases",data:function(){var t=this.$store.state.parts;return{bases:t.bases}}},ht=mt,bt=Object(c["a"])(ht,vt,ft,!1,null,null,null),_t=bt.exports,Pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar"},[t._v("\r\n   Standard sidebar\r\n")])},gt=[],xt={name:"Standard"},yt=xt,wt=(r("9280"),Object(c["a"])(yt,Pt,gt,!1,null,"33b34956",null)),Ct=wt.exports,St=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar"},[t._v("\r\n   Build sidebar\r\n")])},kt=[],$t={name:"Build"},Ot=$t,jt=(r("27a3"),Object(c["a"])(Ot,St,kt,!1,null,"e1354ac4",null)),Bt=jt.exports;a["a"].use(d["a"]);var Rt=new d["a"]({routes:[{name:"Home",path:"/",components:{default:H,sidebar:Ct}},{name:"Build",path:"/build",components:{default:B,sidebar:Bt}},{name:"BrowseParts",path:"/parts/browse",component:U,children:[{name:"RobotHeads",path:"heads",component:tt},{name:"RobotArms",path:"arms",component:ot},{name:"RobotTorsos",path:"torsos",component:pt},{name:"RobotBases",path:"bases",component:_t}]},{name:"Parts",path:"/parts/:partType/:id",component:q,props:!0}]}),Tt=function(t,e){b()(e.value).forEach(function(r){t.style[r]=e.value[r]})},Et=function(t,e){return"".concat(e).concat(t.toFixed(1))},Ht=r("2f62"),It=r("bc3a"),At=r.n(It);a["a"].use(Ht["a"]);var Nt=new Ht["a"].Store({state:{cart:[],parts:null},mutations:{addRobotToCart:function(t,e){t.cart.push(e)},updateParts:function(t,e){t.parts=e}},actions:{getParts:function(t){var e=t.commit;At.a.get("/api/parts").then(function(t){return e("updateParts",t.data)}).catch(console.error)}}});a["a"].config.productionTip=!1,a["a"].directive("pin2",Tt),a["a"].filter("currency",Et),new a["a"]({render:function(t){return t(u)},router:Rt,store:Nt}).$mount("#app")},"64a9":function(t,e,r){},6649:function(t,e,r){t.exports=r.p+"img/build-a-bot-logo.bdca6725.png"},"8ad9":function(t,e,r){"use strict";var a=r("0d38"),n=r.n(a);n.a},"8b96":function(t,e,r){"use strict";var a=r("d390"),n=r.n(a);n.a},"8c6e":function(t,e,r){t.exports=r.p+"img/robot-home.90d11f5b.png"},9280:function(t,e,r){"use strict";var a=r("eefd"),n=r.n(a);n.a},c894:function(t,e,r){"use strict";var a=r("064b"),n=r.n(a);n.a},cf94:function(t,e,r){},d390:function(t,e,r){},eefd:function(t,e,r){},ef35:function(t,e,r){"use strict";var a=r("00d0"),n=r.n(a);n.a}});
//# sourceMappingURL=app.4b591d6d.js.map