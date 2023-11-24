import type { Components, JSX } from "../types/components";

interface FwSearchDropdown extends Components.FwSearchDropdown, HTMLElement {}
export const FwSearchDropdown: {
  prototype: FwSearchDropdown;
  new (): FwSearchDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
