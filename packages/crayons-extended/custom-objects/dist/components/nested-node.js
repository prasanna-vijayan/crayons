import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
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

const nestedSelectCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.nest_indent{-webkit-border-start:1px solid #cfd7df;border-inline-start:1px solid #cfd7df;padding-block:10px 0px;padding-inline:10px 0px}";

const NestedNode = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * State to maintain selectedOption
     */
    this.selectedOption = null;
    /**
     * Options to pass through and loop
     */
    this.options = [];
    /**
     * level to keep track of selected options and
     * reset on parent option changes
     */
    this.level = 0;
    /**
     * Name of the field value gets updated to
     */
    this.name = '';
    /**
     * Current selected value if passed from initialvalues
     */
    this.value = '';
    /**
     * label
     */
    this.label = '';
    /**
     * OptionValue path
     */
    this.optionValuePath = 'id';
    /**
     * optionLabelPath
     */
    this.optionLabelPath = 'value';
  }
  optionsChanged() {
    this.selectedOption = null;
    this.selectRef.setSelectedValues('');
  }
  changed(event) {
    var _a;
    console.log('IN CHANGE in Level' + this.level, event.target.level);
    if (!event.detail.level) {
      event.detail.level = this.level;
      if ((_a = event.detail.meta.selectedOptions[0]) === null || _a === void 0 ? void 0 : _a.choices) {
        this.selectedOption = event.detail.meta.selectedOptions[0];
      }
    }
  }
  componentWillLoad() {
    if (this.value) {
      this.selectedOption = this.options.find((item) => item[this.optionValuePath] === this.value);
    }
  }
  getFirstlevelNestedSelect() {
    if (!this.selectedOption) {
      return null;
    }
    const { value } = this.selectProps(this.selectedOption.name);
    return (h("div", { class: 'nest_indent' }, h("fw-nested-node", { options: this.selectedOption.choices, name: this.selectedOption.name, label: this.selectedOption.label, value: value, level: this.level + 1, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, selectProps: this.selectProps })));
  }
  getNestedSelect() {
    if (!this.selectedOption || !this.selectedOption.choices) {
      return null;
    }
    const { value } = this.selectProps(this.selectedOption.name);
    return (h("fw-nested-node", { options: this.selectedOption.choices, name: this.selectedOption.name, label: this.selectedOption.label, value: value, level: this.level + 1, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, selectProps: this.selectProps }));
  }
  render() {
    return (h("div", { class: 'nest' }, h("fw-select", { label: this.label, options: this.options, name: this.name, value: this.value, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, ref: (select) => (this.selectRef = select) }), this.level === 0
      ? this.getFirstlevelNestedSelect()
      : this.getNestedSelect()));
  }
  static get watchers() { return {
    "options": ["optionsChanged"]
  }; }
  static get style() { return nestedSelectCss; }
}, [1, "fw-nested-node", {
    "options": [16],
    "level": [2],
    "name": [1],
    "value": [1],
    "label": [1],
    "optionValuePath": [1, "option-value-path"],
    "optionLabelPath": [1, "option-label-path"],
    "selectProps": [8, "select-props"],
    "selectedOption": [32]
  }, [[0, "fwChange", "changed"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-nested-node", "fw-avatar", "fw-button", "fw-checkbox", "fw-icon", "fw-input", "fw-list-options", "fw-nested-node", "fw-popover", "fw-select", "fw-select-option", "fw-spinner", "fw-tag", "fw-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-nested-node":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NestedNode);
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
    case "fw-nested-node":
      if (!customElements.get(tagName)) {
        defineCustomElement();
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

export { NestedNode as N, defineCustomElement as d };
