/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Component, Element, Listen, Method, Prop, State, Watch, h, Event, } from '@stencil/core';
import { cyclicDecrement, cyclicIncrement, debounce, isEqual, } from '../../utils';
import { TranslationController } from '../../global/Translation';
export class ListOptions {
  constructor() {
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
      } },
      this.searchable && this.renderSearchInput(),
      this.renderSelectOptions(this.filteredOptions)));
  }
  static get is() { return "fw-list-options"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["list-options.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["list-options.css"]
  }; }
  static get properties() { return {
    "options": {
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
        "text": "Value corresponding to the option, that is saved  when the form data is saved."
      },
      "defaultValue": "[]"
    },
    "value": {
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
        "text": "Value of the option that is displayed as the default selection, in the list box. Must be a valid value corresponding to the fw-select-option components used in Select."
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    },
    "max": {
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
        "text": "Works with `multiple` enabled. Configures the maximum number of options that can be selected with a multi-select component."
      },
      "attribute": "max",
      "reflect": false,
      "defaultValue": "Number.MAX_VALUE"
    },
    "multiple": {
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
        "text": "Enables selection of multiple options. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "multiple",
      "reflect": false,
      "defaultValue": "false"
    },
    "searchable": {
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
        "text": "Enables the input with in the popup for filtering the options."
      },
      "attribute": "searchable",
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
        "text": "Disables the component on the interface. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "DropdownVariant",
        "resolved": "\"avatar\" | \"icon\" | \"standard\"",
        "references": {
          "DropdownVariant": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Standard is the default option without any graphics other options are icon and avatar which places either the icon or avatar at the beginning of the row.\nThe props for the icon or avatar are passed as an object via the graphicsProps."
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'standard'"
    },
    "filterText": {
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
        "text": "The text to filter the options."
      },
      "attribute": "filter-text",
      "reflect": false
    },
    "checkbox": {
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
        "text": "Place a checkbox."
      },
      "attribute": "checkbox",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideTick": {
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
        "text": "hide tick mark icon on select option"
      },
      "attribute": "hide-tick",
      "reflect": false,
      "defaultValue": "false"
    },
    "notFoundText": {
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
        "text": "Default option to be shown if the option doesn't match the filterText."
      },
      "attribute": "not-found-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "search": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(text: string, dataSource: any[]) => Promise<any[]>",
        "resolved": "(text: string, dataSource: any[]) => Promise<any[]>",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Filter function which takes in filterText and dataSource and return a Promise.\nWhere filter text is the text to filter the value in dataSource array.\nThe returned promise should contain the array of options to be displayed."
      },
      "defaultValue": "this.defaultSearchFunction"
    },
    "searchText": {
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
        "text": "Placeholder to placed on the search text box."
      },
      "attribute": "search-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "noDataText": {
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
        "text": "Text to be displayed when there is no data available in the select."
      },
      "attribute": "no-data-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "debounceTimer": {
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
        "text": "Debounce timer for the search promise function."
      },
      "attribute": "debounce-timer",
      "reflect": false,
      "defaultValue": "300"
    },
    "selectedOptions": {
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
        "text": "The option that is displayed as the default selection, in the list box. Must be a valid value corresponding to the fw-select-option components used in Select."
      },
      "defaultValue": "[]"
    },
    "allowDeselect": {
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
        "text": "Whether clicking on the already selected option disables it."
      },
      "attribute": "allow-deselect",
      "reflect": false,
      "defaultValue": "true"
    },
    "isCreatable": {
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
        "text": "Allows user to create the option if the provided input doesn't match with any of the options."
      },
      "attribute": "is-creatable",
      "reflect": false,
      "defaultValue": "false"
    },
    "validateNewOption": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(value: string) => boolean",
        "resolved": "(value: string) => boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Works only when 'isCreatable' is selected. Function to validate the newly created value. Should return true if new option is valid or false if invalid."
      }
    },
    "formatCreateLabel": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(value: string) => string",
        "resolved": "(value: string) => string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Works only when 'isCreatable' is selected. Function to format the create label displayed as an option."
      }
    },
    "allowSelect": {
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
        "text": "Whether clicking on option selects it."
      },
      "attribute": "allow-select",
      "reflect": false,
      "defaultValue": "true"
    },
    "optionLabelPath": {
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
        "text": "Key for determining the label for a given option"
      },
      "attribute": "option-label-path",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "optionValuePath": {
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
        "text": "Key for determining the value for a given option"
      },
      "attribute": "option-value-path",
      "reflect": false,
      "defaultValue": "'value'"
    }
  }; }
  static get states() { return {
    "filteredOptions": {},
    "selectOptions": {},
    "selectedOptionsState": {},
    "isLoading": {}
  }; }
  static get events() { return [{
      "method": "fwChange",
      "name": "fwChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when a value is selected or deselected from the list box options."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwLoading",
      "name": "fwLoading",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the options list is in loading state processing the search function."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "clearFilter": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "scrollToLastSelected": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "getSelectedOptions": {
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
    },
    "setSelectedValues": {
      "complexType": {
        "signature": "(values: any) => Promise<any>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Pass an array of string in case of multi-select or string for single-select.",
        "tags": []
      }
    },
    "setSelectedOptions": {
      "complexType": {
        "signature": "(options: any[]) => Promise<any>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
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
    },
    "setFocus": {
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
      "propName": "options",
      "methodName": "onOptionsChange"
    }, {
      "propName": "disabled",
      "methodName": "disabledWatcher"
    }, {
      "propName": "value",
      "methodName": "onValueChange"
    }, {
      "propName": "filterText",
      "methodName": "onFilterTextChange"
    }, {
      "propName": "selectedOptions",
      "methodName": "onSelectedOptionsChange"
    }]; }
  static get listeners() { return [{
      "name": "fwSelected",
      "method": "fwSelectedHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "onKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
