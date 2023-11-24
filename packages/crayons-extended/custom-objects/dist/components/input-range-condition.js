import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { T as TranslationController } from './Translation.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './input.js';
import { d as defineCustomElement$1 } from './input-condition.js';

const inputRangeConditionCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.range-container{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.range-container fw-input-condition{width:150px}.range-container .range-text{min-height:34px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-margin-after:0px;margin-block-end:0px;margin-inline:12px;-webkit-margin-before:0px;margin-block-start:0px}";

const InputRangeCondition = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwInput = createEvent(this, "fwInput", 7);
    /**
     * Whether the component have any error.
     */
    this.error = false;
    /**
     * The props to be passed to the crayons component.
     */
    this.controlProps = {};
  }
  onInputBlur() {
    this.valueExists(this.fromValue) &&
      this.valueExists(this.toValue) &&
      this.minMaxValidation();
  }
  onInputChange(e) {
    const { tagName, name } = e.composedPath()[0];
    if (tagName === 'FW-INPUT') {
      const inputValue = e.detail.value;
      const parsedValue = this.valueExists(inputValue)
        ? parseInt(inputValue)
        : '';
      if (name === 'from') {
        this.fromValue = parsedValue;
      }
      else {
        this.toValue = parsedValue;
      }
      this.value = { from: this.fromValue, to: this.toValue };
      this.fwInput.emit({ value: this.value });
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
    }
  }
  async isValid() {
    if (this.error) {
      return !this.error;
    }
    this.requiredValidation();
    !this.error && this.minMaxValidation();
    return !this.error;
  }
  requiredValidation() {
    this.fromElement.isValid();
    this.toElement.isValid();
    this.error = !(this.valueExists(this.fromValue) && this.valueExists(this.toValue));
  }
  minMaxValidation() {
    if (this.fromValue >= this.toValue || this.toValue < this.fromValue) {
      this.error = true;
      this.toElement.setError(true, TranslationController.t('filters.validation.minMax', {
        fromValue: this.fromValue,
      }));
    }
    else {
      this.error = false;
      this.toElement.setError(false);
    }
  }
  valueExists(value) {
    return !(typeof value === 'undefined' || value === '');
  }
  componentWillLoad() {
    var _a, _b;
    this.fromValue = (_a = this.value) === null || _a === void 0 ? void 0 : _a.from;
    this.toValue = (_b = this.value) === null || _b === void 0 ? void 0 : _b.to;
  }
  render() {
    return (h("div", { class: 'range-container' }, h("fw-input-condition", { controlProps: Object.assign(Object.assign({}, this.controlProps), { type: 'number', name: 'from', placeholder: TranslationController.t('filters.placeholder.startRange') }), ref: (fromElement) => {
        this.fromElement = fromElement;
      }, value: this.fromValue }), h("span", { class: 'range-text' }, ' ', TranslationController.t('filters.placeholder.and'), ' '), h("fw-input-condition", { controlProps: Object.assign(Object.assign({}, this.controlProps), { type: 'number', name: 'to', placeholder: TranslationController.t('filters.placeholder.endRange') }), ref: (toElement) => {
        this.toElement = toElement;
      }, value: this.toValue })));
  }
  static get style() { return inputRangeConditionCss; }
}, [1, "fw-input-range-condition", {
    "value": [1544],
    "error": [1540],
    "controlProps": [1040],
    "fromValue": [32],
    "toValue": [32],
    "isValid": [64]
  }, [[0, "fwBlur", "onInputBlur"], [0, "fwInput", "onInputChange"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-input-range-condition", "fw-icon", "fw-input", "fw-input-condition"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-input-range-condition":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputRangeCondition);
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-input-condition":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { InputRangeCondition as I, defineCustomElement as d };
