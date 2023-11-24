'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63c6a574.js');
const index$1 = require('./index-926a762d.js');
const popper = require('./popper-4508c112.js');

const popoverCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.popper-content{display:none;z-index:99;min-width:var(--fw-popover-min-width);max-width:var(--fw-popover-max-width);min-height:var(--fw-popover-min-height, 10px);max-height:var(--fw-popover-max-height, 400px);overflow-y:auto;overflow-x:hidden;overscroll-behavior-y:contain;margin:0px;border-radius:var(--fw-popover-border-radius, 8px);border:1px solid #ebeff3;position:absolute;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;-webkit-box-shadow:var(--fw-popover-box-shadow, -15px 20px 40px rgba(0, 0, 0, 0.04));box-shadow:var(--fw-popover-box-shadow, -15px 20px 40px rgba(0, 0, 0, 0.04));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0.01);transform:scale(0.01);-webkit-transition:150ms color, 150ms border, 150ms -webkit-box-shadow;transition:150ms color, 150ms border, 150ms -webkit-box-shadow;transition:150ms color, 150ms border, 150ms box-shadow;transition:150ms color, 150ms border, 150ms box-shadow, 150ms -webkit-box-shadow;will-change:auto}.popper-content.no-border{border:0px}.popper-content.no-transition{-webkit-transition:none;transition:none}.popper-content[data-show]{display:block}.overlay{width:100%;height:100%;display:none;position:fixed;inset-block-start:0;inset-inline-start:0;z-index:95;background-color:transparent}@media screen and (prefers-reduced-motion: reduce){.popper-content{-webkit-transition:none;transition:none}}";

const Popover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwShow = index.createEvent(this, "fwShow", 7);
    this.fwHide = index.createEvent(this, "fwHide", 7);
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
        index$1.popperModifierRTL,
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
    this.popperInstance = popper.createPopper(triggerRef, this.popperDiv, this.popperOptions);
  }
  render() {
    return [
      index.h("slot", { name: 'popover-trigger' }),
      index.h("div", { class: {
          'popper-content': true,
          'no-border': !this.hasBorder,
          'no-transition': this.disableTransition,
        }, ref: (popperDiv) => (this.popperDiv = popperDiv) }, index.h("slot", { name: 'popover-content' })),
      this.trigger !== 'hover' && (index.h("div", { "aria-hidden": 'true', class: 'overlay', ref: (overlay) => (this.overlay = overlay), onClick: () => this.hide() })),
    ];
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "boundary": ["handlePlacementChange"],
    "placement": ["handlePlacementChange"],
    "fallbackPlacements": ["handlePlacementChange"]
  }; }
};
Popover.style = popoverCss;

const tooltipCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{--fw-popover-border-radius:4px}.tooltip{color:#fff;background:#12344d;border-radius:4px;font-size:12px;font-weight:600;line-height:18px;padding-inline:8px;padding-block:6px;max-width:236px;overflow:visible;overflow-wrap:anywhere;word-break:break-word;white-space:initial}";

const Tooltip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      this.custom = index$1.hasSlot(this.host, 'tooltip-content');
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
    return (index.h("fw-popover", { trigger: this.trigger, placement: this.placement, fallbackPlacements: this.fallbackPlacements, sameWidth: false, distance: this.distance, "disable-transition": 'true', "has-border": 'false', hoist: this.hoist, ref: (popoverRef) => (this.popoverRef = popoverRef) }, index.h("slot", { slot: 'popover-trigger' }), this.custom ? (index.h("div", { class: 'tooltip', slot: 'popover-content', role: 'tooltip' }, index.h("slot", { name: 'tooltip-content' }))) : (this.content.trim().length && (index.h("div", { class: 'tooltip', slot: 'popover-content', role: 'tooltip' }, this.content.trim())))));
  }
  get host() { return index.getElement(this); }
};
Tooltip.style = tooltipCss;

exports.fw_popover = Popover;
exports.fw_tooltip = Tooltip;
