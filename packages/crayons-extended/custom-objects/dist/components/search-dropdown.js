import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { T as TranslationController } from './Translation.js';
import { d as defineCustomElement$7 } from './avatar.js';
import { d as defineCustomElement$6 } from './checkbox.js';
import { d as defineCustomElement$5 } from './icon.js';
import { d as defineCustomElement$4 } from './input.js';
import { d as defineCustomElement$3 } from './list-options.js';
import { d as defineCustomElement$2 } from './popover.js';
import { d as defineCustomElement$1 } from './select-option.js';

const searchDropdownCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:relative}";

const SearchDropdown = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwChange = createEvent(this, "fwChange", 7);
  }
  onInput(e) {
    this.value = e.detail.value;
  }
  onSelection(e) {
    if (e.composedPath()[0].tagName === 'FW-LIST-OPTIONS') {
      const { value, meta } = e.detail;
      this.fwChange.emit({ value, meta, id: this.host.id });
      this.dropdown.hide();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
  componentWillLoad() { }
  render() {
    return (h("fw-popover", { ref: (dropdown) => (this.dropdown = dropdown), distance: '4', "same-width": 'true', placement: 'bottom' }, h("fw-input", { slot: 'popover-trigger', placeholder: TranslationController.t('searchDropdown.placeholder.search'), iconRight: 'search', tabIndex: 0, role: 'button' }), h("fw-list-options", { slot: 'popover-content', filterText: this.value, options: this.options })));
  }
  get host() { return this; }
  static get style() { return searchDropdownCss; }
}, [1, "fw-search-dropdown", {
    "options": [8],
    "value": [32]
  }, [[0, "fwInput", "onInput"], [0, "fwChange", "onSelection"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-search-dropdown", "fw-avatar", "fw-checkbox", "fw-icon", "fw-input", "fw-list-options", "fw-popover", "fw-select-option"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-search-dropdown":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SearchDropdown);
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

export { SearchDropdown as S, defineCustomElement as d };
