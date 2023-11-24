import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CoExportField {
  host: HTMLElement;
  private spanLabel;
  private resizeObserver;
  addTooltip: boolean;
  /**
   * The value to populate the details of the checkbox field
   */
  value: any;
  /**
   * Triggered whenever the export button is selected
   */
  fwChange: EventEmitter;
  componentDidRender: () => void;
  disconnectedCallback(): void;
  private removeResizeObserver;
  private fieldSelectionChangeHandler;
  private renderLabel;
  render(): any;
}
