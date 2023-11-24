import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f435cf58.js';
import { T as TranslationController } from './Translation-7ee0e3b3.js';
import './index-fb937839.js';

const filterConditionCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.container{border:1px solid #cfd7df;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;-webkit-margin-before:10px;margin-block-start:10px;-webkit-padding-after:12px;padding-block-end:12px;padding-inline:12px;-webkit-padding-before:8px;padding-block-start:8px}.container .header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.container .header .header-text{display:-ms-flexbox;display:flex}.container .header .header-text .displayText{-webkit-margin-end:4px;margin-inline-end:4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.container .header .closeBtn{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:12px;height:12px;border-radius:6px;background-color:transparent;cursor:pointer}.container .content{display:-ms-flexbox;display:flex;-webkit-margin-before:8px;margin-block-start:8px}.container .content:empty{-webkit-margin-before:0px;margin-block-start:0px}.container .content fw-input-condition{width:220px}";

const FilterCondition = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwDelete = createEvent(this, "fwDelete", 7);
    /**
     * The condition schema
     */
    this.conditionSchema = {};
    /**
     * The column display name of the filter
     */
    this.filterText = {};
    /**
     * The props to be passed to the crayons component
     */
    this.controlProps = {};
  }
  onSelection(e) {
    var _a, _b;
    const { tagName } = e.composedPath()[0];
    if (tagName === 'FW-LIST-OPTIONS') {
      this.selectedCondition = e.detail.value;
      this.valueState = undefined;
      this.value = undefined;
      (_b = (_a = this.conditionElement) === null || _a === void 0 ? void 0 : _a.refresh) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    else if (tagName === 'FW-DATEPICKER') {
      if (this.conditionSchema[this.selectedCondition].type === 'DATE_RANGE') {
        const { fromDate: from, toDate: to } = e.detail.value;
        this.valueState = { from, to };
      }
      else {
        this.valueState = e.detail.value;
      }
    }
    else if (tagName === 'FW-SELECT') {
      this.valueState = e.detail.meta.selectedOptions;
    }
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
  }
  onInputChange(e) {
    this.valueState = e.detail.value;
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
  }
  onConditionChange(newValue) {
    this.selectedCondition = newValue;
  }
  onValueChange(newValue) {
    this.valueState = newValue;
  }
  async isValid() {
    if (this.conditionElement) {
      return this.conditionElement.isValid();
    }
    return true;
  }
  setConditionOptions(conditions) {
    this.conditionOptions = Object.keys(conditions).map((condition) => {
      const conditionOption = this.conditionSchema[condition];
      return Object.assign(Object.assign({}, conditionOption), { value: condition });
    });
  }
  renderContent(condition) {
    let props = {};
    switch (condition.type) {
      case 'TEXT':
      case 'NUMBER':
        props['type'] = condition.type === 'NUMBER' ? 'number' : 'text';
        return (h("fw-input-condition", { key: `${this.filterOn}-${this.identifier}`, value: this.value, controlProps: Object.assign(Object.assign({}, this.controlProps), props), ref: (conditionElement) => (this.conditionElement = conditionElement) }));
      case 'NUMBER_RANGE':
        return (h("fw-input-range-condition", { key: `${this.filterOn}-${this.identifier}`, value: this.value, controlProps: this.controlProps, ref: (conditionElement) => (this.conditionElement = conditionElement) }));
      case 'DROPDOWN':
        return (h("fw-select-condition", { key: `${this.filterOn}-${this.identifier}`, value: this.value, controlProps: this.controlProps, ref: (conditionElement) => (this.conditionElement = conditionElement) }));
      case 'MULTI_SELECT':
        props['multiple'] = true;
        return (h("fw-select-condition", { key: `${this.filterOn}-${this.identifier}`, value: this.value, controlProps: Object.assign(Object.assign({}, this.controlProps), props), ref: (conditionElement) => (this.conditionElement = conditionElement) }));
      case 'DATE':
        props = {
          displayFormat: 'dd MMM yyyy',
          readonly: true,
          value: this.value,
        };
        return (h("fw-date-condition", { key: `${this.filterOn}-${this.selectedCondition}`, controlProps: Object.assign(Object.assign({}, this.controlProps), props), ref: (conditionElement) => (this.conditionElement = conditionElement) }));
      case 'DATE_RANGE':
        props = { displayFormat: 'dd MMM yyyy', readonly: true, mode: 'range' };
        if (this.value) {
          const { from: fromDate, to: toDate } = this.value;
          if (fromDate && toDate) {
            const value = { fromDate, toDate };
            props = Object.assign(Object.assign({}, props), value);
          }
        }
        return (h("fw-date-condition", { key: `${this.filterOn}-${this.selectedCondition}`, controlProps: Object.assign(Object.assign({}, this.controlProps), props), ref: (conditionElement) => (this.conditionElement = conditionElement) }));
    }
  }
  componentWillLoad() {
    this.onConditionChange(this.condition);
    this.onValueChange(this.value);
    this.setConditionOptions(this.conditionSchema);
  }
  render() {
    return (h("div", { class: 'container' }, h("div", { class: 'header' }, h("div", { class: 'header-text' }, h("span", { class: 'displayText' }, this.filterText), h("fw-filter-dropdown", { id: 'condition-select', value: this.condition, options: this.conditionOptions })), h("span", { onClick: () => {
        this.fwDelete.emit({ value: this.filterOn });
      }, class: 'closeBtn' }, h("fw-icon", { name: 'cross', color: '#264966', size: 8 }))), h("div", { class: 'content' }, this.renderContent(this.conditionSchema[this.selectedCondition]))));
  }
  static get watchers() { return {
    "condition": ["onConditionChange"],
    "value": ["onValueChange"]
  }; }
};
FilterCondition.style = filterConditionCss;

const searchDropdownCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:relative}";

const SearchDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwChange = createEvent(this, "fwChange", 7);
  }
  onInput(e) {
    this.value = e.detail.value;
  }
  onSelection(e) {
    if (e.composedPath()[0].tagName === 'FW-LIST-OPTIONS') {
      const { value, meta } = e.detail;
      this.fwChange.emit({ value, meta, id: this.host.id });
      this.dropdown.hide();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
  componentWillLoad() { }
  render() {
    return (h("fw-popover", { ref: (dropdown) => (this.dropdown = dropdown), distance: '4', "same-width": 'true', placement: 'bottom' }, h("fw-input", { slot: 'popover-trigger', placeholder: TranslationController.t('searchDropdown.placeholder.search'), iconRight: 'search', tabIndex: 0, role: 'button' }), h("fw-list-options", { slot: 'popover-content', filterText: this.value, options: this.options })));
  }
  get host() { return getElement(this); }
};
SearchDropdown.style = searchDropdownCss;

export { FilterCondition as fw_filter_condition, SearchDropdown as fw_search_dropdown };
