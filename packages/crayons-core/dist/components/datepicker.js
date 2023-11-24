import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as debounce, g as getFocusableChildren, b as addRTL, h as handleKeyDown, a as hasSlot, r as renderHiddenField } from './index2.js';
import { F as FieldControl } from './field-control.js';
import { T as TranslationController } from './Translation.js';
import { d as defineCustomElement$d } from './avatar.js';
import { d as defineCustomElement$c } from './button.js';
import { d as defineCustomElement$b } from './checkbox.js';
import { d as defineCustomElement$a } from './icon.js';
import { d as defineCustomElement$9 } from './input.js';
import { d as defineCustomElement$8 } from './list-options.js';
import { d as defineCustomElement$7 } from './popover.js';
import { d as defineCustomElement$6 } from './select.js';
import { d as defineCustomElement$5 } from './select-option.js';
import { d as defineCustomElement$4 } from './spinner.js';
import { d as defineCustomElement$3 } from './tag.js';
import { r as requiredArgs, t as toDate, a as toInteger, b as addLeadingZeros, f as format, p as parse, i as isValid, s as startOfDay, c as isMatch, d as defineCustomElement$2 } from './timepicker.js';
import { d as defineCustomElement$1 } from './tooltip.js';

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;

/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time with local time zone, or both.
 * @returns {String} the formatted date string (in local time zone)
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.format` must be 'extended' or 'basic'
 * @throws {RangeError} `options.represenation` must be 'date', 'time' or 'complete'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */

function formatISO(date, options) {
  requiredArgs(1, arguments);
  var originalDate = toDate(date);

  if (isNaN(originalDate.getTime())) {
    throw new RangeError('Invalid time value');
  }

  var format = !(options !== null && options !== void 0 && options.format) ? 'extended' : String(options.format);
  var representation = !(options !== null && options !== void 0 && options.representation) ? 'complete' : String(options.representation);

  if (format !== 'extended' && format !== 'basic') {
    throw new RangeError("format must be 'extended' or 'basic'");
  }

  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }

  var result = '';
  var tzOffset = '';
  var dateDelimiter = format === 'extended' ? '-' : '';
  var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'

  if (representation !== 'time') {
    var day = addLeadingZeros(originalDate.getDate(), 2);
    var month = addLeadingZeros(originalDate.getMonth() + 1, 2);
    var year = addLeadingZeros(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.

    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  } // Representation is either 'time' or 'complete'


  if (representation !== 'date') {
    // Add the timezone.
    var offset = originalDate.getTimezoneOffset();

    if (offset !== 0) {
      var absoluteOffset = Math.abs(offset);
      var hourOffset = addLeadingZeros(Math.floor(absoluteOffset / 60), 2);
      var minuteOffset = addLeadingZeros(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.

      var sign = offset < 0 ? '+' : '-';
      tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else {
      tzOffset = 'Z';
    }

    var hour = addLeadingZeros(originalDate.getHours(), 2);
    var minute = addLeadingZeros(originalDate.getMinutes(), 2);
    var second = addLeadingZeros(originalDate.getSeconds(), 2); // If there's also date, separate it with time with 'T'

    var separator = result === '' ? '' : 'T'; // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.

    var time = [hour, minute, second].join(timeDelimiter); // HHmmss or HH:mm:ss.

    result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
  }

  return result;
}

/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */

function getDaysInMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  return month;
}

/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */

function getTime(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getFullYear();
}

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : toInteger(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

const datepickerCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host{display:block;position:relative;--fw-icon-size:14px;--fw-popover-max-height:420px}:host *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdp-container,.mdp-range-container{width:264px;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px;overflow:hidden}.mdpc-footer{padding:4px;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:end;justify-content:flex-end;background:#f5f7f9}.mdpc-footer fw-button{margin:4px}.mdp-range-container{width:536px}.mdpc-head{--fw-select-margin-bottom:16px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.mdpc-body{width:100%}:host(:not([dir=\"rtl\"])) .mdpc-body,:host([dir=\"ltr\"]) .mdpc-body{float:left}:host([dir=\"rtl\"]) .mdpc-body{float:right}.body-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:justify;justify-content:space-between}.body-container .mdpc-body{width:232px;padding-inline:8px;padding-block:0;position:relative}.body-container .mdpc-body-right{width:232px;padding-inline:8px;padding-block:0}.body-container .mdpc-body-right::after{content:\"\";position:absolute;inset-block-start:0;inset-inline-end:251px;-webkit-border-end:1px solid #ebeff3;border-inline-end:1px solid #ebeff3;height:100%}.btns{display:inherit;position:absolute;inset-inline-end:14px}.mdpch-button,.mdpch-button-right{width:12px;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;inset-block-end:6px;inset-inline-end:14px}.mdpchb-inner:hover,.mdpchb-inner:focus{cursor:pointer;background:#ebeff3}.mdpchb-inner{height:20px;width:20px;position:absolute;-webkit-margin-before:-11px;margin-block-start:-11px}.mdpchb-inner.disabled{cursor:not-allowed}.mdpch-button-right .mdpchb-inner{inset-inline-start:12px}.mdpchbi-left-arrow,.mdpchbi-left-arrows,.mdpchbi-left-arrows::after,.mdpchbi-right-arrow,.mdpchbi-right-arrows,.mdpchbi-right-arrows::after{display:block;width:6px;height:6px;-webkit-border-start:2px solid #183247;border-inline-start:2px solid #183247;-webkit-border-after:2px solid #183247;border-block-end:2px solid #183247;position:absolute}.mdpchbi-left-arrow,.mdpchbi-left-arrows,.mdpchbi-right-arrow,.mdpchbi-right-arrows{inset-inline-start:50%;inset-block-start:50%;-webkit-margin-start:-2px;margin-inline-start:-2px;-webkit-margin-before:-4px;margin-block-start:-4px}:host(:not([dir=\"rtl\"])) .mdpchbi-left-arrow,:host([dir=\"ltr\"]) .mdpchbi-left-arrow,:host(:not([dir=\"rtl\"])) .mdpchbi-left-arrows,:host([dir=\"ltr\"]) .mdpchbi-left-arrows,:host(:not([dir=\"rtl\"])) .mdpchbi-right-arrow,:host([dir=\"ltr\"]) .mdpchbi-right-arrow,:host(:not([dir=\"rtl\"])) .mdpchbi-right-arrows,:host([dir=\"ltr\"]) .mdpchbi-right-arrows{-webkit-transform:rotate(45deg);transform:rotate(45deg)}:host([dir=\"rtl\"]) .mdpchbi-left-arrow,:host([dir=\"rtl\"]) .mdpchbi-left-arrows,:host([dir=\"rtl\"]) .mdpchbi-right-arrow,:host([dir=\"rtl\"]) .mdpchbi-right-arrows{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.mdpchbi-right-arrow,.mdpchbi-right-arrows{-webkit-margin-start:-4px;margin-inline-start:-4px}:host(:not([dir=\"rtl\"])) .mdpchbi-right-arrow,:host([dir=\"ltr\"]) .mdpchbi-right-arrow,:host(:not([dir=\"rtl\"])) .mdpchbi-right-arrows,:host([dir=\"ltr\"]) .mdpchbi-right-arrows{-webkit-transform:rotate(225deg);transform:rotate(225deg)}:host([dir=\"rtl\"]) .mdpchbi-right-arrow,:host([dir=\"rtl\"]) .mdpchbi-right-arrows{-webkit-transform:rotate(-225deg);transform:rotate(-225deg)}.mdpchbi-left-arrows::after,.mdpchbi-right-arrows::after{content:\"\";inset-inline-start:3px;inset-block-start:-5px}.mdpchbi-left-arrows{-webkit-margin-start:-5px;margin-inline-start:-5px}.mdpchbi-right-arrows{-webkit-margin-start:-2px;margin-inline-start:-2px}.mdpch-container,.mdpch-container-right{min-width:50%}.mdpch-container-right{-webkit-padding-start:16px;padding-inline-start:16px}.mdpchc-year{--fw-button-min-width:74px;height:30px;font-size:16px;color:#475867;text-align:center;width:74px;--fw-popover-max-height:146px;--fw-popover-min-width:170px}:host(:not([dir=\"rtl\"])) .mdpchc-year,:host([dir=\"ltr\"]) .mdpchc-year{float:left}:host([dir=\"rtl\"]) .mdpchc-year{float:right}.mdpchc-month{--fw-button-min-width:65px;font-size:16px;color:#475867;text-align:center;width:65px;--fw-popover-max-height:146px;--fw-popover-min-width:170px}:host(:not([dir=\"rtl\"])) .mdpchc-month,:host([dir=\"ltr\"]) .mdpchc-month{float:left}:host([dir=\"rtl\"]) .mdpchc-month{float:right}.mdpchc-month fw-select .input-container-inner input{width:98%}.c-container,.c-day-container,.cc-body,.cc-head,.cch-name,.cdc-day,.cdc-day span{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}:host(:not([dir=\"rtl\"])) .c-container,:host([dir=\"ltr\"]) .c-container,:host(:not([dir=\"rtl\"])) .c-day-container,:host([dir=\"ltr\"]) .c-day-container,:host(:not([dir=\"rtl\"])) .cc-body,:host([dir=\"ltr\"]) .cc-body,:host(:not([dir=\"rtl\"])) .cc-head,:host([dir=\"ltr\"]) .cc-head,:host(:not([dir=\"rtl\"])) .cch-name,:host([dir=\"ltr\"]) .cch-name,:host(:not([dir=\"rtl\"])) .cdc-day,:host([dir=\"ltr\"]) .cdc-day,:host(:not([dir=\"rtl\"])) .cdc-day span,:host([dir=\"ltr\"]) .cdc-day span{float:left}:host([dir=\"rtl\"]) .c-container,:host([dir=\"rtl\"]) .c-day-container,:host([dir=\"rtl\"]) .cc-body,:host([dir=\"rtl\"]) .cc-head,:host([dir=\"rtl\"]) .cch-name,:host([dir=\"rtl\"]) .cdc-day,:host([dir=\"rtl\"]) .cdc-day span{float:right}.c-container{width:100%;height:100%}.cc-head{height:30px;width:100%}.cch-name{width:14.285%;height:30px;line-height:30px;font-weight:700;color:#475867;font-size:13px;text-align:center}.cc-body{height:180px;width:100%}.c-day-container{width:14.285%;height:11.185%;-webkit-margin-before:10px;margin-block-start:10px}.cdc-day{width:100%;height:100%;font-size:12px;font-weight:300;color:#475867;text-align:center}.cdc-day span:hover,.cdc-day span:focus{cursor:pointer;background:#ebeff3}.cdc-day span{width:24px;height:22px;font-size:14px;-webkit-margin-before:-11px;margin-block-start:-11px;-webkit-margin-start:-13px;margin-inline-start:-13px;inset-inline-start:50%;inset-block-start:50%;font-weight:400;border-radius:10%;line-height:20px;color:#12344d}.c-day-container.disabled{pointer-events:none}.invalid-alert{position:relative;display:inline-block;overflow:hidden}.invalid-alert fw-icon{cursor:pointer;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-start:4px;margin-inline-start:4px}.icon-calendar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-inline:0px;margin-block:4px}.icon-calendar .separator{border-inline-start-width:1px;border-inline-start-style:solid;height:20px;margin-inline:4px;margin-block:0px}.date-icon{display:-ms-flexbox;display:flex;width:24px;height:24px;border-radius:4px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:#ebeff3}.c-day-container.disabled .cdc-day span{color:#92a2b1;background:#fff !important}.c-day-container.highlight:not(.disabled) .cdc-day span{border:1px solid #cfd7df}.c-day-container.highlight-blue:not(.disabled) .cdc-day span{background:#2c5cc5;color:#f5f7f9}.c-day-container.start-day .cdc-day{-webkit-margin-start:10px;margin-inline-start:10px}:host(:not([dir=\"rtl\"])) .c-day-container.start-day .cdc-day span,:host([dir=\"ltr\"]) .c-day-container.start-day .cdc-day span{-webkit-transform:translateX(-10px);transform:translateX(-10px)}:host([dir=\"rtl\"]) .c-day-container.start-day .cdc-day span{-webkit-transform:translateX(10px);transform:translateX(10px)}.c-day-container.end-day .cdc-day{-webkit-margin-start:-10px;margin-inline-start:-10px}:host(:not([dir=\"rtl\"])) .c-day-container.end-day .cdc-day span,:host([dir=\"ltr\"]) .c-day-container.end-day .cdc-day span{-webkit-transform:translateX(10px);transform:translateX(10px)}:host([dir=\"rtl\"]) .c-day-container.end-day .cdc-day span{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.c-day-container.highlight-range:not(.disabled) .cdc-day{background:#e4f2fd}.time-container{display:-ms-flexbox;display:flex;width:264px;gap:8px;padding-block:12px;padding-inline:16px;background:#f5f7f9;-webkit-box-sizing:border-box;box-sizing:border-box}.time-container fw-input{width:124px}.time-container .mdc-time{width:100px;--fw-popover-min-width:170px;--fw-popover-max-height:146px}.time-container span{font-size:12px;font-weight:500;line-height:20px}.datepicker{height:100%}";

const defaultweekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const monthDetails = [
  { value: 'Jan', text: 'January' },
  { value: 'Feb', text: 'February' },
  { value: 'Mar', text: 'March' },
  { value: 'Apr', text: 'April' },
  { value: 'May', text: 'May' },
  { value: 'Jun', text: 'June' },
  { value: 'Jul', text: 'July' },
  { value: 'Aug', text: 'August' },
  { value: 'Sep', text: 'September' },
  { value: 'Oct', text: 'October' },
  { value: 'Nov', text: 'November' },
  { value: 'Dec', text: 'December' },
];
const getMonthNames = (lang) => {
  if (!lang) {
    return {
      longMonthNames: monthDetails.map((m) => m.text),
      shortMonthNames: monthDetails.map((m) => m.value),
    };
  }
  const shortMonthNames = [];
  const longMonthNames = [];
  for (let i = 0; i <= 11; i++) {
    shortMonthNames.push(lang.localize.month(i, { width: 'abbreviated' }));
    longMonthNames.push(lang.localize.month(i));
  }
  return {
    longMonthNames,
    shortMonthNames,
  };
};
const getWeekDays = (lang) => {
  if (!lang)
    return defaultweekDays;
  return Array.from(Array(7)).map((_e, i) => format(addDays(startOfWeek(new Date()), i), 'EEEEE', { locale: lang }));
};
const Datepicker = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwChange = createEvent(this, "fwChange", 7);
    this.fwBlur = createEvent(this, "fwBlur", 7);
    this.fwDateInput = createEvent(this, "fwDateInput", 7);
    this.firstFocusElement = null;
    this.lastFocusElement = null;
    this.hasHintTextSlot = false;
    this.hasWarningTextSlot = false;
    this.hasErrorTextSlot = false;
    this.timeValue = '';
    this.dateFormat = '';
    /**
     *   Type of date selection enabled for the calendar. If the value is range, a user can select a date range in the calendar.
     */
    this.mode = 'single date';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    //({ keyName: 'datepicker.update' })
    this.updateText = '';
    //@i18n({ keyName: 'datepicker.cancel' })
    this.cancelText = '';
    /**
     * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Theme based on which the input of the datepicker is styled.
     */
    this.state = 'normal';
    /**
     * Minimum year that needs to be displayed in the year dropdown.
     */
    this.minYear = 1970;
    /**
     * Maximum year that needs to be displayed in the year dropdown.
     */
    this.maxYear = new Date().getFullYear();
    /**
     * Make the input box as readonly. Default `false`
     */
    this.readonly = false;
    /**
     * Make the datepicker box as disabled. Default `false`
     */
    this.disabled = false;
    /**
     * Indicates if footer needs to be shown. Default `true`.
     */
    this.showFooter = true;
    /**
     * Displays a clear icon in the text box. Clicking the icon clears the value. Default `false`
     */
    this.clearInput = false;
    /**
     * Hint text displayed below the text box.
     */
    this.hintText = '';
    /**
     * Warning text displayed below the text box.
     */
    this.warningText = '';
    /**
     * Error text displayed below the text box.
     */
    this.errorText = '';
    /**
     * Label displayed on the interface, for the component.
     */
    this.label = '';
    /**
     * Whether the time-picker should be shown in the date-picker. Supports single date picker only.
     */
    this.showTimePicker = false;
    /**
     * The props for the time picker. Refer the fw-timepicker for valid format.
     */
    this.timeProps = {};
    /**
     * Debounce timer for date input.
     */
    this.debounceTimer = 800;
    /**
     * Displays alert icon and tooltip when user inputs an invalid date in the textbox. Default value is true.
     */
    this.showErrorOnInvalidDate = true;
    /**
     * To make the datepicker occupy full width of the container. Default value is false.
     */
    this.fullWidth = false;
    /**
     * Option to prevent the tooltip from being clipped when the component is placed inside a container with
     * `overflow: auto|hidden|scroll`.
     */
    this.hoistTooltip = true;
    this.escapeHandler = null;
    this.isDisplayFormatSet = false;
    this.isPlaceholderSet = false;
    this.isNextMonthRestricted = false;
    this.isPrevMonthRestricted = false;
    this.isDateInvalid = false;
    this.initState = this.state;
    this.isDateWithinMinDate = true;
    this.isDateWithinMaxDate = true;
    this.handleInputChangeWithDebounce = debounce((e, target) => {
      e.stopImmediatePropagation();
      this.emitEvent(e, target[0].value);
      this.fwDateInput.emit({
        event: e,
        name: this.name,
        value: target[0].value,
      });
      if (this.mode === 'range') {
        // Range input
        const val = target[0].value;
        if (!val) {
          this.value = undefined;
        }
        this.processRangeValueChange(val);
      }
      else {
        // Single Date input
        const val = target[0].value;
        if (!val) {
          this.value = undefined;
        }
        this.processValueChange(val);
      }
    }, this, this.debounceTimer);
    this.getSupportedYears = () => {
      const yearsArr = [];
      if (+this.maxYear < +this.minYear)
        this.maxYear = +this.minYear;
      let year = +this.minYear;
      while (year <= +this.maxYear) {
        yearsArr.push(year.toString());
        year++;
      }
      return yearsArr;
    };
    this.setTimepickerDate = () => {
      try {
        const date = format(new Date(this.year, this.month, this.selectedDay), this.dateFormat, {
          locale: this.langModule,
        });
        this.timepickerDate = date !== null && date !== void 0 ? date : '';
      }
      catch (error) {
        return '';
      }
    };
    this.isValidDateTime = () => {
      const dateNodes = this.host.shadowRoot.querySelectorAll('.c-day-container');
      // To check if user has selected any date and clicked update, since this.selectedDay will be set if any previous date value already exists.
      const isDateSelected = (dateNodes === null || dateNodes === void 0 ? void 0 : dateNodes.length) > 0 &&
        Object.values(dateNodes).some((node) => {
          return node.classList.contains('highlight-blue');
        });
      if (this.showTimePicker) {
        return !!(isDateSelected && this.selectedDay && this.timeValue);
      }
      if (this.clickedDateValue || this.value) {
        const parsedDate = parse(this.clickedDateValue || this.value || this.formatDateTime(), this.displayFormat, new Date(), {
          locale: this.langModule,
        }).valueOf();
        return (this.selectedDay &&
          isDateSelected &&
          this.isDateWithinMinMaxDate(parsedDate));
      }
      return this.selectedDay;
    };
    this.formatDateTime = () => {
      if (this.showTimePicker) {
        if (!this.timeValue)
          return;
        const [hour, minute] = this.timeValue.split(':');
        return format(new Date(this.year, this.month, this.selectedDay, parseInt(hour), parseInt(minute)), this.displayFormat, {
          locale: this.langModule,
        });
      }
      return format(new Date(this.year, this.month, this.selectedDay), this.displayFormat, {
        locale: this.langModule,
      });
    };
    this.getDayDetails = (args) => {
      const date = args.index - args.firstDay;
      const day = args.index % 7;
      let prevMonth = args.month - 1;
      let prevYear = Number(args.year);
      if (prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
      }
      const prevMonthNumberOfDays = getDaysInMonth(new Date(prevYear, prevMonth)) || 0;
      const _date = (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
      const month = this._getValidDateInMonth(date, args);
      const timestamp = new Date(args.year, args.month, _date).valueOf();
      return { date: _date, day, month, timestamp };
    };
    this.getMonthDetails = (year, month) => {
      const firstDay = new Date(year, month).getDay();
      const numberOfDays = getDaysInMonth(new Date(year, month)) || 0;
      const monthArray = [];
      const rows = 6;
      let currentDay;
      let index = 0;
      const cols = 7;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          currentDay = this.getDayDetails({
            index,
            numberOfDays,
            firstDay,
            year,
            month,
          });
          monthArray.push(currentDay);
          index++;
        }
      }
      return monthArray;
    };
    this.setMonth = (offset) => {
      if ((offset === 1 && this.isNextMonthRestricted) ||
        (offset === -1 && this.isPrevMonthRestricted))
        return;
      let year = Number(this.year);
      let month = this.month + offset;
      if (month === -1) {
        month = 11;
        year--;
      }
      else if (month === 12) {
        month = 0;
        year++;
      }
      this.year = year.toString();
      this.month = month;
      this.toMonth = this.month === 11 ? 0 : this.month + 1;
      this.toYear =
        this.toMonth === 0 ? this.yearCalculation(this.year, 1) : this.year;
      this.monthDetails = this.getMonthDetails(year, month);
      this.nextMonthDetails =
        this.month === 11
          ? this.getMonthDetails(this.yearCalculation(this.year, 1), 0)
          : this.getMonthDetails(this.year, this.month + 1);
      this.checkYearRestriction();
    };
    this.isCurrentDay = (day) => {
      return day.timestamp === this.todayTimestamp;
    };
    this.isSelectedDay = ({ date, timestamp }) => {
      if (this.mode !== 'range') {
        const parsedDate = parse(this.clickedDateValue || this.value, this.displayFormat, new Date(), {
          locale: this.langModule,
        });
        const isValidDate = isValid(parsedDate);
        return isValidDate
          ? date === this.selectedDay &&
            getMonth(parsedDate) === getMonth(timestamp) &&
            getYear(parsedDate) === getYear(timestamp)
          : date === this.selectedDay;
      }
      return timestamp === this.startDate || timestamp === this.endDate;
    };
    this.handleDateHover = (day) => {
      if (this.startDate && !this.endDate) {
        if (this.startDate > day.timestamp) {
          this.endDate = this.startDate;
          this.startDate = undefined;
        }
        this.dateHovered = day.timestamp;
      }
      else if (!this.startDate && this.endDate) {
        if (this.endDate < day.timestamp) {
          this.startDate = this.endDate;
          this.endDate = undefined;
        }
        this.dateHovered = day.timestamp;
      }
    };
    this.isInRange = ({ timestamp }) => {
      const { endDate } = this;
      const { startDate } = this;
      if (startDate === endDate)
        return;
      return (startDate && endDate && timestamp >= startDate && timestamp <= endDate);
    };
    this.onDateClick = (e, { date, timestamp }) => {
      if (this.showSingleDatePicker()) {
        this.selectedDay = date;
        this.clickedDateValue = this.formatDateTime();
        this.showTimePicker && this.setTimepickerDate();
        if (!this.showFooter) {
          if (this.showTimePicker)
            this.timeValue = this.selectedTime;
          this.updateValueAndEmitEvent(e);
          this.showDatePicker = false;
          this.host.shadowRoot.querySelector('fw-popover').hide();
        }
      }
      else if (this.showDateRangePicker()) {
        this.handleRangeSelection(timestamp);
        if (!this.showFooter) {
          if (this.startDate && this.endDate) {
            this.updateValueAndEmitEvent(e);
            this.showDatePicker = false;
            this.host.shadowRoot.querySelector('fw-popover').hide();
          }
        }
        this.dateHovered = '';
      }
    };
    this.handleInputClear = (e) => {
      this.clearInputValue();
      this.emitEvent(e, undefined);
    };
    // handle cancel and popover close
    this.handlePopoverClose = (e) => {
      var _a, _b;
      if (['FW-SELECT', 'FW-TIMEPICKER'].includes((_a = e.target) === null || _a === void 0 ? void 0 : _a.tagName))
        return;
      if (this.mode === 'range') {
        // handle resetting of startDate and endDate on clicking cancel
        if (this.value && !this.isDateInvalid) {
          let [fromDateStr, toDateStr] = ((_b = this.value) === null || _b === void 0 ? void 0 : _b.split(TranslationController.t('datepicker.to'))) || [];
          fromDateStr = fromDateStr === null || fromDateStr === void 0 ? void 0 : fromDateStr.trim();
          toDateStr = toDateStr === null || toDateStr === void 0 ? void 0 : toDateStr.trim();
          const parsedFromDate = parse(fromDateStr, this.displayFormat, new Date(), {
            locale: this.langModule,
          }).valueOf();
          const parsedToDate = parse(toDateStr, this.displayFormat, new Date(), {
            locale: this.langModule,
          }).valueOf();
          if (this.startDate !== parsedFromDate) {
            this.startDate = parsedFromDate;
          }
          if (this.endDate !== parsedToDate) {
            this.endDate = parsedToDate;
          }
        }
        else if ((!this.startDate && !this.endDate) || this.isDateInvalid) {
          this.startDate = this.endDate = undefined;
        }
      }
      else {
        // handle resetting of selectedDay on clicking cancel
        if (this.value) {
          this.clickedDateValue = this.value;
          const parsedDate = parse(this.value, this.displayFormat, new Date(), {
            locale: this.langModule,
          });
          const date = getDate(parsedDate);
          if (!this.isDateInvalid) {
            if (this.selectedDay !== date)
              this.selectedDay = date;
          }
          else {
            this.selectedDay = this.clickedDateValue = undefined;
          }
          if (this.showTimePicker) {
            this.timeValue = format(getTime(new Date(this.value)), 'HH:mm', {
              locale: this.langModule,
            });
            this.timepickerDate = format(new Date(this.value), this.dateFormat, {
              locale: this.langModule,
            });
          }
        }
        else {
          this.selectedDay = undefined;
          if (this.showTimePicker) {
            this.timepickerDate = undefined;
            this.timeValue = '';
          }
        }
        if (this.timeValue) {
          if (this.selectedTime !== this.timeValue) {
            this.selectedTime = this.timeValue;
          }
        }
        else
          this.selectedTime = this.timepickerDate = undefined;
      }
    };
    this.onBlur = async (e) => {
      var _a, _b, _c, _d;
      e.stopImmediatePropagation();
      if (((_d = (_c = (_b = (_a = e) === null || _a === void 0 ? void 0 : _a.detail) === null || _b === void 0 ? void 0 : _b.event) === null || _c === void 0 ? void 0 : _c.relatedTarget) === null || _d === void 0 ? void 0 : _d.tagName) !== 'SPAN') {
        this.fwBlur.emit({
          event: e,
          name: this.name,
        });
      }
    };
  }
  makeDatePickerInert() {
    if (!this.madeInert) {
      /**
       * Focus trapping inside datepicker.
       */
      const focusableElements = getFocusableChildren(this.host);
      if (focusableElements.length) {
        this.firstFocusElement = focusableElements[0];
        this.lastFocusElement = focusableElements[focusableElements.length - 1];
        this.lastFocusElement.addEventListener('keydown', (e) => {
          !e.shiftKey &&
            e.keyCode === 9 &&
            this.focusElement(this.firstFocusElement);
        });
        this.firstFocusElement.addEventListener('keydown', (e) => {
          e.shiftKey &&
            e.keyCode === 9 &&
            this.focusElement(this.lastFocusElement);
        });
      }
      if (this.firstFocusElement) {
        this.focusElement(this.firstFocusElement);
      }
      this.madeInert = true;
    }
    this.escapeHandler = ((e) => {
      if (e.keyCode === 27) {
        this.showDatePicker = false;
        this.host.shadowRoot.querySelector('fw-popover').hide();
      }
    }).bind(this);
    document.addEventListener('keydown', this.escapeHandler);
  }
  emitEvent(event, eventDetails) {
    this.fwChange.emit({
      event: event,
      name: this.name,
      value: eventDetails,
    });
  }
  focusElement(element) {
    element.focus();
  }
  connectedCallback() {
    addRTL(this.host);
  }
  disconnectedCallback() {
    var _a;
    document.removeEventListener('keydown', this.escapeHandler);
    (_a = this.langChangRemoveListener) === null || _a === void 0 ? void 0 : _a.call(this);
  }
  formatDate(value) {
    if (!value)
      return value;
    return this.displayFormat
      ? formatISO(parse(value, this.displayFormat, new Date(), {
        locale: this.langModule,
      }))
      : formatISO(new Date(value));
  }
  /**
   * Returns the date value in ISO format.
   */
  async getValue() {
    if (this.mode === 'range') {
      return {
        fromDate: (this.startDate &&
          formatISO(parse(format(new Date(this.startDate), this.displayFormat, {
            locale: this.langModule,
          }), this.displayFormat, new Date(), {
            locale: this.langModule,
          }))) ||
          undefined,
        toDate: (this.endDate &&
          formatISO(parse(format(new Date(this.endDate), this.displayFormat, {
            locale: this.langModule,
          }), this.displayFormat, new Date(), {
            locale: this.langModule,
          }))) ||
          undefined,
      };
    }
    return ((this.value &&
      formatISO(parse(this.value, this.displayFormat, new Date(), {
        locale: this.langModule,
      }))) ||
      undefined);
  }
  /**
   * Sets focus on a specific `fw-datepicker`. Use this method instead of the global `input.focus()`.
   */
  async setFocus() {
    var _a, _b;
    if (this.nativeInput) {
      (_b = (_a = this.nativeInput).setFocus) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
  }
  /**
   * Clears the input value and unselects selected date.
   */
  async clearValue() {
    this.clearInputValue();
  }
  handleKeyDown(event) {
    switch (event.code) {
      case 'Enter':
        this.host.shadowRoot.querySelector('fw-popover').show();
        break;
      case 'ArrowDown':
        event.preventDefault();
    }
    this.makeDatePickerInert();
  }
  displayDatePicker() {
    this.showDatePicker = true;
  }
  handleButtonClick(e) {
    const target = e.composedPath()[0];
    const isUpdateRange = target.classList.value.includes('update-range-value');
    const isUpdateDate = target.classList.value.includes('update-date-value');
    const cancelText = this.cancelText || TranslationController.t('datepicker.cancel');
    const updateText = this.updateText || TranslationController.t('datepicker.update');
    if (isUpdateRange) {
      if (this.startDate && this.endDate) {
        this.updateValueAndEmitEvent(e);
      }
    }
    else if (isUpdateDate) {
      this.timeValue = this.selectedTime;
      if (this.isValidDateTime()) {
        this.setDateAndErrorState();
        this.updateValueAndEmitEvent(e);
      }
    }
    if (target.innerText === cancelText && !this.value) {
      if (this.mode === 'range') {
        this.startDate = this.endDate = undefined;
      }
      else {
        this.selectedDay = undefined;
      }
    }
    if (target.innerText === cancelText) {
      this.handlePopoverClose(e);
    }
    // Close datepicker only for fwClick event of Update and cancel buttons. Since this will
    // be triggered for month and year select dropdown as well the below check is added.
    if (target.innerText === updateText || target.innerText === cancelText) {
      this.showDatePicker = false;
      this.host.shadowRoot.querySelector('fw-popover').hide();
    }
  }
  /**
   * Listener to handle input changes
   */
  handleInputChanges(e) {
    const target = e.composedPath();
    this.handleInputChangeWithDebounce(e, target);
  }
  /**
   * Listener to handle Month Year dropdown.
   */
  handleMonthYearDropDownSelection(e) {
    if (e.composedPath()[0].tagName !== 'FW-DATEPICKER') {
      e.stopImmediatePropagation();
    }
    const newValue = e.detail && e.detail.value;
    if (!newValue) {
      return;
    }
    if (this.mode === 'range') {
      this.handleDateRangeDropDownUpdate(e, newValue);
      this.nextMonthDetails = this.getMonthDetails(this.toYear, this.toMonth);
    }
    else {
      this.handleSingleDateDropDownUpdate(e, newValue);
    }
    this.monthDetails = this.getMonthDetails(this.year, this.month);
  }
  handleSingleDateDropDownUpdate(e, newValue) {
    const isMonthUpdate = e
      .composedPath()[0]
      .classList.value.includes('single-month-selector');
    const isYearUpdate = e
      .composedPath()[0]
      .classList.value.includes('single-year-selector');
    const isTimeUpdate = e.composedPath()[0].tagName === 'FW-TIMEPICKER';
    if (isMonthUpdate) {
      this.month = this.shortMonthNames.indexOf(newValue);
    }
    else if (isYearUpdate) {
      this.year = newValue;
    }
    else if (isTimeUpdate) {
      this.timeValue = this.selectedTime = newValue;
    }
    this.checkYearRestriction();
  }
  handleDateRangeDropDownUpdate(e, newValue) {
    const isFromMonthUpdate = e
      .composedPath()[0]
      .classList.value.includes('from-month-selector');
    const isFromYearUpdate = e
      .composedPath()[0]
      .classList.value.includes('from-year-selector');
    const isToMonthUpdate = e
      .composedPath()[0]
      .classList.value.includes('to-month-selector');
    const isToYearUpdate = e
      .composedPath()[0]
      .classList.value.includes('to-year-selector');
    if (isFromMonthUpdate) {
      this.month = this.shortMonthNames.indexOf(newValue);
      if (this.month === 11) {
        this.toMonth = 0;
        this.toYear = this.yearCalculation(this.year, 1);
      }
      else {
        this.toMonth = this.month + 1;
      }
    }
    else if (isFromYearUpdate) {
      this.year = newValue;
      this.toYear =
        this.month === 11 ? this.yearCalculation(this.year, 1) : this.year;
    }
    else if (isToMonthUpdate) {
      this.toMonth = this.shortMonthNames.indexOf(newValue);
      if (this.toMonth === 0) {
        this.month = 11;
        this.year = this.yearCalculation(this.toYear, -1);
      }
      else {
        this.month = this.toMonth - 1;
      }
    }
    else if (isToYearUpdate) {
      this.toYear = newValue;
      this.year =
        this.toMonth === 0
          ? this.yearCalculation(this.toYear, -1)
          : this.toYear;
    }
  }
  yearCalculation(year, offset) {
    const resultYear = Number(year) + offset;
    return resultYear.toString();
  }
  getFormatFromLocale() {
    var _a, _b;
    this.dateFormat = (_b = (_a = this.langModule) === null || _a === void 0 ? void 0 : _a.formatLong) === null || _b === void 0 ? void 0 : _b.date({ width: 'short' });
    return this.showTimePicker
      ? `${this.dateFormat} ${this.timeFormat}`
      : this.dateFormat;
  }
  async handleLocaleChange(newLocale) {
    this.langModule = await TranslationController.getDateLangModule(newLocale);
  }
  handleMinDateChange() {
    this.monthDetails = this.getMonthDetails(this.year, this.month);
    this.mode === 'range' &&
      (this.nextMonthDetails = this.getMonthDetails(this.toYear, this.toMonth));
  }
  handleMaxDateChange() {
    this.monthDetails = this.getMonthDetails(this.year, this.month);
    this.mode === 'range' &&
      (this.nextMonthDetails = this.getMonthDetails(this.toYear, this.toMonth));
  }
  handleUserTimeZoneOffset(date) {
    return (new Date(date).valueOf() + new Date(date).getTimezoneOffset() * 60 * 1000);
  }
  async componentWillLoad() {
    var _a, _b, _c;
    if (this.mode === 'range' && this.showTimePicker) {
      throw Error('Time picker not supported in Date Range');
    }
    this.langModule = await TranslationController.getDateLangModule(this.locale);
    this.timeFormat || (this.timeFormat = (_b = (_a = this.langModule) === null || _a === void 0 ? void 0 : _a.formatLong) === null || _b === void 0 ? void 0 : _b.time({
      width: 'short',
    }));
    if (this.displayFormat) {
      this.isDisplayFormatSet = true;
      this.dateFormat = this.displayFormat;
      this.displayFormat = this.showTimePicker
        ? `${this.displayFormat} ${this.timeFormat}`
        : this.displayFormat;
    }
    if (this.placeholder) {
      this.isPlaceholderSet = true;
    }
    this.checkSlotContent();
    this.displayFormat = this.displayFormat || this.getFormatFromLocale();
    this.placeholder = this.placeholder || this.displayFormat;
    const onChange = TranslationController.onChange.bind(TranslationController);
    this.langChangRemoveListener = onChange('lang', async (locale) => {
      var _a, _b;
      this.langModule = await TranslationController.getDateLangModule(locale);
      this.displayFormat = this.isDisplayFormatSet
        ? this.displayFormat
        : (_b = (_a = this.langModule) === null || _a === void 0 ? void 0 : _a.formatLong) === null || _b === void 0 ? void 0 : _b.date({ width: 'short' });
      this.placeholder = this.isPlaceholderSet
        ? this.placeholder
        : this.displayFormat;
      if (this.mode === 'range')
        this.placeholder = this.isPlaceholderSet
          ? this.placeholder
          : `${this.displayFormat} ${TranslationController.t('datepicker.to')} ${this.displayFormat}`;
      const monthNames = getMonthNames(this.langModule);
      this.shortMonthNames = monthNames.shortMonthNames;
      this.longMonthNames = monthNames.longMonthNames;
      this.weekDays = getWeekDays(this.langModule);
    });
    if (this.mode === 'range') {
      const today = new Date();
      let [fromDate, toDate] = ((_c = this.value) === null || _c === void 0 ? void 0 : _c.split(TranslationController.t('datepicker.to'))) || [];
      fromDate = fromDate === null || fromDate === void 0 ? void 0 : fromDate.trim();
      toDate = toDate === null || toDate === void 0 ? void 0 : toDate.trim();
      if (isValid(parseISO(fromDate)) && isValid(parseISO(toDate))) {
        this.fromDate = fromDate;
        this.toDate = toDate;
      }
      if ((this.fromDate && !isValid(parseISO(this.fromDate))) ||
        (this.toDate && !isValid(parseISO(this.toDate)))) {
        // Show current month and year if invalid date is provided
        this.year = getYear(today);
        this.month = getMonth(today);
      }
      else {
        const fromDate = new Date(this.handleUserTimeZoneOffset(this.fromDate));
        this.year = this.fromDate ? getYear(fromDate) : getYear(today);
        this.month = this.fromDate ? getMonth(fromDate) : getMonth(today);
      }
    }
    else {
      this.processInitDateValue();
    }
    this.setMinMaxYearAndDateValues();
    this.toMonth = this.month === 11 ? 0 : this.month + 1;
    this.toYear =
      this.toMonth === 0 ? this.yearCalculation(this.year, 1) : this.year;
    this.monthDetails = this.getMonthDetails(this.year, this.month);
    this.todayTimestamp = startOfDay(new Date()).valueOf();
    const monthNames = getMonthNames(this.langModule);
    this.shortMonthNames = monthNames.shortMonthNames;
    this.longMonthNames = monthNames.longMonthNames;
    this.weekDays = getWeekDays(this.langModule);
    if (this.value && this.mode !== 'range') {
      this.setDateAndErrorState(true);
      const utcTimeRegex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})[+-](\d{2}):(\d{2})/;
      this.value =
        this.showTimePicker || utcTimeRegex.test(this.value)
          ? format(new Date(this.value), this.displayFormat, {
            locale: this.langModule,
          })
          : format(new Date(this.handleUserTimeZoneOffset(this.value)), this.displayFormat, {
            locale: this.langModule,
          });
    }
    this.showTimePicker && this.setTimepickerDate();
    this.setInitialValues();
    this.checkYearRestriction();
  }
  setInitialValues() {
    this.nextMonthDetails =
      this.month === 11
        ? this.getMonthDetails(this.yearCalculation(this.year, 1), 0)
        : this.getMonthDetails(this.year, this.month + 1);
    if (this.mode === 'range')
      this.placeholder = this.isPlaceholderSet
        ? this.placeholder
        : `${this.displayFormat} ${TranslationController.t('datepicker.to')} ${this.displayFormat}`;
    this.supportedYears = this.getSupportedYears();
    this.startDate =
      this.fromDate !== undefined
        ? parseISO(this.fromDate).valueOf()
        : undefined;
    this.endDate =
      this.toDate !== undefined ? parseISO(this.toDate).valueOf() : undefined;
    if (this.mode === 'range') {
      if (this.startDate && this.endDate) {
        const formattedFromDate = format(new Date(this.startDate), this.displayFormat, {
          locale: this.langModule,
        });
        const formattedToDate = format(new Date(this.endDate), this.displayFormat, {
          locale: this.langModule,
        });
        this.setDateAndErrorState();
        this.value = `${formattedFromDate} to ${formattedToDate}`;
      }
      else
        this.value = undefined;
    }
  }
  setDateAndErrorState(checkDate = false) {
    if (this.mode === 'range' && this.fromDate && this.toDate) {
      const fromDate = parse(this.fromDate, this.displayFormat, new Date(), {
        locale: this.langModule,
      }).valueOf();
      const toDate = parse(this.toDate, this.displayFormat, new Date(), {
        locale: this.langModule,
      }).valueOf();
      this.isDateInvalid = !this.isDatewithinRange(fromDate, toDate);
    }
    else if (this.mode !== 'range') {
      this.isDateInvalid =
        checkDate &&
          !this.isDateWithinMinMaxDate(parseISO(this.value).valueOf());
    }
    this.state =
      this.showErrorOnInvalidDate && this.isDateInvalid
        ? 'error'
        : this.initState;
  }
  setMinMaxYearAndDateValues() {
    if (this.minDate && this.maxDate)
      this.minDate =
        parseISO(this.minDate).valueOf() > parseISO(this.maxDate).valueOf()
          ? undefined
          : this.minDate;
    this.maxYear = this.maxDate
      ? getYear(new Date(this.handleUserTimeZoneOffset(this.maxDate)))
      : this.maxYear;
    this.minYear =
      this.maxYear > this.minYear
        ? this.minDate
          ? getYear(new Date(this.handleUserTimeZoneOffset(this.minDate)))
          : this.minYear
        : 1970;
  }
  processInitDateValue() {
    const today = new Date();
    if (!this.value) {
      this.year = getYear(today);
      this.month = getMonth(today);
    }
    else {
      if (!isValid(parseISO(this.value))) {
        // Show current date if invalid date is provided
        this.year = getYear(today);
        this.month = getMonth(today);
        this.selectedDay = getDate(today);
        this.value = undefined;
      }
      else {
        const utcTimeRegex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})[+-](\d{2}):(\d{2})/;
        const date = this.showTimePicker || utcTimeRegex.test(this.value)
          ? new Date(this.value)
          : new Date(this.handleUserTimeZoneOffset(this.value));
        this.year = getYear(date);
        this.month = getMonth(date);
        this.selectedDay = getDate(date);
        this.timeValue = format(getTime(date), 'HH:mm', {
          locale: this.langModule,
        });
        this.selectedTime = this.timeValue;
      }
    }
  }
  processRangeValueChange(val, emitChange = false) {
    let [fromDate, toDate] = (val === null || val === void 0 ? void 0 : val.split(TranslationController.t('datepicker.to'))) || [];
    fromDate = fromDate === null || fromDate === void 0 ? void 0 : fromDate.trim();
    toDate = toDate === null || toDate === void 0 ? void 0 : toDate.trim();
    const parsedFromDate = parse(fromDate, this.displayFormat, new Date(), {
      locale: this.langModule,
    });
    const parsedToDate = parse(toDate, this.displayFormat, new Date(), {
      locale: this.langModule,
    });
    const isValidFromDate = isValid(parsedFromDate);
    const isValidToDate = isValid(parsedToDate);
    const year = getYear(parse(fromDate, this.displayFormat, new Date(), {
      locale: this.langModule,
    }));
    const toYear = getYear(parse(toDate, this.displayFormat, new Date(), {
      locale: this.langModule,
    }));
    if (!isValidFromDate ||
      !isValidToDate ||
      !isMatch(fromDate, this.displayFormat, {
        locale: this.langModule,
      }) ||
      !isMatch(toDate, this.displayFormat, {
        locale: this.langModule,
      }) ||
      year < this.minYear ||
      year > this.maxYear ||
      toYear < this.minYear ||
      toYear > this.maxYear ||
      !this.isDatewithinRange(parsedFromDate.valueOf(), parsedToDate.valueOf())) {
      // Invalid date format
      this.isDateInvalid = !!val;
      this.state =
        this.showErrorOnInvalidDate && this.isDateInvalid
          ? 'error'
          : this.initState;
      this.startDate = this.endDate = undefined;
      this.fromDate = this.toDate = undefined;
      if (!emitChange)
        this.value = val;
      return;
    }
    this.year = year;
    this.fromDate = fromDate;
    this.toDate = toDate;
    const chosenFromMonth = getMonth(parse(fromDate, this.displayFormat, new Date(), {
      locale: this.langModule,
    }));
    const chosenToMonth = getMonth(parse(toDate, this.displayFormat, new Date(), {
      locale: this.langModule,
    }));
    if (chosenFromMonth === chosenToMonth && this.toMonth === chosenFromMonth) {
      this.toMonth = chosenFromMonth;
      this.month = this.toMonth - 1;
    }
    else {
      this.month = getMonth(parse(fromDate, this.displayFormat, new Date(), {
        locale: this.langModule,
      }));
      this.toMonth = this.month === 11 ? 0 : this.month + 1;
    }
    this.startDate = parse(fromDate, this.displayFormat, new Date(), {
      locale: this.langModule,
    }).valueOf();
    this.endDate = parse(toDate, this.displayFormat, new Date(), {
      locale: this.langModule,
    }).valueOf();
    this.toYear =
      this.toMonth === 0 ? this.yearCalculation(this.year, 1) : this.year;
    const formattedFromDate = format(new Date(this.startDate), this.displayFormat, {
      locale: this.langModule,
    });
    const formattedToDate = format(new Date(this.endDate), this.displayFormat, {
      locale: this.langModule,
    });
    this.value = `${formattedFromDate} to ${formattedToDate}`;
    this.isDateInvalid = false;
    this.state =
      this.showErrorOnInvalidDate && this.isDateInvalid
        ? 'error'
        : this.initState;
    emitChange &&
      this.fwChange.emit({
        value: val,
      });
  }
  processValueChange(val, emitChange = false) {
    // show error if not ISO format and not display format
    const parsedDate = parse(val, this.displayFormat, new Date(), {
      locale: this.langModule,
    });
    const year = getYear(parse(val, this.displayFormat, new Date(), {
      locale: this.langModule,
    }));
    if (year < this.minYear ||
      year > this.maxYear ||
      !isValid(parsedDate) ||
      !isMatch(val, this.displayFormat, {
        locale: this.langModule,
      }) ||
      !this.isDateWithinMinMaxDate(parsedDate.valueOf(), false)) {
      this.isDateInvalid = !!val;
      this.state =
        this.showErrorOnInvalidDate && this.isDateInvalid
          ? 'error'
          : this.initState;
      this.selectedDay = undefined;
      if (!emitChange)
        this.value = this.clickedDateValue = val;
      return;
    }
    this.year = year;
    this.month = getMonth(parse(val, this.displayFormat, new Date(), {
      locale: this.langModule,
    }));
    this.selectedDay = getDate(parse(val, this.displayFormat, new Date(), {
      locale: this.langModule,
    }));
    if (this.showTimePicker) {
      this.timeValue = format(getTime(new Date(val)), 'HH:mm', {
        locale: this.langModule,
      });
      this.selectedTime = this.timeValue;
      // set the date value in date field
      this.setTimepickerDate();
    }
    this.value = this.formatDateTime();
    this.clickedDateValue = this.value;
    this.setDateAndErrorState();
    emitChange &&
      this.fwChange.emit({
        value: val,
      });
  }
  watchValueChanged(value) {
    if (!value) {
      this.startDate = undefined;
      this.endDate = undefined;
      this.selectedDay = undefined;
      this.value = undefined;
      const date = new Date();
      this.year = getYear(date);
      this.month = getMonth(date);
      this.monthDetails = this.getMonthDetails(this.year, this.month);
      this.timepickerDate = this.selectedTime = undefined;
      this.timeValue = '';
    }
    else {
      if (this.mode !== 'range') {
        // if the value is of the ISO UTC time format, timezone offset need not be calculated
        // when datepicker is used in form component, the value will be passed to form in UTC ISO format, hence skipping.
        const utcTimeRegex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})[+-](\d{2}):(\d{2})/;
        // If ISO format, format it to display format and validate
        try {
          if (isValid(parseISO(value)))
            value =
              this.showTimePicker || utcTimeRegex.test(value)
                ? format(new Date(value), this.displayFormat, {
                  locale: this.langModule,
                })
                : format(new Date(this.handleUserTimeZoneOffset(value)), this.displayFormat, {
                  locale: this.langModule,
                });
          this.processValueChange(value, true);
          this.checkYearRestriction();
        }
        catch (e) {
          console.log('Invalid date provided !', e);
        }
      }
      else {
        try {
          // If ISO format, format it to display format and validate
          let [fromDate, toDate] = (value === null || value === void 0 ? void 0 : value.split(TranslationController.t('datepicker.to'))) || [];
          fromDate = fromDate === null || fromDate === void 0 ? void 0 : fromDate.trim();
          toDate = toDate === null || toDate === void 0 ? void 0 : toDate.trim();
          if (isValid(parseISO(fromDate)) && isValid(parseISO(toDate))) {
            this.fromDate = fromDate;
            this.toDate = toDate;
            fromDate = format(new Date(this.handleUserTimeZoneOffset(this.fromDate)), this.displayFormat, {
              locale: this.langModule,
            });
            toDate = format(new Date(this.handleUserTimeZoneOffset(this.toDate)), this.displayFormat, {
              locale: this.langModule,
            });
            value = `${fromDate} to ${toDate}`;
          }
          this.processRangeValueChange(value, true);
        }
        catch (e) {
          console.log('Invalid date provided !', e);
        }
      }
    }
  }
  _getValidDateInMonth(date, args) {
    if (date < 0 || args.year > this.maxYear || this.minYear > args.year) {
      return -1;
    }
    if (this.minDate !== undefined && this.maxDate !== undefined) {
      const minDate = parseISO(this.minDate);
      const maxDate = parseISO(this.maxDate);
      if (!isValid(minDate) || !isValid(maxDate)) {
        // Invalid minDate or maxDate provided.
        return;
      }
      const argDate = new Date(args.year, args.month, date + 1);
      const isValidDate = minDate.valueOf() <= argDate.valueOf() &&
        argDate.valueOf() <= maxDate.valueOf();
      return !isValidDate ? -1 : date >= args.numberOfDays ? 1 : 0;
    }
    else if (this.minDate !== undefined) {
      const minDate = parseISO(this.minDate);
      if (!isValid(minDate)) {
        // Invalid minDate provided.
        return;
      }
      const argDate = new Date(args.year, args.month, date + 1);
      const isValidDate = minDate.valueOf() <= argDate.valueOf();
      return !isValidDate ? -1 : date >= args.numberOfDays ? 1 : 0;
    }
    else if (this.maxDate !== undefined) {
      const maxDate = parseISO(this.maxDate);
      if (!isValid(maxDate)) {
        // Invalid minDate or maxDate provided.
        return;
      }
      const argDate = new Date(args.year, args.month, date + 1);
      const isValidDate = maxDate.valueOf() >= argDate.valueOf();
      return !isValidDate ? -1 : date >= args.numberOfDays ? 1 : 0;
    }
    return date >= args.numberOfDays ? 1 : 0;
  }
  isDateWithinMinMaxDate(date, checkYear = true) {
    this.isDateWithinMaxDate =
      this.maxDate && !(date <= parseISO(this.maxDate).valueOf())
        ? false
        : true;
    this.isDateWithinMinDate =
      this.minDate && !(parseISO(this.minDate).valueOf() <= date)
        ? false
        : true;
    if (checkYear)
      return (this.isDateWithinMaxDate &&
        this.isDateWithinMinDate &&
        this.year <= this.maxYear &&
        this.minYear <= this.year);
    else
      return this.isDateWithinMaxDate && this.isDateWithinMinDate;
  }
  isDatewithinRange(fromDate, toDate) {
    if (this.minDate && !this.maxDate)
      return (parseISO(this.minDate).valueOf() <= toDate &&
        parseISO(this.minDate).valueOf() <= fromDate &&
        fromDate <= toDate);
    if (this.maxDate && !this.minDate)
      return (toDate <= parseISO(this.maxDate).valueOf() &&
        fromDate <= parseISO(this.maxDate).valueOf() &&
        fromDate <= toDate);
    if (this.maxDate && this.minDate)
      return (toDate <= parseISO(this.maxDate).valueOf() &&
        parseISO(this.minDate).valueOf() <= fromDate &&
        fromDate <= toDate);
    else
      return fromDate <= toDate;
  }
  checkYearRestriction() {
    this.isNextMonthRestricted =
      Number(this.year) >= this.maxYear && this.month === 11 ? true : false;
    this.isPrevMonthRestricted =
      Number(this.year) <= this.minYear && this.month === 0 ? true : false;
  }
  handleKeyUp(e, day) {
    if (e.code === 'Enter') {
      if (e
        .composedPath()
        .find((e) => e.classList && e.classList.value === 'mdp-range-container')) {
        // Range Container
        this.onDateClick(e, day);
        if (this.startDate && this.endDate) {
          this.startDateFormatted = format(new Date(this.startDate), this.displayFormat, {
            locale: this.langModule,
          });
          this.endDateFormatted = format(new Date(this.endDate), this.displayFormat, {
            locale: this.langModule,
          });
          this.value = this.startDateFormatted + ' to ' + this.endDateFormatted;
          this.emitEvent(e, {
            fromDate: this.formatDate(this.startDateFormatted),
            toDate: this.formatDate(this.endDateFormatted),
          });
          this.showDatePicker = false;
          this.host.shadowRoot.querySelector('fw-popover').hide();
        }
      }
      else {
        // Single Date Container
        this.onDateClick(e, day);
        this.value = format(new Date(this.year, this.month, this.selectedDay), this.displayFormat, {
          locale: this.langModule,
        });
        this.emitEvent(e, this.formatDate(this.value));
        this.showDatePicker = false;
        this.host.shadowRoot.querySelector('fw-popover').hide();
      }
    }
  }
  isHoverInRange({ timestamp }) {
    const { startDate, endDate, dateHovered } = this;
    const startDateCondtion = startDate &&
      dateHovered &&
      timestamp <= dateHovered &&
      timestamp >= startDate;
    const endDateCondition = endDate &&
      dateHovered &&
      timestamp >= dateHovered &&
      timestamp <= endDate;
    return startDateCondtion || endDateCondition;
  }
  updateValueAndEmitEvent(e) {
    if (this.showSingleDatePicker()) {
      this.value = this.formatDateTime();
      this.showTimePicker && this.setTimepickerDate();
      this.emitEvent(e, this.formatDate(this.value));
    }
    else if (this.showDateRangePicker()) {
      this.startDateFormatted = format(this.startDate, this.displayFormat, {
        locale: this.langModule,
      });
      this.endDateFormatted = format(this.endDate, this.displayFormat, {
        locale: this.langModule,
      });
      this.fromDate = this.startDateFormatted;
      this.toDate = this.endDateFormatted;
      this.value = this.startDateFormatted + ' to ' + this.endDateFormatted;
      this.emitEvent(e, {
        fromDate: this.formatDate(this.startDateFormatted),
        toDate: this.formatDate(this.endDateFormatted),
      });
    }
  }
  clearInputValue() {
    if (this.mode !== 'range') {
      if (this.selectedDay) {
        this.selectedDay = undefined;
      }
    }
    else {
      if (this.startDate && this.endDate) {
        this.startDate = this.endDate = undefined;
      }
    }
    this.value = undefined;
    this.isDateInvalid = false;
    this.state = this.initState;
  }
  renderInvalidAlert() {
    return (h("div", { class: 'invalid-alert', slot: 'input-suffix' }, h("fw-tooltip", { distance: '13', content: this.tooltipErrorText ||
        TranslationController.t('datepicker.tooltipError'), hoist: this.hoistTooltip }, h("fw-icon", { name: 'alert', size: 14, color: '#d72d30' }))));
  }
  handleRangeSelection(timestamp) {
    if (this.startDate && this.endDate) {
      this.endDate = undefined;
      this.startDate = timestamp;
    }
    else if (this.startDate && !this.endDate) {
      if (timestamp >= this.startDate) {
        this.endDate = timestamp;
      }
      else if (timestamp < this.startDate) {
        this.endDate = this.startDate;
        this.startDate = timestamp;
      }
    }
    else if (!this.startDate && this.endDate) {
      this.startDate = timestamp;
    }
    else if (!this.startDate && !this.endDate) {
      this.startDate = timestamp;
    }
  }
  getCellStyle(day) {
    let cellStyle = 'c-day-container';
    if (day.month !== 0) {
      cellStyle += ' disabled';
    }
    if (this.isCurrentDay(day)) {
      cellStyle += ' highlight';
    }
    if (this.isSelectedDay(day)) {
      cellStyle += ' highlight-blue';
    }
    if (this.startDate && this.endDate && this.isInRange(day)) {
      cellStyle += ' highlight-range';
    }
    if (((this.startDate && !this.endDate) ||
      (!this.startDate && this.endDate)) &&
      this.isHoverInRange(day)) {
      cellStyle += ' highlight-range';
    }
    if (day.timestamp === this.startDate) {
      cellStyle += ' start-day';
    }
    if (day.timestamp === this.endDate) {
      cellStyle += ' end-day';
    }
    if (this.startDate &&
      this.dateHovered < this.startDate &&
      day.timestamp === this.dateHovered) {
      cellStyle += ' start-day';
    }
    else if (this.endDate &&
      this.dateHovered < this.endDate &&
      day.timestamp === this.dateHovered) {
      cellStyle += ' start-day';
    }
    else if (this.startDate &&
      this.dateHovered > this.startDate &&
      day.timestamp === this.dateHovered) {
      cellStyle += ' end-day';
    }
    return cellStyle;
  }
  renderCalendar(monthDetails) {
    const days = monthDetails.map((day, index) => {
      return (h("div", { class: this.getCellStyle(day), key: index }, h("div", { class: 'cdc-day' }, h("span", { role: 'button', tabindex: day.month === -1 || day.month === 1 ? '-1' : '0', onClick: (e) => this.onDateClick(e, day), onMouseOver: () => this.handleDateHover(day), onFocus: () => this.handleDateHover(day), onKeyDown: handleKeyDown(() => this.handleDateHover(day)), onKeyUp: (e) => this.handleKeyUp(e, day) }, day.date))));
    });
    return (h("div", { class: 'c-container' }, h("div", { class: 'cc-head' }, this.weekDays.map((day, index) => (h("div", { key: index, class: 'cch-name' }, day)))), h("div", { class: 'cc-body' }, days)));
  }
  showSingleDatePicker() {
    return this.showDatePicker && this.mode !== 'range';
  }
  showDateRangePicker() {
    return this.showDatePicker && this.mode === 'range';
  }
  checkSlotContent() {
    this.hasHintTextSlot = hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
  }
  renderNavButtons() {
    return (h("div", { class: 'btns' }, h("div", { class: 'mdpch-button' }, h("div", { role: 'button', tabindex: '0', class: `mdpchb-inner ${this.isPrevMonthRestricted && 'disabled'}`, onClick: () => this.setMonth(-1), onKeyDown: handleKeyDown(() => this.setMonth(-1)) }, h("span", { class: 'mdpchbi-left-arrow' }))), h("div", { class: 'mdpch-button-right' }, h("div", { role: 'button', tabindex: '0', class: `mdpchb-inner ${this.isNextMonthRestricted && 'disabled'}`, onClick: () => this.setMonth(1), onKeyDown: handleKeyDown(() => this.setMonth(1)) }, h("span", { class: 'mdpchbi-right-arrow' })))));
  }
  renderSupportedYears(chosenYear) {
    // The if/else block adds the year value to the year dropdown if its not present, i.e for invalid dates, we will add and remove it once the user moves to a valid month calendar
    // this is to overcome the issue of year dropdown select value disappearing, if the year value is not present and selected in the dropdown
    // https://github.com/freshworks/crayons/issues/826
    const isChosenYearPresent = this.supportedYears.find((year) => {
      return +year === +chosenYear;
    });
    if (!isChosenYearPresent) {
      this.supportedYears.push(chosenYear.toString());
      this.supportedYears.sort();
    }
    else {
      +this.supportedYears[this.supportedYears.length - 1] !== +this.maxYear &&
        +this.supportedYears[this.supportedYears.length - 1] !== +chosenYear &&
        this.supportedYears.pop(); // to avoid re rendering array.pop is used rather than filtering and destructuring
    }
    return this.supportedYears.map((year, i) => ({
      value: year,
      key: i,
      selected: +year === +chosenYear,
      text: year,
    }));
  }
  renderFooter() {
    return (h("div", { class: 'mdpc-footer' }, h("fw-button", { color: 'secondary', class: 'close-date-picker' }, this.cancelText || TranslationController.t('datepicker.cancel')), h("fw-button", { color: 'primary', class: this.mode === 'range' ? 'update-range-value' : 'update-date-value' }, this.updateText || TranslationController.t('datepicker.update'))));
  }
  renderTimePicker() {
    return (h("div", { class: 'time-container' }, h("div", null, h("span", null, TranslationController.t('datepicker.date')), h("fw-input", { placeholder: this.dateFormat, value: this.timepickerDate, readonly: true })), h("div", null, h("span", null, TranslationController.t('datepicker.time')), h("fw-timepicker", Object.assign({ class: 'mdc-time', sameWidth: false, locale: this.locale, caret: false, optionsPlacement: 'bottom-end', format: this.timeFormat, value: this.timeValue, allowDeselect: false }, this.timeProps)))));
  }
  render() {
    const { host, name, value } = this;
    renderHiddenField(host, name, value);
    return (h(FieldControl, { inputId: this.name, label: this.label, labelId: `${this.label}-${this.name}`, state: this.state, hintTextId: `hint-${this.name}`, hintText: this.hintText, hasHintTextSlot: this.hasHintTextSlot, errorTextId: `error-${this.name}`, errorText: this.errorText, hasErrorTextSlot: this.hasErrorTextSlot, warningTextId: `warning-${this.name}`, warningText: this.warningText, hasWarningTextSlot: this.hasWarningTextSlot, required: this.required }, h("fw-popover", { "same-width": 'false', distance: '8', placement: 'bottom-start', fallbackPlacements: ['top-start'], "hide-on-tab": 'false', onFwHide: this.handlePopoverClose, hoist: true }, h("div", { role: 'combobox', "aria-controls": 'datepicker', "aria-expanded": this.showDatePicker, tabindex: '-1', onClick: () => !this.disabled && (this.showDatePicker = true), onKeyUp: () => !this.disabled && (this.showDatePicker = true), slot: 'popover-trigger', style: {
        display: this.fullWidth ? 'block' : 'inline-flex',
        alignItems: 'center',
      } }, h("fw-input", { value: this.value, name: this.name, disabled: this.disabled, placeholder: this.placeholder, required: this.required, onFwBlur: this.onBlur, ref: (el) => (this.nativeInput = el), state: this.state, readonly: this.showTimePicker || this.readonly, clearInput: this.clearInput, onFwInputClear: this.handleInputClear, style: {
        width: this.fullWidth
          ? '100%'
          : this.mode === 'range'
            ? '235px'
            : '200px',
      } }, this.isDateInvalid &&
      this.showErrorOnInvalidDate &&
      this.renderInvalidAlert(), h("div", { class: 'icon-calendar', slot: 'input-suffix' }, h("div", { class: 'separator', style: {
        borderLeftColor: this.state === 'error' ? '#d72d30' : '#ebeff3',
      } }), h("span", { class: 'date-icon' }, h("fw-icon", { name: this.showTimePicker ? 'calendar-time' : 'calendar', style: {
        '--fw-icon-color': this.state === 'error' && '#d72d30',
      } }))))), this.showSingleDatePicker() ? (h("div", { id: 'datepicker', class: 'datepicker', slot: 'popover-content', ref: (el) => (this.popoverContentElement = el) }, this.showTimePicker && this.renderTimePicker(), h("div", { class: 'mdp-container' }, h("div", { class: 'mdpc-head' }, h("div", { class: 'mdpch-container' }, h("span", { class: 'mdpchc-month' }, h("fw-select", { class: 'first single-month-selector', value: this.shortMonthNames[this.month], "same-width": 'false', "options-placement": 'bottom-start', variant: 'button', options: this.longMonthNames.map((month, i) => ({
        value: this.shortMonthNames[i],
        key: i,
        selected: month === this.longMonthNames[this.month],
        text: month,
      })), allowDeselect: false, boundary: this.popoverContentElement })), h("span", { class: 'mdpchc-year' }, h("fw-select", { class: 'last single-year-selector', value: this.year, "same-width": 'false', "options-placement": 'bottom-start', variant: 'button', options: this.renderSupportedYears(this.year), "allow-deselect": 'false', boundary: this.popoverContentElement }))), this.renderNavButtons()), h("div", { class: 'mdpc-body' }, this.renderCalendar(this.monthDetails))), this.showFooter && this.renderFooter())) : (''), this.showDateRangePicker() ? (h("div", { id: 'datepicker', class: 'daterangepicker', slot: 'popover-content', ref: (el) => (this.popoverContentElement = el) }, h("div", { class: 'mdp-range-container' }, h("div", { class: 'mdpc-head' }, h("div", { class: 'mdpch-container' }, h("span", { class: 'mdpchc-month' }, h("fw-select", { class: 'first from-month-selector', value: this.shortMonthNames[this.month], "same-width": 'false', variant: 'button', "options-placement": 'bottom-start', options: this.longMonthNames.map((month, i) => ({
        value: this.shortMonthNames[i],
        key: i,
        selected: month === this.longMonthNames[this.month],
        text: month,
      })), allowDeselect: false, boundary: this.popoverContentElement })), h("span", { class: 'mdpchc-year' }, h("fw-select", { class: 'last from-year-selector', value: this.year, "same-width": 'false', "options-placement": 'bottom-start', variant: 'button', options: this.renderSupportedYears(this.year), "allow-deselect": 'false', boundary: this.popoverContentElement }))), h("div", { class: 'mdpch-container-right' }, h("span", { class: 'mdpchc-month' }, h("fw-select", { class: 'first to-month-selector', "same-width": 'false', variant: 'button', value: this.shortMonthNames[this.toMonth], "options-placement": 'bottom-start', options: this.longMonthNames.map((month, i) => ({
        value: this.shortMonthNames[i],
        key: i,
        selected: month === this.longMonthNames[this.toMonth],
        text: month,
      })), allowDeselect: false, boundary: this.popoverContentElement })), h("span", { class: 'mdpchc-year' }, h("fw-select", { class: 'last to-year-selector', value: this.toYear, "same-width": 'false', "options-placement": 'bottom-start', variant: 'button', options: this.renderSupportedYears(this.toYear), "allow-deselect": 'false', boundary: this.popoverContentElement }))), this.renderNavButtons()), h("div", { class: 'body-container' }, h("div", { class: 'mdpc-body' }, this.renderCalendar(this.monthDetails)), h("div", { class: 'mdpc-body mdpc-body-right' }, this.renderCalendar(this.nextMonthDetails)))), this.showFooter && this.renderFooter())) : (''))));
  }
  get host() { return this; }
  static get watchers() { return {
    "locale": ["handleLocaleChange"],
    "minDate": ["handleMinDateChange"],
    "maxDate": ["handleMaxDateChange"],
    "value": ["watchValueChanged"]
  }; }
  static get style() { return datepickerCss; }
}, [1, "fw-datepicker", {
    "mode": [1],
    "minDate": [1025, "min-date"],
    "maxDate": [1, "max-date"],
    "fromDate": [1025, "from-date"],
    "toDate": [1025, "to-date"],
    "displayFormat": [1025, "display-format"],
    "value": [1025],
    "name": [1],
    "placeholder": [1025],
    "updateText": [1025, "update-text"],
    "cancelText": [1025, "cancel-text"],
    "required": [4],
    "state": [1025],
    "minYear": [1026, "min-year"],
    "maxYear": [1026, "max-year"],
    "locale": [1025],
    "readonly": [4],
    "disabled": [4],
    "showFooter": [4, "show-footer"],
    "clearInput": [4, "clear-input"],
    "hintText": [1, "hint-text"],
    "warningText": [1, "warning-text"],
    "errorText": [1, "error-text"],
    "label": [1],
    "showTimePicker": [4, "show-time-picker"],
    "timeProps": [16],
    "timeFormat": [1025, "time-format"],
    "debounceTimer": [2, "debounce-timer"],
    "showErrorOnInvalidDate": [4, "show-error-on-invalid-date"],
    "tooltipErrorText": [8, "tooltip-error-text"],
    "fullWidth": [4, "full-width"],
    "hoistTooltip": [4, "hoist-tooltip"],
    "showDatePicker": [32],
    "year": [32],
    "toYear": [32],
    "monthDetails": [32],
    "nextMonthDetails": [32],
    "month": [32],
    "todayTimestamp": [32],
    "selectedDay": [32],
    "startDate": [32],
    "endDate": [32],
    "startDateFormatted": [32],
    "endDateFormatted": [32],
    "dateHovered": [32],
    "supportedYears": [32],
    "toMonth": [32],
    "firstFocusElement": [32],
    "lastFocusElement": [32],
    "popoverContentElement": [32],
    "langModule": [32],
    "shortMonthNames": [32],
    "longMonthNames": [32],
    "weekDays": [32],
    "hasHintTextSlot": [32],
    "hasWarningTextSlot": [32],
    "hasErrorTextSlot": [32],
    "timeValue": [32],
    "dateFormat": [32],
    "selectedTime": [32],
    "timepickerDate": [32],
    "getValue": [64],
    "setFocus": [64],
    "clearValue": [64]
  }, [[0, "keydown", "handleKeyDown"], [0, "fwFocus", "displayDatePicker"], [0, "fwClick", "handleButtonClick"], [0, "fwInput", "handleInputChanges"], [0, "fwChange", "handleMonthYearDropDownSelection"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-datepicker", "fw-avatar", "fw-button", "fw-checkbox", "fw-icon", "fw-input", "fw-list-options", "fw-popover", "fw-select", "fw-select-option", "fw-spinner", "fw-tag", "fw-timepicker", "fw-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-datepicker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Datepicker);
      }
      break;
    case "fw-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "fw-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "fw-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "fw-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "fw-list-options":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "fw-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "fw-select":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "fw-select-option":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "fw-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "fw-tag":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-timepicker":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-tooltip":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { Datepicker as D, defineCustomElement as d };
