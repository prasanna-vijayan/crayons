import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './icon.js';

const inlineMessageCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{margin:0}.alert{position:relative;display:-ms-flexbox;display:flex;width:100%;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:inherit;padding:8px;background-color:transparent}.alert--success{background:#e0f5f1;border:1px solid #b4e5da}.alert--success .alert__message{-webkit-border-start:1px solid #b4e5da;border-inline-start:1px solid #b4e5da}.alert--warning{background:#fef1e1;border:1px solid #fedcb3}.alert--warning .alert__message{-webkit-border-start:1px solid #fedcb3;border-inline-start:1px solid #fedcb3}.alert--info{background:#e5f2fd;border:1px solid #bbdcfe}.alert--info .alert__message{-webkit-border-start:1px solid #bbdcfe;border-inline-start:1px solid #bbdcfe}.alert--error{border:1px solid #ffd0d6;background:#ffecf0}.alert--error .alert__message{-webkit-border-start:1px solid #ffd0d6;border-inline-start:1px solid #ffd0d6}.alert__icon{display:-ms-flexbox;display:flex;height:20px;-ms-flex-align:center;align-items:center;-webkit-margin-end:8px;margin-inline-end:8px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__message{-webkit-padding-start:12px;padding-inline-start:12px;-ms-flex:1 1 auto;flex:1 1 auto;color:#12344d;font-size:14px;font-weight:400;line-height:20px}.alert__message ::slotted(a){font-weight:500;color:#365dbe;text-decoration:none}.alert__close{display:-ms-flexbox;display:flex;height:20px;width:20px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer}";

const iconMap = {
  error: 'alert',
  warning: 'info',
  info: 'info',
  success: 'success',
};
const iconColorMap = {
  error: '#e43538',
  warning: '#c7502f',
  info: '#264966',
  success: '#00795b',
};
const InlineMessage = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwShow = createEvent(this, "fwShow", 7);
    this.fwHide = createEvent(this, "fwHide", 7);
    /**
     * Makes the inline message closable.
     */
    this.closable = true;
    /**
     * The type of inline message to be displayed. Defaults to info.
     */
    this.type = 'info';
    /**
     * The duration in milliseconds for which inline message will be shown.
     */
    this.duration = Infinity;
    /**
     * Indicates whether the inline message is open or not.
     */
    this.open = true;
  }
  startAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = setTimeout(() => this.hide(), this.duration);
    }
  }
  handleOpen() {
    if (this.open) {
      this.host.style.display = 'flex';
      this.fwShow.emit();
      if (this.duration < Infinity) {
        this.startAutoHide();
      }
    }
    else {
      clearTimeout(this.autoHideTimeout);
      this.host.style.display = 'none';
      this.fwHide.emit();
    }
  }
  handleDurationChange() {
    this.startAutoHide();
  }
  async show() {
    if (this.open) {
      return;
    }
    this.open = true;
  }
  async hide() {
    if (!this.open) {
      return;
    }
    this.open = false;
  }
  connectedCallback() {
    this.host.style.display = this.open ? 'flex' : 'none';
  }
  disconnectedCallback() {
    clearTimeout(this.autoHideTimeout);
  }
  handleKeyUp(e) {
    if (e.code === 'Enter') {
      e.preventDefault();
      this.hide();
    }
  }
  handleClose() {
    this.hide();
  }
  render() {
    return (h(Host, { role: 'alert', "aria-hidden": this.open ? 'false' : 'true' }, h("div", { class: 'alert ' + 'alert--' + this.type }, h("span", { class: 'alert__icon' }, h("fw-icon", { size: 16, name: iconMap[this.type], color: iconColorMap[this.type] })), h("span", { class: 'alert__message' }, h("slot", null)), this.closable && (h("span", { class: 'alert__close', role: 'button', tabindex: '0', onKeyUp: (e) => this.handleKeyUp(e), onClick: () => this.handleClose() }, h("fw-icon", { name: 'cross', color: '#12344d', size: 8, library: 'system' }))))));
  }
  get host() { return this; }
  static get watchers() { return {
    "open": ["handleOpen"],
    "duration": ["handleDurationChange"]
  }; }
  static get style() { return inlineMessageCss; }
}, [1, "fw-inline-message", {
    "closable": [4],
    "type": [1],
    "duration": [2],
    "open": [1540],
    "show": [64],
    "hide": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-inline-message", "fw-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-inline-message":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InlineMessage);
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { InlineMessage as I, defineCustomElement as d };
