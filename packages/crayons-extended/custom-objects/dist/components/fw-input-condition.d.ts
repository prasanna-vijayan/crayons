import type { Components, JSX } from "../types/components";

interface FwInputCondition extends Components.FwInputCondition, HTMLElement {}
export const FwInputCondition: {
  prototype: FwInputCondition;
  new (): FwInputCondition;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
