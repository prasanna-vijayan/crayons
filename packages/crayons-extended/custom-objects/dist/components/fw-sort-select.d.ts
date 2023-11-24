import type { Components, JSX } from "../types/components";

interface FwSortSelect extends Components.FwSortSelect, HTMLElement {}
export const FwSortSelect: {
  prototype: FwSortSelect;
  new (): FwSortSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
