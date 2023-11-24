import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './checkbox.js';
import { d as defineCustomElement$1 } from './icon.js';

const widgetCustomizeFieldItemCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;width:100%;height:auto}.widget-customize-field-item{width:100%;height:100%;padding-inline:12px;padding-block:8px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:#fff;border:1px solid #cfd7df;border-radius:4px}.widget-customize-field-item .widget-customize-field-item-icon-container{width:24px;height:24px;-webkit-margin-end:8px;margin-inline-end:8px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:4px}.widget-customize-field-item .widget-customize-field-item-checkbox{width:100%;max-width:100%;word-wrap:break-word;word-break:break-word;white-space:normal}.widget-customize-field-item--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:not-allowed}";

const WidgetCustomizeFieldItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwCheck = createEvent(this, "fwCheck", 7);
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * selected property of the component
     */
    this.selected = false;
    /**
     * index attached inside the parent group component
     */
    this.index = -1;
    /**
     * data source used to set and edit the field values
     */
    this.dataProvider = null;
    /**
     * Label displayed as header in the card.
     */
    this.label = '';
    /**
     * defines if the field is primary
     */
    this.isPrimaryField = false;
    /**
     * Name of the component, saved as part of the form data.
     */
    this.name = '';
    this.checkboxSelectionChangeHandler = (event) => {
      var _a, _b;
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.selected = (_b = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.checked;
      this.fwCheck.emit({
        checked: this.selected,
        data: this.dataProvider,
        index: this.index,
      });
    };
  }
  render() {
    if (!this.dataProvider) {
      return null;
    }
    const strBaseClassName = 'widget-customize-field-item';
    let strComponentClassName = strBaseClassName;
    if (this.disabled) {
      strComponentClassName += ` ${strBaseClassName}--disabled`;
    }
    return (h(Host, { tabIndex: '-1' }, h("div", { class: strComponentClassName }, h("fw-checkbox", { class: `${strBaseClassName}-checkbox`, checked: this.selected, disabled: this.disabled, value: this.dataProvider.name, onFwChange: this.checkboxSelectionChangeHandler }, this.label))));
  }
  get host() { return this; }
  static get style() { return widgetCustomizeFieldItemCss; }
}, [1, "fw-widget-customize-field-item", {
    "pinned": [1],
    "disabled": [1540],
    "selected": [1540],
    "index": [2],
    "dataProvider": [8, "data-provider"],
    "label": [1],
    "isPrimaryField": [4, "is-primary-field"],
    "name": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-widget-customize-field-item", "fw-checkbox", "fw-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-widget-customize-field-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, WidgetCustomizeFieldItem);
      }
      break;
    case "fw-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { WidgetCustomizeFieldItem as W, defineCustomElement as d };
