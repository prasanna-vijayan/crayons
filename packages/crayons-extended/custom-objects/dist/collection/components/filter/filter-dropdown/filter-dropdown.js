import { Component, Prop, h, Listen, State } from '@stencil/core';
export class FilterDropdown {
  onSelection(e) {
    this.selectedText = e.detail.meta.selectedOptions[0].text;
    this.dropdown.hide();
  }
  onDropdownOpen() {
    this.isExpanded = true;
  }
  onDropdownClose() {
    this.isExpanded = false;
  }
  componentWillLoad() {
    this.selectedText = this.options.filter((option) => option.value === this.value)[0].text;
  }
  render() {
    return (h("fw-popover", { ref: (dropdown) => (this.dropdown = dropdown), class: 'dropdown', "same-width": 'false', placement: 'bottom-start', autoFocusOnContent: true, hoist: true },
      h("div", { class: 'dropdown-container', slot: 'popover-trigger', tabIndex: 0, role: 'button' },
        h("span", { class: 'dropdown-label' }, this.selectedText),
        h("span", { class: {
            'dropdown-status-icon': true,
            'expanded': this.isExpanded,
          } },
          h("fw-icon", { name: 'chevron-down', color: '#2c5cc5', size: 8, library: 'system' }))),
      h("fw-list-options", { slot: 'popover-content', value: this.value, allowDeselect: false, options: this.options })));
  }
  static get is() { return "fw-filter-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["filter-dropdown.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["filter-dropdown.css"]
  }; }
  static get properties() { return {
    "options": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The filter schema"
      },
      "attribute": "options",
      "reflect": false
    },
    "value": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The selected value"
      },
      "attribute": "value",
      "reflect": false
    }
  }; }
  static get states() { return {
    "selectedText": {},
    "isExpanded": {}
  }; }
  static get listeners() { return [{
      "name": "fwChange",
      "method": "onSelection",
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
