(this["webpackJsonpstock-app"]=this["webpackJsonpstock-app"]||[]).push([[0],{192:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(30),r=n.n(c),s=n(47),i=n(38),o=n.n(i),j=n(86),b=n(13),u=n(8);var l=function(){return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-warning titlebar",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)("h1",{children:"Stock App"})})})},d=n(73),h=n.n(d),p=(n(106),n(74)),O=n(88),f=n(72),g=n(92),x=n(89),m=n(7),v=n(0),y=n.n(v),S=n(202);var D=function(){var t,e=Object(a.useState)(new Date("2021/01/01")),n=Object(b.a)(e,2),c=n[0],r=n[1],i=Object(a.useState)(new Date("2021/08/20")),d=Object(b.a)(i,2),v=d[0],D=d[1],k=Object(a.useState)(""),w=Object(b.a)(k,2),N=w[0],A=w[1],C=Object(a.useState)([]),E=Object(b.a)(C,2),M=E[0],q=E[1];function J(){return Object(u.jsxs)("div",{className:"datepicker",children:[Object(u.jsx)(h.a,{selected:c,onChange:function(t){return r(t)},selectsStart:!0,startDate:c,endDate:v}),Object(u.jsx)(h.a,{selected:v,onChange:function(t){return D(t)},selectsEnd:!0,startDate:c,endDate:v,minDate:c})]})}var R=function(t){M.forEach((function(t){t.date=new Date(t.date)})),console.log(M);var e=t.type,n=t.width,a=t.ratio,c=M;return Object(u.jsx)("div",{className:"ChartJS",children:Object(u.jsx)(p.b,{height:400,ratio:a,width:n,margin:{left:50,right:50,top:10,bottom:30},type:e,data:c,seriesName:"MSFT",xAccessor:function(t){if(t)return t.date},xScale:Object(S.a)(),xExtents:[new Date(2021,0,4),new Date(2021,1,10)],children:Object(u.jsxs)(p.a,{id:1,yExtents:function(t){return[t.high,t.low]},children:[Object(u.jsx)(f.XAxis,{axisAt:"bottom",orient:"bottom",ticks:6}),Object(u.jsx)(f.YAxis,{axisAt:"left",orient:"left",ticks:5}),Object(u.jsx)(O.CandlestickSeries,{width:Object(m.timeIntervalBarWidth)(g.a)})]})})})};function F(){var t=Object(a.useState)([]),e=Object(b.a)(t,2),n=e[0],c=e[1],r=function(){var t=Object(j.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=[]).push(Object(u.jsx)(R,{data:M},1)),c(e);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){r()}),[]),Object(u.jsx)("div",{className:"App",children:n})}function T(t){var e=Object(a.useState)({}),n=Object(b.a)(e,2),c=n[0],r=n[1],s="https://cloud.iexapis.com/stable/stock/"+t.symb+"/company?token=pk_83b319dbd5f8410f8939ed90ce28924d";return fetch(s).then((function(t){return t.json()})).then((function(t){r(t)})),Object(u.jsxs)("div",{className:"description",children:[Object(u.jsx)("h2",{children:"Description"}),c.description]})}return R.prototype={data:y.a.array.isRequired,width:y.a.number.isRequired,ratio:y.a.number.isRequired,type:y.a.oneOf(["svg","hybrid"]).isRequired},R.defaultProps={type:"svg"},R=Object(x.fitWidth)(R),Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsxs)("div",{className:"symbol",children:[" ",Object(u.jsx)("input",{type:"text",value:N,onChange:function(t){return A(t.target.value)},className:"form-control form-control-lg symbol-input",placeholder:"enter symbol"})," "]}),Object(u.jsx)(J,{}),Object(u.jsx)("button",(t={type:"button"},Object(s.a)(t,"type","submit"),Object(s.a)(t,"onClick",(function(t){var e=c.getFullYear().toString()+"-"+(c.getMonth()+1>=10?(c.getMonth()+1).toString():"0"+(c.getMonth()+1).toString())+"-"+(c.getDate()>=10?c.getDate().toString():"0"+c.getDate().toString()),n=v.getFullYear().toString()+"-"+(v.getMonth()+1>=10?(v.getMonth()+1).toString():"0"+(v.getMonth()+1).toString())+"-"+(v.getDate()>=10?v.getDate().toString():"0"+v.getDate().toString()),a={symbol:N,start:e,end:n};fetch("https://stocks-fariz.herokuapp.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(t){return t.json()})).then((function(t){q(t)})),t.preventDefault()})),Object(s.a)(t,"className","btn btn-primary enter-btn"),Object(s.a)(t,"children","Enter"),t)),0!=M.length?Object(u.jsx)(F,{}):Object(u.jsx)("p",{}),0!=M.length?Object(u.jsx)(T,{symb:N}):Object(u.jsx)("p",{}),Object(u.jsx)("footer",{className:"foot",children:" "})]})};r.a.render(Object(u.jsx)(D,{}),document.getElementById("root"))}},[[192,1,2]]]);
//# sourceMappingURL=main.66df6aef.chunk.js.map