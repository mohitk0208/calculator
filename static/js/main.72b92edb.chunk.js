(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),u=t.n(r),o=t(4),i=t.n(o),s=(t(10),t(11),t(2)),a=Object(r.createContext)(),l=Object(r.createContext)(),j=function(){return Object(r.useContext)(a)},f=function(){return Object(r.useContext)(l)},b=function(e){var n=e.children,t=Object(r.useState)("15*3"),u=Object(s.a)(t,2),o=u[0],i=u[1];return Object(r.useEffect)((function(){var e=document.querySelector(".expression-container span");e.scrollLeft=e.scrollWidth}),[o]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(a.Provider,{value:o,children:Object(c.jsx)(l.Provider,{value:i,children:n})})})},v=function(e){return"*"!==e&&"/"!==e&&"+"!==e&&"-"!==e&&"%"!==e},O=function(e){return"+"===e||"-"===e?1:"*"===e||"/"===e?2:"%"===e?3:0},x=function(e){if(""===e)return"";var n=function(e){var n;return n=e,console.log(n),n.replace(/\.(?=[*+-/])|\.$/g,".0")}(e);n=(n=n.replace(/^-/,"s")).replace(/(?<=[*/])-/,"s"),console.log(n);for(var t=n.split(/(?=[*/+%-])|(?<=[*/+%-])|(?=s)/),c=0;c<t.length;c++)t[c]=t[c].replace("s","-");console.log(t);var r=function(e){var n=[],t=[];for(e.forEach((function(e){if(v(e))t.push(e);else if(O(e)>O(n[n.length-1]))n.push(e);else{for(;0!==n.length&&O(e)<=O(n[n.length-1]);)t.push(n[n.length-1]),n.pop();n.push(e)}}));0!==n.length;)t.push(n[n.length-1]),n.pop();return t}(t);return String(function(e){var n=[];return e.forEach((function(e){if(v(e))n.push(e);else if("%"===e){var t=Number(n.pop());n.push(t/100)}else{var c=Number(n.pop()),r=Number(n.pop());switch(e){case"+":n.push(r+c);break;case"-":n.push(r-c);break;case"*":n.push(r*c);break;case"/":n.push(r/c)}}})),n.pop()}(r))},h=Object(r.createContext)(),d=Object(r.createContext)(),p=function(){return Object(r.useContext)(h)},g=function(){return Object(r.useContext)(d)},C=function(e){var n=e.children,t=Object(r.useState)("65"),u=Object(s.a)(t,2),o=u[0],i=u[1],a=j();return Object(r.useEffect)((function(){var e=x(a);console.log(e),isNaN(e)?i(""):i(e)}),[a]),Object(r.useEffect)((function(){var e=document.querySelector(".result-container span");e.scrollLeft=e.scrollWidth}),[o]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h.Provider,{value:o,children:Object(c.jsx)(d.Provider,{value:i,children:n})})})},k=(t(12),t(13),t(14),function(){var e=j();return Object(c.jsx)("div",{className:"expression-container",children:Object(c.jsx)("span",{children:e})})}),m=(t(15),function(){var e=p();return Object(c.jsx)("div",{className:"result-container",children:Object(c.jsx)("span",{children:e})})});var N=function(){return Object(c.jsxs)("div",{className:"display-container",children:[Object(c.jsx)(k,{}),Object(c.jsx)(m,{})]})},S=(t(16),function(e){var n=e.value,t=e.onClick,u=e.colored,o=Object(r.useState)(!1),i=Object(s.a)(o,2),a=i[0],l=i[1];return Object(c.jsxs)("div",{className:"keybase",onClick:function(){l(!0),setTimeout((function(){l(!1)}),150),t()},children:[Object(c.jsx)("div",{className:a?"click-cover":""}),Object(c.jsx)("p",{className:u?"blue color":"default",children:n})]})}),y=function(){var e=j(),n=f();return Object(c.jsx)(S,{value:"+",colored:!0,onClick:function(){(function(e){var n=e.length;return""!==e&&"*"!==e[n-1]&&"/"!==e[n-1]&&"-"!==e[n-1]&&"+"!==e[n-1]})(e)&&n((function(e){return e+"+"}))}})},E=function(){var e=j(),n=f();return Object(c.jsx)(S,{value:"<=",onClick:function(){""!==e&&n((function(e){return e.slice(0,e.length-1)}))}})},F=function(){var e=j(),n=p(),t=f(),r=g();return Object(c.jsx)(S,{value:"C",onClick:function(){""!==e&&t(""),""!==n&&r("")}})},P=function(){var e=j(),n=f();return Object(c.jsx)(S,{value:"/",colored:!0,onClick:function(){(function(e){var n=e.length;return""!==e&&"*"!==e[n-1]&&"/"!==e[n-1]&&"+"!==e[n-1]&&"-"!==e[n-1]})(e)&&n((function(e){return e+"/"}))}})},L=function(){var e=p(),n=g(),t=f();return Object(c.jsx)(S,{value:"=",colored:!0,onClick:function(){""===e&&"Infinity"===e||(t(e),n(""))}})},w=function(){var e=j(),n=f();return Object(c.jsx)(S,{value:"*",colored:!0,onClick:function(){(function(e){var n=e.length;return""!==e&&"*"!==e[n-1]&&"/"!==e[n-1]&&"-"!==e[n-1]&&"+"!==e[n-1]})(e)&&n((function(e){return e+"*"}))}})};var I=function(){var e=j(),n=f();return Object(c.jsx)(S,{value:"%",onClick:function(){(function(e){var n=e.length;return""!==e&&"/"!==e[n-1]&&"*"!==e[n-1]&&"-"!==e[n-1]&&"+"!==e[n]})(e)&&n((function(e){return e+"%"}))}})},T=function(){var e=j(),n=f();return Object(c.jsx)(S,{value:"-",colored:!0,onClick:function(){(function(e){var n=e.length;return"+"!==e[n-1]&&"-"!==e[n-1]})(e)&&n((function(e){return e+"-"}))}})},q=(t(17),function(e){var n=e.value,t=j(),r=f();return Object(c.jsx)(S,{value:n,colored:!1,onClick:function(){"."===n?function(e,n){var t=e.length;"%"===e[t-1]||"/"===e[t-1]||"*"===e[t-1]||"-"===e[t-1]||"+"===e[t-1]||""===e?n((function(e){return e+"0."})):n((function(e){return e+"."}))}(t,r):r((function(e){return e+n}))}})}),B=function(){return Object(c.jsxs)("div",{className:"keypad-container",children:[Object(c.jsx)(F,{}),Object(c.jsx)(I,{}),Object(c.jsx)(E,{}),Object(c.jsx)(P,{}),Object(c.jsx)(q,{value:"7"}),Object(c.jsx)(q,{value:"8"}),Object(c.jsx)(q,{value:"9"}),Object(c.jsx)(w,{}),Object(c.jsx)(q,{value:"4"}),Object(c.jsx)(q,{value:"5"}),Object(c.jsx)(q,{value:"6"}),Object(c.jsx)(T,{}),Object(c.jsx)(q,{value:"1"}),Object(c.jsx)(q,{value:"2"}),Object(c.jsx)(q,{value:"3"}),Object(c.jsx)(y,{}),Object(c.jsx)(q,{value:"00"}),Object(c.jsx)(q,{value:"0"}),Object(c.jsx)(q,{value:"."}),Object(c.jsx)(L,{})]})};var J=function(){return Object(c.jsx)("div",{className:"calculator-container",children:Object(c.jsx)(b,{children:Object(c.jsxs)(C,{children:[Object(c.jsx)(N,{}),Object(c.jsx)(B,{})]})})})};var W=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(J,{})})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,u=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),u(e),o(e)}))};i.a.render(Object(c.jsx)(u.a.StrictMode,{children:Object(c.jsx)(W,{})}),document.getElementById("root")),A()}],[[18,1,2]]]);
//# sourceMappingURL=main.72b92edb.chunk.js.map