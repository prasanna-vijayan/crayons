import type { Components, JSX } from "../types/components";

interface FwFbFieldDropdown extends Components.FwFbFieldDropdown, HTMLElement {}
export const FwFbFieldDropdown: {
  prototype: FwFbFieldDropdown;
  new (): FwFbFieldDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
