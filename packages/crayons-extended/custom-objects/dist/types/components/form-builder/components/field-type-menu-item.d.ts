import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FieldTypeMenuItem {
  host: HTMLElement;
  /**
   * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
  /**
   * index attached inside the parent group component
   */
  index: number;
  /**
   * data source used to set and edit the field values
   */
  dataProvider: any;
  /**
   * field type attached to the item which will be broadcasted for adding the field type.
   */
  value: string;
  /**
   * Label displayed as header in the card.
   */
  label: string;
  /**
   * tooltip to be shown on hover
   */
  tooltip: string;
  /**
   * backgroundcolor for the icon
   */
  iconBackgroundColor: string;
  /**
   * set the icon path to be used
   */
  iconName: string;
  /**
   * Name of the component, saved as part of the form data.
   */
  name: string;
  /**
   * Triggered when the the add button is clicked.
   */
  fwAddClick: EventEmitter;
  private addButtonClickHandler;
  render(): any;
}
