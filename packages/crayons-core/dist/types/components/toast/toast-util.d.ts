export interface ToastOptions {
  /**
   * The Content of the action link
   */
  actionLinkText?: string;
  /**
   * The content to be displayed in toast
   */
  content?: string;
  /**
   * The document selector for the toast-message component
   * which can be used to embed custom html content in the toast message
   */
  contentref?: string;
  /**
   * Pause the toast from hiding on mouse hover
   */
  pauseOnHover?: boolean;
  /**
   * won't close automatically
   */
  sticky?: boolean;
  /**
   * Time duration of the toast visibility
   */
  timeout?: number;
  /**
   * Type of the toast - success,failure, warning, inprogress
   */
  type?: 'success' | 'error' | 'warning' | 'inprogress';
  /**
   *  position of the toast notification in screen
   */
  position?: 'top-center' | 'top-left' | 'top-right';
  /**
   * To prevent the duplicate toaster
   */
  shouldPreventDuplicates?: boolean;
}
export declare type ToastResult = {
  trigger: any;
};
export declare function createToastStack(config: ToastOptions): HTMLElement;
export declare function createToastNotification(opts: ToastOptions, containerElem: HTMLElement, defaultOpts: ToastOptions): void;
export declare function preventDuplicates(toasteContainerCollection: HTMLCollection, newToasterOption: ToastOptions): boolean;
