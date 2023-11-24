import { Component, h, Prop, Host, Element, Event, } from '@stencil/core';
import { handleKeyDown } from '../../../utils';
import { iconImageType, iconFileType, iconAddedLibrary, iconAddLibrary, } from '../../../utils/assets';
import { TranslationController } from '../../../global/Translation';
import { KB_TO_BYTE } from '../../../constants';
export class File2 {
  constructor() {
    /**
     * Name of the attachment file to be displayed (including the file extension)
     */
    this.label = '';
    /**
     * File type
     */
    this.type = null;
    /**
     * Size of the attachment in bytes
     */
    this.size = 0;
    /**
     * Boolean used to display size as passed or convert them to relatives like KB, MB etc...
     */
    this.parseSize = true;
    /**
     * Set private mode for different styles
     */
    this.isPrivateMode = false;
    /**
     * Error message text to display below the attachment
     */
    this.errorMessage = '';
    /**
     * Boolean value to set if the attachment is added in library or not
     */
    this.addedToLibrary = false;
    /**
     * State of the attachment for styling
     */
    this.state = 'normal';
    /**
     * Index order of the attachment file starting from 0
     */
    this.index = -1;
    /**
     * To enable library adding related feature
     */
    this.enableLibraryAdding = false;
    this.modifyLibraryHandler = async (event) => {
      if (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
      this.fwModifyLibrary.emit({
        index: this.index,
        value: this.value,
        state: this.state,
        type: this.addedToLibrary ? 'REMOVE_FROM_LIBRARY' : 'ADD_TO_LIBRARY',
      });
    };
    this.deleteHandler = async (event) => {
      if (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
      this.fwDelete.emit({
        index: this.index,
        value: this.value,
        state: this.state,
      });
    };
    this.reUploadHandler = async (event) => {
      if (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
      this.fwReupload.emit({
        index: this.index,
        value: this.value,
        state: this.state,
      });
    };
  }
  componentDidRender() {
    const elSize = this.spanSize;
    if (elSize && !this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        const sizeW = elSize.clientWidth;
        const extensionW = this.spanExtension.clientWidth;
        if (sizeW > 0 || extensionW > 0) {
          this.spanName.style.maxWidth = `calc(100% - ${sizeW}px - 4px - ${extensionW})`;
        }
      });
      this.resizeObserver.observe(elSize);
    }
  }
  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
  getFileSize() {
    const bytes = this.size;
    if (bytes === 0) {
      return ' (0 B)';
    }
    const k = KB_TO_BYTE;
    const dm = 2;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return ` (${parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]})`;
  }
  getFilenameAndExtension() {
    if (!this.label || this.label === '') {
      return ['', ''];
    }
    const numLastIndex = this.label.lastIndexOf('.');
    if (numLastIndex > -1) {
      const strFileExtension = this.label.substring(numLastIndex + 1);
      return [
        this.label.substring(0, numLastIndex),
        strFileExtension && strFileExtension !== ''
          ? `.${strFileExtension}`
          : '',
      ];
    }
    else {
      return [this.label, ''];
    }
  }
  render() {
    var _a;
    const strClassName = 'fw-attachment';
    const boolErrorState = this.state === 'error';
    const boolFailedState = this.state === 'failed';
    const boolLoadingState = this.state === 'loading';
    const boolNormalState = this.state === 'normal';
    let strBaseClassName = strClassName;
    if (!boolNormalState) {
      strBaseClassName += ` ${strClassName}--${this.state}-state`;
    }
    else if (this.isPrivateMode) {
      strBaseClassName += ` ${strClassName}--private-mode`;
    }
    const strSize = this.parseSize ? this.getFileSize() : this.size;
    const arrFilebreak = this.getFilenameAndExtension();
    const strFileName = arrFilebreak && arrFilebreak.length > 0 ? arrFilebreak[0] : '';
    const strFileExtension = arrFilebreak && arrFilebreak.length > 1 ? arrFilebreak[1] : '';
    return (h(Host, null,
      h("div", { class: strBaseClassName },
        h("div", { class: `${strClassName}-content` },
          h("div", { class: `${strClassName}-content-left-panel` },
            h("span", { class: `${strClassName}-content-icon` },
              h("fw-icon", { dataSvg: ((_a = this.type) === null || _a === void 0 ? void 0 : _a.startsWith('image/')) === true
                  ? iconImageType
                  : iconFileType, color: boolErrorState || boolFailedState ? '#d72d30' : '#264966' })),
            h("span", { class: `${strClassName}-content-name`, ref: (el) => (this.spanName = el) }, strFileName),
            h("span", { class: `${strClassName}-content-file-extension`, ref: (el) => (this.spanExtension = el) }, strFileExtension),
            h("span", { class: `${strClassName}-content-size`, ref: (el) => (this.spanSize = el) }, strSize)),
          h("div", { class: `${strClassName}-content-right-panel` },
            this.enableLibraryAdding && boolNormalState && (h("fw-tooltip", { trigger: 'hover', content: this.addedToLibrary
                ? TranslationController.t('fileUploader.removeFromLibrary')
                : TranslationController.t('fileUploader.saveInLibrary'), hoist: true },
              h("div", { id: this.addedToLibrary
                  ? 'removeFromLibraryBtn'
                  : 'addToLibraryBtn', class: `${strClassName}-content-add-library-btn`, role: 'button', tabindex: '-1', onClick: this.modifyLibraryHandler, onKeyDown: handleKeyDown(this.modifyLibraryHandler) },
                h("fw-icon", { id: this.addedToLibrary
                    ? 'removeFromLibraryBtnIcon'
                    : 'addToLibraryBtnIcon', class: `${strClassName}-content-add-library-btn-icon`, dataSvg: this.addedToLibrary ? iconAddedLibrary : iconAddLibrary, color: this.addedToLibrary ? '#2C5CC5' : '#475867' })))),
            !boolLoadingState && (h("div", { class: `${strClassName}-content-delete-btn`, role: 'button', tabindex: '0', onClick: this.deleteHandler, onKeyDown: handleKeyDown(this.deleteHandler) },
              h("fw-icon", { class: `${strClassName}-content-delete-btn-icon`, name: 'cross', size: 6, library: 'system' }))),
            boolLoadingState && (h("fw-spinner", { size: 'large', class: `${strClassName}-content-spinner` })))),
        (boolErrorState || boolFailedState) && (h("div", { class: `${strClassName}-content-error` },
          h("span", { class: `${strClassName}-content-error-icon` },
            h("fw-icon", { name: 'error', size: 12, color: '#d72d30' })),
          h("span", { class: `${strClassName}-content-error-message` }, this.errorMessage),
          (boolErrorState || boolFailedState) && (h("button", { class: `${strClassName}-content-reupload-btn`, onClick: this.reUploadHandler }, TranslationController.t('fileUploader2.retry'))))))));
  }
  static get is() { return "fw-file-2"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["file-2.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["file-2.css"]
  }; }
  static get properties() { return {
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Name of the attachment file to be displayed (including the file extension)"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | null",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "File type"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "null"
    },
    "size": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Size of the attachment in bytes"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "0"
    },
    "parseSize": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Boolean used to display size as passed or convert them to relatives like KB, MB etc..."
      },
      "attribute": "parse-size",
      "reflect": false,
      "defaultValue": "true"
    },
    "isPrivateMode": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set private mode for different styles"
      },
      "attribute": "is-private-mode",
      "reflect": false,
      "defaultValue": "false"
    },
    "errorMessage": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Error message text to display below the attachment"
      },
      "attribute": "error-message",
      "reflect": false,
      "defaultValue": "''"
    },
    "addedToLibrary": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Boolean value to set if the attachment is added in library or not"
      },
      "attribute": "added-to-library",
      "reflect": false,
      "defaultValue": "false"
    },
    "state": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "'normal' | 'loading' | 'error' | 'failed'",
        "resolved": "\"error\" | \"failed\" | \"loading\" | \"normal\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "State of the attachment for styling"
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'normal'"
    },
    "index": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Index order of the attachment file starting from 0"
      },
      "attribute": "index",
      "reflect": false,
      "defaultValue": "-1"
    },
    "value": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Value or id related to the attached file"
      },
      "attribute": "value",
      "reflect": false
    },
    "enableLibraryAdding": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "To enable library adding related feature"
      },
      "attribute": "enable-library-adding",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "fwDelete",
      "name": "fwDelete",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event triggered to delete the attachment file"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwModifyLibrary",
      "name": "fwModifyLibrary",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event triggered to add / remove file from the library"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwReupload",
      "name": "fwReupload",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event triggered to reupload"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
}
