import { Component, Element, Event, Method, Prop, State, h, } from '@stencil/core';
import { handleKeyDown, renderHiddenField, hasSlot } from '../../utils';
import FieldControl from '../../function-components/field-control';
export class Input {
  constructor() {
    this.hasFocus = false;
    this.hasPrefix = false;
    this.hasHintTextSlot = false;
    this.hasWarningTextSlot = false;
    this.hasErrorTextSlot = false;
    /**
     * Label displayed on the interface, for the component.
     */
    this.label = '';
    /**
     * Default value displayed in the input box.
     */
    this.value = '';
    /**
     * Type of value accepted as the input value. If a user enters a value other than the specified type, the input box is not populated.
     */
    this.type = 'text';
    /**
     * Specifies whether the browser can display suggestions to autocomplete the text value.
     */
    this.autocomplete = 'off';
    /**
     * Displays a right-justified clear icon in the text box. Clicking the icon clears the input text. If the attribute’s value is undefined, the value is set to false. For a read-only input box, the clear icon is not displayed unless a default value is specified for the input box.
     */
    this.clearInput = false;
    /**
     * The step attribute is used when the type is `number`. It specifies the interval between legal numbers in a number/decimal input element.
     * Works with the min and max attributes to limit the increments at which a value can be set.
     * Possible values are `any` or a positive floating point number.
     * Default value is `any`
     */
    this.step = 'any';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Theme based on which the text box is styled.
     */
    this.state = 'normal';
    /**
     * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to false.
     */
    this.readonly = false;
    /**
     * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Identifier of the icon that is displayed in the left side of the text box. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
     */
    this.iconLeft = undefined;
    /**
     * Identifier of the icon that is displayed in the right side of the text box. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
     */
    this.iconRight = undefined;
    /**
     * Hint text displayed below the text box.
     */
    this.hintText = '';
    /**
     * Warning text displayed below the text box.
     */
    this.warningText = '';
    /**
     * Error text displayed below the text box.
     */
    this.errorText = '';
    this.onInput = (ev) => {
      const input = ev.target;
      this.value = input.value || '';
      this.fwInput.emit({
        event: ev,
        name: this.name,
        value: this.getValue(),
      });
    };
    this.onFocus = () => {
      this.hasFocus = true;
      this.fwFocus.emit();
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.fwBlur.emit({
        event: ev,
        name: this.name,
      });
    };
    this.onKeyDown = (ev) => {
      this.fwInputKeyDown.emit({
        event: ev,
      });
    };
    this.clearTextInput = (ev) => {
      if (!this.disabled) {
        this.value = '';
        if (this.nativeInput) {
          this.nativeInput.value = '';
        }
        this.fwInputClear.emit({
          event: ev,
          name: this.name,
          value: this.value,
        });
      }
    };
  }
  showClearButton() {
    var _a;
    return this.clearInput && !this.disabled && ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) > 0;
  }
  getValue() {
    return this.value || '';
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  /**
   * Sets focus on a specific `fw-input`. Use this method instead of the global `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  renderClearButton() {
    return (h("div", { class: 'clear-button', role: 'button', tabindex: '0', onClick: (e) => this.clearTextInput(e), onKeyDown: handleKeyDown(this.clearTextInput) },
      h("fw-icon", { class: 'clear-img', name: 'cross', size: 8, library: 'system' })));
  }
  renderIcon(iconName) {
    return h("fw-icon", { name: iconName });
  }
  componentWillLoad() {
    this.hasPrefix =
      !!this.host.querySelector('[slot="input-prefix"]') || !!this.iconLeft;
    this.checkSlotContent();
  }
  getAriaDescribedBy() {
    if (this.state === 'normal')
      return `hint-${this.name}`;
    else if (this.state === 'error')
      return `error-${this.name}`;
    else if (this.state === 'warning')
      return `warning-${this.name}`;
    return null;
  }
  checkSlotContent() {
    this.hasHintTextSlot = hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
  }
  render() {
    const { host, name, value } = this;
    renderHiddenField(host, name, value);
    return (h(FieldControl, { inputId: this.name, label: this.label, labelId: `${this.label}-${this.name}`, state: this.state, hintTextId: `hint-${this.name}`, hintText: this.hintText, hasHintTextSlot: this.hasHintTextSlot, errorTextId: `error-${this.name}`, errorText: this.errorText, hasErrorTextSlot: this.hasErrorTextSlot, warningTextId: `warning-${this.name}`, warningText: this.warningText, hasWarningTextSlot: this.hasWarningTextSlot, required: this.required },
      h("div", { "aria-disabled": this.disabled, class: {
          'has-value': this.hasValue(),
          'has-focus': this.hasFocus,
        } },
        h("div", { class: {
            'input-container': true,
          } },
          h("div", { class: {
              'input-container-inner': true,
              'has-focus': this.hasFocus,
              'disabled': this.disabled,
              [this.state]: true,
            } },
            h("div", { class: 'inner__content' },
              h("div", { class: { input__prefix: true, hasContent: this.hasPrefix } },
                this.iconLeft && this.renderIcon(this.iconLeft),
                h("slot", { name: 'input-prefix' })),
              h("div", { class: 'input__label' },
                h("input", { ref: (input) => {
                    this.nativeInput = input;
                  }, id: this.name, autoComplete: this.autocomplete, disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', minLength: this.minlength, maxLength: this.maxlength, min: this.min, max: this.max, readOnly: this.readonly, required: this.required, step: this.step, type: this.type, value: this.value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown, "aria-invalid": this.state === 'error', "aria-describedby": this.getAriaDescribedBy() }),
                this.showClearButton() && this.renderClearButton())),
            h("div", { class: 'inner__suffix' },
              this.iconRight && this.renderIcon(this.iconRight),
              h("slot", { name: 'input-suffix' })))))));
  }
  static get is() { return "fw-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["input.css"]
  }; }
  static get properties() { return {
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
        "text": "Label displayed on the interface, for the component."
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string | null",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Default value displayed in the input box."
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'text' | 'number' | 'email' | 'url'",
        "resolved": "\"email\" | \"number\" | \"text\" | \"url\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Type of value accepted as the input value. If a user enters a value other than the specified type, the input box is not populated."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "autocomplete": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'on' | 'off'",
        "resolved": "\"off\" | \"on\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Specifies whether the browser can display suggestions to autocomplete the text value."
      },
      "attribute": "autocomplete",
      "reflect": false,
      "defaultValue": "'off'"
    },
    "clearInput": {
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
        "text": "Displays a right-justified clear icon in the text box. Clicking the icon clears the input text. If the attribute\u2019s value is undefined, the value is set to false. For a read-only input box, the clear icon is not displayed unless a default value is specified for the input box."
      },
      "attribute": "clear-input",
      "reflect": false,
      "defaultValue": "false"
    },
    "maxlength": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Maximum number of characters a user can enter in the text box."
      },
      "attribute": "maxlength",
      "reflect": false
    },
    "minlength": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Minimum number of characters a user must enter in the text box for the value to be valid."
      },
      "attribute": "minlength",
      "reflect": false
    },
    "max": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Specifies a maximum value that can be entered for the number/decimal input."
      },
      "attribute": "max",
      "reflect": false
    },
    "min": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Specifies a minimum value that can be entered for the number/decimal input."
      },
      "attribute": "min",
      "reflect": false
    },
    "step": {
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
        "text": "The step attribute is used when the type is `number`. It specifies the interval between legal numbers in a number/decimal input element.\nWorks with the min and max attributes to limit the increments at which a value can be set.\nPossible values are `any` or a positive floating point number.\nDefault value is `any`"
      },
      "attribute": "step",
      "reflect": false,
      "defaultValue": "'any'"
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
        "text": "Name of the component, saved as part of form data."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | null",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Text displayed in the text box before a user enters a value."
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "state": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'normal' | 'warning' | 'error'",
        "resolved": "\"error\" | \"normal\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Theme based on which the text box is styled."
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'normal'"
    },
    "readonly": {
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
        "text": "If true, the user cannot enter a value in the input box. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "readonly",
      "reflect": false,
      "defaultValue": "false"
    },
    "required": {
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
        "text": "Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "disabled": {
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
        "text": "Disables the component on the interface. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "iconLeft": {
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
        "text": "Identifier of the icon that is displayed in the left side of the text box. The attribute\u2019s value must be a valid svg file in the repo of icons (assets/icons)."
      },
      "attribute": "icon-left",
      "reflect": false,
      "defaultValue": "undefined"
    },
    "iconRight": {
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
        "text": "Identifier of the icon that is displayed in the right side of the text box. The attribute\u2019s value must be a valid svg file in the repo of icons (assets/icons)."
      },
      "attribute": "icon-right",
      "reflect": false,
      "defaultValue": "undefined"
    },
    "hintText": {
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
        "text": "Hint text displayed below the text box."
      },
      "attribute": "hint-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "warningText": {
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
        "text": "Warning text displayed below the text box."
      },
      "attribute": "warning-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "errorText": {
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
        "text": "Error text displayed below the text box."
      },
      "attribute": "error-text",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "hasFocus": {},
    "hasPrefix": {},
    "hasHintTextSlot": {},
    "hasWarningTextSlot": {},
    "hasErrorTextSlot": {}
  }; }
  static get events() { return [{
      "method": "fwFocus",
      "name": "fwFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the input box comes into focus."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "fwBlur",
      "name": "fwBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the input box loses focus."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwInput",
      "name": "fwInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when a value is entered in the input box."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwInputClear",
      "name": "fwInputClear",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when clear icon is clicked."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwInputKeyDown",
      "name": "fwInputKeyDown",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered on key down in the input box."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Sets focus on a specific `fw-input`. Use this method instead of the global `input.focus()`.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
}
