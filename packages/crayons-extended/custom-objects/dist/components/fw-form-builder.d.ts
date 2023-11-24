import type { Components, JSX } from "../types/components";

interface FwFormBuilder extends Components.FwFormBuilder, HTMLElement {}
export const FwFormBuilder: {
  prototype: FwFormBuilder;
  new (): FwFormBuilder;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
