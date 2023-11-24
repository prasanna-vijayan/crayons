import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FbFieldDropdown {
  host: HTMLElement;
  private i18RelationshipType;
  private targetObjectLabel;
  private isNativeTargetObject;
  /**
   * The db type used to determine the json to be used for CUSTOM_OBJECTS or CONVERSATION_PROPERTIES
   */
  productName: string;
  /**
   * variable to store form values
   */
  formValues: any;
  /**
   * source object value
   */
  sourceObjectName: string;
  /**
   * array for target objects
   */
  targetObjects: any;
  /**
   * variable to store the data  for all the choices
   */
  dataResponse: any;
  /**
   * property to show the errors on click of the save/add button from the parent
   */
  showErrors: boolean;
  /**
   * Disables all the options which can't be edited, reordered or deleted if set to true.
   */
  disabled: boolean;
  /**
   * variable to store the selected relationship type
   */
  selectedRelationshipValue: string;
  /**
   * variable to store the selected target object
   */
  selectedTargetValue: string;
  /**
   * Triggered on data change for error handling on parent
   */
  fwChange: EventEmitter;
  watchValuesChangeHandler(): void;
  componentWillLoad(): void;
  private isNewField;
  private updateIsNativeObject;
  private relationshipChangeHandler;
  private targetObjectChangeHandler;
  render(): any;
}
