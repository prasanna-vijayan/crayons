import { EventEmitter } from '../../../stencil-public-runtime';
export declare class WidgetCustomizeFieldItem {
  host: HTMLElement;
  /**
   * Pinned position of the drag item, other drag item cannot be placed above or below it.
   */
  pinned: 'top' | 'bottom' | '';
  /**
   * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
  /**
   * selected property of the component
   */
  selected: boolean;
  /**
   * index attached inside the parent group component
   */
  index: number;
  /**
   * data source used to set and edit the field values
   */
  dataProvider: any;
  /**
   * Label displayed as header in the card.
   */
  label: string;
  /**
   * defines if the field is primary
   */
  isPrimaryField: boolean;
  /**
   * Name of the component, saved as part of the form data.
   */
  name: string;
  /**
   * Triggered when the card in focus is selected.
   */
  fwCheck: EventEmitter;
  private checkboxSelectionChangeHandler;
  render(): any;
}
