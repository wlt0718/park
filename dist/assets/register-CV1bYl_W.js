import{_ as I,u as k,l as C,r as p,b as u,h as s,q as w,n as i,v as n,t as g,o as f,p as T,j as E}from"./index-W43f_Row.js";import{u as P}from"./user-CrrH7Bso.js";import{s as r}from"./function-call-CCQogdJ1.js";import"./index-D6FHRRrv.js";import"./use-route-BLsVAo3P.js";const l=a=>(T("data-v-c970e74f"),a=a(),E(),a),V={class:"login"},U=l(()=>s("div",{class:"title"},"账号注册",-1)),$={class:"from"},B={class:"from-item type"},D=l(()=>s("label",{for:"mobile",class:"from-label"},"您的身份",-1)),M={class:"usertype"},R={class:"from-item"},j=l(()=>s("label",{for:"mobile",class:"from-label"},"手机号",-1)),q={class:"from-item"},z=l(()=>s("label",{for:"password",class:"from-label"},"密码",-1)),N={class:"from-item"},A=l(()=>s("label",{for:"confirmPassword",class:"from-label"},"确认密码",-1)),F={class:"from-item"},G=l(()=>s("label",{for:"smsCode",class:"from-label"},"验证码",-1)),H={class:"sms"},J={key:1},K={__name:"register",setup(a){const d=P(),y=k(),e=C({usertype:"1",mobile:"",password:"",confirmPassrowd:"",smscode:""});function h(){const{mobile:b,password:o,confirmPassrowd:t,smscode:x}=e;if(!new RegExp(/^[0-9]{11}$/).test(b))return r({title:"提示",message:"请输入正确的手机号"}),!1;if(!o)return r({title:"提示",message:"请输入密码"}),!1;if(o!==t)return r({title:"提示",message:"两次密码不一样"}),!1;if(!new RegExp(/^\d{6}$/).test(x))return r({title:"提示",message:"验证码格式不正确"}),!1;d.SET_mobile(e.mobile),d.SET_password(e.password),d.SET_userType(e.usertype),r({message:"注册成功！去登录"}).then(()=>{y.replace({name:"login"})})}const _=p("获取验证码"),m=p(!1),c=p(60);let v=null;function S(){m.value=!0,v=setInterval(()=>{c.value-=1,c.value<=0&&(_.value="重新发送",m.value=!0,clearInterval(v))},1e3)}return(b,o)=>(f(),u("div",V,[U,s("div",$,[s("div",B,[D,s("div",M,[s("div",{class:w(["usertype-item",e.usertype==="1"?"select":""]),onClick:o[0]||(o[0]=t=>e.usertype="1")},"商家",2),s("div",{class:w(["usertype-item",e.usertype==="2"?"select":""]),onClick:o[1]||(o[1]=t=>e.usertype="2")},"导游",2)])]),s("div",R,[j,i(s("input",{id:"mobile",class:"from-input",type:"tel",max:"11",placeholder:"请输入手机号","onUpdate:modelValue":o[2]||(o[2]=t=>e.mobile=t)},null,512),[[n,e.mobile]])]),s("div",q,[z,i(s("input",{id:"password",class:"from-input",type:"password",placeholder:"长度8到16位 仅限字母数字","onUpdate:modelValue":o[3]||(o[3]=t=>e.password=t)},null,512),[[n,e.password]])]),s("div",N,[A,i(s("input",{id:"confirmPassword",class:"from-input",type:"password",placeholder:"请再次确认密码","onUpdate:modelValue":o[4]||(o[4]=t=>e.confirmPassrowd=t)},null,512),[[n,e.confirmPassrowd]])]),s("div",F,[G,i(s("input",{id:"smsCode",class:"from-input",type:"tel",max:"6",placeholder:"请输入手机验证码","onUpdate:modelValue":o[5]||(o[5]=t=>e.smscode=t)},null,512),[[n,e.smscode]]),s("div",H,[m.value?(f(),u("span",J,g(c.value)+"秒",1)):(f(),u("span",{key:0,onClick:S},g(_.value),1))])])]),s("button",{type:"button",class:"btn",onClick:h},"注册")]))}},ss=I(K,[["__scopeId","data-v-c970e74f"]]);export{ss as default};
