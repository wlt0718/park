import{d as w,c as o,T as F,_ as x,r as C,l as k,b as B,o as S,e as I,h as s,w as a,F as z,f as e,p as P,j as T}from"./index-Sf668N8n.js";import{_ as N}from"./dsn-CtJRIpi-.js";import{I as y}from"./index-Bf6RwJBK.js";import{c as V,t as q,b as E,w as A}from"./with-install-BriKUXi7.js";import{H}from"./constant-C5t5NxWu.js";import{B as j,P as D}from"./index-uflgOZJy.js";import"./use-route-CwGMHbCX.js";import"./use-expose-DQZ-B0at.js";const[K,g]=V("tag"),U={size:String,mark:Boolean,show:q,type:E("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var $=w({name:K,props:U,emits:["close"],setup(n,{slots:c,emit:d}){const h=l=>{l.stopPropagation(),d("close",l)},_=()=>n.plain?{color:n.textColor||n.color,borderColor:n.color}:{color:n.textColor,background:n.color},p=()=>{var l;const{type:i,mark:m,plain:u,round:r,size:v,closeable:X}=n,f={mark:m,plain:u,round:r};v&&(f[v]=v);const b=X&&o(y,{name:"cross",class:[g("close"),H],onClick:h},null);return o("span",{style:_(),class:g([f,i])},[(l=c.default)==null?void 0:l.call(c),b])};return()=>o(F,{name:n.closeable?"van-fade":void 0},{default:()=>[n.show?p():null]})}});const G=A($),t=n=>(P("data-v-d491251e"),n=n(),T(),n),J=t(()=>s("div",{class:"header"},[s("img",{src:N,alt:""})],-1)),L={class:"main"},M=t(()=>s("div",{class:"name"},"上海迪士尼",-1)),O={class:"score"},Q=t(()=>s("span",{class:"num"},"4.9",-1)),R=t(()=>s("span",{class:"month"},"月玩人次 10000+",-1)),W={class:"tag"},Y=t(()=>s("div",{class:"activity"},[s("div",null,"活动一：XXXXXXXXXX"),s("div",null,"活动二：XXXXXXXXXX"),s("div",null,"活动三：XXXXXXXXXX")],-1)),Z={class:"list"},ss={class:"item"},ts=t(()=>s("img",{src:"",alt:""},null,-1)),os={class:"body"},as=t(()=>s("div",{class:"name"},"飞跃龙门",-1)),es=t(()=>s("div",{class:"oldamt"},[s("span",null,"项目费用 "),s("span",null,"￥30.00 / 位")],-1)),ns={class:"tag"},ls=t(()=>s("div",null,[s("span",{class:"newamt"},"一位收入"),s("span",{class:"newamt"},"￥1.50")],-1)),is={class:"btnbox"},cs={class:"item"},ds=t(()=>s("img",{src:"",alt:""},null,-1)),_s={class:"body"},rs=t(()=>s("div",{class:"name"},"鲤鱼大冒险",-1)),ps=t(()=>s("div",{class:"oldamt"},[s("span",null,"项目费用 "),s("span",null,"￥30.00 / 位")],-1)),ms={class:"tag"},us=t(()=>s("div",null,[s("span",{class:"newamt"},"一位收入"),s("span",{class:"newamt"},"￥1.50")],-1)),vs={class:"btnbox"},hs={class:"item"},fs=t(()=>s("img",{src:"",alt:""},null,-1)),gs={class:"body"},ys=t(()=>s("div",{class:"name"},"勇闯天涯",-1)),Xs=t(()=>s("div",{class:"oldamt"},[s("span",null,"项目费用 "),s("span",null,"￥30.00 / 位")],-1)),bs={class:"tag"},ws=t(()=>s("div",null,[s("span",{class:"newamt"},"一位收入"),s("span",{class:"newamt"},"￥1.50")],-1)),Fs={class:"btnbox"},xs={class:"item"},Cs=t(()=>s("img",{src:"",alt:""},null,-1)),ks={class:"body"},Bs=t(()=>s("div",{class:"name"},"项目三",-1)),Ss=t(()=>s("div",{class:"oldamt"},[s("span",null,"项目费用 "),s("span",null,"￥30.00 / 位")],-1)),Is={class:"tag"},zs=t(()=>s("div",null,[s("span",{class:"newamt"},"一位收入"),s("span",{class:"newamt"},"￥1.50")],-1)),Ps={class:"btnbox"},Ts={class:"item"},Ns=t(()=>s("img",{src:"",alt:""},null,-1)),Vs={class:"body"},qs=t(()=>s("div",{class:"name"},"项目四",-1)),Es=t(()=>s("div",{class:"oldamt"},[s("span",null,"项目费用 "),s("span",null,"￥30.00 / 位")],-1)),As={class:"tag"},Hs=t(()=>s("div",null,[s("span",{class:"newamt"},"一位收入"),s("span",{class:"newamt"},"￥1.50")],-1)),js={class:"btnbox"},Ds={class:"order"},Ks=t(()=>s("div",{class:"body"},[s("div",{class:"name"},"飞跃龙门"),s("div",{class:"oldamt"},[s("span",null,"项目费用 "),s("span",null,"￥30.00 / 位")]),s("div",{class:"desc"}," 游客扫码下单 ")],-1)),Us={class:"couponlist"},$s=t(()=>s("div",{class:"time"},[e("二维码有效期："),s("span",{style:{color:"#5075FF","font-weight":"600"}},"29分59秒")],-1)),Gs={__name:"playinfo",setup(n){const c=C(!1),d=k({color:{dark:"#000000ff",light:"#ffffff"},type:"image/png",value:"https://wlt0718.github.io/park-visitor/#/merchantorder?type=g",width:300});return(h,_)=>{const p=y,l=G,i=j,m=B("vue-qrcode"),u=D;return S(),I(z,null,[J,s("div",L,[M,s("div",O,[o(p,{name:"star"}),Q,R]),s("div",W,[o(l,null,{default:a(()=>[e("米奇")]),_:1}),o(l,null,{default:a(()=>[e("年轻人")]),_:1}),o(l,null,{default:a(()=>[e("标签三")]),_:1})]),Y]),s("div",Z,[s("div",ss,[ts,s("div",os,[as,es,s("div",ns,[o(l,{type:"danger"},{default:a(()=>[e("推广佣金 5%")]),_:1})]),ls]),s("div",is,[o(i,{type:"primary",size:"mini",color:"#5075FF",onClick:_[0]||(_[0]=r=>c.value=!0)},{default:a(()=>[e("生成推广二维码")]),_:1})])]),s("div",cs,[ds,s("div",_s,[rs,ps,s("div",ms,[o(l,{type:"danger"},{default:a(()=>[e("推广佣金 5%")]),_:1})]),us]),s("div",vs,[o(i,{type:"primary",size:"mini",color:"#5075FF"},{default:a(()=>[e("生成推广二维码")]),_:1})])]),s("div",hs,[fs,s("div",gs,[ys,Xs,s("div",bs,[o(l,{type:"danger"},{default:a(()=>[e("推广佣金 5%")]),_:1})]),ws]),s("div",Fs,[o(i,{type:"primary",size:"mini",color:"#5075FF"},{default:a(()=>[e("生成推广二维码")]),_:1})])]),s("div",xs,[Cs,s("div",ks,[Bs,Ss,s("div",Is,[o(l,{type:"danger"},{default:a(()=>[e("推广佣金 5%")]),_:1})]),zs]),s("div",Ps,[o(i,{type:"primary",size:"mini",color:"#5075FF"},{default:a(()=>[e("生成推广二维码")]),_:1})])]),s("div",Ts,[Ns,s("div",Vs,[qs,Es,s("div",As,[o(l,{type:"danger"},{default:a(()=>[e("推广佣金 5%")]),_:1})]),Hs]),s("div",js,[o(i,{type:"primary",size:"mini",color:"#5075FF"},{default:a(()=>[e("生成推广二维码")]),_:1})])])]),o(u,{show:c.value,"onUpdate:show":_[1]||(_[1]=r=>c.value=r),position:"bottom",closeable:"",round:"",style:{height:"95%"}},{default:a(()=>[s("div",Ds,[Ks,s("div",Us,[o(m,{value:d.value,width:d.width,type:d.type,color:d.color},null,8,["value","width","type","color"])]),s("div",null,[$s,o(i,{type:"primary",size:"small",color:"#5075FF"},{default:a(()=>[e("重新生成")]),_:1})])])]),_:1},8,["show"])],64)}}},Zs=x(Gs,[["__scopeId","data-v-d491251e"]]);export{Zs as default};