import type { Components, JSX } from "../types/components";

interface FwWidgetCustomizeFieldItem extends Components.FwWidgetCustomizeFieldItem, HTMLElement {}
export const FwWidgetCustomizeFieldItem: {
  prototype: FwWidgetCustomizeFieldItem;
  new (): FwWidgetCustomizeFieldItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
