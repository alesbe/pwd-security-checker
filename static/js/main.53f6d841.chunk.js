(this.webpackJsonppwd_security_checker=this.webpackJsonppwd_security_checker||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(7),i=c.n(r),a=(c(12),c(2)),o=(c(13),c(4)),b="#ffffff",l="#f54242",d="#f59642",u="#f5e042",j="#ddf542",f="#51f542",h="#ffffff",O="#ffffff",p="#f5abad",v="#f5ceab",x="#f5ecab",m="#ebf5ab",k="#b1f5ab",g="\u200c\u200c ",w="Invalid character",y="Unsecure",C="Weak",E="Poor",N="Good",S="Robust",D={true:"password",false:"text"},I=Object(o.a)("abcdefghijklmnopqrstuvwxyz"),B=Object(o.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),T=Object(o.a)("1234567890"),U=Object(o.a)("@.-_"),_=I.concat(B,T,U),G=(c(14),c(0)),M=function(e){var t=e.inputEl,c=e.setBgColorEnabled,s=e.setBgColor,r=e.setVisibility,i=e.setInfoDivEnabled,o=Object(n.useState)(!1),b=Object(a.a)(o,2),l=b[0],d=b[1];return Object(G.jsx)("div",{id:"wrapper-menu",children:l?Object(G.jsxs)("div",{className:"side-menu",children:[Object(G.jsx)("a",{class:"menu-button",onClick:function(){return d((function(e){return!e}))},children:"X"}),Object(G.jsx)("br",{}),Object(G.jsx)("a",{className:"side-menu-item",onClick:function(){c((function(e){return!e})),d((function(e){return!e})),s(h),t.current.focus()},children:"Toggle background color"}),Object(G.jsx)("a",{className:"side-menu-item",onClick:function(){r((function(e){return!e}))},children:"Toggle password visibility"}),Object(G.jsx)("a",{className:"side-menu-item",onClick:function(){i((function(e){return!e}))},children:"How to improve my password?"})]}):Object(G.jsx)("a",{class:"menu-button",onClick:function(){return d((function(e){return!e}))},children:"Menu"})})},P=(c(16),function(e){var t=e.infoDivEnabled,c=e.setInfoDivEnabled;return Object(G.jsxs)("div",{id:"info-div",style:t?{display:"block"}:{display:"none"},children:[Object(G.jsx)("div",{id:"info-div-top",children:Object(G.jsx)("a",{class:"menu-button",onClick:function(){return c(!1)},children:"X"})}),Object(G.jsxs)("div",{id:"info-div-text",children:[Object(G.jsx)("p",{children:Object(G.jsx)("b",{children:Object(G.jsx)("u",{children:"How to improve your password?"})})}),Object(G.jsx)("br",{}),Object(G.jsx)("a",{children:"\xb7 Use more than 8 characters"}),Object(G.jsx)("div",{id:"separator"}),Object(G.jsx)("a",{children:"\xb7 Use lowercase, uppercase, numbers and special characters"}),Object(G.jsx)("div",{id:"separator"}),Object(G.jsx)("a",{children:"\xb7 Don't use personal info, like dates, names or hobbies."}),Object(G.jsx)("div",{id:"separator"}),Object(G.jsx)("a",{children:"\xb7 Don't use the same password on every website."}),Object(G.jsx)("div",{id:"separator"}),Object(G.jsx)("a",{children:"\xb7 Try not to use predictable passwords (1234, iloveyou, hello123...)"})]})]})});var R=function(){var e=Object(n.useState)(b),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(h),i=Object(a.a)(r,2),o=i[0],R=i[1],H=Object(n.useState)(g),J=Object(a.a)(H,2),V=J[0],W=J[1],X=Object(n.useState)(D.invisible),A=Object(a.a)(X,2),L=A[0],q=A[1],z=Object(n.useState)(!0),F=Object(a.a)(z,2),K=F[0],Q=F[1],Y=Object(n.useState)(!1),Z=Object(a.a)(Y,2),$=Z[0],ee=Z[1];Object(n.useEffect)((function(){document.title="Invalid character"===V||"Unsecure"===V||"Weak"===V||"Poor"===V||"Good"===V||"Robust"===V?String(V):"Password Checker"}),[V]);var te=Object(n.useRef)(null),ce=function(e){!function(e,t,c,n,s){var r=0;if(""===e)return t(b),c(g),void(s&&n(h));for(var i=0;i<e.length;i++)if(!_.includes(e[i]))return t(b),c(w),void(s&&n(O));if(e.length<8)return t(l),c(y),void(s&&n(p));for(var a=0;a<I.length;a++)if(e.includes(I[a])){r++;break}for(var o=0;o<B.length;o++)if(e.includes(B[o])){r++;break}for(var D=0;D<T.length;D++)if(e.includes(T[D])){r++;break}for(var G=0;G<U.length;G++)if(e.includes(U[G])){r++;break}switch(r){case 1:t(d),c(C),s&&n(v);break;case 2:t(u),c(E),s&&n(x);break;case 3:t(j),c(N),s&&n(m);break;case 4:t(f),c(S),s&&n(k)}}(e,s,W,R,K)};return Object(G.jsxs)("div",{className:"wrapper",children:[Object(G.jsx)(M,{inputEl:te,setBgColorEnabled:Q,setBgColor:R,setVisibility:q,setInfoDivEnabled:ee}),Object(G.jsx)(P,{infoDivEnabled:$,setInfoDivEnabled:ee}),Object(G.jsxs)("div",{className:"App",style:{backgroundColor:o,transition:"background-color 0.3s ease-in-out"},children:[Object(G.jsx)("h2",{className:"h2-title",children:"Type a password to check"}),Object(G.jsx)("input",{className:"input",type:L?"text":"password",style:{backgroundColor:c,transition:"background-color 0.3s ease-in-out"},maxLength:"20",ref:te,onChange:function(e){return ce(e.target.value)}}),Object(G.jsx)("br",{}),Object(G.jsx)("p",{className:"p-text",children:V}),Object(G.jsx)("footer",{className:"footer",children:Object(G.jsxs)("p",{className:"footer-text",children:["Made with <3 by alesbe."," ",Object(G.jsx)("a",{href:"https://github.com/alesbe/pwd-security-checker",children:"Github"})]})})]})]})};i.a.render(Object(G.jsx)(s.a.StrictMode,{children:Object(G.jsx)(R,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.53f6d841.chunk.js.map