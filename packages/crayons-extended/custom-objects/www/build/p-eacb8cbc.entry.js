import{r as t,c as e,h as s,i,g as n}from"./p-a21f6813.js";function a(t=null,e=-1,s=!0,i=!1,n=null){if(e<0||!t||t.length<=0||e>t.length-1)return n;n||(n=[]);const a=t[e].value,r=n.length>0&&n.includes(a);if(!s&&i&&r){let t=-1;const e=n.length;for(let s=0;s<e;s++)if(n[s]===a){t=s;break}n=[...n.slice(0,t),...n.slice(t+1)]}else s&&!r&&(n=i?[...n,a]:[a]);return n}const r=class{constructor(s){t(this,s),this.fwChange=e(this,"fwChange",7),this.selectedIndex=-1,this.isInputFormatArray=!1,this.multiple=!1,this.value=null,this.arrSelectedItems=null,this.label="",this.name=""}async setSelectedValues(t){this.value=t}watchSelectedValuesChangeHandler(){this.parseSelectedItems(),this.updateSelection()}keyupHandler(t){const e=this.arrChildElements;if(!e||0===e.length)return;const s=function(t,e=null,s=0,i=!1){if(!e||0===e.length)return{index:s,changeSelection:!1,selected:!1};switch(s<0&&(s=0),t){case"ArrowDown":case"ArrowRight":e[s].setAttribute("tabindex","-1"),e[s=++s%e.length].setAttribute("tabindex","0"),e[s].setFocus();break;case"ArrowUp":case"ArrowLeft":e[s].setAttribute("tabindex","-1"),e[s=0===s?e.length-1:--s].setAttribute("tabindex","0"),e[s].setFocus();break;case"Enter":case"Space":{e[s].setFocus();const t=e[s].selected;if(!i&&t)return;return{index:s,changeSelection:!0,selected:!i||!t}}}return{index:s,changeSelection:!1,selected:!1}}(t.code,this.arrChildElements,this.selectedIndex,this.multiple);if(this.selectedIndex=s.index,s.changeSelection){const t=a(e,this.selectedIndex,s.selected,this.multiple,this.arrSelectedItems);this.arrSelectedItems=[...t],this.dispatchSelectionChangeEvent()}}toggleChangeHandler(t){const e=t.detail;this.selectedIndex=e.index;const s=a(this.arrChildElements,this.selectedIndex,e.selected,this.multiple,this.arrSelectedItems);this.arrSelectedItems=s,this.dispatchSelectionChangeEvent()}componentWillLoad(){this.parseSelectedItems()}componentDidLoad(){this.arrChildElements=this.host.children,this.updateSelection(!0)}dispatchSelectionChangeEvent(){const t=this.arrSelectedItems.toString();t!==this.value&&(this.value=t,this.fwChange.emit({value:this.isInputFormatArray?[...this.arrSelectedItems]:t}))}parseSelectedItems(){const t=function(t){let e=[],s=!1;const i=t?t.toString():"";return t&&(s=!!Array.isArray(t),e=s?[...t]:""!==i?i.split(","):[]),{isArray:s,strSelectedValues:i,arrSelectedValues:e}}(this.value);this.value!==t.strSelectedValues&&(this.value=t.strSelectedValues),this.isInputFormatArray=t.isArray,this.arrSelectedItems=t.arrSelectedValues}updateSelection(t=!1){const e=function(t=null,e=!1,s=null,i=!1){if(!t||0===t.length)return-1;let n=-1,a=!1;const r=t.length;for(let o=0;o<r;o++){const r=t[o],h=r.value;r.index=o,i&&(r.isCheckbox=e);const l=!(!s||!s.includes(h));let c=l;e||(!a&&l?(a=!0,c=!0):c=!1),r.selected=c,c&&-1===n?(n=o,r.setAttribute("tabindex","0")):r.setAttribute("tabindex","-1")}return n}(this.arrChildElements,this.multiple,this.arrSelectedItems,t);-1!==e&&-1===this.selectedIndex&&(this.selectedIndex=e)}render(){return s(i,{"aria-label":this.label},s("slot",null))}get host(){return n(this)}static get watchers(){return{value:["watchSelectedValuesChangeHandler"]}}};r.style=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0;gap:12px}';export{r as fw_toggle_group}