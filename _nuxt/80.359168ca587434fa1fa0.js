(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{509:function(e,t,n){var content=n(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(46).default)("140e3200",content,!0,{sourceMap:!1})},516:function(e,t,n){"use strict";n(509)},517:function(e,t,n){var d=n(45)(!1);d.push([e.i,".PageHeader[data-v-0f4a591c]{display:flex;align-items:flex-end;flex-wrap:wrap}@media screen and (max-width:600px){.PageHeader[data-v-0f4a591c]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-0f4a591c]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-0f4a591c]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-0f4a591c]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-0f4a591c]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-0f4a591c]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-0f4a591c]{font-size:1.2rem;color:#707070;margin:.2em 0 0 auto}",""]),e.exports=d},536:function(e,t,n){"use strict";n.r(t);var d=n(0),r=n(171),c=d.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(e){return"".concat(this.$d(e,"dateTime")," JST")},convertDate:function(e){return Object(r.c)(e)}}}),o=(n(516),n(16)),l=n(73),f=n.n(l),m=n(433),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[e.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[e._v("\n      "+e._s(e.iconPath)+"\n    ")]):e._e(),e._v("\n    "+e._s(e.title)+"\n  ")],1),e._v(" "),e.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[e._v(e._s(e.$t("最終更新")))]),e._v(" "),n("time",{attrs:{datetime:e.convertDate(e.updatedAt)}},[e._v(e._s(e.formatDate(e.updatedAtAsDate)))])]):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(e.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[e._v(e._s(e.$t("注釈")))])])])}),[],!1,null,"0f4a591c",null);t.default=component.exports;f()(component,{VIcon:m.a})}}]);