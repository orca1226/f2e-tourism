(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function s(t){return o.p+"js/"+({county:"county"}[t]||t)+"."+{county:"24143a06"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=n[t]=[e,i]}));e.push(a[2]=i);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/f2e-tourism/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01da":function(t,e,a){"use strict";a("68fb")},"1b3f":function(t,e){t.exports="data:image/png;base64,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"},"1e1b":function(t,e,a){},3269:function(t,e,a){},"3d27":function(t,e,a){"use strict";e["a"]=[{CityName:"臺北市",City:"Taipei",area:"北部"},{CityName:"新北市",City:"NewTaipei",area:"北部"},{CityName:"基隆市",City:"Keelung",area:"北部"},{CityName:"桃園市",City:"Taoyuan",area:"北部"},{CityName:"新竹市",City:"Hsinchu",area:"北部"},{CityName:"新竹縣",City:"HsinchuCounty",area:"北部"},{CityName:"宜蘭縣",City:"YilanCounty",area:"北部"},{CityName:"苗栗縣",City:"MiaoliCounty",area:"中部"},{CityName:"臺中市",City:"Taichung",area:"中部"},{CityName:"彰化縣",City:"ChanghuaCounty",area:"中部"},{CityName:"雲林縣",City:"YunlinCounty",area:"中部"},{CityName:"南投縣",City:"NantouCounty",area:"中部"},{CityName:"嘉義縣",City:"ChiayiCounty",area:"南部"},{CityName:"嘉義市",City:"Chiayi",area:"南部"},{CityName:"臺南市",City:"Tainan",area:"南部"},{CityName:"高雄市",City:"Kaohsiung",area:"南部"},{CityName:"屏東縣",City:"PingtungCounty",area:"南部"},{CityName:"花蓮縣",City:"HualienCounty",area:"東部"},{CityName:"臺東縣",City:"TaitungCounty",area:"東部"},{CityName:"金門縣",City:"KinmenCounty",area:"離島"},{CityName:"澎湖縣",City:"PenghuCounty",area:"離島"},{CityName:"連江縣",City:"LienchiangCounty",area:"離島"}]},"465e":function(t,e,a){t.exports=a.p+"img/icon_menu.cff45b00.svg"},"4d41":function(t,e){t.exports="data:image/png;base64,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"},"4e02":function(t,e,a){var i={"./icon_area_E.png":"9231","./icon_area_M.png":"1b3f","./icon_area_N.png":"4d41","./icon_area_O.png":"b705","./icon_area_S.png":"9146"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id="4e02"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view",{staticClass:"pt-[64px]"}),a("Footer")],1)},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"navbar fixed h-16 w-full bg-white flex items-center px-6 justify-between z-50"},[i("router-link",{staticClass:"navbar__logo h-4 w-36 flex-grow",attrs:{to:{name:"Home"}}},[i("img",{staticClass:"h-full object-contain",attrs:{src:a("e347"),alt:"logo"}})]),t._m(0),i("div",{staticClass:"w-36 flex-grow flex justify-end"},[i("img",{staticClass:"block md:hidden",attrs:{src:a("465e"),alt:"menu icon"}})])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"navbar__nav h-full w-[350px] hidden md:flex justify-center items-center"},[a("li",{staticClass:"mx-3 text-15"},[a("a",{attrs:{href:""}},[t._v("景點介紹")])]),a("li",{staticClass:"mx-3 text-15"},[a("a",{attrs:{href:""}},[t._v("特色活動")])]),a("li",{staticClass:"mx-3 text-15"},[a("a",{attrs:{href:""}},[t._v("美食饗宴")])]),a("li",{staticClass:"mx-3 text-15"},[a("a",{attrs:{href:""}},[t._v("經典住宿")])])])}],c={},l=c,u=(a("b3ee"),a("2877")),d=Object(u["a"])(l,s,o,!1,null,null,null),f=d.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"h-[230px] w-full bg-black-dark flex-col center-center"},[i("router-link",{attrs:{to:"/"}},[i("img",{staticClass:"mb-8",attrs:{src:a("a266"),type:""}})]),t._m(0),i("a",{staticClass:"text-14",attrs:{href:"https://2021.thef2e.com/users/6296432819610583293?week=1&type=1",target:"_blank"}},[t._v("設計稿參考 By Winnie")])],1)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"flex mb-8"},[a("li",{staticClass:"mx-4 text-gray-200"},[a("a",{attrs:{href:""}},[t._v("景點介紹")])]),a("li",{staticClass:"mx-4 text-gray-200"},[a("a",{attrs:{href:""}},[t._v("特色活動")])]),a("li",{staticClass:"mx-4 text-gray-200"},[a("a",{attrs:{href:""}},[t._v("美食饗宴")])]),a("li",{staticClass:"mx-4 text-gray-200"},[a("a",{attrs:{href:""}},[t._v("經典住宿")])])])}],p={},m=p,g=Object(u["a"])(m,y,C,!1,null,null,null),h=g.exports,x={name:"App",components:{Navbar:f,Footer:h}},A=x,b=(a("5c0b"),Object(u["a"])(A,n,r,!1,null,null,null)),v=b.exports,w=a("5530"),N=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[t.loading?i("transition",{attrs:{name:"fade"}},[i("div",{staticClass:"loading"},[i("div",{staticClass:"loader"},[t._v("Loading...")])])]):[i("section",{staticClass:"heroSection center-center"},[i("div",{staticClass:"w-full"},[i("div",{staticClass:"heroSection__words mx-auto"},[i("h3",{staticClass:"text-white text-4xl font-bold py-5 text-center letter-spacing--lg"},[t._v("想去哪裡玩？")]),i("p",{staticClass:"text-white text-center letter-spacing--lg"},[t._v("這裡共有上千個活動及美食等著你去一同體驗")])])])]),i("section",{staticClass:"areaSelect relative h-min-[400px] xl:h-[300px]"},[i("div",{staticClass:"areaSelect__bg absolute h-full bg-gray-50 w-4/5 rounded-br-4xl -z-1"}),i("div",{staticClass:"absolute bottom-[-45%] -z-1"},[i("embed",{attrs:{src:a("bcf0"),type:""}})]),i("div",{staticClass:"center-center content-center h-full\n      sm:w-full ml:w-4/5 mx-auto flex-wrap"},[i("div",{staticClass:"areaSelect__title ml:w-[150px] justify-end my-8"},[i("div",{staticClass:"flex flex-col justify-center"},[i("h3",{staticClass:"text-3xl letter-spacing--lg mb-4 min-w-[100px] text-center xl:text-left"},[t._v("縣市快選")]),i("h6",{staticClass:"letter-spacing--r text-gray-500"},[t._v("CHOOSE CITIES")])])]),i("AreaBtn",{staticClass:"z-1 w-full xl:w-3/4",on:{onClickCountyBtn:t.onclickCountyBtn}})],1)]),t.dataActivity?i("section",{staticClass:"activityBlock relative z-10 w-full max-w-[1300px] mx-auto md:flex py-16 px-4 md:flex-wrap lg:flex-nowrap"},[i("div",{staticClass:"text-center md:hidden"},[i("h3",{staticClass:"text-3xl py-6"},[t._v(" 多久沒有"),i("br"),t._v(" 出門走走了呢？ ")]),i("h6",{staticClass:"letter-spacing--r text-gray-500 mb-10"},[t._v("LET'S GET OUT")]),i("div",{staticClass:"btn-action --lg hidden lg:flex"},[t._v("更多funny")])]),i("div",{staticClass:"grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto"},t._l(t.dataActivity,(function(t,e){return i("div",{key:t.id,staticClass:"mr-6 mb-6 transform",class:{"lg:translate-x-20":(e+1)/3>1}},[i("InfoCard",{staticClass:"mx-auto",attrs:{img:t.Picture,name:t.Name,caption:t.Address,labelList:t.Class,highlight:t.City}})],1)})),0),i("div",{staticClass:"hidden md:block lg:pl-12 order-first w-full lg:w-auto lg:flex-grow lg:order-last text-center lg:text-left"},[i("h3",{staticClass:"text-3xl py-6"},[t._v(" 多久沒有"),i("br"),t._v(" 出門走走了呢？ ")]),i("h6",{staticClass:"letter-spacing--r text-gray-500 mb-10"},[t._v("LET'S GET OUT")]),i("div",{staticClass:"btn-action --lg hidden lg:flex"},[t._v("更多funny")])])]):t._e(),i("section",{staticClass:"relative min-h-[480px] flex items-center z-1"},[i("div",{staticClass:"absolute top-[-50%] -z-1 right-0"},[i("img",{attrs:{src:a("eca6"),type:""}})]),i("div",{staticClass:"areaSelect__bg absolute h-full bg-gray-50 w-2/5 rounded-br-full rounded-tr-full -z-1"}),i("div",{staticClass:"flex py-6 px-12 w-full overflow-hidden"},[i("div",{staticClass:"pr-16 flex-shrink-0"},[i("h3",{staticClass:"text-3xl py-6"},[t._v(" 餐飲美食 ")]),i("h6",{staticClass:"letter-spacing--r text-gray-500 mb-10"},[t._v("TASTY")]),i("div",{staticClass:"btn-action --lg hidden lg:flex"},[t._v("更多美味")])]),t.dataFood?i("vue-horizontal",{staticClass:"horizontal w-[calc(100%-160px)]",attrs:{responsive:""}},t._l(t.dataFood,(function(e,a){return i("div",{key:a,staticClass:"photoCard relative h-[335px] w-[230px] rounded-10px overflow-hidden mr-6 shadow-md hover:shadow-lg hover:transform hover:-translate-y-2 transition pointer"},[i("img",{staticClass:"h-full object-cover",attrs:{src:e.Picture.PictureUrl,alt:e.Picture.PictureUrlDescription}}),i("div",{staticClass:"photoCard__info absolute h-[40%] w-full bottom-0 pb-[20px] px-[14px] flex flex-col justify-end text-white"},[i("div",{staticClass:"text-16 mb-4"},[t._v(t._s(e.Name))]),i("div",{staticClass:"flex justify-between text-12"},[t._l(e.Class,(function(e,a){return i("div",{key:a},[t._v(t._s(e))])})),i("div",{staticClass:"label bg-black-light"},[t._v(t._s(t.cityStr(e.Address)))])],2)])])})),0):t._e()],1)]),i("section",{staticClass:"hotelBlock px-4 py-24 sm:px-16 md:px-24 lg:px-36"},[i("h3",{staticClass:"text-3xl py-6 text-center"},[t._v(" 精選住宿 ")]),i("h6",{staticClass:"letter-spacing--r text-center text-gray-500 mb-10"},[t._v("ACCOMENDATION")]),i("div",{staticClass:"justify-center grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-[1300px]"},t._l(t.dataHotel,(function(t,e){return i("InfoCard",{key:t.id,staticClass:"mb-6 flex-grow lg:transform max-w-[290px] mx-auto",class:{"xl:translate-y-4":e%2===1},attrs:{img:t.Picture,name:t.Name,caption:t.Address,labelList:t.Class}})})),1),i("div",{staticClass:"btn-action --lg flex mx-auto mt-8"},[t._v("更多住宿")])])]],2)},O=[],S=a("1da1"),R=(a("96cf"),a("fb6a"),a("a434"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"searchBar flex items-center bg-white w-3/5 h-16 border-solid\nrounded-full shadow-sm overflow-hidden p-2 border-gray-300"},[i("input",{staticClass:"searchBar__textInput flex-grow pl-2",attrs:{type:"text",placeholder:"在找什麼呢？"}}),i("button",{staticClass:"searchBar__search btn-action h-full w-[84px] flex",attrs:{type:"button"}},[i("div",{staticClass:"h-18 center-center"},[i("embed",{staticClass:"searchBar__button__icon w-auto  object-contain",attrs:{src:a("e2b9")}}),i("div",{staticClass:"text-white ml-1"},[t._v("搜尋")])])])])}),T=[],U={},B=U,I=(a("01da"),Object(u["a"])(B,R,T,!1,null,null,null)),H=(I.exports,a("9663")),z=a("a970"),D={name:"Home",components:{AreaBtn:H["a"],InfoCard:z["a"]},data:function(){return{loading:!0,dataActivity:null,dataFood:null,dataHotel:null}},filter:{},methods:{cityStr:function(t){return t.slice(0,3)},onclickCountyBtn:function(t){this.$router.push({path:"/county",query:{county:t.City}})}},created:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.all([t.getFood().then((function(e){t.dataFood=e.splice(0,16)})),t.getActivity().then((function(e){t.dataActivity=e.splice(0,6)})),t.getHotel().then((function(e){t.dataHotel=e.splice(0,4)}))]);case 2:setTimeout((function(){t.loading=!1}),500);case 3:case"end":return e.stop()}}),e)})))()}},E=D,M=(a("7d96"),Object(u["a"])(E,j,O,!1,null,null,null)),P=M.exports;i["a"].use(N["a"]);var k=[{path:"",name:"Home",component:P},{path:"/county",name:"County",component:function(){return a.e("county").then(a.bind(null,"460b"))},props:function(t){return Object(w["a"])({},t.params)}}],Q=new N["a"]({mode:"hash",scrollBehavior:function(t,e,a){return a||{x:0,y:0}},routes:k}),L=Q,J=a("bc3a"),X=a.n(J),K=a("6c2d");function G(){var t="cf4fc1f88024448c87de2f6276a32a13",e="11iMc9UPovBLtwlrr5wroVKmDXc",a=(new Date).toGMTString(),i=new K["a"]("SHA-1","TEXT");i.setHMACKey(e,"TEXT"),i.update("x-date: "+a);var n=i.getHMAC("B64"),r='hmac username="'+t+'", algorithm="hmac-sha1", headers="x-date", signature="'+n+'"';return{Authorization:r,"X-Date":a}}var Z,F,V=X.a.create({baseURL:"https://ptx.transportdata.tw/MOTC/v2",headers:G(),timeout:3e4,params:{$format:"JSON"}}),W=V,q={getScenicSpot:function(t){var e="/Tourism/ScenicSpot";return W.get(e,{params:t})},getActivity:function(t){var e="/Tourism/Activity";return W.get(e,{params:t})},getFood:function(t){var e="/Tourism/Restaurant";return W.get(e,{params:t})},getHotel:function(t){var e="/Tourism/Hotel";return W.get(e,{params:t})},getCityScenicSpot:function(t){var e=t.city,a=t.paramsObj,i="/Tourism/ScenicSpot/".concat(e);return W.get(i,{params:a})},getCityActivity:function(t){var e=t.city,a=t.paramsObj,i="/Tourism/Activity/".concat(e);return W.get(i,{params:a})},getCityFood:function(t){var e=t.city,a=t.paramsObj,i="/Tourism/Restaurant/".concat(e);return W.get(i,{params:a})},getCityHotel:function(t){var e=t.city,a=t.paramsObj,i="/Tourism/Hotel/".concat(e);return W.get(i,{params:a})}},Y=q,_={tourism:Y},$=(a("d81d"),a("4de4"),a("159b"),a("b64b"),{methods:{getActivity:function(t){var e=this,a=new Date,i=Object(w["a"])({$filter:"StartTime gt ".concat(a.toISOString()),$top:20},t);return this.$api.tourism.getActivity(i).then((function(t){return e.dataManager(t.data,"activity")}))},getFood:function(t){var e=this,a=Object(w["a"])({$top:30},t);return this.$api.tourism.getFood(a).then((function(t){return e.dataManager(t.data,"food")}))},getHotel:function(t){var e=this,a=Object(w["a"])({$top:20},t);return this.$api.tourism.getHotel(a).then((function(t){return e.dataManager(t.data,"hotel")}))},dataManager:function(t,e){return t.filter((function(t){return"PictureUrl1"in t.Picture})).map((function(t){var a=[];return"hotel"!==e?Object.keys(t).forEach((function(e){-1!==e.indexOf("Class")&&a.push(t[e])})):a=[t.Class],Object(w["a"])(Object(w["a"])({},t),{},{Picture:{PictureUrl:t.Picture.PictureUrl1,PictureUrlDescription:t.Picture.PictureUrl1},Class:a})}))}}}),tt=$,et=Object(u["a"])(tt,Z,F,!1,null,null,null),at=et.exports,it=a("f047");i["a"].config.productionTip=!1,i["a"].mixin(at),i["a"].use(it["a"]),i["a"].prototype.$api=_,i["a"].prototype.axios=X.a,new i["a"]({router:L,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"68fb":function(t,e,a){},"7d96":function(t,e,a){"use strict";a("b1f7")},9146:function(t,e,a){t.exports=a.p+"img/icon_area_S.d1781468.png"},9231:function(t,e){t.exports="data:image/png;base64,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"},9663:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex-col min-h-[225px] flex justify-start items-center"},[i("div",{staticClass:"w-full flex flex-wrap md:flex-nowrap justify-center"},t._l(t.areaConfig,(function(e,n){return i("div",{key:n,staticClass:"areaBtn mx-[12px] xl:ml-[36px] transform w-[120px] h-[150px] bg-white rounded-15px flex-col center-center mb-4 md:mb-0",class:{active:t.showCounty&&t.showCounty.area===e.area},on:{click:function(a){return t.onClickAreaBtn(e)}}},[i("div",{staticClass:"bgc-green pointer w-[76px] h-[76px] rounded-full center-center"},[i("img",{staticClass:"w-[52px] h-[52px]",attrs:{src:a("4e02")("./icon_area_"+e.src+".png"),alt:e.area+"圖標"}})]),i("div",{staticClass:"mt-3"},[t._v(t._s(e.area))]),t.showCounty&&t.showCounty.area===e.area?i("div",{staticClass:"h-[6px] w-[6px] rounded-full bg-gray-500 absolute bottom-2"}):t._e()])})),0),t.showCounty?i("div",{staticClass:"flex-grow flex flex-wrap justify-center md:flex-nowrap mt-8 min-h-[26px]"},t._l(t.showCounty.county,(function(e,a){return i("div",{key:a,staticClass:"countyBtn rounded-full center-center mx-2 pointer",class:{active:t.nowCounty&&e.City===t.nowCounty.City},on:{click:function(a){return t.onClickCountyBtn(e)}}},[t._v(" "+t._s(e.CityName)+" ")])})),0):t._e()])},n=[],r=(a("7db0"),[{area:"北部",src:"N",county:[{CityName:"臺北市",City:"Taipei"},{CityName:"新北市",City:"NewTaipei"},{CityName:"基隆市",City:"Keelung"},{CityName:"桃園市",City:"Taoyuan"},{CityName:"新竹市",City:"Hsinchu"},{CityName:"新竹縣",City:"HsinchuCounty"},{CityName:"宜蘭縣",City:"YilanCounty"}]},{area:"中部",src:"M",county:[{CityName:"苗栗縣",City:"MiaoliCounty"},{CityName:"臺中市",City:"Taichung"},{CityName:"彰化縣",City:"ChanghuaCounty"},{CityName:"雲林縣",City:"YunlinCounty"},{CityName:"南投縣",City:"NantouCounty"}]},{area:"南部",src:"S",county:[{CityName:"嘉義縣",City:"ChiayiCounty"},{CityName:"嘉義市",City:"Chiayi"},{CityName:"臺南市",City:"Tainan"},{CityName:"高雄市",City:"Kaohsiung"},{CityName:"屏東縣",City:"PingtungCounty"}]},{area:"東部",src:"E",county:[{CityName:"花蓮縣",City:"HualienCounty"},{CityName:"臺東縣",City:"TaitungCounty"}]},{area:"離島",src:"O",county:[{CityName:"金門縣",City:"KinmenCounty"},{CityName:"澎湖縣",City:"PenghuCounty"},{CityName:"連江縣",City:"LienchiangCounty"}]}]),s=a("3d27"),o={name:"AreaBtn",props:{alwaysShowCounty:{type:Boolean},nowCounty:{type:Object}},data:function(){return{areaConfig:r,countyConfig:s["a"],showCounty:null}},methods:{onClickAreaBtn:function(t){this.showCounty&&t.area===this.showCounty.area&&!this.alwaysShowCounty?this.showCounty=null:this.showCounty=t},onClickCountyBtn:function(t){this.$emit("onClickCountyBtn",t)},getCountyToShow:function(t){this.showCounty=this.areaConfig.find((function(e){return e.area===t.area}))}},created:function(){this.nowCounty&&this.getCountyToShow(this.nowCounty)},watch:{nowCounty:function(t){console.log(t),this.getCountyToShow(t)}}},c=o,l=(a("f296"),a("2877")),u=Object(l["a"])(c,i,n,!1,null,null,null);e["a"]=u.exports},"9c0c":function(t,e,a){},a266:function(t,e,a){t.exports=a.p+"img/logo-white.7a4f5cab.svg"},a970:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"infoCard bg-white shadow-md h-[350px] w-[290px] rounded-10px flex flex-col overflow-hidden pointer",class:{"h-[350px]":"scenicSpot"!==t.type,"h-[450px]":"scenicSpot"===t.type,"max-w-[350px]":"scenicSpot"===t.type}},[i("div",{staticClass:"flex-grow h-[240px] overflow-hidden"},[i("img",{staticClass:"h-full object-cover",attrs:{src:t.img.PictureUrl,alt:t.img.PictureUrlDescription}})]),i("div",{staticClass:"infoCard__word p-3 h-[calc(100%-240px)]  flex flex-col"},[i("div",{staticClass:"infoCard__body flex-grow"},[i("h4",{staticClass:"infoCard__word__title ellipsis text-16 letter-spacing--lg mb-2"},[t._v(t._s(t.name))]),i("p",{staticClass:"infoCard__word__caption text-12 text-gray-200 mb-3"},[t._v(t._s(t.caption))])]),t._t("footer",(function(){return[i("div",{staticClass:"infoCard__footer flex flex-col"},["scenicSpot"===t.type?i("div",{staticClass:"mb-3 text-12 text-gray-400 ellipsis flex item"},[i("img",{staticClass:"transform translate-y-[-1px] mr-2",attrs:{src:a("f9c3"),alt:"icon"}}),i("span",{staticClass:"ellipsis"},[t._v(t._s(t.openTime||"未說明開放時間"))])]):t._e(),i("div",{staticClass:"flex justify-between items-center w-full"},[i("div",{staticClass:"infoCard__footer__label flex"},t._l(t.labelList,(function(e,a){return i("div",{key:a,staticClass:"label bg-gray-100 mr-2"},[t._v(" "+t._s(e)+" ")])})),0),t.highlight?i("div",{staticClass:"infoCard__footer__highlight text-blue text-14"},[t._v(t._s(t.highlight))]):t._e()])])]}))],2)])},n=[],r={name:"InfoCard",props:{type:{type:String,default:"activity"},name:{type:String,default:"2021陽明山花季"},caption:{type:String,default:"臺北市政府工務局公園路燈工程管理處"},img:{type:Object},labelList:{type:Array},highlight:{type:String},address:{type:String},openTime:{type:String}}},s=r,o=(a("b5da"),a("2877")),c=Object(o["a"])(s,i,n,!1,null,null,null);e["a"]=c.exports},b1f7:function(t,e,a){},b3ee:function(t,e,a){"use strict";a("3269")},b5da:function(t,e,a){"use strict";a("f112")},b705:function(t,e,a){t.exports=a.p+"img/icon_area_O.5026d61c.png"},bcf0:function(t,e,a){t.exports=a.p+"img/deco1.e7312903.svg"},e2b9:function(t,e,a){t.exports=a.p+"img/icon_search.fec96a0a.svg"},e347:function(t,e,a){t.exports=a.p+"img/logo.b375646b.svg"},eca6:function(t,e,a){t.exports=a.p+"img/deco2_rounded.d546e830.svg"},f112:function(t,e,a){},f296:function(t,e,a){"use strict";a("1e1b")},f9c3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFtSURBVHgBnVHNSkJREP7OuTchSrxUtIqIlhaYWG6KiB7Agh4gxRdo1zJ9A1dBC735ANETiARB5Q+6kSAoAqFFRF4LJCrPNPfWvSqFi2Yzc84338w3M8A/TPQ/jAtzDiO0BxI7jMyAqAkpCpBIW+HEvZsnPUItt0s+XDHBIqWtjz68j3EcQ5deoOjWxgfajV/mgkbFfJwoHS94RcrZczcOlLLzjLeMsrnhddI1HEKI/edovNETLlfdsB1N3rFLseQDh+SvHE2x7pAViZsYYvqbyrFb8l/nJ6VGvkVSuPkr0ajxYn7saS35yp0svaOCEkq1hMT0LwYhjU8U+4n8JxRER1qdZoMfhlHPh/s51koixS7PxG2nq30OArUj8aq7qZRRNQsYYoGKecrbswt9H5clGOiiyBusQ9LAIR3sAxnec8haToQ9Ug+kDBNj/HtmD23PwNCWI1NDiotZAySPbGvXsQmoWYLWFDqduMmufQEoNIpVpmrFgQAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.07480617.js.map