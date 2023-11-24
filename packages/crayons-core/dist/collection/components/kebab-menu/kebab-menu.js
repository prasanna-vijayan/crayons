import { Component, Prop, h, Listen, Event } from '@stencil/core';
export class KebabMenu {
  constructor() {
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
      return (h("fw-popover", { ref: (popoverRef) => (this.popoverRef = popoverRef), sameWidth: false, placement: 'bottom-end', hoist: true },
        h("fw-button", { slot: 'popover-trigger', size: 'icon', color: 'text' },
          h("fw-icon", { name: 'more-vertical', size: 14 })),
        h("fw-list-options", { slot: 'popover-content', options: this.options, variant: this.variant, allowSelect: false, hideTick: true })));
    }
    else {
      return;
    }
  }
  static get is() { return "fw-kebab-menu"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The data for the kebab menu component, the options will be of type array of fw-select-options."
      },
      "defaultValue": "[]"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'standard' | 'icon'",
        "resolved": "\"icon\" | \"standard\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Standard is the default option without any graphics other option is icon which places the icon at the beginning of the row.\nThe props for the icon are passed as an object via the graphicsProps."
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'standard'"
    }
  }; }
  static get events() { return [{
      "method": "fwSelect",
      "name": "fwSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "fwSelect event is emitted when an option is clicked from the list."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get listeners() { return [{
      "name": "fwSelectAttempted",
      "method": "fwSelectHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
