(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-762337bf"],{"16ed":function(e,t,s){},"4f05":function(e,t,s){"use strict";s("16ed")},b7df:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-row",{staticClass:"item",attrs:{gutter:20}},[s("el-card",{attrs:{shadow:"hover"}},[s("div",{staticClass:"panel-heading"},[s("span",{staticClass:"panel-heading-time"},[e._v(" 2020级ACMer留影 ")])]),s("div",{staticClass:"photo"},[s("el-carousel",{key:"carousel2",ref:"carousel",staticStyle:{"padding-top":"20px"},attrs:{interval:4e3,type:"card",height:"240px",width:"100%"},on:{change:e.carouselChange}},e._l(e.images,(function(e){return s("el-carousel-item",{key:e.id,attrs:{id:e.id}},[s("img",{staticClass:"image",attrs:{src:e.url}})])})),1)],1)])],1)},i=[],a=s("3ef3"),c=s("1157"),r=s.n(c),o={name:"Photos",components:{ContentBase:a["a"]},data:function(){return{images:[{id:3,url:s("3a44")},{id:4,url:s("3a44")},{id:5,url:s("3a44")}],screenWidth:0,carouseId:0}},methods:{setSize:function(){this.bannerHeight=400/1920*this.screenWidth},setPY:function(){var e=this.carouseId;3===e?(r()("#3").css("left","-2.5%"),r()("#3").next().css("left","8%"),r()("#3").next().next().css("left","-18%")):4===e?(r()("#4").css("left","-2.5%"),r()("#4").prev().css("left","-18%"),r()("#4").next().css("left","8%")):5===e&&(r()("#5").css("left","-2.5%"),r()("#5").prev().css("left","-18%"),r()("#5").prev().prev().css("left","8%"))},carouselChange:function(e,t){this.carouseId=e,this.setPY()}},mounted:function(){var e=this;this.setPY(),this.screenWidth=window.innerWidth,this.setSize(),window.onresize=function(){e.screenWidth=window.innerWidth,e.setSize()}}},l=o,d=(s("4f05"),s("2877")),u=Object(d["a"])(l,n,i,!1,null,"807cec98",null);t["default"]=u.exports}}]);