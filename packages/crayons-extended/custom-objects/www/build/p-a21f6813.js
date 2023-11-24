const t="crayons-custom-objects";let e,n,l,s=!1,o=!1,i=!1,r=!1,c=null,f=!1;const u="undefined"!=typeof window?window:{},a=u.CSS,$=u.document||{head:{}},d=u.HTMLElement||class{},h={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},m=(()=>($.head.attachShadow+"").indexOf("[native")>-1)(),y=t=>Promise.resolve(t),p=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(t){}return!1})(),b=(t,e,n)=>{n&&n.map((([n,l,s])=>{const o=t,i=w(e,s),r=g(n);h.ael(o,l,i,r),(e.o=e.o||[]).push((()=>h.rel(o,l,i,r)))}))},w=(t,e)=>n=>{try{256&t.t?t.i[e](n):(t.u=t.u||[]).push([e,n])}catch(l){Et(l)}},g=t=>0!=(2&t),v="http://www.w3.org/1999/xlink",j=new WeakMap,k=(t,e,n)=>{let l=It.get(t);p&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=e:l.replaceSync(e)):l=e,It.set(t,l)},O=(t,e)=>{let n=S(e);const l=It.get(n);if(t=11===t.nodeType?t:$,l)if("string"==typeof l){let e,s=j.get(t=t.head||t);s||j.set(t,s=new Set),s.has(n)||(t.host&&(e=t.querySelector(`[sty-id="${n}"]`))?e.innerHTML=l:(e=$.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link"))),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n},S=t=>"sc-"+t.$,_=t=>t.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),x={},C=t=>"object"==(t=typeof t)||"function"===t,M=(t,e,...n)=>{let l=null,s=null,o=null,i=!1,r=!1;const c=[],f=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof t&&!C(l))&&(l+=""),i&&r?c[c.length-1].h+=l:c.push(i?N(null,l):l),r=i)};if(f(n),e){e.key&&(s=e.key),e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}}if("function"==typeof t)return t(null===e?{}:e,c,E);const u=N(t,null);return u.m=e,c.length>0&&(u.p=c),u.g=s,u.v=o,u},N=(t,e)=>({t:0,j:t,h:e,k:null,p:null,m:null,g:null,v:null}),R={},E={forEach:(t,e)=>t.map(P).forEach(e),map:(t,e)=>t.map(P).map(e).map(T)},P=t=>({vattrs:t.m,vchildren:t.p,vkey:t.g,vname:t.v,vtag:t.j,vtext:t.h}),T=t=>{if("function"==typeof t.vtag){const e=Object.assign({},t.vattrs);return t.vkey&&(e.key=t.vkey),t.vname&&(e.name=t.vname),M(t.vtag,e,...t.vchildren||[])}const e=N(t.vtag,t.vtext);return e.m=t.vattrs,e.p=t.vchildren,e.g=t.vkey,e.v=t.vname,e},I=(t,e,n,l,s,o)=>{if(n!==l){let r=Rt(t,e),c=e.toLowerCase();if("class"===e){const e=t.classList,s=U(n),o=U(l);e.remove(...s.filter((t=>t&&!o.includes(t)))),e.add(...o.filter((t=>t&&!s.includes(t))))}else if("style"===e){for(const e in n)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)n&&l[e]===n[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("key"===e);else if("ref"===e)l&&l(t);else if(r||"o"!==e[0]||"n"!==e[1]){const f=C(l);if((r||f&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{const s=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(i){}let u=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(e=c,u=!0),null==l||!1===l?!1===l&&""!==t.getAttribute(e)||(u?t.removeAttributeNS(v,e):t.removeAttribute(e)):(!r||4&o||s)&&!f&&(l=!0===l?"":l,u?t.setAttributeNS(v,e,l):t.setAttribute(e,l))}else e="-"===e[2]?e.slice(3):Rt(u,c)?c.slice(2):c[2]+e.slice(3),n&&h.rel(t,e,n,!1),l&&h.ael(t,e,l,!1)}},L=/\s/,U=t=>t?t.split(L):[],W=(t,e,n,l)=>{const s=11===e.k.nodeType&&e.k.host?e.k.host:e.k,o=t&&t.m||x,i=e.m||x;for(l in o)l in i||I(s,l,o[l],void 0,n,e.t);for(l in i)I(s,l,o[l],i[l],n,e.t)},A=(t,o,c,f)=>{const u=o.p[c];let a,d,h,m=0;if(s||(i=!0,"slot"===u.j&&(e&&f.classList.add(e+"-s"),u.t|=u.p?2:1)),null!==u.h)a=u.k=$.createTextNode(u.h);else if(1&u.t)a=u.k=$.createTextNode("");else{if(r||(r="svg"===u.j),a=u.k=$.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&u.t?"slot-fb":u.j),r&&"foreignObject"===u.j&&(r=!1),W(null,u,r),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),u.p)for(m=0;m<u.p.length;++m)d=A(t,u,m,a),d&&a.appendChild(d);"svg"===u.j?r=!1:"foreignObject"===a.tagName&&(r=!0)}return a["s-hn"]=l,3&u.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=u.v||"",h=t&&t.p&&t.p[c],h&&h.j===u.j&&t.k&&D(t.k,!1)),a},D=(t,e)=>{h.t|=1;const n=t.childNodes;for(let s=n.length-1;s>=0;s--){const t=n[s];t["s-hn"]!==l&&t["s-ol"]&&(z(t).insertBefore(t,V(t)),t["s-ol"].remove(),t["s-ol"]=void 0,i=!0),e&&D(t,e)}h.t&=-2},F=(t,e,n,s,o,i)=>{let r,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=A(null,n,o,t),r&&(s[o].k=r,c.insertBefore(r,V(e))))},q=(t,e,n,l,s)=>{for(;e<=n;++e)(l=t[e])&&(s=l.k,X(l),o=!0,s["s-ol"]?s["s-ol"].remove():D(s,!0),s.remove())},H=(t,e)=>t.j===e.j&&("slot"===t.j?t.v===e.v:t.g===e.g),V=t=>t&&t["s-ol"]||t,z=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,B=(t,e)=>{const n=e.k=t.k,l=t.p,s=e.p,o=e.j,i=e.h;let c;null===i?(r="svg"===o||"foreignObject"!==o&&r,"slot"===o||W(t,e,r),null!==l&&null!==s?((t,e,n,l)=>{let s,o,i=0,r=0,c=0,f=0,u=e.length-1,a=e[0],$=e[u],d=l.length-1,h=l[0],m=l[d];for(;i<=u&&r<=d;)if(null==a)a=e[++i];else if(null==$)$=e[--u];else if(null==h)h=l[++r];else if(null==m)m=l[--d];else if(H(a,h))B(a,h),a=e[++i],h=l[++r];else if(H($,m))B($,m),$=e[--u],m=l[--d];else if(H(a,m))"slot"!==a.j&&"slot"!==m.j||D(a.k.parentNode,!1),B(a,m),t.insertBefore(a.k,$.k.nextSibling),a=e[++i],m=l[--d];else if(H($,h))"slot"!==a.j&&"slot"!==m.j||D($.k.parentNode,!1),B($,h),t.insertBefore($.k,a.k),$=e[--u],h=l[++r];else{for(c=-1,f=i;f<=u;++f)if(e[f]&&null!==e[f].g&&e[f].g===h.g){c=f;break}c>=0?(o=e[c],o.j!==h.j?s=A(e&&e[r],n,c,t):(B(o,h),e[c]=void 0,s=o.k),h=l[++r]):(s=A(e&&e[r],n,r,t),h=l[++r]),s&&z(a.k).insertBefore(s,V(a.k))}i>u?F(t,null==l[d+1]?null:l[d+1].k,n,l,r,d):r>d&&q(e,i,u)})(n,l,e,s):null!==s?(null!==t.h&&(n.textContent=""),F(n,null,e,s,0,s.length-1)):null!==l&&q(l,0,l.length-1),r&&"svg"===o&&(r=!1)):(c=n["s-cr"])?c.parentNode.textContent=i:t.h!==i&&(n.data=i)},G=t=>{const e=t.childNodes;let n,l,s,o,i,r;for(l=0,s=e.length;l<s;l++)if(n=e[l],1===n.nodeType){if(n["s-sr"])for(i=n["s-sn"],n.hidden=!1,o=0;o<s;o++)if(r=e[o].nodeType,e[o]["s-hn"]!==n["s-hn"]||""!==i){if(1===r&&i===e[o].getAttribute("slot")){n.hidden=!0;break}}else if(1===r||3===r&&""!==e[o].textContent.trim()){n.hidden=!0;break}G(n)}},J=[],K=t=>{let e,n,l,s,i,r,c=0;const f=t.childNodes,u=f.length;for(;c<u;c++){if(e=f[c],e["s-sr"]&&(n=e["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=e["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(Q(n,s)?(i=J.find((t=>t.O===n)),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.S=e:J.push({S:e,O:n}),n["s-sr"]&&J.map((t=>{Q(t.O,n["s-sn"])&&(i=J.find((t=>t.O===n)),i&&!t.S&&(t.S=i.S))}))):J.some((t=>t.O===n))||J.push({O:n}));1===e.nodeType&&K(e)}},Q=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,X=t=>{t.m&&t.m.ref&&t.m.ref(null),t.p&&t.p.map(X)},Y=t=>Ct(t)._,Z=(t,e,n)=>{const l=Y(t);return{emit:t=>tt(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},tt=(t,e,n)=>{const l=h.ce(e,n);return t.dispatchEvent(l),l},et=(t,e)=>{e&&!t.C&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.C=e)))},nt=(t,e)=>{if(t.t|=16,!(4&t.t))return et(t,t.M),qt((()=>lt(t,e)));t.t|=512},lt=(t,e)=>{const n=t.i;let l;return e?(t.t|=256,t.u&&(t.u.map((([t,e])=>ut(n,t,e))),t.u=null),l=ut(n,"componentWillLoad")):l=ut(n,"componentWillUpdate"),at(l,(()=>st(t,n,e)))},st=async(t,e,n)=>{const l=t._,s=l["s-rc"];n&&(t=>{const e=t.N,n=t._,l=e.t,s=O(m&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(t);ot(t,e),s&&(s.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>rt(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},ot=(t,r)=>{try{c=r,r=r.render(),t.t&=-17,t.t|=2,((t,r)=>{const c=t._,f=t.N,u=t.R||N(null,null),a=(t=>t&&t.j===R)(r)?r:M(null,null,r);if(l=c.tagName,f.P&&(a.m=a.m||{},f.P.map((([t,e])=>a.m[e]=c[t]))),a.j=null,a.t|=4,t.R=a,a.k=u.k=c.shadowRoot||c,e=c["s-sc"],n=c["s-cr"],s=m&&0!=(1&f.t),o=!1,B(u,a),h.t|=1,i){let t,e,n,l,s,o;K(a.k);let i=0;for(;i<J.length;i++)t=J[i],e=t.O,e["s-ol"]||(n=$.createTextNode(""),n["s-nr"]=e,e.parentNode.insertBefore(e["s-ol"]=n,e));for(i=0;i<J.length;i++)if(t=J[i],e=t.O,t.S){for(l=t.S.parentNode,s=t.S.nextSibling,n=e["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===e["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==e.parentNode||e.nextSibling!==s)&&e!==s&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),l.insertBefore(e,s))}else 1===e.nodeType&&(e.hidden=!0)}o&&G(a.k),h.t&=-2,J.length=0})(t,r)}catch(f){Et(f,t._)}return c=null,null},it=()=>c,rt=t=>{const e=t._,n=t.i,l=t.M;ut(n,"componentDidRender"),64&t.t?ut(n,"componentDidUpdate"):(t.t|=64,$t(e),ut(n,"componentDidLoad"),t.T(e),l||ft()),t.I(e),t.C&&(t.C(),t.C=void 0),512&t.t&&Ft((()=>nt(t,!1))),t.t&=-517},ct=t=>{{const e=Ct(t),n=e._.isConnected;return n&&2==(18&e.t)&&nt(e,!1),n}},ft=()=>{$t($.documentElement),Ft((()=>tt(u,"appload",{detail:{namespace:"crayons-custom-objects"}})))},ut=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){Et(l)}},at=(t,e)=>t&&t.then?t.then(e):e(),$t=t=>t.classList.add("hydrated"),dt=(t,e,n,l,s,o,i)=>{let r,c,f,u;if(1===o.nodeType){for(r=o.getAttribute("c-id"),r&&(c=r.split("."),c[0]!==i&&"0"!==c[0]||(f={t:0,L:c[0],U:c[1],W:c[2],A:c[3],j:o.tagName.toLowerCase(),k:o,m:null,p:null,g:null,v:null,h:null},e.push(f),o.removeAttribute("c-id"),t.p||(t.p=[]),t.p[f.A]=f,t=f,l&&"0"===f.W&&(l[f.A]=f.k))),u=o.childNodes.length-1;u>=0;u--)dt(t,e,n,l,s,o.childNodes[u],i);if(o.shadowRoot)for(u=o.shadowRoot.childNodes.length-1;u>=0;u--)dt(t,e,n,l,s,o.shadowRoot.childNodes[u],i)}else if(8===o.nodeType)c=o.nodeValue.split("."),c[1]!==i&&"0"!==c[1]||(r=c[0],f={t:0,L:c[1],U:c[2],W:c[3],A:c[4],k:o,m:null,p:null,g:null,v:null,j:null,h:null},"t"===r?(f.k=o.nextSibling,f.k&&3===f.k.nodeType&&(f.h=f.k.textContent,e.push(f),o.remove(),t.p||(t.p=[]),t.p[f.A]=f,l&&"0"===f.W&&(l[f.A]=f.k))):f.L===i&&("s"===r?(f.j="slot",o["s-sn"]=c[5]?f.v=c[5]:"",o["s-sr"]=!0,l&&(f.k=$.createElement(f.j),f.v&&f.k.setAttribute("name",f.v),o.parentNode.insertBefore(f.k,o),o.remove(),"0"===f.W&&(l[f.A]=f.k)),n.push(f),t.p||(t.p=[]),t.p[f.A]=f):"r"===r&&(l?o.remove():(s["s-cr"]=o,o["s-cn"]=!0))));else if(t&&"style"===t.j){const e=N(null,o.textContent);e.k=o,e.A="0",t.p=[e]}},ht=(t,e)=>{if(1===t.nodeType){let n=0;for(;n<t.childNodes.length;n++)ht(t.childNodes[n],e);if(t.shadowRoot)for(n=0;n<t.shadowRoot.childNodes.length;n++)ht(t.shadowRoot.childNodes[n],e)}else if(8===t.nodeType){const n=t.nodeValue.split(".");"o"===n[0]&&(e.set(n[1]+"."+n[2],t),t.nodeValue="",t["s-en"]=n[3])}},mt=(t,e,n)=>{if(e.D){t.watchers&&(e.F=t.watchers);const l=Object.entries(e.D),s=t.prototype;if(l.map((([t,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,t,{get(){return((t,e)=>Ct(this).q.get(e))(0,t)},set(n){((t,e,n,l)=>{const s=Ct(t),o=s._,i=s.q.get(e),r=s.t,c=s.i;if(n=((t,e)=>null==t||C(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?t+"":t)(n,l.D[e][0]),(!(8&r)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(s.q.set(e,n),c)){if(l.F&&128&r){const t=l.F[e];t&&t.map((t=>{try{c[t](n,i,e)}catch(l){Et(l,o)}}))}2==(18&r)&&nt(s,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,t,{value(...e){const n=Ct(this);return n.H.then((()=>n.i[t](...e)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(t,e,l){h.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e))l=this[e],delete this[e];else if(s.hasOwnProperty(e)&&"number"==typeof this[e]&&this[e]==l)return;this[e]=(null!==l||"boolean"!=typeof this[e])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,l])=>{const s=l[1]||t;return n.set(s,t),512&l[0]&&e.P.push([t,s]),s}))}}return t},yt=t=>{ut(t,"connectedCallback")},pt=t=>{if(0==(1&h.t)){const e=Ct(t),n=e.N,l=()=>{};if(1&e.t)b(t,e,n.V),yt(e.i);else{let l;if(e.t|=1,l=t.getAttribute("s-id"),l){if(m&&1&n.t){const e=O(t.shadowRoot,n);t.classList.remove(e+"-h",e+"-s")}((t,e,n,l)=>{const s=t.shadowRoot,o=[],i=s?[]:null,r=l.R=N(e,null);h.B||ht($.body,h.B=new Map),t["s-id"]=n,t.removeAttribute("s-id"),dt(r,o,[],i,t,t,n),o.map((t=>{const n=t.L+"."+t.U,l=h.B.get(n),o=t.k;l&&m&&""===l["s-en"]&&l.parentNode.insertBefore(o,l.nextSibling),s||(o["s-hn"]=e,l&&(o["s-ol"]=l,o["s-ol"]["s-nr"]=o)),h.B.delete(n)})),s&&i.map((t=>{t&&s.appendChild(t)}))})(t,n.$,l,e)}l||12&n.t&&bt(t);{let n=t;for(;n=n.parentNode||n.host;)if(1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){et(e,e.M=n);break}}n.D&&Object.entries(n.D).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),Ft((()=>(async(t,e,n,l,s)=>{if(0==(32&e.t)){{if(e.t|=32,(s=Tt(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.F=s.watchers,mt(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(r){Et(r)}e.t&=-9,e.t|=128,t(),yt(e.i)}if(s.style){let t=s.style;const e=S(n);if(!It.has(e)){const l=()=>{};8&n.t&&(t=await __sc_import_crayons_custom_objects("./p-b79905f7.js").then((n=>n.scopeCss(t,e,!1)))),k(e,t,!!(1&n.t)),l()}}}const o=e.M,i=()=>nt(e,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,e,n)))}l()}},bt=t=>{const e=t["s-cr"]=$.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)},wt=t=>{const e=t.cloneNode;t.cloneNode=function(t){const n=this,l=n.shadowRoot&&m,s=e.call(n,!!l&&t);if(!l&&t){let t,e,l=0;const o=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si"];for(;l<n.childNodes.length;l++)t=n.childNodes[l]["s-nr"],e=o.every((t=>!n.childNodes[l][t])),t&&(s.__appendChild?s.__appendChild(t.cloneNode(!0)):s.appendChild(t.cloneNode(!0))),e&&s.appendChild(n.childNodes[l].cloneNode(!0))}return s}},gt=t=>{t.__appendChild=t.appendChild,t.appendChild=function(t){const e=t["s-sn"]=jt(t),n=kt(this.childNodes,e);if(n){const l=Ot(n,e),s=l[l.length-1];return s.parentNode.insertBefore(t,s.nextSibling)}return this.__appendChild(t)}},vt=(t,e)=>{class n extends Array{item(t){return this[t]}}if(8&e.t){const e=t.__lookupGetter__("childNodes");Object.defineProperty(t,"children",{get(){return this.childNodes.map((t=>1===t.nodeType))}}),Object.defineProperty(t,"childElementCount",{get:()=>t.children.length}),Object.defineProperty(t,"childNodes",{get(){const t=e.call(this);if(0==(1&h.t)&&2&Ct(this).t){const e=new n;for(let n=0;n<t.length;n++){const l=t[n]["s-nr"];l&&e.push(l)}return e}return n.from(t)}})}},jt=t=>t["s-sn"]||1===t.nodeType&&t.getAttribute("slot")||"",kt=(t,e)=>{let n,l=0;for(;l<t.length;l++){if(n=t[l],n["s-sr"]&&n["s-sn"]===e)return n;if(n=kt(n.childNodes,e),n)return n}return null},Ot=(t,e)=>{const n=[t];for(;(t=t.nextSibling)&&t["s-sn"]===e;)n.push(t);return n},St=(t,e={})=>{const n=[],l=e.exclude||[],s=u.customElements,o=$.head,i=o.querySelector("meta[charset]"),r=$.createElement("style"),c=[],f=$.querySelectorAll("[sty-id]");let a,d=!0,y=0;for(Object.assign(h,e),h.l=new URL(e.resourcesUrl||"./",$.baseURI).href,h.t|=2;y<f.length;y++)k(f[y].getAttribute("sty-id"),_(f[y].innerHTML),!0);t.map((t=>{t[1].map((e=>{const o={t:e[0],$:e[1],D:e[2],V:e[3]};o.D=e[2],o.V=e[3],o.P=[],o.F={},!m&&1&o.t&&(o.t|=8);const i=o.$,r=class extends HTMLElement{constructor(t){super(t),Nt(t=this,o),1&o.t&&(m?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t)),vt(t,o)}connectedCallback(){a&&(clearTimeout(a),a=null),d?c.push(this):h.jmp((()=>pt(this)))}disconnectedCallback(){h.jmp((()=>(()=>{if(0==(1&h.t)){const t=Ct(this),e=t.i;t.o&&(t.o.map((t=>t())),t.o=void 0),ut(e,"disconnectedCallback")}})()))}componentOnReady(){return Ct(this).G}};wt(r.prototype),gt(r.prototype),o.J=t[0],l.includes(i)||s.get(i)||(n.push(i),s.define(i,mt(r,o,1)))}))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,i?i.nextSibling:o.firstChild),d=!1,c.length?c.map((t=>t.connectedCallback())):h.jmp((()=>a=setTimeout(ft,30)))},_t=(t,e)=>e,xt=new WeakMap,Ct=t=>xt.get(t),Mt=(t,e)=>xt.set(e.i=t,e),Nt=(t,e)=>{const n={t:0,_:t,N:e,q:new Map};return n.H=new Promise((t=>n.I=t)),n.G=new Promise((t=>n.T=t)),t["s-p"]=[],t["s-rc"]=[],b(t,n,e.V),xt.set(t,n)},Rt=(t,e)=>e in t,Et=(t,e)=>(0,console.error)(t,e),Pt=new Map,Tt=t=>{const e=t.$.replace(/-/g,"_"),n=t.J,l=Pt.get(n);return l?l[e]:__sc_import_crayons_custom_objects(`./${n}.entry.js`).then((t=>(Pt.set(n,t),t[e])),Et)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},It=new Map,Lt=[],Ut=[],Wt=(t,e)=>n=>{t.push(n),f||(f=!0,e&&4&h.t?Ft(Dt):h.raf(Dt))},At=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){Et(e)}t.length=0},Dt=()=>{At(Lt),At(Ut),(f=Lt.length>0)&&h.raf(Dt)},Ft=t=>y().then(t),qt=Wt(Ut,!0);export{a as C,_t as F,d as H,t as N,y as a,St as b,Z as c,$ as d,it as e,ct as f,Y as g,M as h,R as i,h as p,Mt as r,u as w}