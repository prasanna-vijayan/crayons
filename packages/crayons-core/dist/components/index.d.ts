/* crayons custom elements */
export { Accordion as FwAccordion } from '../types/components/accordion/accordion';
export { AccordionBody as FwAccordionBody } from '../types/components/accordion-body/accordion-body';
export { AccordionTitle as FwAccordionTitle } from '../types/components/accordion-title/accordion-title';
export { Avatar as FwAvatar } from '../types/components/avatar/avatar';
export { Button as FwButton } from '../types/components/button/button';
export { ButtonGroup as FwButtonGroup } from '../types/components/button-group/button-group';
export { Checkbox as FwCheckbox } from '../types/components/checkbox/checkbox';
export { CountryPhone as FwCountryPhone } from '../types/components/country-phone/country-phone';
export { CustomCellAnchor as FwCustomCellAnchor } from '../types/components/data-table/custom-cells/anchor/custom-cell-anchor';
export { CustomCellUser as FwCustomCellIcon } from '../types/components/data-table/custom-cells/icon/custom-cell-icon';
export { CustomCellParagraph as FwCustomCellParagraph } from '../types/components/data-table/custom-cells/paragraph/custom-cell-paragraph';
export { CustomCellUser as FwCustomCellUser } from '../types/components/data-table/custom-cells/user/custom-cell-user';
export { DataTable as FwDataTable } from '../types/components/data-table/data-table';
export { Datepicker as FwDatepicker } from '../types/components/datepicker/datepicker';
export { DragContainer as FwDragContainer } from '../types/components/drag-container/drag-container';
export { DragItem as FwDragItem } from '../types/components/drag-item/drag-item';
export { File2 as FwFile2 } from '../types/components/file-uploader-2/file-2/file-2';
export { FileUploader as FwFileUploader } from '../types/components/file-uploader/file-uploader';
export { FileUploader as FwFileUploader2 } from '../types/components/file-uploader-2/file-uploader-2';
export { FileUploaderFile as FwFileUploaderFile } from '../types/components/file-uploader/file/file-uploader-file';
export { FileUploaderProgress as FwFileUploaderProgress } from '../types/components/file-uploader/progress/file-uploader-progress';
export { Form as FwForm } from '../types/components/form/form';
export { FormControl as FwFormControl } from '../types/components/form-control/form-control';
export { FormatDate as FwFormatDate } from '../types/components/format-date/format-date';
export { FormatNumber as FwFormatNumber } from '../types/components/format-number/format-number';
export { Icon as FwIcon } from '../types/components/icon/icon';
export { InlineMessage as FwInlineMessage } from '../types/components/inline-message/inline-message';
export { Input as FwInput } from '../types/components/input/input';
export { KebabMenu as FwKebabMenu } from '../types/components/kebab-menu/kebab-menu';
export { Label as FwLabel } from '../types/components/label/label';
export { ListOptions as FwListOptions } from '../types/components/options-list/list-options';
export { Menu as FwMenu } from '../types/components/menu/menu';
export { MenuItem as FwMenuItem } from '../types/components/menu-item/menu-item';
export { Modal as FwModal } from '../types/components/modal/modal';
export { ModalContent as FwModalContent } from '../types/components/modal-content/modal-content';
export { ModalFooter as FwModalFooter } from '../types/components/modal-footer/modal-footer';
export { ModalTitle as FwModalTitle } from '../types/components/modal-title/modal-title';
export { NestedNode as FwNestedNode } from '../types/components/nested-select/nested-node';
export { NestedSelect as FwNestedSelect } from '../types/components/nested-select/nested-select';
export { Pagination as FwPagination } from '../types/components/pagination/pagination';
export { Pill as FwPill } from '../types/components/pill/pill';
export { Popover as FwPopover } from '../types/components/popover/popover';
export { ProgressLoader as FwProgressLoader } from '../types/components/progress-loader/progress-loader';
export { Radio as FwRadio } from '../types/components/radio/radio';
export { RadioGroup as FwRadioGroup } from '../types/components/radio-group/radio-group';
export { Select as FwSelect } from '../types/components/select/select';
export { SelectOption as FwSelectOption } from '../types/components/select-option/select-option';
export { Skeleton as FwSkeleton } from '../types/components/skeleton/skeleton';
export { Spinner as FwSpinner } from '../types/components/spinner/spinner';
export { Tab as FwTab } from '../types/components/tab/tab';
export { Panel as FwTabPanel } from '../types/components/tab-panel/tab-panel';
export { Tabs as FwTabs } from '../types/components/tabs/tabs';
export { Tag as FwTag } from '../types/components/tag/tag';
export { Textarea as FwTextarea } from '../types/components/textarea/textarea';
export { Timepicker as FwTimepicker } from '../types/components/timepicker/timepicker';
export { Toast as FwToast } from '../types/components/toast/toast';
export { ToastMessage as FwToastMessage } from '../types/components/toast-message/toast-message';
export { Toggle as FwToggle } from '../types/components/toggle/toggle';
export { ToggleGroup as FwToggleGroup } from '../types/components/toggle-group/toggle-group';
export { ToggleGroupButton as FwToggleGroupButton } from '../types/components/toggle-group-button/toggle-group-button';
export { Tooltip as FwTooltip } from '../types/components/tooltip/tooltip';

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
