import type { Components, JSX } from "../types/components";

interface FwFieldTypeMenuItem extends Components.FwFieldTypeMenuItem, HTMLElement {}
export const FwFieldTypeMenuItem: {
  prototype: FwFieldTypeMenuItem;
  new (): FwFieldTypeMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
