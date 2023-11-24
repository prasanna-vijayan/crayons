import { EventEmitter } from '../../../stencil-public-runtime';
export declare class SortSelect {
  private sortOrderData;
  private sortDropdown;
  sortColumnName: any;
  isExpanded: any;
  /**
   * Select options for the sortable. Array of objects of type {text: string, value: string}
   */
  sortOptions: any[];
  /**
   * The sort by column key.
   */
  orderBy: any;
  /**
   * The sort order.
   */
  order: any;
  /**
   * Triggered on selecting the sort option.
   */
  fwSort: EventEmitter;
  onDefaultSortChange(newValue: any): void;
  onOptionSelect(e: any): void;
  onDropdownOpen(): void;
  onDropdownClose(): void;
  toggleDropdown(event: Event): void;
  componentWillLoad(): void;
  render(): any;
}
