System.register(["./p-a53fdc53.system.js"],(function(e){"use strict";var t,i,a,r;return{setters:[function(e){t=e.r;i=e.h;a=e.i;r=e.e}],execute:function(){var n=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}.drag-item{display:-ms-flexbox;display:flex;background:#ffffff;border:1px solid #ebeff3;-webkit-box-shadow:0px 2px 4px rgba(18, 52, 77, 0.06);box-shadow:0px 2px 4px rgba(18, 52, 77, 0.06);border-radius:4px;padding-inline:12px;padding-block:8px;-ms-flex-align:center;align-items:center;margin-inline:0px;margin-block:8px}.drag-item .drag-item__label{-ms-flex:1 1 auto;flex:1 1 auto}.drag-item .drag-item__prefix{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.drag-item .drag-item__suffix{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.drag-item .drag-icon{-webkit-padding-end:12px;padding-inline-end:12px}.drag-item .drag-icon.drag:hover,.drag-item .drag-icon.drag:focus{cursor:-webkit-grab;cursor:grab}';var o=e("fw_drag_item",function(){function e(e){t(this,e);this.draggable=false;this.disabled=false;this.showDragIcon=true}e.prototype.componentDidLoad=function(){var e,t;if(this.pinned)return;(e=this.dragIcon)===null||e===void 0?void 0:e.addEventListener("mousedown",this.toggleDraggable.bind(this));(t=this.dragIcon)===null||t===void 0?void 0:t.addEventListener("mouseout",this.toggleDraggable.bind(this))};e.prototype.toggleDraggable=function(){this.draggable=!this.draggable};e.prototype.disconnectedCallback=function(){var e,t;(e=this.dragIcon)===null||e===void 0?void 0:e.removeEventListener("mousedown",this.toggleDraggable);(t=this.dragIcon)===null||t===void 0?void 0:t.removeEventListener("mouseout",this.toggleDraggable)};e.prototype.render=function(){var e=this;return i(a,{draggable:this.draggable},i("div",{class:{"drag-item":true},draggable:this.draggable},this.showDragIcon&&i("span",{class:"drag-item__prefix"},i("fw-icon",{class:{"drag-icon":true,drag:!this.pinned},name:!this.pinned?"drag":"lock",ref:function(t){return e.dragIcon=t}})),i("span",{class:"drag-item__label"},i("slot",null)),i("span",{class:"drag-item__suffix"},i("slot",{name:"suffix"}))))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return e}());o.style=n}}}));