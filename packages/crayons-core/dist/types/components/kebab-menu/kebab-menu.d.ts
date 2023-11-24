import { EventEmitter } from '../../stencil-public-runtime';
export declare class KebabMenu {
  private popoverRef?;
  /**
   * The data for the kebab menu component, the options will be of type array of fw-select-options.
   */
  options: any[];
  /**
   * Standard is the default option without any graphics other option is icon which places the icon at the beginning of the row.
   * The props for the icon are passed as an object via the graphicsProps.
   */
  variant: 'standard' | 'icon';
  /**
   * fwSelect event is emitted when an option is clicked from the list.
   */
  fwSelect: EventEmitter;
  /**
   * fwSelectAttempted
   * @param selectedItem
   */
  fwSelectHandler(selectedItem: any): void;
  /**
   * Private
   * closeDropdown
   */
  private closeDropdown;
  render(): any;
}
