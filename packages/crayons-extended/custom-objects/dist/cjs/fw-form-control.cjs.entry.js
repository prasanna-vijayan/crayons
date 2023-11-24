'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62345b50.js');
const index$1 = require('./index-147690f5.js');
const Translation = require('./Translation-02c04a0b.js');
require('./index-e99fea28.js');

const formControlCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.error{color:#d72d30;font-weight:400;font-size:12px;line-height:20px;-webkit-padding-before:4px;padding-block-start:4px;-webkit-padding-start:2px;padding-inline-start:2px}label{font-size:12px;color:#475867;font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;display:block}label.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.hint{font-weight:400;font-size:12px;color:#475867;line-height:20px;-webkit-padding-before:4px;padding-block-start:4px;-webkit-padding-start:2px;padding-inline-start:2px}.form-control-container{margin-inline:0em;margin-block:1em}.d-none{display:none}";

const NATIVE_CONTROLS = ['input', 'select', 'textarea'];
const FormControl = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
        const componentProps = Object.assign(Object.assign(Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled, type: type }), (_b = this.controlProps) === null || _b === void 0 ? void 0 : _b.inputProps(this.name, type)), { state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: Translation.TranslationController.t(this.error, {
            field: this.label || this.name,
          }) });
        cmp = (index.h("fw-input", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        break;
      }
      case 'PARAGRAPH':
        {
          const componentProps = Object.assign(Object.assign(Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled }), (_c = this.controlProps) === null || _c === void 0 ? void 0 : _c.inputProps(this.name, (_d = this.type) === null || _d === void 0 ? void 0 : _d.toLowerCase())), { state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: Translation.TranslationController.t(this.error, {
              field: this.label || this.name,
            }) });
          cmp = (index.h("fw-textarea", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'DATE':
        {
          const componentProps = Object.assign(Object.assign(Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled }), (_e = this.controlProps) === null || _e === void 0 ? void 0 : _e.inputProps(this.name, (_f = this.type) === null || _f === void 0 ? void 0 : _f.toLowerCase())), { state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: Translation.TranslationController.t(this.error, {
              field: this.label || this.name,
            }) });
          cmp = (index.h("fw-datepicker", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'DATE_TIME':
        {
          const componentProps = Object.assign(Object.assign(Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled }), (_g = this.controlProps) === null || _g === void 0 ? void 0 : _g.inputProps(this.name, (_h = this.type) === null || _h === void 0 ? void 0 : _h.toLowerCase())), { state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: Translation.TranslationController.t(this.error, {
              field: this.label || this.name,
            }), showTimePicker: true });
          cmp = (index.h("fw-datepicker", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'CHECKBOX':
        {
          const componentProps = Object.assign(Object.assign(Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: '', required: this.required, disabled: this.disabled }), (_j = this.controlProps) === null || _j === void 0 ? void 0 : _j.checkboxProps(this.name, (_k = this.type) === null || _k === void 0 ? void 0 : _k.toLowerCase())), { state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: Translation.TranslationController.t(this.error, {
              field: this.label || this.name,
            }) });
          cmp = (index.h("fw-checkbox", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) }), this.label));
        }
        break;
      case 'RADIO':
        {
          const controlProps = (_l = this.controlProps) === null || _l === void 0 ? void 0 : _l.radioProps(this.name, (_m = this.type) === null || _m === void 0 ? void 0 : _m.toLowerCase());
          const componentProps = Object.assign(Object.assign(Object.assign({}, this.fieldProps), { 'name': this.name, 'placeholder': this.placeholder, 'label': this.label, 'required': this.required, 'allow-empty': true, 'state': (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: Translation.TranslationController.t(this.error, {
              field: this.label || this.name,
            }) }), controlProps);
          cmp = (index.h("fw-radio-group", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) }), (_o = this.choices
            .sort((a, b) => {
            var _a, _b;
            const apos = (_a = a === null || a === void 0 ? void 0 : a.position) !== null && _a !== void 0 ? _a : 0;
            const bpos = (_b = b === null || b === void 0 ? void 0 : b.position) !== null && _b !== void 0 ? _b : 0;
            return apos - bpos;
          })) === null || _o === void 0 ? void 0 : _o.map((ch) => {
            const val = ch[componentProps.optionValuePath] || ch.value;
            const label = ch[componentProps.optionLabelPath] || ch.value;
            return (index.h("fw-radio", { name: this.name, value: val, disabled: this.disabled, state: this.touched && this.error ? 'error' : 'normal' }, label));
          })));
        }
        break;
      case 'DROPDOWN':
      case 'MULTI_SELECT':
        {
          const controlProps = (_p = this.controlProps) === null || _p === void 0 ? void 0 : _p.selectProps(this.name, (_q = this.type) === null || _q === void 0 ? void 0 : _q.toLowerCase());
          const fieldOptions = (_r = this.fieldProps) === null || _r === void 0 ? void 0 : _r.field_options;
          let componentProps = Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled, multiple: this.type === 'MULTI_SELECT', state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: Translation.TranslationController.t(this.error, {
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
          cmp = (index.h("fw-select", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'RELATIONSHIP':
      case 'AUTO_COMPLETE':
        {
          const controlProps = (_s = this.controlProps) === null || _s === void 0 ? void 0 : _s.selectProps(this.name, (_t = this.type) === null || _t === void 0 ? void 0 : _t.toLowerCase());
          const fieldOptions = (_u = this.fieldProps) === null || _u === void 0 ? void 0 : _u.field_options;
          const componentProps = Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled, state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: Translation.TranslationController.t(this.error, {
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
            Translation.TranslationController.t('search.startTyping');
          if (fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.option_value_path)
            componentProps['optionValuePath'] = fieldOptions.option_value_path;
          if (fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.option_label_path)
            componentProps['optionLabelPath'] = fieldOptions.option_label_path;
          cmp = (index.h("fw-select", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'TIME':
        {
          const componentProps = Object.assign(Object.assign(Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled }), (_y = this.controlProps) === null || _y === void 0 ? void 0 : _y.inputProps(this.name, (_z = this.type) === null || _z === void 0 ? void 0 : _z.toLowerCase())), { state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: Translation.TranslationController.t(this.error, {
              field: this.label || this.name,
            }) });
          cmp = (index.h("fw-timepicker", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'FILES':
        {
          const multiple = ((_0 = this.fieldProps) === null || _0 === void 0 ? void 0 : _0.multiple) ? true : false;
          const errorText = this.touched && this.error
            ? Translation.TranslationController.t(this.error, {
              field: this.label || this.name,
            })
            : '';
          const controlProps = (_1 = this.controlProps) === null || _1 === void 0 ? void 0 : _1.fileProps(this.name, multiple);
          const componentProps = Object.assign(Object.assign({}, this.fieldProps), { name: this.name, description: this.placeholder, required: this.required, isBatchUpload: true, isFormLabel: true, hintText: this.hint, errorText: errorText });
          if (controlProps === null || controlProps === void 0 ? void 0 : controlProps.value) {
            componentProps.initialFiles = controlProps.value;
          }
          cmp = (index.h("fw-file-uploader-2", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
        }
        break;
      case 'DEPENDENT_FIELD':
        {
          const controlProps = (_2 = this.controlProps) === null || _2 === void 0 ? void 0 : _2.selectProps(this.name, (_3 = this.type) === null || _3 === void 0 ? void 0 : _3.toLowerCase());
          const fieldOptions = (_4 = this.fieldProps) === null || _4 === void 0 ? void 0 : _4.field_options;
          let componentProps = Object.assign(Object.assign({}, this.fieldProps), { name: this.name, placeholder: this.placeholder, label: this.label, required: this.required, disabled: this.disabled, state: (this.touched && this.error && 'error') || 'normal', ['hint-text']: this.hint, ['error-text']: Translation.TranslationController.t(this.error, {
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
          cmp = (index.h("fw-nested-select", Object.assign({}, componentProps, { ref: (el) => (this.crayonsControlRef = el) })));
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
    this.hasSlot = index$1.hasSlot(this.el);
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
    return (this.shouldRender && (index.h("div", { class: `form-control-container ${this.hidden ? 'd-none' : ''}` }, this.renderControl(), this.hasSlot && (index.h("label", { htmlFor: this.name, class: {
        label: true,
        required: this.required,
      } }, this.label)), index.h("slot", { onSlotchange: () => this.handleSlotChange() }), this.hasSlot && !(this.touched && this.error) && (index.h("div", { class: 'hint', id: `hint-${this.name}` }, this.hint)), this.hasSlot && this.touched && this.error && (index.h("div", { class: 'error', id: `error-${this.name}` }, Translation.TranslationController.t(this.error, {
      field: this.label || this.name,
    }))))));
  }
  get el() { return index.getElement(this); }
};
FormControl.style = formControlCss;

exports.fw_form_control = FormControl;
