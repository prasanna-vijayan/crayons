import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { T as TranslationController } from './Translation.js';
import { h as handleKeyDown } from './utils.js';
import { d as defineCustomElement$7 } from './avatar.js';
import { d as defineCustomElement$6 } from './checkbox.js';
import { d as defineCustomElement$5 } from './icon.js';
import { d as defineCustomElement$4 } from './input.js';
import { d as defineCustomElement$3 } from './list-options.js';
import { d as defineCustomElement$2 } from './popover.js';
import { d as defineCustomElement$1 } from './select-option.js';

const sortSelectCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}.sort{--fw-popover-min-width:220px}.sort .sort-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:#465789;font-size:14px;font-weight:400}.sort .sort-container:hover,.sort .sort-container:focus{cursor:pointer}.sort .sort-action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background:#ffffff;-webkit-margin-start:2px;margin-inline-start:2px;border-radius:4px;padding-inline:4px;padding-block:0px;min-height:36px;color:#12344d;border:2px solid transparent;-webkit-box-sizing:border-box;box-sizing:border-box}.sort .sort-action:focus{border:2px solid #2c5cc5}.sort .order-label{-webkit-margin-start:20px;margin-inline-start:20px;font-size:12px;font-weight:700;color:#12344d}.sort .divider{border:1px solid #edeff5}@media screen and (prefers-reduced-motion: reduce){.sort .dropdown-status-icon{display:-ms-inline-flexbox;display:inline-flex;-webkit-margin-start:6px;margin-inline-start:6px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:20px;min-height:20px;-webkit-transition:none;transition:none}}.sort .dropdown-status-icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:20px;min-height:20px;-webkit-transition:all 0.1s;transition:all 0.1s}:host(:not([dir=\"rtl\"])) .sort .dropdown-status-icon.expanded,:host([dir=\"ltr\"]) .sort .dropdown-status-icon.expanded{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host([dir=\"rtl\"]) .sort .dropdown-status-icon.expanded{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}";

const SortSelect = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwSort = createEvent(this, "fwSort", 7);
    this.sortOrderData = [
      { value: 'ASC', text: TranslationController.t('sortSelect.ascending') },
      { value: 'DESC', text: TranslationController.t('sortSelect.descending') },
    ];
    /**
     * Select options for the sortable. Array of objects of type {text: string, value: string}
     */
    this.sortOptions = [];
  }
  onDefaultSortChange(newValue) {
    const defaultValue = this.sortOptions.filter((option) => option.value === newValue)[0];
    this.sortColumnName = defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.text;
  }
  onOptionSelect(e) {
    const id = e.composedPath()[0].id;
    const selectedValue = e.detail.value;
    if (id === 'sortBy') {
      this.orderBy = selectedValue;
    }
    else if (id === 'sortOrder') {
      this.order = selectedValue;
    }
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    this.sortDropdown.hide();
    this.fwSort.emit({ orderBy: this.orderBy, order: this.order });
  }
  onDropdownOpen() {
    this.isExpanded = true;
  }
  onDropdownClose() {
    this.isExpanded = false;
  }
  toggleDropdown(event) {
    this.sortDropdown.isOpen
      ? this.sortDropdown.hide()
      : this.sortDropdown.show();
    event.stopPropagation();
  }
  componentWillLoad() {
    this.onDefaultSortChange(this.orderBy);
  }
  render() {
    return (h("fw-popover", { ref: (sortDropdown) => (this.sortDropdown = sortDropdown), class: 'sort', "same-width": 'false', placement: 'bottom-start', trigger: 'manual' }, h("div", { class: 'sort-container', slot: 'popover-trigger' }, h("div", { class: 'sort-action', tabIndex: 0, role: 'button', onClick: (e) => {
        this.toggleDropdown(e);
      }, onKeyDown: handleKeyDown(this.toggleDropdown.bind(this)) }, h("span", null, this.sortColumnName), h("span", { class: {
        'dropdown-status-icon': true,
        'expanded': this.isExpanded,
      } }, h("fw-icon", { name: 'chevron-down', color: '#264966', size: 8, library: 'system' })))), h("div", { slot: 'popover-content' }, h("fw-list-options", { id: 'sortBy', allowDeselect: false, value: this.orderBy, options: this.sortOptions }, ' '), h("hr", { class: 'divider' }), h("span", { class: 'order-label' }, TranslationController.t('platformTable.orderby')), h("fw-list-options", { id: 'sortOrder', allowDeselect: false, value: this.order, options: this.sortOrderData }))));
  }
  static get watchers() { return {
    "orderBy": ["onDefaultSortChange"]
  }; }
  static get style() { return sortSelectCss; }
}, [1, "fw-sort-select", {
    "sortOptions": [16],
    "orderBy": [1544, "order-by"],
    "order": [1544],
    "sortColumnName": [32],
    "isExpanded": [32]
  }, [[0, "fwChange", "onOptionSelect"], [0, "fwShow", "onDropdownOpen"], [0, "fwHide", "onDropdownClose"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-sort-select", "fw-avatar", "fw-checkbox", "fw-icon", "fw-input", "fw-list-options", "fw-popover", "fw-select-option"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-sort-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SortSelect);
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

export { SortSelect as S, defineCustomElement as d };
