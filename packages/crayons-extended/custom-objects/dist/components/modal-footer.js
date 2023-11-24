import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as hasSlot } from './index2.js';
import { T as TranslationController } from './Translation2.js';
import { d as defineCustomElement$3 } from './button.js';
import { d as defineCustomElement$2 } from './icon.js';
import { d as defineCustomElement$1 } from './spinner.js';

const modalFooterCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.modal-footer-container{padding-inline:16px;padding-block:12px;-webkit-box-sizing:border-box;box-sizing:border-box;height:56px;background-color:#f5f7f9;border-end-start-radius:4px;border-end-end-radius:4px;border-start-end-radius:0;border-start-start-radius:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex:none;flex:none}.modal-footer-container fw-button{-webkit-margin-start:12px;margin-inline-start:12px}";

const ModalFooter = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  get el() { return this; }
  static get style() { return modalFooterCss; }
}, [1, "fw-modal-footer", {
    "submitText": [1025, "submit-text"],
    "cancelText": [1025, "cancel-text"],
    "submitDisabled": [4, "submit-disabled"],
    "submitColor": [1, "submit-color"],
    "submit": [8],
    "close": [8]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-modal-footer", "fw-button", "fw-icon", "fw-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-modal-footer":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ModalFooter);
      }
      break;
    case "fw-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { ModalFooter as M, defineCustomElement as d };
