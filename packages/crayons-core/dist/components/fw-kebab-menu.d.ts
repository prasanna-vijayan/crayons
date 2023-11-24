import type { Components, JSX } from "../types/components";

interface FwKebabMenu extends Components.FwKebabMenu, HTMLElement {}
export const FwKebabMenu: {
  prototype: FwKebabMenu;
  new (): FwKebabMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
