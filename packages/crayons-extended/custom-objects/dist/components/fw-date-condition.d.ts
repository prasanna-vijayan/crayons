import type { Components, JSX } from "../types/components";

interface FwDateCondition extends Components.FwDateCondition, HTMLElement {}
export const FwDateCondition: {
  prototype: FwDateCondition;
  new (): FwDateCondition;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
