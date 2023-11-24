'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63c6a574.js');
const toastUtil = require('./toast-util-9da004a5.js');
require('./index-926a762d.js');

const Toast = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    this.toastContainer = toastUtil.createToastStack(this);
  }
  async trigger(opts) {
    const hasDuplicates = opts.shouldPreventDuplicates
      ? toastUtil.preventDuplicates(this.toastContainer.children, opts)
      : false;
    if (!hasDuplicates) {
      toastUtil.createToastNotification(opts, this.toastContainer, this);
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};

exports.fw_toast = Toast;
