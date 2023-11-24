import type { Components, JSX } from "../types/components";

interface FwInputRangeCondition extends Components.FwInputRangeCondition, HTMLElement {}
export const FwInputRangeCondition: {
  prototype: FwInputRangeCondition;
  new (): FwInputRangeCondition;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
