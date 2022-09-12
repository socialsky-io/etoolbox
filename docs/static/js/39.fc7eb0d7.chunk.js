(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[39],{1064:function(e,t,n){"use strict";n.r(t);var a=n(15),i=n(335),r=n(60),c=n(253),o=n(350),l=n.n(o),s=n(105),d=n.n(s),u=n(404),g=n.n(u),b=n(294),j=n.n(b),p=n(444),m=n(0),f=n.n(m),h=n(1021),v=n(90),x=n(286),y=n(91);function O(e){if(e<0||e>1)throw new Error("Invalid opacity value");return Math.round(255*e).toString(16)}function C(e,t){var n,a,i,r=function(e){var t=e.target,n=t.getBoundingClientRect(),a=n.left,i=n.top,r=e.pageX-a,c=e.pageY-i,o=t.clientWidth,l=t.clientHeight,s=t.naturalWidth,d=t.naturalHeight,u=Math.round(r/o*s),g=Math.round(c/l*d);return{px:u,py:g,width:s,height:d}}(e),c=document.createElement("canvas");c.width=r.width,c.height=r.height;var o=c.getContext("2d");o.drawImage(t,0,0);var l=o.getImageData(r.px,r.py,1,1).data;return{r:null!==(n=+l[0])&&void 0!==n?n:0,g:null!==(a=+l[1])&&void 0!==a?a:0,b:null!==(i=+l[2])&&void 0!==i?i:0,a:1}}var w=function(e){return"#"+("000000"+function(e,t,n){if(e>255||t>255||n>255)throw new Error("Invalid color component");return(e<<16|t<<8|n).toString(16)}(e.r,e.g,e.b)).slice(-6)};var k=n(247),I={marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",border:"solid 1px blue"},S=Object(k.a)((function(e){return{root:{margin:e.spacing(1)},image:{width:"100%",margin:5,border:"dashed 1px grey"},imageSelector:{margin:e.spacing(2),textAlign:"center"},toolbar:{margin:e.spacing(2)},sample:{cursor:"pointer",width:"100%",height:50,marginBottom:e.spacing(1),borderColor:e.palette.text.disabled,borderStyle:"solid",borderWidth:1,borderRadius:e.shape.borderRadius,textAlign:"center",fontSize:16,fontFamily:"monospace",textShadow:"1px 1px lightgrey"},colorPicker:{marginTop:e.spacing(2)}}})),E=n(2),N="";t.default=function(){var e,t,n,o="Color picker",s=S(),u=Object(y.c)().setToasterState,b=f.a.useState(""),k=Object(a.a)(b,2),D=k[0],R=k[1],F=f.a.useState(),W=Object(a.a)(F,2),A=W[0],B=W[1],T=f.a.useState(N),L=Object(a.a)(T,2),H=L[0],M=L[1],z=f.a.useState(N),J=Object(a.a)(z,2),P=J[0],U=J[1],X=f.a.useState(N),Y=Object(a.a)(X,2),q=Y[0],G=Y[1],K=f.a.useState(N),Q=Object(a.a)(K,2),V=Q[0],Z=Q[1];function $(e){!function(e,t){if(e)for(var n=0;n<e.length;n++){var a=e[n];if(a.type.startsWith("image")){var i=new FileReader;i.onload=t,i.readAsDataURL(a.getAsFile());break}}}((e.clipboardData||e.originalEvent.clipboardData||e.originalEvent.clipboard).items,(function(e){return R(e.target.result)}))}function _(e){var t=C(e,document.getElementById("image"));B(t)}Object(m.useEffect)((function(){var e,t;A?(M(w(A)),U(w(A)+O(null!==(e=A.a)&&void 0!==e?e:1)),G("rgb(".concat(A.r,", ").concat(A.g,", ").concat(A.b,")")),Z("rgba(".concat(A.r,", ").concat(A.g,", ").concat(A.b,", ").concat(null!==(t=A.a)&&void 0!==t?t:1,")"))):(M(N),U(N),G(N),Z(N))}),[A]),f.a.useEffect((function(){return document.onpaste=$,function(){document.removeEventListener("onpaste",$)}}),[]),f.a.useEffect((function(){D&&document.getElementById("image").addEventListener("click",_)}),[D]);var ee=function(e){var t=e.substr(0,20),n="Content copied into clipboard: ".concat(t," \u2026");j.a(e,{format:"text/plain"}),u({open:!0,message:n,type:"success",autoHideDuration:2e3})};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(v.a,{title:o}),Object(E.jsxs)("div",{className:s.root,children:[Object(E.jsx)(x.a,{iconType:d.a,title:o}),Object(E.jsxs)(i.a,{display:"flex",alignItems:"center",justifyContent:"center",className:s.imageSelector,children:[!D&&Object(E.jsx)("div",{children:Object(E.jsxs)(r.a,{variant:"body2",children:["paste image or select a file:"," ",Object(E.jsx)("input",{type:"file",color:"primary",accept:"image/*",onChange:function(e){return function(e){var t=new FileReader;t.onload=function(e){return R(e.target.result)},t.readAsDataURL(e)}(e.target.files[0])},id:"icon-button-file",style:{display:"none"}}),Object(E.jsx)("label",{htmlFor:"icon-button-file",children:Object(E.jsx)(c.a,{variant:"contained",component:"span",color:"primary",children:Object(E.jsx)(g.a,{})})})]})}),D&&Object(E.jsx)(p.a,{style:I,defaultSize:{width:300,height:"100%"},children:Object(E.jsx)("img",{id:"image",src:D,alt:"Clipboard content",className:s.image})})]}),Object(E.jsxs)(i.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",className:s.colorPicker,children:[Object(E.jsx)(r.a,{variant:"body2",children:"or just pick a color:"}),Object(E.jsx)(h.a,{color:A,onChangeComplete:function(e){return B(e.rgb)}}),Object(E.jsxs)("pre",{children:["Opacity to hexa: ",100*(null!==(e=null===A||void 0===A?void 0:A.a)&&void 0!==e?e:1),"% = ",null!==(t=null===A||void 0===A?void 0:A.a)&&void 0!==t?t:1," ="," ",O(null!==(n=null===A||void 0===A?void 0:A.a)&&void 0!==n?n:1)]})]}),D&&Object(E.jsx)(i.a,{display:"flex",alignItems:"center",justifyContent:"center",children:Object(E.jsx)(c.a,{endIcon:Object(E.jsx)(l.a,{}),variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),R(""),B(void 0)},children:"Clear"})}),Object(E.jsxs)(i.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:[Object(E.jsx)("div",{className:s.sample,style:{backgroundColor:H},onClick:function(){return ee(H)},children:H}),Object(E.jsx)("div",{className:s.sample,style:{backgroundColor:P},onClick:function(){return ee(P)},children:P}),Object(E.jsx)("div",{className:s.sample,style:{backgroundColor:q},onClick:function(){return ee(q)},children:q}),Object(E.jsx)("div",{className:s.sample,style:{backgroundColor:V},onClick:function(){return ee(V)},children:V})]})]})]})}},286:function(e,t,n){"use strict";var a=n(60),i=n(247),r=(n(0),n(2)),c=Object(i.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=c(),n=e.iconType;return Object(r.jsx)("div",{className:t.titleContainer,children:Object(r.jsxs)("div",{className:t.titleWithIcon,children:[Object(r.jsx)(n,{className:t.icon}),Object(r.jsx)(a.a,{variant:"h5",className:t.title,children:e.title})]})})}}}]);
//# sourceMappingURL=39.fc7eb0d7.chunk.js.map