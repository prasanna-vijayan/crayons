/// <reference types="react" />
import { EventEmitter } from '../../stencil-public-runtime';
import { Instance } from '@popperjs/core';
import { WidthStyles, DataTableColumn, DataTableRow, DataTableAction, DataTableActionWithGraphics } from '../../utils/types';
export declare class DataTable {
  /**
   * To get access to the host element
   */
  el: HTMLFwDataTableElement;
  /**
   * Label attribute is not visible on screen. There for accessibility purposes.
   */
  label: string;
  /**
   * To enable bulk actions on the table.
   */
  rowActions: DataTableAction[] | DataTableActionWithGraphics[];
  /**
   * To show row actions as a kebab menu
   */
  showRowActionsAsMenu: boolean;
  /**
   * Header label for row actions column
   */
  rowActionsHeaderLabel: any;
  /**
   * Standard is the default option without any graphics other option is icon which places the icon at the beginning of the row.
   * The props for the icon are passed as iconName and iconLibrary via the rowActions prop.
   */
  rowActionsMenuVariant: 'standard' | 'icon';
  /**
   * Ability to add width related properties to rowActions.
   * Helps solve settings icon overlap with actions label.
   */
  rowActionsWidthProperties: null | WidthStyles;
  /**
   * Rows Array of objects to be displayed in the table.
   */
  rows: DataTableRow[];
  /**
   * Columns Array of objects that provides information regarding the columns in the table.
   */
  columns: DataTableColumn[];
  /**
   * isSelectable Boolean based on which selectable options appears for rows in the table.
   */
  isSelectable: boolean;
  /**
   * isAllSelectable Boolean based on which select all option appears in the table header
   */
  isAllSelectable: boolean;
  /**
   * showSettings is used to show the settings button on the table.
   */
  showSettings: boolean;
  /**
   * autoSaveSettings to enable auto saving of table settings to `localstorage`.
   * If set to `true`, make sure `id` attribute is also set to the `data-table`
   */
  autoSaveSettings: boolean;
  /**
   * To disable table during async operations
   */
  isLoading: boolean;
  /**
   * shimmerCount number of shimmer rows to show during initial loading
   */
  shimmerCount: number;
  /**
   * orderedColumns Maintains a collection of ordered columns.
   */
  orderedColumns: DataTableColumn[];
  /**
   * selected Array of selected row id.
   */
  selected: string[];
  /**
   * Collection of rows loading
   */
  rowsLoading: {};
  /**
   * Temporary setting for table column drag/drop configuration
   */
  columnsDragSetting: any[];
  /**
   * Temporary settings for table column hide/show configuration
   */
  columnsHideSetting: any[];
  /**
   * isSettingsOpen when true shows table settings container.
   */
  isSettingsOpen: boolean;
  /**
   * text to search for columns in settings.
   */
  settingSearchText: string;
  /**
   * disable column hide options when only one column is visible.
   */
  disabledColumnHide: boolean;
  /**
   * show shimmer on set to false after intial table load.
   */
  showShimmer: boolean;
  /**
   * width of the columns is auto calculated as table width is lesser than container width.
   */
  ifAutoCalculatedWidth: boolean;
  /**
   * fwSelectionChange Emits this event when row is selected/unselected.
   */
  fwSelectionChange: EventEmitter;
  /**
   * fwSelectAllChange Emits this event when select all is checked.
   */
  fwSelectAllChange: EventEmitter;
  /**
   * Private
   * To perform actions after a render
   * WorkAround for stencil wait for next render
   * https://github.com/ionic-team/stencil/issues/2744
   */
  renderPromiseResolve: any;
  popperInstance: Instance;
  settingsButton: HTMLElement;
  settingsUpdateButton: HTMLFwButtonElement;
  settingsResetButton: HTMLElement;
  settingsInput: HTMLFwInputElement;
  settingsDragContainer: HTMLFwDragContainerElement;
  settings: HTMLElement;
  tableContainer: HTMLElement;
  selectColumnHeader: HTMLElement;
  lastColumnHeader: HTMLElement;
  /**
   * componentWillLoad lifecycle event
   */
  componentWillLoad(): void;
  /**
   * componentDidLoad lifecycle event
   */
  componentDidLoad(): void;
  /**
   * componentDidRender lifecycle event
   */
  componentDidRender(): void;
  disconnectedCallback(): void;
  /**
   * keyDownHandler
   * @param event
   */
  keyDownHandler(event: any): void;
  /**
   * showSettingsHandler
   * @param showSettings
   */
  showSettingsHandler(showSettings: any): void;
  /**
   * columnsChangeHandler
   * @param newColumns recent datatable columns value
   */
  columnsChangeHandler(newColumns: DataTableColumn[]): Promise<void>;
  /**
   * watchChangeHandler
   * @param newRows recent datatable columns value
   */
  rowsChangeHandler(newRows: DataTableRow[]): void;
  loadingHandler(): void;
  /**
   * Private
   * selectRow
   * @param rowId Id of row to select/unselect in the table
   * @param checked option to select/unselct
   * @returns currently selected rows
   */
  selectRow(rowId: string, checked?: boolean): string[];
  /**
   * selectAllRows method we can use to select/unselect rows in the table
   * @param checked denotes if we want to check or uncheck the rows
   */
  selectAllRows(checked?: boolean): Promise<string[]>;
  /**
   * getSelectedRows
   * @returns selected rows from the data table
   */
  getSelectedRows(): Promise<DataTableRow[]>;
  /**
   * getSelectedIds
   * @returns an array of selected row IDs
   */
  getSelectedIds(): Promise<string[]>;
  /**
   * getTableSettings
   * @returns columnConfig object
   */
  getTableSettings(): Promise<{}>;
  /**
   * setTableSettings
   * @param columnConfig columnConfig object
   */
  setTableSettings(columnConfig: any): Promise<DataTableColumn[]>;
  /**
   * loadTable - Method to call when we want to change table loading state
   * @param state to load table or not
   * @returns isLoading current state
   */
  loadTable(state?: boolean): Promise<boolean>;
  /**
   * hideShimmer
   */
  hideShimmer(): void;
  /**
   * Private
   * getColumnsState function to call when updating a column state.
   * Updating state using this function can help update the UI easily.
   * @param state current state to modify
   * @param stateKey key that can help identify what object in state to identify
   * @param keyValuePairs key value pair to modify the object
   * @returns modifies state object
   */
  getColumnsState(state: any, stateKey: any, keyValuePairs: any): any[];
  /**
   * Private
   * lockFocusInside lock the focus inside modal overlay
   */
  lockFocusInsideSettings(): void;
  /**
   * Private
   * toggleSettings
   * @param isOpen opens/closes the table
   * @return isOpen current open/close state
   */
  toggleSettings(isOpen?: boolean): Promise<boolean>;
  /**
   * resetSettings function to reset the temporary column state in settings using table column state.
   */
  resetSettings(): Promise<void>;
  /**
   * applySettings function to apply temporary column state in settings to tables column state
   */
  applySettings(): Promise<void>;
  /**
   * arrowNavigation function that helps with table navigation
   * @param event event that triggers navigation inside table
   */
  arrowNavigate(event: KeyboardEvent): void;
  /**
   * arrowNavigateCellComponents Navigate between components in a cell
   * @param eventCode code for the keyboard event
   * @param currentElement current element the focus is on
   * @returns cellFocusChange boolean tells if this a navigation between cells
   */
  arrowNavigateCellComponents(eventCode: any, currentElement: any): boolean;
  /**
   * arrowNavigateCell navigate between table cells
   * @param eventCode code for the keyboard event
   * @param currentCell current cell the focus is on
   */
  arrowNavigateCell(eventCode: any, currentCell: any): void;
  /**
   * get event's path which is an array of the objects
   * event.path unsupported in safari
   */
  getEventPath(event: any): any;
  /**
   * Function to check if a row action contains graphicsProps or not
   * @param action data table row action
   */
  isActionWithGraphics(action: DataTableAction | DataTableActionWithGraphics): action is DataTableActionWithGraphics;
  /**
   * WorkAround for wait until next render in stenciljs
   * https://github.com/ionic-team/stencil/issues/2744
   */
  waitForNextRender(): Promise<unknown>;
  /**
   * Function to call when removing the focus of a table cell
   * @param cell table cell
   */
  removeFocusCell(cell: HTMLElement): void;
  /**
   * Function to call when focusing a table cell
   * @param cell table cell
   * @param direction key direction when focus comes into cell
   */
  focusCell(cell: HTMLElement, direction?: string): void;
  /**
   * hasFocusableComponent - determines if a cell has focusable component
   * @param column column information
   * @returns {boolean} hasFocusableComponent
   */
  hasFocusableComponent(column: DataTableColumn): boolean;
  /**
   * private
   * closestTableCell Find the closest table cell from the path of the event
   * @param eventPath Event path from the emitted event
   * @returns closest table cell
   */
  closestTableCell(eventPath: any): any;
  /**
   * columnOrdering Sorting columns based on position to show columns in the right order visually.
   * @param columns
   */
  columnOrdering(columns: DataTableColumn[]): void;
  /**
   * performRowAction
   * @param action action object - has information related to the action to be performed
   * @param rowData rowData - complete data of the current row
   */
  performRowAction(action: DataTableAction | DataTableActionWithGraphics, rowData: DataTableRow): Promise<void>;
  /**
   * getRowActionMenuProps
   * @param rowData rowData - complete data of the current row
   * @returns props for kebab menu
   */
  getRowActionMenuProps(rowData: DataTableRow): {
    options: any[];
    onFwSelect: (event: any) => Promise<void>;
  };
  /**
   * renderKebabMenu
   * @param rowData rowData - complete data of the current row
   * @returns kebab menu component
   */
  renderKebabMenu(rowData: DataTableRow): any;
  /**
   * Settings search handler
   * @param searchText text to search for in columns list
   */
  settingsSearch(searchText: string): void;
  /**
   * Settings checkbox handler
   * @param columnKey table column key
   * @param checked value for checked
   * @param event event that is triggering this action
   */
  settingsColumnToggle(columnKey: string, checked: boolean, event?: any): Promise<any[]>;
  /**
   * settingsColumnDrop
   * @param columnKey table column key
   * @param droppedIndex value for position
   */
  settingsColumnDrop(columnKey: string, droppedIndex: number): Promise<any[]>;
  /**
   * private
   * @returns {JSX.Element} returns jsx for a webcomponent
   */
  renderWebComponent(componentName: string, props: any): JSX.Element;
  /**
   * private
   * @returns {JSX.Element} returns jsx for a custom HTML template
   */
  renderCustomTemplate(customTemplate: DataTableColumn['customTemplate'], cellValue: any): any;
  /**
   * private
   * @returns {JSX.Element} returns jsx from a predefined set of components
   */
  renderPredefinedVariant(columnVariant: string, cellValue: any): JSX.Element;
  /**
   * private
   * @returns {JSX.Element} table body cell
   */
  renderTableCell(column: DataTableColumn, cellValue: any): JSX.Element;
  /**
   * private
   * @returns {JSX.Element} table header row
   */
  renderTableHeader(): any;
  /**
   * private
   * @returns table body rows
   */
  renderTableBody(): any[];
  /**
   * renderTableSettings
   * @returns table settings
   */
  renderTableSettings(): any;
  /**
   * private
   * @returns table shimmer
   */
  renderTableShimmer(): any[];
  /**
   * render method
   */
  render(): any;
}
