import { r as registerInstance, h, g as getElement } from './index-f435cf58.js';
import { a as hasSlot } from './index-1063dee9.js';
import { T as TranslationController } from './Translation-1d30aa87.js';
import './index-fb937839.js';

const modalContentCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex:1;flex:1;overflow-y:auto;font-size:14px;font-weight:400;color:#12344d;line-height:20px}.content{-webkit-padding-after:32px;padding-block-end:32px;padding-inline:32px;-webkit-padding-before:12px;padding-block-start:12px;overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box}";

const ModalContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * render the slot content directly
   * @returns {JSX.Element}
   */
  render() {
    return (h("div", { class: 'content' }, h("slot", null)));
  }
};
ModalContent.style = modalContentCss;

const modalFooterCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.modal-footer-container{padding-inline:16px;padding-block:12px;-webkit-box-sizing:border-box;box-sizing:border-box;height:56px;background-color:#f5f7f9;border-end-start-radius:4px;border-end-end-radius:4px;border-start-end-radius:0;border-start-start-radius:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex:none;flex:none}.modal-footer-container fw-button{-webkit-margin-start:12px;margin-inline-start:12px}";

const ModalFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The text for the submit button
     */
    // @i18n({ keyName: 'modal.ok' })
    this.submitText = '';
    /**
     * The text for the cancel button
     */
    // @i18n({ keyName: 'modal.cancel' })
    this.cancelText = '';
    /**
     * Default state of submit button
     */
    this.submitDisabled = false;
    /**
     * The color of submit button
     */
    this.submitColor = 'primary';
    /**
     * Set to true if we want to render slot instead of default footer
     */
    this.custom = null;
    /**
     * Function to call on submit of modal
     */
    // eslint-disable-next-line  @typescript-eslint/no-empty-function
    this.submit = () => { };
    /**
     * Function to call on close of modal
     */
    // eslint-disable-next-line  @typescript-eslint/no-empty-function
    this.close = () => { };
  }
  /**
   * lifecycle event, called once just after the component is first connected to the DOM
   */
  componentWillLoad() {
    if (this.custom === null) {
      this.custom = hasSlot(this.el);
    }
  }
  /**
   * render slot when custom attribute is passed, else renders the default footer with submit and cancel buttons
   * @returns {JSX.Element}
   */
  render() {
    return (h("div", { class: 'modal-footer-container' }, h("div", { class: 'modal-footer' }, this.custom ? (h("slot", null)) : (h("span", null, h("fw-button", { color: 'secondary', onClick: () => this.close() }, this.cancelText || TranslationController.t('modal.cancel')), h("fw-button", { color: this.submitColor, disabled: this.submitDisabled, onClick: () => this.submit() }, this.submitText || TranslationController.t('modal.ok')))))));
  }
  get el() { return getElement(this); }
};
ModalFooter.style = modalFooterCss;

const modalTitleCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.modal-header-container{-webkit-padding-after:0;padding-block-end:0;padding-inline:32px;-webkit-padding-before:32px;padding-block-start:32px;position:relative;background:#fff;border-end-start-radius:0;border-end-end-radius:0;border-start-end-radius:4px;border-start-start-radius:4px;-webkit-transition:all 0.1s linear;transition:all 0.1s linear;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:none;flex:none}.modal-header-container .modal-header{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;font-size:18px;font-weight:600;line-height:24px;color:#12344d}.modal-header-container .modal-header .modal-header-body{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:0px}.modal-header-container .modal-header .modal-header-body .modal-title{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:10px;color:#12344d}.modal-header-container .modal-header .modal-header-body .modal-title .modal-title-icon{width:auto;height:24px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-header-container .modal-header .modal-header-body .modal-title .title-label{font-size:18px;font-weight:600;line-height:24px}.modal-header-container .modal-header .modal-header-body .description{font-size:14px;font-weight:400;color:#475867;line-height:20px;padding-inline:0px;padding-block:6px}";

const ModalTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The icon to be displayed with the title
     */
    this.icon = '';
    /**
     * Set to true if we want to render slot instead of default footer
     */
    this.custom = null;
  }
  /**
   * lifecycle event, called once just after the component is first connected to the DOM
   */
  componentWillLoad() {
    if (this.custom === null) {
      this.custom = hasSlot(this.el);
    }
  }
  /**
   * renders Icon in Modal header.
   * @returns {JSX.Element}
   */
  renderIcon() {
    return (h("span", { class: 'modal-title-icon' }, h("fw-icon", { name: this.icon, size: 16 })));
  }
  /**
   * renders slot content when custom attribute is passed, else displays the default
   * icon, title and description with close button in the header.
   * @returns {JSX.Element}
   */
  render() {
    return (h("div", { class: 'modal-header-container' }, h("div", { class: 'modal-header' }, this.custom ? (h("slot", null)) : (h("div", { class: 'modal-header-body' }, h("div", { class: 'modal-title' }, this.icon !== '' ? this.renderIcon() : null, h("label", { class: 'title-label' }, this.titleText)), this.description && (h("label", { class: 'description' }, this.description)))))));
  }
  get el() { return getElement(this); }
};
ModalTitle.style = modalTitleCss;

export { ModalContent as fw_modal_content, ModalFooter as fw_modal_footer, ModalTitle as fw_modal_title };
