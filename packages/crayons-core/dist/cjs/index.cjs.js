'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const Translation = require('./Translation-7aefe8b4.js');
const toastUtil = require('./toast-util-9da004a5.js');
const progressLoaderUtil = require('./progress-loader-util-464063d5.js');
const formatDateUtil = require('./format-date-util-9e5fbd49.js');
const library_icon_utils = require('./library.icon.utils-eab56792.js');
require('./index-63c6a574.js');
require('./index-926a762d.js');
require('./_commonjsHelpers-537d719a.js');

/** use this file for exposing global functions and ways to set global config **/
function ToastController(config = { position: 'top-center' }) {
  const toastContainer = toastUtil.createToastStack(config);
  function trigger(opts) {
    const hasDuplicates = opts.shouldPreventDuplicates
      ? toastUtil.preventDuplicates(toastContainer.children, opts)
      : false;
    if (!hasDuplicates) {
      toastUtil.createToastNotification(opts, toastContainer, config);
    }
  }
  return { trigger };
}
function ProgressLoaderController(config) {
  return progressLoaderUtil.createProgressLoaderContainer(config);
}
function DateFormatController({ date, locale, options, } = {
  date: new Date(),
  locale: [],
  options: {},
}) {
  return formatDateUtil.formatDate({ date, locale, options });
}

exports.TranslationController = Translation.TranslationController;
exports.registerIconLibrary = library_icon_utils.registerIconLibrary;
exports.unregisterIconLibrary = library_icon_utils.unregisterIconLibrary;
exports.DateFormatController = DateFormatController;
exports.ProgressLoaderController = ProgressLoaderController;
exports.ToastController = ToastController;
