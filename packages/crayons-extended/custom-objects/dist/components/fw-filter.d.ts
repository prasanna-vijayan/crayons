import type { Components, JSX } from "../types/components";

interface FwFilter extends Components.FwFilter, HTMLElement {}
export const FwFilter: {
  prototype: FwFilter;
  new (): FwFilter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
