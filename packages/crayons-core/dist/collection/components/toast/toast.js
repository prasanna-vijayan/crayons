import { Host, Component, Prop, h, Method } from '@stencil/core';
import { createToastStack, createToastNotification, preventDuplicates, } from './toast-util';
export class Toast {
  constructor() {
    /**
     *  position of the toast notification in screen
     */
    this.position = 'top-center';
    /**
     * Time duration of the toast visibility
     */
    this.timeout = 4000;
    /**
     * Type of the toast - success,failure, warning, inprogress
     */
    this.type = 'warning';
    /**
     *  The Content of the action link
     */
    this.actionLinkText = '';
    /**
     *  won't close automatically
     */
    this.sticky = false;
  }
  componentWillLoad() {
    this.toastContainer = createToastStack(this);
  }
  async trigger(opts) {
    const hasDuplicates = opts.shouldPreventDuplicates
      ? preventDuplicates(this.toastContainer.children, opts)
      : false;
    if (!hasDuplicates) {
      createToastNotification(opts, this.toastContainer, this);
    }
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "fw-toast"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'top-center' | 'top-left' | 'top-right'",
        "resolved": "\"top-center\" | \"top-left\" | \"top-right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "position of the toast notification in screen"
      },
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'top-center'"
    },
    "timeout": {
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
        "text": "Time duration of the toast visibility"
      },
      "attribute": "timeout",
      "reflect": false,
      "defaultValue": "4000"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'success' | 'error' | 'warning' | 'inprogress'",
        "resolved": "\"error\" | \"inprogress\" | \"success\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Type of the toast - success,failure, warning, inprogress"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'warning'"
    },
    "content": {
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
        "text": "The content to be displayed in toast"
      },
      "attribute": "content",
      "reflect": false
    },
    "actionLinkText": {
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
        "text": "The Content of the action link"
      },
      "attribute": "action-link-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "sticky": {
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
        "text": "won't close automatically"
      },
      "attribute": "sticky",
      "reflect": false,
      "defaultValue": "false"
    },
    "pauseOnHover": {
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
        "text": "Pause the toast from hiding on mouse hover"
      },
      "attribute": "pause-on-hover",
      "reflect": false
    },
    "shouldPreventDuplicates": {
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
        "text": "Prevent rendering the duplicate toasters at the same time"
      },
      "attribute": "should-prevent-duplicates",
      "reflect": false
    }
  }; }
  static get methods() { return {
    "trigger": {
      "complexType": {
        "signature": "(opts: ToastOptions) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "ToastOptions": {
            "location": "import",
            "path": "./toast-util"
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
}
