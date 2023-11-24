import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { T as TranslationController } from './Translation.js';
import { d as defineCustomElement$e } from './avatar.js';
import { d as defineCustomElement$d } from './button.js';
import { d as defineCustomElement$c } from './checkbox.js';
import { d as defineCustomElement$b } from './datepicker.js';
import { d as defineCustomElement$a } from './icon.js';
import { d as defineCustomElement$9 } from './input.js';
import { d as defineCustomElement$8 } from './list-options.js';
import { d as defineCustomElement$7 } from './popover.js';
import { d as defineCustomElement$6 } from './select.js';
import { d as defineCustomElement$5 } from './select-option.js';
import { d as defineCustomElement$4 } from './spinner.js';
import { d as defineCustomElement$3 } from './tag.js';
import { d as defineCustomElement$2 } from './timepicker.js';
import { d as defineCustomElement$1 } from './tooltip.js';

const DateCondition = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    this.datepicker.clearValue();
    this.setError(false);
  }
  requiredValidation() {
    if (this.controlProps['mode'] === 'range') {
      this.valueRangeExists(this.value)
        ? this.setError(false)
        : this.setError(true, TranslationController.t('filters.validation.required'));
    }
    else {
      this.valueExists(this.value)
        ? this.setError(false)
        : this.setError(true, TranslationController.t('filters.validation.required'));
    }
  }
  valueExists(value) {
    return !(typeof value === 'undefined' || value === '');
  }
  valueRangeExists(value) {
    return (value &&
      this.valueExists(value['fromDate']) &&
      this.valueExists(value['toDate']));
  }
  componentWillLoad() {
    if (this.controlProps['mode'] === 'range') {
      this.value = {
        fromDate: this.controlProps['fromDate'],
        toDate: this.controlProps['toDate'],
      };
    }
    else {
      this.value = this.controlProps['value'];
    }
  }
  render() {
    return (h("fw-datepicker", Object.assign({ ref: (datepicker) => (this.datepicker = datepicker), state: this.state, hintText: this.hintText, errorText: this.errorText }, this.controlProps, { readonly: true })));
  }
  static get style() { return ":host {display: block}"; }
}, [1, "fw-date-condition", {
    "value": [1544],
    "error": [1540],
    "showError": [516, "show-error"],
    "controlProps": [1040],
    "state": [32],
    "hintText": [32],
    "errorText": [32],
    "isValid": [64],
    "setError": [64],
    "refresh": [64]
  }, [[0, "fwBlur", "onInputBlur"], [0, "fwChange", "onSelectionChange"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-date-condition", "fw-avatar", "fw-button", "fw-checkbox", "fw-datepicker", "fw-icon", "fw-input", "fw-list-options", "fw-popover", "fw-select", "fw-select-option", "fw-spinner", "fw-tag", "fw-timepicker", "fw-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-date-condition":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DateCondition);
      }
      break;
    case "fw-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$e();
      }
      break;
    case "fw-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "fw-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "fw-datepicker":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "fw-list-options":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "fw-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "fw-select":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "fw-select-option":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "fw-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "fw-tag":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-timepicker":
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

export { DateCondition as D, defineCustomElement as d };
