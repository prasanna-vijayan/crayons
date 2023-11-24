export { T as TranslationController } from './Translation-e52da6d2.js';
import { c as createToastStack, p as preventDuplicates, a as createToastNotification } from './toast-util-79bd0e37.js';
import { c as createProgressLoaderContainer } from './progress-loader-util-1fff4614.js';
import { f as formatDate } from './format-date-util-cbbbafe3.js';
export { r as registerIconLibrary, u as unregisterIconLibrary } from './library.icon.utils-fc805527.js';
import './index-f21e28a1.js';
import './index-62c726ed.js';
import './_commonjsHelpers-9943807e.js';

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
