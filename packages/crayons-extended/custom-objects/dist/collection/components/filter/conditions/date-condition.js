import { Component, Listen, State, Prop, h, Method } from '@stencil/core';
import { TranslationController } from '../../../global/Translation';
export class DateCondition {
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
    this.datepicker.clearValue();
    this.setError(false);
  }
  requiredValidation() {
    if (this.controlProps['mode'] === 'range') {
      this.valueRangeExists(this.value)
        ? this.setError(false)
        : this.setError(true, TranslationController.t('filters.validation.required'));
    }
    else {
      this.valueExists(this.value)
        ? this.setError(false)
        : this.setError(true, TranslationController.t('filters.validation.required'));
    }
  }
  valueExists(value) {
    return !(typeof value === 'undefined' || value === '');
  }
  valueRangeExists(value) {
    return (value &&
      this.valueExists(value['fromDate']) &&
      this.valueExists(value['toDate']));
  }
  componentWillLoad() {
    if (this.controlProps['mode'] === 'range') {
      this.value = {
        fromDate: this.controlProps['fromDate'],
        toDate: this.controlProps['toDate'],
      };
    }
    else {
      this.value = this.controlProps['value'];
    }
  }
  render() {
    return (h("fw-datepicker", Object.assign({ ref: (datepicker) => (this.datepicker = datepicker), state: this.state, hintText: this.hintText, errorText: this.errorText }, this.controlProps, { readonly: true })));
  }
  static get is() { return "fw-date-condition"; }
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
      "name": "fwChange",
      "method": "onSelectionChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
