'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62345b50.js');
const index$1 = require('./index-147690f5.js');
const fieldControl = require('./field-control-01e05f3d.js');

const avatarCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;--size:3rem}.avatar{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:calc(var(--size) * 0.5);font-weight:400;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle}.avatar__initials{line-height:1;font-weight:600;font-size:32px;text-align:center;text-transform:uppercase}.avatar__image{position:absolute;inset-block-start:0;inset-inline-start:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar--dark{background-color:#527fa5;color:#fff}.avatar--dark--initials{border:2px solid rgba(18, 52, 77, 0.16)}.avatar--dark--default{background-color:#90c6fe}.avatar--light{background-color:#dff0ff;color:#12344d}.avatar--light--initials{border:2px solid #bedbf5}.avatar--error{background-color:#ffd0d6;color:#12344d}.avatar--error--initials{border:2px solid #ffd0d6}.avatar--circle{border-radius:50%}.avatar--rounded{border-radius:4px}.avatar--square{border-radius:0}.avatar--xxlarge{width:96px;height:96px}.avatar--xxlarge .avatar__initials{font-size:32px}.avatar--xlarge{width:72px;height:72px}.avatar--xlarge .avatar__initials{font-size:24px}.avatar--large{width:56px;height:56px}.avatar--large .avatar__initials{font-size:20px}.avatar--medium{width:40px;height:40px}.avatar--medium .avatar__initials{font-size:16px}.avatar--small{width:32px;height:32px}.avatar--small .avatar__initials{font-size:14px}.avatar--xsmall{width:24px;height:24px}.avatar--xsmall .avatar__initials{font-size:12px}.avatar--xxsmall{width:20px;height:20px}.avatar--xxsmall .avatar__initials{font-size:10px}";

const Avatar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.shape = 'circle';
    this.name = '';
    this.size = 'large';
    this.mode = 'dark';
  }
  /**
   * Function to get the initials to display inside the avatar
   * @returns initials from either initials prop or from name prop
   */
  getInitials() {
    let initials = '';
    if (this.initials) {
      initials = this.initials;
    }
    else if (this.name.trim().length > 0) {
      const nameParts = this.name.trim().split(' ');
      if (nameParts.length === 1) {
        initials = nameParts.shift().charAt(0);
      }
      else if (nameParts.length > 1) {
        initials = nameParts.shift().charAt(0) + nameParts.pop().charAt(0);
      }
    }
    return initials;
  }
  renderAltIcon() {
    const color = this.mode === 'error' ? '#C82124' : '#283DA5';
    return (index.h("svg", { id: this.mode === 'error' ? 'error-svg' : 'default-svg', width: 24, height: 24, fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, index.h("g", { "clip-path": 'url(#a)', fill: color }, index.h("circle", { cx: 12, cy: 9, r: 5 }), index.h("ellipse", { cx: 12, cy: 24.5, rx: 11, ry: 9.5 })), index.h("defs", null, index.h("clipPath", { id: 'a' }, index.h("path", { fill: '#fff', d: 'M0 0h24v24H0z' })))));
  }
  render() {
    let strBaseClassName = `avatar 
    avatar--${this.shape}
    avatar--${this.size}
    avatar--${this.mode}
    `;
    if (!this.image && (this.initials || this.name)) {
      strBaseClassName += ` avatar--${this.mode}--initials`;
    }
    else if (!this.image) {
      strBaseClassName += ` avatar--${this.mode}--default`;
    }
    return (index.h("div", { class: strBaseClassName, "aria-label": this.alt }, this.image ? (index.h("img", { part: 'image', class: 'avatar__image', src: this.image, alt: this.alt })) : this.initials || this.name ? (index.h("div", { part: 'initials', class: 'avatar__initials' }, this.getInitials())) : (this.renderAltIcon())));
  }
};
Avatar.style = avatarCss;

const inputCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,::after,::before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}:host{display:block}@media screen and (prefers-reduced-motion: reduce){.input-container .input-container-inner{-webkit-transition:none;transition:none}}.input-container{width:inherit;height:inherit}.input-container-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;position:relative;border:1px solid #cfd7df;background-color:#fff;border-radius:var(--fw-input-border-radius, 4px);-webkit-transition:border 0.3s ease;transition:border 0.3s ease}.input-container-inner.error{border-color:#d72d30}.input-container-inner.error.has-focus{-webkit-box-shadow:none;box-shadow:none;border-color:#d72d30}.input-container-inner.error:hover,.input-container-inner.error:focus{border-color:#d72d30}.input-container-inner.error+.help-block{color:#d72d30}.input-container-inner.warning{border-color:#f8ab59}.input-container-inner.warning.has-focus{-webkit-box-shadow:none;box-shadow:none;border-color:#f8ab59}.input-container-inner.warning:hover,.input-container-inner.warning:focus{border-color:#f8ab59}.input-container-inner.warning+.help-block{color:#f8ab59}.input-container-inner .inner__content{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-wrap:wrap;flex-wrap:wrap}.input-container-inner .inner__content .input__label{-ms-flex:1 1 40%;flex:1 1 40%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-margin-start:8px;margin-inline-start:8px}.input-container-inner .inner__content .input__label input{width:100%;padding-inline:0px;padding-block:5px;resize:none;border:none;outline:none;-webkit-box-shadow:none;box-shadow:none;min-height:24px;font-size:14px;font-weight:500;letter-spacing:0;line-height:20px;color:#183247;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:text;display:inline-block;font-family:inherit}.input-container-inner .inner__content .input__label input[disabled]{font-weight:400;color:#92a2b1;background-color:#f7f9fa;pointer-events:none}.input-container-inner .inner__content .input__prefix{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:0 1 auto;flex:0 1 auto;-webkit-margin-start:4px;margin-inline-start:4px}.input-container-inner .inner__content .input__prefix.hasContent{-webkit-margin-start:8px;margin-inline-start:8px}.input-container-inner .inner__suffix{-ms-flex:0 1 auto;flex:0 1 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-margin-end:8px;margin-inline-end:8px}.input-container-inner:hover,.input-container-inner:focus{border:1px #475867 solid;z-index:2}.input-container-inner.has-focus{outline:none;background:#fff;border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5;z-index:2}.input-container-inner.disabled{font-weight:400;color:#92a2b1;border:1px solid #ebeff3;background-color:#f7f9fa;border-style:solid;cursor:not-allowed}.input-container-inner .clear-button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:16px;width:16px}.input-container-inner .clear-button:hover,.input-container-inner .clear-button:focus{cursor:pointer;pointer-events:initial}.input-container-inner .clear-button .clear-img{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:12px;height:12px}.input-container-inner+.help-block{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}::-webkit-input-placeholder{color:#92a2b1;opacity:1}::-moz-placeholder{color:#92a2b1;opacity:1}:-ms-input-placeholder{color:#92a2b1;opacity:1}::-ms-input-placeholder{color:#92a2b1;opacity:1}::placeholder{color:#92a2b1;opacity:1}::-webkit-input-placeholder{color:#92a2b1}::-moz-placeholder{color:#92a2b1}:-ms-input-placeholder{color:#92a2b1}:-moz-placeholder{color:#92a2b1}";

const Input = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwFocus = index.createEvent(this, "fwFocus", 7);
    this.fwBlur = index.createEvent(this, "fwBlur", 7);
    this.fwInput = index.createEvent(this, "fwInput", 7);
    this.fwInputClear = index.createEvent(this, "fwInputClear", 7);
    this.fwInputKeyDown = index.createEvent(this, "fwInputKeyDown", 7);
    this.hasFocus = false;
    this.hasPrefix = false;
    this.hasHintTextSlot = false;
    this.hasWarningTextSlot = false;
    this.hasErrorTextSlot = false;
    /**
     * Label displayed on the interface, for the component.
     */
    this.label = '';
    /**
     * Default value displayed in the input box.
     */
    this.value = '';
    /**
     * Type of value accepted as the input value. If a user enters a value other than the specified type, the input box is not populated.
     */
    this.type = 'text';
    /**
     * Specifies whether the browser can display suggestions to autocomplete the text value.
     */
    this.autocomplete = 'off';
    /**
     * Displays a right-justified clear icon in the text box. Clicking the icon clears the input text. If the attribute’s value is undefined, the value is set to false. For a read-only input box, the clear icon is not displayed unless a default value is specified for the input box.
     */
    this.clearInput = false;
    /**
     * The step attribute is used when the type is `number`. It specifies the interval between legal numbers in a number/decimal input element.
     * Works with the min and max attributes to limit the increments at which a value can be set.
     * Possible values are `any` or a positive floating point number.
     * Default value is `any`
     */
    this.step = 'any';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Theme based on which the text box is styled.
     */
    this.state = 'normal';
    /**
     * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to false.
     */
    this.readonly = false;
    /**
     * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Identifier of the icon that is displayed in the left side of the text box. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
     */
    this.iconLeft = undefined;
    /**
     * Identifier of the icon that is displayed in the right side of the text box. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
     */
    this.iconRight = undefined;
    /**
     * Hint text displayed below the text box.
     */
    this.hintText = '';
    /**
     * Warning text displayed below the text box.
     */
    this.warningText = '';
    /**
     * Error text displayed below the text box.
     */
    this.errorText = '';
    this.onInput = (ev) => {
      const input = ev.target;
      this.value = input.value || '';
      this.fwInput.emit({
        event: ev,
        name: this.name,
        value: this.getValue(),
      });
    };
    this.onFocus = () => {
      this.hasFocus = true;
      this.fwFocus.emit();
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.fwBlur.emit({
        event: ev,
        name: this.name,
      });
    };
    this.onKeyDown = (ev) => {
      this.fwInputKeyDown.emit({
        event: ev,
      });
    };
    this.clearTextInput = (ev) => {
      if (!this.disabled) {
        this.value = '';
        if (this.nativeInput) {
          this.nativeInput.value = '';
        }
        this.fwInputClear.emit({
          event: ev,
          name: this.name,
          value: this.value,
        });
      }
    };
  }
  showClearButton() {
    var _a;
    return this.clearInput && !this.disabled && ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) > 0;
  }
  getValue() {
    return this.value || '';
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  /**
   * Sets focus on a specific `fw-input`. Use this method instead of the global `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  renderClearButton() {
    return (index.h("div", { class: 'clear-button', role: 'button', tabindex: '0', onClick: (e) => this.clearTextInput(e), onKeyDown: index$1.handleKeyDown(this.clearTextInput) }, index.h("fw-icon", { class: 'clear-img', name: 'cross', size: 8, library: 'system' })));
  }
  renderIcon(iconName) {
    return index.h("fw-icon", { name: iconName });
  }
  componentWillLoad() {
    this.hasPrefix =
      !!this.host.querySelector('[slot="input-prefix"]') || !!this.iconLeft;
    this.checkSlotContent();
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
  checkSlotContent() {
    this.hasHintTextSlot = index$1.hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = index$1.hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = index$1.hasSlot(this.host, 'error-text');
  }
  render() {
    const { host, name, value } = this;
    index$1.renderHiddenField(host, name, value);
    return (index.h(fieldControl.FieldControl, { inputId: this.name, label: this.label, labelId: `${this.label}-${this.name}`, state: this.state, hintTextId: `hint-${this.name}`, hintText: this.hintText, hasHintTextSlot: this.hasHintTextSlot, errorTextId: `error-${this.name}`, errorText: this.errorText, hasErrorTextSlot: this.hasErrorTextSlot, warningTextId: `warning-${this.name}`, warningText: this.warningText, hasWarningTextSlot: this.hasWarningTextSlot, required: this.required }, index.h("div", { "aria-disabled": this.disabled, class: {
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
      } }, index.h("div", { class: {
        'input-container': true,
      } }, index.h("div", { class: {
        'input-container-inner': true,
        'has-focus': this.hasFocus,
        'disabled': this.disabled,
        [this.state]: true,
      } }, index.h("div", { class: 'inner__content' }, index.h("div", { class: { input__prefix: true, hasContent: this.hasPrefix } }, this.iconLeft && this.renderIcon(this.iconLeft), index.h("slot", { name: 'input-prefix' })), index.h("div", { class: 'input__label' }, index.h("input", { ref: (input) => {
        this.nativeInput = input;
      }, id: this.name, autoComplete: this.autocomplete, disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', minLength: this.minlength, maxLength: this.maxlength, min: this.min, max: this.max, readOnly: this.readonly, required: this.required, step: this.step, type: this.type, value: this.value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown, "aria-invalid": this.state === 'error', "aria-describedby": this.getAriaDescribedBy() }), this.showClearButton() && this.renderClearButton())), index.h("div", { class: 'inner__suffix' }, this.iconRight && this.renderIcon(this.iconRight), index.h("slot", { name: 'input-suffix' })))))));
  }
  get host() { return index.getElement(this); }
};
Input.style = inputCss;

exports.fw_avatar = Avatar;
exports.fw_input = Input;
