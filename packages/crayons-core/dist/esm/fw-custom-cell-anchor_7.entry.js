import { r as registerInstance, h, i as Host, e as getElement, c as createEvent } from './index-f21e28a1.js';
import { T as TranslationController } from './Translation-e52da6d2.js';
import { d as debounce, c as cloneNodeWithEvents } from './index-62c726ed.js';

const customCellAnchorCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.anchor{color:#2c5cc5;text-decoration:none;font-weight:600;display:inline-block;width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";

const CustomCellAnchor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.href = '';
    this.text = '';
    this.target = '_self';
  }
  render() {
    return (h("a", { class: 'anchor', href: this.href, target: this.target }, this.text));
  }
};
CustomCellAnchor.style = customCellAnchorCss;

const CustomCellUser$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = '';
    this.size = 18;
    this.color = '#647A8E';
    this.library = 'crayons';
    this.src = null;
  }
  render() {
    return (h("fw-icon", { name: this.name, size: this.size, color: this.color, library: this.library, src: this.src }));
  }
};

const customCellParagraphCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.paragraph-container{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.paragraph-container .paragraph-text{overflow:hidden;margin:0px}.paragraph-container .paragraph-text.expanded{display:inline}.paragraph-container .paragraph-toggle{display:inline;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;color:#2c5cc5;white-space:nowrap;font-weight:600}.paragraph-container .paragraph-toggle:hover,.paragraph-container .paragraph-toggle:focus{cursor:pointer}";

const CustomCellParagraph = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    const para = (h("p", { class: {
        'paragraph-text': true,
        'open': this.showToggle,
        'expanded': !this.hide,
      }, style: {
        maxHeight: this.maxHeight,
      } }, this.text, ' '));
    return (h(Host, { onFocus: () => this.onFocus() }, h("div", { class: 'paragraph-container' }, this.showToggle && this.hide ? (h("fw-tooltip", { content: this.text, hoist: true, placement: 'bottom-start', fallbackPlacements: ['top-start'] }, para)) : (para), this.showToggle && (h("div", { class: 'paragraph-toggle', role: 'button', tabIndex: 0, onKeyUp: (event) => (event.code === 'Space' || event.code === 'Enter') &&
        this.toggleParagraph(), onClick: () => this.toggleParagraph(), ref: (el) => (this.toggleParaButton = el) }, this.hide ? (h("span", null, TranslationController.t('datatable.showMore'))) : (h("span", null, TranslationController.t('datatable.showLess'))))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "text": ["textChangeHandler"]
  }; }
};
CustomCellParagraph.style = customCellParagraphCss;

const customCellUserCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.name-box-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}.name-box-container .name-box{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-positive:1;flex-grow:1;margin-inline:12px;margin-block:0}.name-box-container .name-box .name-box-text{font-weight:600;font-size:14px;line-height:20px;width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.name-box-container .name-box .name-box-email{font-size:12px;color:#475867;line-height:18px;width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";

const CustomCellUser = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.image = null;
    this.name = '';
    this.email = '';
    this.alt = '';
  }
  render() {
    return (h("div", { class: 'name-box-container' }, h("div", { class: 'avatar' }, h("fw-avatar", { size: 'small', image: this.image, name: this.name, alt: this.alt })), h("div", { class: 'name-box' }, h("div", { class: 'name-box-text' }, this.name), h("div", { class: 'name-box-email' }, this.email))));
  }
};
CustomCellUser.style = customCellUserCss;

//Global Variables
let dragElement;
const placeholders = [];
const DEFAULT_OPTIONS = {
  sortable: false,
  acceptFrom: '',
  placeholderClass: '',
  copy: true,
  addOnDrop: true,
};
class Draggable {
  constructor(container, options) {
    this.childElements = [];
    this.acceptFrom = [];
    this.dropped = false;
    this.debouncedSetElement = debounce((childElements, draggingElement, y) => {
      if (this.cancelDebouncedDrag) {
        return;
      }
      const afterElement = this.getDragAfterElement(childElements, y);
      let newElement;
      // dragging inside the same container, so no need to add placeholder
      if (draggingElement.parentElement.id === this.dragContainer.id) {
        newElement = draggingElement;
      }
      else {
        this.placeholder || (this.placeholder = this.createPlaceholder(draggingElement));
        newElement = this.placeholder;
      }
      this.addElement(newElement, afterElement);
    }, this, 5);
    this.onDragStart = (e) => {
      dragElement = e.target;
      this.dropped = false;
      this.cancelDebouncedDrag = false;
      // Set dragElementId for Firefox
      e.dataTransfer.setData('text/plain', dragElement.id);
      // Set all items inside the drag container except the current element
      this.childElements = Array.from(this.dragContainer.children);
      const draggingElementIndex = this.childElements.indexOf(dragElement);
      this.nextSibling = this.childElements[draggingElementIndex + 1];
      this.childElements.splice(draggingElementIndex, 1);
      e.stopPropagation();
    };
    this.onDragEnter = (e) => {
      if (!this.canAcceptDragElement()) {
        return;
      }
      const sortContainer = e
        .composedPath()
        .find((el) => el.id === this.dragContainer.id);
      if (sortContainer && sortContainer !== this.previousContainer) {
        this.childElements = Array.from(this.dragContainer.children);
        // the drag element have entered or re-entered current drag container
        this.cancelDebouncedDrag = false;
      }
      this.previousContainer = sortContainer;
    };
    this.onDragLeave = (e) => {
      if (!this.canAcceptDragElement()) {
        return;
      }
      const outTarget = e.fromElement || e.relatedTarget;
      if (!e.currentTarget.contains(outTarget)) {
        // Check whether the outTarget's host (in case of shadow dom) exists in currentTarget
        const parentHost = this.getMatchingHost(outTarget, this.dragContainer.children[0].tagName);
        if (!e.currentTarget.contains(parentHost)) {
          // the drag element have left the current container(this.host)
          this.previousContainer = undefined;
        }
      }
    };
    this.onDragOver = (e) => {
      e.preventDefault();
      if (!this.canAcceptDragElement()) {
        return;
      }
      this.debouncedSetElement(this.childElements, dragElement, e.clientY);
    };
    // Both dragend and drop need to used as the drop will be fired only on the container on which the drag is dropped
    // and no on the container where drag is originated.
    this.onDragEnd = (e) => {
      if ((!this.dropped || placeholders.length > 0) && dragElement) {
        // The drag element is dropped outside the drag container
        this.addElement(dragElement, this.nextSibling);
        this.removePlaceholder();
      }
      this.resetData(e);
    };
    this.onDrop = (e) => {
      if (!this.canAcceptDragElement()) {
        return;
      }
      this.dropped = true;
      const sortContainerId = dragElement.parentElement.id;
      const newElement = this.placeholder || dragElement;
      const droppedIndex = [...this.dragContainer.children].indexOf(newElement);
      if (this.placeholder) {
        if (this.options.addOnDrop) {
          const clone = this.options.copy
            ? cloneNodeWithEvents(dragElement, true, true)
            : dragElement;
          this.placeholder.replaceWith(clone);
        }
        else {
          this.removePlaceholder();
        }
      }
      this.dragContainer.dispatchEvent(new CustomEvent('fwDropBase', {
        cancelable: true,
        bubbles: false,
        detail: {
          droppedElement: dragElement,
          droppedIndex,
          dragFromId: sortContainerId,
          dropToId: this.dragContainer.id,
        },
      }));
      this.resetData(e);
    };
    this.dragContainer = container;
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    this.acceptFrom = this.options.acceptFrom
      ? this.options.acceptFrom.split(',')
      : [];
    this.options.sortable && this.acceptFrom.push(this.dragContainer.id);
    this.addListeners();
  }
  addListeners() {
    this.dragContainer.addEventListener('dragstart', this.onDragStart);
    this.dragContainer.addEventListener('dragend', this.onDragEnd);
    this.dragContainer.addEventListener('dragenter', this.onDragEnter);
    this.dragContainer.addEventListener('dragleave', this.onDragLeave);
    this.dragContainer.addEventListener('dragover', this.onDragOver);
    this.dragContainer.addEventListener('drop', this.onDrop);
  }
  removeListeners() {
    this.dragContainer.removeEventListener('dragstart', this.onDragStart);
    this.dragContainer.removeEventListener('dragend', this.onDragEnd);
    this.dragContainer.removeEventListener('dragenter', this.onDragEnter);
    this.dragContainer.removeEventListener('dragleave', this.onDragLeave);
    this.dragContainer.removeEventListener('dragover', this.onDragOver);
    this.dragContainer.removeEventListener('drop', this.onDrop);
  }
  getDragAfterElement(elements, y) {
    return elements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      // Subtracting mouse y position with the middle of the element
      // to check whether the dragging element is above an element
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      }
      else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }
  createPlaceholder(sourceElement) {
    const placeholderClass = this.options.placeholderClass;
    const containerTag = this.dragContainer.tagName;
    let placeholder;
    if (['UL', 'OL'].includes(containerTag)) {
      placeholder = document.createElement('li');
    }
    else if (['TABLE', 'TBODY'].includes(containerTag)) {
      placeholder = document.createElement('tr');
      // set colspan to always all rows, otherwise the item can only be dropped in first column
      placeholder.innerHTML = '<td colspan="100"></td>';
    }
    else {
      placeholder = document.createElement('div');
    }
    // set style for the placeholder
    if (typeof placeholderClass === 'string' && placeholderClass) {
      placeholder.classList.add(...placeholderClass.split(' '));
    }
    else {
      placeholder.style.height = this.getElementHeight(sourceElement) + 'px';
      placeholder.style.width = this.getElementWidth(sourceElement) + 'px';
    }
    placeholders.push(placeholder);
    return placeholder;
  }
  removePlaceholder() {
    placeholders.forEach((placeholder) => {
      placeholder.remove();
    });
    // TODO: better way of removing the this.placeholder
  }
  addElement(newElement, nextElement) {
    if (nextElement) {
      if (this.canInsertBefore(nextElement) &&
        !(newElement === null || newElement === void 0 ? void 0 : newElement.isSameNode(nextElement))) {
        this.dragContainer.insertBefore(newElement, nextElement);
      }
      return;
    }
    this.canAppendTo(this.dragContainer) &&
      this.dragContainer.appendChild(newElement);
  }
  canAcceptDragElement() {
    if (!dragElement) {
      return false;
    }
    const sortContainerId = dragElement.parentElement.id;
    return this.acceptFrom.includes(sortContainerId);
  }
  canInsertBefore(element) {
    return element && element.pinned !== 'top';
  }
  canAppendTo(container) {
    return container.lastElementChild.pinned !== 'bottom';
  }
  getHost(element) {
    return element.getRootNode().host;
  }
  getMatchingHost(element, tagName) {
    let matchingElement = element;
    while (matchingElement) {
      matchingElement = this.getHost(matchingElement);
      if (matchingElement && matchingElement.tagName === tagName) {
        return matchingElement;
      }
    }
    return undefined;
  }
  resetData(e) {
    e.dataTransfer.clearData();
    this.previousContainer = undefined;
    dragElement = undefined;
    this.placeholder = undefined;
    this.cancelDebouncedDrag = true;
  }
  getElementHeight(element) {
    if (!(element instanceof HTMLElement)) {
      throw new Error('You must provide a valid dom element');
    }
    // get calculated style of element
    const style = window.getComputedStyle(element);
    // get only height if element has box-sizing: border-box specified
    if (style.getPropertyValue('box-sizing') === 'border-box') {
      return parseInt(style.getPropertyValue('height'), 10);
    }
    // pick applicable properties, convert to int and reduce by adding
    return ['height', 'padding-top', 'padding-bottom']
      .map(function (key) {
      const int = parseInt(style.getPropertyValue(key), 10);
      return isNaN(int) ? 0 : int;
    })
      .reduce(function (sum, value) {
      return sum + value;
    });
  }
  getElementWidth(element) {
    if (!(element instanceof HTMLElement)) {
      throw new Error('You must provide a valid dom element');
    }
    // get calculated style of element
    const style = window.getComputedStyle(element);
    // pick applicable properties, convert to int and reduce by adding
    return ['width', 'padding-left', 'padding-right']
      .map(function (key) {
      const int = parseInt(style.getPropertyValue(key), 10);
      return isNaN(int) ? 0 : int;
    })
      .reduce(function (sum, value) {
      return sum + value;
    });
  }
  destroy() {
    this.removeListeners();
  }
}

const dragContainerCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.drag-container{display:block}";

const DragContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwDrop = createEvent(this, "fwDrop", 7);
    /**
     * Id of the fw-sortable element from which draggable content can be accepted. Add comma separated id's for multiple containers.
     */
    this.acceptFrom = '';
    /**
     * Whether the drag element should be added to the container on drop. If set to false, the placeholder will be retained.
     */
    this.addOnDrop = true;
    /**
     * Whether the drag element should be moved or copied.
     */
    this.copy = true;
    /**
     * The class name for the drag/drop placeholder. Add space separated class names for multiple classes
     */
    this.placeholderClass = '';
    /**
     * Whether the list should be sortable.
     */
    this.sortable = true;
  }
  componentWillLoad() {
    this.containerInstance = new Draggable(this.host, {
      acceptFrom: this.acceptFrom,
      addOnDrop: this.addOnDrop,
      copy: this.copy,
      placeholderClass: this.placeholderClass,
      sortable: this.sortable,
    });
    this.host.addEventListener('fwDropBase', this.emitFwDrop.bind(this));
  }
  emitFwDrop(ev) {
    this.fwDrop.emit(ev['detail']);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.containerInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    this.host.removeEventListener('fwDropBase', this.emitFwDrop);
  }
  render() {
    return h(Host, { class: 'drag-container' });
  }
  get host() { return getElement(this); }
};
DragContainer.style = dragContainerCss;

const KebabMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwSelect = createEvent(this, "fwSelect", 7);
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
      return (h("fw-popover", { ref: (popoverRef) => (this.popoverRef = popoverRef), sameWidth: false, placement: 'bottom-end', hoist: true }, h("fw-button", { slot: 'popover-trigger', size: 'icon', color: 'text' }, h("fw-icon", { name: 'more-vertical', size: 14 })), h("fw-list-options", { slot: 'popover-content', options: this.options, variant: this.variant, allowSelect: false, hideTick: true })));
    }
    else {
      return;
    }
  }
};

const skeletonCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.skeleton{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;overflow:hidden;position:relative;background:var(--fw-skeleton-background, #cfd7df);border-radius:var(--fw-skeleton-border-radius, 999px);width:var(--fw-skeleton-width, 100%);height:var(--fw-skeleton-height, 16px);display:block;-webkit-margin-after:var(--fw-skeleton-margin-bottom, 8px);margin-block-end:var(--fw-skeleton-margin-bottom, 8px);will-change:auto}.skeleton:after,.skeleton:before{-webkit-box-sizing:border-box;box-sizing:border-box}.skeleton.circle{width:var(--fw-skeleton-width, 32px);height:var(--fw-skeleton-height, 32px);-webkit-margin-after:var(--fw-skeleton-margin-bottom, 8px);margin-block-end:var(--fw-skeleton-margin-bottom, 8px);border-radius:var(--fw-skeleton-border-radius, 50%)}.skeleton.rect{border-radius:var(--fw-skeleton-border-radius, 0px)}.skeleton.only{-webkit-margin-after:var(--fw-skeleton-margin-bottom, 0px);margin-block-end:var(--fw-skeleton-margin-bottom, 0px)}@media (prefers-reduced-motion: reduce){.skeleton.pulse,.skeleton.sheen{-webkit-animation:none;animation:none}}.skeleton.pulse{-webkit-animation:pulse 2s ease-in-out 0.5s infinite;animation:pulse 2s ease-in-out 0.5s infinite}:host(:not([dir=\"rtl\"])) .skeleton.sheen,:host([dir=\"ltr\"]) .skeleton.sheen{background:-webkit-gradient(linear, right top, left top, from(var(--fw-skeleton-sheen-color, #b1bdc8)), color-stop(var(--fw-skeleton-background, #cfd7df)), color-stop(var(--fw-skeleton-background, #cfd7df)), to(var(--fw-skeleton-sheen-color, #b1bdc8)));background:linear-gradient(270deg, var(--fw-skeleton-sheen-color, #b1bdc8), var(--fw-skeleton-background, #cfd7df), var(--fw-skeleton-background, #cfd7df), var(--fw-skeleton-sheen-color, #b1bdc8));-webkit-animation:sheen-ltr 8s ease-in-out infinite;animation:sheen-ltr 8s ease-in-out infinite}:host([dir=\"rtl\"]) .skeleton.sheen{background:-webkit-gradient(linear, left top, right top, from(var(--fw-skeleton-sheen-color, #b1bdc8)), color-stop(var(--fw-skeleton-background, #cfd7df)), color-stop(var(--fw-skeleton-background, #cfd7df)), to(var(--fw-skeleton-sheen-color, #b1bdc8)));background:linear-gradient(-270deg, var(--fw-skeleton-sheen-color, #b1bdc8), var(--fw-skeleton-background, #cfd7df), var(--fw-skeleton-background, #cfd7df), var(--fw-skeleton-sheen-color, #b1bdc8));-webkit-animation:sheen-rtl 8s ease-in-out infinite;animation:sheen-rtl 8s ease-in-out infinite}@-webkit-keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}@-webkit-keyframes sheen-ltr{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes sheen-ltr{0%{background-position:200% 0}to{background-position:-200% 0}}@-webkit-keyframes sheen-rtl{0%{background-position:-100% 0}to{background-position:300% 0}}@keyframes sheen-rtl{0%{background-position:-100% 0}to{background-position:300% 0}}";

const Skeleton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, this.items.map((_, index) => {
      return (h("div", { part: 'base', key: index, class: {
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

export { CustomCellAnchor as fw_custom_cell_anchor, CustomCellUser$1 as fw_custom_cell_icon, CustomCellParagraph as fw_custom_cell_paragraph, CustomCellUser as fw_custom_cell_user, DragContainer as fw_drag_container, KebabMenu as fw_kebab_menu, Skeleton as fw_skeleton };
