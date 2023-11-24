import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FbFieldDropdownItem {
  host: HTMLElement;
  private divBaseElement;
  /**
   * flag to notify if an api call is in progress
   */
  isLoading: boolean;
  /**
   * variable to store the data source
   */
  dataProvider: any;
  /**
   * variable to determine if the element is sortable
   */
  sortable: boolean;
  /**
   * property to show the errors on click of the save/add button from the parent
   */
  showErrors: boolean;
  /**
   * Disables all the options which can't be edited, reordered or deleted if set to true.
   */
  disabled: boolean;
  /**
   * property to determine if this is a new choice or an existing choice
   */
  isNewChoice: boolean;
  /**
   * index attached inside the parent group component
   */
  index: number;
  isDependentField: boolean;
  itemSelected: boolean;
  enableKeyPress: boolean;
  fwAdd: EventEmitter;
  /**
   * Triggered on delete button click
   */
  fwDelete: EventEmitter;
  /**
   * Triggered on choice input blur
   */
  fwChange: EventEmitter;
  /**
   * Triggered on choice selection
   */
  fwSelect: EventEmitter;
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
  private performLabelChange;
  private nameBlurHandler;
  private nameChangeHandler;
  private nameKeydownHandler;
  private deleteButtonClickHandler;
  /**
   * function to convert the number to its ordinal number for the place holder options - eg: 1 - 1st, 2- 2nd
   */
  private toOrdinalSuffix;
  private nameFocusHandler;
  render(): any;
}
