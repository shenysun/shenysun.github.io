import{j as l,f,g as y,k as g,R as o,s as m}from"./index-pSt_3-sb.js";const x=l("pages",()=>{const t=f([{id:1,title:"第一章",content:"第一章内容",type:"section"},{id:2,title:"第二章",content:"第二章内容",type:"section"},{id:3,title:"第三章",content:"第三章内容",type:"section"},{id:4,title:"第四章",content:"第四章内容",type:"section"},{id:5,title:"第五章",content:"第五章内容",type:"section"},{id:1,title:"第一题",content:"第一题内容",type:"question"},{id:6,title:"第六章",content:"第六章内容",type:"section"}]),n=y(),a=g();function p(s){const u=n.name===o.Section?"section":"question",r=+n.params.pageId,i=t.value.find(c=>c.id===r&&c.type===u);if(!i)return;const d=t.value.indexOf(i),e=t.value[d+(s==="left"?-1:1)];if(!e){m({message:s==="left"?"已经是第一页了":"已经是最后一页了",position:"top"});return}a.push({name:e.type==="section"?o.Section:o.Question,params:{pageId:e.id}})}return{pptRoadMap:t,pageControl:p}});export{x as u};