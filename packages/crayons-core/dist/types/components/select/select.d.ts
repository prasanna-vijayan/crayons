import { EventEmitter } from '../../stencil-public-runtime';
import { DropdownVariant, TagVariant, PopoverPlacementType } from '../../utils/types';
export declare class Select {
  host: HTMLElement;
  private selectInput?;
  private fwListOptions?;
  private popoverRef?;
  private tagContainer;
  private tagArrowKeyCounter;
  private hostId;
  private changeEmittable;
  private innerOnFocus;
  private innerOnClick;
  private innerOnBlur;
  private openDropdown;
  private closeDropdown;
  /**
   * If the dropdown is shown or not
   */
  isExpanded: boolean;
  hasFocus: boolean;
  searchValue: any;
  dataSource: any;
  selectedOptionsState: any[];
  isLoading: boolean;
  focusedOptionId: string;
  hasHintTextSlot: boolean;
  hasWarningTextSlot: boolean;
  hasErrorTextSlot: boolean;
  focusedValues: any[];
  /**
   * Label displayed on the interface, for the component.
   */
  label: string;
  /**
   * Value of the option that is displayed as the default selection, in the list box. Must be a valid value corresponding to the fw-select-option components used in Select.
   */
  value: any;
  /**
   * Name of the component, saved as part of form data.
   */
  name: string;
  /**
   * Type of option accepted as the input value. If a user tries to enter an option other than the specified type, the list is not populated.
   */
  type: 'text' | 'number';
  /**
   * Text displayed in the list box before an option is selected.
   */
  placeholder?: string | null;
  /**
   * Theme based on which the list box is styled.
   */
  state: 'normal' | 'warning' | 'error';
  /**
   * If true, the user cannot modify the default value selected. If the attribute's value is undefined, the value is set to true.
   */
  readonly: boolean;
  /**
   * Specifies the select field as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
   */
  required: boolean;
  /**
   * If true, the user must select a value. The default value is not displayed.
   */
  forceSelect: boolean;
  /**
   * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
  /**
   * Enables selection of multiple options. If the attribute’s value is undefined, the value is set to false.
   */
  multiple: boolean;
  /**
   * Works with `multiple` enabled. Configures the maximum number of options that can be selected with a multi-select component.
   */
  max: number;
  /**
   * The UI variant of the select to be used.
   */
  variant: 'button' | 'standard' | 'mail' | 'search';
  /**
   * Standard is the default option without any graphics other options are icon and avatar which places either the icon or avatar at the beginning of the row.
   * The props for the icon or avatar are passed as an object via the graphicsProps.
   */
  optionsVariant: DropdownVariant;
  /**
   * Allow to search for value. Default is true.
   */
  searchable: boolean;
  /**
   * The data for the select component, the options will be of type array of fw-select-options.
   */
  options: any;
  /**
   * Place a checkbox.
   */
  checkbox: boolean;
  /**
   * Default option to be shown if the option doesn't match the filterText.
   */
  notFoundText: string;
  /**
   * Filter function which takes in filterText and dataSource and return a Promise.
   * Where filter text is the text to filter the value in dataSource array.
   * The returned promise should contain the array of options to be displayed.
   */
  search: any;
  /**
   * Text to be displayed when there is no data available in the select.
   */
  noDataText: string;
  /**
   * Debounce timer for the search promise function.
   */
  debounceTimer: number;
  /**
   * Array of the options that is displayed as the default selection, in the list box. Must be a valid option corresponding to the fw-select-option components used in Select.
   */
  selectedOptions: any[];
  /**
   * Whether the select width to be same as that of the options.
   */
  sameWidth: boolean;
  /**
   * Placement of the options list with respect to select.
   */
  optionsPlacement: PopoverPlacementType;
  /**
   * Alternative placement for popover if the default placement is not possible.
   */
  fallbackPlacements: [PopoverPlacementType];
  /**
   * The variant of tag to be used.
   */
  tagVariant: TagVariant;
  /**
   * Whether the arrow/caret should be shown in the select.
   */
  caret: boolean;
  /**
   * If the default label prop is not used, then use this prop to pass the id of the label.
   */
  labelledBy: string;
  /**
   * Whether clicking on the already selected option disables it.
   */
  allowDeselect: boolean;
  /**
   * Hint text displayed below the text box.
   */
  hintText: string;
  /**
   * Warning text displayed below the text box.
   */
  warningText: string;
  /**
   * Error text displayed below the text box.
   */
  errorText: string;
  /**
   * Describes the select's boundary HTMLElement
   */
  boundary: HTMLElement;
  /**
   * Props to be passed for creatable select
   * isCreatable: boolean - If true, select accepts user input that are not present as options and add them as options
   * validateNewOption: (value) => boolean - If passed, this function will determine the error state for every new option entered. If return value is true, error state of the newly created option will be false and if return value is false, then the error state of the newly created option will be true.
   * formatCreateLabel: (label) => string - Gets the label for the "create new ..." option in the menu. Current input value is provided as argument.
   */
  creatableProps: {
    isCreatable: boolean;
    validateNewOption: (_value: any) => boolean;
    formatCreateLabel: (label: any) => string;
  };
  /**
   *  Option to prevent the select options from being clipped when the component is placed inside a container with
   * `overflow: auto|hidden|scroll`.
   */
  hoist: boolean;
  /**
   *  Key for determining the label for a given option
   */
  optionLabelPath: string;
  /**
   *  Key for determining the value for a given option
   */
  optionValuePath: string;
  /**
   *  Sets the max height of select with multiple options selected and displays a scroll when maxHeight value is exceeded
   */
  maxHeight: string;
  /**
   *  Props to be passed for fw-tag components displayed in multi-select.
   */
  tagProps: {};
  /**
   * Triggered when a value is selected or deselected from the list box options.
   */
  fwChange: EventEmitter;
  /**
   * Triggered when the list box comes into focus.
   */
  fwFocus: EventEmitter;
  /**
   * Triggered when the list box loses focus.
   */
  fwBlur: EventEmitter;
  onDropdownClose(e: any): void;
  onDropdownOpen(e: any): void;
  onLoading(event: any): void;
  fwSelectedHandler(selectedItem: any): void;
  fwCloseHandler(ev: any): void;
  onKeyDown(ev: any): void;
  onOptionFocus(event: any): void;
  onOptionBlur(event: any): void;
  optionsChangedHandler(): void;
  onOptionsChange(newValue: any): void;
  onSelectedOptionsChange(newValue: any): void;
  getSelectedItem(): Promise<any>;
  setSelectedValues(values: string | string[]): Promise<any>;
  setSelectedOptions(options: any[]): Promise<any>;
  setFocus(): Promise<any>;
  /**
   * Shows the dropdown panel
   */
  showDropdown(): Promise<any>;
  /**
   * Hides the dropdown panel
   */
  hideDropdown(): Promise<any>;
  matchValueWithOptions: () => void;
  tagContainerKeyDown: (ev: any) => void;
  deleteFocusedTags(): void;
  focusOnTagContainer(): void;
  focusOnTag(index: any): void;
  clearInput(): void;
  isValueEqual(value: any, option: any): any;
  valueExists(): boolean;
  onInput(): void;
  onClickTag(e: any, index: any): void;
  renderTags(): any[];
  renderButtonValue(): any;
  renderInput(): void;
  renderSelectInput(): any;
  onClickOutside(e: any): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  expandWatcher(expanded: boolean): void;
  checkSlotContent(): void;
  getAriaDescribedBy(): string;
  onPaste(e: any): void;
  render(): any;
}
