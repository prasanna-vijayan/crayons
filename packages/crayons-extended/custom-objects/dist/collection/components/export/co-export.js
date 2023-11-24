import { Component, Prop, h, Element, Event, Method, State, } from '@stencil/core';
import { TranslationController } from '../../global/Translation';
import { debounce } from '../../utils/utils';
import { deepCloneObject } from '../form-builder/utils/form-builder-utils';
export class CoExport {
  constructor() {
    this.SEARCH_COUNT = 10;
    this.boolAddedClearFilterEvent = false;
    this.allFieldsSelected = false;
    this.arrSearchedFields = null;
    this.searching = false;
    this.searchText = '';
    this.clearFilter = false;
    this.selectedFieldCount = 0;
    /**
     * The value to show the modal or close
     */
    this.isOpen = false;
    /**
     * The value to populate the export details in json format
     */
    this.value = null;
    this.resetStates = () => {
      this.debouncedHandleInput = null;
      this.arrSearchedFields = null;
      this.searching = false;
      this.searchText = '';
      this.allFieldsSelected = false;
      this.clearFilter = false;
      this.selectedFieldCount = 0;
      this.value = null;
    };
    this.initializeSearchDebounce = () => {
      if (!this.debouncedHandleInput) {
        this.debouncedHandleInput = debounce(this.searchChangeHandler, this);
      }
    };
    this.addClearFilterEvent = () => {
      if (!this.boolAddedClearFilterEvent) {
        const linkClearFilter = this.host.shadowRoot.querySelector('.clearExportFilter');
        if (linkClearFilter) {
          this.boolAddedClearFilterEvent = true;
          linkClearFilter.addEventListener('click', this.clearFiltersHandler);
        }
      }
    };
    this.clearFiltersHandler = (event) => {
      var _a;
      event.stopImmediatePropagation();
      event.stopPropagation();
      if ((_a = this.value) === null || _a === void 0 ? void 0 : _a.filter) {
        this.value.filter.value = false;
      }
      this.clearFilter = true;
    };
    this.searchChangeHandler = (event) => {
      var _a, _b, _c, _d;
      event.stopImmediatePropagation();
      event.stopPropagation();
      const strInputText = ((_b = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.trim()) || '';
      this.searchText = strInputText;
      if (strInputText) {
        if (((_d = (_c = this.value) === null || _c === void 0 ? void 0 : _c.fields) === null || _d === void 0 ? void 0 : _d.length) > 0) {
          const strSearchableText = strInputText.toLowerCase();
          const arrResults = this.value.fields.filter(function (dataItem) {
            return dataItem.label.toLowerCase().indexOf(strSearchableText) !== -1;
          });
          this.searching = true;
          this.arrSearchedFields = deepCloneObject(arrResults);
          return;
        }
      }
      this.searching = false;
      this.arrSearchedFields = null;
    };
    this.clearSearchHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.arrSearchedFields = null;
      this.searching = false;
      this.searchText = '';
    };
    this.selectAllFieldsChangeHandler = (event) => {
      var _a, _b;
      event.stopImmediatePropagation();
      event.stopPropagation();
      const boolSelected = event.detail.meta.checked;
      this.allFieldsSelected = boolSelected;
      if (this.searching && this.arrSearchedFields) {
        const intSearchLength = this.arrSearchedFields.length;
        for (let i1 = 0; i1 < intSearchLength; i1++) {
          const objField = this.arrSearchedFields[i1];
          if (!Object.prototype.hasOwnProperty.call(objField, 'disabled') ||
            !objField.disabled) {
            this.arrSearchedFields[i1] = Object.assign(Object.assign({}, objField), { selected: boolSelected });
          }
        }
      }
      if (((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.length) > 0) {
        const arrFields = this.value.fields;
        const intLength = arrFields.length;
        for (let i1 = 0; i1 < intLength; i1++) {
          const objField = arrFields[i1];
          if (!Object.prototype.hasOwnProperty.call(objField, 'disabled') ||
            !objField.disabled) {
            arrFields[i1] = Object.assign(Object.assign({}, objField), { selected: boolSelected });
          }
        }
        this.updateSelectedCount();
      }
    };
    this.fieldSelectionChangeHandler = (event) => {
      var _a, _b;
      event.stopImmediatePropagation();
      event.stopPropagation();
      if (((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.length) > 0) {
        const boolSelected = event.detail.checked;
        const strSelectedValue = event.detail.value;
        const arrSelectedField = this.value.fields.filter((dataItem) => Object.prototype.hasOwnProperty.call(dataItem, 'id') &&
          dataItem.id === strSelectedValue);
        if (arrSelectedField && arrSelectedField.length > 0) {
          arrSelectedField[0].selected = boolSelected;
          this.updateSelectedCount();
        }
      }
    };
    this.closeModalHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.fwCloseExport.emit();
    };
    this.exportHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      this.fwExport.emit({ value: deepCloneObject(this.value) });
    };
    this.exportFormatChangeHandler = (event) => {
      var _a, _b;
      event.stopImmediatePropagation();
      event.stopPropagation();
      const strSelectedFormat = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.value;
      if (strSelectedFormat && strSelectedFormat !== '' && ((_b = this.value) === null || _b === void 0 ? void 0 : _b.formats)) {
        this.value.formats.selectedValue = strSelectedFormat;
      }
    };
  }
  async close() {
    this.resetStates();
    this.isOpen = false;
    return true;
  }
  async open() {
    this.initializeSearchDebounce();
    this.isOpen = true;
    return true;
  }
  componentWillLoad() {
    var _a, _b;
    const boolApplyFilter = ((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.filter) === null || _b === void 0 ? void 0 : _b.value) || false;
    this.clearFilter = !boolApplyFilter;
    this.updateSelectedCount();
    this.initializeSearchDebounce();
  }
  componentDidUpdate() {
    this.addClearFilterEvent();
  }
  disconnectedCallback() {
    this.resetStates();
  }
  updateSelectedCount() {
    var _a, _b;
    if (((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.length) > 0) {
      const arrFields = this.value.fields;
      const arrSelectedFields = arrFields.filter((dataItem) => Object.prototype.hasOwnProperty.call(dataItem, 'selected') &&
        dataItem.selected === true);
      const numSelectedCount = (arrSelectedFields === null || arrSelectedFields === void 0 ? void 0 : arrSelectedFields.length) || 0;
      this.selectedFieldCount = numSelectedCount;
      this.allFieldsSelected =
        numSelectedCount === arrFields.length ? true : false;
    }
    else {
      this.selectedFieldCount = 0;
      this.allFieldsSelected = false;
    }
  }
  renderCheckboxField(dataField) {
    const strKey = this.searching && this.searchText && this.searchText !== ''
      ? `search_${this.searchText}_${dataField.id}`
      : `${dataField.id}`;
    return (h("fw-co-export-field", { key: strKey, value: dataField, onFwChange: this.fieldSelectionChangeHandler }));
  }
  render() {
    var _a, _b, _c;
    const boolOpen = this.isOpen;
    const objFilter = boolOpen ? (_a = this.value) === null || _a === void 0 ? void 0 : _a.filter : null;
    const boolShowFilteredRecords = !this.clearFilter && objFilter ? true : false;
    const strFilteredData = boolShowFilteredRecords
      ? TranslationController.t('export.filterInfo', {
        filtered: objFilter.filtered,
        total: objFilter.total,
      })
      : '';
    const objExportFormat = ((_b = this.value) === null || _b === void 0 ? void 0 : _b.formats) || null;
    const strSelectedFormatValue = objExportFormat
      ? objExportFormat.selectedValue
      : '';
    const arrExportFormat = objExportFormat
      ? (objExportFormat === null || objExportFormat === void 0 ? void 0 : objExportFormat.options) || null
      : null;
    const arrFields = this.searching
      ? this.arrSearchedFields
      : ((_c = this.value) === null || _c === void 0 ? void 0 : _c.fields) || null;
    const numTotalFieldCount = arrFields ? arrFields.length : 0;
    const boolShowSearch = this.searching || numTotalFieldCount > this.SEARCH_COUNT;
    const boolShowEmptySearch = boolShowSearch && this.searching && numTotalFieldCount <= 0;
    const numFirstColumnCount = numTotalFieldCount <= this.SEARCH_COUNT
      ? numTotalFieldCount
      : Math.ceil(numTotalFieldCount / 2);
    const numSecondColumnCount = boolShowSearch
      ? numTotalFieldCount - numFirstColumnCount
      : 0;
    const boolShowSecondColumn = numSecondColumnCount > 0;
    const fieldColumn1Elements = numFirstColumnCount > 0
      ? arrFields
        .slice(0, numFirstColumnCount)
        .map((dataItem) => this.renderCheckboxField(dataItem))
      : null;
    const fieldColumn2Elements = boolShowSecondColumn
      ? arrFields
        .slice(numFirstColumnCount + 1)
        .map((dataItem) => this.renderCheckboxField(dataItem))
      : null;
    let strBaseClassName = 'co-export-content';
    if (!boolShowFilteredRecords) {
      strBaseClassName += ' co-export-content--without-filter';
    }
    let strFirstColumnClassName = 'co-export-field-content-fields-column1';
    if (!boolShowSecondColumn) {
      strFirstColumnClassName +=
        ' co-export-field-content-fields-column1--full-width';
    }
    return (h("fw-modal", { isOpen: this.isOpen, slider: true, icon: 'download', titleText: TranslationController.t('export.modalTitle'), onFwClose: this.closeModalHandler },
      h("fw-modal-content", { class: 'co-export-modal-content' },
        h("div", { class: strBaseClassName },
          boolShowFilteredRecords && (h("fw-inline-message", { open: true, type: 'info', closable: false },
            h("span", { innerHTML: strFilteredData }))),
          h("div", { class: 'co-export-format' },
            h("span", { class: 'co-export-format-label' }, TranslationController.t('export.exportFormat')),
            arrExportFormat && arrExportFormat.length > 0 && (h("fw-radio-group", { orientation: 'row', value: strSelectedFormatValue, onFwChange: this.exportFormatChangeHandler }, arrExportFormat.map((dataItem) => {
              return (h("fw-radio", { value: dataItem.value }, dataItem.label));
            })))),
          h("div", { class: 'co-export-field-selection' },
            h("div", { class: 'co-export-field-header' },
              h("span", { class: 'co-export-field-header-label' }, TranslationController.t('export.fields')),
              h("span", { class: 'co-export-field-header-selected-count-label' }, TranslationController.t('export.selectedFields', {
                count: this.selectedFieldCount,
              }))),
            h("div", { class: 'co-export-field-content' },
              h("div", { class: 'co-export-field-content-header' },
                h("fw-checkbox", { class: 'co-export-field-select-all', checked: this.allFieldsSelected, onFwChange: this.selectAllFieldsChangeHandler },
                  h("span", { class: `co-export-field-select-all-label` }, TranslationController.t('export.selectAllFields'))),
                boolShowSearch && (h("fw-input", { "clear-input": true, "icon-left": 'search', placeholder: TranslationController.t('export.searchFieldsPrompt'), onFwInput: this.debouncedHandleInput, onFwInputClear: this.clearSearchHandler, class: 'co-export-field-search' }))),
              h("div", { class: 'co-export-field-content-fields' },
                !boolShowEmptySearch && (h("div", { class: strFirstColumnClassName }, fieldColumn1Elements)),
                !boolShowEmptySearch && boolShowSecondColumn && (h("div", { class: 'co-export-field-content-fields-column2' }, fieldColumn2Elements)),
                boolShowEmptySearch && (h("span", { class: `co-export-field-empty-search-message` }, TranslationController.t('export.noSearchResults')))))))),
      h("fw-modal-footer", null,
        h("span", { class: 'co-export-modal-footer' },
          h("fw-button", { color: 'secondary', onFwClick: this.closeModalHandler }, TranslationController.t('export.cancelButton')),
          h("fw-button", { onFwClick: this.exportHandler }, TranslationController.t('export.submitButton'))))));
  }
  static get is() { return "fw-co-export"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["co-export.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["co-export.css"]
  }; }
  static get properties() { return {
    "isOpen": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The value to show the modal or close"
      },
      "attribute": "is-open",
      "reflect": true,
      "defaultValue": "false"
    },
    "value": {
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
        "text": "The value to populate the export details in json format"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "null"
    }
  }; }
  static get states() { return {
    "allFieldsSelected": {},
    "arrSearchedFields": {},
    "searching": {},
    "searchText": {},
    "clearFilter": {},
    "selectedFieldCount": {}
  }; }
  static get events() { return [{
      "method": "fwExport",
      "name": "fwExport",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered whenever the export button is selected"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwCloseExport",
      "name": "fwCloseExport",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered whenever the cancel/close button is selected"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "close": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "open": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
}
