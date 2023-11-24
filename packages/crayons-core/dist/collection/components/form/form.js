/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Prop, State, Element, h, Method, Watch, Event, } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';
import { validateYupSchema, prepareDataForValidation, yupToFormErrors, generateDynamicInitialValues, generateDynamicValidationSchema, serializeForm, translateErrors, getMappedSchema, getValueForField, LEGO, } from './form-util';
import { debounce, hasSlot } from '../../utils';
export class Form {
  constructor() {
    /**
     * Initial field values of the form. It is an object with keys pointing to field name
     */
    this.initialValues = {};
    /**
     * Schema to render Dynamic Form. Contains an array of fields pointing to each form control.
     * Please see the usage reference for examples.
     */
    this.formSchema = {};
    /**
     * YUP based validation schema for handling validation
     */
    this.validationSchema = {};
    /** Tells Form to validate the form on each input's onInput event */
    this.validateOnInput = true;
    /** Tells Form to validate the form on each input's onBlur event */
    this.validateOnBlur = true;
    /** The number of milliseconds to delay before doing validation on Input */
    this.wait = 200;
    /**
     * Id to uniquely identify the Form. If not set, a random Id will be generated.
     */
    this.formId = uuidv4();
    /**
     * Mapper Type - LEGO | FORMSERV | CUSTOM.
     * Defaults to `LEGO`.
     */
    this.mapperType = LEGO;
    /**
     * A custom type mapper object that maps the type of your fields in the schema to the Internal Field Types.
     * Internal Field Types are `TEXT`, `DROPDOWN`, `EMAIL` etc.
     * In the example below, `1` is the type of a field in your schema
     * that needs to correspond to `TEXT` type.
     * Please pass include the mapper for all the field types that you want to support.
     * Example typeMapper object : {
            'CUSTOM_TEXT': { type: 'TEXT' },
            'SELECT': { type: 'DROPDOWN' },
            'TEL': { type: 'PHONE_NUMBER' },
            'CHECKBOX': { type: 'CHECKBOX' },
            'TEXTAREA': { type: 'PARAGRAPH' },
            'DATETIME': { type: 'DATE_TIME' },
            'INTEGER': { type: 'NUMBER' },
          }
     */
    this.customTypeMapper = {};
    this.values = {};
    this.touched = {};
    this.errors = {};
    this.formSchemaState = this.formSchema;
    this.hasSlot = false;
    this.prevValues = {};
    this.handleSubmit = async (event) => {
      event === null || event === void 0 ? void 0 : event.preventDefault();
      event === null || event === void 0 ? void 0 : event.stopPropagation();
      let isValid = false, touchedState = {};
      await this.handleValidation();
      const keys = [...Object.keys(this.values), ...Object.keys(this.errors)];
      keys.forEach((k) => (touchedState = Object.assign(Object.assign({}, touchedState), { [k]: true })));
      // on clicking submit, mark all fields as touched
      this.touched = Object.assign(Object.assign({}, this.touched), touchedState);
      isValid = !this.errors || Object.keys(this.errors).length === 0;
      if (!isValid) {
        this.setFocusOnError();
      }
      let serializedValues = Object.assign({}, this.values);
      if (this.formSchemaState && Object.keys(this.formSchemaState).length > 0) {
        serializedValues = serializeForm(serializedValues, this.fields);
      }
      this.prevValues = this.values;
      const translatedErrors = await translateErrors(this.errors, this.fields);
      return { values: serializedValues, errors: translatedErrors, isValid };
    };
    this.handleReset = async (event) => {
      event === null || event === void 0 ? void 0 : event.preventDefault();
      event === null || event === void 0 ? void 0 : event.stopPropagation();
      this.values = this.formInitialValues;
      this.prevValues = this.values;
      let touchedState = {};
      const initialValuesKeys = Object.keys(this.initialValues);
      initialValuesKeys.forEach((k) => (touchedState = Object.assign(Object.assign({}, touchedState), { [k]: true })));
      this.touched = touchedState;
      if (initialValuesKeys && initialValuesKeys.length > 0) {
        await this.handleValidation();
        this.setFocusOnError();
      }
    };
    this.handleValidation = async () => {
      let validationErrors = {};
      // run validations against validationSchema if present
      if (this.formValidationSchema &&
        Object.keys(this.formValidationSchema).length) {
        const pr = validateYupSchema(prepareDataForValidation(this.values), this.formValidationSchema);
        try {
          await pr;
          validationErrors = {}; // reset errors if no errors from validation
        }
        catch (err) {
          validationErrors = yupToFormErrors(err);
        }
      }
      // run validations with validate function if passed as prop and merge with the errors from the above step
      if (this.validate && typeof this.validate === 'function') {
        try {
          validationErrors = Object.assign(Object.assign({}, validationErrors), ((await this.validate(this.values)) || {}));
        }
        catch (err) {
          console.error(`Error in calling validate function ${err.message}`);
          validationErrors = Object.assign({}, validationErrors);
        }
      }
      this.errors = validationErrors;
    };
    this.handleInput = async (event) => {
      const details = event.detail;
      if (!details || !details.name)
        return;
      const { name, value, meta, files } = details;
      let componentValue;
      if (meta && 'checked' in meta) {
        componentValue = meta.checked;
      }
      else if (files) {
        componentValue = files;
      }
      else {
        componentValue = value;
      }
      this.values = Object.assign(Object.assign({}, this.values), { [name]: componentValue });
      this.fwFormValueChanged.emit({
        field: name,
        value: componentValue,
      });
      if (meta && meta.shouldValidate === false) {
        return;
      }
      /** Validate, if user wants to validateOnInput */
      if (this.validateOnInput) {
        this.touched = Object.assign(Object.assign({}, this.touched), { [name]: true });
        await this.handleValidation();
      }
    };
    this.handleBlur = async (event) => {
      var _a, _b;
      const details = event.detail;
      if (!details || !details.name)
        return;
      const { name } = details;
      /** Validate, if user wants to validateOnBlur */
      if (this.validateOnBlur) {
        this.touched = Object.assign(Object.assign({}, this.touched), { [name]: true });
        if (((_a = this.prevValues) === null || _a === void 0 ? void 0 : _a[name]) !== ((_b = this.values) === null || _b === void 0 ? void 0 : _b[name])) {
          // validate only if the previous value is different from the current value
          await this.handleValidation();
        }
      }
    };
    this.setFocus = (field) => {
      var _a;
      const control = (_a = this.controls) === null || _a === void 0 ? void 0 : _a.find((control) => control.name === field);
      control === null || control === void 0 ? void 0 : control.setFocus();
    };
    this.setFocusOnError = () => {
      const firstErrorField = Object.keys(this.errors || {})
        .sort((a, b) => {
        var _a, _b, _c, _d;
        return ((_b = (_a = this.fields) === null || _a === void 0 ? void 0 : _a[a]) === null || _b === void 0 ? void 0 : _b.position) - ((_d = (_c = this.fields) === null || _c === void 0 ? void 0 : _c[b]) === null || _d === void 0 ? void 0 : _d.position);
      })
        .find((field) => {
        return this.touched[field] === true;
      });
      if (firstErrorField)
        this.setFocus(firstErrorField);
    };
    this.composedUtils = () => {
      const inputProps = (field) => ({
        value: this.values[field],
      });
      const radioProps = (field) => ({
        value: this.values[field],
      });
      const checkboxProps = (field) => ({
        checked: !!this.values[field],
      });
      const selectProps = (field, inputType) => {
        var _a, _b;
        return ({
          value: inputType === 'multi_select'
            ? (_a = this.values[field]) !== null && _a !== void 0 ? _a : []
            : (_b = this.values[field]) !== null && _b !== void 0 ? _b : '',
        });
      };
      const fileProps = (field, multiple) => {
        let value = [];
        if (this.values[field]) {
          if (multiple) {
            value = this.values[field];
          }
          else {
            value = this.values[field][0] ? [this.values[field][0]] : [];
          }
        }
        return { value };
      };
      const formProps = {
        action: 'javascript:void(0);',
        onSubmit: this.handleSubmit,
        onReset: this.handleReset,
      };
      return {
        inputProps,
        selectProps,
        checkboxProps,
        radioProps,
        fileProps,
        formProps,
      };
    };
    this.shouldRenderFormControl = (control) => {
      var _a, _b;
      const type = control === null || control === void 0 ? void 0 : control.type;
      const isValidType = type !== '' && type !== null && type !== undefined;
      const shouldRender = isValidType
        ? this.fieldSearchText
          ? (_b = (_a = control.label) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(this.fieldSearchText.toLowerCase())
          : true
        : false;
      return shouldRender;
    };
    this.getFormSchemaFromSlots = () => {
      const fields = this.controls.map((control) => ({
        type: control.type,
        name: control.name,
        required: control.required,
      }));
      return { fields };
    };
  }
  async componentWillLoad() {
    this.debouncedHandleInput = debounce(this.handleInput, this, this.wait);
    this.handleInputListener = this.el.addEventListener('fwInput', this.debouncedHandleInput);
    this.handleBlurListener = this.el.addEventListener('fwBlur', this.handleBlur);
    this.handleChangeListener = this.el.addEventListener('fwChange', this.handleInput);
    await this.handleSchemaPropsChange();
  }
  async schemaPropsChangeHandler() {
    this.controls = null;
    await this.handleSchemaPropsChange();
  }
  async initialValuesHandler(initialValues) {
    let schema = this.formSchemaState;
    if (this.hasSlot) {
      // for static form get the schema from slots
      schema = this.getFormSchemaFromSlots();
    }
    await this.handleFormSchemaAndInitialValuesChange(schema, initialValues);
  }
  valuesChangeHandler(values) {
    this.fwFormValuesChanged.emit({
      value: values,
    });
  }
  async handleSchemaPropsChange() {
    const newSchema = getMappedSchema({
      type: this.mapperType,
      schema: this.formSchema,
      customTypeMapper: this.customTypeMapper,
    });
    this.formSchemaState = newSchema;
    await this.handleFormSchemaAndInitialValuesChange(newSchema, this.initialValues);
  }
  async handleFormSchemaAndInitialValuesChange(formSchema, initialValues) {
    var _a;
    this.fields = (_a = formSchema === null || formSchema === void 0 ? void 0 : formSchema.fields) === null || _a === void 0 ? void 0 : _a.reduce((acc, field) => {
      return Object.assign(Object.assign({}, acc), { [field.name]: field });
    }, {});
    this.formValidationSchema =
      generateDynamicValidationSchema(formSchema, this.validationSchema) || {};
    this.formInitialValues =
      generateDynamicInitialValues(formSchema, initialValues) || {};
    this.values = this.formInitialValues;
    this.prevValues = this.values;
    const initialValuesKeys = Object.keys(initialValues);
    for (const field of Object.keys(this.formInitialValues)) {
      this.errors[field] = null;
      if (initialValuesKeys === null || initialValuesKeys === void 0 ? void 0 : initialValuesKeys.includes(field))
        this.touched[field] = true;
      else
        this.touched[field] = false;
    }
    await this.handleValidation();
  }
  // get Form Controls and pass props to children
  componentDidLoad() {
    this.controls = this.getFormControls();
    if (this.hasSlot)
      this.passPropsToChildren(this.controls);
    // adding a timeout since this lifecycle method is called before its child in React apps.
    // Bug with react wrapper.
    setTimeout(() => {
      this.setFocusOnError();
    }, 10);
  }
  // pass props to form-control children
  componentWillUpdate() {
    if (!this.controls || !this.controls.length) {
      this.controls = this.getFormControls();
    }
    if (this.hasSlot)
      this.passPropsToChildren(this.controls);
  }
  handleSlotChange() {
    this.hasSlot = hasSlot(this.el);
    this.controls = this.getFormControls();
    /** Create implicit validation rules based
     *  on slotted form-controls for static form
     */
    // setup initialValues and validation rules
    this.handleFormSchemaAndInitialValuesChange(this.getFormSchemaFromSlots(), this.initialValues);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d, _e, _f;
    (_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.removeEventListener) === null || _b === void 0 ? void 0 : _b.call(_a, 'fwBlur', this.handleBlurListener);
    (_d = (_c = this.el) === null || _c === void 0 ? void 0 : _c.removeEventListener) === null || _d === void 0 ? void 0 : _d.call(_c, 'fwInput', this.handleInputListener);
    (_f = (_e = this.el) === null || _e === void 0 ? void 0 : _e.removeEventListener) === null || _f === void 0 ? void 0 : _f.call(_e, 'fwChange', this.handleChangeListener);
  }
  getFormControls() {
    const children = Array.from([
      ...this.el.shadowRoot.querySelectorAll('*'),
      ...this.el.querySelectorAll('*'),
    ]).filter((el) => ['fw-form-control'].includes(el.tagName.toLowerCase()));
    return children;
  }
  passPropsToChildren(controls) {
    controls === null || controls === void 0 ? void 0 : controls.forEach((control) => {
      this.passPropsToChild(control);
    });
  }
  passPropsToChild(control) {
    const error = this.errors[control.name];
    const touched = this.touched[control.name];
    control.controlProps = this.composedUtils();
    control.error = error !== null && error !== void 0 ? error : '';
    control.touched = touched || false;
    control.shouldRender = this.shouldRenderFormControl(control);
    control.value = getValueForField(this.values, control);
  }
  /** Return if a field is disabled or not
   * if `editable` property is set to `false` in the field object of the form schema,
   * then the field is considered to be disabled.
   */
  isDisabledField(field) {
    if (!field)
      return false;
    const isDisabled = Object.prototype.hasOwnProperty.call(field, 'editable') &&
      field.editable === false;
    return isDisabled;
  }
  /**
   * Method to set value on the form field.
   *
   * param: field - name of the form field
   * param: value - value of the form field
   * param: shouldValidate - should this form field be validated with the updated value. Default to true.
   */
  async setFieldValue(field, value, shouldValidate = true) {
    var _a;
    // Don't set value if the field is disabled
    const isDisabledField = this.isDisabledField((_a = this.fields) === null || _a === void 0 ? void 0 : _a[field]);
    if (isDisabledField)
      return;
    this.values = Object.assign(Object.assign({}, this.values), { [field]: value });
    if (shouldValidate) {
      this.touched = Object.assign(Object.assign({}, this.touched), { [field]: true });
      await this.handleValidation();
    }
  }
  /**
   * Method to set values on the form fields.
   *
   * param: valuesObj - Object with key as form field name and value as the updated value for the field
   * example: `{ first_name: "new name", last_name: "new last name" }`
   * param: shouldValidate - should this form be validated with the updated values. Default to true.
   */
  async setFieldsValue(valuesObj, shouldValidate = true) {
    if (!valuesObj)
      return;
    let newValues = Object.assign({}, this.values);
    let newTouchedFields = Object.assign({}, this.touched);
    Object.keys(valuesObj).forEach((field) => {
      var _a;
      // Don't set value if the field is disabled
      const isDisabledField = this.isDisabledField((_a = this.fields) === null || _a === void 0 ? void 0 : _a[field]);
      if (!isDisabledField) {
        newValues = Object.assign(Object.assign({}, newValues), { [field]: valuesObj[field] });
        if (shouldValidate) {
          newTouchedFields = Object.assign(Object.assign({}, newTouchedFields), { [field]: true });
        }
      }
    });
    this.values = Object.assign({}, newValues);
    this.touched = Object.assign({}, newTouchedFields);
    if (shouldValidate) {
      await this.handleValidation();
    }
  }
  /**
   * Method to set errors on the form fields.
   *
   * If you use `setErrors`, your errors will be wiped out by next `validate` or `validationSchema` call which can be triggered by the user typing (a change event) or blurring an input (a blur event).
   * Note: this assumed you have not manually set `validateOnInput` and `validateOnBlur` props to `false` (they are `true` by default).
   *
   * param: errorObj - key value pair of [fieldName]: ErrorMessage
   * example: `{ first_name: 'firstname is required' }`
   */
  async setFieldErrors(errorObj) {
    var _a;
    (_a = Object.entries(errorObj)) === null || _a === void 0 ? void 0 : _a.forEach(([field, value]) => {
      this.errors = Object.assign(Object.assign({}, this.errors), { [field]: value });
      this.touched = Object.assign(Object.assign({}, this.touched), { [field]: true });
    });
    this.setFocusOnError();
  }
  /**
   * setFieldChoices Method to set field choices for a DROPDOWN/MULTI_SELECT/RADIO fields in formschema.
   * choices must be in the form of array with the below format:
   * [{
      id: 1,
      value: 'open',
      position: 1,
      dependent_ids: {},
    }].
   * fieldOptions is an optional parameter, must be an object with keys being option_label_path and option_value_path.
   * option_label_path refers to the key used for displaying the text.
   * option_value_path refers to the key which corresponds to the value of item.
   */
  async setFieldChoices(field, choices, fieldOptions) {
    var _a, _b, _c;
    this.formSchemaState = Object.assign(Object.assign({}, this.formSchemaState), { fields: (_c = (_b = (_a = this.formSchemaState) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.map((f) => {
        if (f.name === field) {
          return Object.assign(Object.assign({}, f), { choices, field_options: fieldOptions !== null && fieldOptions !== void 0 ? fieldOptions : f.field_options });
        }
        return f;
      })) !== null && _c !== void 0 ? _c : [] });
    this.touched = Object.assign(Object.assign({}, this.touched), { [field]: false });
    this.values = Object.assign(Object.assign({}, this.values), { [field]: undefined });
  }
  /**
   * Method to set hidden fields on the form dynamically.
   *
   * Note: You must always pass all the fields that you want to hide. Also, note that the validation for hidden fields will be skipped.
   *
   * param: hiddenFields - key value pair of [fieldName]: true | false
   * example: `setHiddenFields({ first_name: true, last_name: false })`
   */
  async setHiddenFields(hiddenFields = {}) {
    return this._handleFieldModifier('hidden', hiddenFields);
  }
  /**
   * Method to set disabled fields on the form dynamically.
   *
   * Note: You must always pass all the fields that you want to disable
   *
   * param: disabledFields - key value pair of [fieldName]: true | false
   * example: `setDisabledFields({ first_name: true, last_name: false })`
   */
  async setDisabledFields(disabledFields = {}) {
    return this._handleFieldModifier('editable', disabledFields);
  }
  _handleFieldModifier(key, fieldsObj = {}) {
    var _a, _b, _c;
    let errorsObj = Object.assign({}, this.errors);
    let touchedObj = Object.assign({}, this.touched);
    this.formSchemaState = Object.assign(Object.assign({}, this.formSchemaState), { fields: (_c = (_b = (_a = this.formSchemaState) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.map((f) => {
        if (Object.prototype.hasOwnProperty.call(fieldsObj, f.name)) {
          // Whenever a hidden/disabled state of a field changes,
          // we will reset the error state and touched state of the field.
          errorsObj = Object.assign(Object.assign({}, errorsObj), { [f.name]: undefined });
          touchedObj = Object.assign(Object.assign({}, this.touched), { [f.name]: false });
          return Object.assign(Object.assign({}, f), { 
            // inverting the value if key is editable
            [key]: key === 'editable'
              ? !fieldsObj[f.name]
              : Boolean(fieldsObj[f.name]) });
        }
        return f;
      })) !== null && _c !== void 0 ? _c : [] });
    this.errors = Object.assign({}, errorsObj);
    this.touched = Object.assign({}, touchedObj);
    // Skip disabled/hidden field from validation schema
    this.formValidationSchema =
      generateDynamicValidationSchema(this.formSchemaState, this.validationSchema) || {};
  }
  /**
   * getValues
   * @returns An Object containing values and serializedValues.
   * serializedValues are those that contains the transformed values based on field type.
   * 1. For Number and Decimal: returns floating point number of value or undefined.
   * 2. For Date: returns value as ${year}-${month}-${date} or undefined.
   * 3. For Relationship : returns an array of values or value.
   */
  async getValues() {
    let serializedValues = Object.assign({}, this.values);
    if (this.formSchemaState && Object.keys(this.formSchemaState).length > 0) {
      serializedValues = serializeForm(serializedValues, this.fields);
    }
    return { values: this.values, serializedValues };
  }
  /**
   *
   * @param event : An event which takes place in the DOM
   *
   * Method to submit the form
   */
  async doSubmit(event) {
    return this.handleSubmit(event);
  }
  /**
   *
   * @param event - An event which takes place in the DOM
   *
   * Method to reset the form
   */
  async doReset(event) {
    this.handleReset(event);
  }
  /**
   *
   * Method to filter the display of fields in the form based
   * on the passed text.
   *
   * @param text
   *
   */
  async setFieldSearchText(text) {
    this.fieldSearchText = text;
  }
  /**
   * Method to set required status on form fields
   *
   * param: requiredStatusObj - Object with key as form field name and value denoting if the field should be marked
   * as required or not
   * example: `{ first_name: true, last_name: false }`
   */
  async setFieldsRequiredStatus(requiredStatusObj) {
    var _a, _b, _c;
    let errorsObj = Object.assign({}, this.errors);
    this.formSchemaState = Object.assign(Object.assign({}, this.formSchemaState), { fields: (_c = (_b = (_a = this.formSchemaState) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.map((f) => {
        if (Object.prototype.hasOwnProperty.call(requiredStatusObj, f.name)) {
          const isRequired = !!(requiredStatusObj === null || requiredStatusObj === void 0 ? void 0 : requiredStatusObj[f.name]);
          if (!isRequired)
            errorsObj = Object.assign(Object.assign({}, errorsObj), { [f.name]: undefined });
          return Object.assign(Object.assign({}, f), { required: isRequired });
        }
        return f;
      })) !== null && _c !== void 0 ? _c : [] });
    this.errors = Object.assign({}, errorsObj);
    this.formValidationSchema =
      generateDynamicValidationSchema(this.formSchemaState, this.validationSchema) || {};
  }
  render() {
    var _a, _b;
    const utils = this.composedUtils();
    return (h("form", Object.assign({ id: `form-${this.formId}` }, utils.formProps), this.formSchemaState &&
      Object.keys(this.formSchemaState).length > 0 ? ((_b = (_a = this.formSchemaState) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.sort((a, b) => a.position - b.position).map((field) => {
      return (this.shouldRenderFormControl(field) && (h("fw-form-control", { key: field.name, name: field.name, type: field.type, label: field.label, required: field.required, hint: field.hint, placeholder: field.placeholder, hidden: field.hidden, error: this.errors[field.name], touched: this.touched[field.name], disabled: this.isDisabledField(field), choices: field.choices, fieldProps: field, controlProps: utils })));
    })) : (h("slot", { onSlotchange: () => this.handleSlotChange() }))));
  }
  static get is() { return "fw-form"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
    "initialValues": {
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
        "text": "Initial field values of the form. It is an object with keys pointing to field name"
      },
      "attribute": "initial-values",
      "reflect": false,
      "defaultValue": "{}"
    },
    "validate": {
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
        "text": "Validate the form's values with an async function.\nShould return a Promise which resolves to an errors object.\nThe keys in the errors object must match with the field names."
      },
      "attribute": "validate",
      "reflect": false
    },
    "formSchema": {
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
        "text": "Schema to render Dynamic Form. Contains an array of fields pointing to each form control.\nPlease see the usage reference for examples."
      },
      "attribute": "form-schema",
      "reflect": false,
      "defaultValue": "{}"
    },
    "validationSchema": {
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
        "text": "YUP based validation schema for handling validation"
      },
      "attribute": "validation-schema",
      "reflect": false,
      "defaultValue": "{}"
    },
    "validateOnInput": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Tells Form to validate the form on each input's onInput event"
      },
      "attribute": "validate-on-input",
      "reflect": false,
      "defaultValue": "true"
    },
    "validateOnBlur": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Tells Form to validate the form on each input's onBlur event"
      },
      "attribute": "validate-on-blur",
      "reflect": false,
      "defaultValue": "true"
    },
    "wait": {
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
        "text": "The number of milliseconds to delay before doing validation on Input"
      },
      "attribute": "wait",
      "reflect": false,
      "defaultValue": "200"
    },
    "formId": {
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
        "text": "Id to uniquely identify the Form. If not set, a random Id will be generated."
      },
      "attribute": "form-id",
      "reflect": false,
      "defaultValue": "uuidv4()"
    },
    "mapperType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'LEGO' | 'FORMSERV' | 'CUSTOM'",
        "resolved": "\"CUSTOM\" | \"FORMSERV\" | \"LEGO\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Mapper Type - LEGO | FORMSERV | CUSTOM.\nDefaults to `LEGO`."
      },
      "attribute": "mapper-type",
      "reflect": false,
      "defaultValue": "LEGO"
    },
    "customTypeMapper": {
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
        "text": "A custom type mapper object that maps the type of your fields in the schema to the Internal Field Types.\nInternal Field Types are `TEXT`, `DROPDOWN`, `EMAIL` etc.\nIn the example below, `1` is the type of a field in your schema\nthat needs to correspond to `TEXT` type.\nPlease pass include the mapper for all the field types that you want to support.\nExample typeMapper object : {\n     'CUSTOM_TEXT': { type: 'TEXT' },\n     'SELECT': { type: 'DROPDOWN' },\n     'TEL': { type: 'PHONE_NUMBER' },\n     'CHECKBOX': { type: 'CHECKBOX' },\n     'TEXTAREA': { type: 'PARAGRAPH' },\n     'DATETIME': { type: 'DATE_TIME' },\n     'INTEGER': { type: 'NUMBER' },\n   }"
      },
      "attribute": "custom-type-mapper",
      "reflect": false,
      "defaultValue": "{}"
    }
  }; }
  static get states() { return {
    "values": {},
    "touched": {},
    "errors": {},
    "formValidationSchema": {},
    "formInitialValues": {},
    "formSchemaState": {},
    "hasSlot": {},
    "fieldSearchText": {}
  }; }
  static get events() { return [{
      "method": "fwFormValuesChanged",
      "name": "fwFormValuesChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "fwFormValuesChanged - event that gets emitted when values change."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwFormValueChanged",
      "name": "fwFormValueChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "fwFormValueChanged - event that gets emitted when value in a form field changes."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFieldValue": {
      "complexType": {
        "signature": "(field: string, value: any, shouldValidate?: boolean) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
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
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Method to set value on the form field.\n\nparam: field - name of the form field\nparam: value - value of the form field\nparam: shouldValidate - should this form field be validated with the updated value. Default to true.",
        "tags": []
      }
    },
    "setFieldsValue": {
      "complexType": {
        "signature": "(valuesObj: FormValues, shouldValidate?: boolean) => Promise<void>",
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
          },
          "FormValues": {
            "location": "import",
            "path": "./form-declaration"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Method to set values on the form fields.\n\nparam: valuesObj - Object with key as form field name and value as the updated value for the field\nexample: `{ first_name: \"new name\", last_name: \"new last name\" }`\nparam: shouldValidate - should this form be validated with the updated values. Default to true.",
        "tags": []
      }
    },
    "setFieldErrors": {
      "complexType": {
        "signature": "(errorObj: FormErrors<FormValues>) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "FormErrors": {
            "location": "import",
            "path": "./form-declaration"
          },
          "FormValues": {
            "location": "import",
            "path": "./form-declaration"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Method to set errors on the form fields.\n\nIf you use `setErrors`, your errors will be wiped out by next `validate` or `validationSchema` call which can be triggered by the user typing (a change event) or blurring an input (a blur event).\nNote: this assumed you have not manually set `validateOnInput` and `validateOnBlur` props to `false` (they are `true` by default).\n\nparam: errorObj - key value pair of [fieldName]: ErrorMessage\nexample: `{ first_name: 'firstname is required' }`",
        "tags": []
      }
    },
    "setFieldChoices": {
      "complexType": {
        "signature": "(field: string, choices: Array<any>, fieldOptions?: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Array": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "setFieldChoices Method to set field choices for a DROPDOWN/MULTI_SELECT/RADIO fields in formschema.\nchoices must be in the form of array with the below format:\n[{\n id: 1,\n value: 'open',\n position: 1,\n dependent_ids: {},\n}].\nfieldOptions is an optional parameter, must be an object with keys being option_label_path and option_value_path.\noption_label_path refers to the key used for displaying the text.\noption_value_path refers to the key which corresponds to the value of item.",
        "tags": []
      }
    },
    "setHiddenFields": {
      "complexType": {
        "signature": "(hiddenFields?: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Method to set hidden fields on the form dynamically.\n\nNote: You must always pass all the fields that you want to hide. Also, note that the validation for hidden fields will be skipped.\n\nparam: hiddenFields - key value pair of [fieldName]: true | false\nexample: `setHiddenFields({ first_name: true, last_name: false })`",
        "tags": []
      }
    },
    "setDisabledFields": {
      "complexType": {
        "signature": "(disabledFields?: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Method to set disabled fields on the form dynamically.\n\nNote: You must always pass all the fields that you want to disable\n\nparam: disabledFields - key value pair of [fieldName]: true | false\nexample: `setDisabledFields({ first_name: true, last_name: false })`",
        "tags": []
      }
    },
    "getValues": {
      "complexType": {
        "signature": "() => Promise<{ values: FormValues; serializedValues: FormValues; }>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "FormValues": {
            "location": "import",
            "path": "./form-declaration"
          }
        },
        "return": "Promise<{ values: FormValues; serializedValues: FormValues; }>"
      },
      "docs": {
        "text": "getValues",
        "tags": [{
            "name": "returns",
            "text": "An Object containing values and serializedValues.\nserializedValues are those that contains the transformed values based on field type.\n1. For Number and Decimal: returns floating point number of value or undefined.\n2. For Date: returns value as ${year}-${month}-${date} or undefined.\n3. For Relationship : returns an array of values or value."
          }]
      }
    },
    "doSubmit": {
      "complexType": {
        "signature": "(event?: any) => Promise<FormSubmit>",
        "parameters": [{
            "tags": [{
                "name": "param",
                "text": "event : An event which takes place in the DOM\n\nMethod to submit the form"
              }],
            "text": ": An event which takes place in the DOM\n\nMethod to submit the form"
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "FormSubmit": {
            "location": "import",
            "path": "./form-declaration"
          }
        },
        "return": "Promise<FormSubmit>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "param",
            "text": "event : An event which takes place in the DOM\n\nMethod to submit the form"
          }]
      }
    },
    "doReset": {
      "complexType": {
        "signature": "(event?: any) => Promise<void>",
        "parameters": [{
            "tags": [{
                "name": "param",
                "text": "event - An event which takes place in the DOM\n\nMethod to reset the form"
              }],
            "text": "- An event which takes place in the DOM\n\nMethod to reset the form"
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "param",
            "text": "event - An event which takes place in the DOM\n\nMethod to reset the form"
          }]
      }
    },
    "setFieldSearchText": {
      "complexType": {
        "signature": "(text: string) => Promise<void>",
        "parameters": [{
            "tags": [{
                "name": "param",
                "text": "text"
              }],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "\nMethod to filter the display of fields in the form based\non the passed text.",
        "tags": [{
            "name": "param",
            "text": "text"
          }]
      }
    },
    "setFieldsRequiredStatus": {
      "complexType": {
        "signature": "(requiredStatusObj: FormRequired<FormValues>) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "FormRequired": {
            "location": "import",
            "path": "./form-declaration"
          },
          "FormValues": {
            "location": "import",
            "path": "./form-declaration"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Method to set required status on form fields\n\nparam: requiredStatusObj - Object with key as form field name and value denoting if the field should be marked\nas required or not\nexample: `{ first_name: true, last_name: false }`",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "formSchema",
      "methodName": "schemaPropsChangeHandler"
    }, {
      "propName": "mapperType",
      "methodName": "schemaPropsChangeHandler"
    }, {
      "propName": "customTypeMapper",
      "methodName": "schemaPropsChangeHandler"
    }, {
      "propName": "initialValues",
      "methodName": "initialValuesHandler"
    }, {
      "propName": "values",
      "methodName": "valuesChangeHandler"
    }]; }
}
