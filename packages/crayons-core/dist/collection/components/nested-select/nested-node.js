import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';
export class NestedNode {
  constructor() {
    /**
     * State to maintain selectedOption
     */
    this.selectedOption = null;
    /**
     * Options to pass through and loop
     */
    this.options = [];
    /**
     * level to keep track of selected options and
     * reset on parent option changes
     */
    this.level = 0;
    /**
     * Name of the field value gets updated to
     */
    this.name = '';
    /**
     * Current selected value if passed from initialvalues
     */
    this.value = '';
    /**
     * label
     */
    this.label = '';
    /**
     * OptionValue path
     */
    this.optionValuePath = 'id';
    /**
     * optionLabelPath
     */
    this.optionLabelPath = 'value';
  }
  optionsChanged() {
    this.selectedOption = null;
    this.selectRef.setSelectedValues('');
  }
  changed(event) {
    var _a;
    console.log('IN CHANGE in Level' + this.level, event.target.level);
    if (!event.detail.level) {
      event.detail.level = this.level;
      if ((_a = event.detail.meta.selectedOptions[0]) === null || _a === void 0 ? void 0 : _a.choices) {
        this.selectedOption = event.detail.meta.selectedOptions[0];
      }
    }
  }
  componentWillLoad() {
    if (this.value) {
      this.selectedOption = this.options.find((item) => item[this.optionValuePath] === this.value);
    }
  }
  getFirstlevelNestedSelect() {
    if (!this.selectedOption) {
      return null;
    }
    const { value } = this.selectProps(this.selectedOption.name);
    return (h("div", { class: 'nest_indent' },
      h("fw-nested-node", { options: this.selectedOption.choices, name: this.selectedOption.name, label: this.selectedOption.label, value: value, level: this.level + 1, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, selectProps: this.selectProps })));
  }
  getNestedSelect() {
    if (!this.selectedOption || !this.selectedOption.choices) {
      return null;
    }
    const { value } = this.selectProps(this.selectedOption.name);
    return (h("fw-nested-node", { options: this.selectedOption.choices, name: this.selectedOption.name, label: this.selectedOption.label, value: value, level: this.level + 1, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, selectProps: this.selectProps }));
  }
  render() {
    return (h("div", { class: 'nest' },
      h("fw-select", { label: this.label, options: this.options, name: this.name, value: this.value, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, ref: (select) => (this.selectRef = select) }),
      this.level === 0
        ? this.getFirstlevelNestedSelect()
        : this.getNestedSelect()));
  }
  static get is() { return "fw-nested-node"; }
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
        "text": "Options to pass through and loop"
      },
      "defaultValue": "[]"
    },
    "level": {
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
        "text": "level to keep track of selected options and\nreset on parent option changes"
      },
      "attribute": "level",
      "reflect": false,
      "defaultValue": "0"
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
        "text": "Name of the field value gets updated to"
      },
      "attribute": "name",
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
        "text": "Current selected value if passed from initialvalues"
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
        "text": "label"
      },
      "attribute": "label",
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
        "text": "OptionValue path"
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
        "text": "optionLabelPath"
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
        "text": "Fn to return initialValues from properties"
      },
      "attribute": "select-props",
      "reflect": false
    }
  }; }
  static get states() { return {
    "selectedOption": {}
  }; }
  static get watchers() { return [{
      "propName": "options",
      "methodName": "optionsChanged"
    }]; }
  static get listeners() { return [{
      "name": "fwChange",
      "method": "changed",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
