import{_ as U,u as B,r as a,o as r,e as c,c as n,w as h,h as o,F as f,q as L,k as M,t as l,f as q,s as x,p as z,j as F}from"./index-DB_EkmlV.js";import"./index-BeZxVoSM.js";import{C as O,a as $,D as b}from"./index-D07U1si7.js";import{_ as A}from"./dsn-CtJRIpi-.js";import{u as E}from"./order-jL3rsSGK.js";import{S as R}from"./index-MkIN60bi.js";import"./with-install-DCDV9zmY.js";import"./use-expose-CoHQvPjm.js";import"./index-skqfQ89_.js";import"./use-route-Dnp2YPk7.js";import"./index-DKGR3NSR.js";import"./constant-C5t5NxWu.js";import"./use-height-DIQkYfS7.js";import"./mount-component-qFN9LxyK.js";const T=i=>(z("data-v-d5030291"),i=i(),F(),i),G={class:"list"},H=["onClick"],J={class:"header"},K={class:"header-left"},P={class:"name"},Q={class:"status"},W={key:0},X={key:1},Y={class:"body"},Z=T(()=>o("img",{src:A,alt:""},null,-1)),tt={class:"info"},ot={class:"name"},et={class:"desc"},st={class:"desc"},at={class:"desc"},nt={class:"amt"},lt={__name:"order",setup(i){const w=B(),V=E(),p=a(0),_=a("z"),m=a("date"),u=a(!1),v=a("");function g(e){u.value=!1;const s=e[0].getMonth()+1+"月"+e[0].getDate()+"日",d=e[1].getMonth()+1+"月"+e[1].getDate()+"日";v.value=s+"-"+d}const k=e=>{console.log(e),e==="custom"&&(u.value=!0)},y=a([{text:"今日",value:"date"},{text:"本周",value:"week"},{text:"本月",value:"month"},{text:`自定义时间${v.value}`,value:"custom"}]),C=[{text:"全部商家",value:0},{text:"上海迪士尼",value:1},{text:"上海欢乐谷",value:2}],D=[{text:"全部状态",value:"z"},{text:"已下单",value:"x"},{text:"已完成",value:"c"}];function S(e){w.push({path:"/orderinfo",query:{id:e}})}return(e,s)=>{const d=$,N=b,j=R,I=O;return r(),c(f,null,[n(j,null,{default:h(()=>[n(N,{"active-color":"#ee0a24"},{default:h(()=>[n(d,{modelValue:p.value,"onUpdate:modelValue":s[0]||(s[0]=t=>p.value=t),options:C},null,8,["modelValue"]),n(d,{modelValue:m.value,"onUpdate:modelValue":s[1]||(s[1]=t=>m.value=t),options:y.value,onChange:k},null,8,["modelValue","options"]),n(d,{modelValue:_.value,"onUpdate:modelValue":s[2]||(s[2]=t=>_.value=t),options:D},null,8,["modelValue"])]),_:1})]),_:1}),n(I,{show:u.value,"onUpdate:show":s[3]||(s[3]=t=>u.value=t),type:"range",onConfirm:g,color:"#ee0a24","allow-same-day":"",position:"top"},null,8,["show"]),o("div",G,[(r(!0),c(f,null,L(M(V).list,t=>(r(),c("div",{class:"item",key:t.id,onClick:dt=>S(t.id)},[o("div",J,[o("div",K,[o("div",P,l(t.merchantName),1)]),o("div",Q,[q("订单状态： "),t.status==="0"?(r(),c("span",W,"已下单")):x("",!0),t.status==="1"?(r(),c("span",X,"已完成")):x("",!0)])]),o("div",Y,[Z,o("div",tt,[o("div",ot,l(t.projectName),1),o("div",et,"价格：￥"+l(t.projectjiage)+"/ 位",1),o("div",st,"下单人："+l(t.person),1),o("div",at,"数量：x "+l(t.projectNum),1)]),o("div",nt,[o("div",null,"￥"+l(t.allAmount),1)])])],8,H))),128))])],64)}}},kt=U(lt,[["__scopeId","data-v-d5030291"]]);export{kt as default};