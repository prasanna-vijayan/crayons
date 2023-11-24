import { EventEmitter } from '../../stencil-public-runtime';
export declare class NestedSelect {
  private selections;
  private selectedItems;
  /**
   * Options to display
   */
  options: any[];
  /**
   * Name of first level field
   */
  name: string;
  /**
   * label
   */
  label: string;
  /**
   * Initial value from first level choices
   */
  value: string;
  /**
   * OptionValuePath referred from field
   */
  optionValuePath: string;
  /**
   * OptionLabelPath referred from field
   */
  optionLabelPath: string;
  /**
   * Function to return initialValues
   */
  selectProps?: any;
  /**
   * Triggered when nested selection doesn't have choices
   */
  fwChange: EventEmitter;
  changed(event: any): void;
  private getSelectedId;
  render(): any;
}
