import type { Components, JSX } from "../types/components";

interface FwFieldEditor extends Components.FwFieldEditor, HTMLElement {}
export const FwFieldEditor: {
  prototype: FwFieldEditor;
  new (): FwFieldEditor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
