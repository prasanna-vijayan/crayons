import type { Components, JSX } from "../types/components";

interface FwFbFieldDropdownItem extends Components.FwFbFieldDropdownItem, HTMLElement {}
export const FwFbFieldDropdownItem: {
  prototype: FwFbFieldDropdownItem;
  new (): FwFbFieldDropdownItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
