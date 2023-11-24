import { Component, Element, Event, Method, Watch, Prop, State, h, } from '@stencil/core';
import { renderHiddenField, hasSlot, debounce } from '../../utils';
import FieldControl from '../../function-components/field-control';
export class Textarea {
  constructor() {
    this.hasFocus = false;
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
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Theme based on which the input box is styled.
     */
    this.state = 'normal';
    /**
     * Type of text wrapping used by the input box. If the value is hard, the text in the textarea is wrapped (contains line breaks) when the form data is saved. If the value is soft, the text in the textarea is saved as a single line, when the form data is saved.
     */
    this.wrap = 'soft';
    /**
     * Specifies the way in which the text area can be resized
     */
    this.resize = 'both';
    /**
     * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to false.
     */
    this.readonly = false;
    /**
     * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Disables the text area on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
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
      if (input) {
        this.value = input.value || '';
      }
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
    this.debouncedResizeTextArea = debounce((_e) => {
      const lineBreaksCount = this.nativeInput.value.split('\n').length + 1;
      const rows = this.rows ? this.rows : 2;
      const isLineBreakBetweenRange = lineBreaksCount >= rows && lineBreaksCount <= this.maxRows;
      if (isLineBreakBetweenRange) {
        this.nativeInput.rows = lineBreaksCount;
      }
      if (lineBreaksCount <= rows) {
        this.nativeInput.rows = rows;
      }
      if (lineBreaksCount > this.maxRows) {
        this.nativeInput.rows = this.maxRows;
      }
    }, this, this.maxRowsDebounceTimer ? this.maxRowsDebounceTimer : 200);
  }
  getValue() {
    return this.value || '';
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  /**
   * Sets focus on a specific `fw-textarea`. Use this method instead of the global `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  rowsChangeHandler() {
    if (this.maxRows) {
      this.removeListeners();
      this.addListeners();
    }
  }
  maxRowsChangeHandler() {
    this.removeListeners();
    this.addListeners();
  }
  componentWillLoad() {
    this.checkSlotContent();
  }
  checkSlotContent() {
    this.hasHintTextSlot = hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
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
  componentDidLoad() {
    if (this.maxRows) {
      this.addListeners();
    }
  }
  addListeners() {
    this.nativeInput.addEventListener('change', this.debouncedResizeTextArea);
    this.nativeInput.addEventListener('keydown', this.debouncedResizeTextArea);
  }
  removeListeners() {
    this.nativeInput.removeEventListener('change', this.debouncedResizeTextArea);
    this.nativeInput.removeEventListener('keydown', this.debouncedResizeTextArea);
  }
  render() {
    const { host, name, value } = this;
    const styleResizeTextArea = { resize: this.resize };
    renderHiddenField(host, name, value);
    return (h(FieldControl, { inputId: this.name, label: this.label, labelId: `${this.label}-${this.name}`, state: this.state, hintTextId: `hint-${this.name}`, hintText: this.hintText, hasHintTextSlot: this.hasHintTextSlot, errorTextId: `error-${this.name}`, errorText: this.errorText, hasErrorTextSlot: this.hasErrorTextSlot, warningTextId: `warning-${this.name}`, warningText: this.warningText, hasWarningTextSlot: this.hasWarningTextSlot, required: this.required },
      h("div", { "aria-disabled": this.disabled, class: {
          'has-value': this.hasValue(),
          'has-focus': this.hasFocus,
        } },
        h("div", { class: 'textarea-container' },
          h("div", { class: {
              'textarea-container-inner': true,
              [this.state]: true,
            } },
            h("textarea", { class: {
                responsive: this.cols === undefined,
              }, style: styleResizeTextArea, ref: (input) => (this.nativeInput = input), disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, required: this.required, value: this.value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, rows: this.rows, "data-max-rows": this.maxRows, cols: this.cols, wrap: this.wrap, id: this.name, "aria-invalid": this.state === 'error', "aria-describedby": this.getAriaDescribedBy() }))))));
  }
  static get is() { return "fw-textarea"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["textarea.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["textarea.css"]
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
    "cols": {
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
        "text": "Width of the input box, specified as number of columns."
      },
      "attribute": "cols",
      "reflect": false
    },
    "rows": {
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
        "text": "Height of the input box, specified as number of rows."
      },
      "attribute": "rows",
      "reflect": false
    },
    "maxRows": {
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
        "text": "Max number of rows the textarea can create when user writes content greater than regular rows."
      },
      "attribute": "max-rows",
      "reflect": false
    },
    "maxRowsDebounceTimer": {
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
        "text": "Debounce timer for setting rows dynamically based on user input and maxRows, default is 200ms."
      },
      "attribute": "max-rows-debounce-timer",
      "reflect": false
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
        "text": "Maximum number of characters a user can enter in the input box."
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
        "text": "Minimum number of characters a user must enter in the input box for the value to be valid."
      },
      "attribute": "minlength",
      "reflect": false
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
        "text": "Text displayed in the input box before a user enters a value."
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
        "text": "Theme based on which the input box is styled."
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'normal'"
    },
    "wrap": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'soft' | 'hard'",
        "resolved": "\"hard\" | \"soft\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Type of text wrapping used by the input box. If the value is hard, the text in the textarea is wrapped (contains line breaks) when the form data is saved. If the value is soft, the text in the textarea is saved as a single line, when the form data is saved."
      },
      "attribute": "wrap",
      "reflect": false,
      "defaultValue": "'soft'"
    },
    "resize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'none' | 'both' | 'horizontal' | 'vertical'",
        "resolved": "\"both\" | \"horizontal\" | \"none\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Specifies the way in which the text area can be resized"
      },
      "attribute": "resize",
      "reflect": false,
      "defaultValue": "'both'"
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
        "text": "Disables the text area on the interface. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "Sets focus on a specific `fw-textarea`. Use this method instead of the global `input.focus()`.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "rows",
      "methodName": "rowsChangeHandler"
    }, {
      "propName": "maxRows",
      "methodName": "maxRowsChangeHandler"
    }]; }
}
