(this.webpackJsonppwd_security_checker=this.webpackJsonppwd_security_checker||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(7),s=c.n(a),o=(c(12),c(2)),i=(c(13),c(4)),u="#ffffff",b="#f54242",l="#f59642",f="#f5e042",j="#ddf542",d="#51f542",h="#ffffff",O="#f5abad",p="#f5ceab",k="#f5ecab",g="#ebf5ab",x="#b1f5ab",m="\u200c\u200c ",v="Unsecure",w="Weak",C="Poor",y="Good",N="Robust",S="password",E=Object(i.a)("abcdefghijklmnopqrstuvwxyz"),B=Object(i.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),_=Object(i.a)("1234567890"),G=Object(i.a)("@.-_"),M=(c(14),c(0)),P=function(e){var t=e.inputEl,c=e.setBgColorEnabled,r=e.setBgColor,a=Object(n.useState)(!1),s=Object(o.a)(a,2),i=s[0],u=s[1];return Object(M.jsx)("div",{id:"wrapper-menu",children:i?Object(M.jsxs)("div",{className:"side-menu",children:[Object(M.jsx)("a",{class:"menu-button",onClick:function(){return u((function(e){return!e}))},children:"X"}),Object(M.jsx)("br",{}),Object(M.jsx)("a",{className:"side-menu-item",onClick:function(){c((function(e){return!e})),u((function(e){return!e})),r(h),t.current.focus()},children:"Toggle background color"})]}):Object(M.jsx)("a",{class:"menu-button",onClick:function(){return u((function(e){return!e}))},children:"Menu"})})};var R=function(){var e=Object(n.useState)(u),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(h),s=Object(o.a)(a,2),i=s[0],R=s[1],I=Object(n.useState)(m),J=Object(o.a)(I,2),T=J[0],U=J[1],W=Object(n.useState)(!0),A=Object(o.a)(W,2),L=A[0],X=A[1];Object(n.useEffect)((function(){document.title="Invalid character"===T||"Unsecure"===T||"Weak"===T||"Poor"===T||"Good"===T||"Robust"===T?String(T):"Password Checker"}),[T]);var q=Object(n.useRef)(null),z=function(e){!function(e,t,c,n,r){var a=0;if(""===e)return t(u),c(m),void(r&&n(h));if(e.length<8)return t(b),c(v),void(r&&n(O));for(var s=0;s<E.length;s++)if(e.includes(E[s])){a++;break}for(var o=0;o<B.length;o++)if(e.includes(B[o])){a++;break}for(var i=0;i<_.length;i++)if(e.includes(_[i])){a++;break}for(var S=0;S<G.length;S++)if(e.includes(G[S])){a++;break}switch(a){case 1:t(l),c(w),r&&n(p);break;case 2:t(f),c(C),r&&n(k);break;case 3:t(j),c(y),r&&n(g);break;case 4:t(d),c(N),r&&n(x)}}(e,r,U,R,L)};return Object(M.jsxs)("div",{className:"wrapper",children:[Object(M.jsx)(P,{inputEl:q,setBgColorEnabled:X,setBgColor:R}),Object(M.jsxs)("div",{className:"App",style:{backgroundColor:i,transition:"background-color 0.3s ease-in-out"},children:[Object(M.jsx)("h2",{className:"h2-title",children:"Type a password to check"}),Object(M.jsx)("input",{className:"input",type:S,style:{backgroundColor:c,transition:"background-color 0.3s ease-in-out"},maxLength:"20",ref:q,onChange:function(e){return z(e.target.value)}}),Object(M.jsx)("br",{}),Object(M.jsx)("p",{className:"p-text",children:T}),Object(M.jsx)("footer",{className:"footer",children:Object(M.jsxs)("p",{className:"footer-text",children:["Made with <3 by alesbe."," ",Object(M.jsx)("a",{href:"https://github.com/alesbe/pwd-security-checker",children:"Github"})]})})]})]})};s.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(R,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ac2bcc81.chunk.js.map