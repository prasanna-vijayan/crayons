import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './icon.js';

const dragItemCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}.drag-item{display:-ms-flexbox;display:flex;background:#ffffff;border:1px solid #ebeff3;-webkit-box-shadow:0px 2px 4px rgba(18, 52, 77, 0.06);box-shadow:0px 2px 4px rgba(18, 52, 77, 0.06);border-radius:4px;padding-inline:12px;padding-block:8px;-ms-flex-align:center;align-items:center;margin-inline:0px;margin-block:8px}.drag-item .drag-item__label{-ms-flex:1 1 auto;flex:1 1 auto}.drag-item .drag-item__prefix{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.drag-item .drag-item__suffix{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.drag-item .drag-icon{-webkit-padding-end:12px;padding-inline-end:12px}.drag-item .drag-icon.drag:hover,.drag-item .drag-icon.drag:focus{cursor:-webkit-grab;cursor:grab}";

const DragItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.draggable = false;
    /**
     * Whether the drag is disabled or not.
     */
    this.disabled = false;
    /**
     * Whether the drag icon should be visible.
     */
    this.showDragIcon = true;
  }
  componentDidLoad() {
    var _a, _b;
    if (this.pinned)
      return;
    (_a = this.dragIcon) === null || _a === void 0 ? void 0 : _a.addEventListener('mousedown', this.toggleDraggable.bind(this));
    (_b = this.dragIcon) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseout', this.toggleDraggable.bind(this));
  }
  toggleDraggable() {
    this.draggable = !this.draggable;
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.dragIcon) === null || _a === void 0 ? void 0 : _a.removeEventListener('mousedown', this.toggleDraggable);
    (_b = this.dragIcon) === null || _b === void 0 ? void 0 : _b.removeEventListener('mouseout', this.toggleDraggable);
  }
  render() {
    return (h(Host, { draggable: this.draggable }, h("div", { class: {
        'drag-item': true,
      }, draggable: this.draggable }, this.showDragIcon && (h("span", { class: 'drag-item__prefix' }, h("fw-icon", { class: { 'drag-icon': true, 'drag': !this.pinned }, name: !this.pinned ? 'drag' : 'lock', ref: (dragIcon) => (this.dragIcon = dragIcon) }))), h("span", { class: 'drag-item__label' }, h("slot", null)), h("span", { class: 'drag-item__suffix' }, h("slot", { name: 'suffix' })))));
  }
  get el() { return this; }
  static get style() { return dragItemCss; }
}, [1, "fw-drag-item", {
    "disabled": [4],
    "showDragIcon": [4, "show-drag-icon"],
    "pinned": [1],
    "draggable": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-drag-item", "fw-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-drag-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DragItem);
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const FwDragItem = DragItem;
const defineCustomElement = defineCustomElement$1;

export { FwDragItem, defineCustomElement };
