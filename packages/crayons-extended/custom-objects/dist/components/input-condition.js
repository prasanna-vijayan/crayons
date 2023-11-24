import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { T as TranslationController } from './Translation.js';
import { d as defineCustomElement$2 } from './icon.js';
import { d as defineCustomElement$1 } from './input.js';

const InputCondition = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.state = 'normal';
    this.hintText = '';
    this.errorText = '';
    /**
     * The value of the input
     */
    this.value = '';
    /**
     * Whether the component have any error.
     */
    this.error = false;
    /**
     * Whether to show the error.
     */
    this.showError = true;
    /**
     * The props to be passed to the crayons component.
     */
    this.controlProps = {};
  }
  onInputBlur() {
    this.requiredValidation();
  }
  onInputChange(e) {
    this.value = e.detail.value;
  }
  async isValid() {
    if (this.error) {
      return !this.error;
    }
    this.requiredValidation();
    return !this.error;
  }
  async setError(error, errorText) {
    this.error = error;
    if (error) {
      this.state = 'error';
      this.showError && (this.errorText = errorText);
    }
    else {
      this.state = 'normal';
      this.hintText = '';
    }
  }
  async refresh() {
    this.value = undefined;
    this.setError(false);
  }
  requiredValidation() {
    this.valueExists(this.value)
      ? this.setError(false)
      : this.setError(true, TranslationController.t('filters.validation.required'));
  }
  valueExists(value) {
    return !(typeof value === 'undefined' || value === '' || value === null);
  }
  componentWillLoad() { }
  render() {
    return (h("fw-input", Object.assign({}, this.controlProps, { state: this.state, hintText: this.hintText, errorText: this.errorText, value: this.value })));
  }
  static get style() { return ":host {display: block}"; }
}, [1, "fw-input-condition", {
    "value": [1537],
    "error": [1540],
    "showError": [516, "show-error"],
    "controlProps": [1040],
    "state": [32],
    "hintText": [32],
    "errorText": [32],
    "isValid": [64],
    "setError": [64],
    "refresh": [64]
  }, [[0, "fwBlur", "onInputBlur"], [0, "fwInput", "onInputChange"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-input-condition", "fw-icon", "fw-input"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-input-condition":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputCondition);
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { InputCondition as I, defineCustomElement as d };
