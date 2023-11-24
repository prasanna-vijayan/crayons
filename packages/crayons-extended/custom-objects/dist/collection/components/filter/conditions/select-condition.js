import { Component, Listen, State, Prop, h, Method } from '@stencil/core';
import { TranslationController } from '../../../global/Translation';
export class SelectCondition {
  constructor() {
    this.state = 'normal';
    this.hintText = '';
    this.errorText = '';
    /**
     * Whether the component have any error.
     */
    this.error = false;
    /**
     * Whether to show the error.
     */
    this.showError = true;
    /**
     * The props to be passed to the crayons component.
     */
    this.controlProps = {};
  }
  onInputBlur() {
    this.requiredValidation();
  }
  onSelectionChange(e) {
    var _a, _b;
    this.value = (_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.selectedOptions;
  }
  async isValid() {
    if (this.error) {
      return !this.error;
    }
    this.requiredValidation();
    return !this.error;
  }
  async refresh() {
    this.value = undefined;
    this.setError(false);
  }
  async setError(error, errorText) {
    this.error = error;
    if (error) {
      this.state = 'error';
      this.showError && (this.errorText = errorText);
    }
    else {
      this.state = 'normal';
      this.hintText = '';
    }
  }
  requiredValidation() {
    this.valueExists(this.value)
      ? this.setError(false)
      : this.setError(true, TranslationController.t('filters.validation.required'));
  }
  valueExists(value) {
    return !(typeof value === 'undefined' ||
      value === '' ||
      (value === null || value === void 0 ? void 0 : value.length) === 0);
  }
  componentWillLoad() { }
  render() {
    return (h("fw-select", Object.assign({ state: this.state, hintText: this.hintText, errorText: this.errorText, selectedOptions: this.value }, this.controlProps)));
  }
  static get is() { return "fw-select-condition"; }
  static get encapsulation() { return "shadow"; }
  static get styles() { return ":host {display: block}"; }
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
    "showError": {
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
        "text": "Whether to show the error."
      },
      "attribute": "show-error",
      "reflect": true,
      "defaultValue": "true"
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
    "state": {},
    "hintText": {},
    "errorText": {}
  }; }
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
    },
    "refresh": {
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
    },
    "setError": {
      "complexType": {
        "signature": "(error: any, errorText?: any) => Promise<any>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
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
      "name": "fwChange",
      "method": "onSelectionChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
