import{m as L,u as U}from"./mount-component-pNNDNUjD.js";import{d as x,r as E,c as o,a as O,l as M,z as W,m as I}from"./index-Dh-pVtGN.js";import{u as j,p as V,a as Y,P as q}from"./index-BOHSz1IP.js";import{B as p}from"./index-QB9ndsuH.js";import{c as T,u as G,t as k,w as N,e as h,a as J,n as Q,d as X,b as Z,p as ee,f as te,h as D,j as ne,k as oe}from"./index-C24B96dT.js";import{u as ae}from"./use-placeholder-AbDOPAJu.js";import{r as le,u as se}from"./use-route-C3iiGzGZ.js";import{a as re,b as ce}from"./constant-DzoTxxdD.js";import{c as ie}from"./on-popup-reopen-CoJVpQf7.js";const[R,A]=T("action-bar"),F=Symbol(R),ue={placeholder:Boolean,safeAreaInsetBottom:k};var de=x({name:R,props:ue,setup(e,{slots:a}){const n=E(),s=ae(n,A),{linkChildren:r}=G(F);r();const f=()=>{var m;return o("div",{ref:n,class:[A(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(m=a.default)==null?void 0:m.call(a)])};return()=>e.placeholder?s(f):f()}});const fe=N(de),[me,Be]=T("action-bar-button"),ge=h({},le,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var he=x({name:me,props:ge,setup(e,{slots:a}){const n=se(),{parent:s,index:r}=J(F),f=O(()=>{if(s){const c=s.children[r.value-1];return!(c&&"isButton"in c)}}),m=O(()=>{if(s){const c=s.children[r.value+1];return!(c&&"isButton"in c)}});return j({isButton:!0}),()=>{const{type:c,icon:B,text:g,color:w,loading:v,disabled:y}=e;return o(p,{class:Be([c,{last:m.value,first:f.value}]),size:"large",type:c,icon:B,color:w,loading:v,disabled:y,onClick:n},{default:()=>[a.default?a.default():g]})}}});const _=N(he),[be,i,C]=T("dialog"),Ce=h({},V,{title:String,theme:String,width:Q,message:[String,Function],callback:Function,allowHtml:Boolean,className:X,transition:Z("van-dialog-bounce"),messageAlign:String,closeOnPopstate:k,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:k,closeOnClickOverlay:Boolean}),we=[...Y,"transition","closeOnPopstate"];var ve=x({name:be,props:Ce,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:a,slots:n}){const s=E(),r=M({confirm:!1,cancel:!1}),f=t=>a("update:show",t),m=t=>{var l;f(!1),(l=e.callback)==null||l.call(e,t)},c=t=>()=>{e.show&&(a(t),e.beforeClose?(r[t]=!0,ie(e.beforeClose,{args:[t],done(){m(t),r[t]=!1},canceled(){r[t]=!1}})):m(t))},B=c("cancel"),g=c("confirm"),w=W(t=>{var l,u;if(t.target!==((u=(l=s.value)==null?void 0:l.popupRef)==null?void 0:u.value))return;({Enter:e.showConfirmButton?g:D,Escape:e.showCancelButton?B:D})[t.key](),a("keydown",t)},["enter","esc"]),v=()=>{const t=n.title?n.title():e.title;if(t)return o("div",{class:i("header",{isolated:!e.message&&!n.default})},[t])},y=t=>{const{message:l,allowHtml:u,messageAlign:d}=e,b=i("message",{"has-title":t,[d]:d}),P=ne(l)?l():l;return u&&typeof P=="string"?o("div",{class:b,innerHTML:P},null):o("div",{class:b},[P])},H=()=>{if(n.default)return o("div",{class:i("content")},[n.default()]);const{title:t,message:l,allowHtml:u}=e;if(l){const d=!!(t||n.title);return o("div",{key:u?1:0,class:i("content",{isolated:!d})},[y(d)])}},K=()=>o("div",{class:[ce,i("footer")]},[e.showCancelButton&&o(p,{size:"large",text:e.cancelButtonText||C("cancel"),class:i("cancel"),style:{color:e.cancelButtonColor},loading:r.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&o(p,{size:"large",text:e.confirmButtonText||C("confirm"),class:[i("confirm"),{[re]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:r.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]),$=()=>o(fe,{class:i("footer")},{default:()=>[e.showCancelButton&&o(_,{type:"warning",text:e.cancelButtonText||C("cancel"),class:i("cancel"),color:e.cancelButtonColor,loading:r.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&o(_,{type:"danger",text:e.confirmButtonText||C("confirm"),class:i("confirm"),color:e.confirmButtonColor,loading:r.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]}),z=()=>n.footer?n.footer():e.theme==="round-button"?$():K();return()=>{const{width:t,title:l,theme:u,message:d,className:b}=e;return o(q,I({ref:s,role:"dialog",class:[i([u]),b],style:{width:te(t)},tabindex:0,"aria-labelledby":l||d,onKeydown:w,"onUpdate:show":f},ee(e,we)),{default:()=>[v(),H(),z()]})}}});let S;const ye={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let Pe=h({},ye);function pe(){({instance:S}=L({setup(){const{state:a,toggle:n}=U();return()=>o(ve,I(a,{"onUpdate:show":n}),null)}}))}function ke(e){return oe?new Promise((a,n)=>{S||pe(),S.open(h({},Pe,e,{callback:s=>{(s==="confirm"?a:n)(s)}}))}):Promise.resolve(void 0)}const Ne=e=>ke(h({showCancelButton:!0},e));export{Ne as a,ve as b,ke as s};