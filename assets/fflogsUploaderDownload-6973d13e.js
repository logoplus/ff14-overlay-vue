import{d as w,B as y,A as D,F as N,ai as _,o as n,b as i,a as r,w as c,g as e,t as l,u as s,i as x,J as v,K as k,k as G,e as S,p as F,l as I,h as L,H as U,aK as E}from"./vendor-5d3cd767.js";import{_ as z}from"./index-b002a104.js";const B=a=>(F("data-v-dd54f427"),a=a(),I(),a),P={class:"common-layout"},$=B(()=>e("h1",null,"FFLOGS上传器 加速下载",-1)),M={key:0},R={flex:"~ col wrap gap1","items-start":""},T=w({__name:"fflogsUploaderDownload",setup(a){const o=y({res:{}}),h=D(),m=[["https://gh.h233.eu.org/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@X.I.U/XIU2] 提供"],["https://gh.ddlc.top/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@mtr-static-official] 提供"],["https://dl.ghpig.top/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [feizhuqwq.com] 提供"],["https://slink.ltd/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [知了小站] 提供"],["https://gh.con.sh/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [佚名] 提供"],["https://cors.isteed.cc/github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@Lufs's] 提供"],["https://hub.gitmirror.com/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [GitMirror] 提供"],["https://sciproxy.com/github.com","[美国 Cloudflare CDN] - 该公益加速源由 [sciproxy.com] 提供"],["https://ghproxy.cc/https://github.com","[美国 洛杉矶] - 该公益加速源由 [@yionchiii lau] 提供"],["https://cf.ghproxy.cc/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@yionchiii lau] 提供"],["https://gh.jiasu.in/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@0-RTT] 提供"],["https://dgithub.xyz","[美国 西雅图] - 该公益加速源由 [dgithub.xyz] 提供"],["https://download.nuaa.cf","[美国 洛杉矶] - 该公益加速源由 [FastGit 群组成员] 提供"],["https://download.scholar.rr.nu","[美国 纽约] - 该公益加速源由 [FastGit 群组成员] 提供"],["https://download.yzuu.cf","[美国 纽约] - 该公益加速源由 [FastGit 群组成员] 提供"]];N(()=>{fetch("https://api.github.com/repos/RPGLogs/Uploaders-fflogs/releases/latest",{method:"GET"}).then(t=>{if(t.ok)return t.json();throw t.status}).then(t=>{_.close(),h.value=t.assets.find(d=>/v.+\.exe$/.test(d.name)).name,o.res=t}).catch(t=>{t.status===403?p("您的网络环境不允许访问GitHub API，请检查网络设置。"):p(t)})});function p(t){_.fire({icon:"error",title:"错误",text:t})}return(t,d)=>{const g=E,C=G,b=S;return n(),i("div",P,[r(b,null,{default:c(()=>[r(C,null,{default:c(()=>[$,e("h2",null,"最新版本："+l(s(o).res.tag_name||"loading"),1),e("h2",null,"更新时间："+l(s(o).res.published_at||"loading"),1),s(o).res.tag_name?(n(),i("h3",M," 加速节点：（挨个试试，总有一个能用的） ")):x("",!0),e("div",R,[(n(),i(v,null,k(m,(u,f)=>L(r(g,{key:f,href:`${u[0]}/RPGLogs/Uploaders-fflogs/releases/download/v${s(o).res.name}/${s(h)}`,type:"primary","m-r-8px":""},{default:c(()=>[e("span",null,l((f+1).toString().padStart(2,"0"))+"."+l(u[1])+"节点",1)]),_:2},1032,["href"]),[[U,s(o).res.tag_name]])),64))])]),_:1})]),_:1})])}}});const q=z(T,[["__scopeId","data-v-dd54f427"]]);export{q as default};
