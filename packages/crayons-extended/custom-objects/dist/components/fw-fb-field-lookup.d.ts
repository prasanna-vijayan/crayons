import type { Components, JSX } from "../types/components";

interface FwFbFieldLookup extends Components.FwFbFieldLookup, HTMLElement {}
export const FwFbFieldLookup: {
  prototype: FwFbFieldLookup;
  new (): FwFbFieldLookup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
