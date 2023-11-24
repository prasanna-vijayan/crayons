import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { f as hasCustomProperty, i as i18nText } from './form-builder-utils.js';
import { d as defineCustomElement$2 } from './icon.js';
import { d as defineCustomElement$1 } from './input.js';

const fbFieldDropdownItemCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.fb-field-dependent-dropdown-item{border:thin solid #cfd7df;-webkit-margin-after:unset !important;margin-block-end:unset !important;padding-block:8px;background-color:#fff}.fb-field-dependent-dropdown-item .fb-field-dropdown-item-delete-container{width:unset !important}.fb-field-dependent-dropdown-item .fb-field-dropdown-item-delete-container--not-deleteable{opacity:0 !important;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dropdown-item-selected{background-color:#e5f2fd}.fb-field-dropdown-item{width:calc(100% + 24px + 8px);height:auto;-webkit-margin-after:12px;margin-block-end:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex}.fb-field-dropdown-item .fb-field-dropdown-item-drag-container{width:24px;height:32px;-webkit-margin-end:8px;margin-inline-end:8px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;opacity:1;cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.fb-field-dropdown-item .fb-field-dropdown-item-drag-container--unsortable{opacity:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fb-field-dropdown-item .fb-field-dropdown-item-drag-container--disabled{opacity:0.4;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:not-allowed}.fb-field-dropdown-item .fb-field-dropdown-item-input-container{width:calc(100% - 24px - 24px - 8px - 8px);height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.fb-field-dropdown-item .fb-field-dropdown-item-input-container .fb-field-dropdown-item-required-input{width:100%}.fb-field-dropdown-item .fb-field-dropdown-item-delete-container{width:24px;height:32px;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;opacity:1;cursor:pointer;--fw-icon-color:#475867}.fb-field-dropdown-item .fb-field-dropdown-item-delete-container--disabled{--fw-icon-color:#475867;cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0.4}.fb-field-dropdown-item .fb-field-dropdown-item-delete-container:hover{--fw-icon-color:#447093}.fb-field-dropdown-item .fb-field-dropdown-item-delete-container:hover--disabled{--fw-icon-color:#475867}.fb-field-dropdown-item .fb-field-dropdown-item-delete-container:active,.fb-field-dropdown-item .fb-field-dropdown-item-delete-container:focus{--fw-icon-color:#12344d}.fb-field-dropdown-item .fb-field-dropdown-item-delete-container:active--disabled,.fb-field-dropdown-item .fb-field-dropdown-item-delete-container:focus--disabled{--fw-icon-color:#475867}";

const FbFieldDropdownItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  get host() { return this; }
  static get style() { return fbFieldDropdownItemCss; }
}, [1, "fw-fb-field-dropdown-item", {
    "isLoading": [1028, "is-loading"],
    "dataProvider": [1032, "data-provider"],
    "sortable": [1028],
    "showErrors": [1028, "show-errors"],
    "disabled": [4],
    "isNewChoice": [4, "is-new-choice"],
    "index": [2],
    "isDependentField": [4, "is-dependent-field"],
    "itemSelected": [4, "item-selected"],
    "enableKeyPress": [4, "enable-key-press"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-fb-field-dropdown-item", "fw-icon", "fw-input"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-fb-field-dropdown-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FbFieldDropdownItem);
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { FbFieldDropdownItem as F, defineCustomElement as d };
