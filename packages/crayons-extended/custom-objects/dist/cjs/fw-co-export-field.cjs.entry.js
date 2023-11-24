'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62345b50.js');

const coExportFieldCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.fw-co-export-field-checkbox-container{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex}.fw-co-export-field-checkbox-container .fw-co-export-field-fw-checkbox{width:auto;max-width:100%}.fw-co-export-field-checkbox-container .fw-co-export-field-fw-checkbox .fw-co-export-field-fw-checkbox-label{display:inline-block;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:calc(100% - 22px);margin:0;-webkit-padding-before:1px;padding-block-start:1px;text-align:start;word-break:break-word;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fw-co-export-field-checkbox-container .fw-co-export-field-fw-checkbox-with-info{max-width:calc(100% - 8px - 12px)}.fw-co-export-field-checkbox-container .fw-co-export-field-fw-icon{-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-before:5px;margin-block-start:5px}";

const CoExportField = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwChange = index.createEvent(this, "fwChange", 7);
    this.addTooltip = false;
    /**
     * The value to populate the details of the checkbox field
     */
    this.value = null;
    this.componentDidRender = () => {
      const elLabel = this.spanLabel;
      if (elLabel && !this.resizeObserver) {
        this.resizeObserver = new ResizeObserver(() => {
          if (elLabel.offsetWidth > 0) {
            this.addTooltip =
              elLabel.offsetWidth < elLabel.scrollWidth ? true : false;
          }
        });
        this.resizeObserver.observe(elLabel);
      }
    };
    this.removeResizeObserver = () => {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    };
    this.fieldSelectionChangeHandler = (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      if (this.value) {
        this.fwChange.emit({
          checked: event.detail.meta.checked,
          value: this.value.id,
        });
      }
    };
  }
  disconnectedCallback() {
    this.removeResizeObserver();
  }
  renderLabel() {
    const strBaseClassName = 'fw-co-export-field';
    return (index.h("span", { ref: (el) => (this.spanLabel = el), class: `${strBaseClassName}-fw-checkbox-label` }, this.value.label));
  }
  render() {
    if (!this.value) {
      return null;
    }
    const objField = this.value;
    const strBaseClassName = 'fw-co-export-field';
    const boolDisabled = Object.prototype.hasOwnProperty.call(objField, 'disabled') &&
      objField.disabled
      ? true
      : false;
    const boolSelected = Object.prototype.hasOwnProperty.call(objField, 'selected') &&
      objField.selected;
    const strInfo = (Object.prototype.hasOwnProperty.call(objField, 'info') &&
      objField.info) ||
      '';
    const boolShowInfo = strInfo && strInfo !== '' ? true : false;
    let strCheckboxClassName = `${strBaseClassName}-fw-checkbox`;
    if (boolShowInfo) {
      strCheckboxClassName += ` ${strBaseClassName}-fw-checkbox-with-info`;
    }
    const strCheckboxKey = `${objField.id}_${this.addTooltip}`;
    return (index.h("div", { class: `${strBaseClassName}-checkbox-container` }, index.h("fw-checkbox", { class: strCheckboxClassName, disabled: boolDisabled, checked: boolSelected, key: strCheckboxKey, onFwChange: this.fieldSelectionChangeHandler }, this.addTooltip && (index.h("fw-tooltip", { trigger: 'hover', content: objField.label, hoist: true }, this.renderLabel())), !this.addTooltip && this.renderLabel()), boolShowInfo && (index.h("fw-tooltip", { trigger: 'hover', content: strInfo }, index.h("fw-icon", { class: `${strBaseClassName}-fw-icon`, size: 12, name: 'info', color: '#264966' })))));
  }
  get host() { return index.getElement(this); }
};
CoExportField.style = coExportFieldCss;

exports.fw_co_export_field = CoExportField;
