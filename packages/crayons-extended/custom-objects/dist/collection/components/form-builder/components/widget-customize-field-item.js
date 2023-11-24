import { Component, Event, Element, Prop, h, Host, } from '@stencil/core';
export class WidgetCustomizeFieldItem {
  constructor() {
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
    return (h(Host, { tabIndex: '-1' },
      h("div", { class: strComponentClassName },
        h("fw-checkbox", { class: `${strBaseClassName}-checkbox`, checked: this.selected, disabled: this.disabled, value: this.dataProvider.name, onFwChange: this.checkboxSelectionChangeHandler }, this.label))));
  }
  static get is() { return "fw-widget-customize-field-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["widget-customize-field-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["widget-customize-field-item.css"]
  }; }
  static get properties() { return {
    "pinned": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'top' | 'bottom' | ''",
        "resolved": "\"\" | \"bottom\" | \"top\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Pinned position of the drag item, other drag item cannot be placed above or below it."
      },
      "attribute": "pinned",
      "reflect": false
    },
    "disabled": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Disables the component on the interface. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "selected": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "selected property of the component"
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "index": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "index attached inside the parent group component"
      },
      "attribute": "index",
      "reflect": false,
      "defaultValue": "-1"
    },
    "dataProvider": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "data source used to set and edit the field values"
      },
      "attribute": "data-provider",
      "reflect": false,
      "defaultValue": "null"
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Label displayed as header in the card."
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    },
    "isPrimaryField": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "defines if the field is primary"
      },
      "attribute": "is-primary-field",
      "reflect": false,
      "defaultValue": "false"
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Name of the component, saved as part of the form data."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get events() { return [{
      "method": "fwCheck",
      "name": "fwCheck",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the card in focus is selected."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
}
