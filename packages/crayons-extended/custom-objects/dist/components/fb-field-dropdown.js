import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { i as i18nText, d as deepCloneObject, f as hasCustomProperty, l as createUUID, m as getMaxLimitProperty } from './form-builder-utils.js';
import { d as defineCustomElement$6 } from './button.js';
import { d as defineCustomElement$5 } from './drag-container.js';
import { d as defineCustomElement$4 } from './fb-field-dropdown-item.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './input.js';
import { d as defineCustomElement$1 } from './spinner.js';

const fbFieldDropdownCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;max-width:70%;width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.fb-field-dropdown{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.fb-field-dropdown .fb-field-dropdown-label{width:100%;height:20px;font-size:12px;color:#475867;font-weight:600;display:block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fb-field-dropdown .fb-field-dropdown-list-container{width:100%;height:auto;-webkit-padding-before:4px;padding-block-start:4px;-webkit-box-sizing:border-box;box-sizing:border-box}.fb-field-dropdown .fb-field-dropdown-footer{width:100%;height:auto;-webkit-padding-start:32px;padding-inline-start:32px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.fb-field-dropdown .fb-field-dropdown-footer .fb-field-dropdown-warning-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fb-field-dependent{width:calc(100% - 50px)}.fb-field-dependent .fb-field-dropdown-label-dependent-field{font-size:14px;line-height:21px;background:#cfd7df;-webkit-padding-start:10px;padding-inline-start:10px;border-radius:4px;-webkit-margin-after:4px;margin-block-end:4px;color:#12344d;width:calc(100% + 24px)}.fb-field-dependent .spacing-bottom-1{-webkit-margin-before:0px;margin-block-start:0px}.fb-field-dependent .spacing-bottom-2{-webkit-margin-before:20px;margin-block-start:20px}.fb-field-dependent .spacing-bottom-3{-webkit-margin-before:40px;margin-block-start:40px}";

const FbFieldDropdown = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  get host() { return this; }
  static get watchers() { return {
    "showErrors": ["watchShowErrorsChangeHandler"]
  }; }
  static get style() { return fbFieldDropdownCss; }
}, [1, "fw-fb-field-dropdown", {
    "productName": [1, "product-name"],
    "isLoading": [1028, "is-loading"],
    "dataProvider": [1032, "data-provider"],
    "showErrors": [1028, "show-errors"],
    "disabled": [4],
    "level": [8],
    "isDependentField": [4, "is-dependent-field"],
    "parentId": [8, "parent-id"],
    "dependentLevels": [16],
    "enableKeyPress": [4, "enable-key-press"],
    "choiceIds": [16],
    "boolExceededChoiceLimit": [32],
    "validateErrors": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-fb-field-dropdown", "fw-button", "fw-drag-container", "fw-fb-field-dropdown-item", "fw-icon", "fw-input", "fw-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-fb-field-dropdown":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FbFieldDropdown);
      }
      break;
    case "fw-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "fw-drag-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "fw-fb-field-dropdown-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { FbFieldDropdown as F, defineCustomElement as d };
