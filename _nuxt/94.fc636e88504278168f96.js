(window.webpackJsonp=window.webpackJsonp||[]).push([[94,80,81],{1012:function(t,e,n){"use strict";n.r(e);var r=n(0),d=n(106),o=n(536),c=n(570),l=r.default.extend({components:{PageHeader:o.default,StaticCard:c.default,AppLink:d.default},head:function(){return{title:this.$t("お子様をお持ちの皆様へ")}}}),_=n(16),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Parent"},[n("page-header",{attrs:{title:t.$t("お子様をお持ちの皆様へ")}}),t._v(" "),n("static-card",[n("h3",[n("app-link",{attrs:{to:"https://www.tgs.metro.tokyo.lg.jp/","icon-size":24}},[t._v(t._s(t.$t("TokyoGlobalStudio"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("英語を使う楽しさを体感できる動画コンテンツを、小学生・中学生・高校生向けに順次配信しています。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("app-link",{attrs:{to:"https://tokyodouga.jp/playlist/ohayoschool.html","icon-size":24}},[t._v(t._s(t.$t("TOKYOおはようスクール"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("学校休校中の子供たちの生活や学習を応援するテレビ番組です。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("app-link",{attrs:{to:"https://www.kyoiku.metro.tokyo.lg.jp/school/content/learning_support.html","icon-size":24}},[t._v(t._s(t.$t("学びの支援サイト"))+"\n      ")])],1),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("子供たちの学びを支援する様々なウェブサイトを紹介しています。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("学習の基本的な内容を身に付けられる「東京・ベーシック・ドリル」や動画教材等があります。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("感染予防・健康管理")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("手洗い、咳エチケット等により、感染予防に努めてください。"))),n("br"),t._v(" "),n("app-link",{attrs:{to:"https://tokyodouga.jp/lViN9C_BS-0.html","icon-size":16}},[t._v(t._s(t.$t("【参考】感染症予防のための正しい手洗い方法（動画）"))+"\n        ")])],1),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("感染症を疑う場合の対応")))]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.$t("各保健所にご相談ください")))]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("各保健所の電話番号について"))+"\n        "),n("br"),t._v(" "),n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html","icon-size":16}},[t._v(t._s(t.$t("「新型コロナウイルス感染症にかかる相談窓口について」"))+"\n        ")])],1)])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("その他")))]),t._v(" "),n("p",[t._v(t._s(t.$t("詳細は、各学校からのお知らせ等をご確認ください。")))])])],1)}),[],!1,null,null,null);e.default=component.exports},509:function(t,e,n){var content=n(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("140e3200",content,!0,{sourceMap:!1})},516:function(t,e,n){"use strict";n(509)},517:function(t,e,n){var r=n(45)(!1);r.push([t.i,".PageHeader[data-v-0f4a591c]{display:flex;align-items:flex-end;flex-wrap:wrap}@media screen and (max-width:600px){.PageHeader[data-v-0f4a591c]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-0f4a591c]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-0f4a591c]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-0f4a591c]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-0f4a591c]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-0f4a591c]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-0f4a591c]{font-size:1.2rem;color:#707070;margin:.2em 0 0 auto}",""]),t.exports=r},536:function(t,e,n){"use strict";n.r(e);var r=n(0),d=n(171),o=r.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(d.c)(t)}}}),c=(n(516),n(16)),l=n(73),_=n.n(l),f=n(433),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"0f4a591c",null);e.default=component.exports;_()(component,{VIcon:f.a})},538:function(t,e,n){var content=n(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("0ade608e",content,!0,{sourceMap:!1})},556:function(t,e,n){"use strict";n(538)},557:function(t,e,n){var r=n(45)(!1);r.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:600}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:600}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:600}.StaticCard p{margin-bottom:0}.StaticCard ol,.StaticCard ul{padding-left:24px}.StaticCard dd,.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard dd{margin-left:2em}@media screen and (max-width:768px){.StaticCard dd{margin-left:4.1666666667vw}}.StaticCard dd>:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard strong{border-bottom:2px solid #008830}.StaticCard a{font-size:1.4rem;color:#006ca8;font-size:inherit;text-decoration:none}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}.StaticCard-Note{display:flex}.StaticCard-Note>span{display:block}.StaticCard-Note>span:first-child{margin-right:.5em}",""]),t.exports=r},570:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend(),d=(n(556),n(16)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports}}]);