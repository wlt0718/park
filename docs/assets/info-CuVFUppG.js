import{_ as h,u as v,o,e,h as s,F as r,q as m,k as f,t as a,c as k,f as y,s as n,p as N,j as I}from"./index-Sf668N8n.js";import{_ as j}from"./dsn-CtJRIpi-.js";import{u as x}from"./order-BIOqhG-4.js";import{I as S}from"./index-Bf6RwJBK.js";import"./with-install-BriKUXi7.js";const d=c=>(N("data-v-bc489873"),c=c(),I(),c),g=d(()=>s("div",{class:"headeraaa"},[s("div",{class:"title"},"带客信息"),s("div",null,"商家：上海迪士尼"),s("div",null,"带客游玩批次：1003202406060001")],-1)),V=d(()=>s("div",{class:"tips"}," 详情： ",-1)),b={class:"list"},B=["onClick"],C={class:"header"},q={class:"header-left"},w={class:"name"},F={class:"status"},L={key:0},O={key:1},D={class:"body"},E=d(()=>s("img",{src:j,alt:""},null,-1)),R={class:"info"},T={class:"name"},$={class:"desc"},z={class:"desc"},A={class:"amt"},G={__name:"info",setup(c){const _=v(),l=x();function u(i){_.push({path:"/orderinfo",query:{id:i}})}return(i,H)=>{const p=S;return o(),e(r,null,[g,V,s("div",b,[(o(!0),e(r,null,m(f(l).list,t=>(o(),e("div",{key:t.id},[t.status==="0"?(o(),e("div",{key:0,class:"item",onClick:J=>u(t.id)},[s("div",C,[s("div",q,[s("div",w,a(t.merchantName),1),k(p,{name:"arrow"})]),s("div",F,[y("订单状态： "),t.status==="0"?(o(),e("span",L,"已下单")):n("",!0),t.status==="1"?(o(),e("span",O,"已完成")):n("",!0)])]),s("div",D,[E,s("div",R,[s("div",T,a(t.projectName),1),s("div",$,"佣金：￥"+a(t.yongjin),1),s("div",z,"数量：x "+a(t.projectNum),1)]),s("div",A,[s("div",null,"￥"+a(t.jiesuan),1)])])],8,B)):n("",!0)]))),128))])],64)}}},W=h(G,[["__scopeId","data-v-bc489873"]]);export{W as default};