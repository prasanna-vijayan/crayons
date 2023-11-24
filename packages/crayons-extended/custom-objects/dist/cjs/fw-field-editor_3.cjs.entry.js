'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62345b50.js');
const formBuilderUtils = require('./form-builder-utils-b1c33470.js');
const formBuilderPreset = require('./form-builder-preset-42baf2f8.js');
require('./Translation-95805542.js');
require('./index-e99fea28.js');

const fieldEditorCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;width:100%;max-width:990px}@media screen and (prefers-reduced-motion: reduce){.fw-field-editor{-webkit-transition:none;transition:none}.fw-field-editor-delete-button{-webkit-transition:none;transition:none}}.flex{display:-ms-flexbox;display:flex}.flex-space-between{-ms-flex-pack:justify;justify-content:space-between}.flex-space-between div{width:100%}.fw-field-editor{max-width:990px;width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;outline:0;background-color:#fff;border:1px solid #cfd7df;border-radius:8px;-webkit-transition:-webkit-box-shadow 0.3s;transition:-webkit-box-shadow 0.3s;transition:box-shadow 0.3s;transition:box-shadow 0.3s, -webkit-box-shadow 0.3s}.fw-field-editor .fw-field-editor-header{width:100%;height:48px;padding:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;border-radius:8px}.fw-field-editor .fw-field-editor-header .fw-field-editor-drag-container{min-width:24px;width:24px;height:100%;-webkit-margin-end:8px;margin-inline-end:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;opacity:1;cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.fw-field-editor .fw-field-editor-header .fw-field-editor-header-content{width:calc(100% - 24px - 8px - 24px - 8px);height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.fw-field-editor .fw-field-editor-header .fw-field-editor-header-content .fw-field-editor-icon-container{min-width:24px;width:24px;height:24px;min-height:24px;-webkit-margin-end:8px;margin-inline-end:8px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:4px}.fw-field-editor .fw-field-editor-header .fw-field-editor-header-content .fw-field-editor-label{width:auto;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#12344d;font-size:14px;font-weight:600;word-break:break-word;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fw-field-editor .fw-field-editor-header .fw-field-editor-header-content .fw-field-editor-key-fw-labels{width:auto;height:100%;-webkit-margin-start:24px;margin-inline-start:24px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:10px}.fw-field-editor .fw-field-editor-header .fw-field-editor-header-content .fw-field-editor-key-fw-labels .fw-field-editor-content-fw-label{width:-webkit-max-content;width:-moz-max-content;width:max-content;border:none}.fw-field-editor .fw-field-editor-header .fw-field-editor-delete-button{opacity:0;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-transition:opacity 0.3s;transition:opacity 0.3s}.fw-field-editor .fw-field-editor-header .fw-field-editor-lock-container{width:16px;height:16px;opacity:0.6;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-margin-start:8px;margin-inline-start:8px}.fw-field-editor .fw-field-editor-header .fw-field-editor-deleting-state{-webkit-margin-start:8px;margin-inline-start:8px}.fw-field-editor .fw-field-editor-body{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;border-radius:8px;display:none}.fw-field-editor .fw-field-editor-body .fw-field-editor-content{width:100%;height:auto;min-height:72px;padding-inline:40px;padding-block:20px;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#f5f7f9;-webkit-border-before:1px solid #eceff2;border-block-start:1px solid #eceff2;-webkit-border-after:1px solid #eceff2;border-block-end:1px solid #eceff2}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:25px;--fw-hint-color:#475867}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-content-required-input{max-width:70%;width:70%}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-internal-name-base{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:4px}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-internal-name-base .fw-field-editor-internal-name-header-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-internal-name-base .fw-field-editor-internal-name-header-label.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-internal-name-base .fw-field-editor-internal-name-container{max-width:70%;width:70%;height:auto;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:4px}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-internal-name-base .fw-field-editor-internal-name-container .fw-field-editor-content-required-internal-name-input{max-width:100%;width:100%}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-internal-name-base .fw-field-editor-internal-name-container .fw-field-editor-internal-name-prefix{font-size:14px;font-weight:500;color:#12344d;display:block;-webkit-margin-before:8px;margin-block-start:8px}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-content-checkboxes{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;gap:8px}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-content-checkboxes .fw-field-editor-content-checkboxes-header-label{font-size:16px;font-weight:600;color:#475867;display:block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-content-checkboxes .fw-field-editor-content-checkbox-container{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-content-checkboxes .fw-field-editor-content-checkbox-container .fw-field-editor-content-fw-checkbox{width:auto;max-width:100%}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-content-checkboxes .fw-field-editor-content-checkbox-container .fw-field-editor-content-fw-icon{-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-before:4px;margin-block-start:4px}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-content-lookup{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-content-dropdown{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-status-toggle{border:1px solid #cfd7df}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-status-toggle .fw-field-editor-status-toggle-item{display:grid;font-size:14px;font-weight:600;grid-template-columns:1fr 1fr;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-after:8px;padding-block-end:8px;-webkit-padding-end:0;padding-inline-end:0;-webkit-padding-before:8px;padding-block-start:8px}.fw-field-editor .fw-field-editor-body .fw-field-editor-content .fw-field-editor-content-required .fw-field-editor-status-toggle .fw-field-editor-status-toggle-item.header{background:#ebeff3;border:1px solid #cfd7df;border-width:0 1px 1px 1px;font-size:12px}.fw-field-editor .fw-field-editor-body .fw-field-editor-footer{width:100%;height:72px;padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;border-radius:8px}.fw-field-editor .fw-field-editor-body .fw-field-editor-footer .fw-field-editor-footer-field-error-container{width:auto;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-padding-start:32px;padding-inline-start:32px;-webkit-padding-after:0;padding-block-end:0;-webkit-padding-end:0;padding-inline-end:0;-webkit-padding-before:0;padding-block-start:0;gap:8px}.fw-field-editor .fw-field-editor-body .fw-field-editor-footer .fw-field-editor-footer-field-error-container .fw-field-editor-footer-field-error-msg{display:block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-start:2px;margin-inline-start:2px;color:#d72d30;font-weight:400;font-size:12px;line-height:20px;height:20px;margin:0}.fw-field-editor .fw-field-editor-body .fw-field-editor-footer .fw-field-editor-footer-buttons-container{width:auto;height:100%;padding:0;-webkit-padding-end:16px;padding-inline-end:16px;gap:12px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.fw-field-editor .fw-field-editor-body .fw-field-editor-footer-with-error{-ms-flex-pack:justify;justify-content:space-between}.fw-field-editor:hover{-webkit-box-shadow:0px 0px 1px rgba(24, 50, 71, 0.3), 0px 2px 8px rgba(22, 29, 37, 0.15);box-shadow:0px 0px 1px rgba(24, 50, 71, 0.3), 0px 2px 8px rgba(22, 29, 37, 0.15)}.fw-field-editor:hover .fw-field-editor-delete-button{opacity:1}.fw-field-editor:focus .fw-field-editor-delete-button{opacity:0}.fw-field-editor--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:not-allowed;opacity:0.6}.fw-field-editor--disabled-sort .fw-field-editor-drag-container{opacity:0 !important;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fw-field-editor--deleting{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:not-allowed;opacity:0.8}.fw-field-editor--primary .fw-field-editor-header{background:rgba(254, 241, 225, 0.4)}.fw-field-editor--primary .fw-field-editor-drag-container{opacity:0 !important;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fw-field-editor--required .fw-field-editor-header .fw-field-editor-label:after{content:\"*\";inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.fw-field-editor--expanded{border:none;-webkit-box-shadow:0px 0px 1px rgba(24, 50, 71, 0.3), 0px 2px 8px rgba(22, 29, 37, 0.15);box-shadow:0px 0px 1px rgba(24, 50, 71, 0.3), 0px 2px 8px rgba(22, 29, 37, 0.15)}.fw-field-editor--expanded .fw-field-editor-header{cursor:unset}.fw-field-editor--expanded .fw-field-editor-header .fw-field-editor-label:after{content:\"\"}.fw-field-editor--expanded .fw-field-editor-header .fw-field-editor-drag-container{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:unset;opacity:0}.fw-field-editor--expanded .fw-field-editor-header .fw-field-editor-delete-button{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:unset;opacity:0}.fw-field-editor--expanded .fw-field-editor-body{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.fw-field-editor-content-label-interalName{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px}.fw-field-editor-content-label{text-transform:uppercase;color:#12344d;font-size:12px;font-weight:600;line-height:20px;-webkit-margin-after:8px;margin-block-end:8px;display:block}.fw-field-editor-content-dependent-label{color:#12344d;font-size:14px;font-weight:400;line-height:20px;-webkit-margin-after:8px;margin-block-end:8px;display:block}.fw-field-editor-textbox{-webkit-margin-before:12px;margin-block-start:12px;-webkit-margin-after:12px;margin-block-end:12px;display:block}.fw-field-editor-textbox textarea{color:#12344d;resize:none;width:100%;border-radius:4px;font-family:inherit;padding-block:8px;padding-inline:8px;line-height:20px}.fw-field-editor-textbox textarea:focus{outline:none;background-color:#fff;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5}.fw-field-editor-delete-modal-content{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px;-webkit-padding-before:4px;padding-block-start:4px}";

const FieldEditor = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwExpand = index.createEvent(this, "fwExpand", 7);
    this.fwUpdate = index.createEvent(this, "fwUpdate", 7);
    this.fwDelete = index.createEvent(this, "fwDelete", 7);
    this.fwReorder = index.createEvent(this, "fwReorder", 7);
    this.KEY_INTERNAL_NAME = 'internalName';
    this.isInternalNameEdited = false;
    this.internalNamePrefix = '';
    this.isNewField = false;
    this.isDependentField = false;
    this.textboxDependentValue = formBuilderPreset.presetSchema.textboxDependentValue;
    /**
     * The db type used to determine the json to be used for CUSTOM_OBJECTS or CONVERSATION_PROPERTIES
     */
    this.productName = 'CUSTOM_OBJECTS';
    /**
     * flag to notify if an api call is in progress
     */
    this.isLoading = false;
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Property to determine expanded state or collapsed
     */
    this.expanded = false;
    /**
     * data source used to set and edit the field values
     */
    this.dataProvider = null;
    /**
     * variable to store form values
     */
    this.formValues = null;
    /**
     * object to store the lookup target entities
     */
    this.lookupTargetObjects = false;
    /**
     * Disable the repositioning option
     */
    this.disabledSort = false;
    /**
     * defines the name of the entity to be used in Lookup field
     */
    this.entityName = '';
    /**
     * defines if the field is primary
     */
    this.isPrimaryField = false;
    /**
     * Flag to enable / disable the the filterable option
     */
    this.enableFilterable = true;
    /**
     * Flag to enable / disable the the unique option
     */
    this.enableUnique = true;
    /**
     * index attached inside the parent group component
     */
    this.index = -1;
    /**
     * Name of the component, saved as part of the form data.
     */
    this.name = '';
    /**
     * Disable features for the users with free trial plan
     */
    this.role = 'admin';
    /**
     * Permission object to restrict features based on permissions
     * "view" needs to be set to true for the rest of the permissions to be applicable
     * By default, all the permissions are set to true to give access to all the features
     * Example permission object : { view: true, create: true, edit: true, delete: true }
     */
    this.permission = { view: true, create: true, edit: true, delete: true };
    /**
     * State to check if the values have been changed and enable the save button
     */
    this.isValuesChanged = false;
    /**
     * State to serialize the field builder options
     */
    this.fieldBuilderOptions = null;
    /**
     * State to show the error messages
     */
    this.showErrors = false;
    /**
     * State to show duplicate error message
     */
    this.duplicateErrors = false;
    /**
     * State to show form error text for the field validations
     */
    this.formErrorMessage = '';
    /**
     * State to show label input error message
     */
    this.labelErrorMessage = '';
    /**
     * State to show label input warning message
     */
    this.labelWarningMessage = '';
    /**
     * State to show internal name input error message
     */
    this.internalNameErrorMessage = '';
    /**
     * State to show internal name input warning message
     */
    this.internalNameWarningMessage = '';
    /**
     * flag to show spinner on delete button
     */
    this.isDeleting = false;
    /**
     * To store dependentLevels selected state on click
     */
    this.dependentLevels = {};
    /**
     * Flag to toggle dependent field initial textbox
     */
    this.showDependentFieldTextbox = false;
    this.getInterpolatedMaxLimitLabel = (strProperty) => {
      if (strProperty && strProperty !== '') {
        try {
          const objMaxLimitField = formBuilderUtils.getMaxLimitProperty(this.productName, strProperty);
          if (objMaxLimitField) {
            return formBuilderUtils.i18nText(objMaxLimitField.message, {
              count: objMaxLimitField.count,
            });
          }
        }
        catch (error) {
          return '';
        }
      }
      return '';
    };
    /**
     * validate limitations and enable/disable the checkbox controls
     */
    this.setCheckboxesAvailability = (objFieldData) => {
      if (formBuilderPreset.presetSchema && objFieldData && this.defaultFieldTypeSchema) {
        const boolNewField = this.isNewField;
        const objPayload = this.dataProvider;
        const objCheckboxValidation = formBuilderPreset.presetSchema.fieldEditorValidations.checkboxDetails;
        let boolRequiredSelected = false;
        let boolUniqueSelected = false;
        const objKeyMappers = objCheckboxValidation.keyMapper;
        const objEnableKeyChecker = this.isPrimaryField
          ? objCheckboxValidation.existingPrimaryFieldEnabledCheckboxes
          : objCheckboxValidation.existingFieldEnabledCheckboxes;
        const objFieldTypeSchema = formBuilderUtils.deepCloneObject(this.defaultFieldTypeSchema);
        const arrCheckBoxes = boolNewField
          ? objFieldData.checkboxes
          : objFieldTypeSchema.checkboxes;
        const intCheckboxesLength = arrCheckBoxes === null || arrCheckBoxes === void 0 ? void 0 : arrCheckBoxes.length;
        let intFilterableIndex = -1;
        for (let i1 = 0; i1 < intCheckboxesLength; i1++) {
          const objCheckItem = arrCheckBoxes[i1];
          const strCheckKey = objCheckItem.key;
          let boolKeySelected = false;
          if (boolNewField) {
            boolKeySelected = objCheckItem.selected;
          }
          else {
            // get payload key references from presets and retreive the values from the payload
            const strMappedPayloadKey = objKeyMappers[strCheckKey];
            if (formBuilderUtils.hasCustomProperty(objPayload, strMappedPayloadKey)) {
              const keyFormValue = objPayload[strMappedPayloadKey];
              boolKeySelected =
                keyFormValue === 'true' || keyFormValue === true ? true : false;
            }
            else {
              const nestedValue = formBuilderUtils.getNestedKeyValueFromObject(objPayload, strMappedPayloadKey);
              if (nestedValue) {
                boolKeySelected =
                  nestedValue === 'true' || nestedValue === true ? true : false;
              }
            }
            objCheckItem.selected = boolKeySelected;
            objCheckItem.enabled = objEnableKeyChecker === null || objEnableKeyChecker === void 0 ? void 0 : objEnableKeyChecker[strCheckKey];
          }
          if (strCheckKey === 'unique') {
            boolUniqueSelected = boolKeySelected;
          }
          else if (strCheckKey === 'required') {
            boolRequiredSelected = boolKeySelected;
          }
          if (objCheckItem.enabled) {
            // Check for the maximum limits
            if (strCheckKey === 'filterable' && !this.enableFilterable) {
              objCheckItem.enabled = false;
              objCheckItem.disabledMessage =
                this.getInterpolatedMaxLimitLabel('filterable');
            }
            else if (strCheckKey === 'unique' && !this.enableUnique) {
              objCheckItem.enabled = false;
              objCheckItem.disabledMessage =
                this.getInterpolatedMaxLimitLabel('unique');
            }
          }
          else if (strCheckKey === 'filterable') {
            intFilterableIndex = i1;
          }
        }
        // condition to disable the filterable field if unique is checked
        if (intFilterableIndex > -1 &&
          boolUniqueSelected &&
          arrCheckBoxes[intFilterableIndex].enabled) {
          arrCheckBoxes[intFilterableIndex].enabled = false;
          arrCheckBoxes[intFilterableIndex].selected = true;
          arrCheckBoxes[intFilterableIndex].disabledMessage = '';
        }
        this.fieldBuilderOptions = Object.assign(Object.assign({}, objFieldData), { checkboxes: formBuilderUtils.deepCloneObject(arrCheckBoxes), unique: boolUniqueSelected, required: boolRequiredSelected });
      }
    };
    /**
     * function called on reorder button mousedown to enable the parent as draggable
     */
    this.startParentDragging = () => {
      if (this.expanded) {
        return;
      }
      this.enableParentDrag(true);
    };
    /**
     * function to disable the parent as draggable
     */
    this.stopParentDragging = () => {
      this.enableParentDrag(false);
    };
    /**
     * function to enable/disable the draggable property for the base div
     */
    this.enableParentDrag = (value) => {
      if (this.divFieldBase) {
        this.fwReorder.emit({ value: value });
        if (value) {
          this.divFieldBase.setAttribute('draggable', 'true');
        }
        else {
          this.divFieldBase.removeAttribute('draggable');
        }
      }
    };
    /**
     * function to validate the label input error values
     */
    this.validateLabelErrors = (strInputValue) => {
      if (!strInputValue) {
        this.labelErrorMessage = formBuilderUtils.i18nText('errors.emptyFieldName');
        return false;
      }
      else {
        try {
          const strNewFieldLabel = strInputValue.toLowerCase();
          const arrFields = this.formValues.fields;
          if (arrFields &&
            arrFields.length > 0 &&
            arrFields.some((e, fieldIndex) => this.index !== fieldIndex &&
              !(e === null || e === void 0 ? void 0 : e.isNew) &&
              e.label.toLowerCase() === strNewFieldLabel)) {
            this.labelErrorMessage = formBuilderUtils.i18nText('errors.fieldNameExists');
            return false;
          }
        }
        catch (error) {
          console.error(`Error occured in validateLabelErrors: ${error}`);
        }
      }
      this.labelErrorMessage = '';
      return true;
    };
    /** validate same label or internal name error */
    this.validateDuplicateErrors = (prefix) => {
      const attributesToValidate = Object.keys(this.dictInteractiveElements)
        .filter((ele) => ele.includes(prefix))
        .map((ele) => this.dictInteractiveElements[ele].value);
      const isNameDuplicate = formBuilderUtils.hasDuplicates(attributesToValidate);
      if (isNameDuplicate) {
        this.labelErrorMessage = formBuilderUtils.i18nText('errors.fieldNameExists');
      }
      return isNameDuplicate;
    };
    /**
     * function to validate the internal name input error values
     */
    this.validateInternalNameErrors = (strInputValue) => {
      if (!strInputValue) {
        this.internalNameErrorMessage = formBuilderUtils.i18nText('errors.emptyFieldName');
        return false;
      }
      else {
        try {
          const strNewFieldName = this.internalNamePrefix + strInputValue.toLowerCase();
          const arrFields = this.formValues.fields;
          if (arrFields &&
            arrFields.length > 0 &&
            arrFields.some((e, fieldIndex) => this.index !== fieldIndex &&
              !(e === null || e === void 0 ? void 0 : e.isNew) &&
              e.name.toLowerCase() === strNewFieldName)) {
            this.internalNameErrorMessage = formBuilderUtils.i18nText('errors.fieldNameExists');
            return false;
          }
          else {
            const regexAlphaNumChars = /^[A-Z0-9_]*$/i;
            if (!regexAlphaNumChars.test(strInputValue)) {
              this.internalNameErrorMessage = formBuilderUtils.i18nText('errors.useOnlyEnglishChars');
              return false;
            }
          }
        }
        catch (error) {
          console.error(`Error occured in validateInternalNameErrors: ${error}`);
        }
      }
      this.internalNameErrorMessage = '';
      return true;
    };
    /**
     * function to check the dropdown error values
     */
    this.validateDropdownErrors = (arrDropdownValues) => {
      if (!arrDropdownValues || arrDropdownValues.length < 1) {
        this.formErrorMessage = formBuilderUtils.i18nText('errors.minimum');
        return false;
      }
      if (this.errorType && this.errorType !== '') {
        if (this.errorType === formBuilderUtils.i18nText('errors.deleteDropDownChoice')) {
          this.formErrorMessage = this.errorType;
          return true;
        }
        this.formErrorMessage = '';
        return false;
      }
      this.formErrorMessage = '';
      return true;
    };
    /**
     * function to check the dropdown error values
     */
    this.validateLookupErrors = (objLookupValues) => {
      if (objLookupValues &&
        formBuilderUtils.hasCustomProperty(objLookupValues, 'relationship') &&
        formBuilderUtils.hasCustomProperty(objLookupValues, 'target') &&
        objLookupValues.relationship !== '' &&
        objLookupValues.target > 0) {
        return true;
      }
      this.formErrorMessage = '';
      return false;
    };
    this.addFieldHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      let boolValidForm = true;
      let level = null;
      let objValues = {
        type: this.dataProvider.type,
        isPrimaryField: this.isPrimaryField,
      };
      // Need to figure out how to expand this automatically
      if (this.isDependentField) {
        // objValues['field_options'] = { level: '1', dependent: 'true' };
        objValues['fields'] = [
          {
            field_options: { level: '1', dependent: 'true' },
            type: '2',
            fields: [
              {
                field_options: { level: '2', dependent: 'true' },
                type: '2',
                fields: [
                  {
                    field_options: { level: '3', dependent: 'true' },
                    type: '2',
                  },
                ],
              },
            ],
          },
        ];
      }
      // Validate name
      if (this.validateDuplicateErrors('name_level_')) {
        this.duplicateErrors = true;
        this.showErrors = true;
        return;
      }
      this.duplicateErrors = false;
      for (const key in this.dictInteractiveElements) {
        const elInteractive = this.dictInteractiveElements[key];
        const strTagName = elInteractive.tagName.toLowerCase();
        switch (strTagName) {
          case 'fw-input':
            // eslint-disable-next-line no-case-declarations
            const strInputValue = elInteractive.value;
            if (key === 'name') {
              boolValidForm = this.validateLabelErrors(strInputValue);
              if (boolValidForm) {
                this.showErrors = false;
                this.labelErrorMessage = '';
                objValues[key] = strInputValue || '';
              }
              else {
                this.showErrors = true;
                return;
              }
            }
            else if (key === this.KEY_INTERNAL_NAME) {
              if (this.isNewField) {
                boolValidForm = this.validateInternalNameErrors(strInputValue);
                if (boolValidForm) {
                  this.showErrors = false;
                  this.internalNameErrorMessage = '';
                  objValues[key] =
                    `${this.internalNamePrefix}${strInputValue}` || '';
                }
                else {
                  this.showErrors = true;
                  return;
                }
              }
            }
            else if (key.includes('name_level_')) {
              level = formBuilderUtils.removeFirstOccurrence(key, 'name_level_');
              boolValidForm = this.validateLabelErrors(strInputValue);
              if (boolValidForm) {
                this.showErrors = false;
                this.labelErrorMessage = '';
                objValues = formBuilderUtils.updateFieldAttributes(objValues, level, {
                  name: strInputValue,
                });
              }
              else {
                this.showErrors = true;
                return;
              }
            }
            else if (key.includes(`${this.KEY_INTERNAL_NAME}_level_`)) {
              level = formBuilderUtils.removeFirstOccurrence(key, `${this.KEY_INTERNAL_NAME}_level_`);
              boolValidForm = this.validateInternalNameErrors(strInputValue);
              if (boolValidForm) {
                this.showErrors = false;
                this.internalNameErrorMessage = '';
                objValues = formBuilderUtils.updateFieldAttributes(objValues, level, {
                  internalName: `${this.internalNamePrefix}${strInputValue}` || '',
                });
              }
              else {
                this.showErrors = true;
                return;
              }
            }
            break;
          case 'fw-checkbox':
            objValues[key] = elInteractive.checked || false;
            break;
          case 'fw-fb-field-dropdown': {
            if (this.isDependentField) {
              level = formBuilderUtils.removeFirstOccurrence(key, 'choices_level_');
              const arrDropdownValues = formBuilderUtils.deepCloneObject(elInteractive.dataProvider) || [];
              boolValidForm = this.validateDropdownErrors(arrDropdownValues);
              if (boolValidForm) {
                this.showErrors = false;
                objValues = formBuilderUtils.updateFieldAttributes(objValues, level, {
                  choices: arrDropdownValues,
                });
              }
              else {
                elInteractive.validateErrors();
                this.showErrors = true;
                return;
              }
            }
            else {
              const arrDropdownValues = formBuilderUtils.deepCloneObject(elInteractive.dataProvider) || [];
              boolValidForm = this.validateDropdownErrors(arrDropdownValues);
              if (boolValidForm) {
                this.showErrors = false;
                objValues[key] = arrDropdownValues || [];
              }
              else {
                elInteractive.validateErrors();
                this.showErrors = true;
                return;
              }
            }
            break;
          }
          case 'fw-fb-field-lookup': {
            const objLookupValues = formBuilderUtils.deepCloneObject(elInteractive.dataResponse) || null;
            boolValidForm = this.validateLookupErrors(objLookupValues);
            if (boolValidForm) {
              this.showErrors = false;
              objValues[key] = objLookupValues;
            }
            else {
              this.showErrors = true;
              return;
            }
            break;
          }
        }
      }
      if (formBuilderUtils.checkIfCustomToggleField(this.productName, this.dataProvider.name)) {
        objValues['choices'] = [...this.dataProvider.choices];
      }
      if (boolValidForm) {
        if (!this.isNewField) {
          objValues[this.KEY_INTERNAL_NAME] = this.dataProvider.name;
        }
        this.internalNameWarningMessage = '';
        this.internalNameErrorMessage = '';
        this.labelWarningMessage = '';
        this.labelErrorMessage = '';
        this.formErrorMessage = '';
        this.showErrors = false;
        this.fwUpdate.emit({
          index: this.index,
          isNew: this.isNewField,
          value: Object.assign({}, objValues),
        });
      }
    };
    this.cancelFieldHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      if (this.expanded) {
        this.dictInteractiveElements = {};
        this.expanded = false;
        this.internalNameErrorMessage = '';
        this.labelWarningMessage = '';
        this.labelErrorMessage = '';
        this.formErrorMessage = '';
        this.showErrors = false;
        if (this.isValuesChanged) {
          this.dataProvider = this.oldFormValues
            ? formBuilderUtils.deepCloneObject(this.oldFormValues)
            : null;
        }
        this.fwExpand.emit({
          expanded: false,
          index: this.index,
          isNew: this.isNewField,
        });
      }
    };
    this.expandHandler = (event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (event.detail && event.detail > 1) {
        return;
      }
      if (!this.expanded) {
        this.dictInteractiveElements = {};
        this.expanded = true;
        this.fwExpand.emit({
          expanded: true,
          index: this.index,
          isNew: this.isNewField,
          value: Object.assign({}, this.dataProvider),
        });
      }
    };
    this.deleteFieldClickHandler = (event) => {
      var _a;
      event.stopImmediatePropagation();
      event.stopPropagation();
      const boolDeleteAllowed = formBuilderUtils.hasPermission(this.role, this.permission, 'DELETE');
      if (boolDeleteAllowed) {
        (_a = this.modalConfirmDelete) === null || _a === void 0 ? void 0 : _a.open();
      }
    };
    this.confirmDeleteFieldHandler = () => {
      var _a;
      this.isDeleting = true;
      this.fwDelete.emit({ index: this.index });
      (_a = this.modalConfirmDelete) === null || _a === void 0 ? void 0 : _a.close();
    };
    this.dropdownChangeHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.isValuesChanged = true;
      const strType = event.detail.type;
      // let choices = null;
      switch (strType) {
        case 'DELETE':
          this.errorType =
            !this.isDependentField &&
              !this.isNewField &&
              event.detail.errorType !== formBuilderUtils.i18nText('errors.deleteDropDownChoice')
              ? event.detail.errorType
              : '';
          this.validateDropdownErrors(event.detail.value);
          if (this.isDependentField) {
            this.fieldBuilderOptions = formBuilderUtils.deleteChoicesInFields(this, event);
          }
          break;
        case 'VALUE_CHANGE':
          this.errorType = event.detail.errorType;
          this.validateDropdownErrors(event.detail.value);
          if (this.isDependentField) {
            this.fieldBuilderOptions = formBuilderUtils.updateChoicesInFields(this, event);
          }
          break;
        case 'ADD':
        case 'REPOSITION':
          this.errorType = event.detail.errorType;
          if (this.isDependentField) {
            this.fieldBuilderOptions = formBuilderUtils.updateChoicesInFields(this, event);
          }
          break;
        case 'SELECT':
          this.dependentLevels = formBuilderUtils.updateLevelSelection(this, event);
          break;
      }
    };
    this.statusToggleHandler = (event) => {
      this.isValuesChanged = true;
      const objPayload = this.dataProvider;
      const id = event.target.id;
      const choice = objPayload.choices.find((item) => item.id === id);
      choice.choice_options.resolution_timer = event.detail.checked;
    };
    this.lookupChangeHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.isValuesChanged = true;
      this.validateLookupErrors(event.detail.value);
    };
    this.checkboxSelectionChangeHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.isValuesChanged = true;
      // condition to disable the filterable field if unique is checked
      if (!this.isPrimaryField &&
        event.detail.value === 'unique' &&
        this.enableFilterable) {
        const boolUniqueChecked = event.detail.meta.checked;
        try {
          const arrCheckBoxes = this.fieldBuilderOptions.checkboxes;
          const intCheckboxesLength = arrCheckBoxes.length;
          for (let i1 = 0; i1 < intCheckboxesLength; i1++) {
            const objFilterable = arrCheckBoxes[i1];
            if (objFilterable.key === 'filterable') {
              objFilterable.selected = boolUniqueChecked;
              objFilterable.enabled = !boolUniqueChecked;
              objFilterable.disabledMessage = ''; //!objFilterable.enabled ? '' : '';
              this.fieldBuilderOptions = Object.assign(Object.assign({}, this.fieldBuilderOptions), { checkboxes: arrCheckBoxes });
              break;
            }
          }
        }
        catch (error) {
          console.error(`Error occured in checkboxSelectionChangeHandler: ${error}`);
        }
      }
    };
    this.handleDependentField = (event) => {
      const value = event.target['value'];
      if (event.key === 'Tab') {
        event.preventDefault();
        const start = event.target['selectionStart'];
        const end = event.target['selectionEnd'];
        // Set textarea value to: text before caret + tab + text after caret
        event.target['value'] =
          value.substring(0, start) + '\t' + value.substring(end);
        // Put caret at right position again
        event.target['selectionStart'] = start + 1;
        event.target['selectionEnd'] = start + 1;
      }
      else {
        this.textboxDependentValue = value;
      }
    };
    this.switchToDropdownView = () => {
      this.fieldBuilderOptions = formBuilderUtils.buildChoicesFromText(this.textboxDependentValue, this.fieldBuilderOptions);
      this.showDependentFieldTextbox = false;
    };
    this.performLabelChange = (event, isBlur = false, level) => {
      var _a, _b, _c;
      if (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
      if (!isBlur) {
        this.isValuesChanged = true;
      }
      const strInputValue = !isBlur
        ? ((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.value) || ''
        : ((_c = (_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b['value']) === null || _c === void 0 ? void 0 : _c.trim()) || '';
      const isValidValue = strInputValue && strInputValue !== '';
      let strInternalName = '';
      let boolInternalNameUpdated = false;
      if (!this.isInternalNameEdited && this.isNewField) {
        strInternalName = formBuilderUtils.deriveInternalNameFromLabel(strInputValue);
        boolInternalNameUpdated = true;
      }
      if (isValidValue) {
        const objMaxLimitField = formBuilderUtils.getMaxLimitProperty(this.productName, 'maxLabelChars');
        if (objMaxLimitField && strInputValue.length >= objMaxLimitField.count) {
          this.labelWarningMessage = formBuilderUtils.i18nText(objMaxLimitField.message, {
            count: objMaxLimitField.count,
          });
        }
        else {
          this.labelWarningMessage = '';
        }
      }
      else {
        this.labelWarningMessage = '';
      }
      if (boolInternalNameUpdated) {
        const objMaxLimitFieldName = formBuilderUtils.getMaxLimitProperty(this.productName, 'maxInternalNameChars');
        if (!this.internalNameWarningMessage &&
          this.internalNameWarningMessage !== '' &&
          objMaxLimitFieldName &&
          strInternalName.length >= objMaxLimitFieldName.count) {
          this.internalNameWarningMessage = formBuilderUtils.i18nText(objMaxLimitFieldName.message, {
            count: objMaxLimitFieldName.count,
          });
        }
        this.fieldBuilderOptions = formBuilderUtils.updateFieldAttributes(this.fieldBuilderOptions, level, { label: strInputValue, name: strInternalName });
      }
      else {
        this.fieldBuilderOptions = formBuilderUtils.updateFieldAttributes(this.fieldBuilderOptions, level, { label: strInputValue });
      }
      if (this.showErrors) {
        this.validateLabelErrors(strInputValue);
      }
    };
    this.labelInputHandler = (event, level) => {
      this.performLabelChange(event, false, level);
    };
    this.labelBlurHandler = (event, level) => {
      this.performLabelChange(event, true, level);
    };
    this.performInternalNameChange = (event, isBlur = false, level) => {
      var _a, _b, _c;
      if (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
      let strInputValue = !isBlur
        ? ((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.value) || ''
        : ((_c = (_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b['value']) === null || _c === void 0 ? void 0 : _c.trim()) || '';
      const isValidValue = strInputValue && strInputValue !== '';
      if (!isBlur) {
        this.isValuesChanged = true;
        if (isValidValue) {
          strInputValue = strInputValue.trim();
        }
      }
      if (!this.isInternalNameEdited && isValidValue) {
        this.isInternalNameEdited = true;
      }
      if (isValidValue) {
        const objMaxLimitField = formBuilderUtils.getMaxLimitProperty(this.productName, 'maxInternalNameChars');
        if (objMaxLimitField && strInputValue.length >= objMaxLimitField.count) {
          this.internalNameWarningMessage = formBuilderUtils.i18nText(objMaxLimitField.message, {
            count: objMaxLimitField.count,
          });
        }
        else {
          this.internalNameWarningMessage = '';
        }
        this.fieldBuilderOptions = formBuilderUtils.updateFieldAttributes(this.fieldBuilderOptions, level, { name: strInputValue });
      }
      else {
        this.internalNameWarningMessage = '';
      }
      if (this.showErrors) {
        this.validateInternalNameErrors(strInputValue);
      }
    };
    this.internalNameInputHandler = (event, level) => {
      this.performInternalNameChange(event, false, level);
    };
    this.internalNameBlurHandler = (event, level) => {
      this.performInternalNameChange(event, true, level);
    };
  }
  watchEnableUniqueChangeHandler() {
    this.setCheckboxesAvailability(this.fieldBuilderOptions);
  }
  watchEnableFilterableChangeHandler() {
    this.setCheckboxesAvailability(this.fieldBuilderOptions);
  }
  watchDataproviderChangeHandler() {
    this.isDeleting = false;
    this.isValuesChanged = false;
    this.isInternalNameEdited = false;
    this.oldFormValues = this.dataProvider
      ? formBuilderUtils.deepCloneObject(this.dataProvider)
      : null;
    if (this.dataProvider) {
      const objDP = this.dataProvider;
      this.isNewField =
        formBuilderUtils.hasCustomProperty(objDP, 'isNew') && objDP['isNew'] === true
          ? true
          : false;
      // Currently supports dropdown format
      this.isDependentField = objDP.type === 'DEPENDENT_FIELD';
      if (this.isNewField) {
        this.isInternalNameEdited = false;
        this.showDependentFieldTextbox = this.isDependentField;
        this.setCheckboxesAvailability(formBuilderUtils.deepCloneObject(this.dataProvider));
      }
      else {
        this.isInternalNameEdited = true;
        let objDefaultFieldTypeSchema = formBuilderUtils.deepCloneObject(this.defaultFieldTypeSchema);
        this.showDependentFieldTextbox = false;
        objDefaultFieldTypeSchema.choices =
          formBuilderUtils.hasCustomProperty(this.dataProvider, 'choices') &&
            this.dataProvider.choices.length > 0
            ? formBuilderUtils.deepCloneObject(this.dataProvider.choices)
            : [];
        objDefaultFieldTypeSchema.label = this.dataProvider.label || '';
        objDefaultFieldTypeSchema.name =
          formBuilderUtils.removeFirstOccurrence(this.dataProvider.name, this.internalNamePrefix) || '';
        if (this.isDependentField) {
          objDefaultFieldTypeSchema = Object.assign(Object.assign({}, objDefaultFieldTypeSchema), { fields: formBuilderUtils.deepCloneObject(this.dataProvider.fields) });
        }
        this.setCheckboxesAvailability(objDefaultFieldTypeSchema);
      }
    }
    else {
      this.isNewField = false;
      this.fieldBuilderOptions = null;
    }
  }
  componentWillLoad() {
    const objProductPreset = formBuilderUtils.formMapper[this.productName];
    const objProductConfig = objProductPreset.config;
    this.internalNamePrefix = objProductConfig.internalNamePrefix;
    this.watchDataproviderChangeHandler();
    this.dictInteractiveElements = {};
  }
  renderFwLabel(dataItem) {
    if (!dataItem.selected || dataItem.key === 'required') {
      return null;
    }
    const strBaseClassName = 'fw-field-editor';
    const strKey = dataItem.key;
    const strLabel = formBuilderUtils.hasCustomProperty(dataItem, 'tag')
      ? formBuilderUtils.i18nText(dataItem.tag)
      : strKey;
    return (index.h("fw-label", { key: strKey, value: strLabel, color: 'grey', class: `${strBaseClassName}-content-fw-label` }));
  }
  renderCheckboxField(dataCheckbox) {
    const boolEditCheckboxAllowed = this.isNewField ||
      formBuilderUtils.hasPermission(this.role, this.permission, 'EDIT', true);
    const boolDisableCheckbox = !boolEditCheckboxAllowed || !dataCheckbox.enabled;
    const strBaseClassName = 'fw-field-editor';
    const strKey = dataCheckbox.key;
    let strLimitMessage = '';
    let boolShowInfo = false;
    if (formBuilderUtils.hasCustomProperty(dataCheckbox, 'disabledMessage') &&
      dataCheckbox.disabledMessage !== '') {
      boolShowInfo = true;
      strLimitMessage = dataCheckbox.disabledMessage;
    }
    else if (formBuilderUtils.hasCustomProperty(dataCheckbox, 'info') &&
      dataCheckbox.info !== '') {
      boolShowInfo = true;
      strLimitMessage = formBuilderUtils.i18nText(dataCheckbox.info);
    }
    return (index.h("div", { class: `${strBaseClassName}-content-checkbox-container` }, index.h("fw-checkbox", { class: `${strBaseClassName}-content-fw-checkbox`, ref: (el) => (this.dictInteractiveElements[strKey] = el), key: strKey, value: strKey, disabled: boolDisableCheckbox, checked: dataCheckbox.selected, onFwChange: this.checkboxSelectionChangeHandler }, formBuilderUtils.i18nText(dataCheckbox.display_label)), boolShowInfo && (index.h("fw-tooltip", { placement: 'right', trigger: 'hover', content: strLimitMessage }, index.h("fw-icon", { class: `${strBaseClassName}-content-fw-icon`, size: 14, name: 'info', color: '#264966' })))));
  }
  renderDropdown(boolDisableDropdowns, fieldBuilderOptions = null, choiceIds = [], parentId = null) {
    var _a;
    // Dependent Level checks
    const level = (_a = fieldBuilderOptions === null || fieldBuilderOptions === void 0 ? void 0 : fieldBuilderOptions.field_options) === null || _a === void 0 ? void 0 : _a.level;
    const dictElName = this.isDependentField
      ? `choices_level_${level}`
      : 'choices';
    const dropdownChoices = (fieldBuilderOptions === null || fieldBuilderOptions === void 0 ? void 0 : fieldBuilderOptions.choices) || this.fieldBuilderOptions.choices;
    const selectedLevels = formBuilderUtils.getDependentLevels(this.dependentLevels, dropdownChoices, choiceIds, level);
    const showAddChoice = parentId
      ? !!choiceIds.length
      : !!dropdownChoices.length;
    return (index.h("fw-fb-field-dropdown", { ref: (el) => (this.dictInteractiveElements[dictElName] = el), dataProvider: dropdownChoices, productName: this.productName, showErrors: this.showErrors, disabled: boolDisableDropdowns, isDependentField: this.isDependentField, dependentLevels: selectedLevels, level: level, parentId: parentId, choiceIds: choiceIds, enableKeyPress: showAddChoice, onFwChange: this.dropdownChangeHandler }));
  }
  renderStatusToggle(objFormValue) {
    const strBaseClassName = 'fw-field-editor';
    const choices = objFormValue.choices;
    return (index.h("div", { class: `${strBaseClassName}-status-toggle` }, index.h("div", { class: `${strBaseClassName}-status-toggle-item header` }, index.h("span", null, formBuilderUtils.i18nText('fieldLabel')), index.h("span", null, formBuilderUtils.i18nText('ertText'))), choices.map((dataItem) => {
      let toggle = null;
      if ((dataItem === null || dataItem === void 0 ? void 0 : dataItem.choice_options) &&
        Object.keys(dataItem === null || dataItem === void 0 ? void 0 : dataItem.choice_options).length) {
        toggle = (index.h("span", null, index.h("fw-toggle", { id: dataItem.id, size: 'medium', checked: dataItem === null || dataItem === void 0 ? void 0 : dataItem.choice_options.resolution_timer, onFwChange: this.statusToggleHandler })));
      }
      return (index.h("div", { class: `${strBaseClassName}-status-toggle-item` }, index.h("span", null, index.h("div", { class: `${strBaseClassName}-input-container` }, index.h("fw-input", { class: `${strBaseClassName}-content-required-input`, value: dataItem.value, disabled: 'true' }))), toggle));
    })));
  }
  renderLookup(boolDisableLookup) {
    const objFormValue = this.dataProvider;
    return (index.h("fw-fb-field-lookup", { ref: (el) => (this.dictInteractiveElements['relationship'] = el), targetObjects: this.lookupTargetObjects, sourceObjectName: this.entityName, showErrors: this.showErrors, disabled: boolDisableLookup, onFwChange: this.lookupChangeHandler, formValues: objFormValue, productName: this.productName }));
  }
  renderInternalName(objProductConfig, objMaxLimits, isDefaultNonCustomField, boolEditAllowed, fieldBuilderOptions) {
    var _a, _b;
    const boolSupportInternalName = objProductConfig.editInternalName;
    if (!boolSupportInternalName || !this.expanded) {
      return null;
    }
    const strBaseClassName = 'fw-field-editor';
    const objFieldBuilder = fieldBuilderOptions;
    const strInputInternalName = formBuilderUtils.hasCustomProperty(objFieldBuilder, 'name')
      ? objFieldBuilder.name
      : '';
    // Dependent Level checks
    const level = (_a = fieldBuilderOptions === null || fieldBuilderOptions === void 0 ? void 0 : fieldBuilderOptions.field_options) === null || _a === void 0 ? void 0 : _a.level;
    const fieldError = !strInputInternalName;
    const dictElName = this.isDependentField
      ? `${this.KEY_INTERNAL_NAME}_level_${level}`
      : this.KEY_INTERNAL_NAME;
    const boolShowNameError = this.showErrors &&
      fieldError &&
      this.internalNameErrorMessage &&
      this.internalNameErrorMessage !== ''
      ? true
      : false;
    const strInputError = boolShowNameError
      ? this.internalNameErrorMessage
      : '';
    const boolShowNameWarning = !boolShowNameError &&
      this.internalNameWarningMessage &&
      this.internalNameWarningMessage !== ''
      ? true
      : false;
    const strInputWarning = boolShowNameWarning
      ? this.internalNameWarningMessage
      : '';
    const numNameMaxChars = ((_b = objMaxLimits === null || objMaxLimits === void 0 ? void 0 : objMaxLimits['maxInternalNameChars']) === null || _b === void 0 ? void 0 : _b.count) || 50;
    return (index.h("div", { class: `${strBaseClassName}-internal-name-base` }, index.h("label", { class: `${strBaseClassName}-internal-name-header-label required` }, formBuilderUtils.i18nText('internalName')), index.h("div", { class: `${strBaseClassName}-internal-name-container` }, !isDefaultNonCustomField && (index.h("label", { class: `${strBaseClassName}-internal-name-prefix` }, this.internalNamePrefix)), index.h("fw-input", { ref: (el) => (this.dictInteractiveElements[dictElName] = el), class: `${strBaseClassName}-content-required-internal-name-input`, placeholder: formBuilderUtils.i18nText('fieldNamePlaceholder'), required: true, maxlength: numNameMaxChars, value: strInputInternalName, errorText: strInputError, warningText: strInputWarning, disabled: !this.isNewField || !boolEditAllowed, state: boolShowNameError
        ? 'error'
        : boolShowNameWarning
          ? 'warning'
          : 'normal', onFwBlur: (el) => this.internalNameBlurHandler(el, level), onFwInput: (el) => this.internalNameInputHandler(el, level) }))));
  }
  renderLabel(objMaxLimits, isDefaultNonCustomField, boolEditAllowed, fieldBuilderOptions) {
    var _a, _b;
    const objFieldBuilder = fieldBuilderOptions;
    const strBaseClassName = 'fw-field-editor';
    const strInputLabel = formBuilderUtils.hasCustomProperty(objFieldBuilder, 'label')
      ? objFieldBuilder.label
      : '';
    const boolDIsableInputLabel = isDefaultNonCustomField || !boolEditAllowed;
    const strInputHint = this.isPrimaryField
      ? formBuilderUtils.i18nText('primaryFieldNameHint')
      : '';
    // Dependent Level checks
    const level = (_a = fieldBuilderOptions === null || fieldBuilderOptions === void 0 ? void 0 : fieldBuilderOptions.field_options) === null || _a === void 0 ? void 0 : _a.level;
    const dictElName = this.isDependentField ? `name_level_${level}` : 'name';
    const fieldError = !strInputLabel || this.duplicateErrors;
    const boolShowLabelError = this.showErrors &&
      fieldError &&
      this.labelErrorMessage &&
      this.labelErrorMessage !== ''
      ? true
      : false;
    const boolShowLabelWarning = !boolShowLabelError &&
      this.labelWarningMessage &&
      this.labelWarningMessage !== ''
      ? true
      : false;
    const strInputWarning = boolShowLabelWarning
      ? this.labelWarningMessage
      : '';
    const strInputError = boolShowLabelError ? this.labelErrorMessage : '';
    const numLabelMaxChars = ((_b = objMaxLimits === null || objMaxLimits === void 0 ? void 0 : objMaxLimits['maxLabelChars']) === null || _b === void 0 ? void 0 : _b.count) || 255;
    const fieldLabel = this.isDependentField
      ? formBuilderUtils.i18nText('labelForLevel', { level })
      : formBuilderUtils.i18nText('fieldLabel');
    return (index.h("fw-input", { ref: (el) => (this.dictInteractiveElements[dictElName] = el), class: `${strBaseClassName}-content-required-input`, placeholder: formBuilderUtils.i18nText('fieldLabelPlaceholder'), label: fieldLabel, required: true, maxlength: numLabelMaxChars, value: strInputLabel, hintText: strInputHint, errorText: strInputError, warningText: strInputWarning, state: boolShowLabelError
        ? 'error'
        : boolShowLabelWarning
          ? 'warning'
          : 'normal', disabled: boolDIsableInputLabel, onFwBlur: (el) => this.labelBlurHandler(el, level), onFwInput: (el) => this.labelInputHandler(el, level) }));
  }
  renderFieldContent(objProductConfig, isDefaultNonCustomField, boolEditAllowed) {
    const strBaseClassName = 'fw-field-editor';
    const renderLabelAndName = [];
    const renderFields = [];
    const objFieldBuilder = this.fieldBuilderOptions;
    const boolDisableDropdowns = isDefaultNonCustomField || !boolEditAllowed;
    const arrCheckboxes = formBuilderUtils.hasCustomProperty(objFieldBuilder, 'checkboxes')
      ? objFieldBuilder.checkboxes
      : null;
    const checkboxItems = arrCheckboxes && arrCheckboxes.length > 0
      ? arrCheckboxes.map((dataItem) => this.renderCheckboxField(dataItem))
      : null;
    const levels = this.dependentLevels;
    /** Recursive content */
    const recurseFieldContent = (data, pChoices, pLevel) => {
      var _a;
      // Renders Label input and Internal name input
      const fieldLabelAndName = this.renderLabelAndInternalName(objProductConfig, isDefaultNonCustomField, boolEditAllowed, data);
      // Adds into renderLabelAndName array
      renderLabelAndName.push(fieldLabelAndName);
      const { ids, choices, pId } = formBuilderUtils.getChildChoices(data, pChoices, pLevel, levels);
      if (!this.showDependentFieldTextbox) {
        const fieldDropdown = this.renderDropdown(boolDisableDropdowns, data, ids, pId);
        renderFields.push(fieldDropdown);
      }
      if (((_a = data === null || data === void 0 ? void 0 : data.fields) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        const field = data.fields[0];
        const level = data.field_options.level;
        recurseFieldContent(field, choices, level);
      }
    };
    recurseFieldContent(this.fieldBuilderOptions.fields[0], [], null);
    return (index.h("div", { class: `${strBaseClassName}-content` }, index.h("div", { class: `${strBaseClassName}-content-required` }, index.h("div", { class: `${strBaseClassName}-content-checkboxes` }, index.h("label", { class: `${strBaseClassName}-content-checkboxes-header-label` }, formBuilderUtils.i18nText('behaviour')), checkboxItems), index.h("div", null, index.h("label", { class: `${strBaseClassName}-content-label` }, formBuilderUtils.i18nText('labels')), index.h("div", { class: 'flex flex-space-between' }, renderLabelAndName.map((field) => field))), index.h("div", null, index.h("label", { class: `${strBaseClassName}-content-label` }, formBuilderUtils.i18nText('dropdownChoices')), this.showDependentFieldTextbox ? (index.h("div", null, index.h("label", { class: `${strBaseClassName}-content-dependent-label` }, formBuilderUtils.i18nText('dependentDropdownMessage')), index.h("span", { class: `${strBaseClassName}-textbox` }, index.h("textarea", { rows: 8, value: this.textboxDependentValue, onKeyDown: this.handleDependentField })), index.h("fw-button", { size: 'small', color: 'secondary', onFwClick: this.switchToDropdownView }, formBuilderUtils.i18nText('addChoices')))) : (index.h("div", { class: 'flex flex-space-between' }, renderFields.map((field) => field)))))));
  }
  renderLabelAndInternalName(objProductConfig, isDefaultNonCustomField, boolEditAllowed, fieldBuilderOptions) {
    const objMaxLimits = formBuilderUtils.getMaximumLimitsConfig(this.productName);
    const boolSupportInternalName = objProductConfig.editInternalName;
    const strBaseClassName = 'fw-field-editor';
    return (index.h("div", { class: `${strBaseClassName}-content-label-interalName` }, this.renderLabel(objMaxLimits, isDefaultNonCustomField, boolEditAllowed, fieldBuilderOptions), boolSupportInternalName &&
      this.renderInternalName(objProductConfig, objMaxLimits, isDefaultNonCustomField, boolEditAllowed, fieldBuilderOptions)));
  }
  renderContent(objProductConfig, isDefaultNonCustomField, boolEditAllowed) {
    if (!this.expanded) {
      return null;
    }
    const objFormValue = this.dataProvider;
    const objMaxLimits = formBuilderUtils.getMaximumLimitsConfig(this.productName);
    const boolSupportInternalName = objProductConfig.editInternalName;
    const strBaseClassName = 'fw-field-editor';
    const objFieldBuilder = this.fieldBuilderOptions;
    /** Adding extra check for status type */
    const isStatusType = formBuilderUtils.checkIfCustomToggleField(this.productName, objFormValue.name);
    const boolDisableDropdowns = isDefaultNonCustomField || !boolEditAllowed;
    const strFieldType = formBuilderUtils.hasCustomProperty(objFieldBuilder, 'type')
      ? objFieldBuilder.type
      : '';
    const isDropdownType = strFieldType === 'DROPDOWN' || strFieldType === 'MULTI_SELECT'
      ? true
      : false;
    let boolIgnoreDropdownChoices = false;
    if (formBuilderUtils.hasCustomProperty(objProductConfig, 'dropdownFieldWithoutChoicesKey') &&
      objProductConfig.dropdownFieldWithoutChoicesKey !== '') {
      const ignoreChoicesValue = formBuilderUtils.getNestedKeyValueFromObject(objFormValue, objProductConfig.dropdownFieldWithoutChoicesKey);
      if (ignoreChoicesValue || ignoreChoicesValue === 'true') {
        boolIgnoreDropdownChoices = true;
      }
    }
    const arrCheckboxes = formBuilderUtils.hasCustomProperty(objFieldBuilder, 'checkboxes')
      ? objFieldBuilder.checkboxes
      : null;
    const checkboxItems = arrCheckboxes && arrCheckboxes.length > 0
      ? arrCheckboxes.map((dataItem) => this.renderCheckboxField(dataItem))
      : null;
    const isLookupType = strFieldType === 'RELATIONSHIP';
    const elementRelationship = isLookupType
      ? this.renderLookup(boolDisableDropdowns)
      : null;
    const elementStatusToggle = isStatusType
      ? this.renderStatusToggle(objFormValue)
      : null;
    const elementDropdown = isDropdownType && !boolIgnoreDropdownChoices
      ? this.renderDropdown(boolDisableDropdowns)
      : null;
    return (index.h("div", { class: `${strBaseClassName}-content` }, index.h("div", { class: `${strBaseClassName}-content-required` }, index.h("div", { class: `${strBaseClassName}-content-checkboxes` }, index.h("label", { class: `${strBaseClassName}-content-checkboxes-header-label` }, formBuilderUtils.i18nText('behaviour')), checkboxItems), isLookupType && (index.h("div", { class: `${strBaseClassName}-content-lookup` }, elementRelationship)), this.renderLabel(objMaxLimits, isDefaultNonCustomField, boolEditAllowed, this.fieldBuilderOptions), boolSupportInternalName &&
      this.renderInternalName(objProductConfig, objMaxLimits, isDefaultNonCustomField, boolEditAllowed, this.fieldBuilderOptions), elementStatusToggle, isDropdownType && (index.h("div", { class: `${strBaseClassName}-content-dropdown` }, elementDropdown)))));
  }
  render() {
    if (!this.dataProvider || !this.fieldBuilderOptions) {
      return null;
    }
    const objProductPreset = formBuilderUtils.formMapper[this.productName];
    const objProductLabels = objProductPreset.labels;
    const objProductConfig = objProductPreset.config;
    const objFieldBuilder = this.fieldBuilderOptions;
    const objFormValue = this.dataProvider;
    const boolNewField = this.isNewField;
    const strFieldType = objFieldBuilder.type;
    const boolEnableSaveBtn = (boolNewField || this.isValuesChanged) && !this.showDependentFieldTextbox
      ? true
      : false;
    const boolShowFieldValidationError = this.formErrorMessage && this.formErrorMessage !== '' ? true : false;
    const boolRequiredField = !boolNewField && formBuilderUtils.hasCustomProperty(objFieldBuilder, 'required')
      ? objFieldBuilder.required
      : false;
    const isDefaultNonCustomField = (objProductConfig === null || objProductConfig === void 0 ? void 0 : objProductConfig.showDefaultTag) &&
      (objProductConfig === null || objProductConfig === void 0 ? void 0 : objProductConfig.defaultTagKey) &&
      objProductConfig.defaultTagKey !== '' &&
      formBuilderUtils.hasCustomProperty(objFormValue, objProductConfig.defaultTagKey) &&
      !objFormValue[objProductConfig.defaultTagKey];
    const boolEditAllowed = this.isNewField || formBuilderUtils.hasPermission(this.role, this.permission, 'EDIT');
    const boolDeleteAllowed = formBuilderUtils.hasPermission(this.role, this.permission, 'DELETE');
    const boolDisableDelete = !boolDeleteAllowed;
    const boolShowDeleteModalInlineMsg = objProductConfig === null || objProductConfig === void 0 ? void 0 : objProductConfig.showDeleteModalInlineMessage;
    const strDeleteModalTitleText = (objProductConfig === null || objProductConfig === void 0 ? void 0 : objProductConfig.showFieldLabelInDeleteModalTitle)
      ? formBuilderUtils.i18nText(objProductLabels.deleteFieldModalHeader, {
        label: objFormValue === null || objFormValue === void 0 ? void 0 : objFormValue.label,
      })
      : formBuilderUtils.i18nText(objProductLabels.deleteFieldModalHeader);
    const strDeleteModalMessage = formBuilderUtils.i18nText(objProductLabels.deleteFieldModalMessage);
    const strDeleteModalInlineMessage = boolShowDeleteModalInlineMsg
      ? formBuilderUtils.i18nText('deleteFieldInlineMessage')
      : '';
    let strHeaderLabel = '';
    if (boolNewField) {
      const dbFieldTypeData = objProductPreset === null || objProductPreset === void 0 ? void 0 : objProductPreset.fieldProps[strFieldType];
      const strFieldTypeHeaderLabel = formBuilderUtils.hasCustomProperty(dbFieldTypeData, 'display_label')
        ? dbFieldTypeData.display_label
        : '';
      strHeaderLabel = this.isPrimaryField
        ? formBuilderUtils.i18nText('primaryFieldHeader')
        : strFieldTypeHeaderLabel && strFieldTypeHeaderLabel !== ''
          ? formBuilderUtils.i18nText(strFieldTypeHeaderLabel)
          : '';
    }
    else {
      strHeaderLabel = objFormValue.label;
    }
    const boolShowCancelBtn = !this.isPrimaryField || (this.isPrimaryField && !boolNewField)
      ? true
      : false;
    const strSaveBtnLabel = boolNewField
      ? formBuilderUtils.i18nText('addFieldBtn')
      : formBuilderUtils.i18nText('saveFieldBtn');
    const arrCheckboxes = formBuilderUtils.hasCustomProperty(objFieldBuilder, 'checkboxes')
      ? objFieldBuilder.checkboxes
      : null;
    let fwLabelItems = !this.expanded && arrCheckboxes && arrCheckboxes.length > 0
      ? arrCheckboxes.map((dataItem) => this.renderFwLabel(dataItem))
      : null;
    if (!this.expanded) {
      if (this.isPrimaryField) {
        const elPrimaryTag = this.renderFwLabel({
          key: 'primary',
          selected: true,
          tag: 'primaryFieldTag',
        });
        if (!fwLabelItems) {
          fwLabelItems = [elPrimaryTag];
        }
        else {
          fwLabelItems.unshift(elPrimaryTag);
        }
      }
      else if (strFieldType === 'RELATIONSHIP') {
        const boolUniqueField = formBuilderUtils.hasCustomProperty(objFieldBuilder, 'unique')
          ? objFieldBuilder.unique
          : false;
        if (boolUniqueField) {
          const elLookupUniqueTag = this.renderFwLabel({
            key: 'unique',
            selected: true,
            tag: 'lookupUniqueTag',
          });
          if (!fwLabelItems) {
            fwLabelItems = [elLookupUniqueTag];
          }
          else {
            fwLabelItems.push(elLookupUniqueTag);
          }
        }
      }
      else if (isDefaultNonCustomField) {
        const elDefaultCustomTag = this.renderFwLabel({
          key: 'customDefault',
          selected: true,
          tag: objProductConfig.defaultTagLabel,
        });
        if (!fwLabelItems) {
          fwLabelItems = [elDefaultCustomTag];
        }
        else {
          fwLabelItems.push(elDefaultCustomTag);
        }
      }
    }
    const strBaseClassName = 'fw-field-editor';
    let strComponentClassName = strBaseClassName;
    if (boolRequiredField) {
      strComponentClassName += ` ${strBaseClassName}--required`;
    }
    if (this.isPrimaryField) {
      strComponentClassName += ` ${strBaseClassName}--primary`;
    }
    if (this.expanded) {
      strComponentClassName += ` ${strBaseClassName}--expanded`;
    }
    else if (this.disabled) {
      strComponentClassName += ` ${strBaseClassName}--disabled`;
    }
    else if (this.isDeleting) {
      strComponentClassName += ` ${strBaseClassName}--deleting`;
    }
    else if (this.disabledSort) {
      strComponentClassName += ` ${strBaseClassName}--disabled-sort`;
    }
    let strFooterClassName = `${strBaseClassName}-footer`;
    if (boolShowFieldValidationError) {
      strFooterClassName += ` ${strBaseClassName}-footer-with-error`;
    }
    const fieldIcon = this.isDependentField
      ? formBuilderPreset.presetSchema.fieldTypes.DEPENDENT_FIELD.icon
      : objFieldBuilder.icon;
    const contentElements = this.isDependentField
      ? this.renderFieldContent(objProductConfig, isDefaultNonCustomField, boolEditAllowed)
      : this.renderContent(objProductConfig, isDefaultNonCustomField, boolEditAllowed);
    return (index.h(index.Host, { tabIndex: '-1' }, index.h("div", { class: strComponentClassName, ref: (el) => (this.divFieldBase = el), onDragEnd: this.stopParentDragging, onDrop: this.stopParentDragging }, index.h("div", { class: `${strBaseClassName}-header` }, index.h("div", { role: 'none', class: `${strBaseClassName}-drag-container`, onMouseDown: this.startParentDragging }, index.h("fw-icon", { size: 14, name: 'drag', color: '#CFD7DF' })), index.h("div", { class: `${strBaseClassName}-header-content`, onClick: this.expandHandler }, index.h("span", { class: `${strBaseClassName}-icon-container`, style: { backgroundColor: fieldIcon.bg_color } }, index.h("fw-icon", { size: 14, name: fieldIcon.name, color: '#475867' })), index.h("label", { class: `${strBaseClassName}-label` }, strHeaderLabel), !this.expanded && (index.h("div", { class: `${strBaseClassName}-key-fw-labels` }, fwLabelItems))), !this.expanded &&
      !this.isPrimaryField &&
      !this.isDeleting &&
      !isDefaultNonCustomField && (index.h("fw-button", { part: 'delete-field-btn', size: 'icon', color: 'secondary', disabled: boolDisableDelete, class: `${strBaseClassName}-delete-button`, onFwClick: this.deleteFieldClickHandler }, index.h("fw-icon", { name: 'delete' }))), !this.expanded && !this.isPrimaryField && this.isDeleting && (index.h("fw-spinner", { class: `${strBaseClassName}-deleting-state`, size: 'medium', color: '#d72d30' }))), this.expanded && (index.h("div", { class: `${strBaseClassName}-body` }, contentElements, index.h("div", { class: strFooterClassName }, boolShowFieldValidationError && (index.h("span", { class: `${strBaseClassName}-footer-field-error-container` }, index.h("fw-icon", { size: 12, name: 'warning', color: '#d72d30' }), index.h("label", { class: `${strBaseClassName}-footer-field-error-msg` }, this.formErrorMessage))), index.h("span", { class: `${strBaseClassName}-footer-buttons-container` }, boolShowCancelBtn && (index.h("fw-button", { id: 'clearFieldBtn', color: 'secondary', onFwClick: this.cancelFieldHandler }, formBuilderUtils.i18nText('cancelFieldBtn'))), index.h("fw-button", { id: 'submitFieldBtn', color: 'primary', loading: this.isLoading, disabled: !boolEnableSaveBtn, onFwClick: this.addFieldHandler }, strSaveBtnLabel)))))), index.h("fw-modal", { ref: (el) => (this.modalConfirmDelete = el), icon: 'delete', submitColor: 'danger', hasCloseIconButton: false, titleText: strDeleteModalTitleText, submitText: formBuilderUtils.i18nText('deleteFieldSubmit'), onFwSubmit: this.confirmDeleteFieldHandler }, index.h("span", { class: 'fw-field-editor-delete-modal-content' }, boolShowDeleteModalInlineMsg && (index.h("fw-inline-message", { open: true, type: 'warning' }, strDeleteModalInlineMessage)), strDeleteModalMessage))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "enableUnique": ["watchEnableUniqueChangeHandler"],
    "enableFilterable": ["watchEnableFilterableChangeHandler"],
    "dataProvider": ["watchDataproviderChangeHandler"]
  }; }
};
FieldEditor.style = fieldEditorCss;

const fieldTypeMenuItemCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}@media screen and (prefers-reduced-motion: reduce){.field-type-menu-item-add-button-container{-webkit-transition:none;transition:none}}.field-type-menu-item{width:100%;height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative}.field-type-menu-item .field-type-menu-item-draggable-container{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:8px;outline:0;background-color:#fff;border:1px solid #ebeff3;-webkit-box-shadow:0px 2px 4px rgba(18, 52, 77, 0.06);box-shadow:0px 2px 4px rgba(18, 52, 77, 0.06);border-radius:4px;cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.field-type-menu-item .field-type-menu-item-icon-container{width:24px;height:24px;-webkit-margin-end:8px;margin-inline-end:8px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:4px}.field-type-menu-item .field-type-menu-item-label{max-width:calc(100% - 24px - 24px - 8px);width:auto;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#12344d;font-size:14px;font-weight:400;word-break:break-word;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.field-type-menu-item .field-type-menu-item-add-button-container{width:24px;height:24px;position:absolute;inset-inline-end:4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;cursor:pointer;opacity:0}.field-type-menu-item:hover .field-type-menu-item-add-button-container{opacity:1}.field-type-menu-item:focus .field-type-menu-item-add-button-container{opacity:1}.field-type-menu-item--dragging{border-radius:50%}.field-type-menu-item--dragging .field-type-menu-item-add-button-container{opacity:0}.field-type-menu-item--disabled{cursor:not-allowed;opacity:0.6}.field-type-menu-item--disabled .field-type-menu-item-draggable-container{cursor:not-allowed;pointer-events:none}.field-type-menu-item--disabled .field-type-menu-item-add-button-container{cursor:not-allowed;pointer-events:none}.field-type-menu-item--disabled:hover .field-type-menu-item-add-button-container,.field-type-menu-item--disabled:focus .field-type-menu-item-add-button-container{opacity:0}";

const FieldTypeMenuItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwAddClick = index.createEvent(this, "fwAddClick", 7);
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * index attached inside the parent group component
     */
    this.index = -1;
    /**
     * data source used to set and edit the field values
     */
    this.dataProvider = null;
    /**
     * field type attached to the item which will be broadcasted for adding the field type.
     */
    this.value = '';
    /**
     * Label displayed as header in the card.
     */
    this.label = '';
    /**
     * tooltip to be shown on hover
     */
    this.tooltip = '';
    /**
     * backgroundcolor for the icon
     */
    this.iconBackgroundColor = '#ebeff3';
    /**
     * set the icon path to be used
     */
    this.iconName = '';
    /**
     * Name of the component, saved as part of the form data.
     */
    this.name = '';
    this.addButtonClickHandler = () => {
      this.fwAddClick.emit({
        value: this.value,
        data: this.dataProvider,
        index: this.index,
      });
    };
  }
  render() {
    const strBaseClassName = 'field-type-menu-item';
    let strComponentClassName = strBaseClassName;
    if (this.disabled) {
      strComponentClassName += ` ${strBaseClassName}--disabled`;
    }
    return (index.h(index.Host, { tabIndex: '-1' }, index.h("fw-tooltip", { placement: 'right', trigger: 'hover', content: this.tooltip }, index.h("div", { class: strComponentClassName }, index.h("div", { class: `${strBaseClassName}-draggable-container`, draggable: true }, index.h("span", { class: `${strBaseClassName}-icon-container`, style: { backgroundColor: this.iconBackgroundColor } }, index.h("fw-icon", { size: 14, name: this.iconName, color: '#475867' })), index.h("label", { class: `${strBaseClassName}-label` }, formBuilderUtils.i18nText(this.label))), index.h("span", { class: `${strBaseClassName}-add-button-container`, onClick: this.addButtonClickHandler }, index.h("fw-icon", { size: 10, name: 'plus', color: '#12344D' }))))));
  }
  get host() { return index.getElement(this); }
};
FieldTypeMenuItem.style = fieldTypeMenuItemCss;

const widgetCustomizeFieldItemCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;width:100%;height:auto}.widget-customize-field-item{width:100%;height:100%;padding-inline:12px;padding-block:8px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:#fff;border:1px solid #cfd7df;border-radius:4px}.widget-customize-field-item .widget-customize-field-item-icon-container{width:24px;height:24px;-webkit-margin-end:8px;margin-inline-end:8px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:4px}.widget-customize-field-item .widget-customize-field-item-checkbox{width:100%;max-width:100%;word-wrap:break-word;word-break:break-word;white-space:normal}.widget-customize-field-item--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:not-allowed}";

const WidgetCustomizeFieldItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwCheck = index.createEvent(this, "fwCheck", 7);
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * selected property of the component
     */
    this.selected = false;
    /**
     * index attached inside the parent group component
     */
    this.index = -1;
    /**
     * data source used to set and edit the field values
     */
    this.dataProvider = null;
    /**
     * Label displayed as header in the card.
     */
    this.label = '';
    /**
     * defines if the field is primary
     */
    this.isPrimaryField = false;
    /**
     * Name of the component, saved as part of the form data.
     */
    this.name = '';
    this.checkboxSelectionChangeHandler = (event) => {
      var _a, _b;
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.selected = (_b = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.checked;
      this.fwCheck.emit({
        checked: this.selected,
        data: this.dataProvider,
        index: this.index,
      });
    };
  }
  render() {
    if (!this.dataProvider) {
      return null;
    }
    const strBaseClassName = 'widget-customize-field-item';
    let strComponentClassName = strBaseClassName;
    if (this.disabled) {
      strComponentClassName += ` ${strBaseClassName}--disabled`;
    }
    return (index.h(index.Host, { tabIndex: '-1' }, index.h("div", { class: strComponentClassName }, index.h("fw-checkbox", { class: `${strBaseClassName}-checkbox`, checked: this.selected, disabled: this.disabled, value: this.dataProvider.name, onFwChange: this.checkboxSelectionChangeHandler }, this.label))));
  }
  get host() { return index.getElement(this); }
};
WidgetCustomizeFieldItem.style = widgetCustomizeFieldItemCss;

exports.fw_field_editor = FieldEditor;
exports.fw_field_type_menu_item = FieldTypeMenuItem;
exports.fw_widget_customize_field_item = WidgetCustomizeFieldItem;
