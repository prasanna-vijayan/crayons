import { EventEmitter } from '../../../stencil-public-runtime';
export declare class SearchDropdown {
  private dropdown;
  host: any;
  value: any;
  /**
   * The filter schema
   */
  options: any;
  /**
   * On Change event
   */
  fwChange: EventEmitter;
  onInput(e: any): void;
  onSelection(e: any): void;
  componentWillLoad(): void;
  render(): any;
}
