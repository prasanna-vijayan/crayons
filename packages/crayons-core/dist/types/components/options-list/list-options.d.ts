import { EventEmitter } from '../../stencil-public-runtime';
import { DropdownVariant } from '../../utils/types';
export declare class ListOptions {
  host: HTMLElement;
  private searchInput?;
  private isInternalValueChange;
  private arrowKeyCounter;
  private container;
  private optionRefs;
  private defaultSearchFunction;
  filteredOptions: any[];
  selectOptions: any[];
  selectedOptionsState: any[];
  isLoading: boolean;
  /**
   * Value corresponding to the option, that is saved  when the form data is saved.
   */
  options: any[];
  /**
   * Value of the option that is displayed as the default selection, in the list box. Must be a valid value corresponding to the fw-select-option components used in Select.
   */
  value: any;
  /**
   * Works with `multiple` enabled. Configures the maximum number of options that can be selected with a multi-select component.
   */
  max: number;
  /**
   * Enables selection of multiple options. If the attribute’s value is undefined, the value is set to false.
   */
  multiple: boolean;
  /**
   * Enables the input with in the popup for filtering the options.
   */
  searchable: boolean;
  /**
   * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
  /**
   * Standard is the default option without any graphics other options are icon and avatar which places either the icon or avatar at the beginning of the row.
   * The props for the icon or avatar are passed as an object via the graphicsProps.
   */
  variant: DropdownVariant;
  /**
   * The text to filter the options.
   */
  filterText: any;
  /**
   * Place a checkbox.
   */
  checkbox: boolean;
  /**
   * hide tick mark icon on select option
   */
  hideTick: boolean;
  /**
   * Default option to be shown if the option doesn't match the filterText.
   */
  notFoundText: string;
  /**
   * Filter function which takes in filterText and dataSource and return a Promise.
   * Where filter text is the text to filter the value in dataSource array.
   * The returned promise should contain the array of options to be displayed.
   */
  search: (text: string, dataSource: any[]) => Promise<any[]>;
  /**
   * Placeholder to placed on the search text box.
   */
  searchText: string;
  /**
   * Text to be displayed when there is no data available in the select.
   */
  noDataText: string;
  /**
   * Debounce timer for the search promise function.
   */
  debounceTimer: number;
  /**
   * The option that is displayed as the default selection, in the list box. Must be a valid value corresponding to the fw-select-option components used in Select.
   */
  selectedOptions: any[];
  /**
   * Whether clicking on the already selected option disables it.
   */
  allowDeselect: boolean;
  /**
   * Allows user to create the option if the provided input doesn't match with any of the options.
   */
  isCreatable: boolean;
  /**
   * Works only when 'isCreatable' is selected. Function to validate the newly created value. Should return true if new option is valid or false if invalid.
   */
  validateNewOption: (value: string) => boolean;
  /**
   * Works only when 'isCreatable' is selected. Function to format the create label displayed as an option.
   */
  formatCreateLabel: (value: string) => string;
  /**
   * Whether clicking on option selects it.
   */
  allowSelect: boolean;
  /**
   *  Key for determining the label for a given option
   */
  optionLabelPath: string;
  /**
   *  Key for determining the value for a given option
   */
  optionValuePath: string;
  /**
   * Triggered when a value is selected or deselected from the list box options.
   */
  fwChange: EventEmitter;
  /**
   * Triggered when the options list is in loading state processing the search function.
   */
  fwLoading: EventEmitter;
  fwSelectedHandler(selectedItem: any): void;
  onKeyDown(ev: any): void;
  clearFilter(): Promise<void>;
  scrollToLastSelected(): Promise<void>;
  getSelectedOptions(): Promise<any>;
  /**
   * Pass an array of string in case of multi-select or string for single-select.
   */
  setSelectedValues(values: any): Promise<any>;
  setSelectedOptions(options: any[]): Promise<any>;
  setFocus(): Promise<any>;
  onOptionsChange(newValue: any): void;
  disabledWatcher(): void;
  onValueChange(newValue: any, oldValue: any): void;
  onFilterTextChange(newValue: any): void;
  onSelectedOptionsChange(newValue: any): void;
  valueExists(): boolean;
  validateValue(value: any): void;
  handleSearchWithDebounce: (...args: any[]) => void;
  getLastSelectedValue(): any;
  setSelectedOptionsByValue(values: any): void;
  serializeData(dataSource: any): any;
  isValueEqual(value: any, option: any): any;
  setValue(options: any): void;
  setDataSource(dataSource: any): void;
  renderSelectOptions(options: Array<any>): any[];
  renderSearchInput(): any;
  componentWillLoad(): void;
  render(): any;
}
