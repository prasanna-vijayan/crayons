import { Component, Prop, State, Element, Event, h, Method, Watch, } from '@stencil/core';
import { TranslationController } from '../../global/Translation';
import { renderHiddenField } from '../../utils';
import { UploaderFile, } from './file-uploader2-util';
import { fileDragSVG, fileErrorSVG } from '../../utils/assets';
import { MB_TO_KB, KB_TO_BYTE } from '../../constants';
let fileCount = 0;
export class FileUploader {
  constructor() {
    /**
     * name - field name
     */
    this.name = '';
    /**
     * Inline information text, hint text.
     */
    this.hintText = '';
    /**
     * accept - comma separated string. tells us what file formats file uploader should accept.
     */
    this.accept = '';
    /**
     * maxFileSize - maximum file size the file uploader must accept.
     */
    this.maxFileSize = 0;
    /**
     * acceptError - Error message to display when format is invalid.
     */
    // @i18n({ keyName: 'fileUploader2.acceptError' })
    this.acceptError = TranslationController.t('fileUploader2.acceptError');
    /**
     * maxFileSizeError - Error message to display when file size exceeds limit
     */
    // @i18n({ keyName: 'fileUploader2.maxFileSizeError' })
    this.maxFileSizeError = TranslationController.t('fileUploader2.maxFileSizeError');
    /**
     * totalFileSizeAllowedError - Total file size (combination of all files) allowed for upload.
     */
    this.totalFileSizeAllowedError = TranslationController.t('fileUploader2.totalFileSizeAllowedError');
    /**
     * maxFilesLimitError - Error message when going beyond files limit.
     */
    // @i18n({ keyName: 'fileUploader2.maxFilesLimitError' })
    this.maxFilesLimitError = TranslationController.t('fileUploader2.maxFilesLimitError');
    /**
     * actionURL - URL to make server call.
     */
    this.actionURL = '';
    /**
     * actionParams - additional information to send to server other than the file.
     */
    this.actionParams = {};
    /**
     * multiple - upload multiple files.
     */
    this.multiple = false;
    /**
     * Max files allowed to upload.
     */
    this.filesLimit = 10;
    /**
     * Max total size allowed for upload
     */
    this.totalFileSizeAllowed = 0;
    /**
     * Upload all files in one single shot
     */
    this.isBatchUpload = false;
    /**
     * modify request
     * @param xhr
     * @returns xhr
     */
    this.modifyRequest = (xhr) => xhr;
    /**
     * to load default values in file uploader component.
     */
    this.initialFiles = [];
    /**
     * restrict the width of the attachment in the file uploader
     */
    this.restrictAttachmentBlock = false;
    /**
     * Use this prop to show the label on the component.
     */
    this.hideLabel = true;
    /**
     * Use a simple interface for the single file mode.
     */
    this.simpleInterfaceForSingleMode = false;
    /**
     * field acts as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * To maintain the same label styling as other form elements.
     */
    this.isFormLabel = false;
    /**
     * errorText - errorText collection.
     * Mutable as this can be set from form control too based on form validations.
     */
    this.errorText = '';
    /**
     * files - files collection.
     */
    this.files = [];
    /**
     * private
     * fileInputElement
     */
    this.fileInputElement = null;
    /**
     * private
     * dropzoneContainer
     */
    this.dropzoneContainer = null;
    /**
     * private
     * fileUploadPromises
     */
    this.fileUploadPromises = {};
    /**
     * private
     * formDataCollection
     */
    this.formDataCollection = {};
    /**
     * private
     * isBatchUploadInProgress
     */
    this.isBatchUploadInProgress = false; /**
  
    * private
    * isInitialFilesChange Denotes if this is initial files change.
    */
    this.isInitialFilesChange = false;
  }
  /**
   * watcher filesChangeHandler
   * @param files files modified
   */
  filesChangeHandler(files) {
    if (!this.isInitialFilesChange) {
      this.fwChange.emit({
        name: this.name,
        files: files,
      });
    }
  }
  /**
   * componentWillLoad life cycle event
   */
  componentWillLoad() {
    this.handleInitialFilesChange(this.initialFiles);
  }
  handleInitialFilesChange(changedFiles) {
    this.isInitialFilesChange = true;
    this._reset(false, false);
    if (this.multiple) {
      changedFiles.forEach((initialFile) => this.setLocalFile(initialFile));
    }
    else {
      if (changedFiles.length) {
        this.setLocalFile(changedFiles[0]);
      }
    }
    this.isInitialFilesChange = false;
  }
  setLocalFile(initialFile) {
    this.addFileToFiles(initialFile.file, initialFile.progress, initialFile.lastServerResponse, initialFile.error);
    this.addFileToFormDataCollection(initialFile.file);
  }
  /**
   * private
   * isBatchAllow - will determine if this is a batch upload
   * @returns {boolean} isBatchAllow
   */
  isBatchAllow() {
    return this.isBatchUpload || !this.actionURL ? true : false;
  }
  /**
   * private
   * get all locally available files in the component
   * @returns FileList of all locally available files in the component
   */
  _getFiles() {
    return this.files;
  }
  /**
   * get all locally available files in the component
   * @returns FileList of all locally available files in the component
   */
  async getFiles() {
    return this._getFiles();
  }
  _getFilesList() {
    const data = new DataTransfer();
    this.files.forEach((file) => {
      const formDataFile = this.formDataCollection[file.id].get('file');
      data.items.add(formDataFile);
    });
    return data.files;
  }
  async getFilesList() {
    return this._getFilesList();
  }
  async setFocus() {
    this.dropzoneContainer.focus();
  }
  /**
   * private
   * reset file uploader
   */
  _reset(resetInput = true, resetErrors = true) {
    this.files = [];
    this.formDataCollection = {};
    this.fileUploadPromises = {};
    if (resetInput && this.fileInputElement) {
      this.fileInputElement.value = '';
    }
    if (resetErrors) {
      this.errorText = '';
    }
  }
  /**
   * reset file uploader
   */
  async reset() {
    this._reset();
  }
  /**
   * private
   * filesValidation validate collection of files
   * @param files files to be validated
   * @returns filesValidation
   */
  filesValidation(files) {
    let passed = true;
    const totalFiles = [...this.files, ...Array.from(files)];
    const totalSize = totalFiles.reduce((acc, obj) => acc + obj.size, 0);
    this.errorText = '';
    if (totalFiles.length > this.filesLimit) {
      this.errorText = this.maxFilesLimitError;
      passed = false;
    }
    else if (this.totalFileSizeAllowed !== 0 &&
      totalSize > this.totalFileSizeAllowed * MB_TO_KB * KB_TO_BYTE) {
      this.errorText = this.totalFileSizeAllowedError;
      passed = false;
    }
    else {
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        passed = this.fileValidation(file);
        if (!passed) {
          break;
        }
      }
    }
    return passed;
  }
  /**
   * private
   * fileValidation validate a file for upload
   * @param file
   * @returns
   */
  fileValidation(file) {
    let isPassed = true;
    const fileExtension = file.name;
    const fileSize = file.size;
    const errors = [];
    if (this.accept) {
      isPassed = this.accept
        .split(',')
        .filter((fileType) => fileType !== '')
        .some((fileType) => fileExtension.includes(fileType.trim()));
      if (!isPassed) {
        errors.push(this.acceptError);
      }
    }
    if (this.maxFileSize !== 0) {
      if (fileSize > this.maxFileSize * MB_TO_KB * KB_TO_BYTE) {
        isPassed = false;
        errors.push(this.maxFileSizeError);
      }
    }
    this.errorText = errors.length ? errors[0] : '';
    return isPassed;
  }
  /**
   * private
   * addFileToFormDataCollection - add a file to formDataCollection state
   * @param file file to add in formDataCollection
   */
  addFileToFormDataCollection(file) {
    const formData = new FormData();
    formData.append('file', file);
    this.formDataCollection[fileCount] = formData;
  }
  /**
   * private
   * removeFileFromFormDataCollection - remove a file from the formDataCollection state
   * @param fileId id of the file
   */
  removeFileFromFormDataCollection(fileId) {
    delete this.formDataCollection[fileId];
  }
  /**
   * private
   * findFileIndex - find the index of file in files state
   * @param fileId if of the file
   * @returns fileIndex
   */
  findFileIndex(fileId) {
    return this.files.findIndex((file) => file.id === parseInt(fileId));
  }
  /**
   * private
   * addFileToFiles - Add the file to the files state
   * @param file file to add to the files state
   * @param progress current upload progress state of the file
   * @param lastServerResponse last response from the server
   * @param error error message from the upload
   * @returns
   */
  addFileToFiles(file, progress, lastServerResponse, error) {
    const uploaderFile = new UploaderFile(++fileCount, file, progress, lastServerResponse, error);
    this.files = [...this.files, uploaderFile];
    return uploaderFile;
  }
  /**
   * private
   * removeFileFromFiles - remove file from the files state
   * @param fileId id of the file
   */
  removeFileFromFiles(fileId) {
    const fileIndex = this.findFileIndex(fileId);
    const removedFile = this.files[fileIndex];
    if (fileIndex >= 0) {
      const beforeFiles = this.files.slice(0, fileIndex);
      const afterFiles = this.files.slice(fileIndex + 1, this.files.length + 1);
      this.files = [...beforeFiles, ...afterFiles];
    }
    return removedFile;
  }
  /**
   * private
   * updateFileInFiles - update the file object in the files state
   */
  updateFileInFiles(fileId, updateObject, updateAction) {
    const fileIndex = this.findFileIndex(fileId);
    if (fileIndex >= 0) {
      this.files = [
        ...this.files.slice(0, fileIndex),
        Object.assign(this.files[fileIndex], updateObject),
        ...this.files.slice(fileIndex + 1, this.files.length),
      ];
    }
    this.fwFileChange.emit({
      name: this.name,
      file: this.files[fileId],
      action: updateAction ? updateAction : 'unknown',
      files: this._getFiles(),
      fileList: this._getFilesList(),
    });
  }
  /**
   * private
   * uploadFileLocally - upload the files locally to files and formDataCollection
   * @param file file to upload locally
   * @returns localFile local file state
   */
  uploadFileLocally(file) {
    const localFile = this.addFileToFiles(file);
    this.addFileToFormDataCollection(file);
    this.fwFileChange.emit({
      name: this.name,
      file: localFile,
      action: 'local-upload',
      files: this._getFiles(),
      fileList: this._getFilesList(),
    });
    return localFile;
  }
  /**
   * private
   * removeFileLocally - remove the file from the local states files and formDataCollection
   * @param fileId id of the file
   */
  removeFileLocally(fileId) {
    const removedFile = this.removeFileFromFiles(fileId);
    this.removeFileFromFormDataCollection(fileId);
    if (this.files.length === 0) {
      this._reset();
    }
    return removedFile;
  }
  /**
   * removeFileByUser remove file action is taken by the user
   * @param fileId file ID to remove from files collection
   */
  removeFileLocallyByUser(fileId) {
    const removedFile = this.removeFileLocally(fileId);
    this.fwFileChange.emit({
      name: this.name,
      file: removedFile,
      action: 'local-remove',
      files: this._getFiles(),
      fileList: this._getFilesList(),
    });
  }
  /**
   * private
   * uploadFile - upload file to the remote server.
   * @param fileId id of the file
   * @returns fileUploadPromise promise from the file upload that will return server response
   */
  uploadFile(fileId) {
    const formData = this.formDataCollection[fileId];
    this.updateFileInFiles(fileId, { progress: 1 }, 'remote-upload-progress');
    // adding extra information to formData before uploading
    for (const key in this.actionParams) {
      if (Object.prototype.hasOwnProperty.call(this.actionParams, key)) {
        formData.append(key, this.actionParams[key]);
      }
    }
    // creating and sending xhr requests
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (event) => this.updateFileInFiles(fileId, {
      progress: (event.loaded / event.total) * 100,
    }, 'remote-upload-progress'), false);
    const fileUploadPromise = new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          const serverResponse = {
            uploadStatus: xhr.status,
            response: xhr.response,
          };
          if (xhr.status === 200) {
            this.updateFileInFiles(fileId, { lastServerResponse: serverResponse }, 'remote-upload');
            resolve(Object.assign(Object.assign({}, serverResponse), { fileId: fileId }));
          }
          else {
            this.updateFileInFiles(fileId, {
              error: this.fileUploadError ||
                TranslationController.t('fileUploader2.fileUploadError'),
              progress: -1,
              lastServerResponse: serverResponse,
            }, 'remote-upload');
            reject(Object.assign(Object.assign({}, serverResponse), { fileId: fileId }));
          }
        }
      };
    });
    xhr.open('POST', this.actionURL);
    const modifiedRequest = this.modifyRequest(xhr);
    modifiedRequest.send(formData);
    return fileUploadPromise;
  }
  /**
   * uploadFile
   * @param fileId
   * @returns fileUploadPromise
   */
  async uploadFiles() {
    if (this.files.length &&
      this.isBatchAllow() &&
      !this.isBatchUploadInProgress) {
      this.isBatchUploadInProgress = true;
      for (const fileId in this.formDataCollection) {
        if (Object.prototype.hasOwnProperty.call(this.formDataCollection, fileId)) {
          const uploadPromise = this.uploadFile(fileId);
          this.fileUploadPromises[fileId] = uploadPromise;
        }
      }
      Promise.allSettled(Object.values(this.fileUploadPromises)).then((responses) => {
        let hasErrorFiles = false;
        this.fileUploadPromises = {};
        const responseValues = responses.map((response) => {
          var _a, _b;
          if (((_a = response.value) === null || _a === void 0 ? void 0 : _a.uploadStatus) === 200) {
            this.removeFileLocally((_b = response.value) === null || _b === void 0 ? void 0 : _b.fileId);
          }
          else {
            hasErrorFiles = true;
          }
          return response.value;
        });
        const responseValue = this.multiple
          ? responseValues
          : responseValues[0];
        this.fwFilesUploaded.emit(responseValue);
        if (!hasErrorFiles) {
          this.isBatchUploadInProgress = false;
        }
      });
    }
    else {
      console.log('uploadFiles is for batch upload');
    }
  }
  /**
   * retryFileUpload
   * @param fileId file ID to retry uploading to server
   */
  retryFileUpload(fileId) {
    this.updateFileInFiles(fileId, { error: '' }, 'remote-retry');
    const uploadPromise = this.uploadFile(fileId);
    uploadPromise.then((serverResponse) => {
      if (this.isBatchAllow()) {
        this.removeFileLocally(fileId);
        if (Object.keys(this.formDataCollection).length === 0) {
          this.isBatchUploadInProgress = false;
        }
      }
      this.fwFileReuploaded.emit(serverResponse);
    });
  }
  /**
   * private
   * fileHandler - handler for both drop and input change
   * @param event
   */
  fileHandler(event) {
    if (!this.multiple && this.files.length === 1) {
      this._reset(false);
    }
    const tempFiles = event.target.files || event.dataTransfer.files;
    let files = [];
    if (tempFiles.length) {
      files = this.multiple ? tempFiles : [tempFiles[0]];
    }
    if (files.length) {
      const passed = this.filesValidation(files);
      if (passed) {
        for (let index = 0; index < files.length; index++) {
          const file = files[index];
          const localFile = this.uploadFileLocally(file);
          if (!this.isBatchAllow()) {
            this.uploadFile(localFile.id).then((serverResponse) => {
              this.fwFileUploaded.emit(serverResponse);
            });
          }
        }
      }
    }
  }
  showSimpleInterface() {
    return (!this.multiple &&
      this.simpleInterfaceForSingleMode &&
      this.files.length === 1);
  }
  /**
   * private
   * drag and drop handler
   * @param event
   */
  dropHandler(event) {
    event.preventDefault();
    this.fileHandler(event);
  }
  /**
   * renderDropzone
   * @returns {JSX.Element}
   */
  renderDropzone() {
    return (h("div", { class: {
        'file-uploader__body__dropzone': true,
        'file-uploader__body__dropzone--disabled': this.isBatchUploadInProgress,
        'file-uploader__body__dropzone--error': !!this.errorText.length,
      }, key: 'dropzone', part: 'fw-file-uploader-dropzone', tabIndex: 0, onDrop: (event) => !this.isBatchUploadInProgress && this.dropHandler(event), onDragOver: (event) => event.preventDefault(), onClick: () => !this.isBatchUploadInProgress && this.fileInputElement.click(), onKeyUp: (event) => {
        if (event.key === 'Enter' || event.key === 'Space') {
          !this.isBatchUploadInProgress && this.fileInputElement.click();
        }
      }, ref: (el) => (this.dropzoneContainer = el), role: 'button' },
      h("div", { class: 'file-uploader__body__dropzone__center' },
        h("div", { class: 'file-uploader__body__dropzone__center__clickable', part: 'fw-file-uploader-clickable' },
          h("div", { class: 'file-uploader__body__dropzone__center__clickable__icon' }, !this.errorText.length ? (h("div", { innerHTML: new DOMParser().parseFromString(fileDragSVG, 'text/html')
              .body.innerHTML })) : (h("div", { innerHTML: new DOMParser().parseFromString(fileErrorSVG, 'text/html')
              .body.innerHTML }))),
          !this.errorText.length ? (h("div", { class: 'file-uploader__body__dropzone__center__clickable__text', part: 'fw-file-uploader-text', innerHTML: this.text || TranslationController.t('fileUploader2.text') })) : (h("div", { class: 'file-uploader__body__dropzone__center__clickable__error', part: 'fw-file-uploader-error' },
            this.errorText,
            ".",
            ' ',
            h("span", { class: 'highlight' }, TranslationController.t('fileUploader2.retry')))),
          this.description && (h("div", { class: 'file-uploader__body__dropzone__center__clickable__description', part: 'fw-file-uploader-desc' },
            h("span", null, this.description)))))));
  }
  /**
   * renderFiles
   * @returns {JSX.Element}
   */
  renderFiles() {
    return this.files.length ? (h("div", { class: 'file-uploader__body__files', key: 'files' },
      h("div", { class: {
          'file-uploader__body__files__restrict': this.restrictAttachmentBlock,
        } },
        h("div", { class: 'file-uploader__body__files__center', part: 'fw-file-uploader-attachments-block' }, this.files.map((file) => {
          return (h("fw-file-2", { index: file.id, label: file.name, size: file.size, state: file.state, type: file.type, errorMessage: file.error, onFwDelete: (event) => {
              event.stopPropagation();
              this.removeFileLocallyByUser(event.detail.index);
            }, onFwReupload: (event) => {
              event.stopPropagation();
              this.retryFileUpload(event.detail.index);
            } }));
        }))))) : null;
  }
  /**
   * render
   * @returns {JSX.Element}
   */
  render() {
    const multipleFiles = this.multiple ? { multiple: true } : {};
    renderHiddenField(this.host, this.name, null, this._getFilesList());
    return (h("div", { class: 'file-uploader' },
      (this.hintText.trim() !== '' || !this.hideLabel || this.required) && (h("div", { class: 'file-uploader__header' },
        h("div", { class: 'file-uploader__header__block' },
          (!this.hideLabel || this.required) && (h("div", { class: {
              'file-uploader__header__block__title': true,
              'file-uploader__header__block__title--uniform': this.isFormLabel,
              'required': this.required,
            } }, TranslationController.t('fileUploader2.attachFiles'))),
          h("div", { class: 'file-uploader__header__block__option' }, this.showSimpleInterface() && (
          /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
          h("a", { role: 'button', tabIndex: 0, onClick: () => this.fileInputElement.click(), onKeyDown: (ev) => ev.key === 'Enter' && this.fileInputElement.click() }, TranslationController.t('fileUploader2.uploadDifferentFile'))))),
        this.hintText.trim() !== '' ? (h("fw-inline-message", { open: true, type: 'info' }, this.hintText)) : null)),
      h("div", { class: {
          'file-uploader__body': true,
          'file-uploader__body--uniform': this.isFormLabel,
          'file-uploader__body--error': !!this.errorText.length,
          'file-uploader__body--hide': this.showSimpleInterface(),
        }, onDragOver: (ev) => {
          ev.currentTarget.classList.add('file-uploader__body--on-drag');
        }, onDragLeave: (ev) => {
          ev.currentTarget.classList.remove('file-uploader__body--on-drag');
        }, onDrop: (ev) => {
          ev.currentTarget.classList.remove('file-uploader__body--on-drag');
        } },
        h("input", Object.assign({ type: 'file', name: this.name, hidden: true }, multipleFiles, { onChange: (ev) => {
            this.fileHandler(ev);
          }, accept: this.accept, ref: (el) => (this.fileInputElement = el) })),
        this.renderDropzone()),
      this.renderFiles()));
  }
  static get is() { return "fw-file-uploader-2"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["file-uploader-2.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["file-uploader-2.css"]
  }; }
  static get properties() { return {
    "name": {
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
        "text": "name - field name"
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    },
    "text": {
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
        "text": "text - file uploader text."
      },
      "attribute": "text",
      "reflect": false
    },
    "description": {
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
        "text": "description - file uploader description."
      },
      "attribute": "description",
      "reflect": false
    },
    "hintText": {
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
        "text": "Inline information text, hint text."
      },
      "attribute": "hint-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "accept": {
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
        "text": "accept - comma separated string. tells us what file formats file uploader should accept."
      },
      "attribute": "accept",
      "reflect": false,
      "defaultValue": "''"
    },
    "maxFileSize": {
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
        "text": "maxFileSize - maximum file size the file uploader must accept."
      },
      "attribute": "max-file-size",
      "reflect": false,
      "defaultValue": "0"
    },
    "acceptError": {
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
        "text": "acceptError - Error message to display when format is invalid."
      },
      "attribute": "accept-error",
      "reflect": false,
      "defaultValue": "TranslationController.t('fileUploader2.acceptError')"
    },
    "maxFileSizeError": {
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
        "text": "maxFileSizeError - Error message to display when file size exceeds limit"
      },
      "attribute": "max-file-size-error",
      "reflect": false,
      "defaultValue": "TranslationController.t('fileUploader2.maxFileSizeError')"
    },
    "totalFileSizeAllowedError": {
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
        "text": "totalFileSizeAllowedError - Total file size (combination of all files) allowed for upload."
      },
      "attribute": "total-file-size-allowed-error",
      "reflect": false,
      "defaultValue": "TranslationController.t(\n    'fileUploader2.totalFileSizeAllowedError'\n  )"
    },
    "maxFilesLimitError": {
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
        "text": "maxFilesLimitError - Error message when going beyond files limit."
      },
      "attribute": "max-files-limit-error",
      "reflect": false,
      "defaultValue": "TranslationController.t(\n    'fileUploader2.maxFilesLimitError'\n  )"
    },
    "fileUploadError": {
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
        "text": "fileUploadError - Error message when a file upload fails."
      },
      "attribute": "file-upload-error",
      "reflect": false
    },
    "actionURL": {
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
        "text": "actionURL - URL to make server call."
      },
      "attribute": "action-u-r-l",
      "reflect": false,
      "defaultValue": "''"
    },
    "actionParams": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ [prop: string]: any }",
        "resolved": "{ [prop: string]: any; }",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "actionParams - additional information to send to server other than the file."
      },
      "defaultValue": "{}"
    },
    "multiple": {
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
        "text": "multiple - upload multiple files."
      },
      "attribute": "multiple",
      "reflect": false,
      "defaultValue": "false"
    },
    "filesLimit": {
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
        "text": "Max files allowed to upload."
      },
      "attribute": "files-limit",
      "reflect": false,
      "defaultValue": "10"
    },
    "totalFileSizeAllowed": {
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
        "text": "Max total size allowed for upload"
      },
      "attribute": "total-file-size-allowed",
      "reflect": false,
      "defaultValue": "0"
    },
    "isBatchUpload": {
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
        "text": "Upload all files in one single shot"
      },
      "attribute": "is-batch-upload",
      "reflect": false,
      "defaultValue": "false"
    },
    "modifyRequest": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(xhr: XMLHttpRequest) => XMLHttpRequest",
        "resolved": "(xhr: XMLHttpRequest) => XMLHttpRequest",
        "references": {
          "XMLHttpRequest": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "param",
            "text": "xhr"
          }, {
            "name": "returns",
            "text": "xhr"
          }],
        "text": "modify request"
      },
      "defaultValue": "(xhr) => xhr"
    },
    "initialFiles": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "InitialUploaderFile[]",
        "resolved": "InitialUploaderFile[]",
        "references": {
          "InitialUploaderFile": {
            "location": "import",
            "path": "./file-uploader2-util"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "to load default values in file uploader component."
      },
      "defaultValue": "[]"
    },
    "restrictAttachmentBlock": {
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
        "text": "restrict the width of the attachment in the file uploader"
      },
      "attribute": "restrict-attachment-block",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideLabel": {
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
        "text": "Use this prop to show the label on the component."
      },
      "attribute": "hide-label",
      "reflect": false,
      "defaultValue": "true"
    },
    "simpleInterfaceForSingleMode": {
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
        "text": "Use a simple interface for the single file mode."
      },
      "attribute": "simple-interface-for-single-mode",
      "reflect": false,
      "defaultValue": "false"
    },
    "required": {
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
        "text": "field acts as a mandatory field and displays an asterisk next to the label. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "isFormLabel": {
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
        "text": "To maintain the same label styling as other form elements."
      },
      "attribute": "is-form-label",
      "reflect": false,
      "defaultValue": "false"
    },
    "errorText": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "errorText - errorText collection.\nMutable as this can be set from form control too based on form validations."
      },
      "attribute": "error-text",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "files": {}
  }; }
  static get events() { return [{
      "method": "fwChange",
      "name": "fwChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered whenever files change."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwFileChange",
      "name": "fwFileChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered for a particular file change."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwFilesUploaded",
      "name": "fwFilesUploaded",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered after batch upload, when all files are uploaded."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwFileUploaded",
      "name": "fwFileUploaded",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered after file upload if not a batch upload."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwFileReuploaded",
      "name": "fwFileReuploaded",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered during a file reupload."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "getFiles": {
      "complexType": {
        "signature": "() => Promise<UploaderFile[]>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "UploaderFile": {
            "location": "import",
            "path": "./file-uploader2-util"
          }
        },
        "return": "Promise<UploaderFile[]>"
      },
      "docs": {
        "text": "get all locally available files in the component",
        "tags": [{
            "name": "returns",
            "text": "FileList of all locally available files in the component"
          }]
      }
    },
    "getFilesList": {
      "complexType": {
        "signature": "() => Promise<FileList>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "FileList": {
            "location": "global"
          }
        },
        "return": "Promise<FileList>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "reset": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "reset file uploader",
        "tags": []
      }
    },
    "uploadFiles": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "uploadFile",
        "tags": [{
            "name": "param",
            "text": "fileId"
          }, {
            "name": "returns",
            "text": "fileUploadPromise"
          }]
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "files",
      "methodName": "filesChangeHandler"
    }, {
      "propName": "initialFiles",
      "methodName": "handleInitialFilesChange"
    }]; }
}
