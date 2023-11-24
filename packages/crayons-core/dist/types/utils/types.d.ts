import { VNode } from '../stencil-public-runtime';
export declare type TagVariant = 'standard' | 'avatar';
export declare type TagState = 'normal' | 'error' | 'transparent';
export declare type DropdownVariant = 'standard' | 'icon' | 'avatar';
export declare type PopoverPlacementType = 'top-start' | 'top' | 'top-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end';
export declare type PopoverTriggerType = 'click' | 'hover' | 'manual';
interface HyperFunc<T> {
  (tag: any): T;
}
interface HyperFunc<T> {
  (tag: any, data: any): T;
}
interface HyperFunc<T> {
  (tag: any, text: string): T;
}
interface HyperFunc<T> {
  (sel: any, children: Array<T | undefined | null>): T;
}
interface HyperFunc<T> {
  (sel: any, data: any, text: string): T;
}
interface HyperFunc<T> {
  (sel: any, data: any, children: Array<T | undefined | null>): T;
}
interface HyperFunc<T> {
  (sel: any, data: any, children: T): T;
}
export declare type AllowedStyles = 'width' | 'minWidth' | 'maxWidth';
export declare type WidthStyles = {
  [prop in AllowedStyles]?: string;
};
export declare type DataTableRow = {
  id: string;
  [prop: string]: any;
};
export declare type customTemplateFunc<T> = (createElement: HyperFunc<T>, props: DataTableRow) => any;
export declare type DataTableColumn = {
  key: string;
  text: string;
  variant?: string;
  position?: number;
  hide?: boolean;
  lock?: boolean;
  widthProperties?: WidthStyles;
  textAlign?: 'left' | 'center' | 'right';
  hasFocusableComponent?: boolean;
  formatData?: (cellValue: any) => string;
  customTemplate?: customTemplateFunc<VNode>;
  customHeader?: customTemplateFunc<VNode>;
};
export declare type DataTableAction = {
  name: string;
  iconName?: string;
  iconLibrary?: string;
  hideForRowIds?: string[];
  handler: (row: DataTableRow) => any;
};
export declare type GraphicsProps = {
  name: string;
  label?: string;
  dataSvg?: string;
  url?: string;
  src?: string;
  size?: number;
  xRootMargin?: string;
  width?: number;
  height?: number;
  color?: string;
  library?: string;
  lazy?: boolean;
};
export declare type DataTableActionWithGraphics = {
  name: string;
  hideForRowIds?: string[];
  handler: (row: DataTableRow) => any;
  graphicsProps?: GraphicsProps;
};
export {};
