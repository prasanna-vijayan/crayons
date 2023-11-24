export declare class NestedNode {
  private selectRef;
  /**
   * State to maintain selectedOption
   */
  selectedOption: any;
  /**
   * Options to pass through and loop
   */
  options: any[];
  /**
   * level to keep track of selected options and
   * reset on parent option changes
   */
  level: number;
  /**
   * Name of the field value gets updated to
   */
  name: string;
  /**
   * Current selected value if passed from initialvalues
   */
  value: string;
  /**
   * label
   */
  label: string;
  /**
   * OptionValue path
   */
  optionValuePath: string;
  /**
   * optionLabelPath
   */
  optionLabelPath: string;
  /**
   * Fn to return initialValues from properties
   */
  selectProps?: any;
  optionsChanged(): void;
  changed(event: any): void;
  componentWillLoad(): void;
  private getFirstlevelNestedSelect;
  private getNestedSelect;
  render(): any;
}
