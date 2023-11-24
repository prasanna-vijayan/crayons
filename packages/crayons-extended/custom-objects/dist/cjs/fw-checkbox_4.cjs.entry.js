'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62345b50.js');
const index$1 = require('./index-147690f5.js');
const popper = require('./popper-9647d199.js');

const checkboxCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host{display:inline-block;position:relative}:host(:focus){outline:none}:host(:focus) input[type=checkbox]+label::before{border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5}:host(:focus) input[type=checkbox]:checked+label::before{border:1px solid #ffffff}:host(:focus) input[type=checkbox][disabled]+label::before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}:host(:hover) input[type=checkbox]+label::before{border-color:#cfd7df;-webkit-box-shadow:0 0 0 5px #ebeff3;box-shadow:0 0 0 5px #ebeff3}:host(:hover) input[type=checkbox]:checked+label::before{border-color:#2c5cc5}:host(:hover) input[type=checkbox][disabled]+label{cursor:not-allowed}:host(:hover) input[type=checkbox][disabled]+label::before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}.checkbox-container{cursor:pointer}.checkbox-container.disabled{cursor:not-allowed}#description{font-size:12px;color:#475867;letter-spacing:0;line-height:20px;position:relative;font-weight:400;word-wrap:break-word;-webkit-padding-start:22px;padding-inline-start:22px}input[type=checkbox]{display:none}input[type=checkbox]+label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-margin-after:0;margin-block-end:0;vertical-align:middle;font-size:14px;color:#12344d;line-height:20px;font-weight:400;cursor:inherit}input[type=checkbox]+label .with-description{font-weight:600}input[type=checkbox]+label #label{-webkit-padding-start:22px;padding-inline-start:22px;box-decoration-break:clone;-webkit-box-decoration-break:clone}input[type=checkbox]+label #label.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}@media screen and (prefers-reduced-motion: reduce){input[type=checkbox]+label::before{-webkit-transition:none;transition:none}}input[type=checkbox]+label::before{position:absolute;inset-inline-start:0;inset-block-start:4px;display:block;content:\"\";border:1px solid #475867;height:14px;width:14px;background-color:#fff;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px}@media screen and (prefers-reduced-motion: reduce){input[type=checkbox]+label.error::before{-webkit-transition:none;transition:none}}input[type=checkbox]+label.error::before{position:absolute;inset-inline-start:0;inset-block-start:4px;display:block;content:\"\";border:1px solid #d72d30;height:14px;width:14px;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px;-webkit-transition:all 0.2s ease;transition:all 0.2s ease}@media screen and (prefers-reduced-motion: reduce){input[type=checkbox]+label .after{-webkit-transition:none;transition:none}}input[type=checkbox]+label .after{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;content:\"\";inset-inline-start:3px;inset-block-start:7px;width:8px;height:8px;opacity:0;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box}input[type=checkbox]:checked+label::before{background:#2c5cc5;border-color:#2c5cc5;-webkit-box-shadow:none;box-shadow:none}input[type=checkbox]:checked+label .after{opacity:1}input[type=checkbox]:checked:hover+label::before{border-color:#2c5cc5;-webkit-box-shadow:0 0 0 5px #ebeff3;box-shadow:0 0 0 5px #ebeff3}input[type=checkbox]:checked:hover+label .after{opacity:1}input[type=checkbox]:checked:focus+label::before{background:#2c5cc5;border-color:#fff;-webkit-box-shadow:0 0 0 1px #2c5cc5;box-shadow:0 0 0 1px #2c5cc5}input[type=checkbox]:checked:focus+label .after{opacity:1}input[type=checkbox][disabled]+label{color:#92a2b1}input[type=checkbox][disabled]+label .label-field{color:#92a2b1}input[type=checkbox][disabled]+label::before{border-color:#dadfe3;background-color:#ebeff3}input[type=checkbox][disabled]:checked+label{color:#92a2b1}input[type=checkbox][disabled]:checked+label::before{background-color:#ebeff3;border-color:#dadfe3}";

const Checkbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwChange = index.createEvent(this, "fwChange", 7);
    this.fwFocus = index.createEvent(this, "fwFocus", 7);
    this.fwBlur = index.createEvent(this, "fwBlur", 7);
    /**
     * Sets the state of the check box to selected. If the attribute’s value is undefined, the value is set to false.
     */
    this.checked = false;
    /**
     * Disables the check box on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Description to be displayed for the checkbox.
     */
    this.description = '';
    /**
     * @deprecated Use `description` instead.
     * Label displayed on the interface, for the check box.
     */
    this.label = '';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Identifier corresponding to the component, that is saved when the form data is saved.
     */
    this.value = '';
    /**
     * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Theme based on which the checkbox is styled.
     */
    this.state = 'normal';
    /**
  
    /**
     * Hint text displayed below the radio group.
     */
    this.hintText = '';
    /**
     * Warning text displayed below the radio group.
     */
    this.warningText = '';
    /**
     * Error text displayed below the radio group.
     */
    this.errorText = '';
    this.hasHintTextSlot = false;
    this.hasWarningTextSlot = false;
    this.hasErrorTextSlot = false;
    this.onFocus = () => {
      this.fwFocus.emit();
    };
    this.onBlur = (e) => {
      this.fwBlur.emit({
        event: e,
        name: this.name,
      });
    };
    this.toggle = (e) => {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.fwChange.emit({
          event: e,
          value: this.value,
          name: this.name,
          meta: { checked: this.checked },
        });
      }
    };
  }
  componentDidLoad() {
    this.checkbox.checked = this.checked;
    this.checkbox.disabled = this.disabled;
  }
  checkChanged(isChecked) {
    this.checkbox.checked = isChecked;
  }
  componentWillLoad() {
    this.checkSlotContent();
  }
  checkSlotContent() {
    this.hasHintTextSlot = index$1.hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = index$1.hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = index$1.hasSlot(this.host, 'error-text');
  }
  /**
   * Sets focus on a `fw-checkbox`.
   */
  async setFocus() {
    var _a;
    (_a = this.host) === null || _a === void 0 ? void 0 : _a.focus();
  }
  disabledChanged(isDisabled) {
    this.checkbox.disabled = isDisabled;
  }
  handleKeydown(ev) {
    if (ev.code === 'Space') {
      ev.preventDefault();
    }
  }
  handleKeyup(ev) {
    if (ev.code === 'Space') {
      this.toggle(ev);
    }
  }
  getAriaDescribedBy() {
    if (this.state === 'normal')
      return `hint-${this.name}`;
    else if (this.state === 'error')
      return `error-${this.name}`;
    else if (this.state === 'warning')
      return `warning-${this.name}`;
    return null;
  }
  render() {
    const { host, name, value } = this;
    if (this.checked) {
      index$1.renderHiddenField(host, name, value);
    }
    const hasHintText = this.hintText ? true : this.hasHintTextSlot;
    const hasErrorText = this.errorText ? true : this.hasErrorTextSlot;
    const hasWarningText = this.warningText ? true : this.hasWarningTextSlot;
    const showHintText = this.state === 'normal' ? true : false;
    const showErrorText = this.state === 'error' ? true : false;
    const showWarningText = this.state === 'warning' ? true : false;
    const hintTextId = `hint-${this.name}`;
    const warningTextId = `warning-${this.name}`;
    const errorTextId = `error-${this.name}`;
    return (index.h(index.Host, { role: 'checkbox', tabIndex: '0', "aria-disabled": this.disabled ? 'true' : 'false', "aria-checked": this.checked ? 'true' : 'false', "aria-labelledby": 'label', "aria-describedby": `description ${this.getAriaDescribedBy()}`, onClick: this.toggle, onFocus: this.onFocus, onBlur: this.onBlur, "aria-invalid": this.state === 'error' }, index.h("div", { class: { 'checkbox-container': true, 'disabled': this.disabled } }, index.h("input", { type: 'checkbox', ref: (el) => (this.checkbox = el), required: this.required, name: this.name, id: this.name }), index.h("label", { class: { error: this.state === 'error' } }, index.h("span", { id: 'label', class: {
        'with-description': this.description !== '',
        'required': this.required,
      } }, index.h("slot", null)), this.description !== '' || this.label !== '' ? (index.h("div", { id: 'description' }, this.description ? this.description : this.label)) : (''), this.checked && (index.h("span", { class: 'after' }, index.h("fw-icon", { name: 'check', color: this.disabled ? '#92A2B1' : '#ffffff', size: 8 }))))), showHintText && hasHintText && (index.h("div", { id: hintTextId, class: 'field-control-hint-text', "aria-hidden": hasHintText ? 'false' : 'true' }, index.h("slot", { name: 'hint-text' }, this.hintText))), showErrorText && hasErrorText && (index.h("div", { id: errorTextId, class: 'field-control-error-text', "aria-hidden": hasErrorText ? 'false' : 'true' }, index.h("slot", { name: 'error-text' }, this.errorText))), showWarningText && hasWarningText && (index.h("div", { id: warningTextId, class: 'field-control-warning-text', "aria-hidden": hasWarningText ? 'false' : 'true' }, index.h("slot", { name: 'warning-text' }, this.warningText)))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "checked": ["checkChanged"],
    "disabled": ["disabledChanged"]
  }; }
};
Checkbox.style = checkboxCss;

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

const spinnerCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (prefers-reduced-motion: reduce){.spinner{-webkit-animation:none;animation:none}}@media screen and (prefers-reduced-motion: reduce) and (prefers-reduced-motion: reduce){.spinner .path{-webkit-animation:none;animation:none}}.spinner{z-index:2}:host(:not([dir=\"rtl\"])) .spinner,:host([dir=\"ltr\"]) .spinner{-webkit-animation:rotate-ltr 2s linear infinite;animation:rotate-ltr 2s linear infinite}:host([dir=\"rtl\"]) .spinner{-webkit-animation:rotate-rtl 2s linear infinite;animation:rotate-rtl 2s linear infinite}@media screen and (prefers-reduced-motion: reduce){.spinner .path{stroke:var(--fw-spinner-color, #2c5cc5);stroke-linecap:round;-webkit-animation:none;animation:none}}.spinner .path{stroke:var(--fw-spinner-color, #2c5cc5);stroke-linecap:round;-webkit-animation:dash 1s ease-in-out infinite;animation:dash 1s ease-in-out infinite}@-webkit-keyframes rotate-ltr-ltr{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate-ltr-ltr{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes rotate-ltr-rtl{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes rotate-ltr-rtl{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes rotate-rtl-ltr{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes rotate-rtl-ltr{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes rotate-rtl-rtl{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate-rtl-rtl{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}";

const Spinner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Size of the loader.
     */
    this.size = 'default';
    /**
     * Color in which the loader is displayed, specified as a standard CSS color.
     */
    this.color = '';
    this.sizeMap = {
      micro: 8,
      small: 12,
      default: 16,
      medium: 24,
      large: 32,
    };
  }
  getSize() {
    return this.sizeMap[this.size] || 16;
  }
  render() {
    const diameter = this.getSize();
    return (index.h(index.Host, null, index.h("svg", { class: `spinner ${this.size}`, style: {
        'width': `${diameter}px`,
        'height': `${diameter}px`,
        '--fw-spinner-color': `${this.color}`,
      }, viewBox: `0 0 50 50` }, index.h("circle", { class: 'path', cx: '25', cy: '25', r: '18', fill: 'none', "stroke-width": '8' }))));
  }
};
Spinner.style = spinnerCss;

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

exports.fw_checkbox = Checkbox;
exports.fw_popover = Popover;
exports.fw_spinner = Spinner;
exports.fw_tooltip = Tooltip;
