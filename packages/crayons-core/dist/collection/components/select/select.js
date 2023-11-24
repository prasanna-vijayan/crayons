/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Component, Element, Event, Listen, Method, Prop, State, Watch, h, Fragment, } from '@stencil/core';
import { range, uniq } from 'lodash-es';
import { handleKeyDown, renderHiddenField, hasSlot, isEqual, } from '../../utils';
import FieldControl from '../../function-components/field-control';
import { TranslationController } from '../../global/Translation';
export class Select {
  constructor() {
    this.tagArrowKeyCounter = 0;
    this.changeEmittable = () => !this.disabled;
    this.innerOnFocus = (e) => {
      if (this.changeEmittable()) {
        this.hasFocus = true;
        this.fwFocus.emit(e);
        this.focusedValues = [];
      }
    };
    this.innerOnClick = () => {
      var _a, _b;
      if (this.changeEmittable()) {
        this.setFocus();
        // Select the whole text in case of single select
        this.multiple || ((_b = (_a = this.selectInput) === null || _a === void 0 ? void 0 : _a.select) === null || _b === void 0 ? void 0 : _b.call(_a));
        if (!['search', 'mail'].includes(this.variant)) {
          this.openDropdown();
        }
        this.focusedValues = [];
      }
    };
    this.innerOnBlur = (e) => {
      if (this.changeEmittable()) {
        this.hasFocus = false;
        this.fwBlur.emit({
          event: e,
          name: this.name,
        });
      }
    };
    this.openDropdown = () => {
      if (!this.isExpanded && this.changeEmittable()) {
        this.popoverRef.show();
      }
    };
    this.closeDropdown = () => {
      if (this.isExpanded && this.changeEmittable()) {
        this.popoverRef.hide();
      }
    };
    /**
     * If the dropdown is shown or not
     */
    this.isExpanded = false;
    this.hasFocus = false;
    this.selectedOptionsState = [];
    this.isLoading = false;
    this.focusedOptionId = '';
    this.hasHintTextSlot = false;
    this.hasWarningTextSlot = false;
    this.hasErrorTextSlot = false;
    this.focusedValues = [];
    /**
     * Label displayed on the interface, for the component.
     */
    this.label = '';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Type of option accepted as the input value. If a user tries to enter an option other than the specified type, the list is not populated.
     */
    this.type = 'text';
    /**
     * Theme based on which the list box is styled.
     */
    this.state = 'normal';
    /**
     * If true, the user cannot modify the default value selected. If the attribute's value is undefined, the value is set to true.
     */
    this.readonly = false;
    /**
     * Specifies the select field as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * If true, the user must select a value. The default value is not displayed.
     */
    this.forceSelect = true;
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Enables selection of multiple options. If the attribute’s value is undefined, the value is set to false.
     */
    this.multiple = false;
    /**
     * Works with `multiple` enabled. Configures the maximum number of options that can be selected with a multi-select component.
     */
    this.max = Number.MAX_VALUE;
    /**
     * The UI variant of the select to be used.
     */
    this.variant = 'standard';
    /**
     * Standard is the default option without any graphics other options are icon and avatar which places either the icon or avatar at the beginning of the row.
     * The props for the icon or avatar are passed as an object via the graphicsProps.
     */
    this.optionsVariant = 'standard';
    /**
     * Allow to search for value. Default is true.
     */
    this.searchable = true;
    /**
     * Place a checkbox.
     */
    this.checkbox = false;
    /**
     * Default option to be shown if the option doesn't match the filterText.
     */
    // @i18n({ keyName: 'search.noItemsFound' })
    this.notFoundText = '';
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
     * Array of the options that is displayed as the default selection, in the list box. Must be a valid option corresponding to the fw-select-option components used in Select.
     */
    this.selectedOptions = [];
    /**
     * Whether the select width to be same as that of the options.
     */
    this.sameWidth = true;
    /**
     * Placement of the options list with respect to select.
     */
    this.optionsPlacement = 'bottom';
    /**
     * Alternative placement for popover if the default placement is not possible.
     */
    this.fallbackPlacements = ['top'];
    /**
     * The variant of tag to be used.
     */
    this.tagVariant = 'standard';
    /**
     * Whether the arrow/caret should be shown in the select.
     */
    this.caret = true;
    /**
     * If the default label prop is not used, then use this prop to pass the id of the label.
     */
    this.labelledBy = '';
    /**
     * Whether clicking on the already selected option disables it.
     */
    this.allowDeselect = true;
    /**
     * Hint text displayed below the text box.
     */
    this.hintText = '';
    /**
     * Warning text displayed below the text box.
     */
    this.warningText = '';
    /**
     * Error text displayed below the text box.
     */
    this.errorText = '';
    /**
     * Props to be passed for creatable select
     * isCreatable: boolean - If true, select accepts user input that are not present as options and add them as options
     * validateNewOption: (value) => boolean - If passed, this function will determine the error state for every new option entered. If return value is true, error state of the newly created option will be false and if return value is false, then the error state of the newly created option will be true.
     * formatCreateLabel: (label) => string - Gets the label for the "create new ..." option in the menu. Current input value is provided as argument.
     */
    this.creatableProps = {
      isCreatable: false,
      validateNewOption: (_value) => true,
      formatCreateLabel: (label) => label,
    };
    /**
     *  Option to prevent the select options from being clipped when the component is placed inside a container with
     * `overflow: auto|hidden|scroll`.
     */
    this.hoist = false;
    /**
     *  Key for determining the label for a given option
     */
    this.optionLabelPath = 'text';
    /**
     *  Key for determining the value for a given option
     */
    this.optionValuePath = 'value';
    /**
     *  Sets the max height of select with multiple options selected and displays a scroll when maxHeight value is exceeded
     */
    this.maxHeight = 'none';
    /**
     *  Props to be passed for fw-tag components displayed in multi-select.
     */
    this.tagProps = {};
    this.matchValueWithOptions = () => {
      var _a;
      if (((_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        // Check whether the selected data in the this.dataSource  matches the value
        const selectedDataSource = this.dataSource.filter((option) => this.isValueEqual(this.value, option));
        const selectedDataSourceValues = selectedDataSource.map((option) => option[this.optionValuePath]);
        const selected = this.multiple
          ? selectedDataSourceValues
          : selectedDataSourceValues[0];
        if (!isEqual(this.value, selected)) {
          if (selected) {
            this.value = selected;
          }
          else {
            this.value = this.multiple ? [] : '';
          }
        }
        if (JSON.stringify(this.selectedOptionsState) !==
          JSON.stringify(selectedDataSource)) {
          this.selectedOptionsState = selectedDataSource;
        }
      }
      else {
        this.value = this.multiple ? [] : '';
      }
      this.renderInput();
    };
    this.tagContainerKeyDown = (ev) => {
      var _a, _b, _c, _d, _e;
      if (this.changeEmittable()) {
        switch (ev.key) {
          case 'Escape':
            this.innerOnBlur(ev);
            this.closeDropdown();
            break;
          case 'Delete':
          case 'Backspace':
            this.deleteFocusedTags();
            break;
          case 'ArrowLeft':
            if (((_a = this.focusedValues) === null || _a === void 0 ? void 0 : _a.length) === 0) {
              this.focusOnTagContainer();
            }
            else if (this.tagArrowKeyCounter - 1 >= 0) {
              // should not focus disabled tag
              if (!((_b = this.selectedOptionsState[this.tagArrowKeyCounter - 1]) === null || _b === void 0 ? void 0 : _b.disabled)) {
                this.tagArrowKeyCounter--;
                this.focusOnTag(this.tagArrowKeyCounter);
              }
            }
            else {
              this.tagArrowKeyCounter = 0;
            }
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
            break;
          case 'ArrowRight':
            if (this.tagArrowKeyCounter + 1 >= ((_c = this.value) === null || _c === void 0 ? void 0 : _c.length)) {
              (_d = this.selectInput) === null || _d === void 0 ? void 0 : _d.focus();
            }
            else if (this.tagArrowKeyCounter <= ((_e = this.value) === null || _e === void 0 ? void 0 : _e.length)) {
              this.tagArrowKeyCounter++;
              this.focusOnTag(this.tagArrowKeyCounter);
            }
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
            break;
        }
      }
    };
  }
  onDropdownClose(e) {
    var _a;
    if (e.composedPath()[0].id === 'select-popover') {
      this.clearInput();
      this.isExpanded = false;
      this.multiple && ((_a = this.selectInput) === null || _a === void 0 ? void 0 : _a.focus());
    }
  }
  onDropdownOpen(e) {
    if (e.composedPath()[0].id === 'select-popover') {
      this.isExpanded = true;
    }
  }
  onLoading(event) {
    var _a, _b;
    this.isLoading = event.detail.isLoading;
    if (['search', 'mail'].includes(this.variant) && !this.isLoading) {
      ((_b = (_a = this.selectInput) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.trim()) && this.openDropdown();
    }
  }
  fwSelectedHandler(selectedItem) {
    var _a, _b, _c;
    if (selectedItem.composedPath()[0].tagName === 'FW-LIST-OPTIONS') {
      this.selectedOptionsState = (_b = (_a = selectedItem.detail) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.selectedOptions;
      this.value = selectedItem.detail.value;
      this.renderInput();
      if (!this.multiple || ['search', 'mail'].includes(this.variant)) {
        this.closeDropdown();
      }
      selectedItem.stopImmediatePropagation();
      selectedItem.stopPropagation();
      selectedItem.preventDefault();
      if (((_c = this.selectedOptionsState) === null || _c === void 0 ? void 0 : _c.length) > 0) {
        this.fwChange.emit({
          name: this.name,
          value: this.value,
          meta: { selectedOptions: this.selectedOptionsState },
        });
      }
      else {
        this.fwChange.emit({
          name: this.name,
          value: this.value,
          meta: {
            shouldValidate: false,
            selectedOptions: this.selectedOptionsState,
          },
        });
      }
    }
  }
  // Listen to Tag close in case of multi-select
  fwCloseHandler(ev) {
    var _a;
    this.setSelectedOptions((_a = this.selectedOptionsState) === null || _a === void 0 ? void 0 : _a.filter((_, index) => index !== ev.detail.index));
    this.focusOnTagContainer();
  }
  onKeyDown(ev) {
    var _a, _b, _c;
    if (this.changeEmittable()) {
      switch (ev.key) {
        case 'ArrowDown':
          this.innerOnClick();
          this.fwListOptions.setFocus();
          ev.preventDefault();
          ev.stopPropagation();
          break;
        case 'Delete':
        case 'Backspace':
          if (!this.readonly && this.multiple) {
            this.deleteFocusedTags();
            if (this.focusedValues.length === 0 &&
              ((_a = this.selectInput) === null || _a === void 0 ? void 0 : _a.value) === '') {
              this.focusOnTagContainer();
            }
          }
          break;
        case 'Escape':
          this.innerOnBlur(ev);
          this.closeDropdown();
          break;
        case 'Tab':
          this.focusedValues = [];
          this.closeDropdown();
          break;
        case 'a':
        case 'A':
          if (!this.readonly &&
            this.multiple &&
            (ev.ctrlKey || ev.metaKey) &&
            (!this.searchValue || this.focusedValues.length > 0)) {
            ev.preventDefault();
            ev.stopPropagation();
            (_b = this.tagContainer) === null || _b === void 0 ? void 0 : _b.focus();
            this.focusedValues = (_c = this.selectedOptionsState) === null || _c === void 0 ? void 0 : _c.reduce((arr, option, i) => (!option.disabled && arr.push(i), arr), []);
          }
          break;
      }
    }
  }
  onOptionFocus(event) {
    if (event.composedPath()[0].tagName === 'FW-SELECT-OPTION') {
      this.focusedOptionId = event.detail.id;
    }
  }
  onOptionBlur(event) {
    if (event.composedPath()[0].tagName === 'FW-SELECT-OPTION') {
      this.focusedOptionId = '';
    }
  }
  optionsChangedHandler() {
    this.renderInput();
  }
  onOptionsChange(newValue) {
    var _a;
    const selectedValues = newValue === null || newValue === void 0 ? void 0 : newValue.filter((option) => option.selected);
    // If selected key is available in options schema use it
    // Or check for the value
    if ((selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.length) > 0) {
      this.selectedOptionsState = selectedValues;
      this.value = this.multiple
        ? this.selectedOptionsState.map((x) => x[this.optionValuePath])
        : (_a = this.selectedOptionsState[0]) === null || _a === void 0 ? void 0 : _a[this.optionValuePath];
      this.dataSource = newValue;
    }
    else if (this.valueExists()) {
      this.dataSource = newValue;
      // match value and selectedOptionsState with the updated options when value is already provided
      this.matchValueWithOptions();
    }
    else {
      this.value = this.multiple ? [] : '';
      this.selectedOptionsState = [];
      this.dataSource = newValue;
    }
  }
  // Watcher to update selected options state on selectedOptions prop update
  onSelectedOptionsChange(newValue) {
    this.setSelectedOptions(newValue);
  }
  async getSelectedItem() {
    var _a;
    return (_a = this.fwListOptions) === null || _a === void 0 ? void 0 : _a.getSelectedOptions();
  }
  async setSelectedValues(values) {
    var _a;
    (_a = this.fwListOptions) === null || _a === void 0 ? void 0 : _a.setSelectedValues(values);
    this.renderInput();
  }
  async setSelectedOptions(options) {
    var _a;
    (_a = this.fwListOptions) === null || _a === void 0 ? void 0 : _a.setSelectedOptions(options);
    this.renderInput();
  }
  async setFocus() {
    var _a;
    this.hasFocus = true;
    (_a = this.selectInput) === null || _a === void 0 ? void 0 : _a.focus();
  }
  /**
   * Shows the dropdown panel
   */
  async showDropdown() {
    this.openDropdown();
  }
  /**
   * Hides the dropdown panel
   */
  async hideDropdown() {
    this.closeDropdown();
  }
  deleteFocusedTags() {
    var _a;
    if (this.focusedValues.length > 0) {
      // delete focused values
      this.setSelectedOptions((_a = this.selectedOptionsState) === null || _a === void 0 ? void 0 : _a.filter((_, index) => !this.focusedValues.includes(index)));
      // reset focused values
      this.focusedValues = [];
    }
  }
  focusOnTagContainer() {
    var _a, _b, _c;
    if (Array.isArray(this.value) &&
      !((_b = this.selectedOptionsState[((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) - 1]) === null || _b === void 0 ? void 0 : _b.disabled)) {
      this.tagArrowKeyCounter = ((_c = this.value) === null || _c === void 0 ? void 0 : _c.length) - 1;
      this.focusOnTag(this.tagArrowKeyCounter);
    }
  }
  focusOnTag(index) {
    var _a;
    if (!((_a = this.selectedOptionsState[index]) === null || _a === void 0 ? void 0 : _a.disabled)) {
      this.focusedValues = [index];
      this.tagContainer.focus();
      const tags = this.tagContainer.querySelectorAll('fw-tag');
      [...tags][index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }
  clearInput() {
    if (!this.multiple && this.value) {
      this.renderInput();
      return;
    }
    this.searchValue = '';
    if (this.selectInput) {
      this.selectInput.value = '';
    }
  }
  isValueEqual(value, option) {
    return this.multiple
      ? value.includes(option[this.optionValuePath])
      : value === option[this.optionValuePath];
  }
  valueExists() {
    var _a;
    return (this.value && (this.multiple ? ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) > 0 : !!this.value));
  }
  onInput() {
    var _a, _b;
    if (this.changeEmittable()) {
      this.searchValue = (_a = this.selectInput) === null || _a === void 0 ? void 0 : _a.value;
      if ((_b = this.selectInput) === null || _b === void 0 ? void 0 : _b.value) {
        !['search', 'mail'].includes(this.variant) && this.openDropdown();
      }
      else {
        // Clear selected value in case of single select.
        this.multiple || this.setSelectedValues('');
        ['search', 'mail'].includes(this.variant) && this.closeDropdown();
      }
      this.focusedValues = [];
    }
  }
  onClickTag(e, index) {
    var _a;
    if (this.changeEmittable()) {
      e.stopPropagation();
      this.tagContainer.focus();
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
      if (!((_a = this.selectedOptionsState[index]) === null || _a === void 0 ? void 0 : _a.disabled)) {
        const focusedIndex = this.focusedValues.indexOf(index);
        if (focusedIndex === -1) {
          if (e.ctrlKey || e.metaKey) {
            // Add indices to focusedValues if ctrl or cmd key is held down
            this.focusedValues = [...this.focusedValues, index];
          }
          else if (e.shiftKey && this.focusedValues.length > 0) {
            // Select range of indices to be focused if shift key is held down
            const startIndex = this.focusedValues[this.focusedValues.length - 1];
            const endIndex = index > startIndex ? index + 1 : index - 1;
            this.focusedValues = uniq([
              ...this.focusedValues,
              ...range(startIndex, endIndex),
            ]);
          }
          else {
            // Clicking on a tag without ctrl/cmd/shift key held down should focus a single index
            this.focusedValues = [index];
          }
        }
        else if (e.ctrlKey || e.metaKey) {
          // Remove index from focusedValues if already present and ctrl or cmd key is held down
          this.focusedValues = this.focusedValues.filter((_, index) => index !== focusedIndex);
        }
        else if (!e.shiftKey) {
          // Highlight current index alone if ctrl/cmd/shift key is not held down
          this.focusedValues = [index];
        }
      }
    }
  }
  renderTags() {
    var _a;
    if (this.multiple && Array.isArray(this.value)) {
      return (_a = this.selectedOptionsState) === null || _a === void 0 ? void 0 : _a.map((option, index) => {
        if (this.isValueEqual(this.value, option)) {
          const optionState = option.error || (this.variant === 'mail' && index >= this.max)
            ? 'error'
            : 'normal';
          const className = this.disabled || option.disabled ? 'tag-disabled' : 'tag-clickable';
          const displayAttributes = this.variant === 'mail'
            ? {
              text: option[this.optionValuePath],
              showEllipsisOnOverflow: true,
              class: className + ' bold-tag',
            }
            : {
              text: option[this.optionLabelPath],
              subText: option.subText,
            };
          return (h("fw-tag", Object.assign({ index: index, class: className, state: optionState, variant: this.tagVariant, graphicsProps: option.graphicsProps, disabled: this.disabled || option.disabled, value: option[this.optionValuePath], focusable: false, closable: !this.disabled && !option.disabled, isFocused: this.focusedValues.includes(index), onClick: (e) => this.onClickTag(e, index) }, displayAttributes, this.tagProps)));
        }
      });
    }
  }
  renderButtonValue() {
    var _a, _b, _c, _d, _e, _f, _g;
    if (this.tagVariant === 'avatar' &&
      ((_a = this.selectedOptionsState[0]) === null || _a === void 0 ? void 0 : _a[this.optionValuePath])) {
      return (h("fw-tag", { class: 'display-tag', state: 'transparent', variant: 'avatar', graphicsProps: (_b = this.selectedOptionsState[0]) === null || _b === void 0 ? void 0 : _b.graphicsProps, text: (_c = this.selectedOptionsState[0]) === null || _c === void 0 ? void 0 : _c[this.optionLabelPath], subText: ((_d = this.selectedOptionsState[0]) === null || _d === void 0 ? void 0 : _d.subText)
          ? `<${(_e = this.selectedOptionsState[0]) === null || _e === void 0 ? void 0 : _e.subText}>`
          : '', disabled: (_f = this.selectedOptionsState[0]) === null || _f === void 0 ? void 0 : _f.disabled, value: (_g = this.selectedOptionsState[0]) === null || _g === void 0 ? void 0 : _g[this.optionValuePath], focusable: false, closable: false, showEllipsisOnOverflow: true }));
    }
    else {
      return this.value;
    }
  }
  renderInput() {
    var _a;
    if (((_a = this.selectedOptionsState) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      if (this.selectInput) {
        this.selectInput.value = '';
        this.selectInput.value = this.multiple
          ? this.selectInput.value
          : this.selectedOptionsState[0][this.optionLabelPath] || '';
      }
    }
    else {
      if (this.selectInput) {
        this.selectInput.value = '';
      }
    }
  }
  renderSelectInput() {
    return (h("input", { ref: (selectInput) => (this.selectInput = selectInput), class: {
        'multiple-select': this.multiple,
      }, autoComplete: 'off', disabled: this.disabled, name: this.name, id: this.name, placeholder: this.valueExists() ? '' : this.placeholder || '', readOnly: this.readonly, required: this.required, type: this.type, value: '', "aria-autocomplete": 'list', "aria-activedescendant": this.focusedOptionId, onInput: () => this.onInput(), onFocus: (e) => this.innerOnFocus(e), onBlur: (e) => this.innerOnBlur(e), "aria-invalid": this.state === 'error', "aria-describedby": `hint-${this.name} error-${this.name}`, onPaste: (e) => this.onPaste(e), "aria-disabled": this.disabled }));
  }
  onClickOutside(e) {
    if (!e.composedPath().includes(this.host) &&
      this.focusedValues.length > 0) {
      this.focusedValues = [];
    }
  }
  componentWillLoad() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    this.boundary || (this.boundary = this.host.parentElement);
    this.checkSlotContent();
    if (this.variant === 'mail') {
      this.caret = false;
      this.multiple = true;
    }
    //TODO: The below is a rough draft and needs to be optimized for better performance.
    const selectOptions = Array.from(this.host.querySelectorAll('fw-select-option'));
    // Set value if the selectedOptions is provided
    if (((_a = this.selectedOptions) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      this.selectedOptionsState = this.selectedOptions;
      this.value = this.multiple
        ? this.selectedOptions.map((option) => option[this.optionValuePath])
        : this.selectedOptions[0][this.optionValuePath];
    }
    if (this.multiple) {
      if (this.multiple && typeof this.value === 'string') {
        throw Error('value must be a array of string when multiple is true');
      }
      this.value = ((_b = this.value) === null || _b === void 0 ? void 0 : _b.length) > 0 ? this.value : [];
    }
    else {
      this.value = this.value ? this.value : '';
    }
    const options = selectOptions.map((option) => {
      return {
        html: option.html,
        [this.optionLabelPath]: option.html
          ? option.optionText
          : option.textContent,
        [this.optionValuePath]: option.value,
        selected: this.isValueEqual(this.value, option) || option.selected,
        disabled: option.disabled,
        htmlContent: option.html ? option.innerHTML : '',
      };
    });
    this.dataSource = options.length === 0 ? this.options : options;
    // Set selectedOptions if the value is provided
    if (!this.multiple && this.value && ((_c = this.selectedOptions) === null || _c === void 0 ? void 0 : _c.length) === 0) {
      this.selectedOptionsState = (_d = this.dataSource) === null || _d === void 0 ? void 0 : _d.filter((option) => this.value === option[this.optionValuePath]);
    }
    else if (this.multiple &&
      ((_e = this.value) === null || _e === void 0 ? void 0 : _e.length) !== ((_f = this.selectedOptions) === null || _f === void 0 ? void 0 : _f.length)) {
      this.selectedOptionsState = (_g = this.dataSource) === null || _g === void 0 ? void 0 : _g.filter((option) => this.isValueEqual(this.value, option));
    }
    if (((_h = this.dataSource) === null || _h === void 0 ? void 0 : _h.length) > 0) {
      // Check whether the selected data in the this.dataSource  matches the value
      const selectedDataSource = this.dataSource.filter((option) => option.selected);
      const selectedDataSourceValues = selectedDataSource.map((option) => option[this.optionValuePath]);
      const selected = this.multiple
        ? selectedDataSourceValues
        : selectedDataSourceValues[0];
      if (selectedDataSourceValues.length > 0 &&
        JSON.stringify(this.value) !== JSON.stringify(selected)) {
        this.value = selected;
        this.selectedOptionsState = selectedDataSource;
      }
    }
    this.host.addEventListener('focus', this.setFocus);
    //this.host.innerHTML = '';
    //Get id
    this.hostId = this.host.id || '';
    // Add event listener to track clicks outside the element to blur selected tags
    document.addEventListener('mouseup', this.onClickOutside.bind(this));
  }
  componentDidLoad() {
    this.renderInput();
  }
  disconnectedCallback() {
    this.host.removeEventListener('focus', this.setFocus);
    document.removeEventListener('mouseup', this.onClickOutside.bind(this));
  }
  expandWatcher(expanded) {
    var _a, _b, _c, _d;
    if (this.variant === 'button') {
      const icon = (_d = (_c = (_b = (_a = this.host.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.select-container')) === null || _b === void 0 ? void 0 : _b.querySelector('fw-button')) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('fw-icon');
      icon && (icon.name = expanded ? 'chevron-up' : 'chevron-down');
    }
  }
  checkSlotContent() {
    this.hasHintTextSlot = hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
  }
  getAriaDescribedBy() {
    if (this.state === 'normal')
      return `hint-${this.name}`;
    else if (this.state === 'error')
      return `error-${this.name}`;
    else if (this.state === 'warning')
      return `warning-${this.name}`;
    return null;
  }
  onPaste(e) {
    var _a;
    // Allow paste only if isCreatable is true
    if ((_a = this.creatableProps) === null || _a === void 0 ? void 0 : _a.isCreatable) {
      // Get pasted data via clipboard API
      const clipboardData = (e === null || e === void 0 ? void 0 : e.clipboardData) || window['clipboardData'];
      const pastedData = clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.getData('Text');
      if (pastedData.includes('\n') || pastedData.includes(',')) {
        // Stop data actually being pasted into input
        e.stopPropagation();
        e.preventDefault();
        // Split strings either by new line or comma
        const values = pastedData.split(/[\n,]/);
        const valuesToBeInput = [];
        values.forEach((value) => {
          var _a, _b;
          const sanitisedValue = value.trim();
          // Check value presence
          if (sanitisedValue) {
            valuesToBeInput.push({
              [this.optionLabelPath]: sanitisedValue,
              [this.optionValuePath]: sanitisedValue,
              error: typeof ((_a = this.creatableProps) === null || _a === void 0 ? void 0 : _a.validateNewOption) === 'function'
                ? !((_b = this.creatableProps) === null || _b === void 0 ? void 0 : _b.validateNewOption(sanitisedValue))
                : false,
            });
          }
        });
        // Sets the selected options with the custom data
        if (valuesToBeInput.length > 0) {
          this.setSelectedOptions([
            ...this.selectedOptionsState,
            ...valuesToBeInput,
          ]);
        }
      }
    }
  }
  render() {
    const { host, name, value } = this;
    renderHiddenField(host, name, value);
    const listAttributes = Object.assign(Object.assign({}, this.creatableProps), (this.variant === 'mail' ? {} : { max: this.max }));
    return (h(FieldControl, { inputId: this.name, label: this.label, labelId: `${this.label}-${this.name}`, state: this.state, hintTextId: `hint-${this.name}`, hintText: this.hintText, hasHintTextSlot: this.hasHintTextSlot, errorTextId: `error-${this.name}`, errorText: this.errorText, hasErrorTextSlot: this.hasErrorTextSlot, warningTextId: `warning-${this.name}`, warningText: this.warningText, hasWarningTextSlot: this.hasWarningTextSlot, required: this.required },
      h("div", { "aria-disabled": this.disabled, class: {
          'has-focus': this.hasFocus,
        } },
        h("div", { class: {
            'select-container': true,
            [this.state]: true,
          }, role: 'combobox', "aria-controls": `${this.hostId}-listbox`, "aria-haspopup": 'listbox', "aria-expanded": this.isExpanded, "aria-owns": `${this.hostId}-listbox` },
          h("fw-popover", { id: 'select-popover', distance: '8', trigger: 'manual', ref: (popoverRef) => (this.popoverRef = popoverRef), sameWidth: this.sameWidth, placement: this.optionsPlacement, fallbackPlacements: this.fallbackPlacements, boundary: this.boundary, hoist: this.hoist },
            h("div", { slot: 'popover-trigger', class: {
                'input-container': this.variant !== 'button',
                [this.state]: true,
                'select-disabled': this.disabled,
                'button-container': this.variant === 'button',
              }, onClick: () => this.innerOnClick(), onKeyDown: handleKeyDown(this.innerOnClick, true) }, this.variant === 'button' ? (h("fw-button", { style: { '--fw-button-label-vertical-padding': '7px' }, "show-caret-icon": true, id: `${this.hostId}-btn`, color: this.tagVariant === 'avatar' ? 'text' : 'secondary', class: this.host.classList.value.includes('first')
                ? 'fw-button-group__button--first'
                : this.host.classList.value.includes('last')
                  ? 'fw-button-group__button--last'
                  : '', "aria-disabled": this.disabled, disabled: this.disabled }, this.renderButtonValue())) : (h(Fragment, null,
              h("div", { class: 'input-container-inner' }, this.multiple ? (h("div", { class: `tag-container ${this.tagVariant}`, onFocus: this.focusOnTagContainer, ref: (tagContainer) => (this.tagContainer = tagContainer), onKeyDown: this.tagContainerKeyDown, tabIndex: -1, style: {
                  'max-height': this.maxHeight,
                } },
                this.renderTags(),
                this.renderSelectInput())) : (this.renderSelectInput())),
              this.isLoading ? (h("fw-spinner", { size: 'small' })) : (this.caret && (h("span", { class: {
                  'dropdown-status-icon': true,
                  'expanded': this.isExpanded,
                  'disabled': this.disabled,
                } },
                h("fw-icon", { name: 'chevron-down', size: 8, library: 'system' }))))))),
            h("fw-list-options", Object.assign({ ref: (fwListOptions) => (this.fwListOptions = fwListOptions), id: `${this.hostId}-listbox`, role: 'listbox', "aria-labelledby": this.labelledBy || `${this.hostId}-label`, notFoundText: this.notFoundText ||
                TranslationController.t('search.noItemsFound'), debounceTimer: this.debounceTimer, noDataText: this.noDataText ||
                TranslationController.t('search.noDataAvailable'), search: this.search, selectedOptions: this.selectedOptionsState, variant: this.optionsVariant, "filter-text": this.searchValue, options: this.dataSource, value: this.value, multiple: this.multiple, disabled: this.disabled, checkbox: this.checkbox, allowDeselect: this.allowDeselect, slot: 'popover-content', optionLabelPath: this.optionLabelPath, optionValuePath: this.optionValuePath }, listAttributes)))))));
  }
  static get is() { return "fw-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["select.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["select.css"]
  }; }
  static get properties() { return {
    "label": {
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
        "text": "Label displayed on the interface, for the component."
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
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
      "reflect": false
    },
    "name": {
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
        "text": "Name of the component, saved as part of form data."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'text' | 'number'",
        "resolved": "\"number\" | \"text\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Type of option accepted as the input value. If a user tries to enter an option other than the specified type, the list is not populated."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | null",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Text displayed in the list box before an option is selected."
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "state": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'normal' | 'warning' | 'error'",
        "resolved": "\"error\" | \"normal\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Theme based on which the list box is styled."
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'normal'"
    },
    "readonly": {
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
        "text": "If true, the user cannot modify the default value selected. If the attribute's value is undefined, the value is set to true."
      },
      "attribute": "readonly",
      "reflect": false,
      "defaultValue": "false"
    },
    "required": {
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
        "text": "Specifies the select field as a mandatory field and displays an asterisk next to the label. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "forceSelect": {
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
        "text": "If true, the user must select a value. The default value is not displayed."
      },
      "attribute": "force-select",
      "reflect": false,
      "defaultValue": "true"
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
    "multiple": {
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
        "text": "Enables selection of multiple options. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "multiple",
      "reflect": false,
      "defaultValue": "false"
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
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'button' | 'standard' | 'mail' | 'search'",
        "resolved": "\"button\" | \"mail\" | \"search\" | \"standard\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The UI variant of the select to be used."
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'standard'"
    },
    "optionsVariant": {
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
      "attribute": "options-variant",
      "reflect": false,
      "defaultValue": "'standard'"
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
        "text": "Allow to search for value. Default is true."
      },
      "attribute": "searchable",
      "reflect": false,
      "defaultValue": "true"
    },
    "options": {
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
        "text": "The data for the select component, the options will be of type array of fw-select-options."
      },
      "attribute": "options",
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
        "text": "Filter function which takes in filterText and dataSource and return a Promise.\nWhere filter text is the text to filter the value in dataSource array.\nThe returned promise should contain the array of options to be displayed."
      },
      "attribute": "search",
      "reflect": false
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
      "mutable": true,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Array of the options that is displayed as the default selection, in the list box. Must be a valid option corresponding to the fw-select-option components used in Select."
      },
      "defaultValue": "[]"
    },
    "sameWidth": {
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
        "text": "Whether the select width to be same as that of the options."
      },
      "attribute": "same-width",
      "reflect": false,
      "defaultValue": "true"
    },
    "optionsPlacement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PopoverPlacementType",
        "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
        "references": {
          "PopoverPlacementType": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Placement of the options list with respect to select."
      },
      "attribute": "options-placement",
      "reflect": false,
      "defaultValue": "'bottom'"
    },
    "fallbackPlacements": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "[PopoverPlacementType]",
        "resolved": "[PopoverPlacementType]",
        "references": {
          "PopoverPlacementType": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Alternative placement for popover if the default placement is not possible."
      },
      "defaultValue": "['top']"
    },
    "tagVariant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TagVariant",
        "resolved": "\"avatar\" | \"standard\"",
        "references": {
          "TagVariant": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The variant of tag to be used."
      },
      "attribute": "tag-variant",
      "reflect": false,
      "defaultValue": "'standard'"
    },
    "caret": {
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
        "text": "Whether the arrow/caret should be shown in the select."
      },
      "attribute": "caret",
      "reflect": false,
      "defaultValue": "true"
    },
    "labelledBy": {
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
        "text": "If the default label prop is not used, then use this prop to pass the id of the label."
      },
      "attribute": "labelled-by",
      "reflect": false,
      "defaultValue": "''"
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
    "hintText": {
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
        "text": "Hint text displayed below the text box."
      },
      "attribute": "hint-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "warningText": {
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
        "text": "Warning text displayed below the text box."
      },
      "attribute": "warning-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "errorText": {
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
        "text": "Error text displayed below the text box."
      },
      "attribute": "error-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "boundary": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "HTMLElement",
        "resolved": "HTMLElement",
        "references": {
          "HTMLElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Describes the select's boundary HTMLElement"
      }
    },
    "creatableProps": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ isCreatable: boolean; validateNewOption: (_value: any) => boolean; formatCreateLabel: (label: any) => string; }",
        "resolved": "{ isCreatable: boolean; validateNewOption: (_value: any) => boolean; formatCreateLabel: (label: any) => string; }",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Props to be passed for creatable select\nisCreatable: boolean - If true, select accepts user input that are not present as options and add them as options\nvalidateNewOption: (value) => boolean - If passed, this function will determine the error state for every new option entered. If return value is true, error state of the newly created option will be false and if return value is false, then the error state of the newly created option will be true.\nformatCreateLabel: (label) => string - Gets the label for the \"create new ...\" option in the menu. Current input value is provided as argument."
      },
      "defaultValue": "{\n    isCreatable: false,\n    validateNewOption: (_value): boolean => true,\n    formatCreateLabel: (label): string => label,\n  }"
    },
    "hoist": {
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
        "text": "Option to prevent the select options from being clipped when the component is placed inside a container with\n`overflow: auto|hidden|scroll`."
      },
      "attribute": "hoist",
      "reflect": false,
      "defaultValue": "false"
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
    },
    "maxHeight": {
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
        "text": "Sets the max height of select with multiple options selected and displays a scroll when maxHeight value is exceeded"
      },
      "attribute": "max-height",
      "reflect": false,
      "defaultValue": "'none'"
    },
    "tagProps": {
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
        "text": "Props to be passed for fw-tag components displayed in multi-select."
      },
      "defaultValue": "{}"
    }
  }; }
  static get states() { return {
    "isExpanded": {},
    "hasFocus": {},
    "searchValue": {},
    "dataSource": {},
    "selectedOptionsState": {},
    "isLoading": {},
    "focusedOptionId": {},
    "hasHintTextSlot": {},
    "hasWarningTextSlot": {},
    "hasErrorTextSlot": {},
    "focusedValues": {}
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
      "method": "fwFocus",
      "name": "fwFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the list box comes into focus."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwBlur",
      "name": "fwBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the list box loses focus."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "getSelectedItem": {
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
        "signature": "(values: string | string[]) => Promise<any>",
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
    },
    "showDropdown": {
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
        "text": "Shows the dropdown panel",
        "tags": []
      }
    },
    "hideDropdown": {
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
        "text": "Hides the dropdown panel",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "dataSource",
      "methodName": "optionsChangedHandler"
    }, {
      "propName": "options",
      "methodName": "onOptionsChange"
    }, {
      "propName": "selectedOptions",
      "methodName": "onSelectedOptionsChange"
    }, {
      "propName": "isExpanded",
      "methodName": "expandWatcher"
    }]; }
  static get listeners() { return [{
      "name": "fwHide",
      "method": "onDropdownClose",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fwShow",
      "method": "onDropdownOpen",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fwLoading",
      "method": "onLoading",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fwChange",
      "method": "fwSelectedHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fwClosed",
      "method": "fwCloseHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "onKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fwFocus",
      "method": "onOptionFocus",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fwBlur",
      "method": "onOptionBlur",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
