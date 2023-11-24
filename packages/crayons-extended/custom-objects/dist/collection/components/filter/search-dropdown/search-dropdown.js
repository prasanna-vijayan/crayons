/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Component, Prop, h, Listen, State, Event, Element, } from '@stencil/core';
import { TranslationController } from '../../../global/Translation';
export class SearchDropdown {
  onInput(e) {
    this.value = e.detail.value;
  }
  onSelection(e) {
    if (e.composedPath()[0].tagName === 'FW-LIST-OPTIONS') {
      const { value, meta } = e.detail;
      this.fwChange.emit({ value, meta, id: this.host.id });
      this.dropdown.hide();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
  componentWillLoad() { }
  render() {
    return (h("fw-popover", { ref: (dropdown) => (this.dropdown = dropdown), distance: '4', "same-width": 'true', placement: 'bottom' },
      h("fw-input", { slot: 'popover-trigger', placeholder: TranslationController.t('searchDropdown.placeholder.search'), iconRight: 'search', tabIndex: 0, role: 'button' }),
      h("fw-list-options", { slot: 'popover-content', filterText: this.value, options: this.options })));
  }
  static get is() { return "fw-search-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["search-dropdown.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["search-dropdown.css"]
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
    }
  }; }
  static get states() { return {
    "value": {}
  }; }
  static get events() { return [{
      "method": "fwChange",
      "name": "fwChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "On Change event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "fwInput",
      "method": "onInput",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fwChange",
      "method": "onSelection",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
