(this.webpackJsonpstorage_management=this.webpackJsonpstorage_management||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(18),o=n.n(l),c=(n(26),n(8)),u=n(20),m=n(7),i=(n(27),n(3)),E=n(1);function d(e){return a.a.createElement("div",{style:{backgroundColor:"lightgray"}},a.a.createElement("h2",null,"Logistical Management"),a.a.createElement("br",null),a.a.createElement(i.b,{to:"/singup"},a.a.createElement("button",{style:{backgroundColor:"blue",color:"white",borderRadius:"5px"}},"Sign Up")),a.a.createElement("br",null),a.a.createElement(i.b,{to:"/login"},a.a.createElement("button",{style:{backgroundColor:"blue",color:"white",borderRadius:"5px"}},"Log In")))}function s(e){var t=Object(r.useState)({workerNum:"",workerName:"",forkLift:!1,entries:""}),n=Object(m.a)(t,2),l=n[0],o=n[1],u=function(e){var t=e.target.value;"number"===e.target.id?o(Object(c.a)(Object(c.a)({},l),{},{workerNum:t})):"fullName"===e.target.id?o(Object(c.a)(Object(c.a)({},l),{},{workerName:t})):o(Object(c.a)(Object(c.a)({},l),{},{forkLift:t}))};return a.a.createElement("div",null,a.a.createElement("p",null,"no."),a.a.createElement("input",{type:"text",id:"number",onChange:u}),a.a.createElement("p",null,"FullName"),a.a.createElement("input",{type:"text",id:"fullName",onChange:u}),a.a.createElement("br",null),a.a.createElement("p",null,"forklift truck:"),a.a.createElement("input",{type:"radio",name:"fork",id:"yes",value:!0,onChange:u}),a.a.createElement("label",{htmlFor:"yes"},"yes"),a.a.createElement("input",{type:"radio",name:"fork",id:"no",value:!1,checked:"checked",onChange:u}),a.a.createElement("label",{htmlFor:"no"},"no"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{to:"/"},a.a.createElement("button",{onClick:function(){e.addWorkerToList(l)}},"Create")))}function b(e){return a.a.createElement("div",null,a.a.createElement("h3",null,"No. ",e.obj.prodNum,a.a.createElement("br",null),"name: ",e.obj.prodName,a.a.createElement("br",null),"need forklift truck: ",e.obj.needFork?"yes":"no",a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){e.removeProdFromList(e.index,e.obj.needFork)}},"update")))}function k(e){var t=Object(r.useState)([{prodNum:11122,prodName:"green Box",needFork:!1,inPlace:!1},{prodNum:22554,prodName:"green Box",needFork:!1,inPlace:!1},{prodNum:66698,prodName:"blue Box",needFork:!0,inPlace:!1},{prodNum:78544,prodName:"red Box",needFork:!1,inPlace:!1},{prodNum:69875,prodName:"red Box",needFork:!1,inPlace:!1}]),n=Object(m.a)(t,2),l=n[0],o=n[1],c=function(t,n){n?e.currentWorker.forkLift?o(l.filter((function(e,n){return n!==t}))):alert("worker need forklift license!"):o(l.filter((function(e,n){return n!==t})))};return a.a.createElement("div",null,a.a.createElement("h1",null,"Welcom ",e.currentWorker.workerName),a.a.createElement("h3",null,"Details:"),a.a.createElement("h3",null,"Full name: ",e.currentWorker.workerName),a.a.createElement("h3",null,"no. ",e.currentWorker.workerNum),a.a.createElement("h3",null,"forklift truck license: ",e.currentWorker.forklift?"yes":"no"),a.a.createElement("br",null),a.a.createElement("h1",null,"List of Products"),l.map((function(e,t){return a.a.createElement("div",null,a.a.createElement(b,{removeProdFromList:c,index:t,key:t,obj:e}))})),a.a.createElement("br",null),a.a.createElement(i.b,{to:"/"},a.a.createElement("button",null,"Log Out")))}function f(e){var t=Object(r.useState)(!1),n=Object(m.a)(t,2),l=n[0],o=n[1],c=Object(r.useState)(""),u=Object(m.a)(c,2),E=u[0],d=u[1],s=Object(r.useState)("/login"),b=Object(m.a)(s,2),f=b[0],p=b[1],g=function(t){for(var n=0;n<e.workers.length;n++)if("99999"===t)p("/manager");else if(e.workers[n].workerNum===t){e.countEntries(n),d(e.workers[n]);break}};return a.a.createElement("div",null,!1===l?a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement("p",null,"no."),a.a.createElement("input",{type:"text",placeholder:"Worker Number",onChange:function(e){g(e.target.value)}}),a.a.createElement(i.b,{to:f}," ",a.a.createElement("button",{onClick:function(){o(!l)}},"Log In"))):a.a.createElement(k,{currentWorker:E,products:e.products,removeProdFromList:e.removeProdFromList}))}function p(e){return a.a.createElement("div",null,a.a.createElement("h1",null,"Manager"),a.a.createElement("table",null,a.a.createElement("tr",null,a.a.createElement("th",null,"NO"),a.a.createElement("th",null,"Full Name"),a.a.createElement("th",null,"Counter")),e.workers.map((function(e,t){return a.a.createElement("tr",null,a.a.createElement("td",null,e.workerNum),a.a.createElement("td",null,e.workerName),a.a.createElement("td",null,e.entries))})),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{to:"/"},a.a.createElement("button",null,"Log Out"))))}var g=function(){var e=Object(r.useState)([{workerNum:"12345",workerName:"nir reich",forkLift:!1,entries:0}]),t=Object(m.a)(e,2),n=t[0],l=t[1],o=function(e){n[e].entries=n[e].entries+1,l(n)},b=function(e){for(var t=!0,r=0;r<n.length;r++)n[r].workerNum===e.workerNum&&(t=!1);t?l([].concat(Object(u.a)(n),[Object(c.a)({},e)])):alert("error!")};return a.a.createElement("div",{className:"App"},a.a.createElement(i.a,null,a.a.createElement(E.c,null,a.a.createElement(E.a,{exact:!0,path:"/",component:function(){return a.a.createElement(d,null)}}),a.a.createElement(E.a,{exact:!0,path:"/singup",component:function(){return a.a.createElement(s,{addWorkerToList:b})}}),a.a.createElement(E.a,{exact:!0,path:"/login",component:function(){return a.a.createElement(f,{countEntries:o,workers:n})}}),a.a.createElement(E.a,{exact:!0,path:"/manager",component:function(){return a.a.createElement(p,{workers:n})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.d0e26b0c.chunk.js.map