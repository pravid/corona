(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",{staticClass:"text-center text-bold"},[t._v("\n        Dashboard\n      ")]),a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"replay","aria-label":"replay"},on:{click:function(e){return t.refresh()}}})],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[a("div",{staticClass:"menu-img"}),a("div",{staticClass:"text-bold text-center text-black q-mt-md"},[t._v("Cororna Risk Calculator")])]),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{staticClass:"q-my-md",attrs:{clickable:"",tag:"a",target:"_blank"},on:{click:function(e){return t.$router.push(t.link)}}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{style:{color:t.color},attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},r=[],l={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},color:{type:String,default:"#000000"}}},c=l,s=a("2877"),u=a("eebe"),d=a.n(u),p=a("66e5"),b=a("4074"),f=a("0016"),m=a("0170"),k=Object(s["a"])(c,i,r,!1,null,null,null),h=k.exports;d()(k,"components",{QItem:p["a"],QItemSection:b["a"],QIcon:f["a"],QItemLabel:m["a"]});var q={name:"MainLayout",components:{EssentialLink:h},data:function(){return{leftDrawerOpen:!1,essentialLinks:[{title:"Dashboard",caption:"Application Dashboard",icon:"dashboard",link:"/",color:"#0b9299"},{title:"Quick Checkup",caption:"Quickly check your symptoms",icon:"gamepad",link:"/checkup",color:"#30b258"},{title:"Quick Reference",caption:"A collection of do's dont's myths and facts",icon:"rss_feed",link:"/reference",color:"#ffb05d"},{title:"About",caption:"About us information",icon:"info",link:"/about",color:"#d42b73"}]}},methods:{refresh:function(){window.location.reload()}}},w=q,y=(a("72dc"),a("4d5a")),v=a("e359"),Q=a("65c6"),_=a("9c40"),g=a("6ac5"),L=a("9404"),D=a("1c1c"),x=a("09e3"),C=Object(s["a"])(w,n,o,!1,null,"e17b360a",null);e["default"]=C.exports;d()(C,"components",{QLayout:y["a"],QHeader:v["a"],QToolbar:Q["a"],QBtn:_["a"],QToolbarTitle:g["a"],QDrawer:L["a"],QList:D["a"],QItemLabel:m["a"],QPageContainer:x["a"]})},"72dc":function(t,e,a){"use strict";var n=a("e309"),o=a.n(n);o.a},e309:function(t,e,a){}}]);