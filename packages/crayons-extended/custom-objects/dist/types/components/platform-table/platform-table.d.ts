import { EventEmitter } from '../../stencil-public-runtime';
export declare class PlatformTable {
  orderByData: any[];
  showDelete: boolean;
  checkAll: boolean;
  host: HTMLElement;
  private table;
  private defaultProps;
  private selectedRows;
  /**
   * Props for the fw-pagination component
   */
  tableProps: {};
  /**
   * Props for the fw-pagination component
   */
  paginationProps: {};
  /**
   * Custom css styles (background/margins/width/height etc.)
   *
   * @type {({[k: string]: string} | string)}
   */
  customStyles: {
    [key: string]: string;
  } | string;
  /**
   * Width of the data-table ex. 100vh, 100%, auto etc.
   */
  tableWidth: string;
  /**
   * Height of the data-table ex. 100vh, 100%, auto etc.
   */
  tableHeight: string;
  /**
   * The sort by column key.
   */
  orderBy: any;
  /**
   * The sort order.
   */
  order: any;
  /**
   * The sort order.
   */
  loading: boolean;
  /**
   * When set true the error state slot will be shown.
   */
  showError: boolean;
  /**
   * The sortable columns object.
   */
  sortableColumns: {};
  /**
   * Whether the checkbox should be visible.
   */
  isSelectable: boolean;
  /**
   * Triggered on selecting the sort option.
   */
  fwDelete: EventEmitter;
  /**
   * Triggered on page navigation button click.
   */
  fwPagination: EventEmitter;
  onLoadingChange(newValue: any): void;
  onTableSelectionChange(e: any): void;
  onChange(e: any): void;
  get style(): any;
  /**
   * clears the selected rows in the table.
   */
  clearTableSelection(): Promise<void>;
  setSelectedRow(selectedIds: any, skipCheck?: boolean): void;
  setSortableColumns(sortableColumns: any): void;
  onDelete(): void;
  renderDeleteButton(): any;
  renderSort(): any;
  componentWillLoad(): void;
  componentDidLoad(): void;
  render(): any;
}
