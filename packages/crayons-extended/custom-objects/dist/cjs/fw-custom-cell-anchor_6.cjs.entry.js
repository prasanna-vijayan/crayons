'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-62345b50.js');
const Translation = require('./Translation-02c04a0b.js');
require('./index-e99fea28.js');

const customCellAnchorCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.anchor{color:#2c5cc5;text-decoration:none;font-weight:600;display:inline-block;width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";

const CustomCellAnchor = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.href = '';
    this.text = '';
    this.target = '_self';
  }
  render() {
    return (index.h("a", { class: 'anchor', href: this.href, target: this.target }, this.text));
  }
};
CustomCellAnchor.style = customCellAnchorCss;

const CustomCellUser$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = '';
    this.size = 18;
    this.color = '#647A8E';
    this.library = 'crayons';
    this.src = null;
  }
  render() {
    return (index.h("fw-icon", { name: this.name, size: this.size, color: this.color, library: this.library, src: this.src }));
  }
};

const customCellParagraphCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.paragraph-container{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.paragraph-container .paragraph-text{overflow:hidden;margin:0px}.paragraph-container .paragraph-text.expanded{display:inline}.paragraph-container .paragraph-toggle{display:inline;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;color:#2c5cc5;white-space:nowrap;font-weight:600}.paragraph-container .paragraph-toggle:hover,.paragraph-container .paragraph-toggle:focus{cursor:pointer}";

const CustomCellParagraph = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * text to display inside the cell
     */
    this.text = '';
    /** max height to restrict trimming. 60px to allow for 3 lines (3 * 20 line-height) */
    this.maxHeight = '60px';
    /**
     * hide and show toggle button state based on how long the text is
     */
    this.showToggle = false;
    /**
     * hide and show text
     */
    this.hide = true;
    /**
     * toggle paragraph button
     */
    this.toggleParaButton = null;
  }
  textChangeHandler() {
    this.showToggleOnTextChange();
  }
  /**
   * componentDidLoad lifecycle event
   */
  componentDidLoad() {
    this.showToggleOnTextChange();
  }
  /** on focusing of the para variant */
  onFocus() {
    if (this.toggleParaButton) {
      this.toggleParaButton.focus();
    }
    else {
      this.el.parentElement.setAttribute('tabindex', '0');
      this.el.parentElement.focus();
    }
  }
  /**
   * showToggleOnTextChange show the button based on number of lines in the paragraph
   */
  showToggleOnTextChange() {
    const paraHeight = this.el.getBoundingClientRect().height;
    if (paraHeight >= parseInt(this.maxHeight)) {
      this.showToggle = true;
    }
    else {
      this.showToggle = false;
    }
  }
  /**
   * toggleParagraph show and hide the longer paragraph text
   */
  toggleParagraph() {
    this.hide = !this.hide;
    if (this.hide) {
      this.maxHeight = '60px';
    }
    else {
      this.maxHeight = 'none';
    }
  }
  /**
   * render method
   */
  render() {
    const para = (index.h("p", { class: {
        'paragraph-text': true,
        'open': this.showToggle,
        'expanded': !this.hide,
      }, style: {
        maxHeight: this.maxHeight,
      } }, this.text, ' '));
    return (index.h(index.Host, { onFocus: () => this.onFocus() }, index.h("div", { class: 'paragraph-container' }, this.showToggle && this.hide ? (index.h("fw-tooltip", { content: this.text, hoist: true, placement: 'bottom-start', fallbackPlacements: ['top-start'] }, para)) : (para), this.showToggle && (index.h("div", { class: 'paragraph-toggle', role: 'button', tabIndex: 0, onKeyUp: (event) => (event.code === 'Space' || event.code === 'Enter') &&
        this.toggleParagraph(), onClick: () => this.toggleParagraph(), ref: (el) => (this.toggleParaButton = el) }, this.hide ? (index.h("span", null, Translation.TranslationController.t('datatable.showMore'))) : (index.h("span", null, Translation.TranslationController.t('datatable.showLess'))))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "text": ["textChangeHandler"]
  }; }
};
CustomCellParagraph.style = customCellParagraphCss;

const customCellUserCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.name-box-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}.name-box-container .name-box{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-positive:1;flex-grow:1;margin-inline:12px;margin-block:0}.name-box-container .name-box .name-box-text{font-weight:600;font-size:14px;line-height:20px;width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.name-box-container .name-box .name-box-email{font-size:12px;color:#475867;line-height:18px;width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";

const CustomCellUser = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.image = null;
    this.name = '';
    this.email = '';
    this.alt = '';
  }
  render() {
    return (index.h("div", { class: 'name-box-container' }, index.h("div", { class: 'avatar' }, index.h("fw-avatar", { size: 'small', image: this.image, name: this.name, alt: this.alt })), index.h("div", { class: 'name-box' }, index.h("div", { class: 'name-box-text' }, this.name), index.h("div", { class: 'name-box-email' }, this.email))));
  }
};
CustomCellUser.style = customCellUserCss;

const KebabMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwSelect = index.createEvent(this, "fwSelect", 7);
    /**
     * The data for the kebab menu component, the options will be of type array of fw-select-options.
     */
    this.options = [];
    /**
     * Standard is the default option without any graphics other option is icon which places the icon at the beginning of the row.
     * The props for the icon are passed as an object via the graphicsProps.
     */
    this.variant = 'standard';
    /**
     * Private
     * closeDropdown
     */
    this.closeDropdown = () => {
      this.popoverRef.hide();
    };
  }
  /**
   * fwSelectAttempted
   * @param selectedItem
   */
  fwSelectHandler(selectedItem) {
    const { value } = selectedItem.detail;
    this.fwSelect.emit({
      value,
    });
    this.closeDropdown();
  }
  render() {
    var _a;
    if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) {
      return (index.h("fw-popover", { ref: (popoverRef) => (this.popoverRef = popoverRef), sameWidth: false, placement: 'bottom-end', hoist: true }, index.h("fw-button", { slot: 'popover-trigger', size: 'icon', color: 'text' }, index.h("fw-icon", { name: 'more-vertical', size: 14 })), index.h("fw-list-options", { slot: 'popover-content', options: this.options, variant: this.variant, allowSelect: false, hideTick: true })));
    }
    else {
      return;
    }
  }
};

const skeletonCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.skeleton{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;overflow:hidden;position:relative;background:var(--fw-skeleton-background, #cfd7df);border-radius:var(--fw-skeleton-border-radius, 999px);width:var(--fw-skeleton-width, 100%);height:var(--fw-skeleton-height, 16px);display:block;-webkit-margin-after:var(--fw-skeleton-margin-bottom, 8px);margin-block-end:var(--fw-skeleton-margin-bottom, 8px);will-change:auto}.skeleton:after,.skeleton:before{-webkit-box-sizing:border-box;box-sizing:border-box}.skeleton.circle{width:var(--fw-skeleton-width, 32px);height:var(--fw-skeleton-height, 32px);-webkit-margin-after:var(--fw-skeleton-margin-bottom, 8px);margin-block-end:var(--fw-skeleton-margin-bottom, 8px);border-radius:var(--fw-skeleton-border-radius, 50%)}.skeleton.rect{border-radius:var(--fw-skeleton-border-radius, 0px)}.skeleton.only{-webkit-margin-after:var(--fw-skeleton-margin-bottom, 0px);margin-block-end:var(--fw-skeleton-margin-bottom, 0px)}@media (prefers-reduced-motion: reduce){.skeleton.pulse,.skeleton.sheen{-webkit-animation:none;animation:none}}.skeleton.pulse{-webkit-animation:pulse 2s ease-in-out 0.5s infinite;animation:pulse 2s ease-in-out 0.5s infinite}:host(:not([dir=\"rtl\"])) .skeleton.sheen,:host([dir=\"ltr\"]) .skeleton.sheen{background:-webkit-gradient(linear, right top, left top, from(var(--fw-skeleton-sheen-color, #b1bdc8)), color-stop(var(--fw-skeleton-background, #cfd7df)), color-stop(var(--fw-skeleton-background, #cfd7df)), to(var(--fw-skeleton-sheen-color, #b1bdc8)));background:linear-gradient(270deg, var(--fw-skeleton-sheen-color, #b1bdc8), var(--fw-skeleton-background, #cfd7df), var(--fw-skeleton-background, #cfd7df), var(--fw-skeleton-sheen-color, #b1bdc8));-webkit-animation:sheen-ltr 8s ease-in-out infinite;animation:sheen-ltr 8s ease-in-out infinite}:host([dir=\"rtl\"]) .skeleton.sheen{background:-webkit-gradient(linear, left top, right top, from(var(--fw-skeleton-sheen-color, #b1bdc8)), color-stop(var(--fw-skeleton-background, #cfd7df)), color-stop(var(--fw-skeleton-background, #cfd7df)), to(var(--fw-skeleton-sheen-color, #b1bdc8)));background:linear-gradient(-270deg, var(--fw-skeleton-sheen-color, #b1bdc8), var(--fw-skeleton-background, #cfd7df), var(--fw-skeleton-background, #cfd7df), var(--fw-skeleton-sheen-color, #b1bdc8));-webkit-animation:sheen-rtl 8s ease-in-out infinite;animation:sheen-rtl 8s ease-in-out infinite}@-webkit-keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}@-webkit-keyframes sheen-ltr-ltr{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes sheen-ltr-ltr{0%{background-position:200% 0}to{background-position:-200% 0}}@-webkit-keyframes sheen-ltr-rtl{0%{background-position:-100% 0}to{background-position:300% 0}}@keyframes sheen-ltr-rtl{0%{background-position:-100% 0}to{background-position:300% 0}}@-webkit-keyframes sheen-rtl-ltr{0%{background-position:-100% 0}to{background-position:300% 0}}@keyframes sheen-rtl-ltr{0%{background-position:-100% 0}to{background-position:300% 0}}@-webkit-keyframes sheen-rtl-rtl{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes sheen-rtl-rtl{0%{background-position:200% 0}to{background-position:-200% 0}}";

const Skeleton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Effect the skeleton will use. */
    this.effect = 'pulse';
    /**
     * Variant of the skeleton - circle or rectangle or text
     */
    this.variant = 'text';
    /**
     * Width of the skeleton ex. 100px, 100%, auto etc.
     */
    this.width = null;
    /**
     * Height of the skeleton ex. 100px, 100%, auto etc.
     */
    this.height = null;
    /**
     * MarginBottom of the skeleton ex. 10px, 0 etc.
     */
    this.marginBottom = null;
    /**
     * Number of rows of current skeleton type
     */
    this.count = 1;
    /**
     * Custom css styles (background/margins/width/height etc.)
     *
     * @type {({[k: string]: string} | string)}
     */
    this.customStyles = {};
    this.items = [];
  }
  componentWillLoad() {
    this.init();
  }
  componentWillUpdate() {
    this.init();
  }
  init() {
    this.items.length = this.count;
    this.items.fill(1);
    if (this.customStyles && typeof this.customStyles === 'string') {
      try {
        this.customStyles = JSON.parse(this.customStyles);
      }
      catch (error) {
        console.warn(`can't parse styles`, this.customStyles);
      }
    }
  }
  get style() {
    const dimensionsStyles = {
      width: null,
      height: null,
      marginBottom: null,
    };
    if (this.width) {
      dimensionsStyles.width = this.width;
    }
    if (this.height) {
      dimensionsStyles.height = this.height;
    }
    if (this.marginBottom) {
      dimensionsStyles.marginBottom = this.marginBottom;
    }
    const styles = typeof this.customStyles === 'object' ? this.customStyles : {};
    return Object.assign(Object.assign({}, dimensionsStyles), styles);
  }
  render() {
    return (index.h(index.Host, null, this.items.map((_, index$1) => {
      return (index.h("div", { part: 'base', key: index$1, class: {
          circle: this.variant === 'circle',
          rect: this.variant === 'rect',
          skeleton: true,
          pulse: this.effect === 'pulse',
          sheen: this.effect === 'sheen',
          only: this.count === 1,
        }, "aria-busy": 'true', "aria-live": 'polite', style: this.style }));
    })));
  }
};
Skeleton.style = skeletonCss;

exports.fw_custom_cell_anchor = CustomCellAnchor;
exports.fw_custom_cell_icon = CustomCellUser$1;
exports.fw_custom_cell_paragraph = CustomCellParagraph;
exports.fw_custom_cell_user = CustomCellUser;
exports.fw_kebab_menu = KebabMenu;
exports.fw_skeleton = Skeleton;
