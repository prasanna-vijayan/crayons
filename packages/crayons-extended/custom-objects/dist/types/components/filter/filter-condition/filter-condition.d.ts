import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FilterCondition {
  conditionElement?: any;
  conditions: any;
  conditionOptions: any;
  /**
   * The selected condition
   */
  selectedCondition: any;
  /**
   * The value state
   */
  valueState: any;
  /**
   * The column key for the filter.
   */
  filterOn: any;
  /**
   * The condition schema
   */
  conditionSchema: {};
  /**
   * The column display name of the filter
   */
  filterText: {};
  /**
   * The selected condition
   */
  condition: any;
  /**
   * The value for the condition
   */
  value: any;
  /**
   * The props to be passed to the crayons component
   */
  controlProps: {};
  /**
   * An unique identifier for the element.
   */
  identifier: any;
  /**
   * Event Triggered on deleting an filter condition
   */
  fwDelete: EventEmitter;
  onSelection(e: any): void;
  onInputChange(e: any): void;
  onConditionChange(newValue: any): void;
  onValueChange(newValue: any): void;
  isValid(): Promise<any>;
  setConditionOptions(conditions: any): void;
  renderContent(condition: any): any;
  componentWillLoad(): void;
  render(): any;
}
