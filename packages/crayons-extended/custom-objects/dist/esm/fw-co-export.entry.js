import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f435cf58.js';
import { T as TranslationController } from './Translation-7ee0e3b3.js';
import { d as debounce } from './utils-06a7316a.js';
import { d as deepCloneObject } from './form-builder-utils-21bc18f0.js';
import './index-fb937839.js';

const coExportCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.co-export-modal-content{height:100%;overflow:hidden}.co-export-content{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-padding-before:20px;padding-block-start:20px;gap:24px}.co-export-content .clearExportFilter{font-weight:700;color:#2c5cc5;cursor:pointer}.co-export-content .co-export-format{width:100%;height:auto;display:-ms-flexbox;display:flex;gap:24px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.co-export-content .co-export-format .co-export-format-label{width:auto;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#475867;font-size:14px;line-height:20px;margin:0}.co-export-content .co-export-field-selection{width:100%;height:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;gap:10px}.co-export-content .co-export-field-selection .co-export-field-header{width:100%;height:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}.co-export-content .co-export-field-selection .co-export-field-header .co-export-field-header-label{width:auto;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#12344d;font-weight:600;font-size:14px;line-height:20px}.co-export-content .co-export-field-selection .co-export-field-header .co-export-field-header-selected-count-label{width:auto;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:end;color:#475867;font-size:14px;line-height:20px}.co-export-content .co-export-field-selection .co-export-field-content{width:100%;height:auto;padding-inline:0;padding-block:24px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px;border-radius:4px;border:1px solid #cfd7df}.co-export-content .co-export-field-selection .co-export-field-content .co-export-field-content-header{width:100%;height:32px;padding-inline:24px;padding-block:0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.co-export-content .co-export-field-selection .co-export-field-content .co-export-field-content-header .co-export-field-select-all-label{display:inline-block;font-weight:500;margin:0}.co-export-content .co-export-field-selection .co-export-field-content .co-export-field-content-header .co-export-field-search{width:50%}.co-export-content .co-export-field-selection .co-export-field-content .co-export-field-content-fields{width:100%;height:auto;padding-inline:24px;padding-block:0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:32px;overflow-y:auto;max-height:calc( 100vh - 56px - 56px - 20px - 24px - 58px - 24px - 22px - 20px - 10px - 32px - 52px - 32px - 16px )}.co-export-content .co-export-field-selection .co-export-field-content .co-export-field-content-fields .co-export-field-empty-search-message{width:100%;margin-inline:0;margin-block:16px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center;color:#12344d;font-size:14px;font-weight:400;line-height:24px}.co-export-content .co-export-field-selection .co-export-field-content .co-export-field-content-fields .co-export-field-content-fields-column1{width:calc(50% - 32px);height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:10px}.co-export-content .co-export-field-selection .co-export-field-content .co-export-field-content-fields .co-export-field-content-fields-column1--full-width{width:100%}.co-export-content .co-export-field-selection .co-export-field-content .co-export-field-content-fields .co-export-field-content-fields-column2{width:50%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:10px}.co-export-content--without-filter .co-export-field-selection .co-export-field-content .co-export-field-content-fields{max-height:calc( 100vh - 56px - 56px - 20px - 24px - 22px - 20px - 10px - 32px - 52px - 32px - 16px )}.co-export-modal-footer{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:12px}";

const CoExport = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwExport = createEvent(this, "fwExport", 7);
    this.fwCloseExport = createEvent(this, "fwCloseExport", 7);
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
    return (h("fw-modal", { isOpen: this.isOpen, slider: true, icon: 'download', titleText: TranslationController.t('export.modalTitle'), onFwClose: this.closeModalHandler }, h("fw-modal-content", { class: 'co-export-modal-content' }, h("div", { class: strBaseClassName }, boolShowFilteredRecords && (h("fw-inline-message", { open: true, type: 'info', closable: false }, h("span", { innerHTML: strFilteredData }))), h("div", { class: 'co-export-format' }, h("span", { class: 'co-export-format-label' }, TranslationController.t('export.exportFormat')), arrExportFormat && arrExportFormat.length > 0 && (h("fw-radio-group", { orientation: 'row', value: strSelectedFormatValue, onFwChange: this.exportFormatChangeHandler }, arrExportFormat.map((dataItem) => {
      return (h("fw-radio", { value: dataItem.value }, dataItem.label));
    })))), h("div", { class: 'co-export-field-selection' }, h("div", { class: 'co-export-field-header' }, h("span", { class: 'co-export-field-header-label' }, TranslationController.t('export.fields')), h("span", { class: 'co-export-field-header-selected-count-label' }, TranslationController.t('export.selectedFields', {
      count: this.selectedFieldCount,
    }))), h("div", { class: 'co-export-field-content' }, h("div", { class: 'co-export-field-content-header' }, h("fw-checkbox", { class: 'co-export-field-select-all', checked: this.allFieldsSelected, onFwChange: this.selectAllFieldsChangeHandler }, h("span", { class: `co-export-field-select-all-label` }, TranslationController.t('export.selectAllFields'))), boolShowSearch && (h("fw-input", { "clear-input": true, "icon-left": 'search', placeholder: TranslationController.t('export.searchFieldsPrompt'), onFwInput: this.debouncedHandleInput, onFwInputClear: this.clearSearchHandler, class: 'co-export-field-search' }))), h("div", { class: 'co-export-field-content-fields' }, !boolShowEmptySearch && (h("div", { class: strFirstColumnClassName }, fieldColumn1Elements)), !boolShowEmptySearch && boolShowSecondColumn && (h("div", { class: 'co-export-field-content-fields-column2' }, fieldColumn2Elements)), boolShowEmptySearch && (h("span", { class: `co-export-field-empty-search-message` }, TranslationController.t('export.noSearchResults')))))))), h("fw-modal-footer", null, h("span", { class: 'co-export-modal-footer' }, h("fw-button", { color: 'secondary', onFwClick: this.closeModalHandler }, TranslationController.t('export.cancelButton')), h("fw-button", { onFwClick: this.exportHandler }, TranslationController.t('export.submitButton'))))));
  }
  get host() { return getElement(this); }
};
CoExport.style = coExportCss;

export { CoExport as fw_co_export };
