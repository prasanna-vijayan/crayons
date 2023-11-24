import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$7 } from './avatar.js';
import { d as defineCustomElement$6 } from './checkbox.js';
import { d as defineCustomElement$5 } from './icon.js';
import { d as defineCustomElement$4 } from './input.js';
import { d as defineCustomElement$3 } from './list-options.js';
import { d as defineCustomElement$2 } from './popover.js';
import { d as defineCustomElement$1 } from './select-option.js';

const filterDropdownCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}.dropdown{--fw-popover-min-width:160px}.dropdown-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background:#ffffff;border-radius:4px;min-width:50px;min-height:32px;font-size:14px;font-weight:400;color:#2c5cc5;border:2px solid transparent;-webkit-box-sizing:border-box;box-sizing:border-box}@media (prefers-reduced-motion){.dropdown-container:focus,.dropdown-container:hover{border:2px solid #2c5cc5}}.dropdown-status-icon{-webkit-margin-end:4px;margin-inline-end:4px}.dropdown-label{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-after:0px;padding-block-end:0px;-webkit-padding-end:6px;padding-inline-end:6px;-webkit-padding-before:0px;padding-block-start:0px}@media (prefers-reduced-motion){.dropdown-status-icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:20px;min-height:20px;-webkit-transition:all 0.15s;transition:all 0.15s}:host(:not([dir=\"rtl\"])) .dropdown-status-icon.expanded,:host([dir=\"ltr\"]) .dropdown-status-icon.expanded{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host([dir=\"rtl\"]) .dropdown-status-icon.expanded{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}";

const FilterDropdown = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  onSelection(e) {
    this.selectedText = e.detail.meta.selectedOptions[0].text;
    this.dropdown.hide();
  }
  onDropdownOpen() {
    this.isExpanded = true;
  }
  onDropdownClose() {
    this.isExpanded = false;
  }
  componentWillLoad() {
    this.selectedText = this.options.filter((option) => option.value === this.value)[0].text;
  }
  render() {
    return (h("fw-popover", { ref: (dropdown) => (this.dropdown = dropdown), class: 'dropdown', "same-width": 'false', placement: 'bottom-start', autoFocusOnContent: true, hoist: true }, h("div", { class: 'dropdown-container', slot: 'popover-trigger', tabIndex: 0, role: 'button' }, h("span", { class: 'dropdown-label' }, this.selectedText), h("span", { class: {
        'dropdown-status-icon': true,
        'expanded': this.isExpanded,
      } }, h("fw-icon", { name: 'chevron-down', color: '#2c5cc5', size: 8, library: 'system' }))), h("fw-list-options", { slot: 'popover-content', value: this.value, allowDeselect: false, options: this.options })));
  }
  static get style() { return filterDropdownCss; }
}, [1, "fw-filter-dropdown", {
    "options": [8],
    "value": [8],
    "selectedText": [32],
    "isExpanded": [32]
  }, [[0, "fwChange", "onSelection"], [0, "fwShow", "onDropdownOpen"], [0, "fwHide", "onDropdownClose"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-filter-dropdown", "fw-avatar", "fw-checkbox", "fw-icon", "fw-input", "fw-list-options", "fw-popover", "fw-select-option"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-filter-dropdown":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FilterDropdown);
      }
      break;
    case "fw-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "fw-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "fw-list-options":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-select-option":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { FilterDropdown as F, defineCustomElement as d };
