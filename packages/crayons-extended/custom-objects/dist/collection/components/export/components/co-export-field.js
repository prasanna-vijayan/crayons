import { Component, Prop, h, Element, Event, State, } from '@stencil/core';
export class CoExportField {
  constructor() {
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
    return (h("span", { ref: (el) => (this.spanLabel = el), class: `${strBaseClassName}-fw-checkbox-label` }, this.value.label));
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
    return (h("div", { class: `${strBaseClassName}-checkbox-container` },
      h("fw-checkbox", { class: strCheckboxClassName, disabled: boolDisabled, checked: boolSelected, key: strCheckboxKey, onFwChange: this.fieldSelectionChangeHandler },
        this.addTooltip && (h("fw-tooltip", { trigger: 'hover', content: objField.label, hoist: true }, this.renderLabel())),
        !this.addTooltip && this.renderLabel()),
      boolShowInfo && (h("fw-tooltip", { trigger: 'hover', content: strInfo },
        h("fw-icon", { class: `${strBaseClassName}-fw-icon`, size: 12, name: 'info', color: '#264966' })))));
  }
  static get is() { return "fw-co-export-field"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["co-export-field.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["co-export-field.css"]
  }; }
  static get properties() { return {
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
        "text": "The value to populate the details of the checkbox field"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "null"
    }
  }; }
  static get states() { return {
    "addTooltip": {}
  }; }
  static get events() { return [{
      "method": "fwChange",
      "name": "fwChange",
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
    }]; }
  static get elementRef() { return "host"; }
}
