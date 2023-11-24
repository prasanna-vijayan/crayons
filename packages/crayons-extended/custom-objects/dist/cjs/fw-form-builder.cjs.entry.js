'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62345b50.js');
const formBuilderUtils = require('./form-builder-utils-b1c33470.js');
const formBuilderPreset = require('./form-builder-preset-42baf2f8.js');
const utils = require('./utils-803932bf.js');
require('./Translation-95805542.js');
require('./index-e99fea28.js');

const formBuilderCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.form-builder{width:100%;height:100%;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;background-color:#fff;overflow:hidden;position:relative;--fw-warning-color:#f48928}.form-builder .form-builder-left-panel{height:100%;width:30%;min-width:200px;max-width:350px;padding-inline:20px;padding-block:24px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto;background:#f5f7f9;-webkit-border-end:1px solid #ebeff3;border-inline-end:1px solid #ebeff3}.form-builder .form-builder-left-panel .form-builder-left-panel-header{width:100%;height:auto;margin:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.form-builder .form-builder-left-panel .form-builder-left-panel-product-header-label{width:100%;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#12344d;font-size:20px;font-weight:700;line-height:28px;height:28px}.form-builder .form-builder-left-panel .form-builder-left-panel-header-label{width:100%;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#12344d;font-size:18px;font-weight:700;line-height:28px;height:28px}.form-builder .form-builder-left-panel .form-builder-left-panel-header-desc{width:100%;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#475867;font-size:12px;font-weight:400;line-height:18px}.form-builder .form-builder-left-panel .form-builder-left-panel-sub-header-description{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-padding-after:0;padding-block-end:0;padding-inline:2px;-webkit-padding-before:2px;padding-block-start:2px;-webkit-margin-after:8px;margin-block-end:8px}.form-builder .form-builder-left-panel .form-builder-left-panel-sub-header-description .form-builder-left-panel-sub-header-description-label{width:100%;-webkit-margin-after:0;margin-block-end:0;margin-inline:0;-webkit-margin-before:-2px;margin-block-start:-2px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#475867;font-size:14px;font-weight:400;line-height:18px}.form-builder .form-builder-left-panel .form-builder-left-panel-sub-header-description .form-builder-left-panel-sub-header-description-link-anchor{-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-margin-before:-2px;margin-block-start:-2px;text-align:start;display:inline-block;font-size:14px;color:#2c5cc5;font-weight:400;text-decoration:none;word-wrap:break-word;word-break:break-word;white-space:normal}.form-builder .form-builder-left-panel .form-builder-left-panel-header-desc-wo-header{width:100%;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-margin-before:16px;margin-block-start:16px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#12344d;font-size:16px;font-weight:600;line-height:24px;height:24px}.form-builder .form-builder-left-panel .form-builder-left-panel-list-disabled-div{width:calc(100% + 40px);height:calc(100% + 40px);padding-inline:20px;padding-block:40px;position:absolute;inset-inline-start:-20px;inset-block-end:-4px;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end}:host(:not([dir=\"rtl\"])) .form-builder .form-builder-left-panel .form-builder-left-panel-list-disabled-div,:host([dir=\"ltr\"]) .form-builder .form-builder-left-panel .form-builder-left-panel-list-disabled-div{background-image:-webkit-gradient(linear, left top, left bottom, color-stop(35%, rgba(245, 247, 249, 0.6)), color-stop(40%, rgba(245, 247, 249, 0.93)), to(#f5f7f9));background-image:linear-gradient(180deg, rgba(245, 247, 249, 0.6) 35%, rgba(245, 247, 249, 0.93) 40% 60%, #f5f7f9 100%)}:host([dir=\"rtl\"]) .form-builder .form-builder-left-panel .form-builder-left-panel-list-disabled-div{background-image:-webkit-gradient(linear, left top, left bottom, color-stop(35%, rgba(245, 247, 249, 0.6)), color-stop(40%, rgba(245, 247, 249, 0.93)), to(#f5f7f9));background-image:linear-gradient(-180deg, rgba(245, 247, 249, 0.6) 35%, rgba(245, 247, 249, 0.93) 40% 60%, #f5f7f9 100%)}.form-builder .form-builder-left-panel .form-builder-left-panel-list-disabled-div .form-builder-left-panel-list-disabled-header{width:100%;-webkit-margin-after:0;margin-block-end:0;margin-inline:0;-webkit-margin-before:24px;margin-block-start:24px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#12344d;font-size:16px;font-weight:600;line-height:24px}.form-builder .form-builder-left-panel .form-builder-left-panel-list-disabled-div .form-builder-left-panel-list-disabled-message{width:100%;-webkit-margin-after:0;margin-block-end:0;margin-inline:0;-webkit-margin-before:4px;margin-block-start:4px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#7b8e9f;font-size:14px;font-weight:400;line-height:20px}.form-builder .form-builder-left-panel .form-builder-left-panel-list-disabled-div .form-builder-left-panel-list-disabled-button{-webkit-margin-before:20px;margin-block-start:20px;width:-webkit-max-content;width:-moz-max-content;width:max-content}.form-builder .form-builder-left-panel .form-builder-left-panel-list-container{width:100%;height:auto;-webkit-margin-before:16px;margin-block-start:16px;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.form-builder .form-builder-left-panel .form-builder-left-panel-list-container .form-builder-left-panel-field-types-list{width:100%;height:auto;gap:10px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.form-builder .form-builder-left-panel .form-builder-left-panel-list-container .form-builder-left-panel-field-types-list .field-type-menu-description{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-padding-after:0;padding-block-end:0;padding-inline:2px;-webkit-padding-before:2px;padding-block-start:2px}.form-builder .form-builder-left-panel .form-builder-left-panel-list-container .form-builder-left-panel-field-types-list .field-type-menu-description .field-type-menu-description-label{width:100%;-webkit-margin-after:0;margin-block-end:0;margin-inline:0;-webkit-margin-before:-2px;margin-block-start:-2px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#475867;font-size:12px;font-weight:400}.form-builder .form-builder-left-panel .form-builder-left-panel-list-container .form-builder-left-panel-field-types-list .field-type-menu-description .field-type-menu-description-link-anchor{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-margin-before:-2px;margin-block-start:-2px;text-align:start;display:inline-block;font-size:12px;color:#2c5cc5;font-weight:400;text-decoration:none;word-wrap:break-word;word-break:break-word;white-space:normal}.form-builder .form-builder-left-panel .form-builder-left-panel-list-container .form-builder-left-panel-field-types-list .field-type-menu-description .field-type-menu-help-fw-icon{-webkit-margin-start:4px;margin-inline-start:4px;vertical-align:middle}.form-builder .form-builder-left-panel .form-builder-left-panel-list-container .form-builder-left-panel-field-types-list .field-type-menu-item-bottom-border{width:100%;height:1px;-webkit-margin-before:2px;margin-block-start:2px;border-width:0;background-color:#cfd7df}.form-builder .form-builder-left-panel--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:not-allowed;opacity:0.6}.form-builder .form-builder-right-panel{width:70%;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;background:#fff}.form-builder .form-builder-right-panel .form-builder-right-panel-header{width:100%;height:64px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-webkit-margin-after:20px;margin-block-end:20px;-webkit-padding-start:32px;padding-inline-start:32px;-webkit-padding-end:32px;padding-inline-end:32px}.form-builder .form-builder-right-panel .form-builder-right-panel-header .form-builder-right-panel-header-content{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;max-width:990px}.form-builder .form-builder-right-panel .form-builder-right-panel-header .form-builder-right-panel-header-content .form-builder-right-panel-header-label{width:auto;margin:0;-webkit-margin-start:2px;margin-inline-start:2px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#12344d;font-size:16px;font-weight:700;line-height:28px;height:28px}.form-builder .form-builder-right-panel .form-builder-right-panel-header .form-builder-right-panel-header-content .form-builder-right-panel-header-right-filter-by-div{width:40%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:4px}.form-builder .form-builder-right-panel .form-builder-right-panel-header .form-builder-right-panel-header-content .form-builder-right-panel-header-right-filter-by-div .form-builder-right-panel-header-filter-label{width:auto;margin:0;-webkit-margin-start:2px;margin-inline-start:2px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#92a2b1;font-size:14px;font-weight:400;line-height:20px;height:20px}.form-builder .form-builder-right-panel .form-builder-right-panel-header .form-builder-right-panel-header-content .form-builder-right-panel-header-right-filter-by-div .form-builder-filter-by-field-type-select{width:230px}.form-builder .form-builder-right-panel .form-builder-right-panel-header .form-builder-right-panel-header-content .form-builder-right-panel-header-right-div{width:80%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:20px}.form-builder .form-builder-right-panel .form-builder-right-panel-header .form-builder-right-panel-header-content .form-builder-right-panel-header-right-div .form-builder-right-panel-header-search-input{max-width:344px;width:calc(100% - 250px)}.form-builder .form-builder-right-panel .form-builder-right-panel-header--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:not-allowed;opacity:0.6}.form-builder .form-builder-right-panel .form-builder-right-panel-list-container{width:100%;height:calc(100% - 64px - 20px);padding-block:4px 32px;padding-inline:32px 32px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:auto}.form-builder .form-builder-right-panel .form-builder-right-panel-list-container .form-builder-right-panel-empty-list-div{width:100%;height:100%;-webkit-padding-before:60px;padding-block-start:60px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}.form-builder .form-builder-right-panel .form-builder-right-panel-list-container .form-builder-right-panel-empty-list-div .form-builder-right-panel-empty-list-content{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column}.form-builder .form-builder-right-panel .form-builder-right-panel-list-container .form-builder-right-panel-empty-list-div .form-builder-right-panel-empty-list-content .form-builder-right-panel-empty-list-image-span{width:86px;height:86px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:#eff2fd;border-radius:50%}.form-builder .form-builder-right-panel .form-builder-right-panel-list-container .form-builder-right-panel-empty-list-div .form-builder-right-panel-empty-list-content .form-builder-right-panel-empty-list-image-span .form-builder-right-panel-empty-list-image{max-width:85%;max-height:85%;-o-object-fit:contain;object-fit:contain;pointer-events:none}.form-builder .form-builder-right-panel .form-builder-right-panel-list-container .form-builder-right-panel-empty-list-div .form-builder-right-panel-empty-list-content .form-builder-right-panel-empty-search-message{width:100%;margin-inline:0;margin-block:16px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center;color:#12344d;font-size:18px;font-weight:700;line-height:24px}.form-builder .form-builder-right-panel .form-builder-right-panel-list-container .form-builder-right-panel-field-editor-list{width:100%;min-height:100%;height:auto;gap:10px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.form-builder .form-builder-right-panel .form-builder-right-panel-list-container--reordering .form-builder-right-panel-field-editor-list fw-field-editor::part(delete-field-btn){-webkit-transition:none !important;transition:none !important;opacity:0 !important}.cusomize-widget-list{width:100%;min-height:100%;height:auto;gap:10px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox !important;display:flex !important;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.cusomize-widget-header{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.cusomize-widget-header .cusomize-widget-title{font-size:18px;font-weight:600;line-height:24px}.cusomize-widget-header .cusomize-widget-description{font-size:14px;font-weight:400;color:#475867;line-height:20px;padding-inline:0px;padding-block:6px}.cusomize-widget-modal-footer{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:12px}";

const FormBuilder = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwSaveField = index.createEvent(this, "fwSaveField", 7);
    this.fwDeleteField = index.createEvent(this, "fwDeleteField", 7);
    this.fwComposeNewField = index.createEvent(this, "fwComposeNewField", 7);
    this.fwRepositionField = index.createEvent(this, "fwRepositionField", 7);
    this.fwExpandField = index.createEvent(this, "fwExpandField", 7);
    this.fwExplorePlan = index.createEvent(this, "fwExplorePlan", 7);
    this.fwSearchField = index.createEvent(this, "fwSearchField", 7);
    this.fwSaveWidgetFields = index.createEvent(this, "fwSaveWidgetFields", 7);
    this.isWidgetValuesChanged = false;
    this.filterByFieldTypeOptions = null;
    this.FILTER_ALL_FIELDS = 'ALL_FIELDS';
    /**
     * The db type used to determine the json to be used for CUSTOM_OBJECTS or CONVERSATION_PROPERTIES
     */
    this.productName = 'CUSTOM_OBJECTS';
    /**
     * Show explore plans button and disable features for free-plan users
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
     * Prop to store the expanded field index
     */
    this.expandedFieldIndex = -1;
    /**
     * variable to store form values
     */
    this.formValues = null;
    /**
     * object to store the lookup target entities
     */
    this.lookupTargetObjects = null;
    /**
     * flag to show lookupField for CONVERSATION_PROPERTIES or not
     */
    this.showLookupField = true;
    /**
     * flag to show dependentField for CONVERSATION_PROPERTIES or not
     */
    this.showDependentField = true;
    /**
     * variable to store customize widget fields
     */
    this.customizeWidgetFields = null;
    /**
     * flag to notify if an api call is in progress
     */
    this.isLoading = false;
    /**
     * flag to notify if an api call to save the widget is completed
     */
    this.isSavingCustomizeWidget = false;
    /**
     * Show explore plans and disable features for user having free-plan
     */
    this.userPlan = 'admin';
    /**
     * svg image to be shown for empty record
     */
    this.emptySearchImage = null;
    /**
     * State to store the formValues as a state to transfer the field types
     */
    this.localFormValues = null;
    /**
     * State to store the searched widget elements
     */
    this.arrWidgetFields = null;
    /**
     * State to store the searched field elements
     */
    this.arrSearchedFields = null;
    /**
     * State to store the filtered field elements
     */
    this.arrFilteredByTypeFields = null;
    /**
     * State to check if the form is in searching mode
     */
    this.searching = false;
    /**
     * State to show/hide the customize widget modal contents
     */
    this.showCustomizeWidget = false;
    /**
     * variable to store the count of all the field types
     */
    this.fieldTypesCount = null;
    /**
     * Flag to enable / disable the all the field type based on the limits
     */
    this.enableFieldType = true;
    /**
     * Flag to enable / disable the the filterable option
     */
    this.enableFilterable = true;
    /**
     * Flag to enable / disable the the unique option
     */
    this.enableUnique = true;
    /**
     * selected filter option from the select component for filter by field type
     */
    this.selectedFieldTypeFilterOption = this.FILTER_ALL_FIELDS;
    /**
     * State to re-render the drag container children after re render
     */
    this.fieldRerenderCount = 0;
    this.getInterpolatedMaxLimitLabel = (strProperty) => {
      var _a;
      if (strProperty && strProperty !== '') {
        try {
          const objMaxLimit = (_a = formBuilderUtils.getMaximumLimitsConfig(this.productName)) === null || _a === void 0 ? void 0 : _a[strProperty];
          if (objMaxLimit) {
            return formBuilderUtils.i18nText(objMaxLimit.message, { count: objMaxLimit.count });
          }
        }
        catch (error) {
          return '';
        }
      }
      return '';
    };
    // function to get the default field type schema based on the field type
    this.getDefaultFieldTypeSchema = (fieldType) => {
      if (formBuilderPreset.presetSchema) {
        try {
          const objDefaultField = formBuilderPreset.presetSchema.fieldTypes[fieldType];
          if (objDefaultField) {
            const objNewField = formBuilderUtils.deepCloneObject(objDefaultField);
            objNewField.checkboxes = formBuilderUtils.getFieldTypeCheckboxes(this.productName, fieldType);
            return objNewField;
          }
          else {
            console.log(`${fieldType} - field type is not supported`);
          }
        }
        catch (error) {
          console.log(`${fieldType} - field type is not supported`);
        }
      }
      return null;
    };
    this.removeFieldReorderClass = () => {
      try {
        if (this.fieldEditorPanel) {
          this.fieldEditorPanel.classList.remove('form-builder-right-panel-list-container--reordering');
        }
      }
      catch (error) {
        console.error('Could not remove dragged class');
      }
    };
    this.reorderFieldProgressHandler = (event) => {
      if (this.fieldEditorPanel) {
        const boolDragging = event.detail.value;
        if (boolDragging) {
          this.fieldEditorPanel.classList.add('form-builder-right-panel-list-container--reordering');
        }
        else {
          this.removeFieldReorderClass();
        }
      }
    };
    this.expandFieldHandler = (event) => {
      this.fwExpandField.emit(Object.assign({}, event.detail));
    };
    this.explorePlanHandler = (event) => {
      this.fwExplorePlan.emit(Object.assign({}, event.detail));
    };
    this.saveFieldHandler = (event) => {
      const objSaveField = Object.assign({}, event.detail);
      const objSaveFieldDetails = objSaveField.value;
      objSaveFieldDetails.type = formBuilderUtils.getMappedCustomFieldType(this.productName, objSaveFieldDetails.type);
      this.fwSaveField.emit(objSaveField);
    };
    this.deleteFieldHandler = (event) => {
      this.fwDeleteField.emit(Object.assign({}, event.detail));
    };
    this.composeNewField = (strNewFieldType, objFieldData, intIndex = -1) => {
      var _a;
      const fieldType = strNewFieldType;
      const objNewField = formBuilderUtils.deepCloneObject(formBuilderPreset.presetSchema.fieldTypes[fieldType]);
      const objMaxLimits = formBuilderUtils.getMaximumLimitsConfig(this.productName);
      try {
        const arrFields = (_a = this.localFormValues) === null || _a === void 0 ? void 0 : _a.fields;
        objNewField.checkboxes = formBuilderUtils.getFieldTypeCheckboxes(this.productName, objNewField.type);
        // Condition to deselect the filter checkbox (selected by default), if maximum filters have been applied in the object
        if (objNewField.type !== 'RELATIONSHIP' &&
          objNewField.checkboxes &&
          objNewField.checkboxes.length > 0 &&
          objMaxLimits) {
          const arrFilterableFields = arrFields.filter((objField) => (objField === null || objField === void 0 ? void 0 : objField.filterable) === true || (objField === null || objField === void 0 ? void 0 : objField.filterable) === 'true');
          const numMaxFilterables = objMaxLimits.filterable.count;
          if (arrFilterableFields.length >= numMaxFilterables) {
            const arrCheckBoxes = objNewField.checkboxes;
            const intCheckboxesLength = arrCheckBoxes.length;
            for (let c1 = 0; c1 < intCheckboxesLength; c1++) {
              if (arrCheckBoxes[c1].key === 'filterable') {
                arrCheckBoxes[c1].selected = false;
                break;
              }
            }
          }
        }
      }
      catch (error) {
        console.error(`Error occurred in composeNewField: ${error}`);
      }
      objNewField.type = formBuilderUtils.getMappedCustomFieldType(this.productName, objNewField.type);
      this.fwComposeNewField.emit({
        maximumLimits: formBuilderUtils.getMaximumLimitsConfig(this.productName),
        fieldSchema: objNewField,
        value: Object.assign({}, objFieldData),
        index: intIndex,
      });
    };
    this.fieldTypeDropHandler = (event) => {
      this.removeFieldReorderClass();
      const objDetail = event.detail;
      const elFieldType = objDetail.droppedElement;
      const intDroppedIndex = objDetail.droppedIndex;
      // New field type element dropped inside the container
      if (objDetail.dragFromId !== objDetail.dropToId) {
        const boolCreationAllowed = formBuilderUtils.hasPermission(this.role, this.permission, 'CREATE');
        if (!boolCreationAllowed) {
          return;
        }
        this.composeNewField(elFieldType.dataProvider.type, Object.assign({}, elFieldType.dataProvider), intDroppedIndex);
      }
      else {
        // Reposition inside the fields list
        if (elFieldType.index !== intDroppedIndex) {
          this.fwRepositionField.emit({
            sourceIndex: elFieldType.index,
            targetIndex: intDroppedIndex,
          });
        }
      }
    };
    this.removeResizeObserver = () => {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    };
    this.addNewFieldTypeHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      const boolCreationAllowed = formBuilderUtils.hasPermission(this.role, this.permission, 'CREATE');
      if (!boolCreationAllowed) {
        return;
      }
      // Observer added to scroll to the bottom on new field addition by click of the + button
      this.resizeObserver = new ResizeObserver(() => {
        this.removeResizeObserver();
        setTimeout(() => {
          this.fieldEditorPanel.scrollTop = this.fieldEditorPanel.scrollHeight;
        }, 100);
      });
      this.resizeObserver.observe(this.fieldEditorPanel);
      this.composeNewField(event.detail.value, Object.assign({}, event.detail.data));
    };
    this.initializeSearchDebounce = () => {
      if (!this.debouncedHandleInput) {
        this.debouncedHandleInput = utils.debounce(this.searchChangeHandler, this);
      }
    };
    this.searchChangeHandler = (event) => {
      var _a, _b;
      event.stopImmediatePropagation();
      event.stopPropagation();
      const strInputText = ((_b = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.trim()) || '';
      if (strInputText) {
        const arrFieldElements = this.localFormValues && this.localFormValues.fields
          ? this.localFormValues.fields
          : [];
        if (arrFieldElements && arrFieldElements.length > 0) {
          const strSearchableText = strInputText.toLowerCase();
          const arrResults = arrFieldElements.filter(function (dataItem) {
            return dataItem.label.toLowerCase().indexOf(strSearchableText) !== -1;
          });
          this.searching = true;
          this.arrSearchedFields = formBuilderUtils.deepCloneObject(arrResults);
          return;
        }
      }
      this.searching = false;
      this.arrSearchedFields = null;
    };
    this.clearSearchHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.arrSearchedFields = null;
      this.searching = false;
    };
    this.fieldTypeFilterChangeHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      const filteredFieldType = event.detail.value;
      if (filteredFieldType &&
        filteredFieldType !== '' &&
        filteredFieldType !== this.FILTER_ALL_FIELDS) {
        this.arrSearchedFields = null;
        this.searching = false;
        const arrFieldElements = this.localFormValues && this.localFormValues.fields
          ? this.localFormValues.fields
          : [];
        if (arrFieldElements && arrFieldElements.length > 0) {
          const arrResults = arrFieldElements.filter(function (dataItem) {
            return dataItem.type.indexOf(filteredFieldType) !== -1;
          });
          this.arrFilteredByTypeFields = formBuilderUtils.deepCloneObject(arrResults);
          this.selectedFieldTypeFilterOption = filteredFieldType;
          return;
        }
      }
      this.arrFilteredByTypeFields = null;
      this.selectedFieldTypeFilterOption = this.FILTER_ALL_FIELDS;
    };
    this.openCustomizeWidgetModalHandler = (event) => {
      var _a, _b;
      event.stopImmediatePropagation();
      event.stopPropagation();
      if (!this.localFormValues ||
        !this.localFormValues.fields ||
        this.localFormValues.fields.length <= 0) {
        return;
      }
      const arrFields = this.localFormValues.fields;
      // const arrPrecedenceObjects = arrFields.filter((dataItem) => dataItem?.field_options?.precedence === '1');
      const arrPrecedenceObjects = this.customizeWidgetFields
        ? [...this.customizeWidgetFields]
        : [];
      let arrWidgetIds = [];
      if ((arrPrecedenceObjects === null || arrPrecedenceObjects === void 0 ? void 0 : arrPrecedenceObjects.length) > 1) {
        this.isWidgetValuesChanged = false;
        const intLength = arrPrecedenceObjects.length;
        for (let i1 = 0; i1 < intLength; i1++) {
          arrWidgetIds = [...arrWidgetIds, arrPrecedenceObjects[i1]];
        }
      }
      else {
        if (arrPrecedenceObjects &&
          arrPrecedenceObjects.length === 1 &&
          formBuilderUtils.isPrimaryFieldType(arrPrecedenceObjects[0], this.productName)) {
          arrWidgetIds = [...arrWidgetIds, arrPrecedenceObjects[0]];
        }
        const objMaxLimits = formBuilderUtils.getMaximumLimitsConfig(this.productName);
        const intMaxWidgetFields = ((_a = objMaxLimits === null || objMaxLimits === void 0 ? void 0 : objMaxLimits.widgets) === null || _a === void 0 ? void 0 : _a.count) || 0;
        const intFieldsLength = arrFields.length;
        for (let f1 = 0; f1 < intFieldsLength; f1++) {
          if (!arrWidgetIds.includes(arrFields[f1].id)) {
            arrWidgetIds = [...arrWidgetIds, arrFields[f1].id];
          }
          if (arrWidgetIds.length === intMaxWidgetFields) {
            break;
          }
        }
        this.isWidgetValuesChanged = true;
      }
      this.arrWidgetFields = [...arrWidgetIds];
      this.showCustomizeWidget = true;
      (_b = this.modalCustomizeWidget) === null || _b === void 0 ? void 0 : _b.open();
    };
    this.saveWidgetDetailsHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      if (this.isWidgetValuesChanged) {
        this.isSavingCustomizeWidget = true;
        this.fwSaveWidgetFields.emit([...this.arrWidgetFields]);
      }
    };
    this.closeWidgetDetailsHandler = (event = null) => {
      var _a;
      if (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
      (_a = this.modalCustomizeWidget) === null || _a === void 0 ? void 0 : _a.close();
      this.isWidgetValuesChanged = false;
      this.showCustomizeWidget = false;
      this.arrWidgetFields = null;
    };
    this.widgetCheckHandler = (event) => {
      var _a;
      event.stopImmediatePropagation();
      event.stopPropagation();
      const boolChecked = event.detail.checked;
      if (this.arrWidgetFields) {
        // const strFieldName = event.detail.data.name;
        const strFieldID = event.detail.data.id;
        const objMaxLimits = formBuilderUtils.getMaximumLimitsConfig(this.productName);
        const intMaxWidgetsCount = ((_a = objMaxLimits === null || objMaxLimits === void 0 ? void 0 : objMaxLimits.widgets) === null || _a === void 0 ? void 0 : _a.count) || 0;
        if (boolChecked && this.arrWidgetFields.length < intMaxWidgetsCount) {
          this.isWidgetValuesChanged = true;
          this.arrWidgetFields = [...this.arrWidgetFields, strFieldID];
        }
        else if (this.arrWidgetFields.includes(strFieldID)) {
          this.isWidgetValuesChanged = true;
          const intIndex = this.arrWidgetFields.indexOf(strFieldID);
          this.arrWidgetFields = [
            ...this.arrWidgetFields.slice(0, intIndex),
            ...this.arrWidgetFields.slice(intIndex + 1),
          ];
        }
      }
    };
  }
  watchSearchHandler() {
    this.fwSearchField.emit({ searching: this.searching });
  }
  watchSaveCustomizeWidgetChangeHandler() {
    if (!this.isSavingCustomizeWidget) {
      this.closeWidgetDetailsHandler();
    }
  }
  watchFormValuesChangeHandler(newValue) {
    this.validateFormValues(newValue);
  }
  watchProductNameChangeHandler() {
    this.validateFormValues();
  }
  /**
   * Method to force render the drag container's children containing all the added fields
   */
  async forceRenderFields() {
    this.fieldRerenderCount++;
  }
  componentWillLoad() {
    this.initializeSearchDebounce();
    this.validateFormValues();
    this.supportedFieldTypes = [
      'TEXT',
      'EMAIL',
      'CHECKBOX',
      'PARAGRAPH',
      'NUMBER',
      'DECIMAL',
      'DATE',
      'DROPDOWN',
      'DEPENDENT_FIELD',
      'RELATIONSHIP',
      'MULTI_SELECT',
    ];
  }
  disconnectedCallback() {
    this.debouncedHandleInput = null;
    this.removeResizeObserver();
  }
  validateFormValues(objFormValue = null) {
    var _a, _b, _c;
    this.fieldTypesCount = null;
    const objMaxLimitCount = { filterable: 0, unique: 0 };
    this.localFormValues = objFormValue
      ? formBuilderUtils.deepCloneObject(objFormValue)
      : this.formValues
        ? formBuilderUtils.deepCloneObject(this.formValues)
        : null;
    if (this.localFormValues) {
      const arrFields = (_a = this.localFormValues) === null || _a === void 0 ? void 0 : _a.fields;
      const objMapper = formBuilderUtils.formMapper[this.productName];
      const mappedFieldTypes = objMapper['reverseMappedFieldTypes'];
      const objProductConfig = objMapper.config;
      const boolSupportsDefaultField = (objProductConfig === null || objProductConfig === void 0 ? void 0 : objProductConfig.showDefaultTag) &&
        (objProductConfig === null || objProductConfig === void 0 ? void 0 : objProductConfig.defaultTagKey) &&
        objProductConfig.defaultTagKey !== ''
        ? true
        : false;
      const strDefaultFieldKey = boolSupportsDefaultField
        ? objProductConfig.defaultTagKey
        : '';
      // Maximum limits validation
      if (arrFields && arrFields.length > 0) {
        let intValidActiveFieldCount = 0;
        const intFieldCount = arrFields.length;
        for (let i1 = 0; i1 < intFieldCount; i1++) {
          // check for dependent field and change fields format
          if (((_c = (_b = arrFields[i1]) === null || _b === void 0 ? void 0 : _b.field_options) === null || _c === void 0 ? void 0 : _c.dependent) === 'true') {
            const internalNamePrefix = objProductConfig.internalNamePrefix;
            arrFields[i1] = formBuilderUtils.getDefaultDependentLevels({
              type: '22',
              label: arrFields[i1].label,
              name: arrFields[i1].name,
              fields: [arrFields[i1]],
            }, internalNamePrefix);
          }
          const objField = arrFields[i1];
          if (!objField) {
            continue;
          }
          if (mappedFieldTypes) {
            if (formBuilderUtils.hasCustomProperty(mappedFieldTypes, objField.type)) {
              objField.type = mappedFieldTypes[objField.type];
            }
            else {
              console.log(`${objField.type} is not added in the mapper - Unsupported field type`);
            }
          }
          const strFieldType = objField.type;
          if (!(objField === null || objField === void 0 ? void 0 : objField.isNew)) {
            if (strFieldType !== 'RELATIONSHIP' &&
              ((objField === null || objField === void 0 ? void 0 : objField.filterable) === true || (objField === null || objField === void 0 ? void 0 : objField.filterable) === 'true')) {
              objMaxLimitCount.filterable++;
            }
            if (formBuilderUtils.isUniqueField(objField)) {
              objMaxLimitCount.unique++;
            }
            if (!this.fieldTypesCount) {
              this.fieldTypesCount = {};
            }
            const strParsedFieldType = strFieldType === 'PRIMARY' ? 'TEXT' : strFieldType;
            if (!formBuilderUtils.hasCustomProperty(this.fieldTypesCount, strParsedFieldType)) {
              this.fieldTypesCount[strParsedFieldType] = 0;
            }
            this.fieldTypesCount[strParsedFieldType]++;
          }
          if (!boolSupportsDefaultField) {
            intValidActiveFieldCount++;
          }
          else if (strDefaultFieldKey &&
            strDefaultFieldKey !== '' &&
            formBuilderUtils.hasCustomProperty(objField, strDefaultFieldKey) &&
            objField[strDefaultFieldKey]) {
            intValidActiveFieldCount++;
          }
        }
        const objMaxLimits = formBuilderUtils.getMaximumLimitsConfig(this.productName);
        this.enableFieldType =
          intValidActiveFieldCount < objMaxLimits.fields.count;
        this.enableFilterable =
          objMaxLimitCount.filterable < objMaxLimits.filterable.count;
        this.enableUnique = objMaxLimitCount.unique < objMaxLimits.unique.count;
      }
      else {
        this.enableUnique = true;
        this.enableFilterable = true;
        this.enableFieldType = true;
        this.fieldTypesCount = null;
      }
    }
  }
  renderFieldTypesHeader(objProductPreset) {
    const strBaseClassName = 'form-builder';
    const objLabelsDb = objProductPreset.labels;
    const strProductHeader = formBuilderUtils.hasCustomProperty(objLabelsDb, 'headerProduct')
      ? objLabelsDb.headerProduct
      : '';
    const strProductSubHeader = formBuilderUtils.hasCustomProperty(objLabelsDb, 'subHeaderProduct')
      ? objLabelsDb.subHeaderProduct
      : '';
    const objSubHeaderLink = formBuilderUtils.hasCustomProperty(objLabelsDb, 'subHeaderProductLink')
      ? objLabelsDb.subHeaderProductLink
      : null;
    const strSubHeaderLinkLabel = objSubHeaderLink
      ? formBuilderUtils.i18nText(objSubHeaderLink.label)
      : '';
    const strSubHeaderLinkHref = objSubHeaderLink ? objSubHeaderLink.href : '';
    const boolShowSubHeaderLink = strSubHeaderLinkLabel && strSubHeaderLinkLabel !== '' ? true : false;
    const strFieldTypesHeader = formBuilderUtils.hasCustomProperty(objLabelsDb, 'fieldTypesHeader')
      ? objLabelsDb.fieldTypesHeader
      : '';
    const strDragDrop = formBuilderUtils.hasCustomProperty(objLabelsDb, 'dragDropFieldTypes')
      ? objLabelsDb.dragDropFieldTypes
      : '';
    const boolFieldsHeaderPresent = strFieldTypesHeader && strFieldTypesHeader !== '' ? true : false;
    const strDragClassName = boolFieldsHeaderPresent
      ? `${strBaseClassName}-left-panel-header-desc`
      : `${strBaseClassName}-left-panel-header-desc-wo-header`;
    return (index.h("div", { class: `${strBaseClassName}-left-panel-header` }, strProductHeader && strProductHeader !== '' && (index.h("label", { class: `${strBaseClassName}-left-panel-product-header-label` }, formBuilderUtils.i18nText(strProductHeader))), strProductSubHeader && strProductSubHeader !== '' && (index.h("span", { class: 'form-builder-left-panel-sub-header-description' }, index.h("label", { class: 'form-builder-left-panel-sub-header-description-label' }, formBuilderUtils.i18nText(strProductSubHeader)), boolShowSubHeaderLink && (index.h("a", { class: 'form-builder-left-panel-sub-header-description-link-anchor', href: strSubHeaderLinkHref, target: '_blank' }, strSubHeaderLinkLabel)))), boolFieldsHeaderPresent && (index.h("label", { class: `${strBaseClassName}-left-panel-header-label` }, formBuilderUtils.i18nText(strFieldTypesHeader))), strDragDrop && strDragDrop !== '' && (index.h("label", { class: strDragClassName }, formBuilderUtils.i18nText(strDragDrop)))));
  }
  renderDisableFieldCreateByRole(objProductPresetConfig, strBaseClassName) {
    if (this.role === 'trial') {
      return (index.h("div", { class: `${strBaseClassName}-left-panel-list-disabled-div` }, index.h("fw-icon", { name: 'lock', size: '30' }), index.h("label", { class: `${strBaseClassName}-left-panel-list-disabled-header` }, formBuilderUtils.i18nText(objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.freePlanFieldAddDisabledHeader)), index.h("label", { class: `${strBaseClassName}-left-panel-list-disabled-message` }, formBuilderUtils.i18nText(objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.freePlanFieldAddDisabledMessage)), index.h("fw-button", { color: 'primary', onFwClick: this.explorePlanHandler, class: `${strBaseClassName}-left-panel-list-disabled-button` }, formBuilderUtils.i18nText(objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.freePlanFieldAddDisabledButton))));
    }
  }
  renderDisableFieldCreateByPermission(objProductPresetConfig, strBaseClassName) {
    const boolCreationAllowed = formBuilderUtils.hasPermission(this.role, this.permission, 'CREATE');
    if (!boolCreationAllowed && this.role !== 'trial') {
      return (index.h("div", { class: `${strBaseClassName}-left-panel-list-disabled-div` }, index.h("fw-icon", { name: 'lock', size: '30' }), index.h("label", { class: `${strBaseClassName}-left-panel-list-disabled-header` }, formBuilderUtils.i18nText(objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.noCreatePermissionFieldAddDisabledHeader)), index.h("label", { class: `${strBaseClassName}-left-panel-list-disabled-message` }, formBuilderUtils.i18nText(objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.noCreatePermissionFieldAddDisabledMessage))));
    }
  }
  renderFieldTypeElement(key, presetFieldTypes, dbFieldConfig, intIndex) {
    if (key === 'PRIMARY') {
      return null;
    }
    const dbFieldTypeData = dbFieldConfig === null || dbFieldConfig === void 0 ? void 0 : dbFieldConfig.fieldProps[key];
    const dataItem = presetFieldTypes[key];
    const strFieldType = dataItem.type;
    if (!this.supportedFieldTypes.includes(strFieldType)) {
      return null;
    }
    let boolDisableFieldType = !this.enableFieldType;
    let strTooltipMessage = boolDisableFieldType
      ? this.getInterpolatedMaxLimitLabel('fields')
      : '';
    const objMaxLimits = formBuilderUtils.getMaximumLimitsConfig(this.productName);
    if (!boolDisableFieldType &&
      formBuilderUtils.hasCustomProperty(this.fieldTypesCount, strFieldType) &&
      this.fieldTypesCount[strFieldType] > 0 &&
      formBuilderUtils.hasCustomProperty(objMaxLimits, strFieldType) &&
      this.fieldTypesCount[strFieldType] >= objMaxLimits[strFieldType].count) {
      boolDisableFieldType = true;
      strTooltipMessage = boolDisableFieldType
        ? this.getInterpolatedMaxLimitLabel(strFieldType)
        : '';
    }
    const strDisplayLabel = formBuilderUtils.hasCustomProperty(dbFieldTypeData, 'display_label')
      ? dbFieldTypeData.display_label
      : '';
    const strDescription = formBuilderUtils.hasCustomProperty(dbFieldTypeData, 'description')
      ? formBuilderUtils.i18nText(dbFieldTypeData.description)
      : '';
    const boolShowDescription = strDescription && strDescription !== '' ? true : false;
    const strHelpTooltip = formBuilderUtils.hasCustomProperty(dbFieldTypeData, 'help')
      ? formBuilderUtils.i18nText(dbFieldTypeData.help)
      : '';
    const boolShowHelpTooltip = strHelpTooltip && strHelpTooltip !== '' ? true : false;
    const objLink = formBuilderUtils.hasCustomProperty(dbFieldTypeData, 'link')
      ? dbFieldTypeData.link
      : null;
    const strLinkLabel = objLink ? formBuilderUtils.i18nText(objLink.label) : '';
    const strLinkHref = objLink ? objLink.href : '';
    const boolShowLink = strLinkLabel && strLinkLabel !== '' ? true : false;
    const boolShowBottomBorder = formBuilderUtils.hasCustomProperty(dbFieldTypeData, 'has_bottom_border')
      ? dbFieldTypeData.has_bottom_border
      : false;
    return (index.h(index.Fragment, null, index.h("fw-field-type-menu-item", { index: intIndex, key: strFieldType, value: strFieldType, dataProvider: dataItem, tooltip: strTooltipMessage, disabled: boolDisableFieldType, label: strDisplayLabel, iconName: dataItem.icon.name, iconBackgroundColor: dataItem.icon.bg_color, onFwAddClick: this.addNewFieldTypeHandler }), boolShowDescription && (index.h("span", { class: 'field-type-menu-description' }, index.h("label", { class: 'field-type-menu-description-label' }, strDescription), boolShowLink && (index.h("a", { class: 'field-type-menu-description-link-anchor', href: strLinkHref, target: '_blank' }, strLinkLabel)), boolShowHelpTooltip && (index.h("fw-tooltip", { placement: 'right', trigger: 'hover', content: strHelpTooltip }, index.h("fw-icon", { class: 'field-type-menu-help-fw-icon', size: 14, name: 'help', color: '#12344d' }))))), boolShowBottomBorder && (index.h("hr", { class: 'field-type-menu-item-bottom-border' }))));
  }
  renderFieldEditorElement(dataItem, intIndex, boolFieldEditingState, strEntityName) {
    if (!dataItem) {
      return null;
    }
    const strFieldType = dataItem.type;
    const objDefaultFieldTypeSchema = this.getDefaultFieldTypeSchema(strFieldType);
    if (!objDefaultFieldTypeSchema) {
      return null;
    }
    const isPrimaryField = formBuilderUtils.isPrimaryFieldType(dataItem, this.productName, intIndex, !this.searching);
    const boolItemExpanded = this.expandedFieldIndex === intIndex ? true : false;
    const strKey = `${dataItem.id}_${intIndex.toString()}`;
    return (index.h("fw-field-editor", { index: intIndex, key: strKey, productName: this.productName, dataProvider: dataItem, entityName: strEntityName, expanded: boolItemExpanded, isPrimaryField: isPrimaryField, pinned: isPrimaryField ? 'top' : '', disabled: boolFieldEditingState, disabledSort: this.searching, permission: this.permission, role: this.role, enableUnique: this.enableUnique, enableFilterable: this.enableFilterable, defaultFieldTypeSchema: objDefaultFieldTypeSchema, lookupTargetObjects: this.lookupTargetObjects, formValues: this.localFormValues, isLoading: this.isLoading, onFwUpdate: this.saveFieldHandler, onFwDelete: this.deleteFieldHandler, onFwExpand: this.expandFieldHandler, onFwReorder: this.reorderFieldProgressHandler }));
  }
  renderWidgetElement(dataItem, intIndex) {
    var _a, _b;
    const objMaxLimits = formBuilderUtils.getMaximumLimitsConfig(this.productName);
    const intMaxWidgetsCount = ((_a = objMaxLimits === null || objMaxLimits === void 0 ? void 0 : objMaxLimits.widgets) === null || _a === void 0 ? void 0 : _a.count) || 0;
    const isPrimaryField = formBuilderUtils.isPrimaryFieldType(dataItem, this.productName, intIndex);
    const boolItemSelected = !isPrimaryField
      ? ((_b = this.arrWidgetFields) === null || _b === void 0 ? void 0 : _b.includes(dataItem.id))
        ? true
        : false
      : true;
    const boolItemDisabled = isPrimaryField
      ? true
      : !boolItemSelected
        ? this.arrWidgetFields.length >= intMaxWidgetsCount
        : false;
    return (index.h("fw-widget-customize-field-item", { index: intIndex, key: dataItem.id, label: dataItem.label, dataProvider: dataItem, isPrimaryField: isPrimaryField, pinned: isPrimaryField ? 'top' : '', selected: boolItemSelected, disabled: boolItemDisabled, onFwCheck: this.widgetCheckHandler }));
  }
  render() {
    const strBaseClassName = 'form-builder';
    const objFormValuesSchema = this.localFormValues;
    const objFieldTypes = formBuilderPreset.presetSchema.fieldTypes;
    const objProductPreset = formBuilderUtils.formMapper[this.productName];
    const objProductPresetConfig = objProductPreset === null || objProductPreset === void 0 ? void 0 : objProductPreset.config;
    const objLabelsDb = objProductPreset === null || objProductPreset === void 0 ? void 0 : objProductPreset.labels;
    const arrFieldOrder = objProductPreset === null || objProductPreset === void 0 ? void 0 : objProductPreset.fieldOrder;
    if (!this.showLookupField) {
      const relationshipIndex = arrFieldOrder.indexOf('RELATIONSHIP');
      if (relationshipIndex > -1) {
        arrFieldOrder.splice(relationshipIndex, 1);
      }
    }
    if (!this.showDependentField) {
      const dependentIndex = arrFieldOrder.indexOf('DEPENDENT_FIELD');
      if (dependentIndex > -1) {
        arrFieldOrder.splice(dependentIndex, 1);
      }
    }
    const boolFieldEditingState = this.expandedFieldIndex > -1 ? true : false;
    const strEntityName = objFormValuesSchema ? objFormValuesSchema.name : '';
    const strFieldEditHeader = formBuilderUtils.hasCustomProperty(objLabelsDb, 'fieldsHeader')
      ? objLabelsDb.fieldsHeader
      : '';
    const fieldTypeElements = arrFieldOrder && arrFieldOrder.length > 0
      ? arrFieldOrder.map((key, index) => this.renderFieldTypeElement(key, objFieldTypes, objProductPreset, index))
      : null;
    const boolFilterApplied = this.selectedFieldTypeFilterOption &&
      this.selectedFieldTypeFilterOption !== '' &&
      this.selectedFieldTypeFilterOption !== this.FILTER_ALL_FIELDS
      ? true
      : false;
    const arrFieldElements = boolFilterApplied
      ? this.arrFilteredByTypeFields
      : this.searching
        ? this.arrSearchedFields
        : objFormValuesSchema && objFormValuesSchema.fields
          ? objFormValuesSchema.fields
          : [];
    const fieldElements = arrFieldElements && arrFieldElements.length > 0
      ? arrFieldElements.map((dataItem, index) => this.renderFieldEditorElement(dataItem, index, boolFieldEditingState, strEntityName))
      : null;
    const boolShowEmptySearchResults = (this.searching && (!fieldElements || fieldElements.length === 0)) ||
      (boolFilterApplied && (!fieldElements || fieldElements.length === 0));
    const boolHasCustomizeWidgetOption = (objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.customizeWidget) || false;
    const fieldWidgetElements = this.showCustomizeWidget &&
      arrFieldElements &&
      arrFieldElements.length > 0
      ? arrFieldElements.map((dataItem, index) => this.renderWidgetElement(dataItem, index))
      : null;
    const boolHasFilterByFieldTypes = (objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.filterByType) || false;
    if (!this.filterByFieldTypeOptions &&
      arrFieldOrder &&
      arrFieldOrder.length > 0) {
      const dbFieldProps = objProductPreset === null || objProductPreset === void 0 ? void 0 : objProductPreset.fieldProps;
      const intFieldTypesLength = arrFieldOrder.length;
      this.filterByFieldTypeOptions = [
        {
          text: formBuilderUtils.i18nText('filterOptionAllFields'),
          value: this.FILTER_ALL_FIELDS,
        },
      ];
      for (let f1 = 0; f1 < intFieldTypesLength; f1++) {
        this.filterByFieldTypeOptions.push({
          text: formBuilderUtils.i18nText(dbFieldProps[arrFieldOrder[f1]].display_label),
          value: arrFieldOrder[f1],
        });
      }
    }
    const strRightPanelBaseClassName = `${strBaseClassName}-right-panel`;
    const strLeftPanelBaseClassName = `${strBaseClassName}-left-panel`;
    let strRightPanelHeaderClassName = `${strRightPanelBaseClassName}-header`;
    let strLeftPanelClassName = strLeftPanelBaseClassName;
    if (boolFieldEditingState || this.searching) {
      strLeftPanelClassName += ` ${strLeftPanelBaseClassName}--disabled`;
    }
    if (boolFieldEditingState) {
      strRightPanelHeaderClassName += ` ${strRightPanelBaseClassName}-header--disabled`;
    }
    return (index.h(index.Host, { tabIndex: '-1' }, index.h("div", { class: strBaseClassName }, index.h("div", { class: strLeftPanelClassName }, this.renderFieldTypesHeader(objProductPreset), index.h("div", { class: `${strBaseClassName}-left-panel-list-container` }, index.h("fw-drag-container", { class: `${strBaseClassName}-left-panel-field-types-list`, id: 'fieldTypesList', addOnDrop: false, sortable: false }, fieldTypeElements), this.renderDisableFieldCreateByRole(objProductPresetConfig, strBaseClassName), this.renderDisableFieldCreateByPermission(objProductPresetConfig, strBaseClassName))), index.h("div", { class: strRightPanelBaseClassName }, index.h("div", { class: strRightPanelHeaderClassName }, index.h("div", { class: `${strBaseClassName}-right-panel-header-content` }, !boolHasFilterByFieldTypes && (index.h("label", { class: `${strBaseClassName}-right-panel-header-label` }, formBuilderUtils.i18nText(strFieldEditHeader))), boolHasFilterByFieldTypes && (index.h("div", { class: `${strBaseClassName}-right-panel-header-right-filter-by-div` }, index.h("label", { class: `${strBaseClassName}-right-panel-header-filter-label` }, formBuilderUtils.i18nText('filterFields')), index.h("fw-select", { class: `${strBaseClassName}-filter-by-field-type-select`, options: this.filterByFieldTypeOptions, value: this.selectedFieldTypeFilterOption, onFwChange: this.fieldTypeFilterChangeHandler }))), index.h("div", { class: `${strBaseClassName}-right-panel-header-right-div` }, boolHasCustomizeWidgetOption && (index.h("fw-button", { id: 'customizeWidgetFieldsBtn', color: 'link', disabled: this.searching, onFwClick: this.openCustomizeWidgetModalHandler }, index.h("fw-icon", { name: 'modify', slot: 'before-label' }), formBuilderUtils.i18nText('customizeWidget'))), index.h("fw-input", { "clear-input": true, "icon-left": 'search', placeholder: formBuilderUtils.i18nText('searchFields'), onFwInput: this.debouncedHandleInput, onFwInputClear: this.clearSearchHandler, class: `${strBaseClassName}-right-panel-header-search-input` })))), index.h("div", { ref: (el) => (this.fieldEditorPanel = el), class: `${strBaseClassName}-right-panel-list-container` }, !boolShowEmptySearchResults && (index.h("fw-drag-container", { key: `field-drag-container-${this.fieldRerenderCount.toString()}`, class: `${strBaseClassName}-right-panel-field-editor-list`, id: 'fieldsContainer', acceptFrom: 'fieldTypesList', addOnDrop: false, sortable: true, onFwDrop: this.fieldTypeDropHandler }, fieldElements)), boolShowEmptySearchResults && (index.h("div", { class: `${strBaseClassName}-right-panel-empty-list-div` }, index.h("div", { class: `${strBaseClassName}-right-panel-empty-list-content` }, index.h("span", { class: `${strBaseClassName}-right-panel-empty-list-image-span` }, index.h("img", { alt: '', src: this.emptySearchImage, class: `${strBaseClassName}-right-panel-empty-list-image` })), index.h("label", { class: `${strBaseClassName}-right-panel-empty-search-message` }, formBuilderUtils.i18nText('noSearchItemsFound')))))))), index.h("fw-modal", { ref: (el) => (this.modalCustomizeWidget = el), size: 'small', hasCloseIconButton: false }, index.h("fw-modal-title", null, index.h("span", { class: 'cusomize-widget-header' }, index.h("span", { class: 'cusomize-widget-title' }, formBuilderUtils.i18nText('customizeWidgetModalHeader')), index.h("span", { class: 'cusomize-widget-description' }, formBuilderUtils.i18nText('customizeWidgetModalHint')))), index.h("fw-modal-content", null, this.showCustomizeWidget && (index.h("fw-drag-container", { class: 'cusomize-widget-list', id: 'customizeWidgetList', addOnDrop: false, sortable: false }, fieldWidgetElements))), index.h("fw-modal-footer", null, index.h("span", { class: 'cusomize-widget-modal-footer' }, index.h("fw-button", { color: 'secondary', onFwClick: this.closeWidgetDetailsHandler }, formBuilderUtils.i18nText('customizeWidgetModalCancelBtn')), index.h("fw-button", { loading: this.isSavingCustomizeWidget, onFwClick: this.saveWidgetDetailsHandler }, formBuilderUtils.i18nText('customizeWidgetModalSaveBtn')))))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "searching": ["watchSearchHandler"],
    "isSavingCustomizeWidget": ["watchSaveCustomizeWidgetChangeHandler"],
    "formValues": ["watchFormValuesChangeHandler"],
    "productName": ["watchProductNameChangeHandler"]
  }; }
};
FormBuilder.style = formBuilderCss;

exports.fw_form_builder = FormBuilder;
