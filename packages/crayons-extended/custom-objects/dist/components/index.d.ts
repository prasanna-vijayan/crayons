/* CrayonsCustomObjects custom elements */
export { CoExport as FwCoExport } from '../types/components/export/co-export';
export { CoExportField as FwCoExportField } from '../types/components/export/components/co-export-field';
export { DateCondition as FwDateCondition } from '../types/components/filter/conditions/date-condition';
export { FbFieldDropdown as FwFbFieldDropdown } from '../types/components/form-builder/components/fb-field-dropdown';
export { FbFieldDropdownItem as FwFbFieldDropdownItem } from '../types/components/form-builder/components/fb-field-dropdown-item';
export { FbFieldDropdown as FwFbFieldLookup } from '../types/components/form-builder/components/fb-field-lookup';
export { FieldEditor as FwFieldEditor } from '../types/components/form-builder/components/field-editor';
export { FieldTypeMenuItem as FwFieldTypeMenuItem } from '../types/components/form-builder/components/field-type-menu-item';
export { Filter as FwFilter } from '../types/components/filter/filter';
export { FilterCondition as FwFilterCondition } from '../types/components/filter/filter-condition/filter-condition';
export { FilterDropdown as FwFilterDropdown } from '../types/components/filter/filter-dropdown/filter-dropdown';
export { FormBuilder as FwFormBuilder } from '../types/components/form-builder/form-builder';
export { InputCondition as FwInputCondition } from '../types/components/filter/conditions/input-condition';
export { InputRangeCondition as FwInputRangeCondition } from '../types/components/filter/conditions/input-range-condition';
export { PlatformTable as FwPlatformTable } from '../types/components/platform-table/platform-table';
export { SearchDropdown as FwSearchDropdown } from '../types/components/filter/search-dropdown/search-dropdown';
export { SelectCondition as FwSelectCondition } from '../types/components/filter/conditions/select-condition';
export { SortSelect as FwSortSelect } from '../types/components/platform-table/sort-select/sort-select';
export { WidgetCustomizeFieldItem as FwWidgetCustomizeFieldItem } from '../types/components/form-builder/components/widget-customize-field-item';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
