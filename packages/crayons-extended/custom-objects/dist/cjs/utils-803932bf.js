'use strict';

const handleKeyDown = (handler, skipSpace = false) => (e) => {
  const event = e;
  const key = event.key || event.keyCode;
  if (key === 'Enter' ||
    key === 13 ||
    key === 32 ||
    (!skipSpace && ['Spacebar', ' '].indexOf(key) >= 0)) {
    // In IE11 and lower, event.key will equal "Spacebar" instead of ' '
    // Default behavior is prevented to prevent the page to scroll when "space" is pressed
    event.preventDefault();
    handler(event);
  }
};
const debounce = (fn, context, timeout = 1000) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, timeout);
  };
};

exports.debounce = debounce;
exports.handleKeyDown = handleKeyDown;
