(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[16],{1161:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return z})),n.d(t,"mapDispatchToProps",(function(){return B}));var r=n(63),i=n(16),a=n(176),c=n(527),s=n(504),o=n(502),l=n(526),j=n(533),b=n(516),h=n(517),d=n(530),m=n(518),p=n(519),u=n(520),O=n(0),g=n.n(O),x=n(138),f=n.n(x),y=n(60),T=n(87),E=n(88),P=n(181),w=n(7),v=n(515),M=n(175),H=Object(w.a)((function(){return{body:{fontSize:14,whiteSpace:"normal",wordBreak:"break-word"}}}))(v.a),S=Object(w.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(p.a),C=Object(M.a)((function(e){return{root:{margin:e.spacing(1)},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},tabsPanel:{flexGrow:1,width:"100%",marginTop:e.spacing(3),backgroundColor:e.palette.background.paper},tabsBar:{marginBottom:e.spacing(2)},tableHeader:{backgroundColor:e.palette.primary.main}}})),I=n(21);function N(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var k=n(1);function F(e){var t=e.children,n=e.value,r=e.index,i=N(e,["children","value","index"]),a=n===r;return Object(k.jsx)("div",Object(I.a)(Object(I.a)({role:"tabpanel",hidden:!a,id:"scrollable-auto-tabpanel-".concat(r),"aria-labelledby":"scrollable-auto-tab-".concat(r)},i),{},{children:a&&Object(k.jsx)(k.Fragment,{children:t})}))}var _,L=n(30),W=n(642),Y=n(179);!function(e){e[e.MIME_TYPES=0]="MIME_TYPES",e[e.HTML_ENTITIES=1]="HTML_ENTITIES"}(_||(_={}));function z(e){return{mimeTypes:e.mimeTypes.elements,filteringMimeTypes:e.mimeTypes.filtering,htmlEntities:e.htmlEntities.elements,filteringHtmlEntities:e.htmlEntities.filtering}}function B(e){return{applyMimeTypesFilter:function(t){return e(Object(E.b)(t))},applyHtmlEntitiesFilter:function(t){return e(Object(T.b)(t))}}}t.default=Object(y.b)(z,B)(Object(d.a)()((function(e){var t=C(),n=g.a.useState(_.MIME_TYPES),O=Object(i.a)(n,2),x=O[0],y=O[1],T=g.a.useState(""),E=Object(i.a)(T,2),w=E[0],v=E[1],M=e.filteringMimeTypes,I=e.mimeTypes,N=e.filteringHtmlEntities,z=e.htmlEntities,B=e.applyMimeTypesFilter,R=e.applyHtmlEntitiesFilter,D=M||N,G=Object(Y.a)(),J=G.page,q=G.setPage,A=G.rowsPerPage,K=G.handleChangeRowsPerPage;function Q(e){v(e),q(0),x===_.MIME_TYPES?B(e):R(e)}return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(L.a,{title:"Mime-types, HTML Entities\u2026"}),Object(k.jsx)(a.a,{square:!0,children:Object(k.jsxs)(c.a,{value:x,onChange:function(e,t){y(t),Q(""),q(0)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"on","aria-label":"Common web lists",children:[Object(k.jsx)(s.a,{label:"Mime-types",id:"mime-types","aria-controls":"tab-mime-types"}),Object(k.jsx)(s.a,{label:"HTML Entities",id:"html-entities","aria-controls":"tab-html-entities"})]})}),Object(k.jsxs)("div",{className:t.root,children:[Object(k.jsxs)(o.a,{className:t.toolbar,children:[Object(k.jsx)(P.a,{initialFilter:w,onFilterChange:Q}),Object(k.jsx)(l.a,{display:"flex",flexGrow:1}),Object(k.jsx)(W.a,{count:x===_.MIME_TYPES?I.size:z.length,searching:D})]}),Object(k.jsxs)(F,{value:x,index:_.MIME_TYPES,children:[Object(k.jsx)(j.a,{rowsPerPageOptions:[5,10,25,50,100],component:"div",count:Object(r.a)(I.keys()).length,rowsPerPage:A,page:J,onPageChange:function(e,t){return q(t)},onRowsPerPageChange:K}),Object(k.jsx)(b.a,{component:a.a,children:Object(k.jsxs)(h.a,{size:Object(d.c)("md",e.width)?"medium":"small",children:[Object(k.jsx)(m.a,{className:t.tableHeader,children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(H,{component:"th",scope:"row",children:"Mime Type"}),Object(k.jsx)(H,{component:"th",scope:"row",children:"File extension"})]})}),Object(k.jsx)(u.a,{children:Object(r.a)(I.keys()).slice(J*A,J*A+A).map((function(e){var t=(I.get(e)||[]).join(", ");return Object(k.jsxs)(S,{children:[Object(k.jsx)(H,{children:Object(k.jsx)(f.a,{searchWords:[w],textToHighlight:e})}),Object(k.jsx)(H,{children:Object(k.jsx)(f.a,{searchWords:[w],textToHighlight:t})})]},e)}))})]})})]}),Object(k.jsxs)(F,{value:x,index:_.HTML_ENTITIES,children:[Object(k.jsx)(j.a,{rowsPerPageOptions:[5,10,25,50,100],component:"div",count:z.length,rowsPerPage:A,page:J,onPageChange:function(e,t){return q(t)},onRowsPerPageChange:K}),Object(k.jsx)(b.a,{component:a.a,children:Object(k.jsxs)(h.a,{size:Object(d.c)("md",e.width)?"medium":"small",children:[Object(k.jsx)(m.a,{className:t.tableHeader,children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(H,{component:"th",scope:"row",children:"Entity"}),Object(k.jsx)(H,{component:"th",scope:"row",children:"Name"}),Object(k.jsx)(H,{component:"th",scope:"row",children:"Number"}),Object(k.jsx)(H,{component:"th",scope:"row",children:"Description"})]})}),Object(k.jsx)(u.a,{children:z.slice(J*A,J*A+A).map((function(e){return Object(k.jsxs)(S,{children:[Object(k.jsx)(H,{children:Object(k.jsx)(f.a,{searchWords:[w],textToHighlight:e.character})}),Object(k.jsx)(H,{children:Object(k.jsx)(f.a,{searchWords:[w],textToHighlight:e.entityName})}),Object(k.jsx)(H,{children:Object(k.jsx)(f.a,{searchWords:[w],textToHighlight:e.entityNumber})}),Object(k.jsx)(H,{children:Object(k.jsx)(f.a,{searchWords:[w],textToHighlight:e.description})})]},e.entityNumber)}))})]})})]})]})]})})))},642:function(e,t,n){"use strict";var r=n(16),i=n(0),a=n.n(i),c=n(79),s=n(175),o=Object(s.a)((function(e){return{root:{margin:e.spacing(1)}}})),l=n(82),j=n(1);t.a=function(e){var t=o(),n=a.a.useState(l.b),i=Object(r.a)(n,2),s=i[0],b=i[1],h=e.count,d=e.searching;return a.a.useEffect((function(){d?b("filtering\u2026"):setTimeout((function(){return b(l.b)}),800)}),[d]),Object(j.jsxs)("div",{className:t.root,children:[Object(j.jsx)(c.a,{align:"right",children:s}),Object(j.jsx)(c.a,{align:"right",children:h})]})}}}]);
//# sourceMappingURL=16.313c1093.chunk.js.map