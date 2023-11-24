/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component, Event, Element, Prop, h, Host, Fragment, State, Watch, Method, } from '@stencil/core';
import { deepCloneObject, getFieldTypeCheckboxes, getMappedCustomFieldType, getMaximumLimitsConfig, hasCustomProperty, hasPermission, i18nText, isPrimaryFieldType, isUniqueField, getDefaultDependentLevels, } from './utils/form-builder-utils';
import presetSchema from './assets/form-builder-preset.json';
import formMapper from './assets/form-mapper.json';
import { debounce } from '../../utils/utils';
export class FormBuilder {
  constructor() {
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
          const objMaxLimit = (_a = getMaximumLimitsConfig(this.productName)) === null || _a === void 0 ? void 0 : _a[strProperty];
          if (objMaxLimit) {
            return i18nText(objMaxLimit.message, { count: objMaxLimit.count });
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
      if (presetSchema) {
        try {
          const objDefaultField = presetSchema.fieldTypes[fieldType];
          if (objDefaultField) {
            const objNewField = deepCloneObject(objDefaultField);
            objNewField.checkboxes = getFieldTypeCheckboxes(this.productName, fieldType);
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
      objSaveFieldDetails.type = getMappedCustomFieldType(this.productName, objSaveFieldDetails.type);
      this.fwSaveField.emit(objSaveField);
    };
    this.deleteFieldHandler = (event) => {
      this.fwDeleteField.emit(Object.assign({}, event.detail));
    };
    this.composeNewField = (strNewFieldType, objFieldData, intIndex = -1) => {
      var _a;
      const fieldType = strNewFieldType;
      const objNewField = deepCloneObject(presetSchema.fieldTypes[fieldType]);
      const objMaxLimits = getMaximumLimitsConfig(this.productName);
      try {
        const arrFields = (_a = this.localFormValues) === null || _a === void 0 ? void 0 : _a.fields;
        objNewField.checkboxes = getFieldTypeCheckboxes(this.productName, objNewField.type);
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
      objNewField.type = getMappedCustomFieldType(this.productName, objNewField.type);
      this.fwComposeNewField.emit({
        maximumLimits: getMaximumLimitsConfig(this.productName),
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
        const boolCreationAllowed = hasPermission(this.role, this.permission, 'CREATE');
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
      const boolCreationAllowed = hasPermission(this.role, this.permission, 'CREATE');
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
        this.debouncedHandleInput = debounce(this.searchChangeHandler, this);
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
          this.arrSearchedFields = deepCloneObject(arrResults);
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
          this.arrFilteredByTypeFields = deepCloneObject(arrResults);
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
          isPrimaryFieldType(arrPrecedenceObjects[0], this.productName)) {
          arrWidgetIds = [...arrWidgetIds, arrPrecedenceObjects[0]];
        }
        const objMaxLimits = getMaximumLimitsConfig(this.productName);
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
        const objMaxLimits = getMaximumLimitsConfig(this.productName);
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
      ? deepCloneObject(objFormValue)
      : this.formValues
        ? deepCloneObject(this.formValues)
        : null;
    if (this.localFormValues) {
      const arrFields = (_a = this.localFormValues) === null || _a === void 0 ? void 0 : _a.fields;
      const objMapper = formMapper[this.productName];
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
            arrFields[i1] = getDefaultDependentLevels({
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
            if (hasCustomProperty(mappedFieldTypes, objField.type)) {
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
            if (isUniqueField(objField)) {
              objMaxLimitCount.unique++;
            }
            if (!this.fieldTypesCount) {
              this.fieldTypesCount = {};
            }
            const strParsedFieldType = strFieldType === 'PRIMARY' ? 'TEXT' : strFieldType;
            if (!hasCustomProperty(this.fieldTypesCount, strParsedFieldType)) {
              this.fieldTypesCount[strParsedFieldType] = 0;
            }
            this.fieldTypesCount[strParsedFieldType]++;
          }
          if (!boolSupportsDefaultField) {
            intValidActiveFieldCount++;
          }
          else if (strDefaultFieldKey &&
            strDefaultFieldKey !== '' &&
            hasCustomProperty(objField, strDefaultFieldKey) &&
            objField[strDefaultFieldKey]) {
            intValidActiveFieldCount++;
          }
        }
        const objMaxLimits = getMaximumLimitsConfig(this.productName);
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
    const strProductHeader = hasCustomProperty(objLabelsDb, 'headerProduct')
      ? objLabelsDb.headerProduct
      : '';
    const strProductSubHeader = hasCustomProperty(objLabelsDb, 'subHeaderProduct')
      ? objLabelsDb.subHeaderProduct
      : '';
    const objSubHeaderLink = hasCustomProperty(objLabelsDb, 'subHeaderProductLink')
      ? objLabelsDb.subHeaderProductLink
      : null;
    const strSubHeaderLinkLabel = objSubHeaderLink
      ? i18nText(objSubHeaderLink.label)
      : '';
    const strSubHeaderLinkHref = objSubHeaderLink ? objSubHeaderLink.href : '';
    const boolShowSubHeaderLink = strSubHeaderLinkLabel && strSubHeaderLinkLabel !== '' ? true : false;
    const strFieldTypesHeader = hasCustomProperty(objLabelsDb, 'fieldTypesHeader')
      ? objLabelsDb.fieldTypesHeader
      : '';
    const strDragDrop = hasCustomProperty(objLabelsDb, 'dragDropFieldTypes')
      ? objLabelsDb.dragDropFieldTypes
      : '';
    const boolFieldsHeaderPresent = strFieldTypesHeader && strFieldTypesHeader !== '' ? true : false;
    const strDragClassName = boolFieldsHeaderPresent
      ? `${strBaseClassName}-left-panel-header-desc`
      : `${strBaseClassName}-left-panel-header-desc-wo-header`;
    return (h("div", { class: `${strBaseClassName}-left-panel-header` },
      strProductHeader && strProductHeader !== '' && (h("label", { class: `${strBaseClassName}-left-panel-product-header-label` }, i18nText(strProductHeader))),
      strProductSubHeader && strProductSubHeader !== '' && (h("span", { class: 'form-builder-left-panel-sub-header-description' },
        h("label", { class: 'form-builder-left-panel-sub-header-description-label' }, i18nText(strProductSubHeader)),
        boolShowSubHeaderLink && (h("a", { class: 'form-builder-left-panel-sub-header-description-link-anchor', href: strSubHeaderLinkHref, target: '_blank' }, strSubHeaderLinkLabel)))),
      boolFieldsHeaderPresent && (h("label", { class: `${strBaseClassName}-left-panel-header-label` }, i18nText(strFieldTypesHeader))),
      strDragDrop && strDragDrop !== '' && (h("label", { class: strDragClassName }, i18nText(strDragDrop)))));
  }
  renderDisableFieldCreateByRole(objProductPresetConfig, strBaseClassName) {
    if (this.role === 'trial') {
      return (h("div", { class: `${strBaseClassName}-left-panel-list-disabled-div` },
        h("fw-icon", { name: 'lock', size: '30' }),
        h("label", { class: `${strBaseClassName}-left-panel-list-disabled-header` }, i18nText(objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.freePlanFieldAddDisabledHeader)),
        h("label", { class: `${strBaseClassName}-left-panel-list-disabled-message` }, i18nText(objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.freePlanFieldAddDisabledMessage)),
        h("fw-button", { color: 'primary', onFwClick: this.explorePlanHandler, class: `${strBaseClassName}-left-panel-list-disabled-button` }, i18nText(objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.freePlanFieldAddDisabledButton))));
    }
  }
  renderDisableFieldCreateByPermission(objProductPresetConfig, strBaseClassName) {
    const boolCreationAllowed = hasPermission(this.role, this.permission, 'CREATE');
    if (!boolCreationAllowed && this.role !== 'trial') {
      return (h("div", { class: `${strBaseClassName}-left-panel-list-disabled-div` },
        h("fw-icon", { name: 'lock', size: '30' }),
        h("label", { class: `${strBaseClassName}-left-panel-list-disabled-header` }, i18nText(objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.noCreatePermissionFieldAddDisabledHeader)),
        h("label", { class: `${strBaseClassName}-left-panel-list-disabled-message` }, i18nText(objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.noCreatePermissionFieldAddDisabledMessage))));
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
    const objMaxLimits = getMaximumLimitsConfig(this.productName);
    if (!boolDisableFieldType &&
      hasCustomProperty(this.fieldTypesCount, strFieldType) &&
      this.fieldTypesCount[strFieldType] > 0 &&
      hasCustomProperty(objMaxLimits, strFieldType) &&
      this.fieldTypesCount[strFieldType] >= objMaxLimits[strFieldType].count) {
      boolDisableFieldType = true;
      strTooltipMessage = boolDisableFieldType
        ? this.getInterpolatedMaxLimitLabel(strFieldType)
        : '';
    }
    const strDisplayLabel = hasCustomProperty(dbFieldTypeData, 'display_label')
      ? dbFieldTypeData.display_label
      : '';
    const strDescription = hasCustomProperty(dbFieldTypeData, 'description')
      ? i18nText(dbFieldTypeData.description)
      : '';
    const boolShowDescription = strDescription && strDescription !== '' ? true : false;
    const strHelpTooltip = hasCustomProperty(dbFieldTypeData, 'help')
      ? i18nText(dbFieldTypeData.help)
      : '';
    const boolShowHelpTooltip = strHelpTooltip && strHelpTooltip !== '' ? true : false;
    const objLink = hasCustomProperty(dbFieldTypeData, 'link')
      ? dbFieldTypeData.link
      : null;
    const strLinkLabel = objLink ? i18nText(objLink.label) : '';
    const strLinkHref = objLink ? objLink.href : '';
    const boolShowLink = strLinkLabel && strLinkLabel !== '' ? true : false;
    const boolShowBottomBorder = hasCustomProperty(dbFieldTypeData, 'has_bottom_border')
      ? dbFieldTypeData.has_bottom_border
      : false;
    return (h(Fragment, null,
      h("fw-field-type-menu-item", { index: intIndex, key: strFieldType, value: strFieldType, dataProvider: dataItem, tooltip: strTooltipMessage, disabled: boolDisableFieldType, label: strDisplayLabel, iconName: dataItem.icon.name, iconBackgroundColor: dataItem.icon.bg_color, onFwAddClick: this.addNewFieldTypeHandler }),
      boolShowDescription && (h("span", { class: 'field-type-menu-description' },
        h("label", { class: 'field-type-menu-description-label' }, strDescription),
        boolShowLink && (h("a", { class: 'field-type-menu-description-link-anchor', href: strLinkHref, target: '_blank' }, strLinkLabel)),
        boolShowHelpTooltip && (h("fw-tooltip", { placement: 'right', trigger: 'hover', content: strHelpTooltip },
          h("fw-icon", { class: 'field-type-menu-help-fw-icon', size: 14, name: 'help', color: '#12344d' }))))),
      boolShowBottomBorder && (h("hr", { class: 'field-type-menu-item-bottom-border' }))));
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
    const isPrimaryField = isPrimaryFieldType(dataItem, this.productName, intIndex, !this.searching);
    const boolItemExpanded = this.expandedFieldIndex === intIndex ? true : false;
    const strKey = `${dataItem.id}_${intIndex.toString()}`;
    return (h("fw-field-editor", { index: intIndex, key: strKey, productName: this.productName, dataProvider: dataItem, entityName: strEntityName, expanded: boolItemExpanded, isPrimaryField: isPrimaryField, pinned: isPrimaryField ? 'top' : '', disabled: boolFieldEditingState, disabledSort: this.searching, permission: this.permission, role: this.role, enableUnique: this.enableUnique, enableFilterable: this.enableFilterable, defaultFieldTypeSchema: objDefaultFieldTypeSchema, lookupTargetObjects: this.lookupTargetObjects, formValues: this.localFormValues, isLoading: this.isLoading, onFwUpdate: this.saveFieldHandler, onFwDelete: this.deleteFieldHandler, onFwExpand: this.expandFieldHandler, onFwReorder: this.reorderFieldProgressHandler }));
  }
  renderWidgetElement(dataItem, intIndex) {
    var _a, _b;
    const objMaxLimits = getMaximumLimitsConfig(this.productName);
    const intMaxWidgetsCount = ((_a = objMaxLimits === null || objMaxLimits === void 0 ? void 0 : objMaxLimits.widgets) === null || _a === void 0 ? void 0 : _a.count) || 0;
    const isPrimaryField = isPrimaryFieldType(dataItem, this.productName, intIndex);
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
    return (h("fw-widget-customize-field-item", { index: intIndex, key: dataItem.id, label: dataItem.label, dataProvider: dataItem, isPrimaryField: isPrimaryField, pinned: isPrimaryField ? 'top' : '', selected: boolItemSelected, disabled: boolItemDisabled, onFwCheck: this.widgetCheckHandler }));
  }
  render() {
    const strBaseClassName = 'form-builder';
    const objFormValuesSchema = this.localFormValues;
    const objFieldTypes = presetSchema.fieldTypes;
    const objProductPreset = formMapper[this.productName];
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
    const strFieldEditHeader = hasCustomProperty(objLabelsDb, 'fieldsHeader')
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
          text: i18nText('filterOptionAllFields'),
          value: this.FILTER_ALL_FIELDS,
        },
      ];
      for (let f1 = 0; f1 < intFieldTypesLength; f1++) {
        this.filterByFieldTypeOptions.push({
          text: i18nText(dbFieldProps[arrFieldOrder[f1]].display_label),
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
    return (h(Host, { tabIndex: '-1' },
      h("div", { class: strBaseClassName },
        h("div", { class: strLeftPanelClassName },
          this.renderFieldTypesHeader(objProductPreset),
          h("div", { class: `${strBaseClassName}-left-panel-list-container` },
            h("fw-drag-container", { class: `${strBaseClassName}-left-panel-field-types-list`, id: 'fieldTypesList', addOnDrop: false, sortable: false }, fieldTypeElements),
            this.renderDisableFieldCreateByRole(objProductPresetConfig, strBaseClassName),
            this.renderDisableFieldCreateByPermission(objProductPresetConfig, strBaseClassName))),
        h("div", { class: strRightPanelBaseClassName },
          h("div", { class: strRightPanelHeaderClassName },
            h("div", { class: `${strBaseClassName}-right-panel-header-content` },
              !boolHasFilterByFieldTypes && (h("label", { class: `${strBaseClassName}-right-panel-header-label` }, i18nText(strFieldEditHeader))),
              boolHasFilterByFieldTypes && (h("div", { class: `${strBaseClassName}-right-panel-header-right-filter-by-div` },
                h("label", { class: `${strBaseClassName}-right-panel-header-filter-label` }, i18nText('filterFields')),
                h("fw-select", { class: `${strBaseClassName}-filter-by-field-type-select`, options: this.filterByFieldTypeOptions, value: this.selectedFieldTypeFilterOption, onFwChange: this.fieldTypeFilterChangeHandler }))),
              h("div", { class: `${strBaseClassName}-right-panel-header-right-div` },
                boolHasCustomizeWidgetOption && (h("fw-button", { id: 'customizeWidgetFieldsBtn', color: 'link', disabled: this.searching, onFwClick: this.openCustomizeWidgetModalHandler },
                  h("fw-icon", { name: 'modify', slot: 'before-label' }),
                  i18nText('customizeWidget'))),
                h("fw-input", { "clear-input": true, "icon-left": 'search', placeholder: i18nText('searchFields'), onFwInput: this.debouncedHandleInput, onFwInputClear: this.clearSearchHandler, class: `${strBaseClassName}-right-panel-header-search-input` })))),
          h("div", { ref: (el) => (this.fieldEditorPanel = el), class: `${strBaseClassName}-right-panel-list-container` },
            !boolShowEmptySearchResults && (h("fw-drag-container", { key: `field-drag-container-${this.fieldRerenderCount.toString()}`, class: `${strBaseClassName}-right-panel-field-editor-list`, id: 'fieldsContainer', acceptFrom: 'fieldTypesList', addOnDrop: false, sortable: true, onFwDrop: this.fieldTypeDropHandler }, fieldElements)),
            boolShowEmptySearchResults && (h("div", { class: `${strBaseClassName}-right-panel-empty-list-div` },
              h("div", { class: `${strBaseClassName}-right-panel-empty-list-content` },
                h("span", { class: `${strBaseClassName}-right-panel-empty-list-image-span` },
                  h("img", { alt: '', src: this.emptySearchImage, class: `${strBaseClassName}-right-panel-empty-list-image` })),
                h("label", { class: `${strBaseClassName}-right-panel-empty-search-message` }, i18nText('noSearchItemsFound')))))))),
      h("fw-modal", { ref: (el) => (this.modalCustomizeWidget = el), size: 'small', hasCloseIconButton: false },
        h("fw-modal-title", null,
          h("span", { class: 'cusomize-widget-header' },
            h("span", { class: 'cusomize-widget-title' }, i18nText('customizeWidgetModalHeader')),
            h("span", { class: 'cusomize-widget-description' }, i18nText('customizeWidgetModalHint')))),
        h("fw-modal-content", null, this.showCustomizeWidget && (h("fw-drag-container", { class: 'cusomize-widget-list', id: 'customizeWidgetList', addOnDrop: false, sortable: false }, fieldWidgetElements))),
        h("fw-modal-footer", null,
          h("span", { class: 'cusomize-widget-modal-footer' },
            h("fw-button", { color: 'secondary', onFwClick: this.closeWidgetDetailsHandler }, i18nText('customizeWidgetModalCancelBtn')),
            h("fw-button", { loading: this.isSavingCustomizeWidget, onFwClick: this.saveWidgetDetailsHandler }, i18nText('customizeWidgetModalSaveBtn')))))));
  }
  static get is() { return "fw-form-builder"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["form-builder.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["form-builder.css"]
  }; }
  static get properties() { return {
    "productName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'CUSTOM_OBJECTS' | 'CONVERSATION_PROPERTIES'",
        "resolved": "\"CONVERSATION_PROPERTIES\" | \"CUSTOM_OBJECTS\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The db type used to determine the json to be used for CUSTOM_OBJECTS or CONVERSATION_PROPERTIES"
      },
      "attribute": "product-name",
      "reflect": false,
      "defaultValue": "'CUSTOM_OBJECTS'"
    },
    "role": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'trial' | 'admin'",
        "resolved": "\"admin\" | \"trial\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Show explore plans button and disable features for free-plan users"
      },
      "attribute": "role",
      "reflect": false,
      "defaultValue": "'admin'"
    },
    "permission": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{\n    view: boolean;\n    create: boolean;\n    edit: boolean;\n    delete: boolean;\n  }",
        "resolved": "{ view: boolean; create: boolean; edit: boolean; delete: boolean; }",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Permission object to restrict features based on permissions\n\"view\" needs to be set to true for the rest of the permissions to be applicable\nBy default, all the permissions are set to true to give access to all the features\nExample permission object : { view: true, create: true, edit: true, delete: true }"
      },
      "defaultValue": "{ view: true, create: true, edit: true, delete: true }"
    },
    "expandedFieldIndex": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Prop to store the expanded field index"
      },
      "attribute": "expanded-field-index",
      "reflect": false,
      "defaultValue": "-1"
    },
    "formValues": {
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
        "text": "variable to store form values"
      },
      "attribute": "form-values",
      "reflect": false,
      "defaultValue": "null"
    },
    "lookupTargetObjects": {
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
        "text": "object to store the lookup target entities"
      },
      "attribute": "lookup-target-objects",
      "reflect": false,
      "defaultValue": "null"
    },
    "showLookupField": {
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
        "text": "flag to show lookupField for CONVERSATION_PROPERTIES or not"
      },
      "attribute": "show-lookup-field",
      "reflect": false,
      "defaultValue": "true"
    },
    "showDependentField": {
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
        "text": "flag to show dependentField for CONVERSATION_PROPERTIES or not"
      },
      "attribute": "show-dependent-field",
      "reflect": false,
      "defaultValue": "true"
    },
    "customizeWidgetFields": {
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
        "text": "variable to store customize widget fields"
      },
      "attribute": "customize-widget-fields",
      "reflect": false,
      "defaultValue": "null"
    },
    "isLoading": {
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
        "text": "flag to notify if an api call is in progress"
      },
      "attribute": "is-loading",
      "reflect": false,
      "defaultValue": "false"
    },
    "isSavingCustomizeWidget": {
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
        "text": "flag to notify if an api call to save the widget is completed"
      },
      "attribute": "is-saving-customize-widget",
      "reflect": false,
      "defaultValue": "false"
    },
    "userPlan": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'trial' | 'admin'",
        "resolved": "\"admin\" | \"trial\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Show explore plans and disable features for user having free-plan"
      },
      "attribute": "user-plan",
      "reflect": false,
      "defaultValue": "'admin'"
    },
    "emptySearchImage": {
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
        "text": "svg image to be shown for empty record"
      },
      "attribute": "empty-search-image",
      "reflect": false,
      "defaultValue": "null"
    }
  }; }
  static get states() { return {
    "localFormValues": {},
    "arrWidgetFields": {},
    "arrSearchedFields": {},
    "arrFilteredByTypeFields": {},
    "searching": {},
    "showCustomizeWidget": {},
    "fieldTypesCount": {},
    "enableFieldType": {},
    "enableFilterable": {},
    "enableUnique": {},
    "selectedFieldTypeFilterOption": {},
    "fieldRerenderCount": {}
  }; }
  static get events() { return [{
      "method": "fwSaveField",
      "name": "fwSaveField",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered on Add/Save field button click from the field list items"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwDeleteField",
      "name": "fwDeleteField",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered on Delete field button click from the field list items"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwComposeNewField",
      "name": "fwComposeNewField",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when a new field type is dropped / added inside the fields area"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwRepositionField",
      "name": "fwRepositionField",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the position of a field is changed using drag and drop"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwExpandField",
      "name": "fwExpandField",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the field is expanded or collapsed"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwExplorePlan",
      "name": "fwExplorePlan",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the explore plans button is clicked for free plan users"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwSearchField",
      "name": "fwSearchField",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered on search"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwSaveWidgetFields",
      "name": "fwSaveWidgetFields",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered on saving the widget fields"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "forceRenderFields": {
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
        "text": "Method to force render the drag container's children containing all the added fields",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "searching",
      "methodName": "watchSearchHandler"
    }, {
      "propName": "isSavingCustomizeWidget",
      "methodName": "watchSaveCustomizeWidgetChangeHandler"
    }, {
      "propName": "formValues",
      "methodName": "watchFormValuesChangeHandler"
    }, {
      "propName": "productName",
      "methodName": "watchProductNameChangeHandler"
    }]; }
}
