(this["webpackJsonpsuper-form"]=this["webpackJsonpsuper-form"]||[]).push([[0],{29:function(e,t,c){},56:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),j=c(8),a=c.n(j),n=(c(29),c(4)),m=c(3),l=c(9),d=c.n(l),r=c(23),b=new(c.n(r).a)(d.a);b.onGet("/change1").reply(200,{temperature:[{item:"item-9",temperature:27},{item:"item-10",temperature:31},{item:"item-11",temperature:26},{item:"item-12",temperature:26},{item:"item-13",temperature:28},{item:"item-14",temperature:0}],comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugit, ipsum quisquam harum explicabo doloribus reprehenderit modi asperiores quaerat sit dignissimos accusantium nesciunt maiores quasi obcaecati aliquam vitae quae molestiae!",shipment:[{input1:[{item:"item-6",data:"\u0442\u043e\u043b\u0443\u043e\u043b",key:"product"},{item:"item-7",data:"1203716 FAVU",key:"number"},{item:"item-8",data:"Lorem",key:"name"},{item:"item-9",data:"1",key:"weight"}]}]}),b.onGet("/change2").reply(200,{temperature:[{item:"item-9",temperature:47},{item:"item-10",temperature:31},{item:"item-11",temperature:36},{item:"item-12",temperature:26},{item:"item-13",temperature:48},{item:"item-14",temperature:10}],comment:"Lorem ipsum dolor ",shipment:[{input1:[{item:"item-6",data:"\u0442\u043e\u043b\u0443\u043e\u043b",key:"product"},{item:"item-7",data:"FAVU 1203716",key:"number"},{item:"item-8",data:"",key:"name"},{item:"item-9",data:"7",key:"weight"}]}]});var O=function(e){return{type:"SET_DATA",payload:e}},x=(c(56),c(0));function u(){var e=Object(m.b)(),t=Object(i.useState)("change1"),c=Object(n.a)(t,2),s=c[0],j=c[1],a=function(t){t.preventDefault(),e(function(e){return function(t){d.a.get("/".concat(e)).then((function(e){t(O(e.data))}))}}(s))};return Object(x.jsx)("div",{className:"form__header",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{className:"",children:"\u0421\u043c\u0435\u043d\u043d\u044b\u0439 \u0440\u0430\u043f\u043e\u0440\u0442. \u0426\u041f\u0425\u041f \u21161."}),Object(x.jsx)("input",{className:"form__header_input",type:"date"}),Object(x.jsxs)("select",{className:"form__header_input",value:s||"change1",onChange:function(e){return function(e){j(e.target.value)}(e)},children:[Object(x.jsx)("option",{disabled:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043c\u0435\u043d\u0443:"}),Object(x.jsx)("option",{value:"change1",children:"\u0421\u043c\u0435\u043d\u0430 1"}),Object(x.jsx)("option",{value:"change2",children:"\u0421\u043c\u0435\u043d\u0430 2"})]}),Object(x.jsx)("button",{onClick:function(e){a(e)},className:"form__header_btn",children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"})]})})}c(58);function h(){var e=Object(i.useState)(""),t=Object(n.a)(e,2),c=(t[0],t[1]),s=Object(m.c)((function(e){var t=e.data;if(null!==t.items)return t})),j=s.items;return Object(x.jsx)("div",{className:"form__content",children:Object(x.jsxs)("div",{className:"form__content_grid",children:[Object(x.jsx)("div",{className:"item-0",children:Object(x.jsx)("h2",{children:"\u041f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0435 \u043e\u0445\u043b\u0430\u0436\u0434\u0435\u043d\u0438\u0435\xa0\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u044b\u0439\xa0\u0437\u0430\u043b"})}),Object(x.jsx)("div",{className:"item-1",children:"\u041f\u0413\u0425"}),Object(x.jsx)("div",{className:"item-2",children:Object(x.jsx)("p",{children:"1"})}),Object(x.jsx)("div",{className:"item-3",children:"2"}),Object(x.jsx)("div",{className:"item-4",children:"3"}),Object(x.jsx)("div",{className:"item-5",children:"4"}),Object(x.jsx)("div",{className:"item-6",children:"5"}),Object(x.jsx)("div",{className:"item-7",children:"6"}),Object(x.jsx)("div",{className:"item-8",children:Object(x.jsx)("p",{children:"t \u0433\u0430\u0437\u0430 \u043f\u043e\u0441\u043b\u0435 \u041f\u0413\u0425,\xa0\xb0\u0421"})}),void 0!==j.temperature?j.temperature.map((function(e){return Object(x.jsx)("div",{className:e.item,children:Object(x.jsx)("input",{value:e.temperature||0,onChange:function(t){e.temperature=+t.target.value,c(t.target.value)}})},e.item)})):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"item-9",children:[" ",Object(x.jsx)("input",{})," "]}),Object(x.jsxs)("div",{className:"item-10",children:[" ",Object(x.jsx)("input",{})," "]}),Object(x.jsxs)("div",{className:"item-11",children:[" ",Object(x.jsx)("input",{})," "]}),Object(x.jsxs)("div",{className:"item-12",children:[" ",Object(x.jsx)("input",{})," "]}),Object(x.jsxs)("div",{className:"item-13",children:[" ",Object(x.jsx)("input",{})," "]}),Object(x.jsxs)("div",{className:"item-14",children:[" ",Object(x.jsx)("input",{})," "]})]}),Object(x.jsx)("div",{className:"item-15",children:Object(x.jsx)("p",{children:"\u041f\u0413\u0425 \u0440\u0430\u0441\u0445\u043e\u0434 \u0432\u043e\u0434\u044b \u043d\u0430 \u043f\u0435\u0440\u0432\u0438\u0447. \u043e\u0445\u043b\xa0-\xa0\u0435,\u043c/\u0447"})}),Object(x.jsx)("div",{className:"item-16",children:Object(x.jsxs)("p",{children:[Object(x.jsx)("input",{})," / ",Object(x.jsx)("input",{})]})}),Object(x.jsx)("div",{className:"item-17",children:Object(x.jsx)("p",{children:"\u041f\u0413\u0425 t \u0432\u043e\u0434\u044b \u043d\u0430 \u043f\u0435\u0440\u0432\u0438\u0447. \u043e\u0445\u043b-\u0435, \xb0C"})}),Object(x.jsx)("div",{className:"item-18",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-19",children:Object(x.jsx)("p",{children:"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0433\u0430\u0437\u0430 \u043f\u043e\u0441\u043b\u0435 \u044d\u043a\u0441\u0433\u0430\u0443\u0441\u0442\u0435\u0440\u043e\u0432, \u043c\u043c.\u0432\u043e\u0434.\u0441\u0442"})}),Object(x.jsx)("div",{className:"item-20",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-21",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-22",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-23",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-24",children:Object(x.jsx)("p",{children:"\u041f\u0413\u0425 t \u0432\u043e\u0434\u044b \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0432\u0438\u0447. \u043e\u0445\u043b\xa0-\xa0\u044f, \xb0C"})}),Object(x.jsx)("div",{className:"item-25",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-26",children:Object(x.jsx)("p",{children:"\u0421\u043e\u043f\u0440\u043e\u0442\u0438\u0432\u043b\u0435\u043d\u0438\u0435 \u041f\u0413\u0425"})}),Object(x.jsx)("div",{className:"item-27",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-28",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-29",children:Object(x.jsx)("p",{children:"\u0421\u043e\u043f\u0440\u043e\u0442\u0438\u0432\u043b\u0435\u043d\u0438\u0435 \u0433\u0430\u0437\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u0430"})}),Object(x.jsx)("div",{className:"item-30",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-31",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-32",children:"\xa0"}),Object(x.jsx)("div",{className:"item-33",children:"\xa0"})]})})}c(59);function p(){var e=Object(i.useState)(""),t=Object(n.a)(e,2),c=(t[0],t[1]),s=Object(i.useState)(""),j=Object(n.a)(s,2),a=(j[0],j[1]),l=Object(m.c)((function(e){var t=e.data;if(null!==t.items)return t})),d=l.items;return Object(x.jsx)("div",{className:"form__info",children:Object(x.jsxs)("div",{className:"form__info_grid",children:[Object(x.jsx)("div",{className:"item-0",children:Object(x.jsx)("h2",{children:"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})}),Object(x.jsx)("div",{className:"item-1",children:Object(x.jsx)("p",{children:"\u041e\u0442\u0433\u0440\u0443\u0437\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"})}),Object(x.jsx)("div",{className:"item-2",children:Object(x.jsx)("p",{children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442"})}),Object(x.jsx)("div",{className:"item-3",children:Object(x.jsx)("p",{children:"\u2116 \u0446\u0438\u0441\u0442\u0435\u0440\u043d/\u0436.\u0434. \u0432\u0430\u0433."})}),Object(x.jsx)("div",{className:"item-4",children:Object(x.jsx)("p",{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"})}),Object(x.jsx)("div",{className:"item-5",children:Object(x.jsx)("p",{children:"\u0428\u0442/\u0422\u043e\u043d\u043d\u044b"})}),void 0!==d.shipment?d.shipment[0].input1.map((function(e){return console.log(e.key),Object(x.jsx)("div",{className:e.item,children:Object(x.jsx)("input",{value:e.data||0,onChange:function(t){e.data=t.target.value,a(t.target.value)}})},e.key)})):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"item-6",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-7",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-8",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-9",children:Object(x.jsx)("input",{})})]}),Object(x.jsx)("div",{className:"item-10",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-11",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-12",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-13",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-14",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-15",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-16",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-17",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-18",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-19",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-20",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-21",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-22",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-23",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-24",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-25",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-26",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-27",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-28",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-29",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-30",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-31",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-32",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-33",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-34",children:Object(x.jsx)("p",{children:"\u0412\u0440\u0435\u043c\u044f \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0446\u0435\u0445\u0430 \u0441\u043b\u0443\u0436\u0431\u0430\u043c\u0438 \u0423\u0422"})}),Object(x.jsx)("div",{className:"item-35",children:Object(x.jsx)("p",{children:"\u0423\u0420\u0421\u0411"})}),Object(x.jsx)("div",{className:"item-36",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-37",children:Object(x.jsx)("p",{children:"\u0425\u0438\u043c\u0438\u044f"})}),Object(x.jsx)("div",{className:"item-38",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-39",children:Object(x.jsx)("p",{children:"\u0417\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f \u043f\u043e \u0440\u0430\u0431\u043e\u0442\u0435 \u0446\u0435\u0445\u0430"})}),Object(x.jsx)("div",{className:"item-40",children:Object(x.jsx)("textarea",{onChange:function(e){d.comment=e.target.value,c(e.target.value)},value:d.comment||""})})]})})}c(60);function v(){return Object(x.jsxs)("div",{className:"form__contacts",children:[Object(x.jsx)("div",{className:"item-0",children:Object(x.jsx)("p",{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0437\u0430 \u0441\u043c\u0435\u043d\u0443"})}),Object(x.jsx)("div",{className:"item-1",children:Object(x.jsx)("textarea",{})}),Object(x.jsx)("div",{className:"item-2",children:Object(x.jsx)("p",{children:"\u0421\u043c\u0435\u043d\u0443 \u0441\u0434\u0430\u043b"})}),Object(x.jsx)("div",{className:"item-3",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-4",children:Object(x.jsx)("p",{children:"\u0421\u043c\u0435\u043d\u0443 \u043f\u0440\u0438\u043d\u044f\u043b"})}),Object(x.jsx)("div",{className:"item-5",children:Object(x.jsx)("input",{})}),Object(x.jsx)("div",{className:"item-6",children:Object(x.jsx)("p",{children:"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a \u0446\u0435\u0445\u0430"})}),Object(x.jsx)("div",{className:"item-7",children:Object(x.jsx)("input",{})})]})}c(61);var o=function(){return Object(x.jsx)("div",{className:"app",children:Object(x.jsxs)("form",{className:"form",children:[Object(x.jsx)(u,{}),Object(x.jsxs)("div",{className:"form__report",children:[Object(x.jsx)("p",{children:"\u0426\u041f\u0425\u041f \u21161. \u0421\u0443\u0442\u043e\u0447\u043d\u044b\u0439 \u0440\u0430\u043f\u043e\u0440\u0442 \u0437\u0430 25.10.2021.\u0421\u043c\u0435\u043d\u0430 1. \u0421\u043c\u0435\u043d\u043d\u044b\u0439 \u043c\u0430\u0441\u0442\u0435\u0440: "}),Object(x.jsx)("input",{})]}),Object(x.jsx)(h,{}),Object(x.jsx)(p,{}),Object(x.jsx)(v,{}),Object(x.jsx)("button",{className:"btn_save",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})},N=c(5),f=c(24),_=c(13),g={items:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return"SET_DATA"===t.type?Object(_.a)(Object(_.a)({},e),{},{items:t.payload}):e},k=Object(N.b)({data:y}),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.c,C=Object(N.d)(k,S(Object(N.a)(f.a)));a.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(m.a,{store:C,children:Object(x.jsx)(o,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.d0df54cb.chunk.js.map