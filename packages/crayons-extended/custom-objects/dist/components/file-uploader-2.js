import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { T as TranslationController } from './Translation2.js';
import { r as renderHiddenField } from './index2.js';
import { f as fileDragSVG, a as fileErrorSVG, d as defineCustomElement$6 } from './file-2.js';
import { M as MB_TO_KB, K as KB_TO_BYTE } from './index3.js';
import { d as defineCustomElement$5 } from './icon.js';
import { d as defineCustomElement$4 } from './inline-message.js';
import { d as defineCustomElement$3 } from './popover.js';
import { d as defineCustomElement$2 } from './spinner.js';
import { d as defineCustomElement$1 } from './tooltip.js';

class UploaderFile {
  constructor(id, file, progress, lastServerResponse, error) {
    this.id = id;
    this.name = file.name;
    this.progress = progress || 0;
    this.size = file.size;
    this.type = file.type;
    this.file = file;
    this.error = error || '';
    this.lastServerResponse = lastServerResponse || null;
  }
  get state() {
    let state = 'normal';
    if (this.progress === 0 || this.progress === 100) {
      state = 'normal';
    }
    else if (this.progress < 0) {
      state = 'error';
    }
    else {
      state = 'loading';
    }
    return state;
  }
}

const fileUploader2Css = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;--max-attachment-block-width:320px;--max-attachment-block-height:auto}.file-uploader{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px;min-width:360px}.file-uploader__header{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px}.file-uploader__header__block{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;line-height:24px}.file-uploader__header__block__title{font-weight:600;font-size:16px;letter-spacing:-0.32px;color:#12344d;-ms-flex-positive:0;flex-grow:0}.file-uploader__header__block__title--uniform{font-size:12px;color:#475867}.file-uploader__header__block__title.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.file-uploader__header__block__option{-ms-flex-positive:0;flex-grow:0}.file-uploader__header__block__option a{text-decoration:none;color:#2c5cc5;font-size:12px;letter-spacing:0.07px}.file-uploader__header__block__option a:hover,.file-uploader__header__block__option a:focus{cursor:pointer}.file-uploader__body{display:-ms-flexbox;display:flex;width:100%;min-width:320px;min-height:153px;background:#fff;-ms-flex-pack:center;justify-content:center;border-radius:8px}.file-uploader__body--uniform{-webkit-margin-before:-12px;margin-block-start:-12px}.file-uploader__body--hide{display:none}.file-uploader__body__dropzone,.file-uploader__body__files{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;-ms-flex-pack:center;justify-content:center}.file-uploader__body__dropzone{-ms-flex-align:center;align-items:center;cursor:pointer;border:1px dashed var(--fw-file-uploader-border, #b1bdc8);border-radius:8px}.file-uploader__body__dropzone--disabled{opacity:0.8}.file-uploader__body__dropzone--error{border:1px dashed var(--fw-file-uploader-error-border, #d72d30);}.file-uploader__body__dropzone--error:hover,.file-uploader__body__dropzone--error:focus{border:1px solid var(--fw-file-uploader-error-border, #d72d30)}.file-uploader__body__dropzone--error:focus-visible{outline:0}.file-uploader__body__dropzone:hover,.file-uploader__body__dropzone:focus{position:cursor}.file-uploader__body__dropzone__center{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;-ms-flex-pack:justify;justify-content:space-between}.file-uploader__body__dropzone__center__clickable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-inline:0;margin-block:auto;-webkit-padding-before:28px;padding-block-start:28px;-webkit-padding-after:32px;padding-block-end:32px}.file-uploader__body__dropzone__center__clickable__icon{-webkit-margin-after:7px;margin-block-end:7px}.file-uploader__body__dropzone__center__clickable__text,.file-uploader__body__dropzone__center__clickable__error{line-height:20px;font-size:14px;font-weight:500;color:#12344d;-webkit-margin-before:9px;margin-block-start:9px;-webkit-margin-after:3px;margin-block-end:3px}.file-uploader__body__dropzone__center__clickable__text .highlight,.file-uploader__body__dropzone__center__clickable__error .highlight{color:#2c5cc5}.file-uploader__body__dropzone__center__clickable__text .highlight:hover,.file-uploader__body__dropzone__center__clickable__text .highlight:focus,.file-uploader__body__dropzone__center__clickable__error .highlight:hover,.file-uploader__body__dropzone__center__clickable__error .highlight:focus{cursor:pointer}.file-uploader__body__dropzone__center__clickable__error{color:#c82124}.file-uploader__body__dropzone__center__clickable__description{line-height:20px;font-size:12px;color:#92a2b1}.file-uploader__body__files{-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center}.file-uploader__body__files__center{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:12px}.file-uploader__body__files__restrict{max-width:var(--max-attachment-block-width);max-height:var(--max-attachment-block-height);overflow-y:auto}.file-uploader__body--on-drag{border:1px dashed var(--fw-file-uploader-border, #2c5cc5);background:#e5f2fd}";

let fileCount = 0;
const FileUploader = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwChange = createEvent(this, "fwChange", 7);
    this.fwFileChange = createEvent(this, "fwFileChange", 7);
    this.fwFilesUploaded = createEvent(this, "fwFilesUploaded", 7);
    this.fwFileUploaded = createEvent(this, "fwFileUploaded", 7);
    this.fwFileReuploaded = createEvent(this, "fwFileReuploaded", 7);
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
      }, ref: (el) => (this.dropzoneContainer = el), role: 'button' }, h("div", { class: 'file-uploader__body__dropzone__center' }, h("div", { class: 'file-uploader__body__dropzone__center__clickable', part: 'fw-file-uploader-clickable' }, h("div", { class: 'file-uploader__body__dropzone__center__clickable__icon' }, !this.errorText.length ? (h("div", { innerHTML: new DOMParser().parseFromString(fileDragSVG, 'text/html')
        .body.innerHTML })) : (h("div", { innerHTML: new DOMParser().parseFromString(fileErrorSVG, 'text/html')
        .body.innerHTML }))), !this.errorText.length ? (h("div", { class: 'file-uploader__body__dropzone__center__clickable__text', part: 'fw-file-uploader-text', innerHTML: this.text || TranslationController.t('fileUploader2.text') })) : (h("div", { class: 'file-uploader__body__dropzone__center__clickable__error', part: 'fw-file-uploader-error' }, this.errorText, ".", ' ', h("span", { class: 'highlight' }, TranslationController.t('fileUploader2.retry')))), this.description && (h("div", { class: 'file-uploader__body__dropzone__center__clickable__description', part: 'fw-file-uploader-desc' }, h("span", null, this.description)))))));
  }
  /**
   * renderFiles
   * @returns {JSX.Element}
   */
  renderFiles() {
    return this.files.length ? (h("div", { class: 'file-uploader__body__files', key: 'files' }, h("div", { class: {
        'file-uploader__body__files__restrict': this.restrictAttachmentBlock,
      } }, h("div", { class: 'file-uploader__body__files__center', part: 'fw-file-uploader-attachments-block' }, this.files.map((file) => {
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
    return (h("div", { class: 'file-uploader' }, (this.hintText.trim() !== '' || !this.hideLabel || this.required) && (h("div", { class: 'file-uploader__header' }, h("div", { class: 'file-uploader__header__block' }, (!this.hideLabel || this.required) && (h("div", { class: {
        'file-uploader__header__block__title': true,
        'file-uploader__header__block__title--uniform': this.isFormLabel,
        'required': this.required,
      } }, TranslationController.t('fileUploader2.attachFiles'))), h("div", { class: 'file-uploader__header__block__option' }, this.showSimpleInterface() && (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    h("a", { role: 'button', tabIndex: 0, onClick: () => this.fileInputElement.click(), onKeyDown: (ev) => ev.key === 'Enter' && this.fileInputElement.click() }, TranslationController.t('fileUploader2.uploadDifferentFile'))))), this.hintText.trim() !== '' ? (h("fw-inline-message", { open: true, type: 'info' }, this.hintText)) : null)), h("div", { class: {
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
      } }, h("input", Object.assign({ type: 'file', name: this.name, hidden: true }, multipleFiles, { onChange: (ev) => {
        this.fileHandler(ev);
      }, accept: this.accept, ref: (el) => (this.fileInputElement = el) })), this.renderDropzone()), this.renderFiles()));
  }
  get host() { return this; }
  static get watchers() { return {
    "files": ["filesChangeHandler"],
    "initialFiles": ["handleInitialFilesChange"]
  }; }
  static get style() { return fileUploader2Css; }
}, [1, "fw-file-uploader-2", {
    "name": [1],
    "text": [8],
    "description": [8],
    "hintText": [1, "hint-text"],
    "accept": [1],
    "maxFileSize": [2, "max-file-size"],
    "acceptError": [8, "accept-error"],
    "maxFileSizeError": [8, "max-file-size-error"],
    "totalFileSizeAllowedError": [8, "total-file-size-allowed-error"],
    "maxFilesLimitError": [8, "max-files-limit-error"],
    "fileUploadError": [8, "file-upload-error"],
    "actionURL": [1, "action-u-r-l"],
    "actionParams": [16],
    "multiple": [4],
    "filesLimit": [2, "files-limit"],
    "totalFileSizeAllowed": [2, "total-file-size-allowed"],
    "isBatchUpload": [4, "is-batch-upload"],
    "modifyRequest": [16],
    "initialFiles": [16],
    "restrictAttachmentBlock": [4, "restrict-attachment-block"],
    "hideLabel": [4, "hide-label"],
    "simpleInterfaceForSingleMode": [4, "simple-interface-for-single-mode"],
    "required": [4],
    "isFormLabel": [4, "is-form-label"],
    "errorText": [1025, "error-text"],
    "files": [32],
    "getFiles": [64],
    "getFilesList": [64],
    "setFocus": [64],
    "reset": [64],
    "uploadFiles": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-file-uploader-2", "fw-file-2", "fw-icon", "fw-inline-message", "fw-popover", "fw-spinner", "fw-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-file-uploader-2":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FileUploader);
      }
      break;
    case "fw-file-2":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "fw-inline-message":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "fw-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-tooltip":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { FileUploader as F, defineCustomElement as d };
