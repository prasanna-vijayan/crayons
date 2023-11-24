export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';
export { T as TranslationController } from './Translation.js';
import { c as createToastStack, p as preventDuplicates, a as createToastNotification } from './fw-toast.js';
export { FwToast, defineCustomElement as defineCustomElementFwToast } from './fw-toast.js';
import { c as createProgressLoaderContainer } from './fw-progress-loader.js';
export { FwProgressLoader, defineCustomElement as defineCustomElementFwProgressLoader } from './fw-progress-loader.js';
import { f as formatDate } from './fw-format-date.js';
export { FwFormatDate, defineCustomElement as defineCustomElementFwFormatDate } from './fw-format-date.js';
export { FwAccordion, defineCustomElement as defineCustomElementFwAccordion } from './fw-accordion.js';
export { FwAccordionBody, defineCustomElement as defineCustomElementFwAccordionBody } from './fw-accordion-body.js';
export { FwAccordionTitle, defineCustomElement as defineCustomElementFwAccordionTitle } from './fw-accordion-title.js';
export { FwAvatar, defineCustomElement as defineCustomElementFwAvatar } from './fw-avatar.js';
export { FwButton, defineCustomElement as defineCustomElementFwButton } from './fw-button.js';
export { FwButtonGroup, defineCustomElement as defineCustomElementFwButtonGroup } from './fw-button-group.js';
export { FwCheckbox, defineCustomElement as defineCustomElementFwCheckbox } from './fw-checkbox.js';
export { FwCountryPhone, defineCustomElement as defineCustomElementFwCountryPhone } from './fw-country-phone.js';
export { FwCustomCellAnchor, defineCustomElement as defineCustomElementFwCustomCellAnchor } from './fw-custom-cell-anchor.js';
export { FwCustomCellIcon, defineCustomElement as defineCustomElementFwCustomCellIcon } from './fw-custom-cell-icon.js';
export { FwCustomCellParagraph, defineCustomElement as defineCustomElementFwCustomCellParagraph } from './fw-custom-cell-paragraph.js';
export { FwCustomCellUser, defineCustomElement as defineCustomElementFwCustomCellUser } from './fw-custom-cell-user.js';
export { FwDataTable, defineCustomElement as defineCustomElementFwDataTable } from './fw-data-table.js';
export { FwDatepicker, defineCustomElement as defineCustomElementFwDatepicker } from './fw-datepicker.js';
export { FwDragContainer, defineCustomElement as defineCustomElementFwDragContainer } from './fw-drag-container.js';
export { FwDragItem, defineCustomElement as defineCustomElementFwDragItem } from './fw-drag-item.js';
export { FwFile2, defineCustomElement as defineCustomElementFwFile2 } from './fw-file-2.js';
export { FwFileUploader, defineCustomElement as defineCustomElementFwFileUploader } from './fw-file-uploader.js';
export { FwFileUploader2, defineCustomElement as defineCustomElementFwFileUploader2 } from './fw-file-uploader-2.js';
export { FwFileUploaderFile, defineCustomElement as defineCustomElementFwFileUploaderFile } from './fw-file-uploader-file.js';
export { FwFileUploaderProgress, defineCustomElement as defineCustomElementFwFileUploaderProgress } from './fw-file-uploader-progress.js';
export { FwForm, defineCustomElement as defineCustomElementFwForm } from './fw-form.js';
export { FwFormControl, defineCustomElement as defineCustomElementFwFormControl } from './fw-form-control.js';
export { FwFormatNumber, defineCustomElement as defineCustomElementFwFormatNumber } from './fw-format-number.js';
export { FwIcon, defineCustomElement as defineCustomElementFwIcon } from './fw-icon.js';
export { FwInlineMessage, defineCustomElement as defineCustomElementFwInlineMessage } from './fw-inline-message.js';
export { FwInput, defineCustomElement as defineCustomElementFwInput } from './fw-input.js';
export { FwKebabMenu, defineCustomElement as defineCustomElementFwKebabMenu } from './fw-kebab-menu.js';
export { FwLabel, defineCustomElement as defineCustomElementFwLabel } from './fw-label.js';
export { FwListOptions, defineCustomElement as defineCustomElementFwListOptions } from './fw-list-options.js';
export { FwMenu, defineCustomElement as defineCustomElementFwMenu } from './fw-menu.js';
export { FwMenuItem, defineCustomElement as defineCustomElementFwMenuItem } from './fw-menu-item.js';
export { FwModal, defineCustomElement as defineCustomElementFwModal } from './fw-modal.js';
export { FwModalContent, defineCustomElement as defineCustomElementFwModalContent } from './fw-modal-content.js';
export { FwModalFooter, defineCustomElement as defineCustomElementFwModalFooter } from './fw-modal-footer.js';
export { FwModalTitle, defineCustomElement as defineCustomElementFwModalTitle } from './fw-modal-title.js';
export { FwNestedNode, defineCustomElement as defineCustomElementFwNestedNode } from './fw-nested-node.js';
export { FwNestedSelect, defineCustomElement as defineCustomElementFwNestedSelect } from './fw-nested-select.js';
export { FwPagination, defineCustomElement as defineCustomElementFwPagination } from './fw-pagination.js';
export { FwPill, defineCustomElement as defineCustomElementFwPill } from './fw-pill.js';
export { FwPopover, defineCustomElement as defineCustomElementFwPopover } from './fw-popover.js';
export { FwRadio, defineCustomElement as defineCustomElementFwRadio } from './fw-radio.js';
export { FwRadioGroup, defineCustomElement as defineCustomElementFwRadioGroup } from './fw-radio-group.js';
export { FwSelect, defineCustomElement as defineCustomElementFwSelect } from './fw-select.js';
export { FwSelectOption, defineCustomElement as defineCustomElementFwSelectOption } from './fw-select-option.js';
export { FwSkeleton, defineCustomElement as defineCustomElementFwSkeleton } from './fw-skeleton.js';
export { FwSpinner, defineCustomElement as defineCustomElementFwSpinner } from './fw-spinner.js';
export { FwTab, defineCustomElement as defineCustomElementFwTab } from './fw-tab.js';
export { FwTabPanel, defineCustomElement as defineCustomElementFwTabPanel } from './fw-tab-panel.js';
export { FwTabs, defineCustomElement as defineCustomElementFwTabs } from './fw-tabs.js';
export { FwTag, defineCustomElement as defineCustomElementFwTag } from './fw-tag.js';
export { FwTextarea, defineCustomElement as defineCustomElementFwTextarea } from './fw-textarea.js';
export { FwTimepicker, defineCustomElement as defineCustomElementFwTimepicker } from './fw-timepicker.js';
export { FwToastMessage, defineCustomElement as defineCustomElementFwToastMessage } from './fw-toast-message.js';
export { FwToggle, defineCustomElement as defineCustomElementFwToggle } from './fw-toggle.js';
export { FwToggleGroup, defineCustomElement as defineCustomElementFwToggleGroup } from './fw-toggle-group.js';
export { FwToggleGroupButton, defineCustomElement as defineCustomElementFwToggleGroupButton } from './fw-toggle-group-button.js';
export { FwTooltip, defineCustomElement as defineCustomElementFwTooltip } from './fw-tooltip.js';
export { r as registerIconLibrary, u as unregisterIconLibrary } from './icon.js';

/** use this file for exposing global functions and ways to set global config **/
function ToastController(config = { position: 'top-center' }) {
  const toastContainer = createToastStack(config);
  function trigger(opts) {
    const hasDuplicates = opts.shouldPreventDuplicates
      ? preventDuplicates(toastContainer.children, opts)
      : false;
    if (!hasDuplicates) {
      createToastNotification(opts, toastContainer, config);
    }
  }
  return { trigger };
}
function ProgressLoaderController(config) {
  return createProgressLoaderContainer(config);
}
function DateFormatController({ date, locale, options, } = {
  date: new Date(),
  locale: [],
  options: {},
}) {
  return formatDate({ date, locale, options });
}

export { DateFormatController, ProgressLoaderController, ToastController };
