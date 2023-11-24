'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62345b50.js');
const Translation = require('./Translation-95805542.js');
require('./index-e99fea28.js');

const platformTableCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-margin-after:8px;margin-block-end:8px;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-after:12px;padding-block-end:12px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-before:12px;padding-block-start:12px;background:#ffffff;border:1px solid rgba(207, 215, 223, 0.4);-webkit-box-shadow:0px 1px 4px rgba(18, 52, 77, 0.16);box-shadow:0px 1px 4px rgba(18, 52, 77, 0.16);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.toolbar .action-items{-webkit-margin-start:12px;margin-inline-start:12px}.toolbar .sort-label{font-size:14px;-webkit-margin-start:16px;margin-inline-start:16px;color:#465789;font-weight:400}.toolbar #selectAll{width:16px}.toolbar-suffix,.toolbar-prefix{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.toolbar-suffix ::slotted(*),.toolbar-prefix ::slotted(*){-webkit-margin-start:8px;margin-inline-start:8px}.table{height:var(--fw-platform-table-width, 100%);width:var(--fw-platform-table-height, 100%);border:1px solid rgba(207, 215, 223, 0.4);border-end-start-radius:0px;border-end-end-radius:0px;border-start-end-radius:4px;border-start-start-radius:4px;-webkit-box-shadow:0px 1px 4px rgba(18, 52, 77, 0.16);box-shadow:0px 1px 4px rgba(18, 52, 77, 0.16)}";

const PlatformTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwDelete = index.createEvent(this, "fwDelete", 7);
    this.fwPagination = index.createEvent(this, "fwPagination", 7);
    this.orderByData = [];
    this.showDelete = false;
    this.checkAll = false;
    this.selectedRows = [];
    /**
     * Props for the fw-pagination component
     */
    this.tableProps = {};
    /**
     * Props for the fw-pagination component
     */
    this.paginationProps = {};
    /**
     * Custom css styles (background/margins/width/height etc.)
     *
     * @type {({[k: string]: string} | string)}
     */
    this.customStyles = {};
    /**
     * Width of the data-table ex. 100vh, 100%, auto etc.
     */
    this.tableWidth = null;
    /**
     * Height of the data-table ex. 100vh, 100%, auto etc.
     */
    this.tableHeight = null;
    /**
     * The sort order.
     */
    this.loading = false;
    /**
     * When set true the error state slot will be shown.
     */
    this.showError = false;
    /**
     * The sortable columns object.
     */
    this.sortableColumns = {};
    /**
     * Whether the checkbox should be visible.
     */
    this.isSelectable = true;
  }
  onLoadingChange(newValue) {
    if (this.showError)
      return;
    this.table.loadTable(newValue);
  }
  onTableSelectionChange(e) {
    const selected = e.detail.selected;
    this.setSelectedRow(selected);
  }
  onChange(e) {
    var _a, _b;
    if (e.composedPath()[0].tagName === 'FW-PAGINATION') {
      this.clearTableSelection();
      this.fwPagination.emit(e.detail);
    }
    else if (e.composedPath()[0].id === 'selectAll') {
      this.table.selectAllRows((_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.checked).then((selectedIds) => {
        this.checkAll = true;
        this.setSelectedRow(selectedIds, true);
      });
    }
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
  }
  get style() {
    const dimensionsStyles = {
      width: null,
      height: null,
    };
    if (this.tableWidth) {
      dimensionsStyles.width = this.tableWidth;
    }
    if (this.tableHeight) {
      dimensionsStyles.height = this.tableHeight;
    }
    const styles = typeof this.customStyles === 'object' ? this.customStyles : {};
    return Object.assign(Object.assign({}, dimensionsStyles), styles);
  }
  /**
   * clears the selected rows in the table.
   */
  async clearTableSelection() {
    if (this.showError)
      return;
    this.table.selectAllRows(false);
    this.setSelectedRow([]);
  }
  setSelectedRow(selectedIds, skipCheck = false) {
    this.selectedRows = selectedIds.length > 0 ? selectedIds : [];
    this.showDelete = this.selectedRows.length > 0 ? true : false;
    if (!skipCheck) {
      this.checkAll =
        this.tableProps['rows'].length > 0 &&
          this.tableProps['rows'].length === this.selectedRows.length &&
          this.tableProps['rows'].every((row) => this.selectedRows.includes(row.id));
    }
  }
  setSortableColumns(sortableColumns) {
    this.orderByData = Object.keys(sortableColumns).map((columnKey) => {
      return Object.assign(Object.assign({}, sortableColumns[columnKey]), { value: columnKey });
    });
  }
  onDelete() {
    this.fwDelete.emit({ selectedRows: this.selectedRows });
  }
  renderDeleteButton() {
    return (index.h("fw-button", { class: 'action-items', color: 'secondary', onClick: this.onDelete.bind(this) }, index.h("fw-icon", { slot: 'before-label', name: 'delete' }), index.h("span", null, Translation.TranslationController.t('platformTable.delete'))));
  }
  renderSort() {
    return (index.h(index.Fragment, null, index.h("label", { class: 'sort-label' }, Translation.TranslationController.t('platformTable.sortby'), ":"), index.h("fw-sort-select", { class: 'sort', orderBy: this.orderBy, order: this.order, sortOptions: this.orderByData })));
  }
  componentWillLoad() {
    this.defaultProps = this.host.id ? { id: `platform-${this.host.id}` } : {};
    this.setSortableColumns(this.sortableColumns);
  }
  componentDidLoad() {
    this.loading && this.onLoadingChange(this.loading);
  }
  render() {
    return (index.h(index.Fragment, null, index.h("div", { class: 'toolbar' }, index.h("span", { class: 'toolbar-prefix' }, this.isSelectable && (index.h("fw-checkbox", { id: 'selectAll', disabled: this.showError, checked: this.checkAll })), this.showDelete ? this.renderDeleteButton() : this.renderSort()), index.h("span", { class: 'toolbar-suffix' }, index.h("slot", { name: 'toolbar-before' }), index.h("fw-pagination", Object.assign({}, this.paginationProps)), index.h("slot", { name: 'toolbar-after' }))), this.showError ? (index.h("slot", { name: 'error-state' })) : (index.h("fw-data-table", Object.assign({ style: this.style }, this.defaultProps, this.tableProps, { class: 'table', ref: (table) => {
        this.table = table;
      }, isSelectable: this.isSelectable })))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "loading": ["onLoadingChange"]
  }; }
};
PlatformTable.style = platformTableCss;

exports.fw_platform_table = PlatformTable;
