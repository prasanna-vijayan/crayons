System.register([],(function(e){"use strict";return{execute:function(){e("c",l);var r=e("w",(function(e,r,n){var o=new MutationObserver((function(e){n(t(e,r))}));o.observe(e,{childList:true,subtree:true});return o}));var t=function(e,r){var t;e.forEach((function(e){for(var o=0;o<e.addedNodes.length;o++){t=n(e.addedNodes[o],r)||t}}));return t};var n=e("f",(function(e,r){if(e.nodeType!==1){return undefined}var t=e.tagName===r.toUpperCase()?[e]:Array.from(e.querySelectorAll(r));return t.find((function(e){return e.checked===true}))}));var o=e("r",(function(e,r,t,n){if(n===void 0){n=null}var o=e.querySelector("input.hidden-input");if(!o){o=e.ownerDocument.createElement("input");if(n){o.style.display="none";o.type="file"}else{o.type="hidden"}o.classList.add("hidden-input");e.appendChild(o)}o.name=r;if(n){o.files=n}else{o.value=t||""}}));var i=e("h",(function(e,r){if(r===void 0){r=false}return function(t){var n=t;var o=n.key||n.keyCode;if(o==="Enter"||o===13||o===32||!r&&["Spacebar"," "].indexOf(o)>=0){n.preventDefault();e(n)}}}));var a=e("t",(function(e,r,t){var n;return function(){var o=[];for(var i=0;i<arguments.length;i++){o[i]=arguments[i]}if(!n||Date.now()-n>=t){e.apply(r,o);n=Date.now()}}}));var u=e("g",(function(e){var r=[];var t=function(e,n){if(n===void 0){n=true}n&&(r=[]);e=e.shadowRoot?e.shadowRoot:e;Array.from(e.children).forEach((function(e){if(f(e)){r.push(e)}else if(e.nodeName==="SLOT"){e.assignedElements({flatten:true}).forEach((function(e){return t(e,false)}))}else if(e.children.length>0||e.shadowRoot){if(!(parseInt(e.getAttribute("tabindex"))<0)){t(e,false)}}}))};t(e);return r}));var f=function(e){if(parseInt(e.getAttribute("tabindex"))<0){return false}if(e.disabled){return false}var r=e.getBoundingClientRect();if(r.bottom===0&&r.top===0&&r.left===0&&r.right===0&&r.height===0&&r.width===0&&r.x===0&&r.y===0){return false}if(e.style.display==="none"||e.style.visibility==="hidden"||e.style.opacity===0){return false}if(e.getAttribute("role")==="button"){return true}if(e.setFocus){return true}switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden";case"BUTTON":case"SELECT":case"TEXTAREA":return true;default:return false}};var s=e("a",(function(e,r){if(r){return e.querySelector(':scope > [slot="'.concat(r,'"]'))!==null}var t=Array.from(e.childNodes);return t.some((function(e){if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!==""){return true}if(e.nodeType===e.ELEMENT_NODE){var r=e;if(!r.hasAttribute("slot")){return true}}return false}))}));var d=e("d",(function(e,r,t){var n;return function(){var o=[];for(var i=0;i<arguments.length;i++){o[i]=arguments[i]}clearTimeout(n);n=setTimeout((function(){e.apply(r,o)}),t)}}));function l(e,r,t){if(r===void 0){r=false}if(t===void 0){t=false}var n,o,i,a;var u=["onabort","onbeforecopy","onbeforecut","onbeforepaste","onblur","onchange","onclick","oncontextmenu","oncopy","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpaste","onreset","onresize","onscroll","onsearch","onselect","onselectstart","onsubmit","onunload"];var f=e.cloneNode(r);if(t){n=e.getElementsByTagName("*");o=f.getElementsByTagName("*");for(a=0;a<u.length;a++){if(e[u[a]]){f[u[a]]=e[u[a]]}}for(i=0;i<n.length;i++){for(a=0;a<u.length;a++){if(n[i][u[a]]){o[i][u[a]]=n[i][u[a]]}}}}return f}var c=e("i",(function(e,r){e++;return e>r?0:e}));var p=e("e",(function(e,r){e--;return e<0?r:e}));var v=e("j",(function(e,r){if(Array.isArray(e)){return m(e,r)}else{return e===r}}));var m=function(e,r){return Array.isArray(e)&&Array.isArray(r)&&e.length===r.length&&e.every((function(e,t){return e===r[t]}))};var h=e("b",(function(e){if(document.documentElement.dir==="rtl"){e.setAttribute("dir","rtl")}else{e.setAttribute("dir","ltr")}}));var y=e("p",{name:"popperModifierRTL",enabled:true,phase:"beforeRead",fn:function(e){var r=e.state;var t,n,o,i,a,u;if(document.documentElement.dir==="rtl"||((t=r.modifiersData["popperModifierRTL#persistent"])===null||t===void 0?void 0:t._previousDirection)){if(!((n=r.modifiersData["popperModifierRTL#persistent"])===null||n===void 0?void 0:n._skip)||((o=r.modifiersData["popperModifierRTL#persistent"])===null||o===void 0?void 0:o._previousDirection)!==document.documentElement.dir){var f={end:"start",start:"end",left:"right",right:"left"};var s=r.placement.replace(/right|left|start|end/,(function(e){return f[e]}));r.placement=s;if((i=r.options)===null||i===void 0?void 0:i.placement){r.options.placement=s}if((a=r.options)===null||a===void 0?void 0:a.modifiers){var d=r.options.modifiers.findIndex((function(e){return e.name==="flip"}));var l=r.orderedModifiers.findIndex((function(e){return e.name==="flip"}));if(r.options.modifiers[d]){var c=[];(u=r.options.modifiers[d].options.fallbackPlacements)===null||u===void 0?void 0:u.forEach((function(e){c.push(e.replace(/right|left|start|end/,(function(e){return f[e]})))}));r.options.modifiers[d].options.fallbackPlacements=c;r.orderedModifiers[l].options.fallbackPlacements=c}}if(!r.modifiersData["popperModifierRTL#persistent"]){r.modifiersData["popperModifierRTL#persistent"]={}}r.modifiersData["popperModifierRTL#persistent"]._skip=true;r.modifiersData["popperModifierRTL#persistent"]._previousDirection=document.documentElement.dir}}}})}}}));