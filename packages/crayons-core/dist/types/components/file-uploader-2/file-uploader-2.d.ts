import { EventEmitter } from '../../stencil-public-runtime';
import { FileServerResponse, InitialUploaderFile, UploaderFile } from './file-uploader2-util';
export declare class FileUploader {
  host: HTMLElement;
  /**
   * name - field name
   */
  name: string;
  /**
   * text - file uploader text.
   */
  text: any;
  /**
   * description - file uploader description.
   */
  description: any;
  /**
   * Inline information text, hint text.
   */
  hintText: string;
  /**
   * accept - comma separated string. tells us what file formats file uploader should accept.
   */
  accept: string;
  /**
   * maxFileSize - maximum file size the file uploader must accept.
   */
  maxFileSize: number;
  /**
   * acceptError - Error message to display when format is invalid.
   */
  acceptError: any;
  /**
   * maxFileSizeError - Error message to display when file size exceeds limit
   */
  maxFileSizeError: any;
  /**
   * totalFileSizeAllowedError - Total file size (combination of all files) allowed for upload.
   */
  totalFileSizeAllowedError: any;
  /**
   * maxFilesLimitError - Error message when going beyond files limit.
   */
  maxFilesLimitError: any;
  /**
   * fileUploadError - Error message when a file upload fails.
   */
  fileUploadError: any;
  /**
   * actionURL - URL to make server call.
   */
  actionURL: string;
  /**
   * actionParams - additional information to send to server other than the file.
   */
  actionParams: {
    [prop: string]: any;
  };
  /**
   * multiple - upload multiple files.
   */
  multiple: boolean;
  /**
   * Max files allowed to upload.
   */
  filesLimit: number;
  /**
   * Max total size allowed for upload
   */
  totalFileSizeAllowed: number;
  /**
   * Upload all files in one single shot
   */
  isBatchUpload: boolean;
  /**
   * modify request
   * @param xhr
   * @returns xhr
   */
  modifyRequest: (xhr: XMLHttpRequest) => XMLHttpRequest;
  /**
   * to load default values in file uploader component.
   */
  initialFiles: InitialUploaderFile[];
  /**
   * restrict the width of the attachment in the file uploader
   */
  restrictAttachmentBlock: boolean;
  /**
   * Use this prop to show the label on the component.
   */
  hideLabel: boolean;
  /**
   * Use a simple interface for the single file mode.
   */
  simpleInterfaceForSingleMode: boolean;
  /**
   * field acts as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
   */
  required: boolean;
  /**
   * To maintain the same label styling as other form elements.
   */
  isFormLabel: boolean;
  /**
   * errorText - errorText collection.
   * Mutable as this can be set from form control too based on form validations.
   */
  errorText: string;
  /**
   * files - files collection.
   */
  files: UploaderFile[];
  /**
   * Triggered whenever files change.
   */
  fwChange: EventEmitter;
  /**
   * Triggered for a particular file change.
   */
  fwFileChange: EventEmitter;
  /**
   * Triggered after batch upload, when all files are uploaded.
   */
  fwFilesUploaded: EventEmitter;
  /**
   * Triggered after file upload if not a batch upload.
   */
  fwFileUploaded: EventEmitter;
  /**
   * Triggered during a file reupload.
   */
  fwFileReuploaded: EventEmitter;
  /**
   * private
   * fileInputElement
   */
  fileInputElement: HTMLInputElement;
  /**
   * private
   * dropzoneContainer
   */
  dropzoneContainer: HTMLElement;
  /**
   * private
   * fileUploadPromises
   */
  fileUploadPromises: {
    [prop: number]: Promise<any>;
  };
  /**
   * private
   * formDataCollection
   */
  formDataCollection: {
    [prop: number]: FormData;
  };
  /**
   * private
   * isBatchUploadInProgress
   */
  isBatchUploadInProgress: boolean; /**

  * private
  * isInitialFilesChange Denotes if this is initial files change.
  */
  isInitialFilesChange: boolean;
  /**
   * watcher filesChangeHandler
   * @param files files modified
   */
  filesChangeHandler(files: any): void;
  /**
   * componentWillLoad life cycle event
   */
  componentWillLoad(): void;
  handleInitialFilesChange(changedFiles: any): void;
  setLocalFile(initialFile: any): void;
  /**
   * private
   * isBatchAllow - will determine if this is a batch upload
   * @returns {boolean} isBatchAllow
   */
  isBatchAllow(): boolean;
  /**
   * private
   * get all locally available files in the component
   * @returns FileList of all locally available files in the component
   */
  _getFiles(): UploaderFile[];
  /**
   * get all locally available files in the component
   * @returns FileList of all locally available files in the component
   */
  getFiles(): Promise<UploaderFile[]>;
  _getFilesList(): FileList;
  getFilesList(): Promise<FileList>;
  setFocus(): Promise<void>;
  /**
   * private
   * reset file uploader
   */
  _reset(resetInput?: boolean, resetErrors?: boolean): void;
  /**
   * reset file uploader
   */
  reset(): Promise<void>;
  /**
   * private
   * filesValidation validate collection of files
   * @param files files to be validated
   * @returns filesValidation
   */
  filesValidation(files: any): boolean;
  /**
   * private
   * fileValidation validate a file for upload
   * @param file
   * @returns
   */
  fileValidation(file: any): boolean;
  /**
   * private
   * addFileToFormDataCollection - add a file to formDataCollection state
   * @param file file to add in formDataCollection
   */
  addFileToFormDataCollection(file: File): void;
  /**
   * private
   * removeFileFromFormDataCollection - remove a file from the formDataCollection state
   * @param fileId id of the file
   */
  removeFileFromFormDataCollection(fileId: number): void;
  /**
   * private
   * findFileIndex - find the index of file in files state
   * @param fileId if of the file
   * @returns fileIndex
   */
  findFileIndex(fileId: number | string): number;
  /**
   * private
   * addFileToFiles - Add the file to the files state
   * @param file file to add to the files state
   * @param progress current upload progress state of the file
   * @param lastServerResponse last response from the server
   * @param error error message from the upload
   * @returns
   */
  addFileToFiles(file: File, progress?: number, lastServerResponse?: FileServerResponse, error?: string): UploaderFile;
  /**
   * private
   * removeFileFromFiles - remove file from the files state
   * @param fileId id of the file
   */
  removeFileFromFiles(fileId: number): UploaderFile;
  /**
   * private
   * updateFileInFiles - update the file object in the files state
   */
  updateFileInFiles(fileId: number, updateObject: any, updateAction: any): void;
  /**
   * private
   * uploadFileLocally - upload the files locally to files and formDataCollection
   * @param file file to upload locally
   * @returns localFile local file state
   */
  uploadFileLocally(file: File): UploaderFile;
  /**
   * private
   * removeFileLocally - remove the file from the local states files and formDataCollection
   * @param fileId id of the file
   */
  removeFileLocally(fileId: number): UploaderFile;
  /**
   * removeFileByUser remove file action is taken by the user
   * @param fileId file ID to remove from files collection
   */
  removeFileLocallyByUser(fileId: number): void;
  /**
   * private
   * uploadFile - upload file to the remote server.
   * @param fileId id of the file
   * @returns fileUploadPromise promise from the file upload that will return server response
   */
  uploadFile(fileId: any): Promise<unknown>;
  /**
   * uploadFile
   * @param fileId
   * @returns fileUploadPromise
   */
  uploadFiles(): Promise<void>;
  /**
   * retryFileUpload
   * @param fileId file ID to retry uploading to server
   */
  retryFileUpload(fileId: any): void;
  /**
   * private
   * fileHandler - handler for both drop and input change
   * @param event
   */
  fileHandler(event: any): void;
  showSimpleInterface(): boolean;
  /**
   * private
   * drag and drop handler
   * @param event
   */
  dropHandler(event: any): void;
  /**
   * renderDropzone
   * @returns {JSX.Element}
   */
  renderDropzone(): any;
  /**
   * renderFiles
   * @returns {JSX.Element}
   */
  renderFiles(): any;
  /**
   * render
   * @returns {JSX.Element}
   */
  render(): any;
}
