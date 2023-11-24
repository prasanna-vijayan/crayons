import { Component, Element, Watch, Prop, h, Method, Fragment, State, Listen, Event, } from '@stencil/core';
import { TranslationController } from '../../global/Translation';
export class PlatformTable {
  constructor() {
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
    return (h("fw-button", { class: 'action-items', color: 'secondary', onClick: this.onDelete.bind(this) },
      h("fw-icon", { slot: 'before-label', name: 'delete' }),
      h("span", null, TranslationController.t('platformTable.delete'))));
  }
  renderSort() {
    return (h(Fragment, null,
      h("label", { class: 'sort-label' },
        TranslationController.t('platformTable.sortby'),
        ":"),
      h("fw-sort-select", { class: 'sort', orderBy: this.orderBy, order: this.order, sortOptions: this.orderByData })));
  }
  componentWillLoad() {
    this.defaultProps = this.host.id ? { id: `platform-${this.host.id}` } : {};
    this.setSortableColumns(this.sortableColumns);
  }
  componentDidLoad() {
    this.loading && this.onLoadingChange(this.loading);
  }
  render() {
    return (h(Fragment, null,
      h("div", { class: 'toolbar' },
        h("span", { class: 'toolbar-prefix' },
          this.isSelectable && (h("fw-checkbox", { id: 'selectAll', disabled: this.showError, checked: this.checkAll })),
          this.showDelete ? this.renderDeleteButton() : this.renderSort()),
        h("span", { class: 'toolbar-suffix' },
          h("slot", { name: 'toolbar-before' }),
          h("fw-pagination", Object.assign({}, this.paginationProps)),
          h("slot", { name: 'toolbar-after' }))),
      this.showError ? (h("slot", { name: 'error-state' })) : (h("fw-data-table", Object.assign({ style: this.style }, this.defaultProps, this.tableProps, { class: 'table', ref: (table) => {
          this.table = table;
        }, isSelectable: this.isSelectable })))));
  }
  static get is() { return "fw-platform-table"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["platform-table.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["platform-table.css"]
  }; }
  static get properties() { return {
    "tableProps": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{}",
        "resolved": "{}",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Props for the fw-pagination component"
      },
      "defaultValue": "{}"
    },
    "paginationProps": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{}",
        "resolved": "{}",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Props for the fw-pagination component"
      },
      "defaultValue": "{}"
    },
    "customStyles": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "{ [key: string]: string } | string",
        "resolved": "string | { [key: string]: string; }",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "type",
            "text": "{({[k: string]: string} | string)}"
          }],
        "text": "Custom css styles (background/margins/width/height etc.)"
      },
      "attribute": "custom-styles",
      "reflect": false,
      "defaultValue": "{}"
    },
    "tableWidth": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Width of the data-table ex. 100vh, 100%, auto etc."
      },
      "attribute": "table-width",
      "reflect": false,
      "defaultValue": "null"
    },
    "tableHeight": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Height of the data-table ex. 100vh, 100%, auto etc."
      },
      "attribute": "table-height",
      "reflect": false,
      "defaultValue": "null"
    },
    "orderBy": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The sort by column key."
      },
      "attribute": "order-by",
      "reflect": true
    },
    "order": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The sort order."
      },
      "attribute": "order",
      "reflect": true
    },
    "loading": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The sort order."
      },
      "attribute": "loading",
      "reflect": true,
      "defaultValue": "false"
    },
    "showError": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "When set true the error state slot will be shown."
      },
      "attribute": "show-error",
      "reflect": true,
      "defaultValue": "false"
    },
    "sortableColumns": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{}",
        "resolved": "{}",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The sortable columns object."
      },
      "defaultValue": "{}"
    },
    "isSelectable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether the checkbox should be visible."
      },
      "attribute": "is-selectable",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get states() { return {
    "orderByData": {},
    "showDelete": {},
    "checkAll": {}
  }; }
  static get events() { return [{
      "method": "fwDelete",
      "name": "fwDelete",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered on selecting the sort option."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwPagination",
      "name": "fwPagination",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered on page navigation button click."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "clearTableSelection": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "clears the selected rows in the table.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "loading",
      "methodName": "onLoadingChange"
    }]; }
  static get listeners() { return [{
      "name": "fwSelectionChange",
      "method": "onTableSelectionChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fwChange",
      "method": "onChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
