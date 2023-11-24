import type { Components, JSX } from "../types/components";

interface FwCoExportField extends Components.FwCoExportField, HTMLElement {}
export const FwCoExportField: {
  prototype: FwCoExportField;
  new (): FwCoExportField;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
