import { Component, Element, Prop, h, Host, Event, State, Watch, } from '@stencil/core';
import { deepCloneObject, hasCustomProperty, i18nText, isUniqueField, } from '../utils/form-builder-utils';
import presetSchema from '../assets/form-builder-preset.json';
import formMapper from '../assets/form-mapper.json';
export class FbFieldDropdown {
  constructor() {
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
    return (h(Host, { tabIndex: '-1' },
      h("div", { class: `${strBaseClassName}-root` },
        h("label", { class: `${strBaseClassName}-header-label` }, i18nText('lookupAssociationHeader')),
        h("div", { class: strBaseClassName },
          h("fw-input", { class: `${strBaseClassName}-input`, label: i18nText('lookupSourceObject'), value: this.sourceObjectName, disabled: true }),
          boolShowRelationshipTypeSelect ? (h("div", { class: `${strBaseClassName}-relationship-select-container` },
            h("fw-select", { readonly: true, required: true, state: strRelationshipState, class: `${strBaseClassName}-relationship-select`, placeholder: i18nText('lookupRelationshipPlaceholder'), label: i18nText('lookupRelationshipLabel'), errorText: i18nText('errors.emptyRelationshipType'), disabled: !boolNewField || this.disabled, options: this.i18RelationshipType, value: this.selectedRelationshipValue, onFwChange: this.relationshipChangeHandler }))) : (h("div", null)),
          h("div", { class: `${strBaseClassName}-target-select-container` },
            h("fw-select", { required: true, state: strTargetState, class: `${strBaseClassName}-target-select`, placeholder: i18nText('lookupTargetPlaceholder'), label: i18nText('lookupTargetLabel'), errorText: i18nText('errors.emptyTargetObject'), disabled: !boolNewField || this.disabled, value: this.selectedTargetValue, options: this.targetObjects, onFwChange: this.targetObjectChangeHandler }))),
        boolShowDescription && (h("span", { class: `${strBaseClassName}-relationship-description`, innerHTML: strDescription })))));
  }
  static get is() { return "fw-fb-field-lookup"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["fb-field-lookup.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["fb-field-lookup.css"]
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
    "sourceObjectName": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "source object value"
      },
      "attribute": "source-object-name",
      "reflect": false,
      "defaultValue": "''"
    },
    "targetObjects": {
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
        "text": "array for target objects"
      },
      "attribute": "target-objects",
      "reflect": false,
      "defaultValue": "null"
    },
    "dataResponse": {
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
        "text": "variable to store the data  for all the choices"
      },
      "attribute": "data-response",
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
    }
  }; }
  static get states() { return {
    "selectedRelationshipValue": {},
    "selectedTargetValue": {}
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
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "formValues",
      "methodName": "watchValuesChangeHandler"
    }]; }
}
