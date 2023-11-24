/// <reference types="react" />
/**
 * @parent form
 */
export declare class FormControl {
  el: any;
  type: 'TEXT' | 'NUMBER' | 'DECIMAL' | 'DROPDOWN' | 'MULTI_SELECT' | 'RADIO' | 'CHECKBOX' | 'DATE' | 'PARAGRAPH' | 'EMAIL' | 'URL' | 'TEL' | 'TIME' | 'DATE_TIME' | 'RELATIONSHIP' | 'AUTO_COMPLETE' | 'DEPENDENT_FIELD' | 'FILES';
  name: any;
  label: any;
  hidden: boolean;
  required: boolean;
  hint: string;
  placeholder: string;
  choices: any;
  /**
   * Additional props can be passed here for crayons components. Useful when rendering crayons components implicitly via form-control.
   */
  fieldProps?: any;
  /**
   * Contains values for crayons components. Useful when rendering crayons components implicitly via form-control.
   * Not required when using controls via slots.
   */
  controlProps?: any;
  touched: boolean;
  error: string;
  /**
   * Prop to determine whether to render the form-control or not.
   * Default to true.
   */
  shouldRender: boolean;
  /**
   * Value of the slotted custom field on fw-form-control
   */
  value: any;
  /**
   * Disable the field from being editable
   */
  disabled: boolean;
  private slotElement;
  private crayonsControlRef;
  hasSlot: boolean;
  renderControl(): JSX.Element;
  componentWillUpdate(): void;
  /**
   * Set Focus on the child
   */
  setFocus(): Promise<void>;
  private handleSlotChange;
  /**
   * Set Value on the slotted control field on fw-form-control.
   * Useful for setting initialValues on the slotted control field
   * Assumes that the slotted control field has a prop named `value`
   */
  private setSlotElementValue;
  render(): JSX.Element;
}
