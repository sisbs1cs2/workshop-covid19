(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{406:function(t,e,r){var content=r(506);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("1ad45426",content,!0,{sourceMap:!1})},461:function(t,e,r){"use strict";r.r(e);r(20),r(238),r(128),r(34),r(125),r(83),r(15),r(54),r(55);var n=r(3),o=r(102),d=r(13),l=r.n(d),c=r(0),h=r(360),f=r(361),y=r(363),x=r(362),k=r(126),m=r(367),D=r(368),C=r(364),v={created:function(){this.canvas=!0},components:{DataView:h.default,DataViewTable:y.default,DataViewDataSetPanel:f.default,ScrollableChart:x.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},infoTitles:{type:Array,required:!1,default:function(){return[]}},chartId:{type:String,default:"UntrackedRateMixedChart"},chartData:{type:Array,required:!1,default:function(){return[]}},getFormatter:{type:Function,required:!1,default:function(t){return Object(C.c)()}},date:{type:String,required:!0,default:""},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},tableLabels:{type:Array,default:function(){return[]}},unit:{type:Array,default:function(){return[]}},yAxesBgPlugin:{type:Array,default:function(){return k.b}},yAxesBgRightPlugin:{type:Array,default:function(){return k.c}}},data:function(){return{displayLegends:[!0,!0,!0,!0],colors:[Object(D.a)("A"),Object(D.a)("C"),Object(D.a)("E"),Object(D.a)("E")],canvas:!0}},computed:{displayInfo:function(){var t=Object(m.a)({displayData:this.displayData,dataIndex:2,digit:1}),e=t.lastDay,r=t.lastDayData,n=t.dayBeforeRatio,o=Object(m.a)({displayData:this.displayData,dataIndex:3,digit:1}),d=o.lastDay,l=o.lastDayData,c=o.dayBeforeRatio;return[{lText:r,sText:"".concat(this.$t("{date} の数値",{date:this.$d(e,"date")}),"（").concat(this.$t("７日間移動平均"),"）"),sTextUnder:"（".concat(this.$t("前日比"),": ").concat(n," ").concat(this.unit[0],"）"),unit:this.unit[0]},{lText:l,sText:"".concat(this.$t("{date} の数値",{date:this.$d(d,"date")}),"（").concat(this.$t("７日間移動平均値をもとに算出"),"）"),sTextUnder:"（".concat(this.$t("前日比"),": ").concat(c," ").concat(this.unit[1],"）"),unit:this.unit[1]}]},displayData:function(){var t=[Object(D.a)("A"),Object(D.a)("C"),Object(D.a)("E"),Object(D.a)("E")];return{labels:this.labels,datasets:[{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[0],data:this.chartData[0],backgroundColor:t[0].fillColor,borderColor:t[0].strokeColor,borderWidth:1,order:4},{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[1],data:this.chartData[1],backgroundColor:t[1].fillColor,borderColor:t[1].strokeColor,borderWidth:1,order:3},{type:"line",yAxisID:"y-axis-1",label:this.dataLabels[2],data:this.chartData[2],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:t[2].strokeColor,borderWidth:3,borderDash:[4],fill:!1,order:2,lineTension:0},{type:"line",yAxisID:"y-axis-2",label:this.dataLabels[3],data:this.chartData[3],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:t[3].strokeColor,borderWidth:3,fill:!1,order:1,lineTension:0}]}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(o.a)(this.tableLabels.map((function(text,i){return{text:text,value:String(i),align:"end"}}))))},tableData:function(){var t=this;return this.labels.map((function(label,i){return Object.assign.apply(Object,[{text:label}].concat(Object(o.a)(t.chartData.map((function(e,r){var data=t.chartData[r];return null===data[i]?Object(n.a)({},r,""):Object(n.a)({},r,t.getFormatter(r)(data[i]))})))))})).sort((function(a,b){return l()(a.text).unix()-l()(b.text).unix()})).reverse()},displayOption:function(){var t=this,e=this.unit[1],r={tooltips:{displayColors:!1,callbacks:{label:function(r){var n=t.getFormatter(r.datasetIndex)(parseFloat(r.value)),label="".concat(t.dataLabels[r.datasetIndex]," : ").concat(n," ").concat(t.$t("人"));return r.datasetIndex>=3&&(label="".concat(t.dataLabels[r.datasetIndex]," : ").concat(n," ").concat(e)),label},title:function(e,data){if(e[0].datasetIndex<4){var label=data.labels[e[0].index];return t.$d(new Date(label),"date")}return""}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return l()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{id:"y-axis-1",position:"left",stacked:!0,gridLines:{display:!0,drawOnChartArea:!0,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax}},{id:"y-axis-2",position:"right",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMaxRight,callback:function(t){return"".concat(t,"%")}}}]}};return"true"===this.$route.query.ogp&&Object.assign(r,{animation:{duration:0}}),r},displayDataHeader:function(){var t=this.displayData.datasets,e=Array.from(t[0].data.keys()).map((function(i){return t[0].data[i]+t[1].data[i]})),r=e.reduce((function(a,b){return Math.max(a,b)}),0),n=e.indexOf(r);return{labels:["2020-01-01"],datasets:[{data:[this.displayData.datasets[0].data[n]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[1].data[n]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[0],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[3].data[n]],backgroundColor:"transparent",yAxisID:"y-axis-2",borderWidth:0}]}},displayOptionHeader:function(){return{tooltips:{enabled:!1},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,callback:function(label){return l()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{id:"y-axis-1",position:"left",stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax}},{id:"y-axis-2",position:"right",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{maxTicksLimit:8,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMaxRight,callback:function(t){return"".concat(t,"%")}}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t=this,e=Array.from(this.chartData[0].keys()).map((function(i){return t.chartData[0][i]+t.chartData[1][i]})).reduce((function(a,b){return Math.max(a,b)}),0);return this.chartData[2].reduce((function(a,b){return Math.max(a,b)}),e)},scaledTicksYAxisMaxRight:function(){return this.chartData[3].reduce((function(a,b){return Math.max(a,b)}),0)}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()},makeLineData:function(t){return this.chartData[0].map((function(e){return t}))}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},L=c.default.extend(v),_=r(505),A=r(6);var component=Object(A.a)(L,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,"head-title":t.title+t.infoTitles.join(",")},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"dataTable",fn:function(){return[r("client-only",[r("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"dataSetPanel",fn:function(){return t._l(t.displayInfo,(function(e,i){return r("data-view-data-set-panel",{key:i,attrs:{title:t.infoTitles[i],"l-text":e.lText,"s-text":e.sText,"s-text-under":e.sTextUnder,unit:e.unit}})}))},proxy:!0}],null,!0)},[t._v(" "),r("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.dataLabels,(function(e,i){return r("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[r("button",[r("div",2===i?{style:{background:"repeating-linear-gradient(90deg, "+t.colors[i].fillColor+", "+t.colors[i].fillColor+" 2px, #fff 2px, #fff 4px)",border:0,height:"3px"}}:3===i?{style:{backgroundColor:t.colors[i].fillColor,border:0,height:"3px"}}:{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor}}),t._v(" "),r("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v(t._s(e))])])])})),0),t._v(" "),r("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),r("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var n=e.chartWidth;return[r("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:240,width:n}})]}},{key:"sticky-chart",fn:function(){return[r("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header-right","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgRightPlugin,"display-legends":t.displayLegends,height:240}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports;installComponents(component,{ScrollableChart:r(362).default,DataViewTable:r(363).default,DataViewDataSetPanel:r(361).default,DataView:r(360).default})},505:function(t,e,r){"use strict";var n=r(406),o=r.n(n);r.d(e,"default",(function(){return o.a}))},506:function(t,e,r){(e=r(18)(!1)).push([t.i,".GraphLegend_2VVRy{text-align:center;list-style:none;padding:0!important}.GraphLegend_2VVRy li{display:inline-block;margin:0 3px}.GraphLegend_2VVRy li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_2VVRy li button{color:#707070;font-size:1.2rem}",""]),e.locals={GraphLegend:"GraphLegend_2VVRy"},t.exports=e},577:function(t,e,r){"use strict";r.r(e);r(65),r(34);var n=r(461),o=r(441),d=r(364),l={components:{UntrackedRateMixedChart:n.default},data:function(){var data=o.data.filter((function(t){return new Date(t.diagnosed_date)>=new Date("2020-03-27")})),t=data.map((function(t){return t.reported_count})),e=data.map((function(t){return t.missing_count})),r=data.map((function(t){return t.weekly_average_untracked_count})),n=data.map((function(t){return t.weekly_average_untracked_increse_percent})),l=data.map((function(t){return t.diagnosed_date}));return{updated:o.date,graphData:[t,e,r,n],dateList:l,dataLabels:[this.$t("接触歴等判明者数"),this.$t("接触歴等不明者数"),this.$t("接触歴等不明者数（７日間移動平均）"),this.$t("増加比")],tableLabels:[this.$t("接触歴等判明者数"),this.$t("接触歴等不明者数"),this.$t("接触歴等不明者数（７日間移動平均）"),this.$t("増加比")],getFormatter:function(t){return t>=2?Object(d.b)(1):Object(d.c)()}}}},c=r(6),h=r(33),f=r.n(h),y=r(707),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("client-only",[r("untracked-rate-mixed-chart",{attrs:{title:t.$t("モニタリング項目(3)"),"title-id":"untracked-rate","info-titles":[t.$t("新規陽性者における接触歴等不明者数"),t.$t("増加比")],"chart-id":"untracked-rate-chart","chart-data":t.graphData,"get-formatter":t.getFormatter,date:t.updated,labels:t.dateList,unit:[t.$t("人"),"%"],"data-labels":t.dataLabels,"table-labels":t.tableLabels},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[r("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),r("ul",[r("li",[t._v("\n            "+t._s(t.$t("保健所から発生届が提出された日別（報告日別）の新規陽性者について、接触歴等の不明者、判明者に区分したものである"))+"\n          ")]),t._v(" "),r("li",[t._v("\n            "+t._s(t.$t("集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を不明者数として算出（例えば、2020年5月7日の移動平均値は、2020年5月1日から5月7日までの実績値を平均したもの）"))+"\n          ")]),t._v(" "),r("li",[t._v("\n            "+t._s(t.$t("濃厚接触者など、患者の発生状況の内訳の公表を開始した2020年3月27日から作成"))+"\n          ")]),t._v(" "),r("li",[t._v("\n            "+t._s(t.$t("増加比は、１週間前の接触歴等不明者数（移動平均値）との比較"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{UntrackedRateMixedChart:r(461).default}),f()(component,{VCol:y.a})}}]);