import { EventEmitter } from '../../stencil-public-runtime';
export declare class CoExport {
  host: HTMLElement;
  private SEARCH_COUNT;
  private debouncedHandleInput;
  private boolAddedClearFilterEvent;
  allFieldsSelected: boolean;
  arrSearchedFields: any;
  searching: boolean;
  searchText: string;
  clearFilter: boolean;
  selectedFieldCount: number;
  /**
   * The value to show the modal or close
   */
  isOpen: boolean;
  /**
   * The value to populate the export details in json format
   */
  value: any;
  /**
   * Triggered whenever the export button is selected
   */
  fwExport: EventEmitter;
  /**
   * Triggered whenever the cancel/close button is selected
   */
  fwCloseExport: EventEmitter;
  close(): Promise<boolean>;
  open(): Promise<boolean>;
  componentWillLoad(): void;
  componentDidUpdate(): void;
  disconnectedCallback(): void;
  private resetStates;
  private initializeSearchDebounce;
  private addClearFilterEvent;
  private updateSelectedCount;
  private clearFiltersHandler;
  private searchChangeHandler;
  private clearSearchHandler;
  private selectAllFieldsChangeHandler;
  private fieldSelectionChangeHandler;
  private closeModalHandler;
  private exportHandler;
  private exportFormatChangeHandler;
  private renderCheckboxField;
  render(): any;
}
