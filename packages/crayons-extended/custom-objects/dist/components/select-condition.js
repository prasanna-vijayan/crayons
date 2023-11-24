import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { T as TranslationController } from './Translation.js';
import { d as defineCustomElement$c } from './avatar.js';
import { d as defineCustomElement$b } from './button.js';
import { d as defineCustomElement$a } from './checkbox.js';
import { d as defineCustomElement$9 } from './icon.js';
import { d as defineCustomElement$8 } from './input.js';
import { d as defineCustomElement$7 } from './list-options.js';
import { d as defineCustomElement$6 } from './popover.js';
import { d as defineCustomElement$5 } from './select.js';
import { d as defineCustomElement$4 } from './select-option.js';
import { d as defineCustomElement$3 } from './spinner.js';
import { d as defineCustomElement$2 } from './tag.js';
import { d as defineCustomElement$1 } from './tooltip.js';

const SelectCondition = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.state = 'normal';
    this.hintText = '';
    this.errorText = '';
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
  onSelectionChange(e) {
    var _a, _b;
    this.value = (_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.selectedOptions;
  }
  async isValid() {
    if (this.error) {
      return !this.error;
    }
    this.requiredValidation();
    return !this.error;
  }
  async refresh() {
    this.value = undefined;
    this.setError(false);
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
  requiredValidation() {
    this.valueExists(this.value)
      ? this.setError(false)
      : this.setError(true, TranslationController.t('filters.validation.required'));
  }
  valueExists(value) {
    return !(typeof value === 'undefined' ||
      value === '' ||
      (value === null || value === void 0 ? void 0 : value.length) === 0);
  }
  componentWillLoad() { }
  render() {
    return (h("fw-select", Object.assign({ state: this.state, hintText: this.hintText, errorText: this.errorText, selectedOptions: this.value }, this.controlProps)));
  }
  static get style() { return ":host {display: block}"; }
}, [1, "fw-select-condition", {
    "value": [1544],
    "error": [1540],
    "showError": [516, "show-error"],
    "controlProps": [1040],
    "state": [32],
    "hintText": [32],
    "errorText": [32],
    "isValid": [64],
    "refresh": [64],
    "setError": [64]
  }, [[0, "fwBlur", "onInputBlur"], [0, "fwChange", "onSelectionChange"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-select-condition", "fw-avatar", "fw-button", "fw-checkbox", "fw-icon", "fw-input", "fw-list-options", "fw-popover", "fw-select", "fw-select-option", "fw-spinner", "fw-tag", "fw-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-select-condition":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SelectCondition);
      }
      break;
    case "fw-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "fw-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "fw-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "fw-list-options":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "fw-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "fw-select":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "fw-select-option":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "fw-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-tag":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-tooltip":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { SelectCondition as S, defineCustomElement as d };
