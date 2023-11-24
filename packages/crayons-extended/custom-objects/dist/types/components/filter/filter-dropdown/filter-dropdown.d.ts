export declare class FilterDropdown {
  private dropdown;
  selectedText: any;
  isExpanded: any;
  /**
   * The filter schema
   */
  options: any;
  /**
   * The selected value
   */
  value: any;
  onSelection(e: any): void;
  onDropdownOpen(): void;
  onDropdownClose(): void;
  componentWillLoad(): void;
  render(): any;
}
