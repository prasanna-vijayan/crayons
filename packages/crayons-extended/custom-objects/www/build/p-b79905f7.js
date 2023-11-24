/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
const s=/(-shadowcsshost)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))?([^,{]*)/gim,t=/(-shadowcsscontext)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))?([^,{]*)/gim,o=/(-shadowcssslotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))?([^,{]*)/gim,n=/-shadowcsshost-no-combinator([^\s]*)/,e=[/::shadow/g,/::content/g],c=/-shadowcsshost/gim,r=/:host/gim,h=/::slotted/gim,a=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,l=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,g=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,i=/([{}])/g,u=/(^.*?[^\\])??((:+)(.*)|$)/,m=(s,t)=>{const o=w(s);let n=0;return o.escapedString.replace(g,((...s)=>{const e=s[2];let c="",r=s[4],h="";r&&r.startsWith("{%BLOCK%")&&(c=o.blocks[n++],r=r.substring(8),h="{");const a=t({selector:e,content:c});return`${s[1]}${a.selector}${s[3]}${h}${a.content}${r}`}))},w=s=>{const t=s.split(i),o=[],n=[];let e=0,c=[];for(let r=0;r<t.length;r++){const s=t[r];"}"===s&&e--,e>0?c.push(s):(c.length>0&&(n.push(c.join("")),o.push("%BLOCK%"),c=[]),o.push(s)),"{"===s&&e++}return c.length>0&&(n.push(c.join("")),o.push("%BLOCK%")),{escapedString:o.join(""),blocks:n}},$=(s,t,o)=>s.replace(t,((...s)=>{if(s[2]){const t=s[2].split(","),n=[];for(let e=0;e<t.length;e++){const c=t[e].trim();if(!c)break;n.push(o("-shadowcsshost-no-combinator",c,s[3]))}return n.join(",")}return"-shadowcsshost-no-combinator"+s[3]})),p=(s,t,o)=>s+t.replace("-shadowcsshost","")+o,_=(s,t,o)=>t.indexOf("-shadowcsshost")>-1?p(s,t,o):s+t+o+", "+t+" "+s+o,b=(s,t)=>s.replace(u,((s,o="",n,e="",c="")=>o+t+e+c)),f=(s,t,o,e)=>m(s,(s=>{let r=s.selector,h=s.content;return"@"!==s.selector[0]?r=((s,t,o,e)=>s.split(",").map((s=>e&&s.indexOf("."+e)>-1?s.trim():((s,t)=>!(s=>(s=s.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),RegExp("^("+s+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t).test(s))(s,t)?((s,t,o)=>{const e="."+(t=t.replace(/\[is=([^\]]*)\]/g,((s,...t)=>t[0]))),r=s=>{let r=s.trim();if(!r)return"";if(s.indexOf("-shadowcsshost-no-combinator")>-1)r=((s,t,o)=>{if(c.lastIndex=0,c.test(s)){const t="."+o;return s.replace(n,((s,o)=>b(o,t))).replace(c,t+" ")}return t+" "+s})(s,t,o);else{const t=s.replace(c,"");t.length>0&&(r=b(t,e))}return r},h=(s=>{const t=[];let o=0;return{content:(s=s.replace(/(\[[^\]]*\])/g,((s,n)=>{const e=`__ph-${o}__`;return t.push(n),o++,e}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((s,n,e)=>{const c=`__ph-${o}__`;return t.push(e),o++,n+c})),placeholders:t}})(s);let a,d="",l=0;const g=/( |>|\+|~(?!=))\s*/g;let i=!((s=h.content).indexOf("-shadowcsshost-no-combinator")>-1);for(;null!==(a=g.exec(s));){const t=a[1],o=s.slice(l,a.index).trim();i=i||o.indexOf("-shadowcsshost-no-combinator")>-1,d+=`${i?r(o):o} ${t} `,l=g.lastIndex}const u=s.substring(l);return i=i||u.indexOf("-shadowcsshost-no-combinator")>-1,d+=i?r(u):u,((s,t)=>t.replace(/__ph-(\d+)__/g,((t,o)=>s[+o])))(h.placeholders,d)})(s,t,o).trim():s.trim())).join(", "))(s.selector,t,o,e):(s.selector.startsWith("@media")||s.selector.startsWith("@supports")||s.selector.startsWith("@page")||s.selector.startsWith("@document"))&&(h=f(s.content,t,o,e)),{selector:r.replace(/\s{2,}/g," ").trim(),content:h}})),x=(n,c,g)=>{const i=c+"-h",u=c+"-s",w=(s=>s.match(l)||[])(n);n=(s=>s.replace(d,""))(n);const b=[];if(g){const s=s=>{const t=`/*!@___${b.length}___*/`;return b.push({placeholder:t,comment:`/*!@${s.selector}*/`}),s.selector=t+s.selector,s};n=m(n,(t=>"@"!==t.selector[0]?s(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=m(t.content,s),t):t))}const x=((n,c,d,l)=>{const g=((s,t)=>{const n="."+t+" > ",e=[];return s=s.replace(o,((...s)=>{if(s[2]){const t=s[2].trim(),o=n+t+s[3];let c="";for(let n=s[4]-1;n>=0;n--){const t=s[5][n];if("}"===t||","===t)break;c=t+c}const r=c+o,h=`${c.trimRight()}${o.trim()}`;return r.trim()!==h.trim()&&e.push({orgSelector:r,updatedSelector:`${h}, ${r}`}),o}return"-shadowcsshost-no-combinator"+s[3]})),{selectors:e,cssText:s}})(n=(s=>$(s,t,_))(n=(t=>$(t,s,p))(n=(s=>s.replace(a,"-shadowcsscontext").replace(r,"-shadowcsshost").replace(h,"-shadowcssslotted"))(n))),l);return n=(s=>e.reduce(((s,t)=>s.replace(t," ")),s))(n=g.cssText),c&&(n=f(n,c,d,l)),{cssText:(n=(n=n.replace(/-shadowcsshost-no-combinator/g,"."+d)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:g.selectors}})(n,c,i,u);return n=[x.cssText,...w].join("\n"),g&&b.forEach((({placeholder:s,comment:t})=>{n=n.replace(s,t)})),x.slottedSelectors.forEach((s=>{n=n.replace(s.orgSelector,s.updatedSelector)})),n};export{x as scopeCss}