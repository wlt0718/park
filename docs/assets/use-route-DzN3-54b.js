import{P as a,I as f}from"./with-install-El4aLNkl.js";import{P as p,z as u,g as l}from"./index-Cq5aGpny.js";function h(o,{args:t=[],done:s,canceled:e,error:i}){if(o){const n=o.apply(null,t);a(n)?n.then(r=>{r?s():e&&e()}).catch(i||f):n?s():e&&e()}else s()}const c=Symbol();function S(o){const t=p(c,null);t&&u(t,s=>{s&&o()})}const y={to:[String,Object],url:String,replace:Boolean};function P({to:o,url:t,replace:s,$router:e}){o&&e?e[s?"replace":"push"](o):t&&(s?location.replace(t):location.href=t)}function I(){const o=l().proxy;return()=>P(o)}export{c as P,h as c,S as o,y as r,I as u};
