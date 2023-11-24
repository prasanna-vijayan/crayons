const e=(e,o,t)=>{const r=new MutationObserver((e=>{t(n(e,o))}));return r.observe(e,{childList:!0,subtree:!0}),r},n=(e,n)=>{let t;return e.forEach((e=>{for(let r=0;r<e.addedNodes.length;r++)t=o(e.addedNodes[r],n)||t})),t},o=(e,n)=>{if(1===e.nodeType)return(e.tagName===n.toUpperCase()?[e]:Array.from(e.querySelectorAll(n))).find((e=>!0===e.checked))},t=(e,n,o,t=null)=>{let r=e.querySelector("input.hidden-input");r||(r=e.ownerDocument.createElement("input"),t?(r.style.display="none",r.type="file"):r.type="hidden",r.classList.add("hidden-input"),e.appendChild(r)),r.name=n,t?r.files=t:r.value=o||""},r=(e,n=!1)=>o=>{const t=o,r=t.key||t.keyCode;("Enter"===r||13===r||32===r||!n&&["Spacebar"," "].indexOf(r)>=0)&&(t.preventDefault(),e(t))},a=(e,n,o)=>{let t;return(...r)=>{(!t||Date.now()-t>=o)&&(e.apply(n,r),t=Date.now())}},s=e=>{let n=[];const o=(e,t=!0)=>{t&&(n=[]),e=e.shadowRoot?e.shadowRoot:e,Array.from(e.children).forEach((e=>{i(e)?n.push(e):"SLOT"===e.nodeName?e.assignedElements({flatten:!0}).forEach((e=>o(e,!1))):(e.children.length>0||e.shadowRoot)&&(parseInt(e.getAttribute("tabindex"))<0||o(e,!1))}))};return o(e),n},i=e=>{if(parseInt(e.getAttribute("tabindex"))<0)return!1;if(e.disabled)return!1;const n=e.getBoundingClientRect();if(0===n.bottom&&0===n.top&&0===n.left&&0===n.right&&0===n.height&&0===n.width&&0===n.x&&0===n.y)return!1;if("none"===e.style.display||"hidden"===e.style.visibility||0===e.style.opacity)return!1;if("button"===e.getAttribute("role"))return!0;if(e.setFocus)return!0;switch(e.nodeName){case"A":return!!e.href&&"ignore"!==e.rel;case"INPUT":return"hidden"!==e.type;case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},u=(e,n)=>n?null!==e.querySelector(`:scope > [slot="${n}"]`):Array.from(e.childNodes).some((e=>e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim()||e.nodeType===e.ELEMENT_NODE&&!e.hasAttribute("slot"))),l=(e,n,o)=>{let t;return(...r)=>{clearTimeout(t),t=setTimeout((()=>{e.apply(n,r)}),o)}};function d(e,n=!1,o=!1){let t,r,a,s;const i=["onabort","onbeforecopy","onbeforecut","onbeforepaste","onblur","onchange","onclick","oncontextmenu","oncopy","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpaste","onreset","onresize","onscroll","onsearch","onselect","onselectstart","onsubmit","onunload"],u=e.cloneNode(n);if(o){for(t=e.getElementsByTagName("*"),r=u.getElementsByTagName("*"),s=0;s<i.length;s++)e[i[s]]&&(u[i[s]]=e[i[s]]);for(a=0;a<t.length;a++)for(s=0;s<i.length;s++)t[a][i[s]]&&(r[a][i[s]]=t[a][i[s]])}return u}const c=(e,n)=>++e>n?0:e,f=(e,n)=>--e<0?n:e,p=(e,n)=>Array.isArray(e)?v(e,n):e===n,v=(e,n)=>Array.isArray(e)&&Array.isArray(n)&&e.length===n.length&&e.every(((e,o)=>e===n[o])),b=e=>{"rtl"===document.documentElement.dir?e.setAttribute("dir","rtl"):e.setAttribute("dir","ltr")},h={name:"popperModifierRTL",enabled:!0,phase:"beforeRead",fn({state:e}){var n,o,t,r,a,s;if(("rtl"===document.documentElement.dir||(null===(n=e.modifiersData["popperModifierRTL#persistent"])||void 0===n?void 0:n._previousDirection))&&(!(null===(o=e.modifiersData["popperModifierRTL#persistent"])||void 0===o?void 0:o._skip)||(null===(t=e.modifiersData["popperModifierRTL#persistent"])||void 0===t?void 0:t._previousDirection)!==document.documentElement.dir)){const n={end:"start",start:"end",left:"right",right:"left"},o=e.placement.replace(/right|left|start|end/,(e=>n[e]));if(e.placement=o,(null===(r=e.options)||void 0===r?void 0:r.placement)&&(e.options.placement=o),null===(a=e.options)||void 0===a?void 0:a.modifiers){const o=e.options.modifiers.findIndex((e=>"flip"===e.name)),t=e.orderedModifiers.findIndex((e=>"flip"===e.name));if(e.options.modifiers[o]){const r=[];null===(s=e.options.modifiers[o].options.fallbackPlacements)||void 0===s||s.forEach((e=>{r.push(e.replace(/right|left|start|end/,(e=>n[e])))})),e.options.modifiers[o].options.fallbackPlacements=r,e.orderedModifiers[t].options.fallbackPlacements=r}}e.modifiersData["popperModifierRTL#persistent"]||(e.modifiersData["popperModifierRTL#persistent"]={}),e.modifiersData["popperModifierRTL#persistent"]._skip=!0,e.modifiersData["popperModifierRTL#persistent"]._previousDirection=document.documentElement.dir}}};export{u as a,b,d as c,l as d,f as e,o as f,s as g,r as h,c as i,p as j,h as p,t as r,a as t,e as w}