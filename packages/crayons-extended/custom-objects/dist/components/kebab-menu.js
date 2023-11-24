import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$9 } from './avatar.js';
import { d as defineCustomElement$8 } from './button.js';
import { d as defineCustomElement$7 } from './checkbox.js';
import { d as defineCustomElement$6 } from './icon.js';
import { d as defineCustomElement$5 } from './input.js';
import { d as defineCustomElement$4 } from './list-options.js';
import { d as defineCustomElement$3 } from './popover.js';
import { d as defineCustomElement$2 } from './select-option.js';
import { d as defineCustomElement$1 } from './spinner.js';

const KebabMenu = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwSelect = createEvent(this, "fwSelect", 7);
    /**
     * The data for the kebab menu component, the options will be of type array of fw-select-options.
     */
    this.options = [];
    /**
     * Standard is the default option without any graphics other option is icon which places the icon at the beginning of the row.
     * The props for the icon are passed as an object via the graphicsProps.
     */
    this.variant = 'standard';
    /**
     * Private
     * closeDropdown
     */
    this.closeDropdown = () => {
      this.popoverRef.hide();
    };
  }
  /**
   * fwSelectAttempted
   * @param selectedItem
   */
  fwSelectHandler(selectedItem) {
    const { value } = selectedItem.detail;
    this.fwSelect.emit({
      value,
    });
    this.closeDropdown();
  }
  render() {
    var _a;
    if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) {
      return (h("fw-popover", { ref: (popoverRef) => (this.popoverRef = popoverRef), sameWidth: false, placement: 'bottom-end', hoist: true }, h("fw-button", { slot: 'popover-trigger', size: 'icon', color: 'text' }, h("fw-icon", { name: 'more-vertical', size: 14 })), h("fw-list-options", { slot: 'popover-content', options: this.options, variant: this.variant, allowSelect: false, hideTick: true })));
    }
    else {
      return;
    }
  }
}, [1, "fw-kebab-menu", {
    "options": [16],
    "variant": [1]
  }, [[0, "fwSelectAttempted", "fwSelectHandler"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-kebab-menu", "fw-avatar", "fw-button", "fw-checkbox", "fw-icon", "fw-input", "fw-list-options", "fw-popover", "fw-select-option", "fw-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-kebab-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, KebabMenu);
      }
      break;
    case "fw-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "fw-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "fw-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "fw-list-options":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "fw-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-select-option":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { KebabMenu as K, defineCustomElement as d };
