import { EventEmitter } from '../../stencil-public-runtime';
import { Instance } from '@popperjs/core';
import { PopoverPlacementType, PopoverTriggerType } from '../../utils/types';
export declare class Popover {
  private popperDiv;
  private contentRef;
  private triggerRef;
  private triggerRefSlot;
  private overlay;
  private resizeObserver;
  private timerId;
  host: HTMLElement;
  popperInstance: Instance;
  isOpen: boolean;
  popperOptions: any;
  /**
   * Placement of the popover content with respect to the popover trigger.
   */
  placement: PopoverPlacementType;
  /**
   * Alternative placement for popover if the default placement is not possible.
   */
  fallbackPlacements: [PopoverPlacementType];
  /**
   * The area that the popup will be checked for overflow relative to.
   */
  boundary: HTMLElement;
  /**
   * Skidding defines the distance between the popover trigger and the popover content along x-axis.
   */
  skidding: string;
  /**
   * Distance defines the distance between the popover trigger and the popover content along y-axis.
   */
  distance: string;
  /**
   * Variant defines the style of the popover-content.
   */
  variant: 'select' | 'date-picker';
  /**
   * Whether the popover-content width to be same as that of the popover-trigger.
   */
  sameWidth: boolean;
  /**
   * The trigger event on which the popover-content is displayed. The available options are
   * 'click' | 'manual' | 'hover', in case of 'manual' no trigger event will be set.
   */
  trigger: PopoverTriggerType;
  /**
   * Option to determine if popover-content has a border.
   */
  hasBorder: boolean;
  /**
   * Option to prevent the tooltip from being clipped when the component is placed inside a container with
   * `overflow: auto|hidden|scroll`.
   */
  hoist: boolean;
  /**
   * Option to disable the popover animation on hide and show.
   */
  disableTransition: boolean;
  /**
   * Whether to focus on the element in popover-content slot on opening the dropdown.
   */
  autoFocusOnContent: boolean;
  /**
   * Indicates whether popover contents should be hidden on pressing Tab.
   */
  hideOnTab: boolean;
  /**
   * Indicates the delay after which popover will be shown.
   */
  showAfter: number;
  /**
   * Indicates the delay after which popover will be hidden.
   */
  hideAfter: number;
  /**
   * Triggered whenever the popover contents is open/displayed.
   */
  fwShow: EventEmitter;
  /**
   * Triggered whenever the popover contents is closed/hidden.
   */
  fwHide: EventEmitter;
  onKeyDown(ev: any): void;
  show(): Promise<void>;
  hide(): Promise<void>;
  handlePlacementChange(): void;
  setPopperOptions(): void;
  componentWillLoad(): void;
  private delay;
  updatePopper(): void;
  componentDidRender: () => void;
  disconnectedCallback(): void;
  private removeResizeObserver;
  createPopperInstance(): void;
  render(): any[];
}
