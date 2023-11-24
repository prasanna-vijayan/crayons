'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63c6a574.js');
const index$1 = require('./index-926a762d.js');

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

const buttonCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (prefers-reduced-motion: reduce){.fw-btn,.fw-btn--label,.fw-btn--loader{-webkit-transition:none;transition:none}}:host{display:inline-block;width:auto;cursor:pointer}.fw-btn{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;border-style:solid;border-width:1px;font-weight:600;font-family:inherit;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;vertical-align:middle;padding:0;cursor:inherit;letter-spacing:0;outline:0;border-radius:4px;--fw-icon-color:currentColor}.fw-btn .fw-btn--label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;line-height:20px}.fw-btn:active:not(.fw-btn--loading){-webkit-box-shadow:inset 0 0 4px 0 rgba(0, 0, 0, 0.25);box-shadow:inset 0 0 4px 0 rgba(0, 0, 0, 0.25)}.fw-btn:focus{border:1px solid #2c5cc5;-webkit-box-shadow:0 0 0 1px #2c5cc5;box-shadow:0 0 0 1px #2c5cc5}.fw-btn.disabled,.fw-btn[disabled]{cursor:not-allowed}.fw-btn--primary{background-color:#264966;color:#fff;border-color:#12344d;background-image:-webkit-gradient(linear, left top, left bottom, from(#264966), to(#12344d));background-image:linear-gradient(to bottom, #264966, #12344d)}.fw-btn--primary:active{border-color:#264966}.fw-btn--primary:focus:not([disabled]),.fw-btn--primary:hover:not([disabled]){background-color:#12344d;background-image:none}.fw-btn--primary.disabled,.fw-btn--primary[disabled]{background-image:-webkit-gradient(linear, left top, left bottom, from(#92a2b1), to(#7b8e9f));background-image:linear-gradient(to bottom, #92a2b1, #7b8e9f);border-color:#7b8e9f;color:rgba(255, 255, 255, 0.5)}.fw-btn--secondary{background-color:#f5f7f9;color:#12344d;border-color:#cfd7df;background-image:-webkit-gradient(linear, left top, left bottom, from(#fff), to(#f5f7f9));background-image:linear-gradient(to bottom, #fff, #f5f7f9)}.fw-btn--secondary:active{border-color:#ebeff3}.fw-btn--secondary:focus:not([disabled]),.fw-btn--secondary:hover:not([disabled]){background-color:#f5f7f9;background-image:none}.fw-btn--secondary.disabled,.fw-btn--secondary[disabled]{background:#ebeff3;border-color:#cfd7df;color:#92a2b1}.fw-btn--danger{color:#fff;background-color:#d72d30;border-color:#c82124;background-image:-webkit-gradient(linear, left top, left bottom, from(#d72d30), to(#c82124));background-image:linear-gradient(to bottom, #d72d30, #c82124)}.fw-btn--danger:focus:not([disabled]),.fw-btn--danger:hover:not([disabled]){background-color:#c82124;background-image:none}.fw-btn--danger.disabled,.fw-btn--danger[disabled]{background-image:-webkit-gradient(linear, left top, left bottom, from(#f89fa1), to(#f2797b));background-image:linear-gradient(to bottom, #f89fa1, #f2797b);border-color:#f2797b;color:rgba(255, 255, 255, 0.5)}.fw-btn--link{background-color:transparent;background-image:none;border:1px solid transparent;color:#2c5cc5}.fw-btn--text{background-color:transparent;background-image:none;border:1px solid transparent;color:#264966}.fw-btn--text:focus:not([disabled]),.fw-btn--link:focus:not([disabled]){border-color:#2c5cc5;-webkit-box-shadow:0 0 0 1px #2c5cc5;box-shadow:0 0 0 1px #2c5cc5;background-color:transparent}.fw-btn--text:hover:not([disabled]),.fw-btn--link:hover:not([disabled]){background-color:#ebeff3}.fw-btn--text.disabled,.fw-btn--text[disabled],.fw-btn--link.disabled,.fw-btn--link[disabled]{opacity:0.5}.fw-btn--mini{height:16px}.fw-btn--mini .fw-btn--label{font-size:10px}.fw-btn--mini fw-spinner{-webkit-transform:scale(0.5);transform:scale(0.5)}.fw-btn--small{height:24px}.fw-btn--small .fw-btn--label{font-size:12px}.fw-btn--small fw-spinner{-webkit-transform:scale(0.75);transform:scale(0.75)}.fw-btn--normal{min-width:var(--fw-button-min-width, 80px);height:32px}.fw-btn--icon{min-width:32px;width:32px;height:32px;padding:0}.fw-btn--icon-small{min-width:24px;width:24px;height:24px;padding:0}.fw-btn--before,.fw-btn--after,.fw-btn--caret{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.fw-btn--normal ::slotted(fw-icon){--fw-icon-size:12px}.fw-btn--small ::slotted(fw-icon){--fw-icon-size:10px}.fw-btn--mini ::slotted(fw-icon){--fw-icon-size:8px}.fw-btn--has-label.fw-btn--normal .fw-btn--label{padding-inline:var(--fw-button-label-vertical-padding, 12px);padding-block:0}.fw-btn--has-before.fw-btn--normal{-webkit-padding-start:8px;padding-inline-start:8px}.fw-btn--has-before.fw-btn--normal .fw-btn--label{-webkit-padding-start:8px;padding-inline-start:8px}.fw-btn--has-after.fw-btn--normal,.fw-btn--caret.fw-btn--normal{-webkit-padding-end:8px;padding-inline-end:8px}.fw-btn--has-after.fw-btn--normal .fw-btn--label,.fw-btn--caret.fw-btn--normal .fw-btn--label{-webkit-padding-end:8px;padding-inline-end:8px}.fw-btn--has-label.fw-btn--small .fw-btn--label{padding-inline:var(--fw-button-label-vertical-padding, 8px);padding-block:0}.fw-btn--has-before.fw-btn--small{-webkit-padding-start:6px;padding-inline-start:6px}.fw-btn--has-before.fw-btn--small .fw-btn--label{-webkit-padding-start:6px;padding-inline-start:6px}.fw-btn--has-after.fw-btn--small,.fw-btn--caret.fw-btn--small{-webkit-padding-end:6px;padding-inline-end:6px}.fw-btn--has-after.fw-btn--small .fw-btn--label,.fw-btn--caret.fw-btn--small .fw-btn--label{-webkit-padding-end:6px;padding-inline-end:6px}.fw-btn--has-label.fw-btn--mini .fw-btn--label{padding-inline:var(--fw-button-label-vertical-padding, 6px);padding-block:0}.fw-btn--has-before.fw-btn--mini{-webkit-padding-start:4px;padding-inline-start:4px}.fw-btn--has-before.fw-btn--mini .fw-btn--label{-webkit-padding-start:4px;padding-inline-start:4px}.fw-btn--has-after.fw-btn--mini,.fw-btn--caret.fw-btn--mini{-webkit-padding-end:4px;padding-inline-end:4px}.fw-btn--has-after.fw-btn--mini .fw-btn--label,.fw-btn--caret.fw-btn--mini .fw-btn--label{-webkit-padding-end:4px;padding-inline-end:4px}.fw-btn--caret fw-icon{--fw-icon-size:9px}.fw-btn--caret.fw-btn--mini fw-icon{--fw-icon-size:6px}.fw-btn--loading{position:relative;cursor:wait}.fw-btn--loading .fw-btn--label,.fw-btn--loading .fw-btn--before,.fw-btn--loading .fw-btn--after,.fw-btn--loading .fw-btn--caret{opacity:0}.fw-btn--loading .fw-btn--loader{--fw-spinner-color:currentColor;opacity:1;line-height:0}.fw-btn--label,.fw-btn--loader{-webkit-transition:opacity 0.3s ease-out;transition:opacity 0.3s ease-out}.fw-btn--loader{opacity:0;position:absolute;font-size:1em;height:1em;width:1em;inset-block-start:calc(50% - 0.5em);inset-inline-start:calc(50% - 0.5em);-webkit-margin-before:-1px;margin-block-start:-1px;-webkit-margin-start:-1px;margin-inline-start:-1px}:host(.fw-button-group__button--first:not(.fw-button-group__button--last)) .fw-btn{border-start-end-radius:0;border-end-end-radius:0}:host(.fw-button-group__button--inner) .fw-btn{border-radius:0;-webkit-border-start:0;border-inline-start:0}:host(.fw-button-group__button--last:not(.fw-button-group__button--first)) .fw-btn{border-start-start-radius:0;border-end-start-radius:0;-webkit-border-start:0;border-inline-start:0}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwClick = index.createEvent(this, "fwClick", 7);
    this.fwFocus = index.createEvent(this, "fwFocus", 7);
    this.fwBlur = index.createEvent(this, "fwBlur", 7);
    /**
     *  Button type based on which actions are performed when the button is clicked.
     */
    this.type = 'button';
    /**
     * Identifier of  the theme based on which the button is styled.
     */
    this.color = 'primary';
    /**
     * Size of the button.
     */
    this.size = 'normal';
    /**
     * Disables the button on the interface. Default value is false.
     */
    this.disabled = false;
    /**
     * Loading state for the button, Default value is false.
     */
    this.loading = false;
    /**
     * Caret indicator for the button, Default value is false.
     */
    this.showCaretIcon = false;
    /**
     *  Accepts the id of the fw-modal component to open it on click.
     */
    this.modalTriggerId = '';
    /**
     * Accepts the id of the fw-file-uploader component to upload the file.
     */
    this.fileUploaderId = '';
    /**
     * Sets the delay for throttle in milliseconds. Defaults to 200 milliseconds.
     */
    this.throttleDelay = 200;
    this.hasLabel = false;
    this.hasBeforeLabel = false;
    this.hasAfterLabel = false;
  }
  async setFocus() {
    this.button.focus();
  }
  onFocus() {
    this.fwFocus.emit();
  }
  onBlur() {
    this.fwBlur.emit();
  }
  connectedCallback() {
    this.handleClickWithThrottle = index$1.throttle(this.handleClick, this, this.throttleDelay);
  }
  handlePreventDefault(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
  handleClick(event) {
    if (this.modalTriggerId !== '') {
      this.modalTrigger();
    }
    if (this.fileUploaderId !== '') {
      this.fileSubmit();
    }
    else if (this.type === 'submit') {
      this.fakeSubmit(event);
    }
    this.fwClick.emit();
  }
  async fileSubmit() {
    const fileUploader = document.querySelector(`fw-file-uploader#${this.fileUploaderId}`);
    fileUploader === null || fileUploader === void 0 ? void 0 : fileUploader.uploadFiles();
  }
  async modalTrigger() {
    const modal = document.querySelector(`fw-modal#${this.modalTriggerId}`);
    modal === null || modal === void 0 ? void 0 : modal.open();
  }
  async fakeSubmit(event) {
    const form = this.host.closest('form');
    if (form) {
      event.preventDefault();
      const fakeSubmit = document.createElement('button');
      fakeSubmit.type = 'submit';
      fakeSubmit.style.display = 'none';
      form.appendChild(fakeSubmit);
      fakeSubmit.click();
      fakeSubmit.remove();
    }
  }
  componentWillLoad() {
    this.handleSlotChange();
  }
  handleSlotChange() {
    this.hasLabel = index$1.hasSlot(this.host);
    this.hasBeforeLabel = index$1.hasSlot(this.host, 'before-label');
    this.hasAfterLabel = index$1.hasSlot(this.host, 'after-label');
  }
  render() {
    return (index.h(index.Host, { onClick: (e) => {
        if (this.disabled) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          return false;
        }
      } }, index.h("button", { type: this.type, class: `
            fw-btn fw-btn--${this.color.toLowerCase()}
            fw-btn--${this.size.toLowerCase()}
            ${this.loading ? 'fw-btn--loading' : ''}
            ${this.hasLabel ? 'fw-btn--has-label' : ''}
            ${this.hasBeforeLabel ? 'fw-btn--has-before' : ''}
            ${this.hasAfterLabel ? 'fw-btn--has-after' : ''}
            ${this.showCaretIcon ? 'fw-btn--caret' : ''}
          `, onClick: this.disabled || this.loading
        ? this.handlePreventDefault
        : this.handleClickWithThrottle, onFocus: () => this.onFocus(), onBlur: () => this.onBlur(), ref: (button) => (this.button = button), "aria-disabled": this.disabled, disabled: this.disabled }, index.h("span", { class: 'fw-btn--before' }, index.h("slot", { onSlotchange: () => this.handleSlotChange(), name: 'before-label' })), index.h("span", { class: 'fw-btn--label' }, index.h("slot", { onSlotchange: () => this.handleSlotChange() })), index.h("span", { class: 'fw-btn--after' }, index.h("slot", { onSlotchange: () => this.handleSlotChange(), name: 'after-label' })), this.loading ? index.h("fw-spinner", { class: 'fw-btn--loader' }) : '', this.showCaretIcon ? (index.h("fw-icon", { name: 'chevron-down', library: 'system' })) : (''))));
  }
  get host() { return index.getElement(this); }
};
Button.style = buttonCss;

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

exports.fw_avatar = Avatar;
exports.fw_button = Button;
exports.fw_checkbox = Checkbox;
