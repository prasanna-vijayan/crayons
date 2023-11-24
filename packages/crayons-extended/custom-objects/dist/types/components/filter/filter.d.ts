import { EventEmitter } from '../../stencil-public-runtime';
export declare class Filter {
  private identifier;
  host: HTMLElement;
  sourceFilterOptions: any[];
  filterOptions: any;
  initialFilterConditions: any;
  filterConditions: {};
  showSearch: boolean;
  /**
   * Data for the filter ex., { hotel_name: { text: 'Hotel Name', type: 'TEXT' }, hotel_rating: {} }
   */
  filters: {};
  /**
   * The condition schema
   */
  conditionSchema: {};
  /**
   * The value to populate the filters
   */
  value: any;
  /**
   * Triggered whenever the user selects/removes a filter option.
   */
  fwFilterChange: EventEmitter;
  onSelection(e: any): void;
  onConditionDelete(e: any): void;
  onFiltersChange(newValue: any): void;
  onFilterConditions(newValue: any): void;
  getValue(): Promise<any>;
  clearFilter(): Promise<any>;
  resetFilter(): Promise<any>;
  orderCondition(conditions: any): {};
  isFiltersAvailable(): boolean;
  setSourceFilterOptions(filters: any): void;
  getDefaultCondition(conditionSchema: any): string;
  emitFilterSelection(selectedFilters: any): void;
  setInitialState(value: any): void;
  saveCurrentState(newValue: any): void;
  loadSavedState(): void;
  setFilterOptions(value: any): void;
  renderContent(filterConditions: any): any[];
  componentWillLoad(): void;
  render(): any;
}
