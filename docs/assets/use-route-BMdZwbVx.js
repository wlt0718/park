import{P as l,N as f,Q as p,E as h,r as O}from"./index-CIAfUPUf.js";import{P as R,A as r,r as T,C as P,I as c,c as g,g as E}from"./index-PxswfuWn.js";const a="van-hairline",d=`${a}--top`,$=`${a}--left`,b=`${a}--surround`,w=`${a}--top-bottom`,H=`${a}-unset--top-bottom`,x="van-haptics-feedback",y=5;function A(e,{args:o=[],done:t,canceled:s,error:n}){if(e){const i=e.apply(null,o);l(i)?i.then(u=>{u?t():s&&s()}).catch(n||f):i?t():s&&s()}else t()}const _=Symbol();function B(e){const o=R(_,null);o&&r(o,t=>{t&&e()})}const m=(e,o)=>{const t=T(),s=()=>{t.value=O(e).height};return P(()=>{if(c(s),o)for(let n=1;n<=3;n++)setTimeout(s,100*n)}),B(()=>c(s)),r([p,h],s),t};function C(e,o){const t=m(e,!0);return s=>g("div",{class:o("placeholder"),style:{height:t.value?`${t.value}px`:void 0}},[s()])}const F={to:[String,Object],url:String,replace:Boolean};function v({to:e,url:o,replace:t,$router:s}){e&&s?s[t?"replace":"push"](e):o&&(t?location.replace(o):location.href=o)}function I(){const e=E().proxy;return()=>v(e)}export{w as B,x as H,_ as P,y as T,I as a,m as b,A as c,H as d,b as e,$ as f,d as g,F as r,C as u};
