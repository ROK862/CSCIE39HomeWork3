(this["webpackJsonpreact-intro-components"]=this["webpackJsonpreact-intro-components"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(11),o=n.n(r),s=(n(17),n(2)),i=n(3),l=n(5),u=n(4),p=n(0),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.className,t=e||"panel-wraper";return Object(p.jsx)("div",{className:t,children:this.props.children})}}]),n}(c.Component),d=n(8),b=(n(19),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,c=e.width,a=e.className,r=e.onClick,o=t?"Left"===t?Object(p.jsx)(d.a,{}):Object(p.jsx)(d.b,{}):"";return Object(p.jsxs)("button",{width:c,onClick:r,className:a,children:[o," ",n]})}}]),n}(c.Component)),h=(n(20),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e="pager-button",t=this.props.panelClassName,n=t||"panel-wraper";return Object(p.jsxs)(j,{backgroundColor:"blue",className:n,children:[Object(p.jsx)(b,{text:"Rewind",className:e,onClick:function(){}}),Object(p.jsx)(b,{text:"Fast Forward",className:e,onClick:function(){}}),Object(p.jsx)(b,{text:"Play",className:e,onClick:function(){},color:"green",size:"large"}),Object(p.jsx)(b,{text:"Stop",className:e,onClick:function(){},color:"red",size:"large"})]})}}]),n}(c.Component)),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.text,c=e.className,a=e.onChange,r=t||"text",o=c||"default-input";return Object(p.jsx)("div",{children:Object(p.jsx)("input",{placeholder:n,type:r,className:o,onChange:a})})}}]),n}(c.Component),f=n(6),m=n.n(f),x=(n(23),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e="",t="",n=function(e){var t=e.onChange,n=e.text,c=e.type;return Object(p.jsx)(O,{text:n,type:c,onChange:function(e){return t(e.target.value)}})},c=n({onChange:function(t){e=t},text:"username",type:"text"}),a=n({onChange:function(e){t=e},text:"password",type:"password"});return Object(p.jsxs)(j,{backgroundColor:"blue",children:[c,a,Object(p.jsx)(b,{text:"Login",type:"button",className:"login-button",onClick:function(){""!==e&&""!==t?m()("Good job!","Well, let's pretend for a minute that you have been logged in!","success"):m()({title:"Invalid Login.",text:"Please complete the login form and try again.",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?m()("Please try again!",{icon:"success"}):m()("Thanks!")}))},color:"green",size:"large"})]})}}]),n}(c.Component)),v=n(12),g=(n(24),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.pages,n=e.index,c=e.width,a=e.offset,r=c?"".concat(c,"px"):"auto",o=parseInt(t),s=Object(v.a)(Array(o).keys()),i=a?parseInt(a):2,l="pager-button",u=function(e){var t=e.onClick,n=e.current,c=e.widthPx,a=e.btClass,r=e.text,o=e.disabled;return Object(p.jsx)(b,{onClick:function(e){return t(n)},index:n,width:c,disabled:o,className:a,text:r||n})},j=function(e){console.log("onclick called from parent handler!")},d=function(){var e=!1;return s.map((function(t){var c=t+1,a=n-c,o=a<0?-1*a:a,p=t===parseInt(n)?"pager-focused-button":l;return o<=i||c===s.length?u({onClick:function(e){console.log("button clicked from pager.js ".concat(e))},current:c,widthPx:r,btClass:p,disabled:"off"}):e?null:(e=!0,u({onClick:function(e){console.log("collupsed button clicked from pager.js ".concat(e))},current:c,widthPx:r,btClass:p,disabled:"on",text:"..."}))}))};return Object(p.jsx)("div",{className:"pager-wraper",children:function(e){var t=d();return Object(p.jsxs)("div",{className:"pager-button-wraper",children:[Object(p.jsx)(b,{width:r,className:l,onClick:j,text:"",icon:"Left"}),t,Object(p.jsx)(b,{width:r,className:l,onClick:j,text:"",icon:"Right"})]})}()})}}]),n}(c.Component)),C=(n(25),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.components,t=[],n=e?e.map((function(e){var n=1e3*Math.random();return t.push(n),Object(p.jsxs)("div",{className:"radio-button",children:[Object(p.jsx)("input",{onClick:function(e){return function(e){t.forEach((function(e){document.getElementById(e).parentElement.style=""})),e.parentElement.style="background: #1193ff;color: white;"}(e.target)},type:"radio",name:"sizeBy",value:e,id:n,checked:"checked"}),Object(p.jsx)("h4",{children:e})]})})):Object(p.jsx)("div",{children:"Nothing to render, please add components."});return Object(p.jsx)("div",{className:"radio-button-wraper",children:n})}}]),n}(c.Component)),y=(n(26),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"App-component",children:[Object(p.jsx)("header",{className:"App-header",children:"Media Buttons Component (Example)"}),Object(p.jsx)("div",{className:"App-content",children:Object(p.jsx)(h,{panelClassName:"default-panel-wraper"})})]}),Object(p.jsxs)("div",{className:"App-component App-green-bg",children:[Object(p.jsx)("header",{className:"App-header",children:"Login form component (TODO)"}),Object(p.jsx)("div",{className:"App-content",children:Object(p.jsx)(x,{})})]}),Object(p.jsxs)("div",{className:"App-component",children:[Object(p.jsx)("header",{className:"App-header",children:"Pager component (TODO)"}),Object(p.jsx)("div",{className:"App-content",children:Object(p.jsx)(g,{pages:16,offset:4,index:1})})]}),Object(p.jsxs)("div",{className:"App-component",children:[Object(p.jsx)("header",{className:"App-header",children:"Radio Buttons component (TODO)"}),Object(p.jsx)("div",{className:"App-content",children:Object(p.jsx)(C,{components:["Apple","Pear","Orange"]})})]})]})}}]),n}(c.Component));o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.c61b178c.chunk.js.map