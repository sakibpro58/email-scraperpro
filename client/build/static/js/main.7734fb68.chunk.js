(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/loader.9d016bdd.gif"},59:function(e,a,t){e.exports=t(92)},64:function(e,a,t){},65:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(11),r=t.n(c),o=(t(64),t(15)),s=t(5),m=(t(65),t(36)),i=t.n(m),d=t(52),p=t(4),u=t(33),E=(t(41),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row"},l.a.createElement("div",{className:"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"},l.a.createElement(o.b,{className:"navbar-brand brand-logo",to:"/"},l.a.createElement("h3",null,"Scrap Me")),l.a.createElement(o.b,{className:"navbar-brand brand-logo-mini",to:"/"},l.a.createElement("img",{src:"/assets/images/logo-mini.svg",alt:"logo"}))),l.a.createElement("div",{className:"navbar-menu-wrapper d-flex align-items-stretch"},l.a.createElement("button",{className:"navbar-toggler navbar-toggler align-self-center",type:"button","data-toggle":"minimize"},l.a.createElement("span",{className:"mdi mdi-menu"})),l.a.createElement("ul",{className:"navbar-nav navbar-nav-right"},l.a.createElement("li",{className:"nav-item full-screen-link"},l.a.createElement("a",{className:"nav-link"},l.a.createElement("i",{className:"mdi mdi-fullscreen",id:"fullscreen-button"}))),l.a.createElement("li",{className:"nav-item "},l.a.createElement("a",{className:"nav-link",href:"#"},l.a.createElement("i",{className:"mdi mdi-format-line-spacing"})))),l.a.createElement("button",{className:"navbar-toggler navbar-toggler-right d-lg-none align-self-center",type:"button","data-toggle":"offcanvas"},l.a.createElement("span",{className:"mdi mdi-menu"})))))}),g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"sidebar sidebar-offcanvas",id:"sidebar"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/"},l.a.createElement("span",{className:"menu-title"},"Home"),l.a.createElement("i",{className:"mdi mdi-home menu-icon"}))))))},h=t(54),f=t.n(h),b={serverURL:window.location.origin,showNotification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";f.a.show({title:"",message:e,messageSize:12,position:"topRight",theme:"dark",pauseOnHover:!0,timeout:"success"===a&&5e3,progressBarColor:"success"===a?"#00ffb8":"#ffafb4",color:"#565c70",messageColor:"success"===a?"#00ffb8":"#ffafb4",icon:"success"===a?"mdi mdi-check":"mdi mdi-alert-circle-outline"})},textEllipsis:function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return null==a&&(a=100),e.length>a?e.substring(0,a-t.length)+t:e}},v=t(55),N=t.n(v),y=t(56),x=t(39),O=t(16),w=function(e){return Object(n.useEffect)((function(){}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{show:!0,onHide:e.handleClose},l.a.createElement(O.a.Header,{closeButton:!0},l.a.createElement(O.a.Title,null,"Search Options")),l.a.createElement(O.a.Body,null,l.a.createElement("div",{className:"col-md-12 grid-margin"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"mx-0 row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"form-group",style:{marginBottom:"1rem"}},l.a.createElement("div",{className:"form-check"},l.a.createElement("label",{className:"form-check-label"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:e.options.acceptRootUrlOnly,onClick:function(a){var t=!e.options.acceptRootUrlOnly;e.setOptions(Object(p.a)(Object(p.a)({},e.options),{},{acceptRootUrlOnly:t})),localStorage.setItem("acceptRootUrlOnly",t)}})," Process Root Url Only ",l.a.createElement("i",{className:"input-helper"})," ",l.a.createElement("small",{className:"text-muted"},"(",e.options.acceptRootUrlOnly?"www.example.com":"www.example.com/xyz",")"))))))),l.a.createElement("div",{className:"card mt-2"},l.a.createElement("div",{className:"mx-0 row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"form-group",style:{marginBottom:"1rem"}},l.a.createElement("div",{className:"form-check"},l.a.createElement("label",{className:"form-check-label"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:e.options.fetchMailToOnly,onClick:function(a){var t=!e.options.fetchMailToOnly;e.setOptions(Object(p.a)(Object(p.a)({},e.options),{},{fetchMailToOnly:t})),localStorage.setItem("fetchMailToOnly",t)}})," Scrap mailto: Only ",l.a.createElement("i",{className:"input-helper"})," ",l.a.createElement("small",{className:"text-muted"},"(",e.options.fetchMailToOnly?"mailto:xyz@example.com":"xyz@example.com",")"))))))),l.a.createElement("div",{className:"card mt-2"},l.a.createElement("div",{className:"mx-0 row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"form-group",style:{marginBottom:"1rem"}},l.a.createElement("div",{className:"form-check"},l.a.createElement("label",{class:"form-check-label"},l.a.createElement("input",{type:"radio",class:"form-check-input",checked:"deep"===e.options.searchStrength,name:"searchStrength",value:"deep",onClick:function(a){e.setOptions(Object(p.a)(Object(p.a)({},e.options),{},{searchStrength:a.target.value})),localStorage.setItem("searchStrength","deep")}})," Deep Search ",l.a.createElement("i",{class:"input-helper"}))),l.a.createElement("div",{className:"form-check"},l.a.createElement("label",{class:"form-check-label"},l.a.createElement("input",{type:"radio",class:"form-check-input",checked:"quick"===e.options.searchStrength,name:"searchStrength",value:"quick",onClick:function(a){e.setOptions(Object(p.a)(Object(p.a)({},e.options),{},{searchStrength:a.target.value})),localStorage.setItem("searchStrength","quick")}})," Quick Search ",l.a.createElement("i",{class:"input-helper"})))))))))))},k=t(31),S=t.n(k),j=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{show:!0,centered:!0},l.a.createElement(O.a.Body,{className:"mx-auto"},l.a.createElement("img",{src:S.a,alt:"Loading"}))))},C=t(58),R=t(57),T=function(e){var a=Object(n.useState)({site:"",currentCopiedText:"",isLoading:!1,openOptionPopup:!1}),t=Object(u.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),m=s[0],h=s[1],f=Object(n.useState)({acceptRootUrlOnly:"true"===localStorage.getItem("acceptRootUrlOnly"),searchStrength:localStorage.getItem("searchStrength")?localStorage.getItem("searchStrength"):"deep",fetchMailToOnly:"true"===localStorage.getItem("fetchMailToOnly")}),v=Object(u.a)(f,2),O=v[0],k=v[1],T=function(){r(Object(p.a)(Object(p.a)({},c),{},{openOptionPopup:!c.openOptionPopup}))},U=function(){var e=Object(d.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===c.site){e.next=17;break}return r(Object(p.a)(Object(p.a)({},c),{},{isLoading:!0})),e.prev=2,e.next=5,N.a.post("/api/scrap",{site:c.site,acceptRootUrlOnly:O.acceptRootUrlOnly,searchStrength:O.searchStrength,fetchMailToOnly:O.fetchMailToOnly});case 5:a=e.sent,r(Object(p.a)(Object(p.a)({},c),{},{isLoading:!1})),200!==a.data.status?b.showNotification(void 0!==typeof a.data.data.result?a.data.data.result:"Server error","error"):200===a.data.status&&(t=[],a.data.result.forEach((function(e,a){e.emails.length&&e.emails.forEach((function(a,n){var l={email:a.replace("mailto:",""),site:e.site.replace("www.","").replace("https://","").replace("http://","").replace(/\/$/,"")};t.push(l)}))})),h(t)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),r(Object(p.a)(Object(p.a)({},c),{},{isLoading:!1})),console.log(e.t0),b.showNotification("Server error","error");case 15:e.next=18;break;case 17:b.showNotification("Nothing to scrap","error");case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),B=function(e){var a=document.createRange();a.selectNodeContents(e);var t=window.getSelection();t.removeAllRanges(),t.addRange(a)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-scroller"},l.a.createElement(E,null),l.a.createElement("div",{className:"container-fluid page-body-wrapper"},l.a.createElement(g,null),l.a.createElement("div",{className:"main-panel"},l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 grid-margin stretch-card"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("div",{className:"forms-sample"},l.a.createElement("label",{className:"text-muted"},"Enter one domain/URL per line Below And Press Start Scrapping"),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{id:"site",name:"site",onChange:function(e){r(Object(p.a)(Object(p.a)({},c),{},{site:e.target.value}))},value:c.site,className:"form-control",placeholder:"example.com \nexample.com \nexample.com",rows:"6"})),l.a.createElement("button",{type:"button",disabled:c.isLoading,className:"btn btn-gradient-info mr-2",onClick:function(){T()}},"Option"),l.a.createElement("button",{type:"button",disabled:c.isLoading,className:"btn btn-gradient-primary mr-2",onClick:U},"Start Scrapping",c.isLoading?"...":""))))),l.a.createElement("div",{className:"col-md-12 grid-margin stretch-card"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("h4",{className:"card-title"},"Total Email Scrapped: ",m.length)))),l.a.createElement("div",{className:"col-md-12 grid-margin stretch-card"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"pt-3 pb-3"},l.a.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-md-between"},l.a.createElement("div",{className:"d-flex flex-row"},l.a.createElement(C.a,{placement:"top",overlay:l.a.createElement(R.a,null,"Copy All")},l.a.createElement("button",{disabled:!m.length,id:"copy-all-button",className:"btn btn-inverse-info btn-icon",onClick:function(){return function(){var e=document.querySelector("#scrapped-email-table");B(e),document.execCommand("copy")}()}},l.a.createElement("i",{className:"mdi mdi-content-copy"})))))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{id:"scrapped-email-table",className:"table table-striped scrapped-email-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," # "),l.a.createElement("th",null," Email "),l.a.createElement("th",null," Site "),l.a.createElement("th",{style:{width:"160px"}}," "))),l.a.createElement("tbody",null,m.map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null," ",a+1," "),l.a.createElement("td",null,l.a.createElement("code",null,b.textEllipsis(e.email,50))," "),l.a.createElement("td",null," ",b.textEllipsis(e.site,50)," "),l.a.createElement("td",null,l.a.createElement(y.CopyToClipboard,{text:e.email,onCopy:function(){return a=e.email,void r(Object(p.a)(Object(p.a)({},c),{},{currentCopiedText:a}));var a}},l.a.createElement("button",{className:"btn btn-rounded btn-icon btn-success"},l.a.createElement("i",{className:"mdi mdi-content-paste"})))))}))))))))))))),l.a.createElement("img",{className:"d-none",src:S.a,alt:"loading"}),l.a.createElement(x.If,{condition:c.openOptionPopup},l.a.createElement(w,{handleClose:T,options:O,setOptions:k})),l.a.createElement(x.If,{condition:c.isLoading},l.a.createElement(j,null)))},U=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-scroller"},l.a.createElement("div",{className:"container-fluid page-body-wrapper full-page-wrapper"},l.a.createElement("div",{className:"content-wrapper d-flex align-items-center text-center error-page bg-primary"},l.a.createElement("div",{className:"row flex-grow"},l.a.createElement("div",{className:"col-lg-7 mx-auto text-white"},l.a.createElement("div",{className:"row align-items-center d-flex flex-row"},l.a.createElement("div",{className:"col-lg-6 text-lg-right pr-lg-4"},l.a.createElement("h1",{className:"display-1 mb-0"},"404")),l.a.createElement("div",{className:"col-lg-6 error-page-divider text-lg-left pl-lg-4"},l.a.createElement("h2",null,"SORRY!"),l.a.createElement("h3",{className:"font-weight-light"},"The page you\u2019re looking for was not found."))),l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-12 text-center mt-xl-2"},l.a.createElement(o.b,{className:"text-white font-weight-medium",to:"/"},"Back to home")))))))))};var B=function(){return l.a.createElement(o.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:T}),l.a.createElement(s.a,{component:U})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.7734fb68.chunk.js.map