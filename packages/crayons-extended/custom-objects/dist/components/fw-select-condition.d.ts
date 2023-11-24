import type { Components, JSX } from "../types/components";

interface FwSelectCondition extends Components.FwSelectCondition, HTMLElement {}
export const FwSelectCondition: {
  prototype: FwSelectCondition;
  new (): FwSelectCondition;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
