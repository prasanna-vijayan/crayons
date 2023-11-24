import { Component, Listen, State, Prop, Event, h, Method, } from '@stencil/core';
import { TranslationController } from '../../../global/Translation';
export class InputRangeCondition {
  constructor() {
    /**
     * Whether the component have any error.
     */
    this.error = false;
    /**
     * The props to be passed to the crayons component.
     */
    this.controlProps = {};
  }
  onInputBlur() {
    this.valueExists(this.fromValue) &&
      this.valueExists(this.toValue) &&
      this.minMaxValidation();
  }
  onInputChange(e) {
    const { tagName, name } = e.composedPath()[0];
    if (tagName === 'FW-INPUT') {
      const inputValue = e.detail.value;
      const parsedValue = this.valueExists(inputValue)
        ? parseInt(inputValue)
        : '';
      if (name === 'from') {
        this.fromValue = parsedValue;
      }
      else {
        this.toValue = parsedValue;
      }
      this.value = { from: this.fromValue, to: this.toValue };
      this.fwInput.emit({ value: this.value });
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
    }
  }
  async isValid() {
    if (this.error) {
      return !this.error;
    }
    this.requiredValidation();
    !this.error && this.minMaxValidation();
    return !this.error;
  }
  requiredValidation() {
    this.fromElement.isValid();
    this.toElement.isValid();
    this.error = !(this.valueExists(this.fromValue) && this.valueExists(this.toValue));
  }
  minMaxValidation() {
    if (this.fromValue >= this.toValue || this.toValue < this.fromValue) {
      this.error = true;
      this.toElement.setError(true, TranslationController.t('filters.validation.minMax', {
        fromValue: this.fromValue,
      }));
    }
    else {
      this.error = false;
      this.toElement.setError(false);
    }
  }
  valueExists(value) {
    return !(typeof value === 'undefined' || value === '');
  }
  componentWillLoad() {
    var _a, _b;
    this.fromValue = (_a = this.value) === null || _a === void 0 ? void 0 : _a.from;
    this.toValue = (_b = this.value) === null || _b === void 0 ? void 0 : _b.to;
  }
  render() {
    return (h("div", { class: 'range-container' },
      h("fw-input-condition", { controlProps: Object.assign(Object.assign({}, this.controlProps), { type: 'number', name: 'from', placeholder: TranslationController.t('filters.placeholder.startRange') }), ref: (fromElement) => {
          this.fromElement = fromElement;
        }, value: this.fromValue }),
      h("span", { class: 'range-text' },
        ' ',
        TranslationController.t('filters.placeholder.and'),
        ' '),
      h("fw-input-condition", { controlProps: Object.assign(Object.assign({}, this.controlProps), { type: 'number', name: 'to', placeholder: TranslationController.t('filters.placeholder.endRange') }), ref: (toElement) => {
          this.toElement = toElement;
        }, value: this.toValue })));
  }
  static get is() { return "fw-input-range-condition"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["input-range-condition.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["input-range-condition.css"]
  }; }
  static get properties() { return {
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
        "text": "The value of the input"
      },
      "attribute": "value",
      "reflect": true
    },
    "error": {
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
        "text": "Whether the component have any error."
      },
      "attribute": "error",
      "reflect": true,
      "defaultValue": "false"
    },
    "controlProps": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "{}",
        "resolved": "{}",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The props to be passed to the crayons component."
      },
      "defaultValue": "{}"
    }
  }; }
  static get states() { return {
    "fromValue": {},
    "toValue": {}
  }; }
  static get events() { return [{
      "method": "fwInput",
      "name": "fwInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the value in the input box is modified."
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
  static get listeners() { return [{
      "name": "fwBlur",
      "method": "onInputBlur",
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
