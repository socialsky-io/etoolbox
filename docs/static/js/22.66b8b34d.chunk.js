(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[22],{1044:function(e,t,a){"use strict";a.r(t),function(e){var n=a(15),r=a(0),i=a.n(r),c=a(273),s=a(1042),o=a(1075),l=a(1052),u=a(370),d=a(365),j=a(335),b=a(60),f=a(366),g=a(338),p=a(1045),m=a(251),x=a(253),h=a(350),O=a.n(h),v=a(122),y=a.n(v),w=a(404),C=a.n(w),k=a(444),I=a(286),N=a(799),S=a(91),D=a(825),R=a(403),W=a(289),F=a(90),L=a(2),T={workerId:"",jobId:"",status:"",progress:0};t.default=Object(c.a)()((function(t){var a="Image OCR (text extraction)",r=Object(D.b)(),h=Object(S.c)().setToasterState,v=i.a.useState("eng"),w=Object(n.a)(v,2),E=w[0],A=w[1],P=i.a.useState(T),z=Object(n.a)(P,2),B=z[0],H=z[1],J=i.a.useState(""),U=Object(n.a)(J,2),_=U[0],G=U[1],V=i.a.useState(""),q=Object(n.a)(V,2),K=q[0],M=q[1];function Q(e){H(e),M("Processing the image\n\t \u2192 ".concat(e.status,"\u2026"))}function X(e){var t=e.clipboardData||e.originalEvent.clipboardData||e.originalEvent.clipboard;N.a(t.items,(function(e){return G(e.target.result)}))}return i.a.useEffect((function(){return document.onpaste=X,function(){document.removeEventListener("onpaste",X)}}),[]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(F.a,{title:a}),Object(L.jsxs)("div",{className:r.root,children:[Object(L.jsx)(I.a,{iconType:y.a,title:a}),Object(L.jsx)("form",{noValidate:!0,autoComplete:"off",className:r.form,children:Object(L.jsxs)(s.a,{className:r.formControl,children:[Object(L.jsx)(o.a,{shrink:!0,id:"languageLabel",children:"Image language"}),Object(L.jsxs)(l.a,{labelId:"languageLabel",id:"language",value:E,autoFocus:Object(c.c)("md",t.width),onChange:function(e){return A(e.target.value)},children:[Object(L.jsx)(u.a,{value:"eng",children:"English"}),Object(L.jsx)(u.a,{value:"fra",children:"French"})]})]})}),Object(L.jsxs)(d.a,{children:[Object(L.jsxs)(j.a,{display:"flex",alignItems:"center",justifyContent:"center",className:r.imageSelector,children:[!_&&Object(L.jsxs)("div",{children:[Object(L.jsx)(b.a,{children:"paste image from clipboard"}),Object(L.jsx)(b.a,{children:"or select a file"}),Object(L.jsx)("input",{type:"file",color:"primary",accept:"image/*",onChange:function(e){return function(e){var t=new FileReader;t.onload=function(e){return G(e.target.result)},t.readAsDataURL(e)}(e.target.files[0])},id:"icon-button-file",style:{display:"none"}}),Object(L.jsx)("label",{htmlFor:"icon-button-file",children:Object(L.jsx)(x.a,{variant:"contained",component:"span",color:"primary",children:Object(L.jsx)(C.a,{})})})]}),_&&Object(L.jsx)(k.a,{style:D.a,defaultSize:{width:300,height:"100%"},children:Object(L.jsx)("img",{src:_,alt:"Clipboard content",className:r.image})})]}),_&&Object(L.jsx)(j.a,{display:"flex",alignItems:"center",justifyContent:"center",children:Object(L.jsx)(x.a,{endIcon:Object(L.jsx)(O.a,{}),variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),H(T),G(""),M("")},children:"Clear"})}),Object(L.jsxs)(f.a,{children:[Object(L.jsx)(R.a,{active:K.startsWith("Processing"),children:Object(L.jsx)(g.a,{label:"Extracted text",fullWidth:!0,value:K,margin:"normal",variant:"outlined",multiline:!0,minRows:"8"})}),Object(L.jsx)(p.a,{variant:"determinate",value:100*B.progress}),Object(L.jsxs)(m.a,{className:r.toolbar,children:[Object(L.jsx)(j.a,{display:"flex",flexGrow:1}),Object(L.jsx)(W.a,{data:K}),Object(L.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(t){if(t.preventDefault(),_){M("Processing the image, please wait\u2026");var a=e.from(_.split(",")[1],"base64");N.b(E,a,Q,M).then()}else h({open:!0,message:"There is no image to process",type:"error",autoHideDuration:2e3})},disabled:!_,endIcon:Object(L.jsx)(y.a,{}),children:"Run"})]})]})]})]})]})}))}.call(this,a(164).Buffer)},286:function(e,t,a){"use strict";var n=a(60),r=a(247),i=(a(0),a(2)),c=Object(r.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=c(),a=e.iconType;return Object(i.jsx)("div",{className:t.titleContainer,children:Object(i.jsxs)("div",{className:t.titleWithIcon,children:[Object(i.jsx)(a,{className:t.icon}),Object(i.jsx)(n.a,{variant:"h5",className:t.title,children:e.title})]})})}},289:function(e,t,a){"use strict";var n=a(253),r=a(299),i=a.n(r),c=a(294),s=a.n(c),o=(a(0),a(91)),l=a(2);t.a=function(e){var t=e.data,a=Object(o.c)().setToasterState;return Object(l.jsx)(n.a,{onClick:function(){if(t){var e=t.substr(0,20),n="Content copied into clipboard: ".concat(e," \u2026");s.a(t,{format:"text/plain"}),a({open:!0,message:n,type:"success",autoHideDuration:2e3})}},disabled:!t,title:"Copy to clipboard",variant:"contained",color:"primary",children:Object(l.jsx)(i.a,{})})}},403:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a(0);var n=a(247),r=a(107),i=a.n(r),c=a(108),s=a.n(c),o=a(2),l=Object(n.a)((function(e){return{root:{"& .spinner_overlay":{background:"rgba(0, 0, 0, 0.3)"}}}})),u=function(e){var t=l();return Object(o.jsx)(i.a,{classNamePrefix:"spinner_",className:t.root,active:e.active,spinner:Object(o.jsx)(s.a,{color:"#bf3a2b"}),children:e.children})}},799:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return s}));var n=a(23),r=a(322),i=a(800);function c(e,t){if(e)for(var a=0;a<e.length;a++){var n=e[a];if(n.type.startsWith("image")){var r=new FileReader;r.onload=t,r.readAsDataURL(n.getAsFile());break}}}function s(e,t,a,n){return o.apply(this,arguments)}function o(){return(o=Object(r.a)(Object(n.a)().mark((function e(t,a,r,c){var s,o;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(i.createWorker)({logger:r}),e.next=3,s.load();case 3:return e.next=5,s.loadLanguage(t);case 5:return e.next=7,s.initialize(t);case 7:return e.next=9,s.recognize(a);case 9:return o=e.sent,c(o.data.text),e.next=13,s.terminate();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},825:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var n=a(247),r={marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",border:"solid 1px blue"},i=Object(n.a)((function(e){return{root:{margin:e.spacing(1)},form:{marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120},image:{width:"100%"},imageSelector:{margin:e.spacing(2),textAlign:"center"},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},formatted:{padding:e.spacing(1),border:"1px solid grey",wordWrap:"break-word",height:116}}}))}}]);
//# sourceMappingURL=22.66b8b34d.chunk.js.map