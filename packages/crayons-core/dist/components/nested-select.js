import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$d } from './avatar.js';
import { d as defineCustomElement$c } from './button.js';
import { d as defineCustomElement$b } from './checkbox.js';
import { d as defineCustomElement$a } from './icon.js';
import { d as defineCustomElement$9 } from './input.js';
import { d as defineCustomElement$8 } from './list-options.js';
import { d as defineCustomElement$7 } from './nested-node.js';
import { d as defineCustomElement$6 } from './popover.js';
import { d as defineCustomElement$5 } from './select.js';
import { d as defineCustomElement$4 } from './select-option.js';
import { d as defineCustomElement$3 } from './spinner.js';
import { d as defineCustomElement$2 } from './tag.js';
import { d as defineCustomElement$1 } from './tooltip.js';

const nestedSelectCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.nest_indent{-webkit-border-start:1px solid #cfd7df;border-inline-start:1px solid #cfd7df;padding-block:10px 0px;padding-inline:10px 0px}";

const NestedSelect = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwChange = createEvent(this, "fwChange", 7);
    this.selections = [];
    this.selectedItems = {};
    /**
     * Options to display
     */
    this.options = [];
    /**
     * Name of first level field
     */
    this.name = '';
    /**
     * label
     */
    this.label = '';
    /**
     * Initial value from first level choices
     */
    this.value = '';
    /**
     * OptionValuePath referred from field
     */
    this.optionValuePath = 'id';
    /**
     * OptionLabelPath referred from field
     */
    this.optionLabelPath = 'value';
  }
  changed(event) {
    if (!event.detail.meta) {
      return;
    }
    this.selections[event.detail.level] = event.detail.meta.selectedOptions[0];
    const itemsToRemove = this.selections.length - (event.detail.level + 1);
    if (itemsToRemove > 0) {
      this.selections = this.selections.slice(0, event.detail.level + 1);
    }
    this.getSelectedId(this.selections[event.detail.level], event.detail.name);
    if (!this.selections[event.detail.level].choices) {
      this.fwChange.emit(Object.assign({}, this.selectedItems));
    }
  }
  getSelectedId(selectedValues, name) {
    const id = selectedValues[this.optionValuePath];
    if (id) {
      this.selectedItems = Object.assign(Object.assign({}, this.selectedItems), { [name]: selectedValues[this.optionValuePath] });
    }
    else {
      delete this.selectedItems[name];
    }
  }
  render() {
    return (h("fw-nested-node", { options: this.options, name: this.name, value: this.value, label: this.label, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, selectProps: this.selectProps }));
  }
  static get style() { return nestedSelectCss; }
}, [1, "fw-nested-select", {
    "options": [16],
    "name": [1],
    "label": [1],
    "value": [1],
    "optionValuePath": [1, "option-value-path"],
    "optionLabelPath": [1, "option-label-path"],
    "selectProps": [8, "select-props"]
  }, [[0, "fwChange", "changed"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-nested-select", "fw-avatar", "fw-button", "fw-checkbox", "fw-icon", "fw-input", "fw-list-options", "fw-nested-node", "fw-popover", "fw-select", "fw-select-option", "fw-spinner", "fw-tag", "fw-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-nested-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NestedSelect);
      }
      break;
    case "fw-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "fw-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "fw-checkbox":
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
    case "fw-nested-node":
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

export { NestedSelect as N, defineCustomElement as d };
