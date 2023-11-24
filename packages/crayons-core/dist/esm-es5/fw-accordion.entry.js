var __awaiter=this&&this.__awaiter||function(e,t,o,n){function r(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function a(e){try{d(n.next(e))}catch(t){i(t)}}function c(e){try{d(n["throw"](e))}catch(t){i(t)}}function d(e){e.done?o(e.value):r(e.value).then(a,c)}d((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var o={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,r,i,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(e){return function(t){return d([e,t])}}function d(a){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(i=a[0]&2?r["return"]:a[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;if(r=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;r=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}if(i[2])o.ops.pop();o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c];r=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};import{r as registerInstance,c as createEvent,h,e as getElement}from"./index-f21e28a1.js";var accordionCss=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.accordion{-webkit-box-shadow:var(--fw-accordion-box-shadow, 0px 1px 4px rgba(18, 52, 77, 0.08));box-shadow:var(--fw-accordion-box-shadow, 0px 1px 4px rgba(18, 52, 77, 0.08));border:var(--fw-accordion-border, 1px solid #cfd7df);border-radius:var(--fw-accordion-border-radius, 8px)}.accordion.no-bounding-box{-webkit-border-start:0;border-inline-start:0;-webkit-border-end:0;border-inline-end:0;border-radius:0}';var Accordion=function(){function e(e){var t=this;registerInstance(this,e);this.fwAccordionToggle=createEvent(this,"fwAccordionToggle",7);this.type="default";this.expanded=false;this.toggleState=function(){t.expanded=!t.expanded;t.updateState();t.fwAccordionToggle.emit({expanded:t.expanded})}}e.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.toggleState();return[2,true]}))}))};e.prototype.watchExpanded=function(e){this.expanded=e;this.updateState()};e.prototype.updateState=function(){this.accordionTitle.expanded=this.expanded;this.accordionBody.expanded=this.expanded};e.prototype.componentWillLoad=function(){this.accordionTitle=this.el.querySelector("fw-accordion-title");this.accordionBody=this.el.querySelector("fw-accordion-body");this.accordionTitle.type=this.type;this.accordionBody.type=this.type;this.accordionTitle.toggleState=this.toggleState.bind(this);this.updateState()};e.prototype.render=function(){return h("div",{class:{accordion:true,"no-bounding-box":this.type==="no_bounding_box"}},h("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{expanded:["watchExpanded"]}},enumerable:false,configurable:true});return e}();Accordion.style=accordionCss;export{Accordion as fw_accordion};