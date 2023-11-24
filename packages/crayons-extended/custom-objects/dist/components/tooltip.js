import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as hasSlot } from './index2.js';
import { d as defineCustomElement$1 } from './popover.js';

const tooltipCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{--fw-popover-border-radius:4px}.tooltip{color:#fff;background:#12344d;border-radius:4px;font-size:12px;font-weight:600;line-height:18px;padding-inline:8px;padding-block:6px;max-width:236px;overflow:visible;overflow-wrap:anywhere;word-break:break-word;white-space:initial}";

const Tooltip = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * Placement of the popover content with respect to the popover trigger.
     */
    this.placement = 'top';
    /**
     * Alternative placement for popover if the default placement is not possible.
     */
    this.fallbackPlacements = ['top'];
    /**
     * Content of the tooltip.
     */
    this.content = '';
    /**
     * Distance defines the distance between the popover trigger and the popover content along y-axis.
     */
    this.distance = '10';
    /**
     * The trigger event on which the popover-content is displayed. The available options are
     * 'click' | 'manual' | 'hover', in case of 'manual' no trigger event will be set.
     */
    this.trigger = 'hover';
    /**
     * Option to prevent the tooltip from being clipped when the component is placed inside a container with
     * `overflow: auto|hidden|scroll`.
     */
    this.hoist = false;
    /**
     * Private
     * Set to true if we want to render slot instead of default footer.
     */
    this.custom = null;
  }
  /**
   * lifecycle event, called once just after the component is first connected to the DOM.
   */
  componentWillLoad() {
    if (this.custom === null) {
      this.custom = hasSlot(this.host, 'tooltip-content');
    }
  }
  /**
   * Shows the tooltip.
   * @returns promise that resolves to true
   */
  async show() {
    this.popoverRef.show();
    return true;
  }
  /**
   * Hides the tooltip.
   * @returns promise that resolves to true
   */
  async hide() {
    this.popoverRef.hide();
    return true;
  }
  /**
   * Renders trigger and content elements through fw-popper element.
   * @returns {JSX.Element}
   */
  render() {
    return (h("fw-popover", { trigger: this.trigger, placement: this.placement, fallbackPlacements: this.fallbackPlacements, sameWidth: false, distance: this.distance, "disable-transition": 'true', "has-border": 'false', hoist: this.hoist, ref: (popoverRef) => (this.popoverRef = popoverRef) }, h("slot", { slot: 'popover-trigger' }), this.custom ? (h("div", { class: 'tooltip', slot: 'popover-content', role: 'tooltip' }, h("slot", { name: 'tooltip-content' }))) : (this.content.trim().length && (h("div", { class: 'tooltip', slot: 'popover-content', role: 'tooltip' }, this.content.trim())))));
  }
  get host() { return this; }
  static get style() { return tooltipCss; }
}, [1, "fw-tooltip", {
    "placement": [1],
    "fallbackPlacements": [16],
    "content": [1],
    "distance": [1],
    "trigger": [1],
    "hoist": [4],
    "show": [64],
    "hide": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-tooltip", "fw-popover"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-tooltip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tooltip);
      }
      break;
    case "fw-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { Tooltip as T, defineCustomElement as d };
