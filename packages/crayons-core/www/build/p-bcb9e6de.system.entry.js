System.register(["./p-a53fdc53.system.js"],(function(e){"use strict";var t,i,n;return{setters:[function(e){t=e.r;i=e.h;n=e.e}],execute:function(){var s=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.menu-item{cursor:pointer;display:-ms-flexbox;display:flex;padding-inline:8px;padding-block:6px;-webkit-margin-after:4px;margin-block-end:4px;line-height:1.45;-ms-flex-align:center;align-items:center;background:var(--fw-menu-item-background, #ffffff);border:var(--fw-menu-item-border);-webkit-box-shadow:var(--fw-menu-item-box-shadow);box-shadow:var(--fw-menu-item-box-shadow);border-radius:var(--fw-menu-item-border-radius);font-size:14px;word-break:break-word;word-wrap:break-word}.menu-item:hover{background-color:#ebeff3}.menu-item:focus{background-color:#ebeff3;outline:#2c5cc5 auto 1px}.menu-item .menu-item__label{-ms-flex:1 1 auto;flex:1 1 auto}.menu-item .menu-item__prefix{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.menu-item .menu-item__prefix ::slotted(*){-webkit-margin-end:8px;margin-inline-end:8px}.menu-item .menu-item__suffix{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.menu-item .menu-item__suffix ::slotted(*){-webkit-margin-start:8px;margin-inline-start:8px}.menu-item .menu-item__check{width:24px;height:24px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;visibility:hidden}.menu-item.selected{font-weight:600;background-color:#e5f2fd}.menu-item.selected:hover,.menu-item.selected:focus{background-color:#e5f2fd}.menu-item.selected .menu-item__check{visibility:visible}';var o=e("fw_menu_item",function(){function e(e){t(this,e);this.selected=false;this.selectable=false}e.prototype.toggleSelect=function(){this.selected=!this.selected};e.prototype.render=function(){var e=this;return i("div",{class:{"menu-item":true,selected:this.selected},role:"menuitem",tabIndex:-1,onMouseDown:function(){e.selectable&&e.toggleSelect()}},i("span",{class:"menu-item__prefix"},i("slot",{name:"prefix"})),i("span",{class:"menu-item__label"},i("slot",null)),i("span",{class:"menu-item__suffix"},i("slot",{name:"suffix"})),this.selectable&&i("span",{class:"menu-item__check"},i("fw-icon",{name:"check",size:12,color:"#2C5CC5",library:"system"})))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return e}());o.style=s}}}));