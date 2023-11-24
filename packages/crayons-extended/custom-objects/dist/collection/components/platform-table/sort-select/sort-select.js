/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Component, Prop, h, State, Listen, Watch, Event, } from '@stencil/core';
import { TranslationController } from '../../../global/Translation';
import { handleKeyDown } from '../../../utils/utils';
export class SortSelect {
  constructor() {
    this.sortOrderData = [
      { value: 'ASC', text: TranslationController.t('sortSelect.ascending') },
      { value: 'DESC', text: TranslationController.t('sortSelect.descending') },
    ];
    /**
     * Select options for the sortable. Array of objects of type {text: string, value: string}
     */
    this.sortOptions = [];
  }
  onDefaultSortChange(newValue) {
    const defaultValue = this.sortOptions.filter((option) => option.value === newValue)[0];
    this.sortColumnName = defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.text;
  }
  onOptionSelect(e) {
    const id = e.composedPath()[0].id;
    const selectedValue = e.detail.value;
    if (id === 'sortBy') {
      this.orderBy = selectedValue;
    }
    else if (id === 'sortOrder') {
      this.order = selectedValue;
    }
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    this.sortDropdown.hide();
    this.fwSort.emit({ orderBy: this.orderBy, order: this.order });
  }
  onDropdownOpen() {
    this.isExpanded = true;
  }
  onDropdownClose() {
    this.isExpanded = false;
  }
  toggleDropdown(event) {
    this.sortDropdown.isOpen
      ? this.sortDropdown.hide()
      : this.sortDropdown.show();
    event.stopPropagation();
  }
  componentWillLoad() {
    this.onDefaultSortChange(this.orderBy);
  }
  render() {
    return (h("fw-popover", { ref: (sortDropdown) => (this.sortDropdown = sortDropdown), class: 'sort', "same-width": 'false', placement: 'bottom-start', trigger: 'manual' },
      h("div", { class: 'sort-container', slot: 'popover-trigger' },
        h("div", { class: 'sort-action', tabIndex: 0, role: 'button', onClick: (e) => {
            this.toggleDropdown(e);
          }, onKeyDown: handleKeyDown(this.toggleDropdown.bind(this)) },
          h("span", null, this.sortColumnName),
          h("span", { class: {
              'dropdown-status-icon': true,
              'expanded': this.isExpanded,
            } },
            h("fw-icon", { name: 'chevron-down', color: '#264966', size: 8, library: 'system' })))),
      h("div", { slot: 'popover-content' },
        h("fw-list-options", { id: 'sortBy', allowDeselect: false, value: this.orderBy, options: this.sortOptions }, ' '),
        h("hr", { class: 'divider' }),
        h("span", { class: 'order-label' }, TranslationController.t('platformTable.orderby')),
        h("fw-list-options", { id: 'sortOrder', allowDeselect: false, value: this.order, options: this.sortOrderData }))));
  }
  static get is() { return "fw-sort-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sort-select.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sort-select.css"]
  }; }
  static get properties() { return {
    "sortOptions": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Select options for the sortable. Array of objects of type {text: string, value: string}"
      },
      "defaultValue": "[]"
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
    }
  }; }
  static get states() { return {
    "sortColumnName": {},
    "isExpanded": {}
  }; }
  static get events() { return [{
      "method": "fwSort",
      "name": "fwSort",
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
    }]; }
  static get watchers() { return [{
      "propName": "orderBy",
      "methodName": "onDefaultSortChange"
    }]; }
  static get listeners() { return [{
      "name": "fwChange",
      "method": "onOptionSelect",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fwShow",
      "method": "onDropdownOpen",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fwHide",
      "method": "onDropdownClose",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
