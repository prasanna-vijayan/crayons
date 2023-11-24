export declare class InputCondition {
  state: 'error' | 'normal' | 'warning';
  hintText: string;
  errorText: string;
  /**
   * The value of the input
   */
  value: string;
  /**
   * Whether the component have any error.
   */
  error: boolean;
  /**
   * Whether to show the error.
   */
  showError: boolean;
  /**
   * The props to be passed to the crayons component.
   */
  controlProps: {};
  onInputBlur(): void;
  onInputChange(e: any): void;
  isValid(): Promise<any>;
  setError(error: any, errorText?: any): Promise<any>;
  refresh(): Promise<any>;
  requiredValidation(): void;
  valueExists(value: any): boolean;
  componentWillLoad(): void;
  render(): any;
}
