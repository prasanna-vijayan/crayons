import type { Components, JSX } from "../types/components";

interface FwFilterCondition extends Components.FwFilterCondition, HTMLElement {}
export const FwFilterCondition: {
  prototype: FwFilterCondition;
  new (): FwFilterCondition;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
