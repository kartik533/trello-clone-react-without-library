(this["webpackJsonptrello-clone-react"]=this["webpackJsonptrello-clone-react"]||[]).push([[0],[,,,function(t,e,n){t.exports={App:"App_App__15LM-","todo-section":"App_todo-section__6upaE","add-list-button":"App_add-list-button__1Sh6D","list-builder":"App_list-builder__2CeYx","list-button-section":"App_list-button-section__1JEWH"}},,,,function(t,e,n){t.exports={container:"CardsContainer_container__1ZAOI","card-section":"CardsContainer_card-section__11cNO"}},function(t,e,n){t.exports={"card-builder":"CardBuilder_card-builder__1lSjM","button-section":"CardBuilder_button-section__2bqP7"}},,,function(t,e,n){t.exports={card:"Card_card__2KfVW"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),d=(n(17),n(2)),o=(n(18),n(12)),s=n(7),l=n.n(s),u=n(11),b=n.n(u),j=n(0),p=function(t){var e=t.cardId,n=t.label,a=t.parentId;return Object(j.jsx)("div",{className:b.a.card,draggable:!0,onDragStart:function(t){return function(t){t.stopPropagation(),console.log("drag started");var c={cardId:e,label:n,parentId:a};t.dataTransfer.setData("id",JSON.stringify(c))}(t)},children:n})},O=n(21),f=n(8),h=n.n(f),v=function(t){var e=t.parentId,n=t.addCard,c=t.hideForm,r=Object(a.useState)(""),i=Object(d.a)(r,2),o=i[0],s=i[1];return Object(j.jsxs)("div",{className:h.a["card-builder"],children:[Object(j.jsx)("section",{children:Object(j.jsx)("input",{value:o,onChange:function(t){var e;0!==(e=t.target.value).trim().length?s(e):s("")},placeholder:"Enter the title of this card..."})}),Object(j.jsxs)("div",{className:h.a["button-section"],children:[Object(j.jsx)("button",{disabled:""===o,onClick:function(){n({id:Object(O.a)(),label:o,parentId:e}),s("")},children:"Add Card"}),Object(j.jsx)("button",{onClick:c,children:"X"})]})]})},x=function(t){var e=t.id,n=t.name,c=Object(a.useState)([]),r=Object(d.a)(c,2),i=r[0],s=r[1],u=Object(a.useState)(!1),b=Object(d.a)(u,2),O=b[0],f=b[1],h=Object(a.useRef)(!1);return h.current||(document.addEventListener("dropSuccess",(function(t){if(console.log("triggering in ",n),e!==t.detail.newParentId){var a=i.filter((function(e){return e.id!==t.detail.cardId}));s(a)}})),h.current=!0),Object(j.jsxs)("div",{className:l.a.container,onDrop:function(t){return function(t){t.preventDefault(),t.stopPropagation();var a=JSON.parse(t.dataTransfer.getData("id")),c={id:a.cardId,label:a.label,parentId:e};s((function(t){return[].concat(Object(o.a)(t),[c])}));var r=new CustomEvent("dropSuccess",{detail:{cardId:a.cardId,newParentId:e}});document.dispatchEvent(r),console.log("dropped to",n)}(t)},onDragOver:function(t){return t.preventDefault()},children:[Object(j.jsx)("h3",{children:n}),Object(j.jsx)("section",{className:l.a["card-section"],children:i.map((function(t,n){return Object(j.jsx)(p,{parentId:e,cardId:t.id,label:t.label},n)}))}),O?Object(j.jsx)(v,{addCard:function(t){var e=i;e.push(t),s(e),f(!1)},parentId:e,hideForm:function(){return f(!1)}}):Object(j.jsx)("button",{onClick:function(){return f(!0)},children:"+ Add a Card"})]})},_=n(3),m=n.n(_),g=(Object(O.a)(),Object(O.a)(),Object(O.a)(),Object(O.a)(),[{id:Object(O.a)(),name:"Todo"},{id:Object(O.a)(),name:"In Progress"}]);var C=function(){var t=Object(a.useState)(g),e=Object(d.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),o=i[0],s=i[1],l=Object(a.useState)(!1),u=Object(d.a)(l,2),b=u[0],p=u[1];return Object(j.jsxs)("div",{className:m.a.App,children:[Object(j.jsx)("h2",{children:"Daily Todo"}),Object(j.jsxs)("div",{className:m.a["todo-section"],children:[n.map((function(t,e){return Object(j.jsx)(x,{id:t.id,name:t.name},e)})),b?Object(j.jsxs)("div",{className:m.a["list-builder"],children:[Object(j.jsx)("input",{value:o,onChange:function(t){return s(t.target.value)},placeholder:"Enter the title of this list..."}),Object(j.jsxs)("div",{className:m.a["list-button-section"],children:[Object(j.jsx)("button",{disabled:""===o,onClick:function(){var t=n;t.push({id:Object(O.a)(),name:o}),c(t),p(!1)},children:"Add List"}),Object(j.jsx)("button",{onClick:function(){return p(!1)},children:"X"})]})]}):Object(j.jsx)("button",{className:m.a["add-list-button"],onClick:function(){return p(!0)},children:"+ Add another List"})]})]})};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.aa99b34d.chunk.js.map