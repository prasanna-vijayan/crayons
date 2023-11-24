import{r as t,h as n,i as o}from"./p-a21f6813.js";import{c as e}from"./p-c5b91d96.js";function i(t){const n=t.target;document.querySelectorAll(".fw-toast-stack").forEach((t=>{t.contains(n)&&t.removeChild(n)}))}const s=class{constructor(n){t(this,n),this.position="top-center",this.timeout=4e3,this.type="warning",this.actionLinkText="",this.sticky=!1}componentWillLoad(){this.toastContainer=function(t){Object.prototype.hasOwnProperty.call(window,"fwRemoveToast")||window.addEventListener("fwRemoveToast",i);const n=document.querySelector(`.fw-toast-stack.${t.position}`);let o;return n?o=n:(o=document.createElement("div"),o.className=`fw-toast-stack ${t.position}`,o.style.cssText=`position: fixed;\n      z-index: 950;\n      top: 10px;\n      ${function(t){switch(t){case"top-left":return"left: 10px;";case"top-right":return"right: 10px;";case"top-center":return"left: calc(50% - 200px);"}}(t.position)}\n      background-color: $color-milk;\n      max-width: 100%;\n      max-height: 100%;`,document.body.appendChild(o)),o}(this)}async trigger(t){t.shouldPreventDuplicates&&function(t,n){let o=!1;return Array.from(t).forEach((t=>{var e,i;(null===(e=t.attributes.getNamedItem("content"))||void 0===e?void 0:e.value)===n.content&&(null===(i=t.attributes.getNamedItem("type"))||void 0===i?void 0:i.value)===n.type&&(o=!0)})),o}(this.toastContainer.children,t)||function(t={},n,o){const i=function(t={},n){var o,e,i,s,c,r;return Object.assign({},{timeout:null!==(o=t.timeout)&&void 0!==o?o:n.timeout,type:null!==(e=t.type)&&void 0!==e?e:n.type,content:null!==(i=t.content)&&void 0!==i?i:n.content,actionLinkText:null!==(s=t.actionLinkText)&&void 0!==s?s:n.actionLinkText,sticky:null!==(c=t.sticky)&&void 0!==c?c:n.sticky,pauseOnHover:null!==(r=t.pauseOnHover)&&void 0!==r?r:n.pauseOnHover,open:!0})}(t,o);let s;if(t.contentref){const n=document.querySelector(t.contentref);s=e(n,!0,!0),i.content=""}else s=document.createElement("fw-toast-message");Object.entries(i).map((([t,n])=>{n&&s.setAttribute(t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),n)})),n.appendChild(s)}(t,this.toastContainer,this)}render(){return n(o,null,n("slot",null))}};export{s as fw_toast}