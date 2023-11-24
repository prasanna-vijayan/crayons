/// <reference types="react" />
import { ToastOptions } from './toast-util';
export declare class Toast {
  private toastContainer;
  /**
   *  position of the toast notification in screen
   */
  position: 'top-center' | 'top-left' | 'top-right';
  /**
   * Time duration of the toast visibility
   */
  timeout: number;
  /**
   * Type of the toast - success,failure, warning, inprogress
   */
  type: 'success' | 'error' | 'warning' | 'inprogress';
  /**
   * The content to be displayed in toast
   */
  content: string;
  /**
   *  The Content of the action link
   */
  actionLinkText: string;
  /**
   *  won't close automatically
   */
  sticky: boolean;
  /**
   *  Pause the toast from hiding on mouse hover
   */
  pauseOnHover: boolean;
  /**
   * Prevent rendering the duplicate toasters at the same time
   */
  shouldPreventDuplicates: boolean;
  componentWillLoad(): void;
  trigger(opts: ToastOptions): Promise<void>;
  render(): JSX.Element;
}
