"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[116],{8116:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var t,o,i,a,s,c,l,d,u=r(9434),p=r(3634),x=r(8348),f=r(9439),m=r(2791),h=r(1820),b=r(3380),g=r(8789),j=r(7693),C=r(1461),Z=r(7521),v=r(2392),k=r(8208),y=r(9140),P=r(4653),O=r(4224),z=r(184),I=function(n){var e=n.isOpen,r=n.onClose,t=n.getContact,o=(0,m.useState)(""),i=(0,f.Z)(o,2),a=i[0],s=i[1],c=(0,m.useState)(""),l=(0,f.Z)(c,2),d=l[0],u=l[1],p=function(n){var e=n.target,r=e.name,t=e.value;switch(r){case"name":s(t);break;case"number":u(t);break;default:return}},x=function(){s(""),u("")};return(0,z.jsxs)(h.u_,{isOpen:e,onClose:r,children:[(0,z.jsx)(b.Z,{}),(0,z.jsxs)(g.h,{children:[(0,z.jsx)(j.x,{children:"Create your account"}),(0,z.jsx)(C.o,{}),(0,z.jsxs)(Z.f,{pb:6,children:[(0,z.jsxs)(v.NI,{children:[(0,z.jsx)(k.l,{children:"Name"}),(0,z.jsx)(y.I,{placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:a,onChange:p})]}),(0,z.jsxs)(v.NI,{mt:4,children:[(0,z.jsx)(k.l,{children:"Number"}),(0,z.jsx)(y.I,{placeholder:"Number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:p})]})]}),(0,z.jsxs)(P.m,{children:[(0,z.jsx)(O.z,{colorScheme:"blue",mr:3,onClick:function(n){n.preventDefault(),t(n,{name:a,number:d}),x()},children:"Save"}),(0,z.jsx)(O.z,{onClick:r,children:"Cancel"})]})]})]})},N=r(168),A=r(4313),q=(A.ZP.form(t||(t=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-bottom: 12px;\n"]))),A.ZP.label(o||(o=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n"]))),A.ZP.input(i||(i=(0,N.Z)(["\n  flex-grow: 1;\n  padding: 8px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  font: inherit;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  resize: none;\n"]))),A.ZP.button(a||(a=(0,N.Z)(["\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n  padding: 10px 10px;\n  border-radius: 4px;\n  background-color: #3f51b5;\n  color: #fff;\n"])))),w=function(){var n=(0,u.I0)(),e=(0,x.q)(),r=e.isOpen,t=e.onOpen,o=e.onClose;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(q,{type:"button",onClick:t,children:"Add contact"}),(0,z.jsx)(I,{isOpen:r,onClose:o,getContact:function(e,r){e.preventDefault(),n((0,p.uK)(r)),o()}})]})},D=function(n){return n.contacts.loading},F=function(n){return n.contacts.items},S=A.ZP.div(s||(s=(0,N.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px;\n  border: 1px solid #2a2a2a;\n  border-radius: 4px;\n"]))),E=A.ZP.p(c||(c=(0,N.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),K=A.ZP.button(l||(l=(0,N.Z)(["\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n  margin-left: auto;\n  border-radius: 4px;\n  padding: 8px 12px;\n  background-color: #3f51b5;\n  color: #fff;\n"]))),B=function(n){var e=n.contact,r=(0,u.I0)(),t=(0,x.q)(),o=t.isOpen,i=t.onOpen,a=t.onClose;return(0,z.jsxs)(S,{children:[(0,z.jsxs)(E,{children:[e.name,": ",e.number]}),(0,z.jsx)(K,{onClick:i,children:"Edit"}),(0,z.jsx)(K,{type:"button",onClick:function(){return r((0,p.GK)(e.id))},children:"Delete"}),(0,z.jsx)(I,{isOpen:o,onClose:a,getContact:function(n,t){n.preventDefault(),r((0,p.Tk)(e.id)),a()}})]})},G=A.ZP.ul(d||(d=(0,N.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 12px;\n"]))),J=function(){var n=(0,u.v9)(F);return(0,z.jsx)(G,{children:n.map((function(n){return(0,z.jsx)("li",{children:(0,z.jsx)(B,{contact:n})},n.id)}))})},M=function(){var n=(0,u.I0)(),e=(0,u.v9)(D);return(0,m.useEffect)((function(){n((0,p.yF)())}),[n]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(w,{}),(0,z.jsx)("div",{children:e&&"Request in progress..."}),(0,z.jsx)(J,{})]})}}}]);
//# sourceMappingURL=116.3e49a8c7.chunk.js.map