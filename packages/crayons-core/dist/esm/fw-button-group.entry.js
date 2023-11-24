import { r as registerInstance, h, i as Host, e as getElement } from './index-f21e28a1.js';

const buttonGroupCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}";

const ButtonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = '';
  }
  componentDidLoad() {
    this.handleSlotChange();
  }
  handleSlotChange() {
    if (!this.host)
      return;
    const slottedElements = this.host.querySelectorAll('fw-button');
    slottedElements.forEach((button, index) => {
      button.classList.add('fw-button-group__button');
      button.classList.toggle('fw-button-group__button--first', index === 0);
      button.classList.toggle('fw-button-group__button--inner', index > 0 && index < slottedElements.length - 1);
      button.classList.toggle('fw-button-group__button--last', index === slottedElements.length - 1);
    });
  }
  render() {
    return (h(Host, { "aria-label": this.label }, h("slot", { onSlotchange: () => this.handleSlotChange() })));
  }
  get host() { return getElement(this); }
};
ButtonGroup.style = buttonGroupCss;

export { ButtonGroup as fw_button_group };
