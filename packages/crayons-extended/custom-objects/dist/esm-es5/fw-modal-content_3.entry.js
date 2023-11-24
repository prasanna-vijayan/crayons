import{r as registerInstance,h,g as getElement}from"./index-f435cf58.js";import{a as hasSlot}from"./index-1063dee9.js";import{T as TranslationController}from"./Translation-1d30aa87.js";import"./index-fb937839.js";var modalContentCss=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex:1;flex:1;overflow-y:auto;font-size:14px;font-weight:400;color:#12344d;line-height:20px}.content{-webkit-padding-after:32px;padding-block-end:32px;padding-inline:32px;-webkit-padding-before:12px;padding-block-start:12px;overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box}';var ModalContent=function(){function e(e){registerInstance(this,e)}e.prototype.render=function(){return h("div",{class:"content"},h("slot",null))};return e}();ModalContent.style=modalContentCss;var modalFooterCss=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.modal-footer-container{padding-inline:16px;padding-block:12px;-webkit-box-sizing:border-box;box-sizing:border-box;height:56px;background-color:#f5f7f9;border-end-start-radius:4px;border-end-end-radius:4px;border-start-end-radius:0;border-start-start-radius:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex:none;flex:none}.modal-footer-container fw-button{-webkit-margin-start:12px;margin-inline-start:12px}';var ModalFooter=function(){function e(e){registerInstance(this,e);this.submitText="";this.cancelText="";this.submitDisabled=false;this.submitColor="primary";this.custom=null;this.submit=function(){};this.close=function(){}}e.prototype.componentWillLoad=function(){if(this.custom===null){this.custom=hasSlot(this.el)}};e.prototype.render=function(){var e=this;return h("div",{class:"modal-footer-container"},h("div",{class:"modal-footer"},this.custom?h("slot",null):h("span",null,h("fw-button",{color:"secondary",onClick:function(){return e.close()}},this.cancelText||TranslationController.t("modal.cancel")),h("fw-button",{color:this.submitColor,disabled:this.submitDisabled,onClick:function(){return e.submit()}},this.submitText||TranslationController.t("modal.ok")))))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();ModalFooter.style=modalFooterCss;var modalTitleCss=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.modal-header-container{-webkit-padding-after:0;padding-block-end:0;padding-inline:32px;-webkit-padding-before:32px;padding-block-start:32px;position:relative;background:#fff;border-end-start-radius:0;border-end-end-radius:0;border-start-end-radius:4px;border-start-start-radius:4px;-webkit-transition:all 0.1s linear;transition:all 0.1s linear;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:none;flex:none}.modal-header-container .modal-header{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;font-size:18px;font-weight:600;line-height:24px;color:#12344d}.modal-header-container .modal-header .modal-header-body{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:0px}.modal-header-container .modal-header .modal-header-body .modal-title{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:10px;color:#12344d}.modal-header-container .modal-header .modal-header-body .modal-title .modal-title-icon{width:auto;height:24px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-header-container .modal-header .modal-header-body .modal-title .title-label{font-size:18px;font-weight:600;line-height:24px}.modal-header-container .modal-header .modal-header-body .description{font-size:14px;font-weight:400;color:#475867;line-height:20px;padding-inline:0px;padding-block:6px}';var ModalTitle=function(){function e(e){registerInstance(this,e);this.icon="";this.custom=null}e.prototype.componentWillLoad=function(){if(this.custom===null){this.custom=hasSlot(this.el)}};e.prototype.renderIcon=function(){return h("span",{class:"modal-title-icon"},h("fw-icon",{name:this.icon,size:16}))};e.prototype.render=function(){return h("div",{class:"modal-header-container"},h("div",{class:"modal-header"},this.custom?h("slot",null):h("div",{class:"modal-header-body"},h("div",{class:"modal-title"},this.icon!==""?this.renderIcon():null,h("label",{class:"title-label"},this.titleText)),this.description&&h("label",{class:"description"},this.description))))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();ModalTitle.style=modalTitleCss;export{ModalContent as fw_modal_content,ModalFooter as fw_modal_footer,ModalTitle as fw_modal_title};