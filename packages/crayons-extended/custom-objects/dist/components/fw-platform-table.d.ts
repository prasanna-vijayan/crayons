import type { Components, JSX } from "../types/components";

interface FwPlatformTable extends Components.FwPlatformTable, HTMLElement {}
export const FwPlatformTable: {
  prototype: FwPlatformTable;
  new (): FwPlatformTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
