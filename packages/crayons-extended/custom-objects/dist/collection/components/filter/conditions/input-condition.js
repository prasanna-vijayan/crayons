import { Component, Listen, State, Prop, h, Method } from '@stencil/core';
import { TranslationController } from '../../../global/Translation';
export class InputCondition {
  constructor() {
    this.state = 'normal';
    this.hintText = '';
    this.errorText = '';
    /**
     * The value of the input
     */
    this.value = '';
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
  onInputChange(e) {
    this.value = e.detail.value;
  }
  async isValid() {
    if (this.error) {
      return !this.error;
    }
    this.requiredValidation();
    return !this.error;
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
  async refresh() {
    this.value = undefined;
    this.setError(false);
  }
  requiredValidation() {
    this.valueExists(this.value)
      ? this.setError(false)
      : this.setError(true, TranslationController.t('filters.validation.required'));
  }
  valueExists(value) {
    return !(typeof value === 'undefined' || value === '' || value === null);
  }
  componentWillLoad() { }
  render() {
    return (h("fw-input", Object.assign({}, this.controlProps, { state: this.state, hintText: this.hintText, errorText: this.errorText, value: this.value })));
  }
  static get is() { return "fw-input-condition"; }
  static get encapsulation() { return "shadow"; }
  static get styles() { return ":host {display: block}"; }
  static get properties() { return {
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The value of the input"
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "''"
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
