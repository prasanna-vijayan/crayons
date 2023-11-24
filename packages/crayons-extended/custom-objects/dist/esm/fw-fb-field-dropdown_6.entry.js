import { r as registerInstance, c as createEvent, h, i as Host, g as getElement } from './index-f435cf58.js';
import { i as i18nText, d as deepCloneObject, f as hasCustomProperty, y as createUUID, w as getMaxLimitProperty, j as isUniqueField, k as formMapper } from './form-builder-utils-21bc18f0.js';
import { p as presetSchema } from './form-builder-preset-de47aadf.js';
import { b as addRTL, g as getFocusableChildren } from './index-1063dee9.js';
import { T as TranslationController } from './Translation-1d30aa87.js';
import './Translation-7ee0e3b3.js';
import './index-fb937839.js';

const fbFieldDropdownCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;max-width:70%;width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.fb-field-dropdown{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.fb-field-dropdown .fb-field-dropdown-label{width:100%;height:20px;font-size:12px;color:#475867;font-weight:600;display:block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fb-field-dropdown .fb-field-dropdown-list-container{width:100%;height:auto;-webkit-padding-before:4px;padding-block-start:4px;-webkit-box-sizing:border-box;box-sizing:border-box}.fb-field-dropdown .fb-field-dropdown-footer{width:100%;height:auto;-webkit-padding-start:32px;padding-inline-start:32px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.fb-field-dropdown .fb-field-dropdown-footer .fb-field-dropdown-warning-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fb-field-dependent{width:calc(100% - 50px)}.fb-field-dependent .fb-field-dropdown-label-dependent-field{font-size:14px;line-height:21px;background:#cfd7df;-webkit-padding-start:10px;padding-inline-start:10px;border-radius:4px;-webkit-margin-after:4px;margin-block-end:4px;color:#12344d;width:calc(100% + 24px)}.fb-field-dependent .spacing-bottom-1{-webkit-margin-before:0px;margin-block-start:0px}.fb-field-dependent .spacing-bottom-2{-webkit-margin-before:20px;margin-block-start:20px}.fb-field-dependent .spacing-bottom-3{-webkit-margin-before:40px;margin-block-start:40px}";

const FbFieldDropdown$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwChange = createEvent(this, "fwChange", 7);
    this.errorType = '';
    this.boolExceededChoiceLimit = false;
    /**
     * The db type used to determine the json to be used for CUSTOM_OBJECTS or CONVERSATION_PROPERTIES
     */
    this.productName = 'CUSTOM_OBJECTS';
    /**
     * flag to notify if an api call is in progress
     */
    this.isLoading = false;
    /**
     * variable to store the data source for all the choices
     */
    this.dataProvider = null;
    /**
     * property to show the errors on click of the save/add button from the parent
     */
    this.showErrors = false;
    /**
     * Disables all the options which can't be edited, reordered or deleted if set to true.
     */
    this.disabled = false;
    /**
     * Level Indicates the depth of current field
     * Starts from 1
     */
    this.level = null;
    /**
     * Flag indicates this field is dependent field
     */
    this.isDependentField = false;
    /**
     * Property parentId indicates the parent of current child dropdown
     */
    this.parentId = null;
    /**
     * Property indicates the level selected
     */
    this.dependentLevels = {};
    /**
     * Key press to allow user to use tab
     */
    this.enableKeyPress = false;
    /**
     * Series of Ids to render options
     */
    this.choiceIds = [];
    this.validate = () => {
      if (this.dataProvider && this.dataProvider.length > 0) {
        this.errorType = '';
        const strDuplicateErrorKey = i18nText('errors.duplicate');
        const arrChoices = deepCloneObject(this.dataProvider);
        let boolElementUpdated = false;
        const arrLookup = [];
        arrChoices.map((el) => {
          const strValue = el.value;
          if (!strValue || strValue === '') {
            this.errorType = i18nText('errors.formErrors');
            el.error = i18nText('errors.emptyChoice');
            boolElementUpdated = true;
          }
          else if (arrLookup.includes(strValue)) {
            this.errorType = strDuplicateErrorKey;
            el.error = strDuplicateErrorKey;
            boolElementUpdated = true;
          }
          else {
            if (hasCustomProperty(el, 'error')) {
              delete el.error;
              boolElementUpdated = true;
            }
            arrLookup.push(strValue);
          }
        });
        if (boolElementUpdated) {
          this.dataProvider = [...arrChoices];
        }
        this.validateMaximumChoiceLimits();
      }
      else {
        this.errorType = i18nText('errors.minimum');
      }
    };
    this.validateMaximumChoiceLimits = () => {
      const objMaxLimitChoices = getMaxLimitProperty(this.productName, 'maxDropdownChoices');
      this.boolExceededChoiceLimit =
        this.dataProvider && this.dataProvider.length >= objMaxLimitChoices.count
          ? true
          : false;
    };
    this.addNewChoiceHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      const objNewChoice = { value: '' };
      if (this.level) {
        objNewChoice['id'] = createUUID();
        objNewChoice['dependent_ids'] = { choice: [], field: [] };
      }
      this.dataProvider = [...this.dataProvider, objNewChoice];
      this.errorType = i18nText('errors.emptyChoice');
      this.validateMaximumChoiceLimits();
      this.fwChange.emit({
        type: 'ADD',
        errorType: this.errorType,
        value: [...this.dataProvider],
        parentId: this.parentId,
        level: this.level,
        choice: objNewChoice,
      });
    };
    this.deleteItemHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      if (this.disabled) {
        return;
      }
      const intDeleteIndex = event.detail.index;
      const isNewChoice = event.detail.isNewChoice;
      if (intDeleteIndex > -1 &&
        this.dataProvider &&
        intDeleteIndex < this.dataProvider.length) {
        const choice = this.dataProvider[intDeleteIndex];
        this.dataProvider = [
          ...this.dataProvider.slice(0, intDeleteIndex),
          ...this.dataProvider.slice(intDeleteIndex + 1),
        ];
        this.validate();
        if (!isNewChoice && (!this.errorType || this.errorType === '')) {
          this.errorType = i18nText('errors.deleteDropDownChoice');
        }
        this.fwChange.emit({
          type: 'DELETE',
          errorType: this.errorType,
          value: [...this.dataProvider],
          level: this.level,
          parentId: this.parentId,
          choice: choice,
        });
      }
    };
    /**
     * function to validate errors on name input field blur
     */
    this.choiceValueChangeHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      if (this.disabled) {
        return;
      }
      const intIndex = event.detail.index;
      const strValue = event.detail.value;
      if (strValue === '') {
        this.dataProvider[intIndex].error = i18nText('errors.emptyChoice');
      }
      this.dataProvider[intIndex].value = strValue;
      this.validate();
      this.fwChange.emit({
        type: 'VALUE_CHANGE',
        errorType: this.errorType,
        value: [...this.dataProvider],
        level: this.level,
      });
    };
    /**
     * function to reposition the index of the dropped element
     */
    this.elementDropHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      if (this.disabled) {
        return;
      }
      const objDetail = event.detail;
      const elFieldType = objDetail.droppedElement;
      const intDroppedIndex = objDetail.droppedIndex;
      if (objDetail.dragFromId === objDetail.dropToId &&
        elFieldType.index !== intDroppedIndex) {
        const arrFields = [...this.dataProvider];
        const objField = arrFields.splice(elFieldType.index, 1)[0];
        arrFields.splice(intDroppedIndex, 0, objField);
        const intLength = arrFields.length;
        for (let i1 = intDroppedIndex; i1 < intLength; i1++) {
          // Fix for drag container to re-render on drop to change the key
          arrFields[i1].repositionKey = createUUID();
        }
        this.dataProvider = [...arrFields];
        this.fwChange.emit({
          type: 'REPOSITION',
          errorType: this.errorType,
          value: [...this.dataProvider],
          level: this.level,
        });
      }
    };
    this.selectItemChoice = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      if (event.detail.id) {
        this.fwChange.emit({
          type: 'SELECT',
          level: this.level,
          index: event.detail.index,
          id: event.detail.id,
        });
      }
    };
  }
  async validateErrors() {
    this.validate();
  }
  watchShowErrorsChangeHandler() {
    this.validate();
  }
  componentWillLoad() {
    this.validate();
    if (this.errorType && this.errorType !== '') {
      this.fwChange.emit({
        type: 'VALUE_CHANGE',
        errorType: this.errorType,
        value: [...this.dataProvider],
        level: this.level,
      });
    }
  }
  renderNameEditorElement(dataItem, intIndex) {
    const hasRepositionIndex = hasCustomProperty(dataItem, 'repositionKey');
    const boolNewChoice = !hasCustomProperty(dataItem, 'id');
    const itemKey = hasRepositionIndex
      ? dataItem.repositionKey
      : `new_choice_${intIndex + 1}`;
    const levelId = this.dependentLevels[`level_${this.level}`];
    const itemSelected = dataItem.id === levelId;
    if (this.parentId && !this.choiceIds.includes(dataItem.id)) {
      return null;
    }
    return (h("fw-fb-field-dropdown-item", { key: itemKey, index: intIndex, dataProvider: dataItem, isNewChoice: boolNewChoice, disabled: this.disabled, isLoading: this.isLoading, showErrors: this.showErrors, isDependentField: this.isDependentField, itemSelected: itemSelected, enableKeyPress: this.enableKeyPress, onFwChange: this.choiceValueChangeHandler, onFwDelete: this.deleteItemHandler, onFwSelect: this.selectItemChoice, onFwAdd: this.addNewChoiceHandler }));
  }
  render() {
    const dpSource = this.dataProvider;
    const strBaseClassName = 'fb-field-dropdown';
    const dropdownElements = dpSource.length > 0
      ? dpSource
        .map((dataItem, index) => this.renderNameEditorElement(dataItem, index))
        .filter((item) => item)
      : null;
    const objMaxLimitChoices = getMaxLimitProperty(this.productName, 'maxDropdownChoices');
    const strExceedLimitChoicesWarning = this.boolExceededChoiceLimit
      ? i18nText(objMaxLimitChoices.message, {
        count: objMaxLimitChoices.count,
      })
      : '';
    const labelText = this.isDependentField
      ? `${i18nText('level')} ${this.level}`
      : i18nText('addChoices');
    const labelClass = this.isDependentField
      ? `${strBaseClassName}-label-dependent-field spacing-bottom-${this.level}`
      : `${strBaseClassName}-label`;
    const dropdownClass = this.isDependentField
      ? `${strBaseClassName} fb-field-dependent`
      : strBaseClassName;
    return (h(Host, { tabIndex: '-1' }, h("div", { class: dropdownClass }, h("label", { class: labelClass }, labelText), h("fw-drag-container", { id: 'dropdownElementsList', class: `${strBaseClassName}-list-container`, sortable: true, onFwDrop: this.elementDropHandler }, dropdownElements), h("div", { class: `${strBaseClassName}-footer` }, !this.disabled && !this.enableKeyPress && (h("fw-button", { id: 'addNewChoiceBtn', color: 'link', disabled: this.boolExceededChoiceLimit, onFwClick: this.addNewChoiceHandler }, i18nText('addChoice'))), this.boolExceededChoiceLimit && (h("label", { class: `${strBaseClassName}-warning-text` }, strExceedLimitChoicesWarning))))));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "showErrors": ["watchShowErrorsChangeHandler"]
  }; }
};
FbFieldDropdown$1.style = fbFieldDropdownCss;

const fbFieldDropdownItemCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.fb-field-dependent-dropdown-item{border:thin solid #cfd7df;-webkit-margin-after:unset !important;margin-block-end:unset !important;padding-block:8px;background-color:#fff}.fb-field-dependent-dropdown-item .fb-field-dropdown-item-delete-container{width:unset !important}.fb-field-dependent-dropdown-item .fb-field-dropdown-item-delete-container--not-deleteable{opacity:0 !important;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dropdown-item-selected{background-color:#e5f2fd}.fb-field-dropdown-item{width:calc(100% + 24px + 8px);height:auto;-webkit-margin-after:12px;margin-block-end:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex}.fb-field-dropdown-item .fb-field-dropdown-item-drag-container{width:24px;height:32px;-webkit-margin-end:8px;margin-inline-end:8px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;opacity:1;cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.fb-field-dropdown-item .fb-field-dropdown-item-drag-container--unsortable{opacity:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fb-field-dropdown-item .fb-field-dropdown-item-drag-container--disabled{opacity:0.4;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:not-allowed}.fb-field-dropdown-item .fb-field-dropdown-item-input-container{width:calc(100% - 24px - 24px - 8px - 8px);height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.fb-field-dropdown-item .fb-field-dropdown-item-input-container .fb-field-dropdown-item-required-input{width:100%}.fb-field-dropdown-item .fb-field-dropdown-item-delete-container{width:24px;height:32px;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;opacity:1;cursor:pointer;--fw-icon-color:#475867}.fb-field-dropdown-item .fb-field-dropdown-item-delete-container--disabled{--fw-icon-color:#475867;cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0.4}.fb-field-dropdown-item .fb-field-dropdown-item-delete-container:hover{--fw-icon-color:#447093}.fb-field-dropdown-item .fb-field-dropdown-item-delete-container:hover--disabled{--fw-icon-color:#475867}.fb-field-dropdown-item .fb-field-dropdown-item-delete-container:active,.fb-field-dropdown-item .fb-field-dropdown-item-delete-container:focus{--fw-icon-color:#12344d}.fb-field-dropdown-item .fb-field-dropdown-item-delete-container:active--disabled,.fb-field-dropdown-item .fb-field-dropdown-item-delete-container:focus--disabled{--fw-icon-color:#475867}";

const FbFieldDropdownItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwAdd = createEvent(this, "fwAdd", 7);
    this.fwDelete = createEvent(this, "fwDelete", 7);
    this.fwChange = createEvent(this, "fwChange", 7);
    this.fwSelect = createEvent(this, "fwSelect", 7);
    /**
     * flag to notify if an api call is in progress
     */
    this.isLoading = false;
    /**
     * variable to store the data source
     */
    this.dataProvider = null;
    /**
     * variable to determine if the element is sortable
     */
    this.sortable = true;
    /**
     * property to show the errors on click of the save/add button from the parent
     */
    this.showErrors = false;
    /**
     * Disables all the options which can't be edited, reordered or deleted if set to true.
     */
    this.disabled = false;
    /**
     * property to determine if this is a new choice or an existing choice
     */
    this.isNewChoice = false;
    /**
     * index attached inside the parent group component
     */
    this.index = -1;
    this.isDependentField = false;
    this.itemSelected = false;
    this.enableKeyPress = false;
    /**
     * function called on reorder button mousedown to enable the parent as draggable
     */
    this.startParentDragging = () => {
      if (!this.sortable || this.disabled) {
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
      if (this.divBaseElement) {
        if (value) {
          if (this.disabled) {
            return;
          }
          this.divBaseElement.setAttribute('draggable', 'true');
          this.host.setAttribute('draggable', 'true');
        }
        else {
          this.divBaseElement.removeAttribute('draggable');
          this.host.removeAttribute('draggable');
        }
      }
    };
    this.performLabelChange = (event, isBlur = false) => {
      var _a, _b, _c;
      event.stopImmediatePropagation();
      event.stopPropagation();
      if (this.disabled) {
        return;
      }
      const strUpdatedValue = !isBlur
        ? ((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.value) || ''
        : ((_c = (_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b['value']) === null || _c === void 0 ? void 0 : _c.trim()) || '';
      if (!strUpdatedValue ||
        strUpdatedValue.length === 0 ||
        strUpdatedValue !== this.dataProvider.value) {
        this.fwChange.emit({ index: this.index, value: strUpdatedValue });
      }
    };
    this.nameBlurHandler = (event) => {
      this.performLabelChange(event, true);
    };
    this.nameChangeHandler = (event) => {
      this.performLabelChange(event, false);
    };
    this.nameKeydownHandler = (event) => {
      var _a, _b, _c;
      const value = ((_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a['value']) === null || _b === void 0 ? void 0 : _b.trim()) || '';
      const keyEvent = (_c = event.detail) === null || _c === void 0 ? void 0 : _c['event'];
      if ((keyEvent === null || keyEvent === void 0 ? void 0 : keyEvent.key) === 'Tab' && value) {
        this.fwAdd.emit();
      }
    };
    this.deleteButtonClickHandler = (event) => {
      if (this.disabled) {
        return;
      }
      if (event.detail && event.detail > 1) {
        return;
      }
      this.fwDelete.emit({ index: this.index, isNewChoice: this.isNewChoice });
    };
    /**
     * function to convert the number to its ordinal number for the place holder options - eg: 1 - 1st, 2- 2nd
     */
    this.toOrdinalSuffix = (numSource) => {
      const int = parseInt(numSource), digits = [int % 10, int % 100], ordinals = ['st', 'nd', 'rd', 'th'], oPattern = [1, 2, 3, 4], tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
      return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
        ? int + ordinals[digits[0] - 1]
        : int + ordinals[3];
    };
    this.nameFocusHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.fwSelect.emit({
        index: this.index,
        id: this.dataProvider.id,
      });
    };
  }
  render() {
    const dpSource = this.dataProvider;
    if (!dpSource) {
      return null;
    }
    const strErrorMsg = hasCustomProperty(dpSource, 'error')
      ? dpSource.error
      : '';
    let showFieldNameError = this.showErrors && strErrorMsg && strErrorMsg !== '' ? true : false;
    // condition to display duplicate errors on input blur and show the empty messages on parent save click
    if (strErrorMsg === i18nText('errors.duplicate')) {
      showFieldNameError = true;
    }
    const strBaseClassName = 'fb-field-dropdown-item';
    const formattedInputPrompt = `${this.toOrdinalSuffix(this.index + 1).toString()} ${i18nText('choicePlaceholderSuffix')}`;
    const strInputPrompt = this.isDependentField
      ? i18nText('addChoice')
      : formattedInputPrompt;
    const strBaseDeleteClassName = `${strBaseClassName}-delete-container`;
    const strBaseDragClassName = `${strBaseClassName}-drag-container`;
    let strDeleteClassName = strBaseDeleteClassName;
    let strDragClassName = strBaseDragClassName;
    if (this.disabled) {
      strDragClassName += ` ${strBaseDragClassName}--disabled`;
      strDeleteClassName += ` ${strBaseDeleteClassName}--disabled`;
    }
    else if (!this.sortable) {
      strDragClassName += ` ${strBaseDragClassName}--unsortable`;
    }
    const itemSelectedClass = this.isDependentField && this.itemSelected
      ? 'dropdown-item-selected'
      : '';
    const dropdownItemClass = this.isDependentField
      ? `${strBaseClassName} fb-field-dependent-dropdown-item ${itemSelectedClass}`
      : strBaseClassName;
    return (h(Host, { tabIndex: '-1' }, h("div", { class: dropdownItemClass, ref: (el) => (this.divBaseElement = el), onDragEnd: this.stopParentDragging, onDrop: this.stopParentDragging }, h("div", { role: 'none', class: strDragClassName, onMouseDown: this.startParentDragging }, h("fw-icon", { size: 14, name: 'drag', color: '#475867' })), h("div", { class: `${strBaseClassName}-input-container` }, h("fw-input", { class: `${strBaseClassName}-content-required-input`, state: showFieldNameError ? 'error' : 'normal', errorText: strErrorMsg, placeholder: strInputPrompt, value: dpSource.value, disabled: this.disabled, onFwBlur: this.nameBlurHandler, onFwInput: this.nameChangeHandler, onFwFocus: this.nameFocusHandler, onFwInputKeyDown: this.nameKeydownHandler })), h("span", { class: strDeleteClassName, onClick: this.deleteButtonClickHandler }, h("fw-icon", { name: 'delete', size: 14 })))));
  }
  get host() { return getElement(this); }
};
FbFieldDropdownItem.style = fbFieldDropdownItemCss;

const fbFieldLookupCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.fb-field-lookup-root{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;gap:8px}.fb-field-lookup-root .fb-field-lookup-header-label{width:100%;font-size:16px;font-weight:600;color:#475867;display:block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fb-field-lookup-root .fb-field-lookup-relationship-description{width:100%;-webkit-margin-before:4px;margin-block-start:4px;font-size:12px;color:#183247;display:block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fb-field-lookup-root .fb-field-lookup-relationship-object-name{display:inline-block;font-weight:600}.fb-field-lookup-root .fb-field-lookup{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:20px}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-input{width:25%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-relationship-select-container{height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:35%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-relationship-select-container .fb-field-lookup-relationship-select{width:100%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-relationship-select-container .fb-field-lookup-relationship-select .fw-button-group__button--last{width:100%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-target-select-container{height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:40%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-target-select-container .fb-field-lookup-target-select{--fw-popover-max-height:262px;width:100%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-target-select-container .fb-field-lookup-target-select .fw-button-group__button--last{width:100%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-target-skeleton{--fw-skeleton-border-radius:4px;-webkit-padding-before:24px;padding-block-start:24px;min-width:33%;-ms-flex:2 1 0px;flex:2 1 0}";

const FbFieldDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwChange = createEvent(this, "fwChange", 7);
    this.targetObjectLabel = '';
    this.isNativeTargetObject = false;
    /**
     * The db type used to determine the json to be used for CUSTOM_OBJECTS or CONVERSATION_PROPERTIES
     */
    this.productName = 'CUSTOM_OBJECTS';
    /**
     * variable to store form values
     */
    this.formValues = null;
    /**
     * source object value
     */
    this.sourceObjectName = '';
    /**
     * array for target objects
     */
    this.targetObjects = null;
    /**
     * variable to store the data  for all the choices
     */
    this.dataResponse = null;
    /**
     * property to show the errors on click of the save/add button from the parent
     */
    this.showErrors = false;
    /**
     * Disables all the options which can't be edited, reordered or deleted if set to true.
     */
    this.disabled = false;
    /**
     * variable to store the selected relationship type
     */
    this.selectedRelationshipValue = '';
    /**
     * variable to store the selected target object
     */
    this.selectedTargetValue = '';
    this.isNewField = () => {
      if (hasCustomProperty(this.formValues, 'isNew') &&
        this.formValues['isNew'] === true) {
        return true;
      }
      return false;
    };
    this.updateIsNativeObject = (objectId) => {
      var _a;
      if (this.targetObjects && objectId) {
        const objSelectedTargetEntity = (_a = this.targetObjects.filter((el) => el.value === objectId)) === null || _a === void 0 ? void 0 : _a[0];
        this.targetObjectLabel = (objSelectedTargetEntity === null || objSelectedTargetEntity === void 0 ? void 0 : objSelectedTargetEntity.text) || '';
        this.isNativeTargetObject = (objSelectedTargetEntity === null || objSelectedTargetEntity === void 0 ? void 0 : objSelectedTargetEntity.isNative) || false;
      }
    };
    this.relationshipChangeHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      if (this.disabled) {
        return;
      }
      this.dataResponse.relationship = event.detail.value;
      this.selectedRelationshipValue = event.detail.value;
      this.fwChange.emit({ value: deepCloneObject(this.dataResponse) });
    };
    this.targetObjectChangeHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      if (this.disabled) {
        return;
      }
      this.updateIsNativeObject(event.detail.value);
      this.dataResponse.target = event.detail.value;
      this.selectedTargetValue = event.detail.value;
      this.fwChange.emit({ value: deepCloneObject(this.dataResponse) });
    };
  }
  watchValuesChangeHandler() {
    var _a;
    const arrRelationshipTypes = presetSchema.relationshipTypes;
    let relationshipValue = '';
    if (this.formValues && !this.isNewField()) {
      const relTargetId = hasCustomProperty(this.formValues, 'related_entity_id')
        ? this.formValues.related_entity_id
        : '';
      this.updateIsNativeObject(relTargetId);
      this.dataResponse.target = relTargetId;
      this.selectedTargetValue = relTargetId;
      const boolOneToOne = isUniqueField(this.formValues);
      const intLength = arrRelationshipTypes.length;
      for (let i1 = 0; i1 < intLength; i1++) {
        const strRelationshipTypeValue = arrRelationshipTypes[i1].value;
        if (boolOneToOne && strRelationshipTypeValue === 'one_to_one') {
          relationshipValue = strRelationshipTypeValue;
          break;
        }
        else if (strRelationshipTypeValue !== 'one_to_one') {
          relationshipValue = strRelationshipTypeValue;
        }
      }
      this.dataResponse.relationship = relationshipValue;
      this.selectedRelationshipValue = relationshipValue;
    }
    else if (this.formValues && arrRelationshipTypes) {
      relationshipValue = (_a = arrRelationshipTypes[0]) === null || _a === void 0 ? void 0 : _a.value;
      this.dataResponse.relationship = relationshipValue;
      this.selectedRelationshipValue = relationshipValue;
    }
  }
  componentWillLoad() {
    if (!this.dataResponse) {
      this.dataResponse = { relationship: '', target: '' };
    }
    if (!this.i18RelationshipType) {
      this.i18RelationshipType = [];
      const arrRelationshipTypes = presetSchema.relationshipTypes;
      const intLength = arrRelationshipTypes.length;
      for (let i1 = 0; i1 < intLength; i1++) {
        this.i18RelationshipType = [
          ...this.i18RelationshipType,
          Object.assign(Object.assign({}, arrRelationshipTypes[i1]), { text: i18nText(arrRelationshipTypes[i1].text), subText: i18nText(arrRelationshipTypes[i1].subText) }),
        ];
      }
    }
    this.watchValuesChangeHandler();
  }
  render() {
    const strBaseClassName = 'fb-field-lookup';
    const boolNewField = this.isNewField();
    const strTargetState = this.showErrors && !this.selectedTargetValue ? 'error' : 'normal';
    const strRelationshipState = this.showErrors && !this.selectedRelationshipValue ? 'error' : 'normal';
    let strDescription = '';
    if (this.selectedRelationshipValue &&
      this.selectedRelationshipValue !== '' &&
      this.targetObjectLabel &&
      this.targetObjectLabel !== '') {
      const objRelationshipDesc = presetSchema.relationshipDescriptionKeys[this.selectedRelationshipValue];
      if (objRelationshipDesc) {
        const strDescKey = this.isNativeTargetObject
          ? objRelationshipDesc.native
          : objRelationshipDesc.co;
        strDescription = i18nText(strDescKey, {
          source: this.sourceObjectName,
          target: this.targetObjectLabel,
        });
      }
    }
    const boolShowDescription = strDescription && strDescription !== '' ? true : false;
    const objProductPreset = formMapper[this.productName];
    const objProductPresetConfig = objProductPreset === null || objProductPreset === void 0 ? void 0 : objProductPreset.config;
    const boolShowRelationshipTypeSelect = objProductPresetConfig === null || objProductPresetConfig === void 0 ? void 0 : objProductPresetConfig.boolShowRelationshipTypeSelect;
    return (h(Host, { tabIndex: '-1' }, h("div", { class: `${strBaseClassName}-root` }, h("label", { class: `${strBaseClassName}-header-label` }, i18nText('lookupAssociationHeader')), h("div", { class: strBaseClassName }, h("fw-input", { class: `${strBaseClassName}-input`, label: i18nText('lookupSourceObject'), value: this.sourceObjectName, disabled: true }), boolShowRelationshipTypeSelect ? (h("div", { class: `${strBaseClassName}-relationship-select-container` }, h("fw-select", { readonly: true, required: true, state: strRelationshipState, class: `${strBaseClassName}-relationship-select`, placeholder: i18nText('lookupRelationshipPlaceholder'), label: i18nText('lookupRelationshipLabel'), errorText: i18nText('errors.emptyRelationshipType'), disabled: !boolNewField || this.disabled, options: this.i18RelationshipType, value: this.selectedRelationshipValue, onFwChange: this.relationshipChangeHandler }))) : (h("div", null)), h("div", { class: `${strBaseClassName}-target-select-container` }, h("fw-select", { required: true, state: strTargetState, class: `${strBaseClassName}-target-select`, placeholder: i18nText('lookupTargetPlaceholder'), label: i18nText('lookupTargetLabel'), errorText: i18nText('errors.emptyTargetObject'), disabled: !boolNewField || this.disabled, value: this.selectedTargetValue, options: this.targetObjects, onFwChange: this.targetObjectChangeHandler }))), boolShowDescription && (h("span", { class: `${strBaseClassName}-relationship-description`, innerHTML: strDescription })))));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "formValues": ["watchValuesChangeHandler"]
  }; }
};
FbFieldDropdown.style = fbFieldLookupCss;

const labelCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{--fw-label-padding-vertical:5px;--fw-label-padding-horizontal:8px}.label{color:#6f7c87;border:1px solid #dadfe3;background-color:#fff;font-weight:600;line-height:20px;font-size:12px;padding-block:var(--fw-label-padding-vertical);padding-inline:var(--fw-label-padding-horizontal);display:inline-block;border-radius:4px}.label--blue{background-color:#e5f2fd;color:#2c5cc5;border:1px solid #bbdcfe}.label--red{background-color:#ffecf0;color:#d72d30;border:1px solid #ffd0d6}.label--green{background-color:#e0f5f1;color:#00795b;border:1px solid #b4e5da}.label--yellow{background-color:#fef1e1;color:#e86f25;border:1px solid #fedcb3}.label--grey{background-color:#ebeff3;color:#475867;border:none}";

const Label = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Theme based on which the label is styled.
     */
    this.color = 'normal';
    /**
     * Display text in the label.
     */
    this.value = '';
  }
  render() {
    return (h("span", { class: 'label label--' + this.color.toLowerCase() }, this.value));
  }
};
Label.style = labelCss;

const modalCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.modal-overlay{height:100vh;width:100vw;position:fixed;inset-block-start:0;inset-inline-end:0;inset-block-end:0;inset-inline-start:0;display:none;z-index:990;background-color:rgba(18, 52, 77, 0.5);-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all 0.3s linear;transition:all 0.3s linear}.modal{position:relative;display:-ms-flexbox;display:flex;max-height:70vh;background:#fff;-webkit-box-shadow:0px 2px 18px rgba(18, 52, 77, 0.2);box-shadow:0px 2px 18px rgba(18, 52, 77, 0.2);border-radius:4px;z-index:999;-webkit-animation:\"modal-entry\" 0.5s 1;animation:\"modal-entry\" 0.5s 1;overflow-wrap:anywhere;word-break:break-word;white-space:normal}.modal .modal-container{position:relative;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.modal .modal-container .content{-webkit-padding-after:32px;padding-block-end:32px;padding-inline:32px;-webkit-padding-before:0px;padding-block-start:0px;overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box}.modal .close-btn{background-color:transparent;background-image:none;border:1px solid transparent;color:#264966;padding-inline:6px;padding-block:4px;min-width:16px;height:24px;position:absolute;inset-block-start:8px;inset-inline-end:8px;-webkit-transition:all 0.3s;transition:all 0.3s;z-index:1}.modal .close-btn:hover,.modal .close-btn:focus{background-color:#ebeff3;border-radius:4px;border-color:#ebeff3;cursor:pointer}.standard{width:512px}.small{width:424px}.large{width:800px}.modal-overlay.slider{-ms-flex-pack:end;justify-content:flex-end}.modal-overlay.slider .modal{height:100vh;max-height:100vh;border-radius:0px;width:600px}:host(:not([dir=\"rtl\"])) .modal-overlay.slider .modal,:host([dir=\"ltr\"]) .modal-overlay.slider .modal{-webkit-animation:\"modal-entry-right-ltr\" 0.5s 1;animation:\"modal-entry-right-ltr\" 0.5s 1}:host([dir=\"rtl\"]) .modal-overlay.slider .modal{-webkit-animation:\"modal-entry-right-rtl\" 0.5s 1;animation:\"modal-entry-right-rtl\" 0.5s 1}.modal-overlay.slider .modal .close-btn{height:24px;width:24px;-webkit-box-sizing:border-box;box-sizing:border-box;inset-block-start:0px;inset-inline-end:600px;background-color:#12344d;border-end-start-radius:2px;border-end-end-radius:0px;border-start-end-radius:0px;border-start-start-radius:2px;padding:0px;margin:0px;line-height:24px;text-align:center}.modal-overlay.slider .modal .close-btn:hover,.modal-overlay.slider .modal .close-btn:focus,.modal-overlay.slider .modal .close-btn:focus-visible{background-color:#12344d;border-end-start-radius:2px;border-end-end-radius:0px;border-start-end-radius:0px;border-start-start-radius:2px;border-color:#12344d;outline:0px}.modal-overlay.slider .modal .close-btn:focus,.modal-overlay.slider .modal .close-btn:focus-visible{border:1px solid #2c5cc5;-webkit-box-shadow:#2c5cc5 0px 0px 0px 1px;box-shadow:#2c5cc5 0px 0px 0px 1px}.modal-overlay.slider .modal .close-btn fw-icon{height:12px;width:12px}.modal-overlay.slider .modal.small,.modal-overlay.slider .modal.standard,.modal-overlay.slider .modal.large{width:600px}.visible{display:-ms-flexbox;display:flex}@-webkit-keyframes modal-entry{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes modal-entry{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes modal-entry-right-ltr-ltr{0%{-webkit-transform:translateX(calc(100% - 520px));transform:translateX(calc(100% - 520px))}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes modal-entry-right-ltr-ltr{0%{-webkit-transform:translateX(calc(100% - 520px));transform:translateX(calc(100% - 520px))}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes modal-entry-right-ltr-rtl{0%{-webkit-transform:translateX(calc(-1*(100% - 520px)));transform:translateX(calc(-1*(100% - 520px)))}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes modal-entry-right-ltr-rtl{0%{-webkit-transform:translateX(calc(-1*(100% - 520px)));transform:translateX(calc(-1*(100% - 520px)))}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes modal-entry-right-rtl-ltr{0%{-webkit-transform:translateX(calc(-1*(100% - 520px)));transform:translateX(calc(-1*(100% - 520px)))}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes modal-entry-right-rtl-ltr{0%{-webkit-transform:translateX(calc(-1*(100% - 520px)));transform:translateX(calc(-1*(100% - 520px)))}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes modal-entry-right-rtl-rtl{0%{-webkit-transform:translateX(calc(-1*(-1*(100% - 520px))));transform:translateX(calc(-1*(-1*(100% - 520px))))}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes modal-entry-right-rtl-rtl{0%{-webkit-transform:translateX(calc(-1*(-1*(100% - 520px))));transform:translateX(calc(-1*(-1*(100% - 520px))))}100%{-webkit-transform:translateX(0);transform:translateX(0)}}";

const Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwSubmit = createEvent(this, "fwSubmit", 7);
    this.fwOpen = createEvent(this, "fwOpen", 7);
    this.fwClose = createEvent(this, "fwClose", 7);
    /**
     * Property to add or remove the top right close icon button
     */
    this.hasCloseIconButton = true;
    /**
     * The icon to be displayed with the title
     */
    this.icon = '';
    /**
     * Size of the modal
     */
    this.size = 'standard';
    /**
     * The text for the submit button
     */
    //@i18n({ keyName: 'modal.ok' })
    this.submitText = '';
    /**
     * The text for the cancel button
     */
    //@i18n({ keyName: 'modal.cancel' })
    this.cancelText = '';
    /**
     * Default state of submit button
     */
    this.submitDisabled = false;
    /**
     * The color of submit button
     */
    this.submitColor = 'primary';
    /**
     * Hide footer for the modal
     */
    this.hideFooter = false;
    /**
     * Convert modal to slider
     */
    this.slider = false;
    /**
     * Toggle the visibility of the modal
     */
    this.isOpen = false;
    /**
     * private
     * Modal container ref
     */
    this.modalContainer = null;
    /**
     * private
     * Handler to run on modal container opening
     */
    this.modalContainerHandler = null;
    /**
     * private
     * Modal first focus element
     */
    this.firstFocusableElement = null;
    /**
     * private
     * Handler to first focusable element. Focuses last element on tab for focus locking.
     */
    this.firstFocusableElementHandler = null;
    /**
     * private
     * Modal last focus element
     */
    this.lastFocusableElement = null;
    /**
     * private
     * Handler for last focusable element. Focus first element on shift+tab for focus locking.
     */
    this.lastFocusableElementHandler = null;
    /**
     * private
     * Modal element to focus on open
     */
    this.modalOpenFocusElement = null;
    /**
     * private
     * flag to add events to elements only on initial modal load
     */
    this.accessibilityAdded = false;
    /**
     * private
     * escape key handler
     */
    this.escapeHandler = null;
    /**
     * private
     * styleVariation styles that vary in normal and slider variations
     */
    this.styleVariation = {
      closeColor: {
        modal: '#475867',
        slider: '#FFFFFF',
      },
      closeSize: {
        modal: 10,
        slider: 12,
      },
      closeName: {
        modal: 'cross',
        slider: 'cross-big',
      },
    };
  }
  connectedCallback() {
    addRTL(this.el);
  }
  /**
   * lifecycle event, called once just after the component is first connected to the DOM
   */
  componentWillLoad() {
    if (!this.modalTitle) {
      this.modalTitle = this.el.querySelector('fw-modal-title');
    }
    if (!this.modalFooter) {
      this.modalFooter = this.el.querySelector('fw-modal-footer');
      if (this.modalFooter) {
        this.modalFooter.submit = this.submit.bind(this);
        this.modalFooter.close = this.close.bind(this);
      }
    }
    if (!this.modalContent) {
      this.modalContent = this.el.querySelector('fw-modal-content');
    }
    if (this.hideFooter && this.modalFooter) {
      this.modalFooter.style.display = 'none';
    }
    if (!this.modalContent && (this.modalTitle || this.modalFooter)) {
      /**
       * Error that occurs when fw-modal-header or fw-modal-footer is used without
       * fw-modal-content component. If this not handled, the content that goes inside
       * fw-modal-content would have fw-modal-header or fw-modal-footer.
       * This would lead to unexpected results such as header or footer having padding and scroll.
       */
      throw new Error('Composition Error: fw-modal component must have fw-modal-content component when \
         either fw-modal-header or fw-modal-footer components are used for modal composition');
    }
  }
  componentDidLoad() {
    if (this.isOpen && !this.accessibilityAdded) {
      document.body.style.overflow = 'hidden';
      this.addAccesibilityEvents();
    }
  }
  disconnectedCallback() {
    if (this.isOpen) {
      document.body.style.overflow = 'auto';
      this.removeAccesibilityEvents();
    }
  }
  visibilityChange(open) {
    if (!open) {
      document.body.style.overflow = 'auto';
      this.removeAccesibilityEvents();
      this.fwClose.emit();
    }
    else {
      document.body.style.overflow = 'hidden';
      this.addAccesibilityEvents();
      this.fwOpen.emit();
    }
  }
  footerVisibilityChange(hideFooter) {
    if (this.modalFooter) {
      if (hideFooter) {
        this.modalFooter.style.display = 'none';
      }
      else {
        this.modalFooter.style.display = 'block';
      }
    }
  }
  /**
   * Method available from the component to perform close action on the modal
   * @returns promise that resolves to true
   */
  async close() {
    this.isOpen = false;
    return true;
  }
  /**
   * Method available from the component to perform open action on the modal
   * @returns promise that resolves to true
   */
  async open() {
    this.isOpen = true;
    return true;
  }
  /**
   * private submit
   */
  submit() {
    this.fwSubmit.emit();
  }
  /**
   * Adds accesibility related events to the component.
   * Major actions would be to focus-lock inside modal and to focus on close button when opening the component.
   */
  addAccesibilityEvents() {
    var _a, _b, _c;
    if (!this.accessibilityAdded ||
      !((_a = this.firstFocusableElement) === null || _a === void 0 ? void 0 : _a.parentNode) ||
      !((_b = this.modalOpenFocusElement) === null || _b === void 0 ? void 0 : _b.parentNode) ||
      !((_c = this.lastFocusableElement) === null || _c === void 0 ? void 0 : _c.parentNode)) {
      this.modalContainerHandler &&
        this.modalContainer.removeEventListener('animationend', this.modalContainerHandler);
      this.modalContainerHandler = (() => {
        this.firstFocusableElementHandler &&
          this.firstFocusableElement.removeEventListener('keydown', this.firstFocusableElementHandler);
        this.lastFocusableElementHandler &&
          this.lastFocusableElement.removeEventListener('keydown', this.lastFocusableElementHandler);
        /**
         * Focus trapping inside Modal. Below function gets all focusable elements from the modal.
         * These include elements inside shadow dom too.
         */
        const focusableElements = getFocusableChildren(this.el);
        if (focusableElements.length) {
          this.firstFocusableElement = focusableElements[0];
          this.lastFocusableElement =
            focusableElements[focusableElements.length - 1];
          this.modalOpenFocusElement =
            focusableElements.length > 1 &&
              this.firstFocusableElement.classList.contains('close-btn')
              ? focusableElements[1]
              : this.firstFocusableElement;
          this.lastFocusableElementHandler = ((e) => {
            if (!e.shiftKey && e.keyCode === 9) {
              e.preventDefault();
              this.focusElement(this.firstFocusableElement);
            }
          }).bind(this);
          this.firstFocusableElementHandler = ((e) => {
            if (e.shiftKey && e.keyCode === 9) {
              e.preventDefault();
              this.focusElement(this.lastFocusableElement);
            }
          }).bind(this);
          this.lastFocusableElement.addEventListener('keydown', this.lastFocusableElementHandler);
          this.firstFocusableElement.addEventListener('keydown', this.firstFocusableElementHandler);
        }
        if (this.isOpen && this.modalOpenFocusElement) {
          this.focusElement(this.modalOpenFocusElement);
        }
      }).bind(this);
      this.modalContainer &&
        this.modalContainer.addEventListener('animationend', this.modalContainerHandler);
      this.accessibilityAdded = true;
    }
    this.escapeHandler = ((e) => {
      if (e.keyCode === 27) {
        this.isOpen = false;
      }
    }).bind(this);
    document.addEventListener('keydown', this.escapeHandler);
  }
  /**
   * Removes accesibility related events bound to the document.
   */
  removeAccesibilityEvents() {
    if (this.escapeHandler) {
      document.removeEventListener('keydown', this.escapeHandler);
      this.escapeHandler = null;
    }
  }
  /**
   * @param element element to focus on
   */
  focusElement(element) {
    try {
      if (element.setFocus) {
        element.setFocus();
      }
      else {
        element.focus();
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  /**
   * Renders Icon in Modal header.
   * @returns {JSX.Element}
   */
  renderIcon() {
    return h("fw-icon", { class: 'icon', name: this.icon, size: 16 });
  }
  /**
   * Renders title text and description in modal header.
   * @returns {JSX.Element}
   */
  renderTitle() {
    return (h("fw-modal-title", { icon: this.icon, titleText: this.titleText, description: this.description }));
  }
  /**
   * renders the slot content in the modal.
   * @returns {JSX.Element}
   */
  renderContent() {
    return (h("fw-modal-content", null, h("slot", null)));
  }
  /**
   * renders the default footer in the modal
   * @returns {JSX.Element}
   */
  renderFooter() {
    return (h("fw-modal-footer", { submitText: this.submitText || TranslationController.t('modal.ok'), cancelText: this.cancelText || TranslationController.t('modal.cancel'), submitDisabled: this.submitDisabled, submitColor: this.submitColor, submit: this.submit.bind(this), close: this.close.bind(this), style: { display: this.hideFooter ? 'none' : 'block' } }));
  }
  /**
   * renders either default modal content based on attributes or renders the modal child components like
   * modal-title, modal-content and modal-footer components.
   * @returns {JSX.Element}
   */
  render() {
    const variation = this.styleVariation;
    return (h("div", { class: {
        'modal-overlay': true,
        'visible': this.isOpen,
        'slider': this.slider,
      } }, h("div", { class: { modal: true, [this.size]: true }, "aria-modal": 'true', ref: (el) => (this.modalContainer = el) }, this.hasCloseIconButton && (h("button", { class: 'close-btn', onClick: () => this.close() }, h("fw-icon", { name: this.slider
        ? variation.closeName.slider
        : variation.closeName.modal, library: 'system', color: this.slider
        ? variation.closeColor.slider
        : variation.closeColor.modal, size: this.slider
        ? variation.closeSize.slider
        : variation.closeSize.modal }))), h("div", { class: 'modal-container' }, this.modalTitle ? '' : this.titleText ? this.renderTitle() : '', this.modalContent ? h("slot", null) : this.renderContent(), this.modalFooter ? '' : this.renderFooter()))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "isOpen": ["visibilityChange"],
    "hideFooter": ["footerVisibilityChange"]
  }; }
};
Modal.style = modalCss;

const toggleCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}*,::after,::before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.toggle-switch{position:relative;display:inline-block}.toggle-switch.small{width:28px;height:12px}.toggle-switch.medium{width:36px;height:16px}.toggle-switch.large{width:44px;height:20px}@media screen and (prefers-reduced-motion: reduce){.toggle-switch .slider{-webkit-transition:none;transition:none}}.toggle-switch .slider{position:absolute;cursor:pointer;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;border-radius:34px;background:#647a8e}@media screen and (prefers-reduced-motion: reduce){.toggle-switch .before{-webkit-transition:none;transition:none}}.toggle-switch .before{position:absolute;content:\"\";inset-inline-start:0;inset-block-end:-2px;border:solid 1px #647a8e;border-radius:50%;-webkit-box-shadow:0 1px 1px 0 rgba(0, 0, 0, 0.23);box-shadow:0 1px 1px 0 rgba(0, 0, 0, 0.23);background-color:#fff;-webkit-transition-property:transform;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:0.2s;transition-duration:0.2s;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.toggle-switch .before:hover,.toggle-switch .before:focus{-webkit-box-shadow:0 0 4px 4px rgba(87, 108, 125, 0.3);box-shadow:0 0 4px 4px rgba(87, 108, 125, 0.3)}.toggle-switch .slider.small{width:28px;height:12px}.toggle-switch .slider.small .before{width:16px;height:16px}.toggle-switch .slider.small .before fw-icon{-webkit-transform:scale(0.375);transform:scale(0.375)}.toggle-switch .slider.small .before fw-icon.checked{-webkit-transform:scale(0.5);transform:scale(0.5)}.toggle-switch .slider.medium{width:36px;height:16px}.toggle-switch .slider.medium .before{width:20px;height:20px}.toggle-switch .slider.medium .before fw-icon{-webkit-transform:scale(0.5);transform:scale(0.5)}.toggle-switch .slider.medium .before fw-icon.checked{-webkit-transform:scale(0.66);transform:scale(0.66)}.toggle-switch .slider.large{width:44px;height:20px}.toggle-switch .slider.large .before{width:24px;height:24px}.toggle-switch .slider.large .before fw-icon{-webkit-transform:scale(0.66);transform:scale(0.66)}.toggle-switch .slider.large .before fw-icon.checked{-webkit-transform:scale(0.83);transform:scale(0.83)}.toggle-switch input{display:none}.toggle-switch input:checked+.slider{background-color:#2c5cc5}.toggle-switch input:checked+.slider .before{border:solid 1px #2c5cc5}.toggle-switch input:checked+.slider .before:hover,.toggle-switch input:checked+.slider .before:focus{-webkit-box-shadow:0 0 4px 4px rgba(40, 61, 165, 0.3);box-shadow:0 0 4px 4px rgba(40, 61, 165, 0.3)}:host(:not([dir=\"rtl\"])) .toggle-switch input:checked+.slider.small .before,:host([dir=\"ltr\"]) .toggle-switch input:checked+.slider.small .before{-webkit-transform:translateX(12px);-ms-transform:translateX(12px);transform:translateX(12px)}:host([dir=\"rtl\"]) .toggle-switch input:checked+.slider.small .before{-webkit-transform:translateX(-12px);-ms-transform:translateX(-12px);transform:translateX(-12px)}:host(:not([dir=\"rtl\"])) .toggle-switch input:checked+.slider.medium .before,:host([dir=\"ltr\"]) .toggle-switch input:checked+.slider.medium .before{-webkit-transform:translateX(16px);-ms-transform:translateX(16px);transform:translateX(16px)}:host([dir=\"rtl\"]) .toggle-switch input:checked+.slider.medium .before{-webkit-transform:translateX(-16px);-ms-transform:translateX(-16px);transform:translateX(-16px)}:host(:not([dir=\"rtl\"])) .toggle-switch input:checked+.slider.large .before,:host([dir=\"ltr\"]) .toggle-switch input:checked+.slider.large .before{-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px)}:host([dir=\"rtl\"]) .toggle-switch input:checked+.slider.large .before{-webkit-transform:translateX(-20px);-ms-transform:translateX(-20px);transform:translateX(-20px)}.toggle-switch input:disabled+.slider{opacity:0.4;cursor:not-allowed}";

const Toggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwChange = createEvent(this, "fwChange", 7);
    /**
     * Sets the selected state as the default state. If the attribute’s value is undefined, the value is set to false.
     */
    this.checked = false;
    /**
     * Size of the input control.
     */
    this.size = 'medium';
    /**
     * Name of the component, saved as part of the form data.
     */
    this.name = '';
    /**
     * Specifies whether to disable the control on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Specifies whether to show the check and cancel icons on toggle button. If the attribute’s value is undefined, the value is set to true.
     */
    this.showIcon = true;
    /**
     * Label for the component, that can be used by screen readers.
     */
    this.label = '';
    this.toggle = () => {
      if (!this.disabled) {
        this.checked = !this.checked;
      }
    };
  }
  handleKeyUp(ev) {
    if (ev.code === 'Space' || ev.code === 'Enter') {
      this.toggle();
    }
  }
  handleKeyDown(ev) {
    if (ev.code === 'Space' || ev.code === 'Enter') {
      ev.preventDefault();
    }
  }
  watchHandler(newValue) {
    this.fwChange.emit({ checked: newValue });
  }
  connectedCallback() {
    addRTL(this.host);
  }
  render() {
    const toggleSize = ['small', 'medium', 'large'].includes(this.size)
      ? this.size
      : 'medium';
    return (h(Host, { onClick: () => this.toggle(), tabindex: '0', role: 'switch', "aria-disabled": this.disabled ? 'true' : 'false', "aria-checked": this.checked ? 'true' : 'false', "aria-label": this.label }, h("div", { class: {
        'toggle-switch': true,
        [toggleSize]: true,
      } }, h("input", { name: this.name, type: 'checkbox', disabled: this.disabled, checked: this.checked, class: 'checkboxClass' }), h("span", { class: {
        slider: true,
        [toggleSize]: true,
      } }, h("span", { class: 'before' }, this.showIcon && (h("fw-icon", { color: this.checked ? '#2c5cc5' : '#647a8e', name: this.checked ? 'check' : 'cross', class: { checked: this.checked }, library: 'system' })))))));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "checked": ["watchHandler"]
  }; }
};
Toggle.style = toggleCss;

export { FbFieldDropdown$1 as fw_fb_field_dropdown, FbFieldDropdownItem as fw_fb_field_dropdown_item, FbFieldDropdown as fw_fb_field_lookup, Label as fw_label, Modal as fw_modal, Toggle as fw_toggle };
