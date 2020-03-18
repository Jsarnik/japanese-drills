(this["webpackJsonplearn-japanese"]=this["webpackJsonplearn-japanese"]||[]).push([[0],{104:function(e,a,t){},127:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),i=t(32),o=t(11),u=t(23),s=t(16),m={cards:{}};var d=Object(i.c)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_ALL_CARDS_SUCCESS":return a.cards;case"SET_CARD_SUCCESS":return Object(u.a)({},e,Object(o.a)({},a.card._id,a.card));case"GET_ALL_CARDS_FAILURE":default:return e}}}),E=function(e,a){return d(e,a)},f=t(76),h=t.n(f),p=t(77);var b=t(9),v=(t(104),t(53)),g=t(28),j=t(165),y=t(131),C=t(166),O=t(79),S=t.n(O),_=t(78),k=t.n(_),A=t(175),w=t(163),x=t(164),R=t(167),N=t(18),L={baseApiUri:""},U=t(35),F=t.n(U);function T(e){return{type:"GET_ALL_CARDS_FAILURE",error:e}}function q(e){var a="".concat(L.baseApiUri,"/api/getCards"),t={type:e};return function(e){return new Promise((function(n,r){F.a.post(a,t).then((function(a){var t=a.data,r=t.failed?T(t.failed):{type:"GET_ALL_CARDS_SUCCESS",cards:t};e(r),n(t)})).catch((function(a){e(T(a.message)),r(a.message)}))}))}}function I(e){return{type:"SET_CARD_FAILURE",error:e}}function D(e){return{type:"SET_CARD_FAILURE",error:e}}function M(e){return{type:"GET_ALL_CARDS_FAILURE",error:e}}var J=function(){var e=Object(N.b)(),a=["phrase","question","vocab","all","phrase-e","question-e","vocab-e","all-e"],t=Object(n.useState)({}),l=Object(b.a)(t,2),c=l[0],i=l[1];return Object(n.useEffect)((function(){e(q()).then((function(e){var t={};s.each(a,(function(a){var n=a.split("-"),l=JSON.parse(localStorage.getItem(a))||[];t[a]={title:n.length>1?"".concat(n[0],": ( English > Japanese )"):"".concat(n[0],": ( Japanese > English )"),link:a.replace("-","/"),completedCount:l.length,cardCount:"all"===n[0]?Object.keys(e).length:s.filter(e,(function(e){return e.type===n[0]})).length||0,icon:n.length>1?r.a.createElement(k.a,null):r.a.createElement(S.a,null)}})),i(t)}))}),[]),r.a.createElement(w.a,null,r.a.createElement(x.a,null,r.a.createElement(j.a,null,s.map(c,(function(e){return r.a.createElement("div",{key:e.link},r.a.createElement(y.a,{button:!0,onClick:function(){return a=e.link,void(window.location.href="/flashcards/".concat(a));var a}},r.a.createElement(C.a,null,e.icon),r.a.createElement(A.a,{primary:e.title}),r.a.createElement("span",null,r.a.createElement("span",{style:{color:"#3f51b5"}},e.cardCount," ")," ",r.a.createElement("span",null," / ")," ",r.a.createElement("span",{style:{color:"#4caf50"}}," ",e.completedCount))),r.a.createElement(R.a,null))})))))},G=t(20),P=t(169),V=t(4),B=t(168),W=t(80),z=t.n(W),Q=t(81),K=t.n(Q),$=t(47),H=t(48),X=function(e){var a=e.url,t=e.controls,l=-1===a.indexOf("http")?"http://japanese-drills.s3.amazonaws.com/audio/".concat(a):a,c=function(e){var a=Object(n.useState)(new Audio(e)),t=Object(b.a)(a,2),r=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(b.a)(c,2),o=i[0],u=i[1];Object(n.useEffect)((function(){null!==r&&(o?r.play():s()),l(new Audio(e)),u(!1)}),[e]);function s(){r.pause(),r.currentTime=0}return Object(n.useEffect)((function(){null!==r&&(o?r.play():s())}),[o]),Object(n.useEffect)((function(){return r.addEventListener("ended",(function(){return u(!1)})),function(){r.removeEventListener("ended",(function(){return u(!1)}))}}),[]),[o,function(){return u(!o)},r]}(l),i=Object(b.a)(c,2),o=i[0],u=i[1],s=Object(n.useRef)(null);return Object(n.useEffect)((function(){s&&s.current&&(s.current.src=l)}),[a]),t?r.a.createElement("audio",{controls:!0,ref:s},r.a.createElement("source",{src:l,type:"audio/mpeg"})):r.a.createElement("div",{onClick:u},o?r.a.createElement(z.a,{style:{color:$.a[500]}}):r.a.createElement(K.a,{style:{color:H.a[500]}}))},Y=t(82),Z=t.n(Y),ee=t(55),ae=t.n(ee),te=t(56),ne=t.n(te),re=Object(V.a)((function(e){return{root:{color:ae.a.A700,backgroundColor:"#fff","&:hover":{backgroundColor:ae.a[50]}}}}))(B.a),le=Object(V.a)((function(e){return{root:{color:ne.a.A700,backgroundColor:"#fff","&:hover":{backgroundColor:ne.a[50]}}}}))(B.a);function ce(e){var a=e.card,t=e.isMobile,l=e.isEnglishFirst,c=Object(n.useState)(!1),i=Object(b.a)(c,2),o=i[0],u=i[1],s=Object(n.useState)(!1),m=Object(b.a)(s,2),d=m[0],E=m[1],f=Object(n.useState)(!1),h=Object(b.a)(f,2),p=h[0],v=h[1];Object(n.useEffect)((function(){u(!1),E(!1),v(!1)}),[a]);var g=l?a.english:a.hiragana,j=l?a.hiragana:a.english;return r.a.createElement("div",null,a.audioUrl?r.a.createElement(X,{url:a.audioUrl,controls:t}):null,r.a.createElement("div",{className:"study-text"},g),p?r.a.createElement("div",{className:"hint-text"},a.no_kanji):r.a.createElement("div",null,r.a.createElement(B.a,{color:"secondary",onClick:function(){return v(!0)}},"Show No Kanji")),d?r.a.createElement("div",{className:"romaji-text"},a.romaji):r.a.createElement("div",null,r.a.createElement(le,{color:"secondary",onClick:function(){return E(!0)}},"Show Romaji")),o?r.a.createElement("div",{className:"answer-text"},j):r.a.createElement("div",null,r.a.createElement(re,{color:"primary",onClick:function(){return u(!0)}},"Show Answer")))}var ie=Object(g.g)((function(e){var a=Object(N.c)((function(e){return e.cards})),t=Object(N.b)(),l="".concat(e.match.params.lesson).concat(e.isEnglishFirst?"-e":""),c=Object(n.useState)(0),i=Object(b.a)(c,2),o=i[0],m=i[1],d=Object(n.useState)(JSON.parse(localStorage.getItem(l))||[]),E=Object(b.a)(d,2),f=E[0],h=E[1],p=s.filter(a,(function(e){return-1===f.indexOf(e._id)})),v=s.filter(a,(function(e){return-1!==f.indexOf(e._id)}));function g(e){if(o+1<p.length)if(e)m(o+1);else{var a=Object(G.a)(f);a.push(j._id),h(a),localStorage.setItem(l,JSON.stringify(f))}else m(0)}Object(n.useEffect)((function(){var a="all"===e.match.params.lesson?null:e.match.params.lesson;t(q(a))}),[]);var j=Object(u.a)({},p[o]);return s.isEmpty(j)?r.a.createElement("div",{style:{textAlign:"center",width:"100%"},className:"card-container"},"No Cards"):r.a.createElement("div",{style:{textAlign:"center",width:"100%"},className:"card-container"},v.length>0?r.a.createElement("div",null,r.a.createElement(B.a,{variant:"contained",color:"secondary",startIcon:r.a.createElement(Z.a,null),onClick:function(){m(0),localStorage.setItem(l,JSON.stringify([])),h([])}},"Reset Lesson")):null,r.a.createElement("div",null,e.match.params.lesson.toUpperCase()),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginBottom:"50px"}},r.a.createElement("div",null,r.a.createElement("span",null,o+1)," / ",r.a.createElement("span",{className:"remaining"},p.length," ")," / ",r.a.createElement("span",{className:"finished"},v.length))),r.a.createElement(w.a,null,r.a.createElement(x.a,null,r.a.createElement(ce,{card:j,isMobile:e.isMobile,isEnglishFirst:e.isEnglishFirst})),r.a.createElement(P.a,null,r.a.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"center"}},r.a.createElement("div",{style:{marginRight:"5px"}},r.a.createElement(B.a,{variant:"contained",color:"primary",onClick:function(){return g(!1)}},"Good")),r.a.createElement("div",{style:{marginLeft:"5px"}},r.a.createElement(B.a,{variant:"contained",color:"secondary",onClick:function(){return g(!0)}},"Revisit"))))))})),oe=function(e,a,t){var r=Object(n.useState)(t),l=Object(b.a)(r,2),c=l[0],i=l[1],s=Object(n.useState)({}),m=Object(b.a)(s,2),d=m[0],E=m[1],f=Object(n.useState)(!1),h=Object(b.a)(f,2),p=h[0],v=h[1];Object(n.useEffect)((function(){0===Object.keys(d).length&&p&&e()}),[d,p]);return{handleClearValues:function(){i({}),v(!1)},handleChange:function(e){e.persist(),v(!1),i((function(a){return Object(u.a)({},a,Object(o.a)({},e.target.name,e.target.value))})),d[e.target.name]&&E(a(Object(u.a)({},c,Object(o.a)({},e.target.name,e.target.value))))},handleSubmit:function(e){e&&e.preventDefault(),v(!0),E(a(c))},values:c,errors:d}};function ue(e){var a={};return e.hiragana||(a.hiragana=!0),e.romaji||(a.romaji=!0),e.english||(a.english=!0),e.type||(a.type=!0),a}var se=t(174),me=t(171),de=t(170);var Ee=function(){var e,a=oe((function(){s(function(e){var a="".concat(L.baseApiUri,"/api/addCard");return function(t){return new Promise((function(n,r){F.a.post(a,{card:e}).then((function(e){var a=e.data,r=a.failed?I(a.failed):{type:"SET_CARD_SUCCESS",card:a};t(r),n(a)})).catch((function(e){t(I(e.message)),r(e.message)}))}))}}(l)).then((function(e){E(!0),u()})).catch((function(e){console.log(e)}))}),ue,{}),t=a.errors,l=a.values,c=a.handleChange,i=a.handleSubmit,u=a.handleClearValues,s=Object(N.b)(),m=Object(n.useState)(!1),d=Object(b.a)(m,2),E=(d[0],d[1]);return r.a.createElement("form",{id:"addCardForm",onSubmit:i},r.a.createElement("div",null,r.a.createElement(se.a,{labelId:"Type",id:"type-select",value:l.type||"",name:"type",onChange:c},r.a.createElement(me.a,{value:"phrase"},"Phrase"),r.a.createElement(me.a,{value:"question"},"Question"),r.a.createElement(me.a,{value:"vocab"},"Vocab")),t.type?r.a.createElement("span",null,"Required."):null),r.a.createElement("div",null,r.a.createElement(de.a,{"aria-label":"hiragana",className:"".concat(t.hiragana?"error":""),type:"text",placeholder:"hiragana",name:"hiragana",onChange:c,value:l.hiragana||""}),t.hiragana?r.a.createElement("span",null,"Required."):null),r.a.createElement("div",null,r.a.createElement(de.a,{"aria-label":"no_kanji",className:"",type:"text",placeholder:"no_kanji",name:"no_kanji",onChange:c,value:l.no_kanji||""}),t.no_kanji?r.a.createElement("span",null,"Required."):null),r.a.createElement("div",null,r.a.createElement(de.a,{"aria-label":"romaji",className:"",type:"text",placeholder:"romaji",name:"romaji",onChange:c,value:l.romaji||""}),t.romaji?r.a.createElement("span",null,"Required."):null),r.a.createElement("div",null,r.a.createElement(de.a,{"aria-label":"english",className:"".concat(t.english?"error":""),type:"text",placeholder:"english",name:"english",onChange:c,value:l.english||""}),t.english?r.a.createElement("span",null,"Required."):null),r.a.createElement(B.a,(e={type:"primary",color:"primary","aria-label":"submit"},Object(o.a)(e,"type","submit"),Object(o.a)(e,"htmltype","submit"),Object(o.a)(e,"className","submit-button"),e),"Save"))},fe=t(84),he=t.n(fe),pe=t(172);function be(e){var a=e.card,t=e.submitFn,n=e.deleteCardFn,l=oe((function(){t(i).then((function(e){m()})).catch((function(e){m()}))}),ue,a),c=l.errors,i=l.values,o=l.handleChange,u=l.handleSubmit,s=l.handleClearValues;function m(){s()}return console.log(a),r.a.createElement("form",{id:"addCardForm",onSubmit:u},r.a.createElement(w.a,{style:{margin:"50px 0px"}},r.a.createElement(x.a,null,r.a.createElement("div",null,r.a.createElement(pe.a,null,"type:"),r.a.createElement(se.a,{labelId:"Type",id:"type-select",value:i.type||"",name:"type",onChange:o},r.a.createElement(me.a,{value:"phrase"},"Phrase"),r.a.createElement(me.a,{value:"question"},"Question"),r.a.createElement(me.a,{value:"vocab"},"Vocab")),c.type?r.a.createElement("span",null,"Required."):null),r.a.createElement("div",null,r.a.createElement(pe.a,null,"hiragana:"),r.a.createElement(de.a,{"aria-label":"hiragana",className:"".concat(c.hiragana?"error":""),type:"text",placeholder:"hiragana",name:"hiragana",onChange:o,value:i.hiragana||""}),c.hiragana?r.a.createElement("span",null,"Required."):null),r.a.createElement("div",null,r.a.createElement(pe.a,null,"no kanji:"),r.a.createElement(de.a,{"aria-label":"no_kanji",className:"",type:"text",placeholder:"no_kanji",name:"no_kanji",onChange:o,value:i.no_kanji||""}),c.no_kanji?r.a.createElement("span",null,"Required."):null),r.a.createElement("div",null,r.a.createElement(pe.a,null,"romaji:"),r.a.createElement(de.a,{"aria-label":"romaji",className:"",type:"text",placeholder:"romaji",name:"romaji",onChange:o,value:i.romaji||""}),c.romaji?r.a.createElement("span",null,"Required."):null),r.a.createElement("div",null,r.a.createElement(pe.a,null,"english:"),r.a.createElement(de.a,{"aria-label":"english",className:"".concat(c.english?"error":""),type:"text",placeholder:"english",name:"english",onChange:o,value:i.english||""}),c.english?r.a.createElement("span",null,"Required."):null)),r.a.createElement(P.a,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",width:"100%"}},r.a.createElement("div",null,r.a.createElement(B.a,{color:"secondary",startIcon:r.a.createElement(he.a,null),onClick:function(){return n(a)}},"Delete")),r.a.createElement("div",null,r.a.createElement(B.a,{style:{float:"right"},color:"primary","aria-label":"submit",type:"submit",htmltype:"submit",className:"submit-button"},"Save"))))))}var ve=function(){var e=Object(N.c)((function(e){return e.cards})),a=Object(N.b)(),t=function(e){return a(function(e){var a="".concat(L.baseApiUri,"/api/updateCard");return function(t){return new Promise((function(n,r){F.a.post(a,{card:e}).then((function(e){var a=e.data,r=a.failed?D(a.failed):{type:"SET_CARD_SUCCESS",card:a};t(r),n(a)})).catch((function(e){t(D(e.message)),r(e.message)}))}))}}(e))},l=function(e){return a(function(e){var a="".concat(L.baseApiUri,"/api/deleteCard");return function(t){return new Promise((function(n,r){F.a.post(a,{card:e}).then((function(e){var a=e.data,r=a.failed?M(a.failed):{type:"GET_ALL_CARDS_SUCCESS",cards:a};t(r),n(a)})).catch((function(e){t(M(e.message)),r(e.message)}))}))}}(e))};return Object(n.useEffect)((function(){a(q())}),[]),e?r.a.createElement("div",null,s.map(e,(function(e,a){return r.a.createElement(be,{card:Object(u.a)({},e),key:a,submitFn:t,deleteCardFn:l})}))):null},ge=t(85),je=t(173);var ye=function(){var e=Object(n.useState)(!1),a=Object(b.a)(e,2),t=a[0],l=a[1],c=r.a.useState(null),i=Object(b.a)(c,2),o=i[0],u=i[1],s=Boolean(o),m=function(){u(null)};return Object(n.useEffect)((function(){l(window.outerWidth<=767);var e=function(){l(window.outerWidth<=767)};return window.addEventListener("resize",e,{passive:!0}),function(){window.removeEventListener("resize",e,!0)}}),[]),r.a.createElement("div",{className:"App",style:{width:"85%",margin:"0 auto"}},r.a.createElement(v.a,null,r.a.createElement("header",{style:{textAlign:"left"}},r.a.createElement(B.a,{"aria-controls":"fade-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)}},"Menu"),r.a.createElement(ge.a,{id:"fade-menu",anchorEl:o,keepMounted:!0,open:s,onClose:m,TransitionComponent:je.a},r.a.createElement("a",{href:"/"},r.a.createElement(me.a,{onClick:m},"Lessons")),r.a.createElement("a",{href:"/add"},r.a.createElement(me.a,{onClick:m},"Add")),r.a.createElement("a",{href:"/edit"},r.a.createElement(me.a,{onClick:m},"Edit")))),r.a.createElement("main",{className:"main-content"},r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(J,null)}}),r.a.createElement(g.b,{exact:!0,path:"/flashcards/:lesson",render:function(e){return r.a.createElement(ie,{isMobile:t})}}),r.a.createElement(g.b,{exact:!0,path:"/flashcards/:lesson/e",render:function(e){return r.a.createElement(ie,{isMobile:t,isEnglishFirst:!0})}}),r.a.createElement(g.b,{exact:!0,path:"/add",render:function(e){return r.a.createElement(Ee,{isMobile:t})}}),r.a.createElement(g.b,{exact:!0,path:"/edit",render:function(e){return r.a.createElement(ve,{isMobile:t})}}),r.a.createElement(g.a,{to:"/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce,Oe=Object(i.d)(E,Ce,Object(i.a)(p.a,h()()));c.a.render(r.a.createElement(N.a,{store:Oe},r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,a,t){e.exports=t(127)}},[[93,1,2]]]);
//# sourceMappingURL=main.bc0c2c78.chunk.js.map