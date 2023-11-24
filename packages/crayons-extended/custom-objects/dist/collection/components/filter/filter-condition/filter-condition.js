/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Component, Prop, h, Listen, State, Method, Watch, Event, } from '@stencil/core';
export class FilterCondition {
  constructor() {
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
    return (h("div", { class: 'container' },
      h("div", { class: 'header' },
        h("div", { class: 'header-text' },
          h("span", { class: 'displayText' }, this.filterText),
          h("fw-filter-dropdown", { id: 'condition-select', value: this.condition, options: this.conditionOptions })),
        h("span", { onClick: () => {
            this.fwDelete.emit({ value: this.filterOn });
          }, class: 'closeBtn' },
          h("fw-icon", { name: 'cross', color: '#264966', size: 8 }))),
      h("div", { class: 'content' }, this.renderContent(this.conditionSchema[this.selectedCondition]))));
  }
  static get is() { return "fw-filter-condition"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["filter-condition.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["filter-condition.css"]
  }; }
  static get properties() { return {
    "selectedCondition": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The selected condition"
      },
      "attribute": "selected-condition",
      "reflect": false
    },
    "valueState": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The value state"
      },
      "attribute": "value-state",
      "reflect": false
    },
    "filterOn": {
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
        "text": "The column key for the filter."
      },
      "attribute": "filter-on",
      "reflect": false
    },
    "conditionSchema": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{}",
        "resolved": "{}",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The condition schema"
      },
      "defaultValue": "{}"
    },
    "filterText": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{}",
        "resolved": "{}",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The column display name of the filter"
      },
      "defaultValue": "{}"
    },
    "condition": {
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
        "text": "The selected condition"
      },
      "attribute": "condition",
      "reflect": false
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The value for the condition"
      },
      "attribute": "value",
      "reflect": false
    },
    "controlProps": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{}",
        "resolved": "{}",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The props to be passed to the crayons component"
      },
      "defaultValue": "{}"
    },
    "identifier": {
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
        "text": "An unique identifier for the element."
      },
      "attribute": "identifier",
      "reflect": false
    }
  }; }
  static get states() { return {
    "conditionElement": {},
    "conditions": {},
    "conditionOptions": {}
  }; }
  static get events() { return [{
      "method": "fwDelete",
      "name": "fwDelete",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event Triggered on deleting an filter condition"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "isValid": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "condition",
      "methodName": "onConditionChange"
    }, {
      "propName": "value",
      "methodName": "onValueChange"
    }]; }
  static get listeners() { return [{
      "name": "fwChange",
      "method": "onSelection",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fwInput",
      "method": "onInputChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
