/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component, Event, Element, Prop, h, Host, } from '@stencil/core';
import { i18nText } from '../utils/form-builder-utils';
export class FieldTypeMenuItem {
  constructor() {
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
    return (h(Host, { tabIndex: '-1' },
      h("fw-tooltip", { placement: 'right', trigger: 'hover', content: this.tooltip },
        h("div", { class: strComponentClassName },
          h("div", { class: `${strBaseClassName}-draggable-container`, draggable: true },
            h("span", { class: `${strBaseClassName}-icon-container`, style: { backgroundColor: this.iconBackgroundColor } },
              h("fw-icon", { size: 14, name: this.iconName, color: '#475867' })),
            h("label", { class: `${strBaseClassName}-label` }, i18nText(this.label))),
          h("span", { class: `${strBaseClassName}-add-button-container`, onClick: this.addButtonClickHandler },
            h("fw-icon", { size: 10, name: 'plus', color: '#12344D' }))))));
  }
  static get is() { return "fw-field-type-menu-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["field-type-menu-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["field-type-menu-item.css"]
  }; }
  static get properties() { return {
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
    "value": {
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
        "text": "field type attached to the item which will be broadcasted for adding the field type."
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
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
    "tooltip": {
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
        "text": "tooltip to be shown on hover"
      },
      "attribute": "tooltip",
      "reflect": false,
      "defaultValue": "''"
    },
    "iconBackgroundColor": {
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
        "text": "backgroundcolor for the icon"
      },
      "attribute": "icon-background-color",
      "reflect": false,
      "defaultValue": "'#ebeff3'"
    },
    "iconName": {
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
        "text": "set the icon path to be used"
      },
      "attribute": "icon-name",
      "reflect": false,
      "defaultValue": "''"
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
      "method": "fwAddClick",
      "name": "fwAddClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the the add button is clicked."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
}
