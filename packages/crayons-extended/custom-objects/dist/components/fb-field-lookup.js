import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { f as hasCustomProperty, d as deepCloneObject, j as isUniqueField, i as i18nText, k as formMapper } from './form-builder-utils.js';
import { d as defineCustomElement$c } from './avatar.js';
import { d as defineCustomElement$b } from './button.js';
import { d as defineCustomElement$a } from './checkbox.js';
import { d as defineCustomElement$9 } from './icon.js';
import { d as defineCustomElement$8 } from './input.js';
import { d as defineCustomElement$7 } from './list-options.js';
import { d as defineCustomElement$6 } from './popover.js';
import { d as defineCustomElement$5 } from './select.js';
import { d as defineCustomElement$4 } from './select-option.js';
import { d as defineCustomElement$3 } from './spinner.js';
import { d as defineCustomElement$2 } from './tag.js';
import { d as defineCustomElement$1 } from './tooltip.js';

const fieldTypes = {
	PRIMARY: {
		type: "TEXT",
		icon: {
			name: "text-field",
			bg_color: "#FEF1E1"
		}
	},
	RELATIONSHIP: {
		type: "RELATIONSHIP",
		icon: {
			name: "search",
			bg_color: "#FEF1E0"
		}
	},
	TEXT: {
		type: "TEXT",
		icon: {
			name: "text-field",
			bg_color: "#FEF1E1"
		}
	},
	PARAGRAPH: {
		type: "PARAGRAPH",
		icon: {
			name: "paragraph",
			bg_color: "#FEF1E0"
		}
	},
	NUMBER: {
		type: "NUMBER",
		icon: {
			name: "number-field",
			bg_color: "#DFF5F1"
		}
	},
	DECIMAL: {
		type: "DECIMAL",
		icon: {
			name: "decimal-field",
			bg_color: "#E5F2FE"
		}
	},
	DATE: {
		type: "DATE",
		icon: {
			name: "calendar",
			bg_color: "#FFECF0"
		}
	},
	DROPDOWN: {
		type: "DROPDOWN",
		icon: {
			name: "dropdown",
			bg_color: "#E5F2FE"
		},
		choices: [
			{
				value: ""
			},
			{
				value: ""
			}
		]
	},
	CHECKBOX: {
		type: "CHECKBOX",
		icon: {
			name: "checkbox",
			bg_color: "#FFECF0"
		}
	},
	MULTI_SELECT: {
		type: "MULTI_SELECT",
		icon: {
			name: "multiselect",
			bg_color: "#E5F2FE"
		},
		choices: [
			{
				value: ""
			},
			{
				value: ""
			}
		]
	},
	DEPENDENT_FIELD: {
		type: "DEPENDENT_FIELD",
		icon: {
			name: "dependent-field",
			bg_color: "#FEF1E0"
		},
		fields: [
			{
				type: "DROPDOWN",
				field_options: {
					level: "1",
					dependent: "true"
				},
				choices: [
				],
				fields: [
					{
						type: "DROPDOWN",
						field_options: {
							level: "2",
							dependent: "true"
						},
						choices: [
						],
						fields: [
							{
								type: "DROPDOWN",
								field_options: {
									level: "3",
									dependent: "true"
								},
								choices: [
								]
							}
						]
					}
				]
			}
		]
	}
};
const relationshipTypes = [
	{
		value: "many_to_one",
		text: "relationshipManyToOne",
		subText: "relationshipManyToOneDesc"
	},
	{
		value: "one_to_one",
		text: "relationshipOneToOne",
		subText: "relationshipOneToOneDesc"
	}
];
const relationshipDescriptionKeys = {
	many_to_one: {
		native: "relationshipManyToOneNative",
		co: "relationshipManyToOneCO"
	},
	one_to_one: {
		native: "relationshipOneToOneNative",
		co: "relationshipOneToOneCO"
	}
};
const fieldEditorValidations = {
	checkboxDetails: {
		existingPrimaryFieldEnabledCheckboxes: {
			required: false,
			filterable: false,
			unique: false
		},
		existingFieldEnabledCheckboxes: {
			required: true,
			filterable: false,
			unique: false
		},
		keyMapper: {
			required: "required",
			filterable: "filterable",
			unique: "field_options.unique"
		}
	}
};
const textboxDependentValue = "category 1\n\tsubcategory 1\n\t\titem 1\n\t\titem2\n\tsubcategory 2\n\t\titem 3\n\tsubcategory 3\n\t\titem 4\ncategory 2\n\tsubcategory 4\n\t\titem 5\n";
const presetSchema = {
	fieldTypes: fieldTypes,
	relationshipTypes: relationshipTypes,
	relationshipDescriptionKeys: relationshipDescriptionKeys,
	fieldEditorValidations: fieldEditorValidations,
	textboxDependentValue: textboxDependentValue
};

const fbFieldLookupCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.fb-field-lookup-root{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;gap:8px}.fb-field-lookup-root .fb-field-lookup-header-label{width:100%;font-size:16px;font-weight:600;color:#475867;display:block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fb-field-lookup-root .fb-field-lookup-relationship-description{width:100%;-webkit-margin-before:4px;margin-block-start:4px;font-size:12px;color:#183247;display:block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fb-field-lookup-root .fb-field-lookup-relationship-object-name{display:inline-block;font-weight:600}.fb-field-lookup-root .fb-field-lookup{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:20px}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-input{width:25%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-relationship-select-container{height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:35%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-relationship-select-container .fb-field-lookup-relationship-select{width:100%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-relationship-select-container .fb-field-lookup-relationship-select .fw-button-group__button--last{width:100%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-target-select-container{height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:40%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-target-select-container .fb-field-lookup-target-select{--fw-popover-max-height:262px;width:100%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-target-select-container .fb-field-lookup-target-select .fw-button-group__button--last{width:100%}.fb-field-lookup-root .fb-field-lookup .fb-field-lookup-target-skeleton{--fw-skeleton-border-radius:4px;-webkit-padding-before:24px;padding-block-start:24px;min-width:33%;-ms-flex:2 1 0px;flex:2 1 0}";

const FbFieldDropdown = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  get host() { return this; }
  static get watchers() { return {
    "formValues": ["watchValuesChangeHandler"]
  }; }
  static get style() { return fbFieldLookupCss; }
}, [1, "fw-fb-field-lookup", {
    "productName": [1, "product-name"],
    "formValues": [1032, "form-values"],
    "sourceObjectName": [1025, "source-object-name"],
    "targetObjects": [1032, "target-objects"],
    "dataResponse": [1032, "data-response"],
    "showErrors": [1028, "show-errors"],
    "disabled": [4],
    "selectedRelationshipValue": [32],
    "selectedTargetValue": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-fb-field-lookup", "fw-avatar", "fw-button", "fw-checkbox", "fw-icon", "fw-input", "fw-list-options", "fw-popover", "fw-select", "fw-select-option", "fw-spinner", "fw-tag", "fw-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-fb-field-lookup":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FbFieldDropdown);
      }
      break;
    case "fw-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "fw-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "fw-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "fw-list-options":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "fw-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "fw-select":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "fw-select-option":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "fw-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-tag":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-tooltip":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { FbFieldDropdown as F, defineCustomElement as d, presetSchema as p };
