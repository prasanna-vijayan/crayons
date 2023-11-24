/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Component, Event, Element, Prop, h, Fragment, Method, Listen, } from '@stencil/core';
/**
 * @parent select
 */
export class SelectOption {
  constructor() {
    /**
     * Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute’s value is undefined, the value is set to false.
     */
    this.selected = false;
    /**
     * Sets the state of the option to disabled. The selected option is disabled and greyed out. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * States that the option is an HTML value. If the attribute's value is undefined, the value is set to true.
     */
    this.html = false;
    /**
     * Standard is the default option without any graphics other options are icon and avatar which places either the icon or avatar at the beginning of the row.
     * The props for the icon or avatar are passed as an object via the graphicsProps.
     */
    this.variant = 'standard';
    /**
     * Place a checkbox.
     */
    this.checkbox = false;
    /**
     * Hide tick mark icon
     */
    this.hideTick = false;
    /**
     * Whether clicking on the already selected option disables it.
     */
    this.allowDeselect = true;
    /**
     * Whether clicking on option selects it.
     */
    this.allowSelect = true;
  }
  async setFocus() {
    this.rowContainer.focus();
  }
  onKeyDown(ev) {
    switch (ev.key) {
      case 'Enter':
        this.onOptionSelected();
        break;
    }
  }
  onOptionSelected() {
    if (this.disabled) {
      return;
    }
    if (this.selected && !this.allowDeselect) {
      return;
    }
    if (this.allowSelect) {
      this.selected = !this.selected;
      const { value, selected } = this;
      this.fwSelected.emit({ value, selected });
    }
    else {
      const { value, selected } = this;
      this.fwSelectAttempted.emit({ value, selected });
    }
  }
  renderInnerHtml() {
    const description = this.createDescription();
    const checkbox = this.checkbox ? this.createCheckbox() : '';
    const selectedIconContainer = !this.hideTick ? (h("span", { class: 'selected-icon' }, this.selected && (h("fw-icon", { name: 'check', size: 12, color: '#2C5CC5', library: 'system' })))) : null;
    switch (this.variant) {
      case 'standard':
        return (h(Fragment, null,
          checkbox,
          description,
          selectedIconContainer));
      case 'icon':
        return (h(Fragment, null,
          checkbox,
          this.createIcon(),
          description,
          selectedIconContainer));
      case 'avatar':
        return (h(Fragment, null,
          checkbox,
          this.createAvatar(),
          description,
          selectedIconContainer));
      default:
        return (h(Fragment, null,
          checkbox,
          description,
          selectedIconContainer));
    }
  }
  createDescription() {
    return this.subText ? (h("div", { class: 'description ' +
        (this.variant === 'icon' ? 'icon-margin ' : 'standard-margin ') },
      h("span", { class: 'description-text' }, this.text),
      h("span", { class: 'description-subText' }, this.subText))) : (h("span", { class: 'description ' +
        (this.variant === 'icon' ? 'icon-margin ' : 'standard-margin ') }, this.text));
  }
  createIcon() {
    return h("fw-icon", Object.assign({}, this.graphicsProps));
  }
  createCheckbox() {
    return (h("div", { class: 'checkbox-wrapper', key: `${this.host.id}-${this.selected}` },
      h("fw-checkbox", { checked: this.selected, disabled: this.disabled })));
  }
  createAvatar() {
    return h("fw-avatar", Object.assign({ size: 'small' }, this.graphicsProps));
  }
  render() {
    return (h("div", { role: 'option', tabindex: '-1', "aria-selected": this.selected, ref: (el) => (this.rowContainer = el), class: 'select-option ' +
        (this.selected && !this.checkbox ? 'selected ' : '') +
        (this.disabled ? 'disabled ' : '') +
        (this.html
          ? ''
          : (this.subText ? 'multi-line ' : 'single-line ') +
            (this.variant + ' ' + 'select-center')) +
        (this.checkbox ? ' has-checkbox' : ''), onMouseDown: () => this.onOptionSelected(), onFocus: () => this.fwFocus.emit({ id: this.host.id }), onBlur: (e) => this.fwBlur.emit(e) }, this.html ? '' : this.text ? this.renderInnerHtml() : h("slot", null)));
  }
  componentDidLoad() {
    if (this.html) {
      this.rowContainer.innerHTML = this.htmlContent;
    }
  }
  static get is() { return "fw-select-option"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["select-option.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["select-option.css"]
  }; }
  static get properties() { return {
    "value": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "string | number",
        "resolved": "number | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Value corresponding to the option, that is saved  when the form data is saved."
      },
      "attribute": "value",
      "reflect": false
    },
    "selected": {
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
        "text": "Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "disabled": {
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
        "text": "Sets the state of the option to disabled. The selected option is disabled and greyed out. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "html": {
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
        "text": "States that the option is an HTML value. If the attribute's value is undefined, the value is set to true."
      },
      "attribute": "html",
      "reflect": true,
      "defaultValue": "false"
    },
    "optionText": {
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
        "text": "Alternate text displayed on the interface, in place of the actual HTML content."
      },
      "attribute": "option-text",
      "reflect": true
    },
    "htmlContent": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "HTML content that is displayed as the option."
      },
      "attribute": "html-content",
      "reflect": false
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "DropdownVariant",
        "resolved": "\"avatar\" | \"icon\" | \"standard\"",
        "references": {
          "DropdownVariant": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Standard is the default option without any graphics other options are icon and avatar which places either the icon or avatar at the beginning of the row.\nThe props for the icon or avatar are passed as an object via the graphicsProps."
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'standard'"
    },
    "text": {
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
        "text": "The text to be displayed in the option."
      },
      "attribute": "text",
      "reflect": false
    },
    "subText": {
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
        "text": "Second line text can be description etc."
      },
      "attribute": "sub-text",
      "reflect": true
    },
    "groupName": {
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
        "text": "Used in grouped list, provides the group in which the option belongs"
      },
      "attribute": "group-name",
      "reflect": false
    },
    "graphicsProps": {
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
        "text": "The props for the graphics variant. ex., icon props in case of graphicsType = 'icon'"
      },
      "attribute": "graphics-props",
      "reflect": false
    },
    "checkbox": {
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
        "text": "Place a checkbox."
      },
      "attribute": "checkbox",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideTick": {
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
        "text": "Hide tick mark icon"
      },
      "attribute": "hide-tick",
      "reflect": false,
      "defaultValue": "false"
    },
    "allowDeselect": {
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
        "text": "Whether clicking on the already selected option disables it."
      },
      "attribute": "allow-deselect",
      "reflect": false,
      "defaultValue": "true"
    },
    "allowSelect": {
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
        "text": "Whether clicking on option selects it."
      },
      "attribute": "allow-select",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get events() { return [{
      "method": "fwSelectAttempted",
      "name": "fwSelectAttempted",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when an option is clicked when allowSelect is false."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwSelected",
      "name": "fwSelected",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when an option is selected."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwFocus",
      "name": "fwFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when an option is focused."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwBlur",
      "name": "fwBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when an option loses focus."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "keydown",
      "method": "onKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
