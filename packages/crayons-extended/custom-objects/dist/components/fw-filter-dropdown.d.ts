import type { Components, JSX } from "../types/components";

interface FwFilterDropdown extends Components.FwFilterDropdown, HTMLElement {}
export const FwFilterDropdown: {
  prototype: FwFilterDropdown;
  new (): FwFilterDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
