var __awaiter=this&&this.__awaiter||function(e,t,i,n){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(t){o(t)}}function a(e){try{l(n["throw"](e))}catch(t){o(t)}}function l(e){e.done?i(e.value):r(e.value).then(s,a)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;r=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(s[0]===6&&i.label<o[1]){i.label=o[1];o=s;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(s);break}if(o[2])i.ops.pop();i.trys.pop();continue}s=t.call(e,i)}catch(a){s=[6,a];r=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-17854542.system.js"],(function(e){"use strict";var t,i,n,r,o;return{setters:[function(e){t=e.r;i=e.c;n=e.h;r=e.i;o=e.g}],execute:function(){var s=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{margin:0}.alert{position:relative;display:-ms-flexbox;display:flex;width:100%;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:inherit;padding:8px;background-color:transparent}.alert--success{background:#e0f5f1;border:1px solid #b4e5da}.alert--success .alert__message{-webkit-border-start:1px solid #b4e5da;border-inline-start:1px solid #b4e5da}.alert--warning{background:#fef1e1;border:1px solid #fedcb3}.alert--warning .alert__message{-webkit-border-start:1px solid #fedcb3;border-inline-start:1px solid #fedcb3}.alert--info{background:#e5f2fd;border:1px solid #bbdcfe}.alert--info .alert__message{-webkit-border-start:1px solid #bbdcfe;border-inline-start:1px solid #bbdcfe}.alert--error{border:1px solid #ffd0d6;background:#ffecf0}.alert--error .alert__message{-webkit-border-start:1px solid #ffd0d6;border-inline-start:1px solid #ffd0d6}.alert__icon{display:-ms-flexbox;display:flex;height:20px;-ms-flex-align:center;align-items:center;-webkit-margin-end:8px;margin-inline-end:8px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__message{-webkit-padding-start:12px;padding-inline-start:12px;-ms-flex:1 1 auto;flex:1 1 auto;color:#12344d;font-size:14px;font-weight:400;line-height:20px}.alert__message ::slotted(a){font-weight:500;color:#365dbe;text-decoration:none}.alert__close{display:-ms-flexbox;display:flex;height:20px;width:20px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer}';var a={error:"alert",warning:"info",info:"info",success:"success"};var l={error:"#e43538",warning:"#c7502f",info:"#264966",success:"#00795b"};var u=e("fw_inline_message",function(){function e(e){t(this,e);this.fwShow=i(this,"fwShow",7);this.fwHide=i(this,"fwHide",7);this.closable=true;this.type="info";this.duration=Infinity;this.open=true}e.prototype.startAutoHide=function(){var e=this;clearTimeout(this.autoHideTimeout);if(this.open&&this.duration<Infinity){this.autoHideTimeout=setTimeout((function(){return e.hide()}),this.duration)}};e.prototype.handleOpen=function(){if(this.open){this.host.style.display="flex";this.fwShow.emit();if(this.duration<Infinity){this.startAutoHide()}}else{clearTimeout(this.autoHideTimeout);this.host.style.display="none";this.fwHide.emit()}};e.prototype.handleDurationChange=function(){this.startAutoHide()};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.open){return[2]}this.open=true;return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(!this.open){return[2]}this.open=false;return[2]}))}))};e.prototype.connectedCallback=function(){this.host.style.display=this.open?"flex":"none"};e.prototype.disconnectedCallback=function(){clearTimeout(this.autoHideTimeout)};e.prototype.handleKeyUp=function(e){if(e.code==="Enter"){e.preventDefault();this.hide()}};e.prototype.handleClose=function(){this.hide()};e.prototype.render=function(){var e=this;return n(r,{role:"alert","aria-hidden":this.open?"false":"true"},n("div",{class:"alert "+"alert--"+this.type},n("span",{class:"alert__icon"},n("fw-icon",{size:16,name:a[this.type],color:l[this.type]})),n("span",{class:"alert__message"},n("slot",null)),this.closable&&n("span",{class:"alert__close",role:"button",tabindex:"0",onKeyUp:function(t){return e.handleKeyUp(t)},onClick:function(){return e.handleClose()}},n("fw-icon",{name:"cross",color:"#12344d",size:8,library:"system"}))))};Object.defineProperty(e.prototype,"host",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{open:["handleOpen"],duration:["handleDurationChange"]}},enumerable:false,configurable:true});return e}());u.style=s}}}));