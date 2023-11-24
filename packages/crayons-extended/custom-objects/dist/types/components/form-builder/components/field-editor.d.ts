import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FieldEditor {
  host: HTMLElement;
  private KEY_INTERNAL_NAME;
  private modalConfirmDelete;
  private divFieldBase;
  private dictInteractiveElements;
  private isInternalNameEdited;
  private internalNamePrefix;
  private isNewField;
  private oldFormValues;
  private errorType;
  private isDependentField;
  private textboxDependentValue;
  /**
   * The db type used to determine the json to be used for CUSTOM_OBJECTS or CONVERSATION_PROPERTIES
   */
  productName: string;
  /**
   * Pinned position of the drag item, other drag item cannot be placed above or below it.
   */
  pinned: 'top' | 'bottom' | '';
  /**
   * flag to notify if an api call is in progress
   */
  isLoading: boolean;
  /**
   * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
  /**
   * Property to determine expanded state or collapsed
   */
  expanded: boolean;
  /**
   * data source used to set and edit the field values
   */
  dataProvider: any;
  /**
   * variable to store form values
   */
  formValues: any;
  /**
   * object to store the lookup target entities
   */
  lookupTargetObjects: boolean;
  /**
   * Disable the repositioning option
   */
  disabledSort: boolean;
  /**
   * defines the name of the entity to be used in Lookup field
   */
  entityName: string;
  /**
   * stores the default field type schema for this editor type
   */
  defaultFieldTypeSchema: any;
  /**
   * defines if the field is primary
   */
  isPrimaryField: boolean;
  /**
   * Flag to enable / disable the the filterable option
   */
  enableFilterable: boolean;
  /**
   * Flag to enable / disable the the unique option
   */
  enableUnique: boolean;
  /**
   * index attached inside the parent group component
   */
  index: number;
  /**
   * Name of the component, saved as part of the form data.
   */
  name: string;
  /**
   * Disable features for the users with free trial plan
   */
  role: 'trial' | 'admin';
  /**
   * Permission object to restrict features based on permissions
   * "view" needs to be set to true for the rest of the permissions to be applicable
   * By default, all the permissions are set to true to give access to all the features
   * Example permission object : { view: true, create: true, edit: true, delete: true }
   */
  permission: {
    view: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
  };
  /**
   * State to check if the values have been changed and enable the save button
   */
  isValuesChanged: boolean;
  /**
   * State to serialize the field builder options
   */
  fieldBuilderOptions: any;
  /**
   * State to show the error messages
   */
  showErrors: boolean;
  /**
   * State to show duplicate error message
   */
  duplicateErrors: boolean;
  /**
   * State to show form error text for the field validations
   */
  formErrorMessage: string;
  /**
   * State to show label input error message
   */
  labelErrorMessage: string;
  /**
   * State to show label input warning message
   */
  labelWarningMessage: string;
  /**
   * State to show internal name input error message
   */
  internalNameErrorMessage: string;
  /**
   * State to show internal name input warning message
   */
  internalNameWarningMessage: string;
  /**
   * flag to show spinner on delete button
   */
  isDeleting: boolean;
  /**
   * To store dependentLevels selected state on click
   */
  dependentLevels: {};
  /**
   * Flag to toggle dependent field initial textbox
   */
  showDependentFieldTextbox: boolean;
  /**
   * Triggered when the field is expanded or collapsed
   */
  fwExpand: EventEmitter;
  /**
   * Triggered when the field details need to be saved on the server
   */
  fwUpdate: EventEmitter;
  /**
   * Triggered when the field has to be deleted on the server
   */
  fwDelete: EventEmitter;
  /**
   * Triggered when the field is reordered for drag start and drag stop
   */
  fwReorder: EventEmitter;
  watchEnableUniqueChangeHandler(): void;
  watchEnableFilterableChangeHandler(): void;
  watchDataproviderChangeHandler(): void;
  componentWillLoad(): void;
  private getInterpolatedMaxLimitLabel;
  /**
   * validate limitations and enable/disable the checkbox controls
   */
  private setCheckboxesAvailability;
  /**
   * function called on reorder button mousedown to enable the parent as draggable
   */
  private startParentDragging;
  /**
   * function to disable the parent as draggable
   */
  private stopParentDragging;
  /**
   * function to enable/disable the draggable property for the base div
   */
  private enableParentDrag;
  /**
   * function to validate the label input error values
   */
  private validateLabelErrors;
  /** validate same label or internal name error */
  private validateDuplicateErrors;
  /**
   * function to validate the internal name input error values
   */
  private validateInternalNameErrors;
  /**
   * function to check the dropdown error values
   */
  private validateDropdownErrors;
  /**
   * function to check the dropdown error values
   */
  private validateLookupErrors;
  private addFieldHandler;
  private cancelFieldHandler;
  private expandHandler;
  private deleteFieldClickHandler;
  private confirmDeleteFieldHandler;
  private dropdownChangeHandler;
  private statusToggleHandler;
  private lookupChangeHandler;
  private checkboxSelectionChangeHandler;
  private handleDependentField;
  private switchToDropdownView;
  private performLabelChange;
  private labelInputHandler;
  private labelBlurHandler;
  private performInternalNameChange;
  private internalNameInputHandler;
  private internalNameBlurHandler;
  private renderFwLabel;
  private renderCheckboxField;
  private renderDropdown;
  private renderStatusToggle;
  private renderLookup;
  private renderInternalName;
  private renderLabel;
  private renderFieldContent;
  private renderLabelAndInternalName;
  private renderContent;
  render(): any;
}
