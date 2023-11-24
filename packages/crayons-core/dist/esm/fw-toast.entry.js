import { r as registerInstance, h, i as Host } from './index-f21e28a1.js';
import { c as createToastStack, p as preventDuplicates, a as createToastNotification } from './toast-util-79bd0e37.js';
import './index-62c726ed.js';

const Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};

export { Toast as fw_toast };
