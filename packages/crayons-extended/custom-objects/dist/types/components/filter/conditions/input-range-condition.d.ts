import { EventEmitter } from '../../../stencil-public-runtime';
export declare class InputRangeCondition {
  private fromElement;
  private toElement;
  fromValue: any;
  toValue: any;
  /**
   * The value of the input
   */
  value: any;
  /**
   * Whether the component have any error.
   */
  error: boolean;
  /**
   * The props to be passed to the crayons component.
   */
  controlProps: {};
  /**
   * Triggered when the value in the input box is modified.
   */
  fwInput: EventEmitter;
  onInputBlur(): void;
  onInputChange(e: any): void;
  isValid(): Promise<any>;
  requiredValidation(): void;
  minMaxValidation(): void;
  valueExists(value: any): boolean;
  componentWillLoad(): void;
  render(): any;
}
