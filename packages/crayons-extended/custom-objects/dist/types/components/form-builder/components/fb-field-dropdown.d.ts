import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FbFieldDropdown {
  private errorType;
  host: HTMLElement;
  boolExceededChoiceLimit: boolean;
  /**
   * The db type used to determine the json to be used for CUSTOM_OBJECTS or CONVERSATION_PROPERTIES
   */
  productName: string;
  /**
   * flag to notify if an api call is in progress
   */
  isLoading: boolean;
  /**
   * variable to store the data source for all the choices
   */
  dataProvider: any;
  /**
   * property to show the errors on click of the save/add button from the parent
   */
  showErrors: boolean;
  /**
   * Disables all the options which can't be edited, reordered or deleted if set to true.
   */
  disabled: boolean;
  /**
   * Level Indicates the depth of current field
   * Starts from 1
   */
  level: any;
  /**
   * Flag indicates this field is dependent field
   */
  isDependentField: boolean;
  /**
   * Property parentId indicates the parent of current child dropdown
   */
  parentId: any;
  /**
   * Property indicates the level selected
   */
  dependentLevels: {};
  /**
   * Key press to allow user to use tab
   */
  enableKeyPress: boolean;
  /**
   * Series of Ids to render options
   */
  choiceIds: any[];
  /**
   * Triggered on data change for error handling on parent
   */
  fwChange: EventEmitter;
  validateErrors(): Promise<any>;
  watchShowErrorsChangeHandler(): void;
  componentWillLoad(): void;
  private validate;
  private validateMaximumChoiceLimits;
  private addNewChoiceHandler;
  private deleteItemHandler;
  /**
   * function to validate errors on name input field blur
   */
  private choiceValueChangeHandler;
  /**
   * function to reposition the index of the dropped element
   */
  private elementDropHandler;
  private selectItemChoice;
  private renderNameEditorElement;
  render(): any;
}
