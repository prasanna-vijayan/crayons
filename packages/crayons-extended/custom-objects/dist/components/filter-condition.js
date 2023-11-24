import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$j } from './avatar.js';
import { d as defineCustomElement$i } from './button.js';
import { d as defineCustomElement$h } from './checkbox.js';
import { d as defineCustomElement$g } from './date-condition.js';
import { d as defineCustomElement$f } from './datepicker.js';
import { d as defineCustomElement$e } from './filter-dropdown.js';
import { d as defineCustomElement$d } from './icon.js';
import { d as defineCustomElement$c } from './input.js';
import { d as defineCustomElement$b } from './input-condition.js';
import { d as defineCustomElement$a } from './input-range-condition.js';
import { d as defineCustomElement$9 } from './list-options.js';
import { d as defineCustomElement$8 } from './popover.js';
import { d as defineCustomElement$7 } from './select.js';
import { d as defineCustomElement$6 } from './select-condition.js';
import { d as defineCustomElement$5 } from './select-option.js';
import { d as defineCustomElement$4 } from './spinner.js';
import { d as defineCustomElement$3 } from './tag.js';
import { d as defineCustomElement$2 } from './timepicker.js';
import { d as defineCustomElement$1 } from './tooltip.js';

const filterConditionCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.container{border:1px solid #cfd7df;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;-webkit-margin-before:10px;margin-block-start:10px;-webkit-padding-after:12px;padding-block-end:12px;padding-inline:12px;-webkit-padding-before:8px;padding-block-start:8px}.container .header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.container .header .header-text{display:-ms-flexbox;display:flex}.container .header .header-text .displayText{-webkit-margin-end:4px;margin-inline-end:4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.container .header .closeBtn{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:12px;height:12px;border-radius:6px;background-color:transparent;cursor:pointer}.container .content{display:-ms-flexbox;display:flex;-webkit-margin-before:8px;margin-block-start:8px}.container .content:empty{-webkit-margin-before:0px;margin-block-start:0px}.container .content fw-input-condition{width:220px}";

const FilterCondition = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwDelete = createEvent(this, "fwDelete", 7);
    /**
     * The condition schema
     */
    this.conditionSchema = {};
    /**
     * The column display name of the filter
     */
    this.filterText = {};
    /**
     * The props to be passed to the crayons component
     */
    this.controlProps = {};
  }
  onSelection(e) {
    var _a, _b;
    const { tagName } = e.composedPath()[0];
    if (tagName === 'FW-LIST-OPTIONS') {
      this.selectedCondition = e.detail.value;
      this.valueState = undefined;
      this.value = undefined;
      (_b = (_a = this.conditionElement) === null || _a === void 0 ? void 0 : _a.refresh) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    else if (tagName === 'FW-DATEPICKER') {
      if (this.conditionSchema[this.selectedCondition].type === 'DATE_RANGE') {
        const { fromDate: from, toDate: to } = e.detail.value;
        this.valueState = { from, to };
      }
      else {
        this.valueState = e.detail.value;
      }
    }
    else if (tagName === 'FW-SELECT') {
      this.valueState = e.detail.meta.selectedOptions;
    }
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
  }
  onInputChange(e) {
    this.valueState = e.detail.value;
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
  }
  onConditionChange(newValue) {
    this.selectedCondition = newValue;
  }
  onValueChange(newValue) {
    this.valueState = newValue;
  }
  async isValid() {
    if (this.conditionElement) {
      return this.conditionElement.isValid();
    }
    return true;
  }
  setConditionOptions(conditions) {
    this.conditionOptions = Object.keys(conditions).map((condition) => {
      const conditionOption = this.conditionSchema[condition];
      return Object.assign(Object.assign({}, conditionOption), { value: condition });
    });
  }
  renderContent(condition) {
    let props = {};
    switch (condition.type) {
      case 'TEXT':
      case 'NUMBER':
        props['type'] = condition.type === 'NUMBER' ? 'number' : 'text';
        return (h("fw-input-condition", { key: `${this.filterOn}-${this.identifier}`, value: this.value, controlProps: Object.assign(Object.assign({}, this.controlProps), props), ref: (conditionElement) => (this.conditionElement = conditionElement) }));
      case 'NUMBER_RANGE':
        return (h("fw-input-range-condition", { key: `${this.filterOn}-${this.identifier}`, value: this.value, controlProps: this.controlProps, ref: (conditionElement) => (this.conditionElement = conditionElement) }));
      case 'DROPDOWN':
        return (h("fw-select-condition", { key: `${this.filterOn}-${this.identifier}`, value: this.value, controlProps: this.controlProps, ref: (conditionElement) => (this.conditionElement = conditionElement) }));
      case 'MULTI_SELECT':
        props['multiple'] = true;
        return (h("fw-select-condition", { key: `${this.filterOn}-${this.identifier}`, value: this.value, controlProps: Object.assign(Object.assign({}, this.controlProps), props), ref: (conditionElement) => (this.conditionElement = conditionElement) }));
      case 'DATE':
        props = {
          displayFormat: 'dd MMM yyyy',
          readonly: true,
          value: this.value,
        };
        return (h("fw-date-condition", { key: `${this.filterOn}-${this.selectedCondition}`, controlProps: Object.assign(Object.assign({}, this.controlProps), props), ref: (conditionElement) => (this.conditionElement = conditionElement) }));
      case 'DATE_RANGE':
        props = { displayFormat: 'dd MMM yyyy', readonly: true, mode: 'range' };
        if (this.value) {
          const { from: fromDate, to: toDate } = this.value;
          if (fromDate && toDate) {
            const value = { fromDate, toDate };
            props = Object.assign(Object.assign({}, props), value);
          }
        }
        return (h("fw-date-condition", { key: `${this.filterOn}-${this.selectedCondition}`, controlProps: Object.assign(Object.assign({}, this.controlProps), props), ref: (conditionElement) => (this.conditionElement = conditionElement) }));
    }
  }
  componentWillLoad() {
    this.onConditionChange(this.condition);
    this.onValueChange(this.value);
    this.setConditionOptions(this.conditionSchema);
  }
  render() {
    return (h("div", { class: 'container' }, h("div", { class: 'header' }, h("div", { class: 'header-text' }, h("span", { class: 'displayText' }, this.filterText), h("fw-filter-dropdown", { id: 'condition-select', value: this.condition, options: this.conditionOptions })), h("span", { onClick: () => {
        this.fwDelete.emit({ value: this.filterOn });
      }, class: 'closeBtn' }, h("fw-icon", { name: 'cross', color: '#264966', size: 8 }))), h("div", { class: 'content' }, this.renderContent(this.conditionSchema[this.selectedCondition]))));
  }
  static get watchers() { return {
    "condition": ["onConditionChange"],
    "value": ["onValueChange"]
  }; }
  static get style() { return filterConditionCss; }
}, [1, "fw-filter-condition", {
    "selectedCondition": [1032, "selected-condition"],
    "valueState": [1032, "value-state"],
    "filterOn": [8, "filter-on"],
    "conditionSchema": [16],
    "filterText": [16],
    "condition": [8],
    "value": [1032],
    "controlProps": [16],
    "identifier": [8],
    "conditionElement": [32],
    "conditions": [32],
    "conditionOptions": [32],
    "isValid": [64]
  }, [[0, "fwChange", "onSelection"], [0, "fwInput", "onInputChange"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-filter-condition", "fw-avatar", "fw-button", "fw-checkbox", "fw-date-condition", "fw-datepicker", "fw-filter-dropdown", "fw-icon", "fw-input", "fw-input-condition", "fw-input-range-condition", "fw-list-options", "fw-popover", "fw-select", "fw-select-condition", "fw-select-option", "fw-spinner", "fw-tag", "fw-timepicker", "fw-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-filter-condition":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FilterCondition);
      }
      break;
    case "fw-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$j();
      }
      break;
    case "fw-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$i();
      }
      break;
    case "fw-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$h();
      }
      break;
    case "fw-date-condition":
      if (!customElements.get(tagName)) {
        defineCustomElement$g();
      }
      break;
    case "fw-datepicker":
      if (!customElements.get(tagName)) {
        defineCustomElement$f();
      }
      break;
    case "fw-filter-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$e();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "fw-input-condition":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "fw-input-range-condition":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "fw-list-options":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "fw-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "fw-select":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "fw-select-condition":
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

export { FilterCondition as F, defineCustomElement as d };
