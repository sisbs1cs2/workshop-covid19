(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{469:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_TAB"},558:function(t,e,n){var content=n(579);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("547eeb28",content,!0,{sourceMap:!1})},578:function(t,e,n){"use strict";n(558)},579:function(t,e,n){var o=n(45)(!1);o.push([t.i,".v-slide-group__content{border-bottom:1px solid #4d4d4d;background:#f8f9fa}.v-tabs{min-height:100vh}.v-tab{top:1px;margin:0 8px;border-style:solid;border-radius:4px 4px 0 0;font-weight:600!important;font-size:1.6rem!important}.v-tab:focus{outline:2px solid #1976d2}.v-tab--active{color:#4d4d4d!important;background:#f8f9fa;border-color:#4d4d4d #4d4d4d #f8f9fa;border-width:1px 1px 2px}.v-tab--active:before{background-color:transparent}.v-tab .TabIcon{transition:none}.v-tab:not(.v-tab--active){color:#008830!important;background:#fff;border-color:#008830 #008830 #4d4d4d;border-width:1px}.v-tab:not(.v-tab--active):hover{color:#fff!important;background:#008830}.v-tab:not(.v-tab--active) .TabIcon{color:inherit!important}.v-tabs-items{background-color:transparent!important}@media screen and (max-width:900px){.v-slide-group__content,.v-tab{width:100%}.v-tab{font-size:1.8229166667vw!important;font-weight:400!important;flex:1 1 auto;padding:0 8px!important;margin:0 6px}}@media screen and (max-width:600px){.v-tab{padding:0 4px!important;margin:0 4px}.TabIcon,.v-tab{font-size:2.6666666667vw!important}.TabIcon .v-icon__svg{width:2.6666666667vw!important;height:2.6666666667vw!important}}",""]),t.exports=o},633:function(t,e,n){"use strict";n.r(e);n(4),n(53),n(54),n(57),n(18),n(11),n(19),n(20);var o=n(61),r=n(0),c=n(469),l=function(){return n.e(127).then(n.bind(null,992))},d=function(){return n.e(128).then(n.bind(null,993))},v=function(){return n.e(129).then(n.bind(null,994))},f=r.default.extend({components:{CardsFeatured:l,CardsMonitoring:d,CardsReference:v},data:function(){return{tab:null,items:[{label:this.$t("注目の指標"),component:l,path:"/"},{label:this.$t("モニタリング項目"),component:d,path:"/monitoring"},{label:this.$t("その他 参考指標"),component:v,path:"/reference"}],mdiChartTimelineVariant:o.c}},mounted:function(){var t=this;this.$nextTick().then((function(){var e=t.$refs.tabs;if(e){var n=e.$el;n.querySelectorAll("div")[0].removeAttribute("role");var o=n.querySelectorAll("a");Array.prototype.slice.call(o,0).forEach((function(t){t.removeAttribute("role"),t.removeAttribute("aria-selected")}))}}))},methods:{change:function(){c.a.$emit(c.b)}}}),m=(n(578),n(16)),h=n(73),x=n.n(h),w=n(433),_=n(998),T=n(1019),k=n(1018),y=n(995),I=n(499),$=n.n(I),A=n(507),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{ref:"tabs",attrs:{"hide-slider":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.items,(function(e,i){return n("v-tab",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:i,attrs:{id:"cardTab-"+i,to:{path:t.localePath(e.path)},nuxt:"","exact-path":""},on:{click:t.change}},[n("v-icon",{staticClass:"TabIcon"},[t._v(t._s(t.mdiChartTimelineVariant))]),t._v("\n    "+t._s(e.label)+"\n  ")],1)})),t._v(" "),n("v-tabs-items",{attrs:{touchless:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e,i){return n("v-tab-item",{key:i,attrs:{value:t.localePath(e.path)}},[n(e.component,{tag:"lazy-component"})],1)})),1)],2)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VIcon:w.a,VTab:_.a,VTabItem:T.a,VTabs:k.a,VTabsItems:y.a}),$()(component,{Ripple:A.a})}}]);