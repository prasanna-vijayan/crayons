/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Prop, h, Element, State, Method } from '@stencil/core';
import { hasSlot } from '../../utils';
import { TranslationController } from '../../global/Translation';
const NATIVE_CONTROLS = ['input', 'select', 'textarea'];
/**
 * @parent form
 */
export class FormControl {
  constructor() {
    this.type = 'TEXT';
    this.hidden = false;
    this.required = false;
    this.hint = '';
    this.placeholder = '';
    this.choices = [];
    /**
     * Additional props can be passed here for crayons components. Useful when rendering crayons components implicitly via form-control.
     */
    this.fieldProps = {};
    this.touched = false;
    this.error = '';
    /**
     * Prop to determine whether to render the form-control or not.
     * Default to true.
     */
    this.shouldRender = true;
    /**
     * Disable the field from being editable
     */
    this.disabled = false;
    this.hasSlot = false;
  }
  renderControl() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
    if (this.hasSlot)
      return null;
    if (!this.name)
      return null;
    let cmp;
    switch (this.type) {
      case 'TEXT':
      case 'NUMBER':
      case 'DECIMAL':
      case 'EMAIL':
      case 'TEL':
      case 'URL': {
        const type = this.type === 'DECIMAL' ? 'number' : (_a = this.type) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        const componentProps = Object.assign(Object.assign(Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled, type: type }), (_b = this.controlProps) === null || _b === void 0 ? void 0 : _b.inputProps(this.name, type)), { state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: TranslationController.t(this.error, {
            field: this.label || this.name,
          }) });
        cmp = (h("fw-input", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        break;
      }
      case 'PARAGRAPH':
        {
          const componentProps = Object.assign(Object.assign(Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled }), (_c = this.controlProps) === null || _c === void 0 ? void 0 : _c.inputProps(this.name, (_d = this.type) === null || _d === void 0 ? void 0 : _d.toLowerCase())), { state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: TranslationController.t(this.error, {
              field: this.label || this.name,
            }) });
          cmp = (h("fw-textarea", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'DATE':
        {
          const componentProps = Object.assign(Object.assign(Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled }), (_e = this.controlProps) === null || _e === void 0 ? void 0 : _e.inputProps(this.name, (_f = this.type) === null || _f === void 0 ? void 0 : _f.toLowerCase())), { state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: TranslationController.t(this.error, {
              field: this.label || this.name,
            }) });
          cmp = (h("fw-datepicker", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'DATE_TIME':
        {
          const componentProps = Object.assign(Object.assign(Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled }), (_g = this.controlProps) === null || _g === void 0 ? void 0 : _g.inputProps(this.name, (_h = this.type) === null || _h === void 0 ? void 0 : _h.toLowerCase())), { state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: TranslationController.t(this.error, {
              field: this.label || this.name,
            }), showTimePicker: true });
          cmp = (h("fw-datepicker", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'CHECKBOX':
        {
          const componentProps = Object.assign(Object.assign(Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: '', required: this.required, disabled: this.disabled }), (_j = this.controlProps) === null || _j === void 0 ? void 0 : _j.checkboxProps(this.name, (_k = this.type) === null || _k === void 0 ? void 0 : _k.toLowerCase())), { state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: TranslationController.t(this.error, {
              field: this.label || this.name,
            }) });
          cmp = (h("fw-checkbox", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) }), this.label));
        }
        break;
      case 'RADIO':
        {
          const controlProps = (_l = this.controlProps) === null || _l === void 0 ? void 0 : _l.radioProps(this.name, (_m = this.type) === null || _m === void 0 ? void 0 : _m.toLowerCase());
          const componentProps = Object.assign(Object.assign(Object.assign({}, this.fieldProps), { 'name': this.name, 'placeholder': this.placeholder, 'label': this.label, 'required': this.required, 'allow-empty': true, 'state': (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: TranslationController.t(this.error, {
              field: this.label || this.name,
            }) }), controlProps);
          cmp = (h("fw-radio-group", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) }), (_o = this.choices
            .sort((a, b) => {
            var _a, _b;
            const apos = (_a = a === null || a === void 0 ? void 0 : a.position) !== null && _a !== void 0 ? _a : 0;
            const bpos = (_b = b === null || b === void 0 ? void 0 : b.position) !== null && _b !== void 0 ? _b : 0;
            return apos - bpos;
          })) === null || _o === void 0 ? void 0 : _o.map((ch) => {
            const val = ch[componentProps.optionValuePath] || ch.value;
            const label = ch[componentProps.optionLabelPath] || ch.value;
            return (h("fw-radio", { name: this.name, value: val, disabled: this.disabled, state: this.touched && this.error ? 'error' : 'normal' }, label));
          })));
        }
        break;
      case 'DROPDOWN':
      case 'MULTI_SELECT':
        {
          const controlProps = (_p = this.controlProps) === null || _p === void 0 ? void 0 : _p.selectProps(this.name, (_q = this.type) === null || _q === void 0 ? void 0 : _q.toLowerCase());
          const fieldOptions = (_r = this.fieldProps) === null || _r === void 0 ? void 0 : _r.field_options;
          let componentProps = Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled, multiple: this.type === 'MULTI_SELECT', state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: TranslationController.t(this.error, {
              field: this.label || this.name,
            }) });
          componentProps = Object.assign(Object.assign(Object.assign({}, componentProps), controlProps), { options: this.choices.sort((a, b) => {
              var _a, _b;
              const apos = (_a = a === null || a === void 0 ? void 0 : a.position) !== null && _a !== void 0 ? _a : 0;
              const bpos = (_b = b === null || b === void 0 ? void 0 : b.position) !== null && _b !== void 0 ? _b : 0;
              return apos - bpos;
            }) });
          // This is to handle formserv payload which might contain a field_options object, which has parameters, option_value_path and option_label_path,
          // that denotes which property of choices object(form schema) needs to be displayed as label and which should be stored in the backend as value
          if (fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.option_value_path)
            componentProps['optionValuePath'] = fieldOptions.option_value_path;
          if (fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.option_label_path)
            componentProps['optionLabelPath'] = fieldOptions.option_label_path;
          cmp = (h("fw-select", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'RELATIONSHIP':
      case 'AUTO_COMPLETE':
        {
          const controlProps = (_s = this.controlProps) === null || _s === void 0 ? void 0 : _s.selectProps(this.name, (_t = this.type) === null || _t === void 0 ? void 0 : _t.toLowerCase());
          const fieldOptions = (_u = this.fieldProps) === null || _u === void 0 ? void 0 : _u.field_options;
          const componentProps = Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled, state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: TranslationController.t(this.error, {
              field: this.label || this.name,
            }) });
          if (Array.isArray(controlProps === null || controlProps === void 0 ? void 0 : controlProps.value) &&
            typeof controlProps.value[0] === 'object'
          // handle multi_select, select [{}] initialValues
          ) {
            componentProps.selectedOptions = controlProps.value;
          }
          if (((_v = componentProps.selectedOptions) === null || _v === void 0 ? void 0 : _v.length) > 0) {
            (_w = this.crayonsControlRef) === null || _w === void 0 ? void 0 : _w.setSelectedOptions(componentProps.selectedOptions);
          }
          else if (!(controlProps === null || controlProps === void 0 ? void 0 : controlProps.value)) {
            (_x = this.crayonsControlRef) === null || _x === void 0 ? void 0 : _x.setSelectedOptions([]);
          }
          componentProps.noDataText =
            TranslationController.t('search.startTyping');
          if (fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.option_value_path)
            componentProps['optionValuePath'] = fieldOptions.option_value_path;
          if (fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.option_label_path)
            componentProps['optionLabelPath'] = fieldOptions.option_label_path;
          cmp = (h("fw-select", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'TIME':
        {
          const componentProps = Object.assign(Object.assign(Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled }), (_y = this.controlProps) === null || _y === void 0 ? void 0 : _y.inputProps(this.name, (_z = this.type) === null || _z === void 0 ? void 0 : _z.toLowerCase())), { state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: TranslationController.t(this.error, {
              field: this.label || this.name,
            }) });
          cmp = (h("fw-timepicker", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'FILES':
        {
          const multiple = ((_0 = this.fieldProps) === null || _0 === void 0 ? void 0 : _0.multiple) ? true : false;
          const errorText = this.touched && this.error
            ? TranslationController.t(this.error, {
              field: this.label || this.name,
            })
            : '';
          const controlProps = (_1 = this.controlProps) === null || _1 === void 0 ? void 0 : _1.fileProps(this.name, multiple);
          const componentProps = Object.assign(Object.assign({}, this.fieldProps), { name: this.name, description: this.placeholder, required: this.required, isBatchUpload: true, isFormLabel: true, hintText: this.hint, errorText: errorText });
          if (controlProps === null || controlProps === void 0 ? void 0 : controlProps.value) {
            componentProps.initialFiles = controlProps.value;
          }
          cmp = (h("fw-file-uploader-2", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'DEPENDENT_FIELD':
        {
          const controlProps = (_2 = this.controlProps) === null || _2 === void 0 ? void 0 : _2.selectProps(this.name, (_3 = this.type) === null || _3 === void 0 ? void 0 : _3.toLowerCase());
          const fieldOptions = (_4 = this.fieldProps) === null || _4 === void 0 ? void 0 : _4.field_options;
          let componentProps = Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled, state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: TranslationController.t(this.error, {
              field: this.label || this.name,
            }) });
          componentProps = Object.assign(Object.assign(Object.assign({}, componentProps), controlProps), { selectProps: this.controlProps.selectProps, options: this.choices.sort((a, b) => {
              var _a, _b;
              const apos = (_a = a === null || a === void 0 ? void 0 : a.position) !== null && _a !== void 0 ? _a : 0;
              const bpos = (_b = b === null || b === void 0 ? void 0 : b.position) !== null && _b !== void 0 ? _b : 0;
              return apos - bpos;
            }) });
          // This is to handle formserv payload which might contain a field_options object, which has parameters, option_value_path and option_label_path,
          // that denotes which property of choices object(form schema) needs to be displayed as label and which should be stored in the backend as value
          if (fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.option_value_path)
            componentProps['optionValuePath'] = fieldOptions.option_value_path;
          if (fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.option_label_path)
            componentProps['optionLabelPath'] = fieldOptions.option_label_path;
          cmp = (h("fw-nested-select", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
    }
    return cmp;
  }
  componentWillUpdate() {
    this.setSlotElementValue();
  }
  /**
   * Set Focus on the child
   */
  async setFocus() {
    var _a, _b, _c, _d;
    if (!this.hasSlot) {
      await ((_b = (_a = this.crayonsControlRef) === null || _a === void 0 ? void 0 : _a.setFocus) === null || _b === void 0 ? void 0 : _b.call(_a));
    }
    else {
      (_d = (_c = this.slotElement) === null || _c === void 0 ? void 0 : _c.focus) === null || _d === void 0 ? void 0 : _d.call(_c);
    }
  }
  handleSlotChange() {
    var _a;
    this.hasSlot = hasSlot(this.el);
    this.slotElement = (_a = [...this.el.querySelectorAll('*')].filter((el) => {
      var _a;
      return NATIVE_CONTROLS.includes((_a = el === null || el === void 0 ? void 0 : el.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase());
    })) === null || _a === void 0 ? void 0 : _a[0];
    this.setSlotElementValue();
  }
  /**
   * Set Value on the slotted control field on fw-form-control.
   * Useful for setting initialValues on the slotted control field
   * Assumes that the slotted control field has a prop named `value`
   */
  setSlotElementValue() {
    if (this.slotElement) {
      setTimeout(() => {
        var _a, _b;
        switch (this.type) {
          case 'CHECKBOX':
            this.slotElement.checked = (_a = this.value) !== null && _a !== void 0 ? _a : false;
            break;
          default:
            this.slotElement.value = (_b = this.value) !== null && _b !== void 0 ? _b : '';
        }
      }, 100);
    }
  }
  render() {
    return (this.shouldRender && (h("div", { class: `form-control-container ${this.hidden ? 'd-none' : ''}` },
      this.renderControl(),
      this.hasSlot && (h("label", { htmlFor: this.name, class: {
          label: true,
          required: this.required,
        } }, this.label)),
      h("slot", { onSlotchange: () => this.handleSlotChange() }),
      this.hasSlot && !(this.touched && this.error) && (h("div", { class: 'hint', id: `hint-${this.name}` }, this.hint)),
      this.hasSlot && this.touched && this.error && (h("div", { class: 'error', id: `error-${this.name}` }, TranslationController.t(this.error, {
        field: this.label || this.name,
      }))))));
  }
  static get is() { return "fw-form-control"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["form-control.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["form-control.css"]
  }; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'TEXT'\n    | 'NUMBER'\n    | 'DECIMAL'\n    | 'DROPDOWN'\n    | 'MULTI_SELECT'\n    | 'RADIO'\n    | 'CHECKBOX'\n    | 'DATE'\n    | 'PARAGRAPH'\n    | 'EMAIL'\n    | 'URL'\n    | 'TEL'\n    | 'TIME'\n    | 'DATE_TIME'\n    | 'RELATIONSHIP'\n    | 'AUTO_COMPLETE'\n    | 'DEPENDENT_FIELD'\n    | 'FILES'",
        "resolved": "\"AUTO_COMPLETE\" | \"CHECKBOX\" | \"DATE\" | \"DATE_TIME\" | \"DECIMAL\" | \"DEPENDENT_FIELD\" | \"DROPDOWN\" | \"EMAIL\" | \"FILES\" | \"MULTI_SELECT\" | \"NUMBER\" | \"PARAGRAPH\" | \"RADIO\" | \"RELATIONSHIP\" | \"TEL\" | \"TEXT\" | \"TIME\" | \"URL\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'TEXT'"
    },
    "name": {
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
        "text": ""
      },
      "attribute": "name",
      "reflect": true
    },
    "label": {
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
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    },
    "hidden": {
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
        "text": ""
      },
      "attribute": "hidden",
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
        "text": ""
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "hint": {
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
        "text": ""
      },
      "attribute": "hint",
      "reflect": false,
      "defaultValue": "''"
    },
    "placeholder": {
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
        "text": ""
      },
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "''"
    },
    "choices": {
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
        "text": ""
      },
      "attribute": "choices",
      "reflect": false,
      "defaultValue": "[]"
    },
    "fieldProps": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Additional props can be passed here for crayons components. Useful when rendering crayons components implicitly via form-control."
      },
      "attribute": "field-props",
      "reflect": false,
      "defaultValue": "{}"
    },
    "controlProps": {
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
        "text": "Contains values for crayons components. Useful when rendering crayons components implicitly via form-control.\nNot required when using controls via slots."
      },
      "attribute": "control-props",
      "reflect": false
    },
    "touched": {
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
        "text": ""
      },
      "attribute": "touched",
      "reflect": false,
      "defaultValue": "false"
    },
    "error": {
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
        "text": ""
      },
      "attribute": "error",
      "reflect": false,
      "defaultValue": "''"
    },
    "shouldRender": {
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
        "text": "Prop to determine whether to render the form-control or not.\nDefault to true."
      },
      "attribute": "should-render",
      "reflect": false,
      "defaultValue": "true"
    },
    "value": {
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
        "text": "Value of the slotted custom field on fw-form-control"
      },
      "attribute": "value",
      "reflect": false
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
        "text": "Disable the field from being editable"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "hasSlot": {}
  }; }
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
        "text": "Set Focus on the child",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
