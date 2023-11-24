import { Component, Element, Prop, h, Host, Event, Method, Watch, State, } from '@stencil/core';
import { createUUID, deepCloneObject, getMaxLimitProperty, hasCustomProperty, i18nText, } from '../utils/form-builder-utils';
export class FbFieldDropdown {
  constructor() {
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
    return (h(Host, { tabIndex: '-1' },
      h("div", { class: dropdownClass },
        h("label", { class: labelClass }, labelText),
        h("fw-drag-container", { id: 'dropdownElementsList', class: `${strBaseClassName}-list-container`, sortable: true, onFwDrop: this.elementDropHandler }, dropdownElements),
        h("div", { class: `${strBaseClassName}-footer` },
          !this.disabled && !this.enableKeyPress && (h("fw-button", { id: 'addNewChoiceBtn', color: 'link', disabled: this.boolExceededChoiceLimit, onFwClick: this.addNewChoiceHandler }, i18nText('addChoice'))),
          this.boolExceededChoiceLimit && (h("label", { class: `${strBaseClassName}-warning-text` }, strExceedLimitChoicesWarning))))));
  }
  static get is() { return "fw-fb-field-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["fb-field-dropdown.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["fb-field-dropdown.css"]
  }; }
  static get properties() { return {
    "productName": {
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
        "text": "The db type used to determine the json to be used for CUSTOM_OBJECTS or CONVERSATION_PROPERTIES"
      },
      "attribute": "product-name",
      "reflect": false,
      "defaultValue": "'CUSTOM_OBJECTS'"
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
    "dataProvider": {
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
        "text": "variable to store the data source for all the choices"
      },
      "attribute": "data-provider",
      "reflect": false,
      "defaultValue": "null"
    },
    "showErrors": {
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
        "text": "property to show the errors on click of the save/add button from the parent"
      },
      "attribute": "show-errors",
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
        "text": "Disables all the options which can't be edited, reordered or deleted if set to true."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "level": {
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
        "text": "Level Indicates the depth of current field\nStarts from 1"
      },
      "attribute": "level",
      "reflect": false,
      "defaultValue": "null"
    },
    "isDependentField": {
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
        "text": "Flag indicates this field is dependent field"
      },
      "attribute": "is-dependent-field",
      "reflect": false,
      "defaultValue": "false"
    },
    "parentId": {
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
        "text": "Property parentId indicates the parent of current child dropdown"
      },
      "attribute": "parent-id",
      "reflect": false,
      "defaultValue": "null"
    },
    "dependentLevels": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{}",
        "resolved": "{}",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Property indicates the level selected"
      },
      "defaultValue": "{}"
    },
    "enableKeyPress": {
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
        "text": "Key press to allow user to use tab"
      },
      "attribute": "enable-key-press",
      "reflect": false,
      "defaultValue": "false"
    },
    "choiceIds": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Series of Ids to render options"
      },
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "boolExceededChoiceLimit": {}
  }; }
  static get events() { return [{
      "method": "fwChange",
      "name": "fwChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered on data change for error handling on parent"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "validateErrors": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "showErrors",
      "methodName": "watchShowErrorsChangeHandler"
    }]; }
}
