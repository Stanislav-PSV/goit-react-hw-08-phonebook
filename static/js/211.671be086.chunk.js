"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[211],{5211:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t=r(2791),a=r(3978),i=r(7571),o=r(3793),c=r(3235),s=r(2982),u=r(4942),p=r(3366),l=r(7462),m=r(8182),d=r(1184),f=r(8519),v=r(4419),g=r(277),x=r(5513),h=r(4142);var w=t.createContext(),b=r(1217);function Z(n){return(0,b.Z)("MuiGrid",n)}var k=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],S=(0,r(5878).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,s.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,s.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,s.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,s.Z)(k.map((function(n){return"grid-xs-".concat(n)}))),(0,s.Z)(k.map((function(n){return"grid-sm-".concat(n)}))),(0,s.Z)(k.map((function(n){return"grid-md-".concat(n)}))),(0,s.Z)(k.map((function(n){return"grid-lg-".concat(n)}))),(0,s.Z)(k.map((function(n){return"grid-xl-".concat(n)}))))),j=r(184),W=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function y(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function M(n){var e=n.breakpoints,r=n.values,t="";Object.keys(r).forEach((function(n){""===t&&0!==r[n]&&(t=n)}));var a=Object.keys(e).sort((function(n,r){return e[n]-e[r]}));return a.slice(0,a.indexOf(t))}var N=(0,g.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState,t=r.container,a=r.direction,i=r.item,o=r.spacing,c=r.wrap,u=r.zeroMinWidth,p=r.breakpoints,l=[];t&&(l=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[r["spacing-xs-".concat(String(n))]];var t=[];return e.forEach((function(e){var a=n[e];Number(a)>0&&t.push(r["spacing-".concat(e,"-").concat(String(a))])})),t}(o,p,e));var m=[];return p.forEach((function(n){var t=r[n];t&&m.push(e["grid-".concat(n,"-").concat(String(t))])})),[e.root,t&&e.container,i&&e.item,u&&e.zeroMinWidth].concat((0,s.Z)(l),["row"!==a&&e["direction-xs-".concat(String(a))],"wrap"!==c&&e["wrap-xs-".concat(String(c))]],m)}})((function(n){var e=n.ownerState;return(0,l.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,r=n.ownerState,t=(0,d.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,d.k9)({theme:e},t,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(S.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,a=r.rowSpacing,i={};if(t&&0!==a){var o,c=(0,d.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=M({breakpoints:e.breakpoints.values,values:c})),i=(0,d.k9)({theme:e},c,(function(n,r){var t,a=e.spacing(n);return"0px"!==a?(0,u.Z)({marginTop:"-".concat(y(a))},"& > .".concat(S.item),{paddingTop:y(a)}):null!=(t=o)&&t.includes(r)?{}:(0,u.Z)({marginTop:0},"& > .".concat(S.item),{paddingTop:0})}))}return i}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,a=r.columnSpacing,i={};if(t&&0!==a){var o,c=(0,d.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=M({breakpoints:e.breakpoints.values,values:c})),i=(0,d.k9)({theme:e},c,(function(n,r){var t,a=e.spacing(n);return"0px"!==a?(0,u.Z)({width:"calc(100% + ".concat(y(a),")"),marginLeft:"-".concat(y(a))},"& > .".concat(S.item),{paddingLeft:y(a)}):null!=(t=o)&&t.includes(r)?{}:(0,u.Z)({width:"100%",marginLeft:0},"& > .".concat(S.item),{paddingLeft:0})}))}return i}),(function(n){var e,r=n.theme,t=n.ownerState;return r.breakpoints.keys.reduce((function(n,a){var i={};if(t[a]&&(e=t[a]),!e)return n;if(!0===e)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,d.P$)({values:t.columns,breakpoints:r.breakpoints.values}),c="object"===typeof o?o[a]:o;if(void 0===c||null===c)return n;var s="".concat(Math.round(e/c*1e8)/1e6,"%"),u={};if(t.container&&t.item&&0!==t.columnSpacing){var p=r.spacing(t.columnSpacing);if("0px"!==p){var m="calc(".concat(s," + ").concat(y(p),")");u={flexBasis:m,maxWidth:m}}}i=(0,l.Z)({flexBasis:s,flexGrow:0,maxWidth:s},u)}return 0===r.breakpoints.values[a]?Object.assign(n,i):n[r.breakpoints.up(a)]=i,n}),{})}));var z=function(n){var e=n.classes,r=n.container,t=n.direction,a=n.item,i=n.spacing,o=n.wrap,c=n.zeroMinWidth,u=n.breakpoints,p=[];r&&(p=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var r=[];return e.forEach((function(e){var t=n[e];if(Number(t)>0){var a="spacing-".concat(e,"-").concat(String(t));r.push(a)}})),r}(i,u));var l=[];u.forEach((function(e){var r=n[e];r&&l.push("grid-".concat(e,"-").concat(String(r)))}));var m={root:["root",r&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,s.Z)(p),["row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==o&&"wrap-xs-".concat(String(o))],l)};return(0,v.Z)(m,Z,e)},P=t.forwardRef((function(n,e){var r=(0,x.Z)({props:n,name:"MuiGrid"}),a=(0,h.Z)().breakpoints,i=(0,f.Z)(r),o=i.className,c=i.columns,s=i.columnSpacing,u=i.component,d=void 0===u?"div":u,v=i.container,g=void 0!==v&&v,b=i.direction,Z=void 0===b?"row":b,k=i.item,S=void 0!==k&&k,y=i.rowSpacing,M=i.spacing,P=void 0===M?0:M,C=i.wrap,E=void 0===C?"wrap":C,G=i.zeroMinWidth,T=void 0!==G&&G,O=(0,p.Z)(i,W),B=y||P,D=s||P,L=t.useContext(w),$=g?c||12:L,_={},q=(0,l.Z)({},O);a.keys.forEach((function(n){null!=O[n]&&(_[n]=O[n],delete q[n])}));var F=(0,l.Z)({},i,{columns:$,container:g,direction:Z,item:S,rowSpacing:B,columnSpacing:D,wrap:E,zeroMinWidth:T,spacing:P},_,{breakpoints:a.keys}),R=z(F);return(0,j.jsx)(w.Provider,{value:$,children:(0,j.jsx)(N,(0,l.Z)({ownerState:F,className:(0,m.Z)(R.root,o),as:d,ref:e},q))})})),C=P,E=r(6015),G=r(403),T=r(4565),O=r(803),B=r(4360),D=r(7012),L=r(9434),$=r(5719),_=(0,B.Z)(),q=function(){var n=(0,L.I0)();return(0,j.jsx)(D.Z,{theme:_,children:(0,j.jsxs)(O.Z,{component:"main",maxWidth:"xs",children:[(0,j.jsx)(o.ZP,{}),(0,j.jsxs)(E.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,j.jsx)(a.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,j.jsx)(G.Z,{})}),(0,j.jsx)(T.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,j.jsxs)(E.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var r=new FormData(e.currentTarget);n((0,$.z2)({name:r.get("name"),email:r.get("email"),password:r.get("password")}))},sx:{mt:3},children:[(0,j.jsxs)(C,{container:!0,spacing:2,children:[(0,j.jsx)(C,{item:!0,xs:12,children:(0,j.jsx)(c.Z,{autoComplete:"name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0})}),(0,j.jsx)(C,{item:!0,xs:12,children:(0,j.jsx)(c.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,j.jsx)(C,{item:!0,xs:12,children:(0,j.jsx)(c.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,j.jsx)(i.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"})]})]})]})})}}}]);
//# sourceMappingURL=211.671be086.chunk.js.map