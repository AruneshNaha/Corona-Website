(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{27:function(e,t,a){e.exports=a(55)},32:function(e,t,a){},34:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(32),a(9)),s=a.n(o),i=a(13),m=a(11),u=(a(34),a(58)),d=a(59);a(35);function v(){return r.a.createElement(u.a,{color:"info",light:!0,expand:"md"},r.a.createElement(d.a,{className:"text-white"},"Countries affected with corona"))}var h=a(60);function E(){return r.a.createElement(h.a,{fluid:!0,tag:"footer",className:"text-center bg-info text-white text-uppercase fixed-bottom p-3"},"Let's fight together in the midst of this pandemic! We are all together ",r.a.createElement("br",null)," Copyright \xa9 2020 Arunesh Naha")}var p=a(14),f=a.n(p),b=a(15),x=a(61),y=a(62),N=a(63),g=a(64),w=a(26),k=a(25);function j(e){var t=e.active,a=e.recovered,n=e.deaths;return r.a.createElement(k.PieChart,{data:[{title:"Active",value:t,label:"Active",labelStyle:"text-white",color:"#F3B431"},{title:"Recovered",value:a,label:"Recovered",color:"#45CE30"},{title:"Deaths",value:n,label:"Deaths",color:"#E44236"}],label:function(e){var r=e.dataEntry;return"".concat(r.title,":").concat(parseInt(r.value/(t+a+n)*100),"%")},labelStyle:Object(w.a)({},{fontSize:"5px",fontFamily:"sans-serif"})})}function O(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://disease.sh/v3/covid-19/all");case 3:t=e.sent,a=t.data,console.log(a),c(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Object(b.a)("Failed to fetch data! Please check your internet connection!",{type:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),r.a.createElement(x.a,null,r.a.createElement(y.a,{className:"mb-5"},r.a.createElement(N.a,{className:"p-0 text-center mb-3 mt-3 custom-card",body:!0,inverse:!0,color:"primary"},r.a.createElement(g.a,null,r.a.createElement("div",{className:"text-white"},"Total Cases: ",a.cases))),r.a.createElement(N.a,{className:"p-0 text-center custom-card mb-3 mt-3",body:!0,inverse:!0,color:"danger"},r.a.createElement(g.a,null,r.a.createElement("div",{className:"text-white"},"Total Deaths: ",a.deaths))),r.a.createElement(N.a,{className:"p-0 text-center custom-card mb-3 mt-3",body:!0,inverse:!0,color:"success"},r.a.createElement(g.a,null,r.a.createElement("div",{className:"text-white"},"Total Recoveries: ",a.recovered))),r.a.createElement(N.a,{className:"p-0 text-center custom-card mb-3 mt-3",body:!0,inverse:!0,color:"warning"},r.a.createElement(g.a,null,r.a.createElement("div",{className:"text-white"},"Total Active: ",a.active)))),r.a.createElement(y.a,null,r.a.createElement(h.a,{fluid:"sm",className:"container"},r.a.createElement("h3",{className:"text-primary text-center"},"Worldwide pie chart data"),r.a.createElement(j,{active:a.active,recovered:a.recovered,deaths:a.deaths}))))}var C=a(65),T=a(66);function S(e){var t,a=e.country;return r.a.createElement(h.a,{fluid:!0,className:"container"},r.a.createElement(N.a,{className:"text-center mt-3 mb-4"},r.a.createElement(x.a,null,r.a.createElement(y.a,{xs:"3"},r.a.createElement(C.a,{src:null===(t=a.countryInfo)||void 0===t?void 0:t.flag,className:"img-thumbnail mt-3"})),r.a.createElement(y.a,{xs:"4"},r.a.createElement("h2",{className:"text-danger"},r.a.createElement(T.a,null,a.country)),r.a.createElement(g.a,null,r.a.createElement("h4",null,r.a.createElement("div",{className:"text-primary"},"Total Cases: ",a.cases),r.a.createElement("div",{className:"text-danger"},"Total Deaths: ",a.deaths),r.a.createElement("div",{className:"text-success"},"Total Recoveries: ",a.recovered),r.a.createElement("div",{className:"text-warning"},"Total Active: ",a.active)))),r.a.createElement(y.a,null,r.a.createElement(h.a,{fluid:"sm",className:"container mb-5 container-country"},r.a.createElement("h3",{className:"text-primary text-center"},"Country pie chart data"),r.a.createElement(j,{active:a.active,recovered:a.recovered,deaths:a.deaths}))))))}var A=a(67),P=a(68),F=a(70),D=a(69);var R=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(m.a)(l,2),u=o[0],d=o[1],p=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://disease.sh/v3/covid-19/countries/".concat(a));case 3:t=e.sent,n=t.data,console.log(n),d(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Object(b.a)("Failed to fetch data! Please check your internet connection or search a valid country name!",{type:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(h.a,{fluid:!0},r.a.createElement(A.a,{className:"mt-3"},r.a.createElement(P.a,{type:"text",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Please provide a country name"}),r.a.createElement(F.a,{addonType:"append"},r.a.createElement(D.a,{color:"primary",onClick:p},"Fetch country details"))),r.a.createElement(O,null),u?r.a.createElement(S,{country:u}):null),r.a.createElement(y.a,null,r.a.createElement(h.a,{fluid:!0},r.a.createElement("h1",{className:"text-white"},"EMPTY SPACE"))),r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.03fb69ad.chunk.js.map