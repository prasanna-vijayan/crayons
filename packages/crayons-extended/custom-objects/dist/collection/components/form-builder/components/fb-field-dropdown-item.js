/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component, Element, Prop, h, Host, Event, } from '@stencil/core';
import { hasCustomProperty, i18nText } from '../utils/form-builder-utils';
export class FbFieldDropdownItem {
  constructor() {
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
    return (h(Host, { tabIndex: '-1' },
      h("div", { class: dropdownItemClass, ref: (el) => (this.divBaseElement = el), onDragEnd: this.stopParentDragging, onDrop: this.stopParentDragging },
        h("div", { role: 'none', class: strDragClassName, onMouseDown: this.startParentDragging },
          h("fw-icon", { size: 14, name: 'drag', color: '#475867' })),
        h("div", { class: `${strBaseClassName}-input-container` },
          h("fw-input", { class: `${strBaseClassName}-content-required-input`, state: showFieldNameError ? 'error' : 'normal', errorText: strErrorMsg, placeholder: strInputPrompt, value: dpSource.value, disabled: this.disabled, onFwBlur: this.nameBlurHandler, onFwInput: this.nameChangeHandler, onFwFocus: this.nameFocusHandler, onFwInputKeyDown: this.nameKeydownHandler })),
        h("span", { class: strDeleteClassName, onClick: this.deleteButtonClickHandler },
          h("fw-icon", { name: 'delete', size: 14 })))));
  }
  static get is() { return "fw-fb-field-dropdown-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["fb-field-dropdown-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["fb-field-dropdown-item.css"]
  }; }
  static get properties() { return {
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
        "text": "variable to store the data source"
      },
      "attribute": "data-provider",
      "reflect": false,
      "defaultValue": "null"
    },
    "sortable": {
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
        "text": "variable to determine if the element is sortable"
      },
      "attribute": "sortable",
      "reflect": false,
      "defaultValue": "true"
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
    "isNewChoice": {
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
        "text": "property to determine if this is a new choice or an existing choice"
      },
      "attribute": "is-new-choice",
      "reflect": false,
      "defaultValue": "false"
    },
    "index": {
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
        "text": "index attached inside the parent group component"
      },
      "attribute": "index",
      "reflect": false,
      "defaultValue": "-1"
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
        "text": ""
      },
      "attribute": "is-dependent-field",
      "reflect": false,
      "defaultValue": "false"
    },
    "itemSelected": {
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
        "text": ""
      },
      "attribute": "item-selected",
      "reflect": false,
      "defaultValue": "false"
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
        "text": ""
      },
      "attribute": "enable-key-press",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "fwAdd",
      "name": "fwAdd",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwDelete",
      "name": "fwDelete",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered on delete button click"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwChange",
      "name": "fwChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered on choice input blur"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwSelect",
      "name": "fwSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered on choice selection"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
}
