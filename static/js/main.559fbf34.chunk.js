(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/cloud.98491cb4.png"},function(e,t,a){e.exports=a.p+"static/media/sun.c7171d58.png"},function(e,t,a){e.exports=a.p+"static/media/rain.20617485.png"},function(e,t,a){e.exports=a.p+"static/media/snow.3260a1dc.png"},function(e,t,a){e.exports=a.p+"static/media/clouds-sun.66d07c0d.png"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=(a(15),a(1)),s=a(2),l=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1];return c.a.createElement("div",null,c.a.createElement("form",{className:"search"},c.a.createElement("input",{value:r,type:"text",onChange:function(e){o(e.target.value)},className:"form-control"}),c.a.createElement("input",{type:"submit",onClick:function(t){t.preventDefault(),e.search(r),o("")},value:"Search",className:"btn btn-info"})))},m=(a(16),a(5)),u=a.n(m),d=a(6),p=a.n(d),f=a(7),h=a.n(f),g=a(8),E=a.n(g),v=a(9),w=a.n(v),b=function(e){var t=e.neighbourCity;return c.a.createElement("div",null,t.rain?c.a.createElement("img",{className:"card-img-bottom",src:h.a,alt:"rain"}):t.snow?c.a.createElement("img",{className:"card-img-bottom",src:E.a,alt:"snow"}):t.clouds.all>=70?c.a.createElement("img",{className:"card-img-bottom",src:u.a,alt:"cloud"}):t.clouds.all>=30?c.a.createElement("img",{className:"card-img-bottom",src:w.a,alt:"clouds_sun"}):c.a.createElement("img",{className:"card-img-bottom",src:p.a,alt:"sun"}))},y={city:"London",coordinates:{},errorMessage:null,weatherList:[],loading:!0},N=function(e,t){switch(t.type){case"search_success":return Object(s.a)(Object(s.a)({},e),{},{loading:!1,currentCity:t.currentCity,weatherList:t.weatherList});default:return Object(s.a)({},e)}},j=function(){var e=Object(n.useReducer)(N,y),t=Object(i.a)(e,2),a=t[0],r=t[1],o=function(e){fetch("https://api.openweathermap.org/data/2.5/find?q=".concat(e,"&APPID=d4853c8a009254f5de62e57935ce77db")).then((function(e){return e.json()})).then((function(e){s(e.list[0].coord)})).catch((function(e){console.log(e)}))},s=function(e){fetch("https://api.openweathermap.org/data/2.5/find?lat=".concat(e.lat,"&lon=").concat(e.lon,"&cnt=6&units=metric&APPID=d4853c8a009254f5de62e57935ce77db")).then((function(e){return e.json()})).then((function(e){r({type:"search_success",currentCity:e.list[0],weatherList:e.list.splice(1)})})).catch((function(e){console.log(e)}))};Object(n.useEffect)((function(){o("London")}),[]);var m=a.loading,u=a.weatherList,d=a.currentCity;return c.a.createElement("div",{className:"container p-3 my-3 bg-primary text-white rounded"},m?c.a.createElement("span",null,"loading... "):c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row container "},c.a.createElement("div",{className:"col "},c.a.createElement("div",{className:"row display-2 d-flex justify-content-center"},Math.round(a.currentCity.main.temp),"\u2103"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col d-flex justify-content-end"},c.a.createElement("h3",null,a.currentCity.wind.speed," m/s")),c.a.createElement("div",{className:"col"},c.a.createElement(b,{neighbourCity:d})))),c.a.createElement("div",{className:"col "},c.a.createElement("div",{className:"row display-3 d-flex justify-content-center"},a.currentCity.name),c.a.createElement("div",{className:"row d-flex justify-content-center"},c.a.createElement(l,{search:function(e){o(e)}})))),c.a.createElement("div",{className:"card-group"},u.map((function(e,t){return c.a.createElement("div",{className:"card bg-info"},c.a.createElement("div",{className:"card-header"},e.name),c.a.createElement("div",{className:"card-body"},Math.round(e.main.temp),"\u2103 ",e.wind.speed,"m/s"),c.a.createElement(b,{key:t,neighbourCity:e}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.559fbf34.chunk.js.map