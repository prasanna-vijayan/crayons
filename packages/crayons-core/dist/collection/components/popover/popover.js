import { Component, Element, Listen, State, Event, Method, Prop, h, Watch, } from '@stencil/core';
import { createPopper } from '@popperjs/core';
import { popperModifierRTL } from '../../utils';
export class Popover {
  constructor() {
    this.triggerRefSlot = null;
    this.isOpen = false;
    /**
     * Placement of the popover content with respect to the popover trigger.
     */
    this.placement = 'bottom';
    /**
     * Alternative placement for popover if the default placement is not possible.
     */
    this.fallbackPlacements = ['top'];
    /**
     * Skidding defines the distance between the popover trigger and the popover content along x-axis.
     */
    this.skidding = '0';
    /**
     * Distance defines the distance between the popover trigger and the popover content along y-axis.
     */
    this.distance = '0';
    /**
     * Variant defines the style of the popover-content.
     */
    this.variant = 'select';
    /**
     * Whether the popover-content width to be same as that of the popover-trigger.
     */
    this.sameWidth = true;
    /**
     * The trigger event on which the popover-content is displayed. The available options are
     * 'click' | 'manual' | 'hover', in case of 'manual' no trigger event will be set.
     */
    this.trigger = 'click';
    /**
     * Option to determine if popover-content has a border.
     */
    this.hasBorder = true;
    /**
     * Option to prevent the tooltip from being clipped when the component is placed inside a container with
     * `overflow: auto|hidden|scroll`.
     */
    this.hoist = false;
    /**
     * Option to disable the popover animation on hide and show.
     */
    this.disableTransition = false;
    /**
     * Whether to focus on the element in popover-content slot on opening the dropdown.
     */
    this.autoFocusOnContent = false;
    /**
     * Indicates whether popover contents should be hidden on pressing Tab.
     */
    this.hideOnTab = true;
    /**
     * Indicates the delay after which popover will be shown.
     */
    this.showAfter = 0;
    /**
     * Indicates the delay after which popover will be hidden.
     */
    this.hideAfter = 0;
    this.componentDidRender = () => {
      // Observe popper content for change in size and update popper position
      this.resizeObserver = new ResizeObserver(this.updatePopper.bind(this));
      this.resizeObserver.observe(this.popperDiv);
    };
    this.removeResizeObserver = () => {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    };
  }
  onKeyDown(ev) {
    switch (ev.key) {
      case 'Tab':
        this.hideOnTab && this.hide();
        break;
      case 'Escape':
        this.hide();
        break;
    }
  }
  async show() {
    var _a, _b, _c;
    if (!this.isOpen) {
      clearTimeout(this.timerId);
      if (this.showAfter > 0)
        await this.delay(this.showAfter);
      this.sameWidth &&
        (this.popperDiv.style.width =
          String(this.triggerRef.getBoundingClientRect().width) + 'px');
      // Create popper instance if it's not available
      !this.popperInstance && this.createPopperInstance();
      this.popperDiv.setAttribute('data-show', '');
      // Enable the event listeners
      this.popperInstance.setOptions((options) => (Object.assign(Object.assign({}, options), { modifiers: [
          ...options.modifiers,
          { name: 'eventListeners', enabled: true },
        ] })));
      this.popperInstance.update();
      if (this.trigger !== 'hover') {
        this.overlay.style.display = 'block';
      }
      this.isOpen = !this.isOpen;
      if (((_a = this.contentRef) === null || _a === void 0 ? void 0 : _a.tagName) === 'FW-LIST-OPTIONS') {
        const listOptionsElement = this.contentRef;
        listOptionsElement.scrollToLastSelected();
      }
      this.autoFocusOnContent &&
        (this.contentRef.setFocus
          ? this.contentRef.setFocus()
          : (_c = (_b = this.contentRef).focus) === null || _c === void 0 ? void 0 : _c.call(_b));
      this.fwShow.emit();
    }
  }
  async hide() {
    var _a, _b, _c;
    if (this.isOpen) {
      clearTimeout(this.timerId);
      if (this.hideAfter > 0)
        await this.delay(this.hideAfter);
      this.popperDiv.removeAttribute('data-show');
      // Disable the event listeners
      this.popperInstance.setOptions((options) => (Object.assign(Object.assign({}, options), { modifiers: [
          ...options.modifiers,
          { name: 'eventListeners', enabled: false },
        ] })));
      if (this.trigger !== 'hover') {
        this.overlay.style.display = 'none';
      }
      this.isOpen = !this.isOpen;
      if (((_a = this.contentRef) === null || _a === void 0 ? void 0 : _a.tagName) === 'FW-LIST-OPTIONS') {
        const listOptionsElement = this.contentRef;
        listOptionsElement.clearFilter();
      }
      this.autoFocusOnContent &&
        (this.triggerRef.setFocus
          ? this.triggerRef.setFocus()
          : (_c = (_b = this.triggerRef).focus) === null || _c === void 0 ? void 0 : _c.call(_b));
      this.fwHide.emit();
    }
  }
  handlePlacementChange() {
    var _a;
    (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    this.popperInstance = null;
    this.setPopperOptions();
    this.updatePopper();
  }
  setPopperOptions() {
    this.popperOptions = {
      placement: this.placement,
      strategy: this.hoist ? 'fixed' : 'absolute',
      modifiers: [
        {
          name: 'flip',
          options: {
            fallbackPlacements: this.fallbackPlacements,
          },
        },
        {
          name: 'preventOverflow',
          options: {
            boundary: this.boundary || 'clippingParents',
          },
        },
        {
          name: 'offset',
          options: {
            offset: [Number(this.skidding), Number(this.distance)],
          },
        },
        popperModifierRTL,
      ],
    };
  }
  componentWillLoad() {
    this.contentRef = this.host.querySelector('[slot="popover-content"]');
    this.triggerRef = this.host.querySelector('[slot="popover-trigger"]');
    if (this.triggerRef.nodeName === 'SLOT') {
      const assignedElements = this.triggerRef.assignedElements();
      if (assignedElements.length) {
        this.triggerRefSlot = assignedElements[0];
      }
    }
    if (this.trigger === 'click') {
      this.triggerRef.addEventListener(this.trigger, () => {
        if (this.isOpen) {
          this.hide();
        }
        else {
          this.show();
        }
      });
    }
    else if (this.trigger === 'hover') {
      const trigger = this.triggerRefSlot || this.triggerRef;
      trigger.addEventListener('focus', this.show.bind(this));
      trigger.addEventListener('blur', this.hide.bind(this));
      trigger.addEventListener('mouseenter', this.show.bind(this));
      this.host.addEventListener('mouseleave', (event) => {
        const eventPath = event.path ? event.path : event.composedPath();
        const tooltip = eventPath.filter((node) => node.nodeName === 'FW-TOOLTIP')[0];
        if (tooltip) {
          const mouseLeaveHandler = (() => {
            const hoverElements = document.querySelectorAll(':hover');
            const index = [].indexOf.call(hoverElements, tooltip);
            if (index < 0) {
              this.hide();
            }
          }).bind(this);
          setTimeout(mouseLeaveHandler, 200);
        }
        else {
          this.hide();
        }
      });
    }
    this.setPopperOptions();
  }
  async delay(ms) {
    return new Promise((res) => {
      this.timerId = setTimeout(res, ms);
    });
  }
  updatePopper() {
    var _a;
    if (this.isOpen) {
      !this.popperInstance && this.createPopperInstance();
      // recompute posiiton of popper
      (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.update();
    }
  }
  disconnectedCallback() {
    var _a;
    this.removeResizeObserver();
    (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    clearTimeout(this.timerId);
  }
  createPopperInstance() {
    const triggerRef = this.triggerRefSlot || this.triggerRef;
    this.popperInstance = createPopper(triggerRef, this.popperDiv, this.popperOptions);
  }
  render() {
    return [
      h("slot", { name: 'popover-trigger' }),
      h("div", { class: {
          'popper-content': true,
          'no-border': !this.hasBorder,
          'no-transition': this.disableTransition,
        }, ref: (popperDiv) => (this.popperDiv = popperDiv) },
        h("slot", { name: 'popover-content' })),
      this.trigger !== 'hover' && (h("div", { "aria-hidden": 'true', class: 'overlay', ref: (overlay) => (this.overlay = overlay), onClick: () => this.hide() })),
    ];
  }
  static get is() { return "fw-popover"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["popover.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["popover.css"]
  }; }
  static get properties() { return {
    "placement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PopoverPlacementType",
        "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
        "references": {
          "PopoverPlacementType": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Placement of the popover content with respect to the popover trigger."
      },
      "attribute": "placement",
      "reflect": false,
      "defaultValue": "'bottom'"
    },
    "fallbackPlacements": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "[PopoverPlacementType]",
        "resolved": "[PopoverPlacementType]",
        "references": {
          "PopoverPlacementType": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Alternative placement for popover if the default placement is not possible."
      },
      "defaultValue": "['top']"
    },
    "boundary": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "HTMLElement",
        "resolved": "HTMLElement",
        "references": {
          "HTMLElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The area that the popup will be checked for overflow relative to."
      }
    },
    "skidding": {
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
        "text": "Skidding defines the distance between the popover trigger and the popover content along x-axis."
      },
      "attribute": "skidding",
      "reflect": false,
      "defaultValue": "'0'"
    },
    "distance": {
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
        "text": "Distance defines the distance between the popover trigger and the popover content along y-axis."
      },
      "attribute": "distance",
      "reflect": false,
      "defaultValue": "'0'"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'select' | 'date-picker'",
        "resolved": "\"date-picker\" | \"select\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Variant defines the style of the popover-content."
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'select'"
    },
    "sameWidth": {
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
        "text": "Whether the popover-content width to be same as that of the popover-trigger."
      },
      "attribute": "same-width",
      "reflect": false,
      "defaultValue": "true"
    },
    "trigger": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PopoverTriggerType",
        "resolved": "\"click\" | \"hover\" | \"manual\"",
        "references": {
          "PopoverTriggerType": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The trigger event on which the popover-content is displayed. The available options are\n'click' | 'manual' | 'hover', in case of 'manual' no trigger event will be set."
      },
      "attribute": "trigger",
      "reflect": false,
      "defaultValue": "'click'"
    },
    "hasBorder": {
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
        "text": "Option to determine if popover-content has a border."
      },
      "attribute": "has-border",
      "reflect": false,
      "defaultValue": "true"
    },
    "hoist": {
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
        "text": "Option to prevent the tooltip from being clipped when the component is placed inside a container with\n`overflow: auto|hidden|scroll`."
      },
      "attribute": "hoist",
      "reflect": false,
      "defaultValue": "false"
    },
    "disableTransition": {
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
        "text": "Option to disable the popover animation on hide and show."
      },
      "attribute": "disable-transition",
      "reflect": false,
      "defaultValue": "false"
    },
    "autoFocusOnContent": {
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
        "text": "Whether to focus on the element in popover-content slot on opening the dropdown."
      },
      "attribute": "auto-focus-on-content",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideOnTab": {
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
        "text": "Indicates whether popover contents should be hidden on pressing Tab."
      },
      "attribute": "hide-on-tab",
      "reflect": false,
      "defaultValue": "true"
    },
    "showAfter": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Indicates the delay after which popover will be shown."
      },
      "attribute": "show-after",
      "reflect": false,
      "defaultValue": "0"
    },
    "hideAfter": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Indicates the delay after which popover will be hidden."
      },
      "attribute": "hide-after",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get states() { return {
    "popperInstance": {},
    "isOpen": {},
    "popperOptions": {}
  }; }
  static get events() { return [{
      "method": "fwShow",
      "name": "fwShow",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered whenever the popover contents is open/displayed."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwHide",
      "name": "fwHide",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered whenever the popover contents is closed/hidden."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "show": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLFwListOptionsElement": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "hide": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLFwListOptionsElement": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "boundary",
      "methodName": "handlePlacementChange"
    }, {
      "propName": "placement",
      "methodName": "handlePlacementChange"
    }, {
      "propName": "fallbackPlacements",
      "methodName": "handlePlacementChange"
    }]; }
  static get listeners() { return [{
      "name": "keydown",
      "method": "onKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
