import { EventEmitter } from '../../stencil-public-runtime';
export declare class Textarea {
  host: HTMLElement;
  private nativeInput?;
  hasFocus: boolean;
  hasHintTextSlot: boolean;
  hasWarningTextSlot: boolean;
  hasErrorTextSlot: boolean;
  /**
   * Label displayed on the interface, for the component.
   */
  label: string;
  /**
   * Default value displayed in the input box.
   */
  value?: string | null;
  /**
   * Width of the input box, specified as number of columns.
   */
  cols?: number;
  /**
   * Height of the input box, specified as number of rows.
   */
  rows?: number;
  /**
   * Max number of rows the textarea can create when user writes content greater than regular rows.
   */
  maxRows?: number;
  /**
   * Debounce timer for setting rows dynamically based on user input and maxRows, default is 200ms.
   */
  maxRowsDebounceTimer?: number;
  /**
   * Maximum number of characters a user can enter in the input box.
   */
  maxlength?: number;
  /**
   * Minimum number of characters a user must enter in the input box for the value to be valid.
   */
  minlength?: number;
  /**
   * Name of the component, saved as part of form data.
   */
  name: string;
  /**
   * Text displayed in the input box before a user enters a value.
   */
  placeholder?: string | null;
  /**
   * Theme based on which the input box is styled.
   */
  state: 'normal' | 'warning' | 'error';
  /**
   * Type of text wrapping used by the input box. If the value is hard, the text in the textarea is wrapped (contains line breaks) when the form data is saved. If the value is soft, the text in the textarea is saved as a single line, when the form data is saved.
   */
  wrap: 'soft' | 'hard';
  /**
   * Specifies the way in which the text area can be resized
   */
  resize: 'none' | 'both' | 'horizontal' | 'vertical';
  /**
   * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to false.
   */
  readonly: boolean;
  /**
   * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
   */
  required: boolean;
  /**
   * Disables the text area on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
  /**
   * Hint text displayed below the text box.
   */
  hintText: string;
  /**
   * Warning text displayed below the text box.
   */
  warningText: string;
  /**
   * Error text displayed below the text box.
   */
  errorText: string;
  /**
   * Triggered when the input box comes into focus.
   */
  fwFocus: EventEmitter<void>;
  /**
   * Triggered when the input box loses focus.
   */
  fwBlur: EventEmitter;
  /**
   * Triggered when a value is entered in the input box.
   */
  fwInput: EventEmitter;
  private onInput;
  private onFocus;
  private onBlur;
  private getValue;
  private hasValue;
  /**
   * Sets focus on a specific `fw-textarea`. Use this method instead of the global `input.focus()`.
   */
  setFocus(): Promise<void>;
  rowsChangeHandler(): void;
  maxRowsChangeHandler(): void;
  componentWillLoad(): void;
  checkSlotContent(): void;
  getAriaDescribedBy(): string;
  componentDidLoad(): void;
  private addListeners;
  private removeListeners;
  debouncedResizeTextArea: (...args: any[]) => void;
  render(): any;
}
