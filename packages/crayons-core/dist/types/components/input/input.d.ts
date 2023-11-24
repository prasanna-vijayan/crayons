import { EventEmitter } from '../../stencil-public-runtime';
export declare class Input {
  host: HTMLElement;
  private nativeInput?;
  hasFocus: boolean;
  hasPrefix: boolean;
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
   * Type of value accepted as the input value. If a user enters a value other than the specified type, the input box is not populated.
   */
  type: 'text' | 'number' | 'email' | 'url';
  /**
   * Specifies whether the browser can display suggestions to autocomplete the text value.
   */
  autocomplete: 'on' | 'off';
  /**
   * Displays a right-justified clear icon in the text box. Clicking the icon clears the input text. If the attribute’s value is undefined, the value is set to false. For a read-only input box, the clear icon is not displayed unless a default value is specified for the input box.
   */
  clearInput: boolean;
  /**
   * Maximum number of characters a user can enter in the text box.
   */
  maxlength?: number;
  /**
   * Minimum number of characters a user must enter in the text box for the value to be valid.
   */
  minlength?: number;
  /**
   * Specifies a maximum value that can be entered for the number/decimal input.
   */
  max?: number;
  /**
   * Specifies a minimum value that can be entered for the number/decimal input.
   */
  min?: number;
  /**
   * The step attribute is used when the type is `number`. It specifies the interval between legal numbers in a number/decimal input element.
   * Works with the min and max attributes to limit the increments at which a value can be set.
   * Possible values are `any` or a positive floating point number.
   * Default value is `any`
   */
  step: string;
  /**
   * Name of the component, saved as part of form data.
   */
  name: string;
  /**
   * Text displayed in the text box before a user enters a value.
   */
  placeholder?: string | null;
  /**
   * Theme based on which the text box is styled.
   */
  state: 'normal' | 'warning' | 'error';
  /**
   * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to false.
   */
  readonly: boolean;
  /**
   * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
   */
  required: boolean;
  /**
   * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
  /**
   * Identifier of the icon that is displayed in the left side of the text box. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
   */
  iconLeft: string;
  /**
   * Identifier of the icon that is displayed in the right side of the text box. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
   */
  iconRight: string;
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
  /**
   * Triggered when clear icon is clicked.
   */
  fwInputClear: EventEmitter;
  /**
   * Triggered on key down in the input box.
   */
  fwInputKeyDown: EventEmitter;
  private onInput;
  private onFocus;
  private onBlur;
  private onKeyDown;
  private showClearButton;
  private clearTextInput;
  private getValue;
  private hasValue;
  /**
   * Sets focus on a specific `fw-input`. Use this method instead of the global `input.focus()`.
   */
  setFocus(): Promise<void>;
  renderClearButton(): any;
  renderIcon(iconName: any): any;
  componentWillLoad(): void;
  getAriaDescribedBy(): string;
  checkSlotContent(): void;
  render(): any;
}
