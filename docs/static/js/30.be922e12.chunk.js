(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[30],{1069:function(t,e,n){"use strict";n.r(e),n.d(e,"mapStateToProps",(function(){return T})),n.d(e,"mapDispatchToProps",(function(){return k}));var a=n(15),i=n(0),r=n.n(i),c=n(92),o=n(251),s=n(335),l=n(273),u=n(253),d=n(247),j=n(100),b=n.n(j),p=n(522),x=n.n(p),m=n(338),f=n(523),O=n.n(f),h=n(93);function v(t,e){return t?e?decodeURIComponent(t):encodeURIComponent(t):""}var g=n(286),w=n(289),y=n(90),C=n(328),R=n(2),I=Object(d.a)((function(t){return{root:{margin:t.spacing(1)},toolbar:{margin:0,padding:0,"& > *":{marginLeft:t.spacing(1)}}}}));function T(t){return{inputText:t.textInputs.lastUrlEncoderValue}}function k(t){return{storeInputText:function(e,n){return t(Object(h.b)(e,n))}}}e.default=Object(c.b)(T,k)(Object(l.a)()((function(t){var e="URL Encoder / decoder",n=I(),i=t.inputText,c=t.storeInputText,d=r.a.useState(v(i,!1)),j=Object(a.a)(d,2),p=j[0],f=j[1];return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(y.a,{title:e}),Object(R.jsxs)("div",{className:n.root,children:[Object(R.jsx)(g.a,{iconType:x.a,title:e}),Object(R.jsx)(m.a,{autoFocus:Object(l.c)("md",t.width),label:"Content to encode/decode",placeholder:"Paste or type the content here",multiline:!0,minRows:4,maxRows:Object(l.c)("md",t.width)?20:4,variant:"outlined",margin:"normal",fullWidth:!0,value:i,onChange:function(t){return c("lastUrlEncoderValue",t.target.value)}}),Object(R.jsxs)(o.a,{className:n.toolbar,children:[Object(R.jsx)(u.a,{variant:"contained",component:"span",color:"primary",disabled:!p,onClick:function(){c("lastUrlEncoderValue",p),f("")},children:Object(R.jsx)(O.a,{})}),Object(R.jsx)(s.a,{display:"flex",flexGrow:1}),Object(R.jsx)(w.a,{data:p}),Object(R.jsx)(u.a,{variant:"contained",color:"primary",disabled:!i,onClick:function(){return f(v(i,!1))},children:Object(R.jsx)(b.a,{})}),Object(R.jsx)(u.a,{variant:"contained",color:"primary",disabled:!i,onClick:function(){return f(v(i,!0))},children:Object(R.jsx)(x.a,{})})]}),Object(R.jsx)(C.a,{label:"Result",result:p})]})]})})))},286:function(t,e,n){"use strict";var a=n(60),i=n(247),r=(n(0),n(2)),c=Object(i.a)((function(t){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:t.spacing(1)}}}));e.a=function(t){var e=c(),n=t.iconType;return Object(r.jsx)("div",{className:e.titleContainer,children:Object(r.jsxs)("div",{className:e.titleWithIcon,children:[Object(r.jsx)(n,{className:e.icon}),Object(r.jsx)(a.a,{variant:"h5",className:e.title,children:t.title})]})})}},289:function(t,e,n){"use strict";var a=n(253),i=n(299),r=n.n(i),c=n(294),o=n.n(c),s=(n(0),n(91)),l=n(2);e.a=function(t){var e=t.data,n=Object(s.c)().setToasterState;return Object(l.jsx)(a.a,{onClick:function(){if(e){var t=e.substr(0,20),a="Content copied into clipboard: ".concat(t," \u2026");o.a(e,{format:"text/plain"}),n({open:!0,message:a,type:"success",autoHideDuration:2e3})}},disabled:!e,title:"Copy to clipboard",variant:"contained",color:"primary",children:Object(l.jsx)(r.a,{})})}},328:function(t,e,n){"use strict";var a=n(338),i=n(247),r=(n(0),n(2)),c=Object(i.a)((function(t){return{result:{fontFamily:"monospace",height:"auto"}}}));e.a=function(t){var e=t.label,n=t.result,i=t.rows,o=void 0===i?10:i,s=t.maxRows,l=void 0===s?15:s,u=c();return Object(r.jsx)(a.a,{multiline:!0,minRows:o,maxRows:l,label:e,variant:"outlined",margin:"normal",fullWidth:!0,value:n,InputProps:{classes:{input:u.result}}})}}}]);
//# sourceMappingURL=30.be922e12.chunk.js.map