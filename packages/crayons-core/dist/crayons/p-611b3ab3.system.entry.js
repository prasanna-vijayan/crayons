var __awaiter=this&&this.__awaiter||function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,a){function r(t){try{l(n.next(t))}catch(e){a(e)}}function s(t){try{l(n["throw"](t))}catch(e){a(e)}}function l(t){t.done?i(t.value):o(t.value).then(r,s)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(a=r[0]&2?o["return"]:r[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,r[1])).done)return a;if(o=0,a)r=[r[0]&2,a.value];switch(r[0]){case 0:case 1:a=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;o=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1];break}if(r[0]===6&&i.label<a[1]){i.label=a[1];a=r;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(r);break}if(a[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(s){r=[6,s];o=0}finally{n=a=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-a53fdc53.system.js","./p-6764c153.system.js"],(function(t){"use strict";var e,i,n,o,a,r,s,l;return{setters:[function(t){e=t.r;i=t.h;n=t.c;o=t.i;a=t.e},function(t){r=t.t;s=t.a;l=t.r}],execute:function(){var c=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;--size:3rem}.avatar{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:calc(var(--size) * 0.5);font-weight:400;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle}.avatar__initials{line-height:1;font-weight:600;font-size:32px;text-align:center;text-transform:uppercase}.avatar__image{position:absolute;inset-block-start:0;inset-inline-start:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar--dark{background-color:#527fa5;color:#fff}.avatar--dark--initials{border:2px solid rgba(18, 52, 77, 0.16)}.avatar--dark--default{background-color:#90c6fe}.avatar--light{background-color:#dff0ff;color:#12344d}.avatar--light--initials{border:2px solid #bedbf5}.avatar--error{background-color:#ffd0d6;color:#12344d}.avatar--error--initials{border:2px solid #ffd0d6}.avatar--circle{border-radius:50%}.avatar--rounded{border-radius:4px}.avatar--square{border-radius:0}.avatar--xxlarge{width:96px;height:96px}.avatar--xxlarge .avatar__initials{font-size:32px}.avatar--xlarge{width:72px;height:72px}.avatar--xlarge .avatar__initials{font-size:24px}.avatar--large{width:56px;height:56px}.avatar--large .avatar__initials{font-size:20px}.avatar--medium{width:40px;height:40px}.avatar--medium .avatar__initials{font-size:16px}.avatar--small{width:32px;height:32px}.avatar--small .avatar__initials{font-size:14px}.avatar--xsmall{width:24px;height:24px}.avatar--xsmall .avatar__initials{font-size:12px}.avatar--xxsmall{width:20px;height:20px}.avatar--xxsmall .avatar__initials{font-size:10px}';var b=t("fw_avatar",function(){function t(t){e(this,t);this.shape="circle";this.name="";this.size="large";this.mode="dark"}t.prototype.getInitials=function(){var t="";if(this.initials){t=this.initials}else if(this.name.trim().length>0){var e=this.name.trim().split(" ");if(e.length===1){t=e.shift().charAt(0)}else if(e.length>1){t=e.shift().charAt(0)+e.pop().charAt(0)}}return t};t.prototype.renderAltIcon=function(){var t=this.mode==="error"?"#C82124":"#283DA5";return i("svg",{id:this.mode==="error"?"error-svg":"default-svg",width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("g",{"clip-path":"url(#a)",fill:t},i("circle",{cx:12,cy:9,r:5}),i("ellipse",{cx:12,cy:24.5,rx:11,ry:9.5})),i("defs",null,i("clipPath",{id:"a"},i("path",{fill:"#fff",d:"M0 0h24v24H0z"}))))};t.prototype.render=function(){var t="avatar \n    avatar--".concat(this.shape,"\n    avatar--").concat(this.size,"\n    avatar--").concat(this.mode,"\n    ");if(!this.image&&(this.initials||this.name)){t+=" avatar--".concat(this.mode,"--initials")}else if(!this.image){t+=" avatar--".concat(this.mode,"--default")}return i("div",{class:t,"aria-label":this.alt},this.image?i("img",{part:"image",class:"avatar__image",src:this.image,alt:this.alt}):this.initials||this.name?i("div",{part:"initials",class:"avatar__initials"},this.getInitials()):this.renderAltIcon())};return t}());b.style=c;var d=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (prefers-reduced-motion: reduce){.fw-btn,.fw-btn--label,.fw-btn--loader{-webkit-transition:none;transition:none}}:host{display:inline-block;width:auto;cursor:pointer}.fw-btn{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;border-style:solid;border-width:1px;font-weight:600;font-family:inherit;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;vertical-align:middle;padding:0;cursor:inherit;letter-spacing:0;outline:0;border-radius:4px;--fw-icon-color:currentColor}.fw-btn .fw-btn--label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;line-height:20px}.fw-btn:active:not(.fw-btn--loading){-webkit-box-shadow:inset 0 0 4px 0 rgba(0, 0, 0, 0.25);box-shadow:inset 0 0 4px 0 rgba(0, 0, 0, 0.25)}.fw-btn:focus{border:1px solid #2c5cc5;-webkit-box-shadow:0 0 0 1px #2c5cc5;box-shadow:0 0 0 1px #2c5cc5}.fw-btn.disabled,.fw-btn[disabled]{cursor:not-allowed}.fw-btn--primary{background-color:#264966;color:#fff;border-color:#12344d;background-image:-webkit-gradient(linear, left top, left bottom, from(#264966), to(#12344d));background-image:linear-gradient(to bottom, #264966, #12344d)}.fw-btn--primary:active{border-color:#264966}.fw-btn--primary:focus:not([disabled]),.fw-btn--primary:hover:not([disabled]){background-color:#12344d;background-image:none}.fw-btn--primary.disabled,.fw-btn--primary[disabled]{background-image:-webkit-gradient(linear, left top, left bottom, from(#92a2b1), to(#7b8e9f));background-image:linear-gradient(to bottom, #92a2b1, #7b8e9f);border-color:#7b8e9f;color:rgba(255, 255, 255, 0.5)}.fw-btn--secondary{background-color:#f5f7f9;color:#12344d;border-color:#cfd7df;background-image:-webkit-gradient(linear, left top, left bottom, from(#fff), to(#f5f7f9));background-image:linear-gradient(to bottom, #fff, #f5f7f9)}.fw-btn--secondary:active{border-color:#ebeff3}.fw-btn--secondary:focus:not([disabled]),.fw-btn--secondary:hover:not([disabled]){background-color:#f5f7f9;background-image:none}.fw-btn--secondary.disabled,.fw-btn--secondary[disabled]{background:#ebeff3;border-color:#cfd7df;color:#92a2b1}.fw-btn--danger{color:#fff;background-color:#d72d30;border-color:#c82124;background-image:-webkit-gradient(linear, left top, left bottom, from(#d72d30), to(#c82124));background-image:linear-gradient(to bottom, #d72d30, #c82124)}.fw-btn--danger:focus:not([disabled]),.fw-btn--danger:hover:not([disabled]){background-color:#c82124;background-image:none}.fw-btn--danger.disabled,.fw-btn--danger[disabled]{background-image:-webkit-gradient(linear, left top, left bottom, from(#f89fa1), to(#f2797b));background-image:linear-gradient(to bottom, #f89fa1, #f2797b);border-color:#f2797b;color:rgba(255, 255, 255, 0.5)}.fw-btn--link{background-color:transparent;background-image:none;border:1px solid transparent;color:#2c5cc5}.fw-btn--text{background-color:transparent;background-image:none;border:1px solid transparent;color:#264966}.fw-btn--text:focus:not([disabled]),.fw-btn--link:focus:not([disabled]){border-color:#2c5cc5;-webkit-box-shadow:0 0 0 1px #2c5cc5;box-shadow:0 0 0 1px #2c5cc5;background-color:transparent}.fw-btn--text:hover:not([disabled]),.fw-btn--link:hover:not([disabled]){background-color:#ebeff3}.fw-btn--text.disabled,.fw-btn--text[disabled],.fw-btn--link.disabled,.fw-btn--link[disabled]{opacity:0.5}.fw-btn--mini{height:16px}.fw-btn--mini .fw-btn--label{font-size:10px}.fw-btn--mini fw-spinner{-webkit-transform:scale(0.5);transform:scale(0.5)}.fw-btn--small{height:24px}.fw-btn--small .fw-btn--label{font-size:12px}.fw-btn--small fw-spinner{-webkit-transform:scale(0.75);transform:scale(0.75)}.fw-btn--normal{min-width:var(--fw-button-min-width, 80px);height:32px}.fw-btn--icon{min-width:32px;width:32px;height:32px;padding:0}.fw-btn--icon-small{min-width:24px;width:24px;height:24px;padding:0}.fw-btn--before,.fw-btn--after,.fw-btn--caret{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.fw-btn--normal ::slotted(fw-icon){--fw-icon-size:12px}.fw-btn--small ::slotted(fw-icon){--fw-icon-size:10px}.fw-btn--mini ::slotted(fw-icon){--fw-icon-size:8px}.fw-btn--has-label.fw-btn--normal .fw-btn--label{padding-inline:var(--fw-button-label-vertical-padding, 12px);padding-block:0}.fw-btn--has-before.fw-btn--normal{-webkit-padding-start:8px;padding-inline-start:8px}.fw-btn--has-before.fw-btn--normal .fw-btn--label{-webkit-padding-start:8px;padding-inline-start:8px}.fw-btn--has-after.fw-btn--normal,.fw-btn--caret.fw-btn--normal{-webkit-padding-end:8px;padding-inline-end:8px}.fw-btn--has-after.fw-btn--normal .fw-btn--label,.fw-btn--caret.fw-btn--normal .fw-btn--label{-webkit-padding-end:8px;padding-inline-end:8px}.fw-btn--has-label.fw-btn--small .fw-btn--label{padding-inline:var(--fw-button-label-vertical-padding, 8px);padding-block:0}.fw-btn--has-before.fw-btn--small{-webkit-padding-start:6px;padding-inline-start:6px}.fw-btn--has-before.fw-btn--small .fw-btn--label{-webkit-padding-start:6px;padding-inline-start:6px}.fw-btn--has-after.fw-btn--small,.fw-btn--caret.fw-btn--small{-webkit-padding-end:6px;padding-inline-end:6px}.fw-btn--has-after.fw-btn--small .fw-btn--label,.fw-btn--caret.fw-btn--small .fw-btn--label{-webkit-padding-end:6px;padding-inline-end:6px}.fw-btn--has-label.fw-btn--mini .fw-btn--label{padding-inline:var(--fw-button-label-vertical-padding, 6px);padding-block:0}.fw-btn--has-before.fw-btn--mini{-webkit-padding-start:4px;padding-inline-start:4px}.fw-btn--has-before.fw-btn--mini .fw-btn--label{-webkit-padding-start:4px;padding-inline-start:4px}.fw-btn--has-after.fw-btn--mini,.fw-btn--caret.fw-btn--mini{-webkit-padding-end:4px;padding-inline-end:4px}.fw-btn--has-after.fw-btn--mini .fw-btn--label,.fw-btn--caret.fw-btn--mini .fw-btn--label{-webkit-padding-end:4px;padding-inline-end:4px}.fw-btn--caret fw-icon{--fw-icon-size:9px}.fw-btn--caret.fw-btn--mini fw-icon{--fw-icon-size:6px}.fw-btn--loading{position:relative;cursor:wait}.fw-btn--loading .fw-btn--label,.fw-btn--loading .fw-btn--before,.fw-btn--loading .fw-btn--after,.fw-btn--loading .fw-btn--caret{opacity:0}.fw-btn--loading .fw-btn--loader{--fw-spinner-color:currentColor;opacity:1;line-height:0}.fw-btn--label,.fw-btn--loader{-webkit-transition:opacity 0.3s ease-out;transition:opacity 0.3s ease-out}.fw-btn--loader{opacity:0;position:absolute;font-size:1em;height:1em;width:1em;inset-block-start:calc(50% - 0.5em);inset-inline-start:calc(50% - 0.5em);-webkit-margin-before:-1px;margin-block-start:-1px;-webkit-margin-start:-1px;margin-inline-start:-1px}:host(.fw-button-group__button--first:not(.fw-button-group__button--last)) .fw-btn{border-start-end-radius:0;border-end-end-radius:0}:host(.fw-button-group__button--inner) .fw-btn{border-radius:0;-webkit-border-start:0;border-inline-start:0}:host(.fw-button-group__button--last:not(.fw-button-group__button--first)) .fw-btn{border-start-start-radius:0;border-end-start-radius:0;-webkit-border-start:0;border-inline-start:0}';var f=t("fw_button",function(){function t(t){e(this,t);this.fwClick=n(this,"fwClick",7);this.fwFocus=n(this,"fwFocus",7);this.fwBlur=n(this,"fwBlur",7);this.type="button";this.color="primary";this.size="normal";this.disabled=false;this.loading=false;this.showCaretIcon=false;this.modalTriggerId="";this.fileUploaderId="";this.throttleDelay=200;this.hasLabel=false;this.hasBeforeLabel=false;this.hasAfterLabel=false}t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.button.focus();return[2]}))}))};t.prototype.onFocus=function(){this.fwFocus.emit()};t.prototype.onBlur=function(){this.fwBlur.emit()};t.prototype.connectedCallback=function(){this.handleClickWithThrottle=r(this.handleClick,this,this.throttleDelay)};t.prototype.handlePreventDefault=function(t){t.preventDefault();t.stopPropagation();t.stopImmediatePropagation()};t.prototype.handleClick=function(t){if(this.modalTriggerId!==""){this.modalTrigger()}if(this.fileUploaderId!==""){this.fileSubmit()}else if(this.type==="submit"){this.fakeSubmit(t)}this.fwClick.emit()};t.prototype.fileSubmit=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t=document.querySelector("fw-file-uploader#".concat(this.fileUploaderId));t===null||t===void 0?void 0:t.uploadFiles();return[2]}))}))};t.prototype.modalTrigger=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t=document.querySelector("fw-modal#".concat(this.modalTriggerId));t===null||t===void 0?void 0:t.open();return[2]}))}))};t.prototype.fakeSubmit=function(t){return __awaiter(this,void 0,void 0,(function(){var e,i;return __generator(this,(function(n){e=this.host.closest("form");if(e){t.preventDefault();i=document.createElement("button");i.type="submit";i.style.display="none";e.appendChild(i);i.click();i.remove()}return[2]}))}))};t.prototype.componentWillLoad=function(){this.handleSlotChange()};t.prototype.handleSlotChange=function(){this.hasLabel=s(this.host);this.hasBeforeLabel=s(this.host,"before-label");this.hasAfterLabel=s(this.host,"after-label")};t.prototype.render=function(){var t=this;return i(o,{onClick:function(e){if(t.disabled){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();return false}}},i("button",{type:this.type,class:"\n            fw-btn fw-btn--".concat(this.color.toLowerCase(),"\n            fw-btn--").concat(this.size.toLowerCase(),"\n            ").concat(this.loading?"fw-btn--loading":"","\n            ").concat(this.hasLabel?"fw-btn--has-label":"","\n            ").concat(this.hasBeforeLabel?"fw-btn--has-before":"","\n            ").concat(this.hasAfterLabel?"fw-btn--has-after":"","\n            ").concat(this.showCaretIcon?"fw-btn--caret":"","\n          "),onClick:this.disabled||this.loading?this.handlePreventDefault:this.handleClickWithThrottle,onFocus:function(){return t.onFocus()},onBlur:function(){return t.onBlur()},ref:function(e){return t.button=e},"aria-disabled":this.disabled,disabled:this.disabled},i("span",{class:"fw-btn--before"},i("slot",{onSlotchange:function(){return t.handleSlotChange()},name:"before-label"})),i("span",{class:"fw-btn--label"},i("slot",{onSlotchange:function(){return t.handleSlotChange()}})),i("span",{class:"fw-btn--after"},i("slot",{onSlotchange:function(){return t.handleSlotChange()},name:"after-label"})),this.loading?i("fw-spinner",{class:"fw-btn--loader"}):"",this.showCaretIcon?i("fw-icon",{name:"chevron-down",library:"system"}):""))};Object.defineProperty(t.prototype,"host",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());f.style=d;var h=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:"*";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Helvetica Neue", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host{display:inline-block;position:relative}:host(:focus){outline:none}:host(:focus) input[type=checkbox]+label::before{border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5}:host(:focus) input[type=checkbox]:checked+label::before{border:1px solid #ffffff}:host(:focus) input[type=checkbox][disabled]+label::before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}:host(:hover) input[type=checkbox]+label::before{border-color:#cfd7df;-webkit-box-shadow:0 0 0 5px #ebeff3;box-shadow:0 0 0 5px #ebeff3}:host(:hover) input[type=checkbox]:checked+label::before{border-color:#2c5cc5}:host(:hover) input[type=checkbox][disabled]+label{cursor:not-allowed}:host(:hover) input[type=checkbox][disabled]+label::before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}.checkbox-container{cursor:pointer}.checkbox-container.disabled{cursor:not-allowed}#description{font-size:12px;color:#475867;letter-spacing:0;line-height:20px;position:relative;font-weight:400;word-wrap:break-word;-webkit-padding-start:22px;padding-inline-start:22px}input[type=checkbox]{display:none}input[type=checkbox]+label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-margin-after:0;margin-block-end:0;vertical-align:middle;font-size:14px;color:#12344d;line-height:20px;font-weight:400;cursor:inherit}input[type=checkbox]+label .with-description{font-weight:600}input[type=checkbox]+label #label{-webkit-padding-start:22px;padding-inline-start:22px;box-decoration-break:clone;-webkit-box-decoration-break:clone}input[type=checkbox]+label #label.required::after{content:"*";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}@media screen and (prefers-reduced-motion: reduce){input[type=checkbox]+label::before{-webkit-transition:none;transition:none}}input[type=checkbox]+label::before{position:absolute;inset-inline-start:0;inset-block-start:4px;display:block;content:"";border:1px solid #475867;height:14px;width:14px;background-color:#fff;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px}@media screen and (prefers-reduced-motion: reduce){input[type=checkbox]+label.error::before{-webkit-transition:none;transition:none}}input[type=checkbox]+label.error::before{position:absolute;inset-inline-start:0;inset-block-start:4px;display:block;content:"";border:1px solid #d72d30;height:14px;width:14px;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px;-webkit-transition:all 0.2s ease;transition:all 0.2s ease}@media screen and (prefers-reduced-motion: reduce){input[type=checkbox]+label .after{-webkit-transition:none;transition:none}}input[type=checkbox]+label .after{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;content:"";inset-inline-start:3px;inset-block-start:7px;width:8px;height:8px;opacity:0;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box}input[type=checkbox]:checked+label::before{background:#2c5cc5;border-color:#2c5cc5;-webkit-box-shadow:none;box-shadow:none}input[type=checkbox]:checked+label .after{opacity:1}input[type=checkbox]:checked:hover+label::before{border-color:#2c5cc5;-webkit-box-shadow:0 0 0 5px #ebeff3;box-shadow:0 0 0 5px #ebeff3}input[type=checkbox]:checked:hover+label .after{opacity:1}input[type=checkbox]:checked:focus+label::before{background:#2c5cc5;border-color:#fff;-webkit-box-shadow:0 0 0 1px #2c5cc5;box-shadow:0 0 0 1px #2c5cc5}input[type=checkbox]:checked:focus+label .after{opacity:1}input[type=checkbox][disabled]+label{color:#92a2b1}input[type=checkbox][disabled]+label .label-field{color:#92a2b1}input[type=checkbox][disabled]+label::before{border-color:#dadfe3;background-color:#ebeff3}input[type=checkbox][disabled]:checked+label{color:#92a2b1}input[type=checkbox][disabled]:checked+label::before{background-color:#ebeff3;border-color:#dadfe3}';var p=t("fw_checkbox",function(){function t(t){var i=this;e(this,t);this.fwChange=n(this,"fwChange",7);this.fwFocus=n(this,"fwFocus",7);this.fwBlur=n(this,"fwBlur",7);this.checked=false;this.disabled=false;this.description="";this.label="";this.name="";this.value="";this.required=false;this.state="normal";this.hintText="";this.warningText="";this.errorText="";this.hasHintTextSlot=false;this.hasWarningTextSlot=false;this.hasErrorTextSlot=false;this.onFocus=function(){i.fwFocus.emit()};this.onBlur=function(t){i.fwBlur.emit({event:t,name:i.name})};this.toggle=function(t){if(!i.disabled){i.checked=!i.checked;i.fwChange.emit({event:t,value:i.value,name:i.name,meta:{checked:i.checked}})}}}t.prototype.componentDidLoad=function(){this.checkbox.checked=this.checked;this.checkbox.disabled=this.disabled};t.prototype.checkChanged=function(t){this.checkbox.checked=t};t.prototype.componentWillLoad=function(){this.checkSlotContent()};t.prototype.checkSlotContent=function(){this.hasHintTextSlot=s(this.host,"hint-text");this.hasWarningTextSlot=s(this.host,"warning-text");this.hasErrorTextSlot=s(this.host,"error-text")};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){(t=this.host)===null||t===void 0?void 0:t.focus();return[2]}))}))};t.prototype.disabledChanged=function(t){this.checkbox.disabled=t};t.prototype.handleKeydown=function(t){if(t.code==="Space"){t.preventDefault()}};t.prototype.handleKeyup=function(t){if(t.code==="Space"){this.toggle(t)}};t.prototype.getAriaDescribedBy=function(){if(this.state==="normal")return"hint-".concat(this.name);else if(this.state==="error")return"error-".concat(this.name);else if(this.state==="warning")return"warning-".concat(this.name);return null};t.prototype.render=function(){var t=this;var e=this,n=e.host,a=e.name,r=e.value;if(this.checked){l(n,a,r)}var s=this.hintText?true:this.hasHintTextSlot;var c=this.errorText?true:this.hasErrorTextSlot;var b=this.warningText?true:this.hasWarningTextSlot;var d=this.state==="normal"?true:false;var f=this.state==="error"?true:false;var h=this.state==="warning"?true:false;var p="hint-".concat(this.name);var u="warning-".concat(this.name);var w="error-".concat(this.name);return i(o,{role:"checkbox",tabIndex:"0","aria-disabled":this.disabled?"true":"false","aria-checked":this.checked?"true":"false","aria-labelledby":"label","aria-describedby":"description ".concat(this.getAriaDescribedBy()),onClick:this.toggle,onFocus:this.onFocus,onBlur:this.onBlur,"aria-invalid":this.state==="error"},i("div",{class:{"checkbox-container":true,disabled:this.disabled}},i("input",{type:"checkbox",ref:function(e){return t.checkbox=e},required:this.required,name:this.name,id:this.name}),i("label",{class:{error:this.state==="error"}},i("span",{id:"label",class:{"with-description":this.description!=="",required:this.required}},i("slot",null)),this.description!==""||this.label!==""?i("div",{id:"description"},this.description?this.description:this.label):"",this.checked&&i("span",{class:"after"},i("fw-icon",{name:"check",color:this.disabled?"#92A2B1":"#ffffff",size:8})))),d&&s&&i("div",{id:p,class:"field-control-hint-text","aria-hidden":s?"false":"true"},i("slot",{name:"hint-text"},this.hintText)),f&&c&&i("div",{id:w,class:"field-control-error-text","aria-hidden":c?"false":"true"},i("slot",{name:"error-text"},this.errorText)),h&&b&&i("div",{id:u,class:"field-control-warning-text","aria-hidden":b?"false":"true"},i("slot",{name:"warning-text"},this.warningText)))};Object.defineProperty(t.prototype,"host",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{checked:["checkChanged"],disabled:["disabledChanged"]}},enumerable:false,configurable:true});return t}());p.style=h}}}));