(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"App_container__1MQN3"}},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n.n(a),i=n(10),o=n.n(i),s=(n(17),n(8)),u=n(3),l=n(2),j=n(4),d=n(5),b=n(7),h=n(6),O=function(t){var e=t.children,n=t.title;return Object(c.jsxs)(c.Fragment,{children:[n&&Object(c.jsx)("h2",{children:n}),Object(c.jsx)("section",{children:e})]})},m=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.name,n=t.changeInputForFilter,a=t.changeInput,r=t.value,i=Object(s.a)(e);return i.splice(0,1,i[0].toUpperCase()),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{htmlFor:e,children:i}),Object(c.jsx)("input",{onChange:"filter"===e?n:a,type:"text",id:e,value:r})]})}}]),n}(a.Component),p=function(t){var e=t.text,n=t.deleteContact,a=t.id;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{id:n?a:null,onClick:n?function(){return n(a)}:null,type:"submit",children:e})})},f=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.changeInput=function(e){t.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(u.a)({},e.target.id,e.target.value))}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=this.props.addContact;return Object(c.jsxs)("form",{onSubmit:function(n){return t.setState({name:"",number:""}),e(n,t.state)},children:[Object(c.jsx)(m,{name:"name",changeInput:this.changeInput,value:this.state.name}),Object(c.jsx)(m,{name:"number",changeInput:this.changeInput,value:this.state.number}),Object(c.jsx)(p,{state:this.state,text:"Add contact",addContact:e})]})}}]),n}(a.Component),g=function(t){var e=t.contacts,n=t.filter,a=t.deleteContact;return n.length>0&&(e=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))),Object(c.jsx)("ul",{children:e.map((function(t){return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{children:t.name}),": ",Object(c.jsxs)("span",{children:[t.number," "]}),Object(c.jsx)(p,{deleteContact:a,text:"Delete",id:t.id})]},t.id)}))})},x=n(11),v=n.n(x),C=n(20),y=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeInput=function(e){t.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(u.a)({},e.target.id,e.target.value))}))},t.deleteContact=function(e){t.setState((function(t){return t.contacts.find((function(t,n,c){return t.id===e&&(c.splice(n,1),!0)})),Object(l.a)(Object(l.a)({},t),{},{contacts:Object(s.a)(t.contacts)})}))},t.addContact=function(e,n){console.log(t.state),e.preventDefault(),t.setState((function(t){var e=Object(C.a)(),c=n.name,a=n.number;if(c)return void 0!==t.contacts.find((function(t){return t.name===c}))?void alert("You already add ".concat(c)):Object(l.a)(Object(l.a)({},t),{},{contacts:[].concat(Object(s.a)(t.contacts),[{id:e,name:c,number:a}])})}))},t}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){localStorage.getItem("contacts")&&this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))})}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:v.a.container,children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(f,{addContact:this.addContact}),this.state.contacts.length>0&&Object(c.jsxs)(O,{title:"Contacts",children:[Object(c.jsx)(m,{name:"filter",changeInputForFilter:this.changeInput}),Object(c.jsx)(g,{contacts:this.state.contacts,filter:this.state.filter,deleteContact:this.deleteContact})]})]})}}]),n}(a.Component);o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.449e1f76.chunk.js.map