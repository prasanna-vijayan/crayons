System.register(["./p-17854542.system.js","./p-8965658f.system.js","./p-a69cb9a8.system.js"],(function(e){"use strict";var t,o,n,i,r,s;return{setters:[function(e){t=e.r;o=e.h;n=e.i;i=e.g;r=e.c},function(e){s=e.T},function(){}],execute:function(){var a=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.anchor{color:#2c5cc5;text-decoration:none;font-weight:600;display:inline-block;width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}';var l=e("fw_custom_cell_anchor",function(){function e(e){t(this,e);this.href="";this.text="";this.target="_self"}e.prototype.render=function(){return o("a",{class:"anchor",href:this.href,target:this.target},this.text)};return e}());l.style=a;var c=e("fw_custom_cell_icon",function(){function e(e){t(this,e);this.name="";this.size=18;this.color="#647A8E";this.library="crayons";this.src=null}e.prototype.render=function(){return o("fw-icon",{name:this.name,size:this.size,color:this.color,library:this.library,src:this.src})};return e}());var h=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.paragraph-container{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.paragraph-container .paragraph-text{overflow:hidden;margin:0px}.paragraph-container .paragraph-text.expanded{display:inline}.paragraph-container .paragraph-toggle{display:inline;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;color:#2c5cc5;white-space:nowrap;font-weight:600}.paragraph-container .paragraph-toggle:hover,.paragraph-container .paragraph-toggle:focus{cursor:pointer}';var f=e("fw_custom_cell_paragraph",function(){function e(e){t(this,e);this.text="";this.maxHeight="60px";this.showToggle=false;this.hide=true;this.toggleParaButton=null}e.prototype.textChangeHandler=function(){this.showToggleOnTextChange()};e.prototype.componentDidLoad=function(){this.showToggleOnTextChange()};e.prototype.onFocus=function(){if(this.toggleParaButton){this.toggleParaButton.focus()}else{this.el.parentElement.setAttribute("tabindex","0");this.el.parentElement.focus()}};e.prototype.showToggleOnTextChange=function(){var e=this.el.getBoundingClientRect().height;if(e>=parseInt(this.maxHeight)){this.showToggle=true}else{this.showToggle=false}};e.prototype.toggleParagraph=function(){this.hide=!this.hide;if(this.hide){this.maxHeight="60px"}else{this.maxHeight="none"}};e.prototype.render=function(){var e=this;var t=o("p",{class:{"paragraph-text":true,open:this.showToggle,expanded:!this.hide},style:{maxHeight:this.maxHeight}},this.text," ");return o(n,{onFocus:function(){return e.onFocus()}},o("div",{class:"paragraph-container"},this.showToggle&&this.hide?o("fw-tooltip",{content:this.text,hoist:true,placement:"bottom-start",fallbackPlacements:["top-start"]},t):t,this.showToggle&&o("div",{class:"paragraph-toggle",role:"button",tabIndex:0,onKeyUp:function(t){return(t.code==="Space"||t.code==="Enter")&&e.toggleParagraph()},onClick:function(){return e.toggleParagraph()},ref:function(t){return e.toggleParaButton=t}},this.hide?o("span",null,s.t("datatable.showMore")):o("span",null,s.t("datatable.showLess")))))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{text:["textChangeHandler"]}},enumerable:false,configurable:true});return e}());f.style=h;var p=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.name-box-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}.name-box-container .name-box{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-positive:1;flex-grow:1;margin-inline:12px;margin-block:0}.name-box-container .name-box .name-box-text{font-weight:600;font-size:14px;line-height:20px;width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.name-box-container .name-box .name-box-email{font-size:12px;color:#475867;line-height:18px;width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}';var g=e("fw_custom_cell_user",function(){function e(e){t(this,e);this.image=null;this.name="";this.email="";this.alt=""}e.prototype.render=function(){return o("div",{class:"name-box-container"},o("div",{class:"avatar"},o("fw-avatar",{size:"small",image:this.image,name:this.name,alt:this.alt})),o("div",{class:"name-box"},o("div",{class:"name-box-text"},this.name),o("div",{class:"name-box-email"},this.email)))};return e}());g.style=p;var u=e("fw_kebab_menu",function(){function e(e){var o=this;t(this,e);this.fwSelect=r(this,"fwSelect",7);this.options=[];this.variant="standard";this.closeDropdown=function(){o.popoverRef.hide()}}e.prototype.fwSelectHandler=function(e){var t=e.detail.value;this.fwSelect.emit({value:t});this.closeDropdown()};e.prototype.render=function(){var e=this;var t;if((t=this.options)===null||t===void 0?void 0:t.length){return o("fw-popover",{ref:function(t){return e.popoverRef=t},sameWidth:false,placement:"bottom-end",hoist:true},o("fw-button",{slot:"popover-trigger",size:"icon",color:"text"},o("fw-icon",{name:"more-vertical",size:14})),o("fw-list-options",{slot:"popover-content",options:this.options,variant:this.variant,allowSelect:false,hideTick:true}))}else{return}};return e}());var d=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.skeleton{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;overflow:hidden;position:relative;background:var(--fw-skeleton-background, #cfd7df);border-radius:var(--fw-skeleton-border-radius, 999px);width:var(--fw-skeleton-width, 100%);height:var(--fw-skeleton-height, 16px);display:block;-webkit-margin-after:var(--fw-skeleton-margin-bottom, 8px);margin-block-end:var(--fw-skeleton-margin-bottom, 8px);will-change:auto}.skeleton:after,.skeleton:before{-webkit-box-sizing:border-box;box-sizing:border-box}.skeleton.circle{width:var(--fw-skeleton-width, 32px);height:var(--fw-skeleton-height, 32px);-webkit-margin-after:var(--fw-skeleton-margin-bottom, 8px);margin-block-end:var(--fw-skeleton-margin-bottom, 8px);border-radius:var(--fw-skeleton-border-radius, 50%)}.skeleton.rect{border-radius:var(--fw-skeleton-border-radius, 0px)}.skeleton.only{-webkit-margin-after:var(--fw-skeleton-margin-bottom, 0px);margin-block-end:var(--fw-skeleton-margin-bottom, 0px)}@media (prefers-reduced-motion: reduce){.skeleton.pulse,.skeleton.sheen{-webkit-animation:none;animation:none}}.skeleton.pulse{-webkit-animation:pulse 2s ease-in-out 0.5s infinite;animation:pulse 2s ease-in-out 0.5s infinite}:host(:not([dir="rtl"])) .skeleton.sheen,:host([dir="ltr"]) .skeleton.sheen{background:-webkit-gradient(linear, right top, left top, from(var(--fw-skeleton-sheen-color, #b1bdc8)), color-stop(var(--fw-skeleton-background, #cfd7df)), color-stop(var(--fw-skeleton-background, #cfd7df)), to(var(--fw-skeleton-sheen-color, #b1bdc8)));background:linear-gradient(270deg, var(--fw-skeleton-sheen-color, #b1bdc8), var(--fw-skeleton-background, #cfd7df), var(--fw-skeleton-background, #cfd7df), var(--fw-skeleton-sheen-color, #b1bdc8));-webkit-animation:sheen-ltr 8s ease-in-out infinite;animation:sheen-ltr 8s ease-in-out infinite}:host([dir="rtl"]) .skeleton.sheen{background:-webkit-gradient(linear, left top, right top, from(var(--fw-skeleton-sheen-color, #b1bdc8)), color-stop(var(--fw-skeleton-background, #cfd7df)), color-stop(var(--fw-skeleton-background, #cfd7df)), to(var(--fw-skeleton-sheen-color, #b1bdc8)));background:linear-gradient(-270deg, var(--fw-skeleton-sheen-color, #b1bdc8), var(--fw-skeleton-background, #cfd7df), var(--fw-skeleton-background, #cfd7df), var(--fw-skeleton-sheen-color, #b1bdc8));-webkit-animation:sheen-rtl 8s ease-in-out infinite;animation:sheen-rtl 8s ease-in-out infinite}@-webkit-keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}@-webkit-keyframes sheen-ltr-ltr{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes sheen-ltr-ltr{0%{background-position:200% 0}to{background-position:-200% 0}}@-webkit-keyframes sheen-ltr-rtl{0%{background-position:-100% 0}to{background-position:300% 0}}@keyframes sheen-ltr-rtl{0%{background-position:-100% 0}to{background-position:300% 0}}@-webkit-keyframes sheen-rtl-ltr{0%{background-position:-100% 0}to{background-position:300% 0}}@keyframes sheen-rtl-ltr{0%{background-position:-100% 0}to{background-position:300% 0}}@-webkit-keyframes sheen-rtl-rtl{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes sheen-rtl-rtl{0%{background-position:200% 0}to{background-position:-200% 0}}';var b=e("fw_skeleton",function(){function e(e){t(this,e);this.effect="pulse";this.variant="text";this.width=null;this.height=null;this.marginBottom=null;this.count=1;this.customStyles={};this.items=[]}e.prototype.componentWillLoad=function(){this.init()};e.prototype.componentWillUpdate=function(){this.init()};e.prototype.init=function(){this.items.length=this.count;this.items.fill(1);if(this.customStyles&&typeof this.customStyles==="string"){try{this.customStyles=JSON.parse(this.customStyles)}catch(e){console.warn("can't parse styles",this.customStyles)}}};Object.defineProperty(e.prototype,"style",{get:function(){var e={width:null,height:null,marginBottom:null};if(this.width){e.width=this.width}if(this.height){e.height=this.height}if(this.marginBottom){e.marginBottom=this.marginBottom}var t=typeof this.customStyles==="object"?this.customStyles:{};return Object.assign(Object.assign({},e),t)},enumerable:false,configurable:true});e.prototype.render=function(){var e=this;return o(n,null,this.items.map((function(t,n){return o("div",{part:"base",key:n,class:{circle:e.variant==="circle",rect:e.variant==="rect",skeleton:true,pulse:e.effect==="pulse",sheen:e.effect==="sheen",only:e.count===1},"aria-busy":"true","aria-live":"polite",style:e.style})})))};return e}());b.style=d}}}));