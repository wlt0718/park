import{c as $,f as fe,e as S,G as q,n as Y,l as N,k as V,a as oe,D as le,H as ae,m as _,t as ce,b as ve,u as he,J as ge,K as L,p as Q}from"./index-CIAfUPUf.js";import{d as be,c as ie,L as Oe}from"./function-call-_nCAEx-c.js";import{d as J,r as w,a as p,H as Te,c as m,A as j,m as pe,I as W}from"./index-PxswfuWn.js";import{H as X,d as ke}from"./use-route-BMdZwbVx.js";const[ye,O,Z]=$("picker"),se=e=>e.find(l=>!l.disabled)||e[0];function Ce(e,l){const o=e[0];if(o){if(Array.isArray(o))return"multiple";if(l.children in o)return"cascade"}return"default"}function B(e,l){l=q(l,0,e.length);for(let o=l;o<e.length;o++)if(!e[o].disabled)return o;for(let o=l-1;o>=0;o--)if(!e[o].disabled)return o;return 0}const ee=(e,l,o)=>l!==void 0&&!!e.find(s=>s[o.value]===l);function z(e,l,o){const s=e.findIndex(f=>f[o.value]===l),c=B(e,s);return e[c]}function xe(e,l,o){const s=[];let c={[l.children]:e},f=0;for(;c&&c[l.children];){const v=c[l.children],h=o.value[f];if(c=fe(h)?z(v,h,l):void 0,!c&&v.length){const u=se(v)[l.value];c=z(v,u,l)}f++,s.push(v)}return s}function Ee(e){const{transform:l}=window.getComputedStyle(e),o=l.slice(7,l.length-1).split(", ")[5];return Number(o)}function we(e){return S({text:"text",value:"value",children:"children"},e)}const te=200,ne=300,Se=15,[ue,G]=$("picker-column"),re=Symbol(ue);var He=J({name:ue,props:{value:Y,fields:N(Object),options:V(),readonly:Boolean,allowHtml:Boolean,optionHeight:N(Number),swipeDuration:N(Y),visibleOptionNum:N(Y)},emits:["change","clickOption","scrollInto"],setup(e,{emit:l,slots:o}){let s,c,f,v,h;const u=w(),g=w(),r=w(0),d=w(0),y=be(),C=()=>e.options.length,M=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,k=i=>{let t=B(e.options,i);const n=-t*e.optionHeight,a=()=>{t>C()-1&&(t=B(e.options,i));const T=e.options[t][e.fields.value];T!==e.value&&l("change",T)};s&&n!==r.value?h=a:a(),r.value=n},b=()=>e.readonly||!e.options.length,R=i=>{s||b()||(h=null,d.value=te,k(i),l("clickOption",e.options[i]))},x=i=>q(Math.round(-i/e.optionHeight),0,C()-1),D=p(()=>x(r.value)),K=(i,t)=>{const n=Math.abs(i/t);i=r.value+n/.003*(i<0?-1:1);const a=x(i);d.value=+e.swipeDuration,k(a)},H=()=>{s=!1,d.value=0,h&&(h(),h=null)},F=i=>{if(!b()){if(y.start(i),s){const t=Ee(g.value);r.value=Math.min(0,t-M())}d.value=0,c=r.value,f=Date.now(),v=c,h=null}},U=i=>{if(b())return;y.move(i),y.isVertical()&&(s=!0,ae(i,!0));const t=q(c+y.deltaY.value,-(C()*e.optionHeight),e.optionHeight),n=x(t);n!==D.value&&l("scrollInto",e.options[n]),r.value=t;const a=Date.now();a-f>ne&&(f=a,v=t)},I=()=>{if(b())return;const i=r.value-v,t=Date.now()-f;if(t<ne&&Math.abs(i)>Se){K(i,t);return}const a=x(r.value);d.value=te,k(a),setTimeout(()=>{s=!1},0)},E=()=>{const i={height:`${e.optionHeight}px`};return e.options.map((t,n)=>{const a=t[e.fields.text],{disabled:T}=t,P=t[e.fields.value],me={role:"button",style:i,tabindex:T?-1:0,class:[G("item",{disabled:T,selected:P===e.value}),t.className],onClick:()=>R(n)},de={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:a};return m("li",me,[o.option?o.option(t,n):m("div",de,null)])})};return oe(re),ie({stopMomentum:H}),Te(()=>{const i=s?Math.floor(-r.value/e.optionHeight):e.options.findIndex(a=>a[e.fields.value]===e.value),t=B(e.options,i),n=-t*e.optionHeight;s&&t<i&&H(),r.value=n}),le("touchmove",U,{target:u}),()=>m("div",{ref:u,class:G(),onTouchstartPassive:F,onTouchend:I,onTouchcancel:I},[m("ul",{ref:g,style:{transform:`translate3d(0, ${r.value+M()}px, 0)`,transitionDuration:`${d.value}ms`,transitionProperty:d.value?"all":"none"},class:G("wrapper"),onTransitionend:H},[E()])])}});const[Ie]=$("picker-toolbar"),A={title:String,cancelButtonText:String,confirmButtonText:String},Pe=["cancel","confirm","title","toolbar"],Me=Object.keys(A);var De=J({name:Ie,props:A,emits:["confirm","cancel"],setup(e,{emit:l,slots:o}){const s=()=>{if(o.title)return o.title();if(e.title)return m("div",{class:[O("title"),"van-ellipsis"]},[e.title])},c=()=>l("cancel"),f=()=>l("confirm"),v=()=>{var u;const g=(u=e.cancelButtonText)!=null?u:Z("cancel");if(!(!o.cancel&&!g))return m("button",{type:"button",class:[O("cancel"),X],onClick:c},[o.cancel?o.cancel():g])},h=()=>{var u;const g=(u=e.confirmButtonText)!=null?u:Z("confirm");if(!(!o.confirm&&!g))return m("button",{type:"button",class:[O("confirm"),X],onClick:f},[o.confirm?o.confirm():g])};return()=>m("div",{class:O("toolbar")},[o.toolbar?o.toolbar():[v(),s(),h()]])}});const[Ne,Fe]=$("picker-group"),_e=Symbol(Ne);S({tabs:V(),activeTab:_(0),nextStepText:String,showToolbar:ce},A);const Be=S({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:_(44),showToolbar:ce,swipeDuration:_(1e3),visibleOptionNum:_(6)},A),Ve=S({},Be,{columns:V(),modelValue:V(),toolbarPosition:ve("top"),columnsFieldNames:Object});var Ue=J({name:ye,props:Ve,emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:l,slots:o}){const s=w(),c=w(e.modelValue.slice(0)),{parent:f}=oe(_e),{children:v,linkChildren:h}=he(re);h();const u=p(()=>we(e.columnsFieldNames)),g=p(()=>ge(e.optionHeight)),r=p(()=>Ce(e.columns,u.value)),d=p(()=>{const{columns:t}=e;switch(r.value){case"multiple":return t;case"cascade":return xe(t,u.value,c);default:return[t]}}),y=p(()=>d.value.some(t=>t.length)),C=p(()=>d.value.map((t,n)=>z(t,c.value[n],u.value))),M=p(()=>d.value.map((t,n)=>t.findIndex(a=>a[u.value.value]===c.value[n]))),k=(t,n)=>{if(c.value[t]!==n){const a=c.value.slice(0);a[t]=n,c.value=a}},b=()=>({selectedValues:c.value.slice(0),selectedOptions:C.value,selectedIndexes:M.value}),R=(t,n)=>{k(n,t),r.value==="cascade"&&c.value.forEach((a,T)=>{const P=d.value[T];ee(P,a,u.value)||k(T,P.length?P[0][u.value.value]:void 0)}),W(()=>{l("change",S({columnIndex:n},b()))})},x=(t,n)=>{const a={columnIndex:n,currentOption:t};l("clickOption",S(b(),a)),l("scrollInto",a)},D=()=>{v.forEach(n=>n.stopMomentum());const t=b();return W(()=>{l("confirm",t)}),t},K=()=>l("cancel",b()),H=()=>d.value.map((t,n)=>m(He,{value:c.value[n],fields:u.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:g.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:a=>R(a,n),onClickOption:a=>x(a,n),onScrollInto:a=>{l("scrollInto",{currentOption:a,columnIndex:n})}},{option:o.option})),F=t=>{if(y.value){const n={height:`${g.value}px`},a={backgroundSize:`100% ${(t-g.value)/2}px`};return[m("div",{class:O("mask"),style:a},null),m("div",{class:[ke,O("frame")],style:n},null)]}},U=()=>{const t=g.value*+e.visibleOptionNum,n={height:`${t}px`};return m("div",{ref:s,class:O("columns"),style:n},[H(),F(t)])},I=()=>{if(e.showToolbar&&!f)return m(De,pe(Q(e,Me),{onConfirm:D,onCancel:K}),Q(o,Pe))};j(d,t=>{t.forEach((n,a)=>{n.length&&!ee(n,c.value[a],u.value)&&k(a,se(n)[u.value.value])})},{immediate:!0});let E;return j(()=>e.modelValue,t=>{!L(t,c.value)&&!L(t,E)&&(c.value=t.slice(0),E=t.slice(0))},{deep:!0}),j(c,t=>{L(t,e.modelValue)||(E=t.slice(0),l("update:modelValue",E))},{immediate:!0}),le("touchmove",ae,{target:s}),ie({confirm:D,getSelectedOptions:()=>C.value}),()=>{var t,n;return m("div",{class:O()},[e.toolbarPosition==="top"?I():null,e.loading?m(Oe,{class:O("loading")},null):null,(t=o["columns-top"])==null?void 0:t.call(o),U(),(n=o["columns-bottom"])==null?void 0:n.call(o),e.toolbarPosition==="bottom"?I():null])}}});export{Be as p,Ue as s};
