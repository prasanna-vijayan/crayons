import type { Components, JSX } from "../types/components";

interface FwCoExport extends Components.FwCoExport, HTMLElement {}
export const FwCoExport: {
  prototype: FwCoExport;
  new (): FwCoExport;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
