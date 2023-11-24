import { Component, Prop, Listen, h, Event } from '@stencil/core';
export class NestedSelect {
  constructor() {
    this.selections = [];
    this.selectedItems = {};
    /**
     * Options to display
     */
    this.options = [];
    /**
     * Name of first level field
     */
    this.name = '';
    /**
     * label
     */
    this.label = '';
    /**
     * Initial value from first level choices
     */
    this.value = '';
    /**
     * OptionValuePath referred from field
     */
    this.optionValuePath = 'id';
    /**
     * OptionLabelPath referred from field
     */
    this.optionLabelPath = 'value';
  }
  changed(event) {
    if (!event.detail.meta) {
      return;
    }
    this.selections[event.detail.level] = event.detail.meta.selectedOptions[0];
    const itemsToRemove = this.selections.length - (event.detail.level + 1);
    if (itemsToRemove > 0) {
      this.selections = this.selections.slice(0, event.detail.level + 1);
    }
    this.getSelectedId(this.selections[event.detail.level], event.detail.name);
    if (!this.selections[event.detail.level].choices) {
      this.fwChange.emit(Object.assign({}, this.selectedItems));
    }
  }
  getSelectedId(selectedValues, name) {
    const id = selectedValues[this.optionValuePath];
    if (id) {
      this.selectedItems = Object.assign(Object.assign({}, this.selectedItems), { [name]: selectedValues[this.optionValuePath] });
    }
    else {
      delete this.selectedItems[name];
    }
  }
  render() {
    return (h("fw-nested-node", { options: this.options, name: this.name, value: this.value, label: this.label, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, selectProps: this.selectProps }));
  }
  static get is() { return "fw-nested-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["nested-select.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["nested-select.css"]
  }; }
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
        "text": "Options to display"
      },
      "defaultValue": "[]"
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
        "text": "Name of first level field"
      },
      "attribute": "name",
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
        "text": "label"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
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
        "text": "Initial value from first level choices"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    },
    "optionValuePath": {
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
        "text": "OptionValuePath referred from field"
      },
      "attribute": "option-value-path",
      "reflect": false,
      "defaultValue": "'id'"
    },
    "optionLabelPath": {
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
        "text": "OptionLabelPath referred from field"
      },
      "attribute": "option-label-path",
      "reflect": false,
      "defaultValue": "'value'"
    },
    "selectProps": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Function to return initialValues"
      },
      "attribute": "select-props",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "fwChange",
      "name": "fwChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when nested selection doesn't have choices"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get listeners() { return [{
      "name": "fwChange",
      "method": "changed",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
