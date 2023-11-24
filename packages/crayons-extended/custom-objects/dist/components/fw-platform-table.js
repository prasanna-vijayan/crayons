import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { T as TranslationController } from './Translation.js';
import { d as defineCustomElement$m } from './avatar.js';
import { d as defineCustomElement$l } from './button.js';
import { d as defineCustomElement$k } from './button-group.js';
import { d as defineCustomElement$j } from './checkbox.js';
import { d as defineCustomElement$i } from './custom-cell-anchor.js';
import { d as defineCustomElement$h } from './custom-cell-icon.js';
import { d as defineCustomElement$g } from './custom-cell-paragraph.js';
import { d as defineCustomElement$f } from './custom-cell-user.js';
import { d as defineCustomElement$e } from './data-table.js';
import { d as defineCustomElement$d } from './drag-container.js';
import { d as defineCustomElement$c } from './icon.js';
import { d as defineCustomElement$b } from './input.js';
import { d as defineCustomElement$a } from './kebab-menu.js';
import { d as defineCustomElement$9 } from './list-options.js';
import { d as defineCustomElement$8 } from './pagination.js';
import { d as defineCustomElement$7 } from './popover.js';
import { d as defineCustomElement$6 } from './select-option.js';
import { d as defineCustomElement$5 } from './skeleton.js';
import { d as defineCustomElement$4 } from './sort-select.js';
import { d as defineCustomElement$3 } from './spinner.js';
import { d as defineCustomElement$2 } from './tooltip.js';

const platformTableCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-margin-after:8px;margin-block-end:8px;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-after:12px;padding-block-end:12px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-before:12px;padding-block-start:12px;background:#ffffff;border:1px solid rgba(207, 215, 223, 0.4);-webkit-box-shadow:0px 1px 4px rgba(18, 52, 77, 0.16);box-shadow:0px 1px 4px rgba(18, 52, 77, 0.16);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.toolbar .action-items{-webkit-margin-start:12px;margin-inline-start:12px}.toolbar .sort-label{font-size:14px;-webkit-margin-start:16px;margin-inline-start:16px;color:#465789;font-weight:400}.toolbar #selectAll{width:16px}.toolbar-suffix,.toolbar-prefix{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.toolbar-suffix ::slotted(*),.toolbar-prefix ::slotted(*){-webkit-margin-start:8px;margin-inline-start:8px}.table{height:var(--fw-platform-table-width, 100%);width:var(--fw-platform-table-height, 100%);border:1px solid rgba(207, 215, 223, 0.4);border-end-start-radius:0px;border-end-end-radius:0px;border-start-end-radius:4px;border-start-start-radius:4px;-webkit-box-shadow:0px 1px 4px rgba(18, 52, 77, 0.16);box-shadow:0px 1px 4px rgba(18, 52, 77, 0.16)}";

const PlatformTable = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwDelete = createEvent(this, "fwDelete", 7);
    this.fwPagination = createEvent(this, "fwPagination", 7);
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
    return (h("fw-button", { class: 'action-items', color: 'secondary', onClick: this.onDelete.bind(this) }, h("fw-icon", { slot: 'before-label', name: 'delete' }), h("span", null, TranslationController.t('platformTable.delete'))));
  }
  renderSort() {
    return (h(Fragment, null, h("label", { class: 'sort-label' }, TranslationController.t('platformTable.sortby'), ":"), h("fw-sort-select", { class: 'sort', orderBy: this.orderBy, order: this.order, sortOptions: this.orderByData })));
  }
  componentWillLoad() {
    this.defaultProps = this.host.id ? { id: `platform-${this.host.id}` } : {};
    this.setSortableColumns(this.sortableColumns);
  }
  componentDidLoad() {
    this.loading && this.onLoadingChange(this.loading);
  }
  render() {
    return (h(Fragment, null, h("div", { class: 'toolbar' }, h("span", { class: 'toolbar-prefix' }, this.isSelectable && (h("fw-checkbox", { id: 'selectAll', disabled: this.showError, checked: this.checkAll })), this.showDelete ? this.renderDeleteButton() : this.renderSort()), h("span", { class: 'toolbar-suffix' }, h("slot", { name: 'toolbar-before' }), h("fw-pagination", Object.assign({}, this.paginationProps)), h("slot", { name: 'toolbar-after' }))), this.showError ? (h("slot", { name: 'error-state' })) : (h("fw-data-table", Object.assign({ style: this.style }, this.defaultProps, this.tableProps, { class: 'table', ref: (table) => {
        this.table = table;
      }, isSelectable: this.isSelectable })))));
  }
  get host() { return this; }
  static get watchers() { return {
    "loading": ["onLoadingChange"]
  }; }
  static get style() { return platformTableCss; }
}, [1, "fw-platform-table", {
    "tableProps": [16],
    "paginationProps": [16],
    "customStyles": [1, "custom-styles"],
    "tableWidth": [1, "table-width"],
    "tableHeight": [1, "table-height"],
    "orderBy": [1544, "order-by"],
    "order": [1544],
    "loading": [516],
    "showError": [516, "show-error"],
    "sortableColumns": [16],
    "isSelectable": [4, "is-selectable"],
    "orderByData": [32],
    "showDelete": [32],
    "checkAll": [32],
    "clearTableSelection": [64]
  }, [[0, "fwSelectionChange", "onTableSelectionChange"], [0, "fwChange", "onChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-platform-table", "fw-avatar", "fw-button", "fw-button-group", "fw-checkbox", "fw-custom-cell-anchor", "fw-custom-cell-icon", "fw-custom-cell-paragraph", "fw-custom-cell-user", "fw-data-table", "fw-drag-container", "fw-icon", "fw-input", "fw-kebab-menu", "fw-list-options", "fw-pagination", "fw-popover", "fw-select-option", "fw-skeleton", "fw-sort-select", "fw-spinner", "fw-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-platform-table":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PlatformTable);
      }
      break;
    case "fw-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$m();
      }
      break;
    case "fw-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$l();
      }
      break;
    case "fw-button-group":
      if (!customElements.get(tagName)) {
        defineCustomElement$k();
      }
      break;
    case "fw-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$j();
      }
      break;
    case "fw-custom-cell-anchor":
      if (!customElements.get(tagName)) {
        defineCustomElement$i();
      }
      break;
    case "fw-custom-cell-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$h();
      }
      break;
    case "fw-custom-cell-paragraph":
      if (!customElements.get(tagName)) {
        defineCustomElement$g();
      }
      break;
    case "fw-custom-cell-user":
      if (!customElements.get(tagName)) {
        defineCustomElement$f();
      }
      break;
    case "fw-data-table":
      if (!customElements.get(tagName)) {
        defineCustomElement$e();
      }
      break;
    case "fw-drag-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "fw-kebab-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "fw-list-options":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "fw-pagination":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "fw-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "fw-select-option":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "fw-skeleton":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "fw-sort-select":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "fw-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-tooltip":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const FwPlatformTable = PlatformTable;
const defineCustomElement = defineCustomElement$1;

export { FwPlatformTable, defineCustomElement };
