'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62345b50.js');
const Translation = require('./Translation-95805542.js');
require('./index-e99fea28.js');

const DateCondition = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.state = 'normal';
    this.hintText = '';
    this.errorText = '';
    /**
     * Whether the component have any error.
     */
    this.error = false;
    /**
     * Whether to show the error.
     */
    this.showError = true;
    /**
     * The props to be passed to the crayons component.
     */
    this.controlProps = {};
  }
  onInputBlur() {
    this.requiredValidation();
  }
  onSelectionChange(e) {
    this.value = e.detail.value;
  }
  async isValid() {
    if (this.error) {
      return !this.error;
    }
    this.requiredValidation();
    return !this.error;
  }
  async setError(error, errorText) {
    this.error = error;
    if (error) {
      this.state = 'error';
      this.showError && (this.errorText = errorText);
    }
    else {
      this.state = 'normal';
      this.hintText = '';
    }
  }
  async refresh() {
    this.datepicker.clearValue();
    this.setError(false);
  }
  requiredValidation() {
    if (this.controlProps['mode'] === 'range') {
      this.valueRangeExists(this.value)
        ? this.setError(false)
        : this.setError(true, Translation.TranslationController.t('filters.validation.required'));
    }
    else {
      this.valueExists(this.value)
        ? this.setError(false)
        : this.setError(true, Translation.TranslationController.t('filters.validation.required'));
    }
  }
  valueExists(value) {
    return !(typeof value === 'undefined' || value === '');
  }
  valueRangeExists(value) {
    return (value &&
      this.valueExists(value['fromDate']) &&
      this.valueExists(value['toDate']));
  }
  componentWillLoad() {
    if (this.controlProps['mode'] === 'range') {
      this.value = {
        fromDate: this.controlProps['fromDate'],
        toDate: this.controlProps['toDate'],
      };
    }
    else {
      this.value = this.controlProps['value'];
    }
  }
  render() {
    return (index.h("fw-datepicker", Object.assign({ ref: (datepicker) => (this.datepicker = datepicker), state: this.state, hintText: this.hintText, errorText: this.errorText }, this.controlProps, { readonly: true })));
  }
};
DateCondition.style = ":host {display: block}";

const filterDropdownCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}.dropdown{--fw-popover-min-width:160px}.dropdown-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background:#ffffff;border-radius:4px;min-width:50px;min-height:32px;font-size:14px;font-weight:400;color:#2c5cc5;border:2px solid transparent;-webkit-box-sizing:border-box;box-sizing:border-box}@media (prefers-reduced-motion){.dropdown-container:focus,.dropdown-container:hover{border:2px solid #2c5cc5}}.dropdown-status-icon{-webkit-margin-end:4px;margin-inline-end:4px}.dropdown-label{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-after:0px;padding-block-end:0px;-webkit-padding-end:6px;padding-inline-end:6px;-webkit-padding-before:0px;padding-block-start:0px}@media (prefers-reduced-motion){.dropdown-status-icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:20px;min-height:20px;-webkit-transition:all 0.15s;transition:all 0.15s}:host(:not([dir=\"rtl\"])) .dropdown-status-icon.expanded,:host([dir=\"ltr\"]) .dropdown-status-icon.expanded{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host([dir=\"rtl\"]) .dropdown-status-icon.expanded{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}";

const FilterDropdown = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  onSelection(e) {
    this.selectedText = e.detail.meta.selectedOptions[0].text;
    this.dropdown.hide();
  }
  onDropdownOpen() {
    this.isExpanded = true;
  }
  onDropdownClose() {
    this.isExpanded = false;
  }
  componentWillLoad() {
    this.selectedText = this.options.filter((option) => option.value === this.value)[0].text;
  }
  render() {
    return (index.h("fw-popover", { ref: (dropdown) => (this.dropdown = dropdown), class: 'dropdown', "same-width": 'false', placement: 'bottom-start', autoFocusOnContent: true, hoist: true }, index.h("div", { class: 'dropdown-container', slot: 'popover-trigger', tabIndex: 0, role: 'button' }, index.h("span", { class: 'dropdown-label' }, this.selectedText), index.h("span", { class: {
        'dropdown-status-icon': true,
        'expanded': this.isExpanded,
      } }, index.h("fw-icon", { name: 'chevron-down', color: '#2c5cc5', size: 8, library: 'system' }))), index.h("fw-list-options", { slot: 'popover-content', value: this.value, allowDeselect: false, options: this.options })));
  }
};
FilterDropdown.style = filterDropdownCss;

const InputCondition = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.state = 'normal';
    this.hintText = '';
    this.errorText = '';
    /**
     * The value of the input
     */
    this.value = '';
    /**
     * Whether the component have any error.
     */
    this.error = false;
    /**
     * Whether to show the error.
     */
    this.showError = true;
    /**
     * The props to be passed to the crayons component.
     */
    this.controlProps = {};
  }
  onInputBlur() {
    this.requiredValidation();
  }
  onInputChange(e) {
    this.value = e.detail.value;
  }
  async isValid() {
    if (this.error) {
      return !this.error;
    }
    this.requiredValidation();
    return !this.error;
  }
  async setError(error, errorText) {
    this.error = error;
    if (error) {
      this.state = 'error';
      this.showError && (this.errorText = errorText);
    }
    else {
      this.state = 'normal';
      this.hintText = '';
    }
  }
  async refresh() {
    this.value = undefined;
    this.setError(false);
  }
  requiredValidation() {
    this.valueExists(this.value)
      ? this.setError(false)
      : this.setError(true, Translation.TranslationController.t('filters.validation.required'));
  }
  valueExists(value) {
    return !(typeof value === 'undefined' || value === '' || value === null);
  }
  componentWillLoad() { }
  render() {
    return (index.h("fw-input", Object.assign({}, this.controlProps, { state: this.state, hintText: this.hintText, errorText: this.errorText, value: this.value })));
  }
};
InputCondition.style = ":host {display: block}";

const inputRangeConditionCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.range-container{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.range-container fw-input-condition{width:150px}.range-container .range-text{min-height:34px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-margin-after:0px;margin-block-end:0px;margin-inline:12px;-webkit-margin-before:0px;margin-block-start:0px}";

const InputRangeCondition = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwInput = index.createEvent(this, "fwInput", 7);
    /**
     * Whether the component have any error.
     */
    this.error = false;
    /**
     * The props to be passed to the crayons component.
     */
    this.controlProps = {};
  }
  onInputBlur() {
    this.valueExists(this.fromValue) &&
      this.valueExists(this.toValue) &&
      this.minMaxValidation();
  }
  onInputChange(e) {
    const { tagName, name } = e.composedPath()[0];
    if (tagName === 'FW-INPUT') {
      const inputValue = e.detail.value;
      const parsedValue = this.valueExists(inputValue)
        ? parseInt(inputValue)
        : '';
      if (name === 'from') {
        this.fromValue = parsedValue;
      }
      else {
        this.toValue = parsedValue;
      }
      this.value = { from: this.fromValue, to: this.toValue };
      this.fwInput.emit({ value: this.value });
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
    }
  }
  async isValid() {
    if (this.error) {
      return !this.error;
    }
    this.requiredValidation();
    !this.error && this.minMaxValidation();
    return !this.error;
  }
  requiredValidation() {
    this.fromElement.isValid();
    this.toElement.isValid();
    this.error = !(this.valueExists(this.fromValue) && this.valueExists(this.toValue));
  }
  minMaxValidation() {
    if (this.fromValue >= this.toValue || this.toValue < this.fromValue) {
      this.error = true;
      this.toElement.setError(true, Translation.TranslationController.t('filters.validation.minMax', {
        fromValue: this.fromValue,
      }));
    }
    else {
      this.error = false;
      this.toElement.setError(false);
    }
  }
  valueExists(value) {
    return !(typeof value === 'undefined' || value === '');
  }
  componentWillLoad() {
    var _a, _b;
    this.fromValue = (_a = this.value) === null || _a === void 0 ? void 0 : _a.from;
    this.toValue = (_b = this.value) === null || _b === void 0 ? void 0 : _b.to;
  }
  render() {
    return (index.h("div", { class: 'range-container' }, index.h("fw-input-condition", { controlProps: Object.assign(Object.assign({}, this.controlProps), { type: 'number', name: 'from', placeholder: Translation.TranslationController.t('filters.placeholder.startRange') }), ref: (fromElement) => {
        this.fromElement = fromElement;
      }, value: this.fromValue }), index.h("span", { class: 'range-text' }, ' ', Translation.TranslationController.t('filters.placeholder.and'), ' '), index.h("fw-input-condition", { controlProps: Object.assign(Object.assign({}, this.controlProps), { type: 'number', name: 'to', placeholder: Translation.TranslationController.t('filters.placeholder.endRange') }), ref: (toElement) => {
        this.toElement = toElement;
      }, value: this.toValue })));
  }
};
InputRangeCondition.style = inputRangeConditionCss;

const SelectCondition = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.state = 'normal';
    this.hintText = '';
    this.errorText = '';
    /**
     * Whether the component have any error.
     */
    this.error = false;
    /**
     * Whether to show the error.
     */
    this.showError = true;
    /**
     * The props to be passed to the crayons component.
     */
    this.controlProps = {};
  }
  onInputBlur() {
    this.requiredValidation();
  }
  onSelectionChange(e) {
    var _a, _b;
    this.value = (_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.selectedOptions;
  }
  async isValid() {
    if (this.error) {
      return !this.error;
    }
    this.requiredValidation();
    return !this.error;
  }
  async refresh() {
    this.value = undefined;
    this.setError(false);
  }
  async setError(error, errorText) {
    this.error = error;
    if (error) {
      this.state = 'error';
      this.showError && (this.errorText = errorText);
    }
    else {
      this.state = 'normal';
      this.hintText = '';
    }
  }
  requiredValidation() {
    this.valueExists(this.value)
      ? this.setError(false)
      : this.setError(true, Translation.TranslationController.t('filters.validation.required'));
  }
  valueExists(value) {
    return !(typeof value === 'undefined' ||
      value === '' ||
      (value === null || value === void 0 ? void 0 : value.length) === 0);
  }
  componentWillLoad() { }
  render() {
    return (index.h("fw-select", Object.assign({ state: this.state, hintText: this.hintText, errorText: this.errorText, selectedOptions: this.value }, this.controlProps)));
  }
};
SelectCondition.style = ":host {display: block}";

exports.fw_date_condition = DateCondition;
exports.fw_filter_dropdown = FilterDropdown;
exports.fw_input_condition = InputCondition;
exports.fw_input_range_condition = InputRangeCondition;
exports.fw_select_condition = SelectCondition;
