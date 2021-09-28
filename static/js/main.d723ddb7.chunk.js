(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(15),l=c.n(s),a=(c(22),c(7)),i=c(2),j=(c(23),c(0)),o=function(){return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("h3",{className:"logo",children:"Dojo-Blog"}),Object(j.jsxs)("div",{className:"navbar__links",children:[Object(j.jsx)(a.b,{to:"/",className:"navbar__link",children:"Home"}),Object(j.jsx)(a.b,{to:"/create",className:"navbar__link",children:"Create Blog"})]})]})},b=function(e){var t=e.blogs,c=e.title;return Object(j.jsxs)("div",{className:"blog-list",children:[Object(j.jsx)("h2",{children:c}),t.map((function(e){return Object(j.jsx)("div",{className:"blog-preview",children:Object(j.jsxs)(a.b,{to:"/blogs/".concat(e.id),children:[Object(j.jsx)("h4",{className:"blog__heading",children:e.title}),Object(j.jsxs)("p",{className:"blog__author",children:["Written by ",e.auther]})]})},e.id)}))]})},d=c(8),h=function(e){var t=Object(n.useState)(null),c=Object(d.a)(t,2),r=c[0],s=c[1],l=Object(n.useState)(!0),a=Object(d.a)(l,2),i=a[0],j=a[1],o=Object(n.useState)(null),b=Object(d.a)(o,2),h=b[0],u=b[1];return Object(n.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could'nt able to fetch data from server!");return e.json()})).then((function(e){s(e),j(!1)})).catch((function(e){"AbortError"===e.name?console.log("Fatch aborted"):(u(e.message),j(!1))}))}),2e3),function(){return t.abort()}}),[e]),{data:r,isPending:i,error:h}},u=function(){var e=h("http://localhost:8080/blogs"),t=e.data,c=e.isPending,n=e.error;return Object(j.jsxs)("div",{className:"home",children:[n&&Object(j.jsx)("p",{children:n}),c&&Object(j.jsx)("div",{children:"Loading..."}),t&&Object(j.jsx)(b,{blogs:t,title:"All Blogs"})]})},O=(c(30),function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),l=Object(d.a)(s,2),a=l[0],o=l[1],b=Object(n.useState)("bilal"),h=Object(d.a)(b,2),u=h[0],O=h[1],x=Object(n.useState)(!1),g=Object(d.a)(x,2),f=g[0],p=g[1],v=Object(i.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Add a new Blog"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:a,author:u};p(!0),fetch("http://localhost:8080/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){p(!1),v.push("/")})),console.log("Blog create sucessfully")},children:[Object(j.jsx)("label",{children:"Blog title:"}),Object(j.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("label",{children:"body:"}),Object(j.jsx)("textarea",{required:!0,value:a,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("label",{children:"Select author:"}),Object(j.jsxs)("select",{value:u,onChange:function(e){return O(e.target.value)},children:[Object(j.jsx)("option",{value:"mario",children:"Mario"}),Object(j.jsx)("option",{value:"bilal",children:"Bilal"})]}),!f&&Object(j.jsx)("button",{children:"Add Blog"}),f&&Object(j.jsx)("button",{disabled:!0,children:"Adding Blog..."})]}),Object(j.jsx)("p",{children:c}),Object(j.jsx)("p",{children:a}),Object(j.jsx)("p",{children:u})]})}),x=function(){var e=Object(i.g)().id,t=h("http://localhost:8080/blogs/"+e),c=t.data,n=t.error,r=t.isPending,s=Object(i.f)();return Object(j.jsxs)("article",{children:[r&&Object(j.jsx)("p",{children:"Loading..."}),c&&Object(j.jsx)("h3",{children:c.title}),c&&Object(j.jsxs)("p",{children:["written by ",c.auther]}),c&&Object(j.jsx)("p",{children:c.body}),n&&Object(j.jsx)("p",{children:"Failed to fatch data form server!"}),Object(j.jsx)("button",{onClick:function(){fetch("http://localhost:8080/blogs/"+c.id,{method:"DELETE"}).then((function(){s.push("/")}))},children:"Delete"})]})},g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Sorry"}),Object(j.jsx)("p",{children:"Page not found"}),Object(j.jsx)(a.b,{to:"/",children:"Go back to Homepage"})]})};var f=function(){return Object(j.jsx)(a.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsx)(u,{})}),Object(j.jsx)(i.a,{path:"/create",children:Object(j.jsx)(O,{})}),Object(j.jsx)(i.a,{path:"/blogs/:id",children:Object(j.jsx)(x,{})}),Object(j.jsx)(i.a,{path:"*",children:Object(j.jsx)(g,{})})]})})]})})};l.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d723ddb7.chunk.js.map