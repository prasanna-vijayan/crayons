import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as debounce, e as cyclicDecrement, f as cyclicIncrement, i as isEqual } from './index2.js';
import { T as TranslationController } from './Translation2.js';
import { d as defineCustomElement$5 } from './avatar.js';
import { d as defineCustomElement$4 } from './checkbox.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './input.js';
import { d as defineCustomElement$1 } from './select-option.js';

const listOptionsCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.container{margin:0px;-webkit-padding-after:8px;padding-block-end:8px;padding-inline:8px;-webkit-padding-before:12px;padding-block-start:12px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.input-search{-webkit-margin-after:4px;margin-block-end:4px}";

const ListOptions = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwChange = createEvent(this, "fwChange", 7);
    this.fwLoading = createEvent(this, "fwLoading", 7);
    this.isInternalValueChange = false;
    this.arrowKeyCounter = 0;
    this.optionRefs = [];
    this.defaultSearchFunction = (text, dataSource) => {
      return new Promise((resolve) => {
        const value = text.toLowerCase();
        const filteredValue = value !== ''
          ? dataSource.filter((option) => {
            var _a, _b;
            return (_b = (_a = option[this.optionLabelPath]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(value.toLowerCase());
          })
          : dataSource;
        resolve(filteredValue);
      });
    };
    this.filteredOptions = [];
    this.selectOptions = [];
    this.selectedOptionsState = [];
    this.isLoading = false;
    /**
     * Value corresponding to the option, that is saved  when the form data is saved.
     */
    this.options = [];
    /**
     * Value of the option that is displayed as the default selection, in the list box. Must be a valid value corresponding to the fw-select-option components used in Select.
     */
    this.value = '';
    /**
     * Works with `multiple` enabled. Configures the maximum number of options that can be selected with a multi-select component.
     */
    this.max = Number.MAX_VALUE;
    /**
     * Enables selection of multiple options. If the attribute’s value is undefined, the value is set to false.
     */
    this.multiple = false;
    /**
     * Enables the input with in the popup for filtering the options.
     */
    this.searchable = false;
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Standard is the default option without any graphics other options are icon and avatar which places either the icon or avatar at the beginning of the row.
     * The props for the icon or avatar are passed as an object via the graphicsProps.
     */
    this.variant = 'standard';
    /**
     * Place a checkbox.
     */
    this.checkbox = false;
    /**
     * hide tick mark icon on select option
     */
    this.hideTick = false;
    /**
     * Default option to be shown if the option doesn't match the filterText.
     */
    //@i18n({ keyName: 'search.noItemsFound' })
    this.notFoundText = '';
    /**
     * Filter function which takes in filterText and dataSource and return a Promise.
     * Where filter text is the text to filter the value in dataSource array.
     * The returned promise should contain the array of options to be displayed.
     */
    this.search = this.defaultSearchFunction;
    /**
     * Placeholder to placed on the search text box.
     */
    //@i18n({ keyName: 'search.search' })
    this.searchText = '';
    /**
     * Text to be displayed when there is no data available in the select.
     */
    // @i18n({ keyName: 'search.noDataAvailable' })
    this.noDataText = '';
    /**
     * Debounce timer for the search promise function.
     */
    this.debounceTimer = 300;
    /**
     * The option that is displayed as the default selection, in the list box. Must be a valid value corresponding to the fw-select-option components used in Select.
     */
    this.selectedOptions = [];
    /**
     * Whether clicking on the already selected option disables it.
     */
    this.allowDeselect = true;
    /**
     * Allows user to create the option if the provided input doesn't match with any of the options.
     */
    this.isCreatable = false;
    /**
     * Whether clicking on option selects it.
     */
    this.allowSelect = true;
    /**
     *  Key for determining the label for a given option
     */
    this.optionLabelPath = 'text';
    /**
     *  Key for determining the value for a given option
     */
    this.optionValuePath = 'value';
    this.handleSearchWithDebounce = debounce((filterText) => {
      var _a;
      this.isLoading = true;
      this.fwLoading.emit({ isLoading: this.isLoading });
      const sanitisedText = filterText.trim();
      if (sanitisedText) {
        this.search(sanitisedText, this.selectOptions).then((options) => {
          var _a;
          this.filteredOptions =
            (options === null || options === void 0 ? void 0 : options.length) > 0
              ? this.serializeData(options)
              : !this.isCreatable
                ? [
                  {
                    [this.optionLabelPath]: this.notFoundText ||
                      TranslationController.t('search.noItemsFound'),
                    disabled: true,
                  },
                ]
                : [];
          if (this.isCreatable &&
            !this.filteredOptions.some((option) => option[this.optionValuePath] === sanitisedText)) {
            this.filteredOptions = [
              {
                [this.optionLabelPath]: typeof this.formatCreateLabel === 'function'
                  ? this.formatCreateLabel(sanitisedText)
                  : sanitisedText,
                [this.optionValuePath]: sanitisedText,
                isNew: true,
                graphicsProps: {
                  name: 'plus-filled',
                  color: '#2C5CC5',
                  width: 16,
                  height: 16,
                },
                variant: 'icon',
                disabled: ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) >= this.max,
              },
              ...this.filteredOptions,
            ];
          }
          this.isLoading = false;
          this.fwLoading.emit({ isLoading: this.isLoading });
        });
      }
      else {
        this.filteredOptions =
          ((_a = this.selectOptions) === null || _a === void 0 ? void 0 : _a.length) > 0
            ? this.selectOptions
            : [
              {
                [this.optionLabelPath]: this.noDataText ||
                  TranslationController.t('search.noDataAvailable'),
                disabled: true,
              },
            ];
        this.isLoading = false;
        this.fwLoading.emit({ isLoading: this.isLoading });
      }
    }, this, this.debounceTimer);
  }
  fwSelectedHandler(selectedItem) {
    var _a;
    const { value, selected } = selectedItem.detail;
    if (selected) {
      const selectedObj = this.filteredOptions.filter((option) => option[this.optionValuePath] === value)[0];
      if (this.isCreatable && selectedObj.isNew) {
        selectedObj[this.optionLabelPath] = selectedObj[this.optionValuePath];
        if (typeof this.validateNewOption === 'function') {
          selectedObj.error = !this.validateNewOption(selectedObj[this.optionValuePath]);
        }
        selectedObj.graphicsProps = {};
        selectedObj.variant = 'standard';
      }
      this.selectedOptionsState = this.multiple
        ? [...(this.selectedOptionsState || []), selectedObj]
        : [selectedObj];
    }
    else {
      this.selectedOptionsState = this.multiple
        ? (_a = this.selectedOptionsState) === null || _a === void 0 ? void 0 : _a.filter((option) => option[this.optionValuePath] !== value)
        : [];
    }
    this.setValue(this.selectedOptionsState);
  }
  onKeyDown(ev) {
    switch (ev.key) {
      case 'ArrowDown':
        // If focus is on the last option, moves focus to the first option.
        // Ref - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
        this.arrowKeyCounter = cyclicIncrement(this.arrowKeyCounter, this.optionRefs.length - 1);
        this.optionRefs[this.arrowKeyCounter].setFocus();
        ev.preventDefault();
        ev.stopPropagation();
        break;
      case 'ArrowUp':
        // If focus is on the first option, moves focus to the last option.
        // Ref - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
        this.arrowKeyCounter = cyclicDecrement(this.arrowKeyCounter, this.optionRefs.length - 1);
        this.optionRefs[this.arrowKeyCounter].setFocus();
        ev.preventDefault();
        ev.stopPropagation();
        break;
    }
  }
  async clearFilter() {
    this.filteredOptions = this.selectOptions;
    if (this.searchable) {
      this.searchInput.value = '';
    }
  }
  async scrollToLastSelected() {
    var _a;
    if (this.filteredOptions.length > 0 && this.valueExists()) {
      (_a = this.container
        .querySelector(`fw-select-option[id='${this.host.id}-option-${this.getLastSelectedValue()}']`)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: 'nearest' });
    }
  }
  async getSelectedOptions() {
    return this.selectedOptionsState;
  }
  /**
   * Pass an array of string in case of multi-select or string for single-select.
   */
  async setSelectedValues(values) {
    var _a;
    if (this.options) {
      this.selectedOptionsState = (_a = this.options) === null || _a === void 0 ? void 0 : _a.filter((option) => this.isValueEqual(values, option));
      this.setValue(this.selectedOptionsState);
    }
  }
  async setSelectedOptions(options) {
    if (options !== undefined) {
      this.selectedOptionsState = options;
      this.setValue(options);
    }
  }
  async setFocus() {
    this.optionRefs = [
      ...this.container.getElementsByTagName('fw-select-option'),
    ];
    const lastValue = this.getLastSelectedValue();
    if (lastValue && this.optionRefs.length > 0) {
      const lastValueIndex = this.optionRefs.findIndex((option) => option.value === lastValue);
      this.arrowKeyCounter = lastValueIndex === -1 ? 0 : lastValueIndex;
    }
    this.optionRefs[this.arrowKeyCounter].setFocus();
  }
  onOptionsChange(newValue) {
    this.setDataSource(newValue);
  }
  disabledWatcher() {
    const options = this.options || [];
    // updating the object to retrigger
    this.options = [...options];
  }
  onValueChange(newValue, oldValue) {
    var _a;
    if (!isEqual(newValue, oldValue)) {
      if (newValue) {
        this.validateValue(newValue);
      }
      else {
        newValue = this.multiple ? [] : '';
      }
      this.selectOptions = this.selectOptions.map((option) => {
        option.selected = this.isValueEqual(newValue, option);
        return option;
      });
      // Warning: Before mutating this.value inside this file set the  isInternalValueChange to true.
      // This is to prevent triggering the below code which is executed whenever there is a change in the prop this.value
      if (!this.isInternalValueChange) {
        // source might change during dynamic select
        const source = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) > 0 ? this.options : this.selectedOptionsState;
        this.selectedOptionsState = source === null || source === void 0 ? void 0 : source.filter((option) => this.isValueEqual(newValue, option));
      }
      this.fwChange.emit({
        value: newValue,
        meta: { selectedOptions: this.selectedOptionsState },
      });
      this.isInternalValueChange = false;
    }
  }
  onFilterTextChange(newValue) {
    this.handleSearchWithDebounce(newValue);
  }
  onSelectedOptionsChange(newValue) {
    this.setSelectedOptions(newValue);
  }
  valueExists() {
    return this.multiple ? this.value.length > 0 : !!this.value;
  }
  validateValue(value) {
    if (this.multiple && !Array.isArray(value)) {
      throw new Error('Value must be a array for multi-select');
    }
    if (!this.multiple &&
      typeof value !== 'string' &&
      typeof value !== 'number' &&
      typeof value !== 'bigint') {
      throw new Error('Value must be a string or number or bigint for single-select');
    }
  }
  getLastSelectedValue() {
    if (this.valueExists()) {
      return this.multiple ? this.value.slice(-1)[0] : this.value;
    }
  }
  setSelectedOptionsByValue(values) {
    var _a;
    if (this.options) {
      this.selectedOptionsState = (_a = this.options) === null || _a === void 0 ? void 0 : _a.filter((option) => this.isValueEqual(values, option));
    }
    else {
      throw new Error('Options must be passed if value is set');
    }
  }
  serializeData(dataSource) {
    return dataSource.map((option) => {
      var _a, _b;
      const isSelected = this.isValueEqual(this.value, option) || option.selected;
      const isDisabled = ((_b = (_a = this.selectedOptionsState) === null || _a === void 0 ? void 0 : _a.find((selected) => selected[this.optionValuePath] === option[this.optionValuePath])) === null || _b === void 0 ? void 0 : _b.disabled) ||
        option.disabled ||
        this.disabled;
      return Object.assign(Object.assign({}, option), {
        checkbox: option.checkbox || this.checkbox,
        hideTick: option.hideTick || this.hideTick,
        variant: option.variant || this.variant,
        selected: isSelected,
        disabled: isDisabled,
        allowDeselect: this.allowDeselect,
      });
    });
  }
  isValueEqual(value, option) {
    return this.multiple
      ? value.includes(option[this.optionValuePath])
      : value === option[this.optionValuePath];
  }
  setValue(options) {
    let finalValue;
    if ((options === null || options === void 0 ? void 0 : options.length) > 0) {
      finalValue = this.multiple
        ? options.map((option) => option[this.optionValuePath])
        : options[0][this.optionValuePath];
    }
    else {
      finalValue = this.multiple ? [] : '';
    }
    if (!isEqual(this.value, finalValue)) {
      this.isInternalValueChange = true;
      this.value = finalValue;
    }
  }
  setDataSource(dataSource) {
    if ((dataSource === null || dataSource === void 0 ? void 0 : dataSource.length) > 0) {
      this.selectOptions = this.serializeData(dataSource);
    }
    else {
      this.selectOptions = [
        {
          [this.optionLabelPath]: this.noDataText ||
            TranslationController.t('search.noDataAvailable'),
          disabled: true,
        },
      ];
    }
    this.filteredOptions = this.selectOptions;
  }
  renderSelectOptions(options) {
    return options.map((option) => {
      var _a, _b, _c;
      const isDisabled = ((_b = (_a = this.selectedOptionsState) === null || _a === void 0 ? void 0 : _a.find((selected) => selected[this.optionValuePath] === option[this.optionValuePath])) === null || _b === void 0 ? void 0 : _b.disabled) ||
        option.disabled ||
        (!this.allowDeselect && option.selected) ||
        (this.multiple && !option.selected && ((_c = this.value) === null || _c === void 0 ? void 0 : _c.length) >= this.max);
      const isDefaultOption = [
        this.noDataText,
        TranslationController.t('search.noDataAvailable'),
        this.notFoundText,
        TranslationController.t('search.noItemsFound'),
      ].includes(option[this.optionLabelPath]);
      const checkbox = !isDefaultOption && (this.checkbox || option.checkbox);
      return (h("fw-select-option", Object.assign({ id: `${this.host.id}-option-${option[this.optionValuePath]}`, key: option[this.optionValuePath], allowSelect: this.allowSelect }, option, { text: option[this.optionLabelPath], value: option[this.optionValuePath], disabled: isDisabled, checkbox: checkbox })));
    });
  }
  renderSearchInput() {
    return (h("fw-input", { class: 'input-search', ref: (searchInput) => (this.searchInput = searchInput), placeholder: this.searchText || TranslationController.t('search.search'), onInput: () => this.handleSearchWithDebounce(this.searchInput.value) }));
  }
  componentWillLoad() {
    var _a;
    this.validateValue(this.value);
    if (((_a = this.selectedOptions) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      this.selectedOptionsState = this.selectedOptions;
      this.value = this.multiple
        ? this.selectedOptionsState.map((option) => option[this.optionValuePath])
        : this.selectedOptionsState[0][this.optionValuePath];
    }
    else if (this.valueExists()) {
      this.setSelectedOptionsByValue(this.value);
    }
    else {
      this.setValue([]);
    }
    if (this.multiple && typeof this.value === 'string') {
      throw Error('value must be a array of string when multiple is true');
    }
    this.setDataSource(this.options);
  }
  render() {
    return (h("div", { class: 'container', ref: (container) => {
        this.container = container;
      } }, this.searchable && this.renderSearchInput(), this.renderSelectOptions(this.filteredOptions)));
  }
  get host() { return this; }
  static get watchers() { return {
    "options": ["onOptionsChange"],
    "disabled": ["disabledWatcher"],
    "value": ["onValueChange"],
    "filterText": ["onFilterTextChange"],
    "selectedOptions": ["onSelectedOptionsChange"]
  }; }
  static get style() { return listOptionsCss; }
}, [1, "fw-list-options", {
    "options": [16],
    "value": [1032],
    "max": [2],
    "multiple": [4],
    "searchable": [4],
    "disabled": [4],
    "variant": [1],
    "filterText": [8, "filter-text"],
    "checkbox": [4],
    "hideTick": [4, "hide-tick"],
    "notFoundText": [1025, "not-found-text"],
    "search": [16],
    "searchText": [1025, "search-text"],
    "noDataText": [1025, "no-data-text"],
    "debounceTimer": [2, "debounce-timer"],
    "selectedOptions": [16],
    "allowDeselect": [4, "allow-deselect"],
    "isCreatable": [4, "is-creatable"],
    "validateNewOption": [16],
    "formatCreateLabel": [16],
    "allowSelect": [4, "allow-select"],
    "optionLabelPath": [1, "option-label-path"],
    "optionValuePath": [1, "option-value-path"],
    "filteredOptions": [32],
    "selectOptions": [32],
    "selectedOptionsState": [32],
    "isLoading": [32],
    "clearFilter": [64],
    "scrollToLastSelected": [64],
    "getSelectedOptions": [64],
    "setSelectedValues": [64],
    "setSelectedOptions": [64],
    "setFocus": [64]
  }, [[0, "fwSelected", "fwSelectedHandler"], [0, "keydown", "onKeyDown"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-list-options", "fw-avatar", "fw-checkbox", "fw-icon", "fw-input", "fw-select-option"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-list-options":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListOptions);
      }
      break;
    case "fw-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "fw-checkbox":
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
    case "fw-select-option":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { ListOptions as L, defineCustomElement as d };
