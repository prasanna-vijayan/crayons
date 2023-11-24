import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as cloneNodeWithEvents } from './index2.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './spinner.js';
import { d as defineCustomElement$2 } from './toast-message.js';

function createToastStack(config) {
  if (!Object.prototype.hasOwnProperty.call(window, 'fwRemoveToast'))
    window.addEventListener('fwRemoveToast', removeChildToast);
  const existingToastStack = document.querySelector(`.fw-toast-stack.${config.position}`);
  let toastContainer;
  if (existingToastStack) {
    toastContainer = existingToastStack;
  }
  else {
    toastContainer = document.createElement('div');
    toastContainer.className = `fw-toast-stack ${config.position}`;
    toastContainer.style.cssText = `position: fixed;
      z-index: 950;
      top: 10px;
      ${getStylePosition(config.position)}
      background-color: $color-milk;
      max-width: 100%;
      max-height: 100%;`;
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
}
function createToastNotification(opts = {}, containerElem, defaultOpts) {
  const props = getProps(opts, defaultOpts);
  let toastElem;
  if (opts.contentref) {
    const ref = document.querySelector(opts.contentref);
    //toastElem = ref.cloneNode(true);
    // since we are cloning nodes, the events don't get cloned by default. we have to copy the events manually
    toastElem = cloneNodeWithEvents(ref, true, true);
    props.content = '';
  }
  else {
    toastElem = document.createElement('fw-toast-message');
  }
  Object.entries(props).map(([key, val]) => {
    if (val)
      toastElem.setAttribute(kebabCase(key), val);
  });
  containerElem.appendChild(toastElem);
}
function preventDuplicates(toasteContainerCollection, newToasterOption) {
  let hasDuplicates = false;
  Array.from(toasteContainerCollection).forEach((existingToast) => {
    var _a, _b;
    if (((_a = existingToast.attributes.getNamedItem('content')) === null || _a === void 0 ? void 0 : _a.value) ===
      newToasterOption.content &&
      ((_b = existingToast.attributes.getNamedItem('type')) === null || _b === void 0 ? void 0 : _b.value) ===
        newToasterOption.type) {
      hasDuplicates = true;
    }
  });
  return hasDuplicates;
}
function getStylePosition(position) {
  switch (position) {
    case 'top-left':
      return 'left: 10px;';
    case 'top-right':
      return 'right: 10px;';
    case 'top-center':
      return 'left: calc(50% - 200px);';
  }
}
function removeChildToast(event) {
  const target = event.target;
  document.querySelectorAll('.fw-toast-stack').forEach((node) => {
    if (node.contains(target)) {
      node.removeChild(target);
    }
  });
}
function getProps(opts = {}, defaultOpts) {
  var _a, _b, _c, _d, _e, _f;
  const props = Object.assign({}, {
    timeout: (_a = opts.timeout) !== null && _a !== void 0 ? _a : defaultOpts.timeout,
    type: (_b = opts.type) !== null && _b !== void 0 ? _b : defaultOpts.type,
    content: (_c = opts.content) !== null && _c !== void 0 ? _c : defaultOpts.content,
    actionLinkText: (_d = opts.actionLinkText) !== null && _d !== void 0 ? _d : defaultOpts.actionLinkText,
    sticky: (_e = opts.sticky) !== null && _e !== void 0 ? _e : defaultOpts.sticky,
    pauseOnHover: (_f = opts.pauseOnHover) !== null && _f !== void 0 ? _f : defaultOpts.pauseOnHover,
    open: true,
  });
  return props;
}
function kebabCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

const Toast = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     *  position of the toast notification in screen
     */
    this.position = 'top-center';
    /**
     * Time duration of the toast visibility
     */
    this.timeout = 4000;
    /**
     * Type of the toast - success,failure, warning, inprogress
     */
    this.type = 'warning';
    /**
     *  The Content of the action link
     */
    this.actionLinkText = '';
    /**
     *  won't close automatically
     */
    this.sticky = false;
  }
  componentWillLoad() {
    this.toastContainer = createToastStack(this);
  }
  async trigger(opts) {
    const hasDuplicates = opts.shouldPreventDuplicates
      ? preventDuplicates(this.toastContainer.children, opts)
      : false;
    if (!hasDuplicates) {
      createToastNotification(opts, this.toastContainer, this);
    }
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
}, [1, "fw-toast", {
    "position": [1],
    "timeout": [2],
    "type": [1],
    "content": [1],
    "actionLinkText": [1, "action-link-text"],
    "sticky": [4],
    "pauseOnHover": [4, "pause-on-hover"],
    "shouldPreventDuplicates": [4, "should-prevent-duplicates"],
    "trigger": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-toast", "fw-icon", "fw-spinner", "fw-toast-message"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-toast":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Toast);
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "fw-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-toast-message":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const FwToast = Toast;
const defineCustomElement = defineCustomElement$1;

export { FwToast, createToastNotification as a, createToastStack as c, defineCustomElement, preventDuplicates as p };
