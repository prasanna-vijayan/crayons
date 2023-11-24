import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { i as i18nText } from './form-builder-utils.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './popover.js';
import { d as defineCustomElement$1 } from './tooltip.js';

const fieldTypeMenuItemCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}@media screen and (prefers-reduced-motion: reduce){.field-type-menu-item-add-button-container{-webkit-transition:none;transition:none}}.field-type-menu-item{width:100%;height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative}.field-type-menu-item .field-type-menu-item-draggable-container{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:8px;outline:0;background-color:#fff;border:1px solid #ebeff3;-webkit-box-shadow:0px 2px 4px rgba(18, 52, 77, 0.06);box-shadow:0px 2px 4px rgba(18, 52, 77, 0.06);border-radius:4px;cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.field-type-menu-item .field-type-menu-item-icon-container{width:24px;height:24px;-webkit-margin-end:8px;margin-inline-end:8px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:4px}.field-type-menu-item .field-type-menu-item-label{max-width:calc(100% - 24px - 24px - 8px);width:auto;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#12344d;font-size:14px;font-weight:400;word-break:break-word;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.field-type-menu-item .field-type-menu-item-add-button-container{width:24px;height:24px;position:absolute;inset-inline-end:4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;cursor:pointer;opacity:0}.field-type-menu-item:hover .field-type-menu-item-add-button-container{opacity:1}.field-type-menu-item:focus .field-type-menu-item-add-button-container{opacity:1}.field-type-menu-item--dragging{border-radius:50%}.field-type-menu-item--dragging .field-type-menu-item-add-button-container{opacity:0}.field-type-menu-item--disabled{cursor:not-allowed;opacity:0.6}.field-type-menu-item--disabled .field-type-menu-item-draggable-container{cursor:not-allowed;pointer-events:none}.field-type-menu-item--disabled .field-type-menu-item-add-button-container{cursor:not-allowed;pointer-events:none}.field-type-menu-item--disabled:hover .field-type-menu-item-add-button-container,.field-type-menu-item--disabled:focus .field-type-menu-item-add-button-container{opacity:0}";

const FieldTypeMenuItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwAddClick = createEvent(this, "fwAddClick", 7);
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * index attached inside the parent group component
     */
    this.index = -1;
    /**
     * data source used to set and edit the field values
     */
    this.dataProvider = null;
    /**
     * field type attached to the item which will be broadcasted for adding the field type.
     */
    this.value = '';
    /**
     * Label displayed as header in the card.
     */
    this.label = '';
    /**
     * tooltip to be shown on hover
     */
    this.tooltip = '';
    /**
     * backgroundcolor for the icon
     */
    this.iconBackgroundColor = '#ebeff3';
    /**
     * set the icon path to be used
     */
    this.iconName = '';
    /**
     * Name of the component, saved as part of the form data.
     */
    this.name = '';
    this.addButtonClickHandler = () => {
      this.fwAddClick.emit({
        value: this.value,
        data: this.dataProvider,
        index: this.index,
      });
    };
  }
  render() {
    const strBaseClassName = 'field-type-menu-item';
    let strComponentClassName = strBaseClassName;
    if (this.disabled) {
      strComponentClassName += ` ${strBaseClassName}--disabled`;
    }
    return (h(Host, { tabIndex: '-1' }, h("fw-tooltip", { placement: 'right', trigger: 'hover', content: this.tooltip }, h("div", { class: strComponentClassName }, h("div", { class: `${strBaseClassName}-draggable-container`, draggable: true }, h("span", { class: `${strBaseClassName}-icon-container`, style: { backgroundColor: this.iconBackgroundColor } }, h("fw-icon", { size: 14, name: this.iconName, color: '#475867' })), h("label", { class: `${strBaseClassName}-label` }, i18nText(this.label))), h("span", { class: `${strBaseClassName}-add-button-container`, onClick: this.addButtonClickHandler }, h("fw-icon", { size: 10, name: 'plus', color: '#12344D' }))))));
  }
  get host() { return this; }
  static get style() { return fieldTypeMenuItemCss; }
}, [1, "fw-field-type-menu-item", {
    "disabled": [1540],
    "index": [2],
    "dataProvider": [8, "data-provider"],
    "value": [1],
    "label": [1],
    "tooltip": [1],
    "iconBackgroundColor": [1, "icon-background-color"],
    "iconName": [1, "icon-name"],
    "name": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-field-type-menu-item", "fw-icon", "fw-popover", "fw-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-field-type-menu-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldTypeMenuItem);
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-popover":
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

export { FieldTypeMenuItem as F, defineCustomElement as d };
