/** use this file for exposing global functions and ways to set global config **/
import { createToastStack, createToastNotification, preventDuplicates, } from '../components/toast/toast-util';
import { createProgressLoaderContainer, } from '../components/progress-loader/progress-loader-util';
import { formatDate, } from '../components/format-date/format-date-util';
export function ToastController(config = { position: 'top-center' }) {
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
export function ProgressLoaderController(config) {
  return createProgressLoaderContainer(config);
}
export function DateFormatController({ date, locale, options, } = {
  date: new Date(),
  locale: [],
  options: {},
}) {
  return formatDate({ date, locale, options });
}
export { registerIconLibrary, unregisterIconLibrary, } from '../components/icon/library.icon.utils';
