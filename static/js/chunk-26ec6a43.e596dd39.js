(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26ec6a43"],{"3ef3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-card",{staticClass:"content",attrs:{shadow:"never","body-style":{border:"1px solid #D2D2D2"}}},[t._t("default")],2)],1)},r=[],s={name:"ContentBase"},l=s,o=(a("c44b"),a("2877")),c=Object(o["a"])(l,n,r,!1,null,"75a8e5e8",null);e["a"]=c.exports},"48b3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentBase",[a("el-row",{staticClass:"item",attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"notice",attrs:{shadow:"always","body-style":{padding:"10px"}}},[a("div",{staticClass:"title"},[t._v(" 寒暑假集训计划 ")]),a("div",{staticClass:"content"},[t._v(" 今年暑假我们的训练计划...... ")])])],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"ranklist",attrs:{shadow:"always"}},[a("h2",[t._v("CF排行榜")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.rank}},[a("el-table-column",{attrs:{label:"姓名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),a("el-table-column",{attrs:{label:"昵称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.username)+" ")]}}])}),a("el-table-column",{attrs:{label:"Rating"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.rating)+" ")]}}])})],1)],1)],1)],1),a("el-row",[a("el-card",{staticClass:"content",attrs:{shadow:"hover","body-style":{padding:"10px"}}},[a("h3",[t._v("CCPC/ICPC训练")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.problemset}},[a("el-table-column",{attrs:{label:"知识点"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title)+" ")]}}])}),a("el-table-column",{attrs:{label:"练习题"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-link",{staticClass:"addr",attrs:{href:n.addr,target:"_blank",underline:!1,type:"primary"}},[t._v(t._s(n.name))])]}}])}),a("el-table-column",{attrs:{label:"难度"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t.renderColor(e.row.hard)}},[t._v(t._s(e.row.hard))])]}}])})],1)],1)],1)],1)},r=[],s=a("3ef3"),l={rank:[{id:"1",name:"周杰",username:"XXX",rating:2e3},{id:"2",name:"周杰",username:"XXX",rating:2e3},{id:"3",name:"周杰",username:"XXX",rating:2e3},{id:"4",name:"周杰",username:"XXX",rating:2e3}]},o={problemset:[{id:"1",title:"动态规划",name:"采药",addr:"https://www.acwing.com/problem/content/425/",hard:"简单"},{id:"2",title:"动态规划",name:"采药",addr:"https://www.acwing.com/problem/content/425/",hard:"中等"},{id:"3",title:"动态规划",name:"采药",addr:"https://www.acwing.com/problem/content/425/",hard:"困难"},{id:"4",title:"动态规划",name:"采药",addr:"https://www.acwing.com/problem/content/425/",hard:"简单"}]},c={name:"Summary",components:{ContentBase:s["a"]},data:function(){return{rank:l.rank,problemset:o.problemset}},methods:{renderColor:function(t){return"简单"===t?"success":"中等"===t?"warning":"困难"===t?"danger":void 0}}},d=c,i=(a("9e40"),a("2877")),u=Object(i["a"])(d,n,r,!1,null,"aaaf995e",null);e["default"]=u.exports},"850d":function(t,e,a){},"9e40":function(t,e,a){"use strict";a("de8c")},c44b:function(t,e,a){"use strict";a("850d")},de8c:function(t,e,a){}}]);