(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{27:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),a=n.n(i),o=n(5),s=n.n(o),r=(n(27),n(3)),l=n(21),d=a.a.createContext(),u=n(8),b=n.n(u),j=(n(46),function(e){var t,n=Object(i.useContext)(d),a=Object(i.useState)([]),o=Object(r.a)(a,2),s=o[0],u=o[1];Object(i.useEffect)((function(){var t="any"===n.map?"https://opentdb.com/api.php?amount=".concat(n.car,"&difficulty=").concat(n.cake.toLowerCase()):"https://opentdb.com/api.php?amount=".concat(n.car,"&difficulty=").concat(n.cake.toLowerCase(),"&category=").concat(n.map);b.a.get(t).then((function(t){console.log(t.data.results),e.setQuestions(t.data.results)}))}),[]),Object(i.useEffect)((function(){var t,n;if(console.log(null===e||void 0===e||null===(t=e.value)||void 0===t?void 0:t.correct_answer),console.log(s),null===e||void 0===e||null===(n=e.value)||void 0===n?void 0:n.incorrect_answers){var c,i,a=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=e[t];e[t]=e[n],e[n]=c}return e}([null===e||void 0===e||null===(c=e.value)||void 0===c?void 0:c.correct_answer].concat(Object(l.a)(null===e||void 0===e||null===(i=e.value)||void 0===i?void 0:i.incorrect_answers)));u(a)}}),[e.value]);return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"a1",children:[Object(c.jsxs)("h3",{className:"a2",children:["QUESTION ",e.index+1]}),Object(c.jsxs)("h2",{className:"a3",children:[" ",null===e||void 0===e||null===(t=e.value)||void 0===t?void 0:t.question]}),s.map((function(t){return Object(c.jsx)("button",{className:"but",onClick:function(){return function(t){var c;(null===e||void 0===e||null===(c=e.value)||void 0===c?void 0:c.correct_answer)===t?n.increment():n.decrement(),e.setIndex(e.index+1)}(t)},children:t})})),Object(c.jsx)("br",{})]})})}),x=(n(47),function(){var e=Object(i.useContext)(d);return console.log(e),Object(c.jsx)("div",{children:Object(c.jsx)("section",{className:"fle",children:Object(c.jsxs)("p",{className:"fle2",children:["THE AVERAGE GAME ",Object(c.jsxs)("span",{className:"fle1",children:["current score:",e.score]})]})})})}),p=(n(58),n(56),function(e){var t=Object(i.useContext)(d);return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"res",children:Object(c.jsxs)("span",{className:"res1",children:[Object(c.jsx)("span",{className:"re2",children:"Your Score :"}),"  ",t.score]})}),Object(c.jsx)("button",{onClick:function(){e.setVisible(!0),e.setIndex(0),t.reset()},children:" Play Again "})]})}),O=(n(57),function(e){var t=Object(i.useContext)(d);return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"b",children:[Object(c.jsx)("label",{for:"fname",style:{color:"white",fontSize:"20px",padding:"10px 20px"},children:"Number Of Questions:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{style:{width:"70%",padding:"12px 20px",margin:"8px 0",display:"inline-block",border:"1px solid #ccc",borderRadius:" 4px",boxSizing:"border-box"},type:"number",value:t.car,min:"1",max:"30",id:"fname",name:"fname",onChange:function(t){var n=t.target,c=n.value,i=n.min,a=n.max;console.log(c,i,a),c||e.setCar(""),c<=a&&c>=i&&e.setCar(c)}}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:" category",style:{color:"white",fontSize:"20px"},children:"Select Category"}),Object(c.jsx)("br",{}),Object(c.jsx)("select",{style:{width:"70%",padding:"12px 20px",margin:"8px 0",display:"inline-block",border:"1px solid #ccc",borderRadius:" 4px",boxSizing:"border-box"},name:"category",id:"category",onChange:function(t,n){e.setMap(t.target.value)},children:["Any Category","General Knowledge","Entertainment: Books","Entertainment: Film","Entertainment: Music","Entertainment: Musicals & Theatres","Entertainment: Television","Entertainment: Video Games","Entertainment: Board Games","Science & Nature","Science: Computers","Science: Mathematics","Mythology","Sports","Geography","History","Politics","Art"].map((function(e,t){return Object(c.jsx)("option",{value:t+8,children:e})}))}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:" meth",style:{color:"white",fontSize:"20px"},children:"Select Difficulty : "}),Object(c.jsx)("br",{}),Object(c.jsxs)("select",{style:{width:"70%",padding:"12px 20px",margin:"8px 0",display:"inline-block",border:"1px solid #ccc",borderRadius:" 4px",boxSizing:"border-box"},name:"meth",id:"meth",onChange:function(t,n){e.setCake(t.target.value)},children:[Object(c.jsx)("option",{value:"Easy",children:"Easy"}),Object(c.jsx)("option",{value:"Medium",children:"Medium"}),Object(c.jsx)("option",{value:"Hard",children:"Hard"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{style:{width:"20%",backgroundColor:"pink",color:"black",padding:"14px 20px",margin:"8px 0",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"30px"},onClick:function(){e.setVisible(!1)},children:"Play"})]})})});var h=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)(0),s=Object(r.a)(o,2),l=s[0],u=s[1],b=Object(i.useState)(0),h=Object(r.a)(b,2),m=h[0],v=h[1],f=Object(i.useState)(!0),g=Object(r.a)(f,2),y=g[0],C=g[1],S=Object(i.useState)(10),E=Object(r.a)(S,2),k=E[0],w=E[1],N=Object(i.useState)("any"),M=Object(r.a)(N,2),z=M[0],F=M[1],I=Object(i.useState)("Easy"),A=Object(r.a)(I,2),G=A[0],P=A[1];return Object(c.jsx)(d.Provider,{value:{score:m,increment:function(){v(m+1)},decrement:function(){v(m-1)},reset:function(){v(0)},car:k,map:z,cake:G},children:y?Object(c.jsx)(O,{setCar:w,setMap:F,setCake:P,setVisible:C}):l>=10?Object(c.jsx)(p,{setVisible:C,setIndex:u}):Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{value:n[l],setQuestions:a,setIndex:u,index:l}),Object(c.jsx)(x,{})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),m()}},[[59,1,2]]]);
//# sourceMappingURL=main.582ca1da.chunk.js.map