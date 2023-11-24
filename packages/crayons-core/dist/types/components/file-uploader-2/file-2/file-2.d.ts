import { EventEmitter } from '../../../stencil-public-runtime';
export declare class File2 {
  host: HTMLElement;
  private spanExtension;
  private spanName;
  private spanSize;
  private resizeObserver;
  /**
   * Name of the attachment file to be displayed (including the file extension)
   */
  label: string;
  /**
   * File type
   */
  type: string | null;
  /**
   * Size of the attachment in bytes
   */
  size: number;
  /**
   * Boolean used to display size as passed or convert them to relatives like KB, MB etc...
   */
  parseSize: boolean;
  /**
   * Set private mode for different styles
   */
  isPrivateMode: boolean;
  /**
   * Error message text to display below the attachment
   */
  errorMessage: string;
  /**
   * Boolean value to set if the attachment is added in library or not
   */
  addedToLibrary: boolean;
  /**
   * State of the attachment for styling
   */
  state: 'normal' | 'loading' | 'error' | 'failed';
  /**
   * Index order of the attachment file starting from 0
   */
  index: number;
  /**
   * Value or id related to the attached file
   */
  value: any;
  /**
   * To enable library adding related feature
   */
  enableLibraryAdding: boolean;
  /**
   * Event triggered to delete the attachment file
   */
  fwDelete: EventEmitter;
  /**
   * Event triggered to add / remove file from the library
   */
  fwModifyLibrary: EventEmitter;
  /**
   * Event triggered to reupload
   */
  fwReupload: EventEmitter;
  componentDidRender(): void;
  disconnectedCallback(): void;
  private modifyLibraryHandler;
  private deleteHandler;
  private reUploadHandler;
  private getFileSize;
  private getFilenameAndExtension;
  render(): any;
}
