import { EventEmitter } from '../../stencil-public-runtime';
export declare class FormBuilder {
  host: HTMLElement;
  private fieldEditorPanel;
  private debouncedHandleInput;
  private modalCustomizeWidget;
  private isWidgetValuesChanged;
  private filterByFieldTypeOptions;
  private supportedFieldTypes;
  private resizeObserver;
  private FILTER_ALL_FIELDS;
  /**
   * The db type used to determine the json to be used for CUSTOM_OBJECTS or CONVERSATION_PROPERTIES
   */
  productName: 'CUSTOM_OBJECTS' | 'CONVERSATION_PROPERTIES';
  /**
   * Show explore plans button and disable features for free-plan users
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
   * Prop to store the expanded field index
   */
  expandedFieldIndex: number;
  /**
   * variable to store form values
   */
  formValues: any;
  /**
   * object to store the lookup target entities
   */
  lookupTargetObjects: any;
  /**
   * flag to show lookupField for CONVERSATION_PROPERTIES or not
   */
  showLookupField: boolean;
  /**
   * flag to show dependentField for CONVERSATION_PROPERTIES or not
   */
  showDependentField: boolean;
  /**
   * variable to store customize widget fields
   */
  customizeWidgetFields: any;
  /**
   * flag to notify if an api call is in progress
   */
  isLoading: boolean;
  /**
   * flag to notify if an api call to save the widget is completed
   */
  isSavingCustomizeWidget: boolean;
  /**
   * Show explore plans and disable features for user having free-plan
   */
  userPlan: 'trial' | 'admin';
  /**
   * svg image to be shown for empty record
   */
  emptySearchImage: any;
  /**
   * State to store the formValues as a state to transfer the field types
   */
  localFormValues: any;
  /**
   * State to store the searched widget elements
   */
  arrWidgetFields: any;
  /**
   * State to store the searched field elements
   */
  arrSearchedFields: any;
  /**
   * State to store the filtered field elements
   */
  arrFilteredByTypeFields: any;
  /**
   * State to check if the form is in searching mode
   */
  searching: boolean;
  /**
   * State to show/hide the customize widget modal contents
   */
  showCustomizeWidget: boolean;
  /**
   * variable to store the count of all the field types
   */
  fieldTypesCount: any;
  /**
   * Flag to enable / disable the all the field type based on the limits
   */
  enableFieldType: boolean;
  /**
   * Flag to enable / disable the the filterable option
   */
  enableFilterable: boolean;
  /**
   * Flag to enable / disable the the unique option
   */
  enableUnique: boolean;
  /**
   * selected filter option from the select component for filter by field type
   */
  selectedFieldTypeFilterOption: string;
  /**
   * State to re-render the drag container children after re render
   */
  fieldRerenderCount: number;
  /**
   * Triggered on Add/Save field button click from the field list items
   */
  fwSaveField: EventEmitter;
  /**
   * Triggered on Delete field button click from the field list items
   */
  fwDeleteField: EventEmitter;
  /**
   * Triggered when a new field type is dropped / added inside the fields area
   */
  fwComposeNewField: EventEmitter;
  /**
   * Triggered when the position of a field is changed using drag and drop
   */
  fwRepositionField: EventEmitter;
  /**
   * Triggered when the field is expanded or collapsed
   */
  fwExpandField: EventEmitter;
  /**
   * Triggered when the explore plans button is clicked for free plan users
   */
  fwExplorePlan: EventEmitter;
  /**
   * Triggered on search
   */
  fwSearchField: EventEmitter;
  /**
   * Triggered on saving the widget fields
   */
  fwSaveWidgetFields: EventEmitter;
  watchSearchHandler(): void;
  watchSaveCustomizeWidgetChangeHandler(): void;
  watchFormValuesChangeHandler(newValue: any): void;
  watchProductNameChangeHandler(): void;
  /**
   * Method to force render the drag container's children containing all the added fields
   */
  forceRenderFields(): Promise<void>;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  private validateFormValues;
  private getInterpolatedMaxLimitLabel;
  private getDefaultFieldTypeSchema;
  private removeFieldReorderClass;
  private reorderFieldProgressHandler;
  private expandFieldHandler;
  private explorePlanHandler;
  private saveFieldHandler;
  private deleteFieldHandler;
  private composeNewField;
  private fieldTypeDropHandler;
  private removeResizeObserver;
  private addNewFieldTypeHandler;
  private initializeSearchDebounce;
  private searchChangeHandler;
  private clearSearchHandler;
  private fieldTypeFilterChangeHandler;
  private openCustomizeWidgetModalHandler;
  private saveWidgetDetailsHandler;
  private closeWidgetDetailsHandler;
  private widgetCheckHandler;
  private renderFieldTypesHeader;
  private renderDisableFieldCreateByRole;
  private renderDisableFieldCreateByPermission;
  private renderFieldTypeElement;
  private renderFieldEditorElement;
  private renderWidgetElement;
  render(): any;
}
