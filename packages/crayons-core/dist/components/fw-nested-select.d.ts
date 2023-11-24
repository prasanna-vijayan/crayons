import type { Components, JSX } from "../types/components";

interface FwNestedSelect extends Components.FwNestedSelect, HTMLElement {}
export const FwNestedSelect: {
  prototype: FwNestedSelect;
  new (): FwNestedSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
