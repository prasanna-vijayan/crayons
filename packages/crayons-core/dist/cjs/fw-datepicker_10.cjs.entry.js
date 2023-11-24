'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63c6a574.js');
const index$1 = require('./index-926a762d.js');
const fieldControl = require('./field-control-1653f500.js');
const Translation = require('./Translation-7aefe8b4.js');
const index$2 = require('./index-e79e09fe.js');

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
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
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

var MILLISECONDS_IN_MINUTE$1 = 60000;
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */

function addMinutes(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE$1);
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
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  requiredArgs(1, arguments);

  if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};

function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
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
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}

var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters$1 = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return formatters$1.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return formatters$1.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return formatters$1.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return formatters$1.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return formatters$1.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return formatters$1.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return formatters$1.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return formatters$1.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'([^]*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale$1 = options.locale || locale;
  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale$1.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale$1.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp$1).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$1.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp$1).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString$1(substring);
    }

    var formatter = formatters[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale$1.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString$1(input) {
  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'");
}

function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

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

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  requiredArgs(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments);
  var day = toInteger(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

function isLeapYearIndex$1(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */


var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(string, {
            width: 'wide'
          }) || match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
      }
    },
    set: function (date, flags, value, _options) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['R', 'u', 't', 'T']
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, _options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Day of the month
  d: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Day of year
  D: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
  },
  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'eee':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'ccc':
          return match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tu

        case 'iiiiii':
          return match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tuesday

        case 'iiii':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 7;
    },
    set: function (date, _flags, value, options) {
      date = setUTCISODay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['b', 'B', 'H', 'k', 't', 'T']
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'B', 'H', 'k', 't', 'T']
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 't', 'T']
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 12;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 23;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['h', 'H', 'k', 't', 'T']
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 24;
    },
    set: function (date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
  },
  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCSeconds(value, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function (string, token, _match, _options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return parseNDigits(token.length, string, valueCallback);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMilliseconds(value);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'x']
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'X']
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  }
};

var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward (toDate no longer accepts a string)
 *   toDate(1392098430000) // Unix to timestamp
 *   toDate(new Date(2014, 1, 11, 11, 30, 30)) // Cloning the date
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
  requiredArgs(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};
  var locale$1 = options.locale || locale;

  if (!locale$1.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyReferenceDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1
  }; // If timezone isn't specified, it will be set to the system timezone

  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    subPriority: -1,
    set: dateToSystemTimezone,
    index: 0
  }];
  var i;
  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$1.formatLong, subFnOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp);
  var usedTokens = [];

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
      throwProtectedError(token, formatString, dirtyDateString);
    }

    if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      throwProtectedError(token, formatString, dirtyDateString);
    }

    var firstCharacter = token[0];
    var parser = parsers[firstCharacter];

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens;

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0;

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token;

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i];
            break;
          }
        }

        if (incompatibleToken) {
          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      var parseResult = parser.parse(dateString, token, locale$1.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
      }

      setters.push({
        priority: parser.priority,
        subPriority: parser.subPriority || 0,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });
      dateString = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      } // Replace two single quote characters with one single quote character


      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date


      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  } // Check if the remaining input contains something other than whitespace


  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).sort(function (a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyReferenceDate);

  if (isNaN(date)) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0];
      assign(flags, result[1]); // Result is date
    } else {
      utcDate = result;
    }
  }

  return utcDate;
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date;
  }

  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/**
 * @name isMatch
 * @category Common Helpers
 * @summary validates the date string against given formats
 *
 * @description
 * Return the true if given date is string correct against the given format else
 * will return false.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * isMatch('23 AM', 'HH a')
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `isMatch` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `isMatch` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `isMatch` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `isMatch('50', 'yy') //=> true`
 *
 *    `isMatch('75', 'yy') //=> true`
 *
 *    while `uu` will use the year as is:
 *
 *    `isMatch('50', 'uu') //=> true`
 *
 *    `isMatch('75', 'uu') //=> true`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be checked in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are matched (e.g. when matching string 'January 1st' without a year),
 * the values will be taken from today's using `new Date()` date which works as a context of parsing.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 *
 *
 * @param {String} dateString - the date string to verify
 * @param {String} formatString - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Boolean}
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Match 11 February 2014 from middle-endian format:
 * var result = isMatch('02/11/2014', 'MM/dd/yyyy')
 * //=> true
 *
 * @example
 * // Match 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = isMatch('28-a de februaro', "do 'de' MMMM", {
 *   locale: eo
 * })
 * //=> true
 */
function isMatch(dateString, formatString, options) {
  requiredArgs(2, arguments);
  return isValid(parse(dateString, formatString, new Date(), options));
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
const Datepicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwChange = index.createEvent(this, "fwChange", 7);
    this.fwBlur = index.createEvent(this, "fwBlur", 7);
    this.fwDateInput = index.createEvent(this, "fwDateInput", 7);
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
    this.handleInputChangeWithDebounce = index$1.debounce((e, target) => {
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
          let [fromDateStr, toDateStr] = ((_b = this.value) === null || _b === void 0 ? void 0 : _b.split(Translation.TranslationController.t('datepicker.to'))) || [];
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
      const focusableElements = index$1.getFocusableChildren(this.host);
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
    index$1.addRTL(this.host);
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
    const cancelText = this.cancelText || Translation.TranslationController.t('datepicker.cancel');
    const updateText = this.updateText || Translation.TranslationController.t('datepicker.update');
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
    this.langModule = await Translation.TranslationController.getDateLangModule(newLocale);
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
    this.langModule = await Translation.TranslationController.getDateLangModule(this.locale);
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
    const onChange = Translation.TranslationController.onChange.bind(Translation.TranslationController);
    this.langChangRemoveListener = onChange('lang', async (locale) => {
      var _a, _b;
      this.langModule = await Translation.TranslationController.getDateLangModule(locale);
      this.displayFormat = this.isDisplayFormatSet
        ? this.displayFormat
        : (_b = (_a = this.langModule) === null || _a === void 0 ? void 0 : _a.formatLong) === null || _b === void 0 ? void 0 : _b.date({ width: 'short' });
      this.placeholder = this.isPlaceholderSet
        ? this.placeholder
        : this.displayFormat;
      if (this.mode === 'range')
        this.placeholder = this.isPlaceholderSet
          ? this.placeholder
          : `${this.displayFormat} ${Translation.TranslationController.t('datepicker.to')} ${this.displayFormat}`;
      const monthNames = getMonthNames(this.langModule);
      this.shortMonthNames = monthNames.shortMonthNames;
      this.longMonthNames = monthNames.longMonthNames;
      this.weekDays = getWeekDays(this.langModule);
    });
    if (this.mode === 'range') {
      const today = new Date();
      let [fromDate, toDate] = ((_c = this.value) === null || _c === void 0 ? void 0 : _c.split(Translation.TranslationController.t('datepicker.to'))) || [];
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
        : `${this.displayFormat} ${Translation.TranslationController.t('datepicker.to')} ${this.displayFormat}`;
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
    let [fromDate, toDate] = (val === null || val === void 0 ? void 0 : val.split(Translation.TranslationController.t('datepicker.to'))) || [];
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
          let [fromDate, toDate] = (value === null || value === void 0 ? void 0 : value.split(Translation.TranslationController.t('datepicker.to'))) || [];
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
    return (index.h("div", { class: 'invalid-alert', slot: 'input-suffix' }, index.h("fw-tooltip", { distance: '13', content: this.tooltipErrorText ||
        Translation.TranslationController.t('datepicker.tooltipError'), hoist: this.hoistTooltip }, index.h("fw-icon", { name: 'alert', size: 14, color: '#d72d30' }))));
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
    const days = monthDetails.map((day, index$2) => {
      return (index.h("div", { class: this.getCellStyle(day), key: index$2 }, index.h("div", { class: 'cdc-day' }, index.h("span", { role: 'button', tabindex: day.month === -1 || day.month === 1 ? '-1' : '0', onClick: (e) => this.onDateClick(e, day), onMouseOver: () => this.handleDateHover(day), onFocus: () => this.handleDateHover(day), onKeyDown: index$1.handleKeyDown(() => this.handleDateHover(day)), onKeyUp: (e) => this.handleKeyUp(e, day) }, day.date))));
    });
    return (index.h("div", { class: 'c-container' }, index.h("div", { class: 'cc-head' }, this.weekDays.map((day, index$1) => (index.h("div", { key: index$1, class: 'cch-name' }, day)))), index.h("div", { class: 'cc-body' }, days)));
  }
  showSingleDatePicker() {
    return this.showDatePicker && this.mode !== 'range';
  }
  showDateRangePicker() {
    return this.showDatePicker && this.mode === 'range';
  }
  checkSlotContent() {
    this.hasHintTextSlot = index$1.hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = index$1.hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = index$1.hasSlot(this.host, 'error-text');
  }
  renderNavButtons() {
    return (index.h("div", { class: 'btns' }, index.h("div", { class: 'mdpch-button' }, index.h("div", { role: 'button', tabindex: '0', class: `mdpchb-inner ${this.isPrevMonthRestricted && 'disabled'}`, onClick: () => this.setMonth(-1), onKeyDown: index$1.handleKeyDown(() => this.setMonth(-1)) }, index.h("span", { class: 'mdpchbi-left-arrow' }))), index.h("div", { class: 'mdpch-button-right' }, index.h("div", { role: 'button', tabindex: '0', class: `mdpchb-inner ${this.isNextMonthRestricted && 'disabled'}`, onClick: () => this.setMonth(1), onKeyDown: index$1.handleKeyDown(() => this.setMonth(1)) }, index.h("span", { class: 'mdpchbi-right-arrow' })))));
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
    return (index.h("div", { class: 'mdpc-footer' }, index.h("fw-button", { color: 'secondary', class: 'close-date-picker' }, this.cancelText || Translation.TranslationController.t('datepicker.cancel')), index.h("fw-button", { color: 'primary', class: this.mode === 'range' ? 'update-range-value' : 'update-date-value' }, this.updateText || Translation.TranslationController.t('datepicker.update'))));
  }
  renderTimePicker() {
    return (index.h("div", { class: 'time-container' }, index.h("div", null, index.h("span", null, Translation.TranslationController.t('datepicker.date')), index.h("fw-input", { placeholder: this.dateFormat, value: this.timepickerDate, readonly: true })), index.h("div", null, index.h("span", null, Translation.TranslationController.t('datepicker.time')), index.h("fw-timepicker", Object.assign({ class: 'mdc-time', sameWidth: false, locale: this.locale, caret: false, optionsPlacement: 'bottom-end', format: this.timeFormat, value: this.timeValue, allowDeselect: false }, this.timeProps)))));
  }
  render() {
    const { host, name, value } = this;
    index$1.renderHiddenField(host, name, value);
    return (index.h(fieldControl.FieldControl, { inputId: this.name, label: this.label, labelId: `${this.label}-${this.name}`, state: this.state, hintTextId: `hint-${this.name}`, hintText: this.hintText, hasHintTextSlot: this.hasHintTextSlot, errorTextId: `error-${this.name}`, errorText: this.errorText, hasErrorTextSlot: this.hasErrorTextSlot, warningTextId: `warning-${this.name}`, warningText: this.warningText, hasWarningTextSlot: this.hasWarningTextSlot, required: this.required }, index.h("fw-popover", { "same-width": 'false', distance: '8', placement: 'bottom-start', fallbackPlacements: ['top-start'], "hide-on-tab": 'false', onFwHide: this.handlePopoverClose, hoist: true }, index.h("div", { role: 'combobox', "aria-controls": 'datepicker', "aria-expanded": this.showDatePicker, tabindex: '-1', onClick: () => !this.disabled && (this.showDatePicker = true), onKeyUp: () => !this.disabled && (this.showDatePicker = true), slot: 'popover-trigger', style: {
        display: this.fullWidth ? 'block' : 'inline-flex',
        alignItems: 'center',
      } }, index.h("fw-input", { value: this.value, name: this.name, disabled: this.disabled, placeholder: this.placeholder, required: this.required, onFwBlur: this.onBlur, ref: (el) => (this.nativeInput = el), state: this.state, readonly: this.showTimePicker || this.readonly, clearInput: this.clearInput, onFwInputClear: this.handleInputClear, style: {
        width: this.fullWidth
          ? '100%'
          : this.mode === 'range'
            ? '235px'
            : '200px',
      } }, this.isDateInvalid &&
      this.showErrorOnInvalidDate &&
      this.renderInvalidAlert(), index.h("div", { class: 'icon-calendar', slot: 'input-suffix' }, index.h("div", { class: 'separator', style: {
        borderLeftColor: this.state === 'error' ? '#d72d30' : '#ebeff3',
      } }), index.h("span", { class: 'date-icon' }, index.h("fw-icon", { name: this.showTimePicker ? 'calendar-time' : 'calendar', style: {
        '--fw-icon-color': this.state === 'error' && '#d72d30',
      } }))))), this.showSingleDatePicker() ? (index.h("div", { id: 'datepicker', class: 'datepicker', slot: 'popover-content', ref: (el) => (this.popoverContentElement = el) }, this.showTimePicker && this.renderTimePicker(), index.h("div", { class: 'mdp-container' }, index.h("div", { class: 'mdpc-head' }, index.h("div", { class: 'mdpch-container' }, index.h("span", { class: 'mdpchc-month' }, index.h("fw-select", { class: 'first single-month-selector', value: this.shortMonthNames[this.month], "same-width": 'false', "options-placement": 'bottom-start', variant: 'button', options: this.longMonthNames.map((month, i) => ({
        value: this.shortMonthNames[i],
        key: i,
        selected: month === this.longMonthNames[this.month],
        text: month,
      })), allowDeselect: false, boundary: this.popoverContentElement })), index.h("span", { class: 'mdpchc-year' }, index.h("fw-select", { class: 'last single-year-selector', value: this.year, "same-width": 'false', "options-placement": 'bottom-start', variant: 'button', options: this.renderSupportedYears(this.year), "allow-deselect": 'false', boundary: this.popoverContentElement }))), this.renderNavButtons()), index.h("div", { class: 'mdpc-body' }, this.renderCalendar(this.monthDetails))), this.showFooter && this.renderFooter())) : (''), this.showDateRangePicker() ? (index.h("div", { id: 'datepicker', class: 'daterangepicker', slot: 'popover-content', ref: (el) => (this.popoverContentElement = el) }, index.h("div", { class: 'mdp-range-container' }, index.h("div", { class: 'mdpc-head' }, index.h("div", { class: 'mdpch-container' }, index.h("span", { class: 'mdpchc-month' }, index.h("fw-select", { class: 'first from-month-selector', value: this.shortMonthNames[this.month], "same-width": 'false', variant: 'button', "options-placement": 'bottom-start', options: this.longMonthNames.map((month, i) => ({
        value: this.shortMonthNames[i],
        key: i,
        selected: month === this.longMonthNames[this.month],
        text: month,
      })), allowDeselect: false, boundary: this.popoverContentElement })), index.h("span", { class: 'mdpchc-year' }, index.h("fw-select", { class: 'last from-year-selector', value: this.year, "same-width": 'false', "options-placement": 'bottom-start', variant: 'button', options: this.renderSupportedYears(this.year), "allow-deselect": 'false', boundary: this.popoverContentElement }))), index.h("div", { class: 'mdpch-container-right' }, index.h("span", { class: 'mdpchc-month' }, index.h("fw-select", { class: 'first to-month-selector', "same-width": 'false', variant: 'button', value: this.shortMonthNames[this.toMonth], "options-placement": 'bottom-start', options: this.longMonthNames.map((month, i) => ({
        value: this.shortMonthNames[i],
        key: i,
        selected: month === this.longMonthNames[this.toMonth],
        text: month,
      })), allowDeselect: false, boundary: this.popoverContentElement })), index.h("span", { class: 'mdpchc-year' }, index.h("fw-select", { class: 'last to-year-selector', value: this.toYear, "same-width": 'false', "options-placement": 'bottom-start', variant: 'button', options: this.renderSupportedYears(this.toYear), "allow-deselect": 'false', boundary: this.popoverContentElement }))), this.renderNavButtons()), index.h("div", { class: 'body-container' }, index.h("div", { class: 'mdpc-body' }, this.renderCalendar(this.monthDetails)), index.h("div", { class: 'mdpc-body mdpc-body-right' }, this.renderCalendar(this.nextMonthDetails)))), this.showFooter && this.renderFooter())) : (''))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "locale": ["handleLocaleChange"],
    "minDate": ["handleMinDateChange"],
    "maxDate": ["handleMaxDateChange"],
    "value": ["watchValueChanged"]
  }; }
};
Datepicker.style = datepickerCss;

const fileDragSVG = `
  <svg
    width='124'
    height='80'
    viewBox='0 0 124 80'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_12_6038)'>
      <path
        d='M70.4518 53.4547C46.6447 55.596 24.2534 55.4552 3.01624 53.4547C2.74717 53.4547 2.48073 53.4015 2.23214 53.298C1.98355 53.1945 1.75767 53.0429 1.56741 52.8517C1.37715 52.6604 1.22622 52.4334 1.12325 52.1836C1.02028 51.9338 0.967285 51.666 0.967285 51.3956V3.99145C0.967285 3.44534 1.18316 2.9216 1.56741 2.53544C1.95166 2.14928 2.47282 1.93234 3.01624 1.93234C25.4523 -0.0305071 48.0157 -0.0305071 70.4518 1.93234C70.7209 1.93234 70.9873 1.9856 71.2359 2.08908C71.4845 2.19256 71.7104 2.34424 71.9006 2.53544C72.0909 2.72665 72.2418 2.95364 72.3448 3.20347C72.4478 3.45329 72.5007 3.72105 72.5007 3.99145V51.3956C72.5007 51.9417 72.2849 52.4655 71.9006 52.8517C71.5164 53.2378 70.9952 53.4547 70.4518 53.4547Z'
        fill='white'
      />
      <path
        d='M70.4518 53.4547C46.6447 55.596 24.2534 55.4552 3.01624 53.4547C2.74717 53.4547 2.48073 53.4015 2.23214 53.298C1.98355 53.1945 1.75767 53.0429 1.56741 52.8516C1.37715 52.6604 1.22622 52.4334 1.12325 52.1836C1.02028 51.9338 0.967285 51.666 0.967285 51.3956V3.99145C0.967285 3.44534 1.18316 2.9216 1.56741 2.53544C1.95166 2.14928 2.47282 1.93234 3.01624 1.93234C25.4523 -0.0305071 48.0157 -0.0305071 70.4518 1.93234C70.7209 1.93234 70.9873 1.9856 71.2359 2.08908C71.4845 2.19256 71.7104 2.34424 71.9006 2.53544C72.0909 2.72665 72.2418 2.95364 72.3448 3.20347C72.4478 3.45329 72.5007 3.72105 72.5007 3.99145V51.3956C72.5007 51.9417 72.2849 52.4655 71.9006 52.8516C71.5164 53.2378 70.9952 53.4547 70.4518 53.4547V53.4547Z'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-dasharray='1.88 1.88'
      />
      <path
        d='M67.0595 6.59031C47.0075 4.78077 26.8344 4.78077 6.7824 6.59031C6.40629 6.59031 6.04558 6.74046 5.77962 7.00774C5.51367 7.27501 5.36426 7.63751 5.36426 8.01549V48.0167C5.36426 48.3947 5.51367 48.7572 5.77962 49.0245C6.04558 49.2918 6.40629 49.4419 6.7824 49.4419C26.8447 51.1019 47.0089 51.1019 67.0712 49.4419C67.4473 49.4419 67.808 49.2918 68.0739 49.0245C68.3399 48.7572 68.4893 48.3947 68.4893 48.0167V8.01549C68.4893 7.82734 68.4522 7.64105 68.3802 7.46737C68.3083 7.29369 68.2027 7.13606 68.0698 7.00356C67.9369 6.87107 67.7792 6.76634 67.6058 6.69541C67.4324 6.62448 67.2467 6.58876 67.0595 6.59031Z'
        fill='#EBEFF3'
      />
      <path
        d='M66.3682 22.3049C84.9623 25.567 103.23 30.4865 120.956 37.0052C121.699 37.2793 122.313 37.8229 122.677 38.529C123.041 39.2351 123.129 40.0525 122.923 40.8205L113.859 74.8182'
        fill='white'
      />
      <path
        d='M66.3682 22.3049C84.9623 25.567 103.23 30.4865 120.956 37.0052C121.699 37.2793 122.313 37.8229 122.677 38.529C123.041 39.2351 123.129 40.0525 122.923 40.8205L113.859 74.8182'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M109.728 77.03C91.374 73.5823 73.3138 68.7091 55.7098 62.4542C54.956 62.188 54.3299 61.6458 53.9565 60.9359C53.5832 60.2259 53.4901 59.4006 53.6959 58.6247L62.1394 26.9539'
        fill='white'
      />
      <path
        d='M109.728 77.03C91.374 73.5823 73.3138 68.7091 55.7098 62.4542C54.956 62.188 54.3299 61.6458 53.9565 60.9359C53.5832 60.2259 53.4901 59.4006 53.6959 58.6247L62.1394 26.9539'
        stroke='#767477'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M79.9347 47.4746C79.4214 49.3754 79.5681 51.3953 80.3506 53.2011L75.3812 55.6453C74.2783 53.2121 73.8777 50.5165 74.2251 47.8657C74.5726 45.2148 75.6541 42.7154 77.3464 40.6522C79.0387 38.5891 81.2737 37.0452 83.7967 36.1966C86.3197 35.348 89.0292 35.2287 91.6163 35.8525L90.1841 41.2245C88.0034 40.7372 85.7197 41.1154 83.8099 42.28C81.9 43.4447 80.5116 45.3057 79.9347 47.4746Z'
        fill='#85BEFF'
      />
      <path
        d='M100.322 57.3452C99.3041 58.9425 97.981 60.3207 96.4292 61.4L93.392 56.8028C94.6954 55.8554 95.7111 54.5625 96.3257 53.0686C96.9404 51.5748 97.1299 49.9386 96.873 48.3428C96.6162 46.7469 95.9231 45.2543 94.8711 44.0313C93.8191 42.8083 92.4496 41.9032 90.9155 41.417L92.3477 36.0474C93.5949 36.4209 94.7863 36.9619 95.8896 37.6557C96.1232 37.813 96.3685 37.9773 96.6091 38.1511C98.231 39.3423 99.588 40.8601 100.594 42.6077C101.599 44.3553 102.231 46.2943 102.45 48.3011C102.478 48.5969 102.504 48.8834 102.511 49.1745C102.63 52.0574 101.87 54.9082 100.333 57.3452H100.322Z'
        fill='#1479EB'
      />
      <path
        d='M93.6956 62.9236C93.2251 63.1198 92.7447 63.2914 92.2565 63.4378L92.0742 63.4824C91.7355 63.5693 91.385 63.6632 91.0322 63.7383C90.7706 63.7923 90.5042 63.8299 90.2472 63.8698L89.7963 63.9262C89.7375 63.9302 89.679 63.9381 89.6211 63.9496C89.5792 63.9449 89.5369 63.9449 89.4949 63.9496C89.2894 63.9731 89.0861 63.9802 88.8828 63.9872C88.8828 63.9872 88.8828 63.9872 88.8641 63.9872C88.844 63.9837 88.8235 63.9837 88.8034 63.9872C88.6001 63.9872 88.3829 63.9872 88.1796 63.999H88.1656C87.932 63.999 87.6983 63.999 87.4647 63.9778C86.9974 63.9496 86.5138 63.891 86.0349 63.8252C85.5559 63.7595 85.1003 63.6421 84.6331 63.5153C84.1658 63.3885 83.6985 63.2406 83.25 63.0715C83.028 62.9729 82.7967 62.8884 82.5888 62.7945C82.3808 62.7006 82.1612 62.5996 81.958 62.4916H81.937C81.7711 62.4165 81.6099 62.3202 81.4557 62.231C81.3015 62.1418 81.0982 62.0338 80.9347 61.9258C80.8062 61.859 80.6842 61.7804 80.5702 61.691C80.517 61.6628 80.4655 61.6314 80.416 61.5971C80.2318 61.4807 80.054 61.3545 79.8833 61.219C79.7385 61.1181 79.5936 61.0007 79.4534 60.8856C79.3237 60.7888 79.1989 60.6853 79.0796 60.5757C78.9324 60.4583 78.7899 60.3268 78.6474 60.193C78.5049 60.0592 78.3203 59.8807 78.1685 59.7234C77.4896 59.0312 76.8858 58.2686 76.3672 57.4483C76.2903 57.3403 76.2193 57.2283 76.1546 57.1126L75.9209 56.7064C75.8555 56.5702 75.7807 56.4434 75.7153 56.3166L80.6824 53.8818C81.2401 54.9184 82.0012 55.8307 82.9195 56.5636C83.8378 57.2964 84.8943 57.8347 86.0254 58.1458C87.1564 58.457 88.3384 58.5346 89.5001 58.3739C90.6618 58.2133 91.7791 57.8177 92.7845 57.2112L95.8077 61.8131C95.1365 62.2431 94.4299 62.6147 93.6956 62.9236Z'
        fill='#EB8321'
      />
      <path
        d='M106.253 79.4622C87.7371 75.9806 69.5146 71.0731 51.7471 64.7831C50.9925 64.5179 50.3655 63.9759 49.9916 63.2658C49.6178 62.5557 49.5246 61.7299 49.7309 60.9537L58.7958 26.9561C59.0031 26.1873 59.4893 25.5245 60.1588 25.0982C60.8282 24.6718 61.6322 24.5129 62.4124 24.6528C81.0065 27.9152 99.2747 32.8347 117.001 39.353C117.745 39.6263 118.361 40.1697 118.726 40.8762C119.092 41.5827 119.182 42.4012 118.977 43.1707L109.912 77.166C109.702 77.9414 109.209 78.6087 108.53 79.0343C107.852 79.46 107.039 79.6129 106.253 79.4622Z'
        fill='white'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M74.1198 69.8194L74.4679 68.1759C74.5324 67.9122 74.4899 67.6335 74.3499 67.4013C74.2099 67.169 73.9839 67.0021 73.7215 66.9374C73.459 66.8726 73.1818 66.9152 72.9507 67.0559C72.7195 67.1966 72.5535 67.4238 72.4891 67.6875L72.6596 66.8775C72.6991 66.7218 72.7069 66.5597 72.6826 66.4008C72.6582 66.242 72.6022 66.0898 72.5178 65.9533C72.4334 65.8168 72.3225 65.6988 72.1916 65.6065C72.0608 65.5142 71.9127 65.4493 71.7563 65.4159C71.5999 65.3825 71.4384 65.3812 71.2814 65.4121C71.1245 65.443 70.9754 65.5055 70.8431 65.5957C70.7108 65.6859 70.598 65.8021 70.5115 65.9372C70.425 66.0724 70.3665 66.2237 70.3396 66.3821L70.1901 67.0865C70.2296 66.9307 70.2375 66.7686 70.2131 66.6098C70.1887 66.451 70.1327 66.2988 70.0483 66.1623C69.9639 66.0258 69.853 65.9078 69.7221 65.8155C69.5913 65.7231 69.4432 65.6583 69.2868 65.6249C69.1304 65.5915 68.9689 65.5902 68.8119 65.6211C68.655 65.652 68.5059 65.7144 68.3736 65.8047C68.2413 65.8949 68.1285 66.0111 68.042 66.1462C67.9555 66.2813 67.897 66.4326 67.8701 66.591L67.5828 67.9458L65.2815 69.1878L64.6227 72.3152C64.5239 72.781 64.5174 73.2617 64.6036 73.73C64.6898 74.1982 64.8669 74.6448 65.1249 75.0443C65.3828 75.4437 65.7166 75.7882 66.1071 76.0579C66.4975 76.3277 66.9371 76.5176 67.4005 76.6166L70.9284 77.3703C71.3918 77.4695 71.8702 77.476 72.3361 77.3894C72.8021 77.3028 73.2465 77.1248 73.644 76.8656C74.0414 76.6063 74.3842 76.2709 74.6526 75.8785C74.9211 75.4861 75.11 75.0444 75.2085 74.5786L75.9094 71.2704'
        fill='white'
      />
      <path
        d='M74.1198 69.8194L74.4679 68.1759C74.5324 67.9122 74.4899 67.6335 74.3499 67.4013C74.2099 67.169 73.9839 67.0021 73.7215 66.9374C73.459 66.8726 73.1818 66.9152 72.9507 67.0559C72.7195 67.1966 72.5535 67.4238 72.4891 67.6875L72.6596 66.8775C72.6991 66.7218 72.7069 66.5597 72.6826 66.4008C72.6582 66.242 72.6022 66.0898 72.5178 65.9533C72.4334 65.8168 72.3225 65.6988 72.1916 65.6065C72.0608 65.5142 71.9127 65.4493 71.7563 65.4159C71.5999 65.3825 71.4384 65.3812 71.2814 65.4121C71.1245 65.443 70.9754 65.5055 70.8431 65.5957C70.7108 65.6859 70.598 65.8021 70.5115 65.9372C70.425 66.0724 70.3665 66.2237 70.3396 66.3821L70.1901 67.0865C70.2296 66.9307 70.2375 66.7686 70.2131 66.6098C70.1887 66.451 70.1327 66.2988 70.0483 66.1623C69.9639 66.0258 69.853 65.9078 69.7221 65.8155C69.5913 65.7231 69.4432 65.6583 69.2868 65.6249C69.1304 65.5915 68.9689 65.5902 68.8119 65.6211C68.655 65.652 68.5059 65.7144 68.3736 65.8047C68.2413 65.8949 68.1285 66.0111 68.042 66.1462C67.9555 66.2813 67.897 66.4326 67.8701 66.591L67.5828 67.9458L65.2815 69.1878L64.6227 72.3152C64.5239 72.781 64.5174 73.2617 64.6036 73.73C64.6898 74.1982 64.8669 74.6448 65.1249 75.0443C65.3828 75.4437 65.7166 75.7882 66.1071 76.0579C66.4975 76.3277 66.9371 76.5176 67.4005 76.6166L70.9284 77.3703C71.3918 77.4695 71.8702 77.476 72.3361 77.3894C72.8021 77.3028 73.2465 77.1248 73.644 76.8656C74.0414 76.6063 74.3842 76.2709 74.6526 75.8785C74.9211 75.4861 75.11 75.0444 75.2085 74.5786L75.9094 71.2704'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M75.9045 71.2586L76.2572 69.5963C76.2919 69.4619 76.2992 69.3218 76.2786 69.1844C76.2579 69.0471 76.2098 68.9154 76.1372 68.7972C76.0645 68.6791 75.9688 68.5769 75.8558 68.497C75.7427 68.4171 75.6148 68.3609 75.4796 68.3321C75.3444 68.3032 75.2048 68.3021 75.0692 68.3289C74.9336 68.3557 74.8048 68.4099 74.6906 68.4881C74.5764 68.5663 74.4791 68.667 74.4047 68.784C74.3303 68.901 74.2802 69.032 74.2575 69.169L74.1196 69.8194'
        fill='white'
      />
      <path
        d='M75.9045 71.2586L76.2572 69.5963C76.2919 69.4619 76.2992 69.3218 76.2786 69.1844C76.2579 69.0471 76.2098 68.9154 76.1372 68.7972C76.0645 68.6791 75.9688 68.5769 75.8558 68.497C75.7427 68.4171 75.6148 68.3609 75.4796 68.3321C75.3444 68.3032 75.2048 68.3021 75.0692 68.3289C74.9336 68.3557 74.8048 68.4099 74.6906 68.4881C74.5764 68.5663 74.4791 68.667 74.4047 68.784C74.3303 68.901 74.2802 69.032 74.2575 69.169L74.1196 69.8194'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M75.9045 71.2587L75.2036 74.5669C75.1051 75.0327 74.9162 75.4744 74.6478 75.8668C74.3793 76.2592 74.0365 76.5946 73.6391 76.8538C73.2416 77.1131 72.7972 77.2911 72.3313 77.3777C71.8653 77.4643 71.387 77.4578 70.9235 77.3585L67.3957 76.6049C66.463 76.4037 65.6475 75.8394 65.1278 75.0355C64.6081 74.2315 64.4264 73.2534 64.6225 72.3152L65.2813 69.1996L67.5826 67.9575'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M67.0151 70.6295L67.8702 66.5911C67.9359 66.2831 68.1201 66.0137 68.3828 65.8417C68.6454 65.6697 68.9651 65.6091 69.272 65.6731V65.6731C69.5785 65.7391 69.8467 65.9243 70.0178 66.1882C70.189 66.4521 70.2492 66.7734 70.1855 67.0818L69.8281 68.7935'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M69.8281 68.7934L70.3397 66.3751C70.4054 66.067 70.5896 65.7976 70.8522 65.6256C71.1149 65.4536 71.4345 65.393 71.7414 65.457V65.457C72.0479 65.523 72.316 65.7082 72.4872 65.9721C72.6583 66.2361 72.7186 66.5573 72.6549 66.8658L72.1432 69.2841'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M72.1201 69.3921L72.4682 67.7486C72.5248 67.4822 72.6843 67.2493 72.9116 67.1009C73.1389 66.9526 73.4155 66.901 73.6807 66.9573V66.9573C73.8121 66.9852 73.9367 67.0389 74.0474 67.1153C74.1581 67.1917 74.2527 67.2893 74.3259 67.4024C74.399 67.5156 74.4492 67.6422 74.4736 67.7749C74.498 67.9077 74.496 68.0439 74.4679 68.1759L74.1199 69.8194'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M74.1196 69.8194L74.2575 69.169C74.3141 68.9026 74.4736 68.6697 74.7009 68.5213C74.9282 68.373 75.2048 68.3214 75.4699 68.3777V68.3777C75.735 68.4347 75.9667 68.5949 76.1143 68.8234C76.2619 69.0518 76.3133 69.3298 76.2572 69.5963L75.9044 71.2586'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M42.7663 26.8741H38.7011V22.7887C38.7011 22.5671 38.6135 22.3545 38.4575 22.1977C38.3015 22.0409 38.09 21.9529 37.8694 21.9529C37.6488 21.9529 37.4372 22.0409 37.2813 22.1977C37.1253 22.3545 37.0377 22.5671 37.0377 22.7887V26.8741H32.9748C32.7542 26.8741 32.5427 26.9622 32.3867 27.1189C32.2307 27.2757 32.1431 27.4883 32.1431 27.7099C32.1431 27.9316 32.2307 28.1442 32.3867 28.301C32.5427 28.4577 32.7542 28.5458 32.9748 28.5458H37.04V32.6358C37.04 32.8575 37.1276 33.0701 37.2836 33.2269C37.4396 33.3836 37.6511 33.4717 37.8717 33.4717C38.0923 33.4717 38.3039 33.3836 38.4598 33.2269C38.6158 33.0701 38.7035 32.8575 38.7035 32.6358V28.5505H42.7687C42.9891 28.5499 43.2002 28.4616 43.3561 28.305C43.5119 28.1484 43.5998 27.9361 43.6004 27.7146C43.601 27.6043 43.5799 27.4949 43.5382 27.3928C43.4965 27.2907 43.4352 27.1979 43.3576 27.1197C43.2801 27.0416 43.1879 26.9796 43.0864 26.9375C42.9849 26.8953 42.8761 26.8738 42.7663 26.8741Z'
        fill='#91A2B2'
      />
      <path
        d='M20.6416 36.519C20.6416 36.519 15.9689 63.1889 47.5934 63.7383'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-dasharray='1.88 1.88'
      />
      <path
        d='M15.6675 39.8719L20.8845 36.127L26.1108 41.0129'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-dasharray='1.41 1.41'
      />
    </g>
    <defs>
      <clipPath id='clip0_12_6038'>
        <rect width='123' height='80' fill='white' transform='translate(0.5)' />
      </clipPath>
    </defs>
  </svg>
`;
const fileErrorSVG = `
  <svg
    width='102'
    height='80'
    viewBox='0 0 102 80'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_12_6329)'>
      <path
        opacity='0.2'
        d='M50.707 71.634C69.4847 71.634 84.707 56.4572 84.707 37.7357C84.707 19.0142 69.4847 3.8374 50.707 3.8374C31.9293 3.8374 16.707 19.0142 16.707 37.7357C16.707 56.4572 31.9293 71.634 50.707 71.634Z'
        fill='#BFC7D3'
      />
      <path
        d='M21.3174 68.5423H72.7526V10.2373C72.7526 8.73895 71.5354 7.52539 70.0326 7.52539H27.8726C26.3698 7.52539 25.1526 8.73895 25.1526 10.2373V64.5762C25.1526 65.6745 24.697 66.7254 23.8878 67.4712C23.3506 67.9661 22.8066 68.1966 22.6502 68.2576C22.1198 68.4745 21.6438 68.5288 21.3174 68.5423Z'
        fill='white'
      />
      <path
        d='M73.1605 68.9492H21.3173L21.3037 68.1356C21.7185 68.122 22.1197 68.0339 22.5005 67.878C22.6841 67.8034 23.1601 67.5865 23.6089 67.1729C24.3297 66.5085 24.7445 65.5593 24.7445 64.5763V10.2373C24.7445 8.51526 26.1453 7.11865 27.8725 7.11865H70.0325C71.7597 7.11865 73.1605 8.51526 73.1605 10.2373V68.9492ZM23.7109 68.1356H72.3445V10.2373C72.3445 8.96272 71.3041 7.93221 70.0325 7.93221H27.8725C26.5941 7.93221 25.5605 8.9695 25.5605 10.2373V64.5763C25.5605 65.7831 25.0505 66.9492 24.1665 67.7695C24.0101 67.9119 23.8605 68.0339 23.7109 68.1356Z'
        fill='#92A2B1'
      />
      <path
        d='M17.1699 51.8848H25.1531V64.5627C25.1531 66.7593 23.3647 68.5424 21.1615 68.5424C18.9583 68.5424 17.1699 66.7593 17.1699 64.5627V51.8848Z'
        fill='white'
      />
      <path
        d='M21.1613 68.9492C18.7337 68.9492 16.7617 66.9831 16.7617 64.5628V51.478H25.5609V64.5628C25.5609 66.9831 23.5889 68.9492 21.1613 68.9492ZM17.5777 52.2848V64.5628C17.5777 66.5357 19.1825 68.1357 21.1613 68.1357C23.1401 68.1357 24.7449 66.5357 24.7449 64.5628V52.2848H17.5777Z'
        fill='#92A2B1'
      />
      <path
        d='M77.835 68.7102L81.3435 63.7108L89.0156 69.0628C90.3973 70.0267 90.7353 71.9339 89.7685 73.3115C88.8017 74.6891 86.8888 75.0261 85.507 74.0622L77.835 68.7102Z'
        fill='white'
      />
      <path
        d='M87.2567 75.0237C86.5699 75.0237 85.8763 74.8203 85.2711 74.4L77.2607 68.8135L81.2387 63.1458L89.2491 68.7322C90.8131 69.8237 91.2007 71.9864 90.0991 73.5458C89.4259 74.5085 88.3447 75.0169 87.2499 75.0169L87.2567 75.0237ZM78.4031 68.6102L85.7403 73.7288C86.9371 74.5627 88.5963 74.2712 89.4327 73.078C90.2691 71.8847 89.9767 70.2305 88.7799 69.3966L81.4427 64.278L78.4031 68.6102Z'
        fill='#92A2B1'
      />
      <path
        d='M77.9116 63.2195L76.1924 65.6692L78.6495 67.3832L80.3686 64.9335L77.9116 63.2195Z'
        fill='white'
      />
      <path
        d='M78.7501 67.9457L75.6221 65.7627L77.8117 62.644L80.9397 64.8271L78.7501 67.9457ZM76.7577 65.5661L78.5461 66.8135L79.7973 65.0305L78.0089 63.783L76.7577 65.5661Z'
        fill='#92A2B1'
      />
      <path
        d='M63.1172 71.8103C72.4046 71.8103 79.9336 64.3038 79.9336 55.0442C79.9336 45.7845 72.4046 38.2781 63.1172 38.2781C53.8297 38.2781 46.3008 45.7845 46.3008 55.0442C46.3008 64.3038 53.8297 71.8103 63.1172 71.8103Z'
        fill='white'
      />
      <path
        d='M63.117 72.2171C53.6174 72.2171 45.8926 64.5154 45.8926 55.0442C45.8926 45.573 53.6174 37.8713 63.117 37.8713C72.6166 37.8713 80.3414 45.573 80.3414 55.0442C80.3414 64.5154 72.6166 72.2171 63.117 72.2171ZM63.117 38.6849C54.0662 38.6849 46.7086 46.0273 46.7086 55.0442C46.7086 64.0612 54.073 71.4035 63.117 71.4035C72.161 71.4035 79.5254 64.0612 79.5254 55.0442C79.5254 46.0273 72.161 38.6849 63.117 38.6849Z'
        fill='#92A2B1'
      />
      <path
        d='M63.1173 68.6508C70.6547 68.6508 76.7649 62.5589 76.7649 55.044C76.7649 47.5292 70.6547 41.4373 63.1173 41.4373C55.58 41.4373 49.4697 47.5292 49.4697 55.044C49.4697 62.5589 55.58 68.6508 63.1173 68.6508Z'
        fill='white'
      />
      <path
        d='M63.1171 69.0645C55.3651 69.0645 49.0615 62.7797 49.0615 55.0509C49.0615 47.3221 55.3651 41.0374 63.1171 41.0374C70.8691 41.0374 77.1727 47.3221 77.1727 55.0509C77.1727 62.7797 70.8691 69.0645 63.1171 69.0645ZM63.1171 41.8441C55.8139 41.8441 49.8775 47.7696 49.8775 55.0509C49.8775 62.3323 55.8207 68.2509 63.1171 68.2509C70.4135 68.2509 76.3567 62.3255 76.3567 55.0509C76.3567 47.7763 70.4135 41.8441 63.1171 41.8441Z'
        fill='#92A2B1'
      />
      <path
        d='M61.8252 57.512V57.2001C61.8252 56.0747 62.24 55.1798 63.6204 53.9595C64.4704 53.1934 64.6813 52.5967 64.6813 51.9188C64.6813 51.1662 64.2325 50.4544 63.1785 50.4544C62.0497 50.4544 61.6008 51.2001 61.4716 52.2035H59.248C59.3296 50.8205 60.2204 48.6713 63.2192 48.6849C66.0888 48.6984 66.9661 50.59 66.9661 51.9866C66.9661 53.1662 66.5784 53.9662 65.2592 55.1798C64.4364 55.9391 64.1644 56.5425 64.1644 57.3357V57.512H61.8185H61.8252ZM61.8252 61.4035V58.5764H64.1713V61.4035H61.8252Z'
        fill='#CFD7DF'
      />
      <path
        d='M46.3007 32.9492C46.1715 32.9492 46.0423 32.8882 45.9675 32.7797C45.8383 32.5967 45.8859 32.3391 46.0695 32.2102C46.6951 31.7763 48.0007 31.0441 49.7687 31.078C51.4279 31.1052 52.6519 31.7967 53.2367 32.2102C53.4203 32.3391 53.4679 32.5967 53.3387 32.7797C53.2095 32.9628 52.9579 33.0102 52.7675 32.8814C52.2575 32.5221 51.1899 31.9255 49.7551 31.8984C48.2115 31.8713 47.0827 32.5018 46.5455 32.8814C46.4707 32.9289 46.3891 32.956 46.3143 32.956L46.3007 32.9492Z'
        fill='#CFD7DF'
      />
      <path
        d='M38.9778 25.9798C38.8758 25.9798 38.7738 25.9459 38.6922 25.8646C38.529 25.7086 38.5222 25.451 38.6786 25.2883L42.8946 20.9086C43.051 20.7459 43.3094 20.7391 43.4726 20.8951C43.6358 21.051 43.6426 21.3086 43.4862 21.4713L39.2702 25.851C39.1886 25.9323 39.0798 25.973 38.9778 25.973V25.9798Z'
        fill='#CFD7DF'
      />
      <path
        d='M43.2817 25.8917C43.1797 25.8917 43.0777 25.8578 42.9961 25.7764L38.6033 21.573C38.4401 21.4171 38.4333 21.1595 38.5897 20.9968C38.7461 20.834 39.0045 20.8273 39.1677 20.9832L43.5605 25.1866C43.7237 25.3425 43.7305 25.6001 43.5741 25.7629C43.4925 25.8442 43.3837 25.8849 43.2817 25.8849V25.8917Z'
        fill='#CFD7DF'
      />
      <path
        d='M55.386 25.9798C55.284 25.9798 55.182 25.9459 55.1004 25.8646C54.9372 25.7086 54.9304 25.451 55.0868 25.2883L59.3028 20.9086C59.4592 20.7459 59.7176 20.7391 59.8808 20.8951C60.044 21.051 60.0508 21.3086 59.8944 21.4713L55.6784 25.851C55.5968 25.9323 55.488 25.973 55.386 25.973V25.9798Z'
        fill='#CFD7DF'
      />
      <path
        d='M59.6899 25.8917C59.5879 25.8917 59.4859 25.8578 59.4043 25.7764L55.0115 21.573C54.8483 21.4171 54.8415 21.1595 54.9979 20.9968C55.1543 20.834 55.4127 20.8273 55.5759 20.9832L59.9687 25.1866C60.1319 25.3425 60.1387 25.6001 59.9823 25.7629C59.9007 25.8442 59.7919 25.8849 59.6899 25.8849V25.8917Z'
        fill='#CFD7DF'
      />
      <path
        d='M95.1997 80.2305H91.4393C91.2149 80.2305 91.0312 80.0475 91.0312 79.8238C91.0312 79.6 91.2149 79.417 91.4393 79.417H95.1997C95.4241 79.417 95.6077 79.6 95.6077 79.8238C95.6077 80.0475 95.4241 80.2305 95.1997 80.2305Z'
        fill='#92A2B1'
      />
      <path
        d='M87.3522 80.2305H70.8826C70.6582 80.2305 70.4746 80.0475 70.4746 79.8238C70.4746 79.6 70.6582 79.417 70.8826 79.417H87.3522C87.5766 79.417 87.7602 79.6 87.7602 79.8238C87.7602 80.0475 87.5766 80.2305 87.3522 80.2305Z'
        fill='#92A2B1'
      />
      <path
        d='M66.9796 80.2305H6.7996C6.5752 80.2305 6.3916 80.0475 6.3916 79.8238C6.3916 79.6 6.5752 79.417 6.7996 79.417H66.9796C67.204 79.417 67.3876 79.6 67.3876 79.8238C67.3876 80.0475 67.204 80.2305 66.9796 80.2305Z'
        fill='#92A2B1'
      />
      <path
        d='M17.7611 11.9188H12.8855C12.6611 11.9188 12.4775 11.7357 12.4775 11.512C12.4775 11.2883 12.6611 11.1052 12.8855 11.1052H17.7611C17.9855 11.1052 18.1691 11.2883 18.1691 11.512C18.1691 11.7357 17.9855 11.9188 17.7611 11.9188Z'
        fill='#92A2B1'
      />
      <path
        d='M23.534 5.45089C23.3096 5.45089 23.126 5.26784 23.126 5.04411V0.176311C23.126 -0.0474177 23.3096 -0.230469 23.534 -0.230469C23.7584 -0.230469 23.942 -0.0474177 23.942 0.176311V5.04411C23.942 5.26784 23.7584 5.45089 23.534 5.45089Z'
        fill='#92A2B1'
      />
      <path
        d='M18.822 7.02376C18.7336 7.02376 18.6452 6.99664 18.5704 6.9424L14.7012 3.97969C14.5244 3.8441 14.4904 3.58647 14.6264 3.4102C14.7624 3.23393 15.0208 3.20003 15.1976 3.33562L19.0668 6.29833C19.2436 6.43393 19.2776 6.69155 19.1416 6.86782C19.06 6.96952 18.9376 7.02376 18.8152 7.02376H18.822Z'
        fill='#92A2B1'
      />
    </g>
    <defs>
      <clipPath id='clip0_12_6329'>
        <rect width='102' height='80' fill='white' />
      </clipPath>
    </defs>
  </svg>
`;
const iconImageType = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.96 2.5H5.04002C3.63722 2.5 2.50002 3.6372 2.50002 5.04V14.96C2.49735 15.6345 2.7641 16.2821 3.24102 16.759C3.71794 17.2359 4.36556 17.5027 5.04002 17.5H14.96C15.6345 17.5027 16.2821 17.2359 16.759 16.759C17.2359 16.2821 17.5027 15.6345 17.5 14.96V5.04C17.5 3.6372 16.3628 2.5 14.96 2.5ZM5.04002 3.9H14.96C15.5896 3.9 16.1 4.41039 16.1 5.04V10.34L13.97 8.21C13.6932 7.93544 13.2468 7.93544 12.97 8.21L8.75002 12.44L6.75002 10.44C6.61977 10.303 6.43903 10.2255 6.25002 10.2255C6.06101 10.2255 5.88028 10.303 5.75002 10.44L3.90002 12.34V5.04C3.90002 4.41039 4.41042 3.9 5.04002 3.9ZM4.04002 15.4C4.20983 15.8072 4.59932 16.0798 5.04002 16.1H15.01C15.4507 16.0798 15.8402 15.8072 16.01 15.4C16.073 15.2621 16.1038 15.1116 16.1 14.96V12.32L13.5 9.7L9.28002 13.94C9.14977 14.077 8.96903 14.1545 8.78002 14.1545C8.59101 14.1545 8.41027 14.077 8.28002 13.94L6.28002 11.94L3.95002 14.32V14.96C3.94627 15.1116 3.97705 15.2621 4.04002 15.4Z" fill="currentColor"/>
  </svg>  
`;
const iconFileType = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.49 6.42C16.4995 6.47962 16.4995 6.54038 16.49 6.6C16.49 6.62 16.5 6.65 16.5 6.65V15.3C16.5 16.7912 15.2912 18 13.8 18H6.2C4.70883 18 3.5 16.7912 3.5 15.3V4.7C3.5 3.20883 4.70883 2 6.2 2H11.9C11.967 2.01181 12.0314 2.03551 12.09 2.07H12.16C12.2348 2.10382 12.3026 2.1513 12.36 2.21L16.36 6.15C16.4182 6.20966 16.4625 6.28134 16.49 6.36V6.42ZM14.11 6L12.56 4.39V6H14.11ZM6.2 16.6H13.8C14.4989 16.6005 15.0731 16.0484 15.1 15.35V7.35001H11.9C11.5134 7.35001 11.2 7.0366 11.2 6.65001V3.40001H6.2C5.48203 3.40001 4.9 3.98204 4.9 4.70001V15.3C4.9 15.6448 5.03696 15.9754 5.28076 16.2192C5.52456 16.463 5.85522 16.6 6.2 16.6ZM7 9.34H13.05H13.1C13.4866 9.34 13.8 9.6534 13.8 10.04C13.8 10.4266 13.4866 10.74 13.1 10.74H7C6.6134 10.74 6.3 10.4266 6.3 10.04C6.3 9.6534 6.6134 9.34 7 9.34ZM13.05 13H7C6.6134 13 6.3 13.3134 6.3 13.7C6.3 14.0866 6.6134 14.4 7 14.4H13.1C13.3501 14.4 13.5812 14.2666 13.7062 14.05C13.8313 13.8334 13.8313 13.5666 13.7062 13.35C13.5812 13.1334 13.3501 13 13.1 13H13.05ZM9.11 7.09H7C6.6134 7.09 6.3 6.7766 6.3 6.39001C6.3 6.00341 6.6134 5.69001 7 5.69001H9.11C9.4966 5.69001 9.81 6.00341 9.81 6.39001C9.81 6.7766 9.4966 7.09 9.11 7.09Z" fill="currentColor"/>
  </svg>
`;
const iconAddedLibrary = '<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.1875 2.7334C1.1875 1.62883 2.08293 0.733398 3.1875 0.733398H10.8131C11.9177 0.733398 12.8131 1.62883 12.8131 2.7334V14.518C12.8131 14.8375 12.4571 15.0281 12.1913 14.8509L7.2222 11.5382C7.08784 11.4486 6.9128 11.4486 6.77844 11.5382L1.80938 14.8509C1.54356 15.0281 1.1875 14.8375 1.1875 14.518V2.7334Z" fill="currentColor" stroke="currentColor" stroke-width="1.4"/></svg>';
const iconAddLibrary = '<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.1875 2.7334C1.1875 1.62883 2.08293 0.733398 3.1875 0.733398H10.8131C11.9177 0.733398 12.8131 1.62883 12.8131 2.7334V14.518C12.8131 14.8375 12.4571 15.0281 12.1913 14.8509L7.2222 11.5382C7.08784 11.4486 6.9128 11.4486 6.77844 11.5382L1.80938 14.8509C1.54356 15.0281 1.1875 14.8375 1.1875 14.518V2.7334Z" stroke="currentColor" stroke-width="1.4"/></svg>';

const file2Css = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{width:100%;min-width:80px;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.fw-attachment{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-direction:column;flex-direction:column}.fw-attachment .fw-attachment-content{width:100%;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:8px;background-color:#f5f7f9;border-radius:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.fw-attachment .fw-attachment-content .fw-attachment-content-left-panel{max-width:calc(100% - 16px - 8px);width:auto;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.fw-attachment .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-icon{--fw-icon-size:18px;-webkit-margin-end:6px;margin-inline-end:6px}.fw-attachment .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-icon fw-icon{vertical-align:text-top}.fw-attachment .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-name{width:auto;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#12344d;font-size:12px;font-weight:400;line-height:20px;word-break:break-word;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fw-attachment .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-file-extension{display:inline-block;width:auto;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;white-space:nowrap;color:#12344d;font-size:12px;font-weight:400;line-height:20px}.fw-attachment .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-size{display:inline-block;width:auto;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;margin:0;-webkit-margin-start:4px;margin-inline-start:4px;white-space:nowrap;color:#475867;font-size:12px;font-weight:400;line-height:20px;font-style:italic}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel{position:relative;width:16px;height:16px;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-spinner{position:absolute;inset-inline-end:-8px;pointer-events:none;line-height:0;-webkit-transform:scale(0.6);transform:scale(0.6)}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-add-library-btn{height:16px;width:16px;opacity:0;position:absolute;inset-inline-end:24px;inset-block-start:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:transparent}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-add-library-btn:hover,.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-add-library-btn:focus{cursor:pointer;pointer-events:initial}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-add-library-btn .fw-attachment-content-add-library-btn-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:12px;height:12px;--fw-icon-color:#fff}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn{height:16px;width:16px;position:absolute;inset-inline-end:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:#92a2b1;border-radius:50%}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn:hover,.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn:focus{cursor:pointer;pointer-events:initial}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn .fw-attachment-content-delete-btn-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:12px;height:12px;--fw-icon-color:#fff}.fw-attachment .fw-attachment-content:hover .fw-attachment-content-left-panel,.fw-attachment .fw-attachment-content:focus .fw-attachment-content-left-panel{max-width:calc(100% - 16px - 8px - 16px - 8px)}.fw-attachment .fw-attachment-content:hover .fw-attachment-content-right-panel,.fw-attachment .fw-attachment-content:focus .fw-attachment-content-right-panel{width:40px}.fw-attachment .fw-attachment-content:hover .fw-attachment-content-right-panel .fw-attachment-content-add-library-btn,.fw-attachment .fw-attachment-content:focus .fw-attachment-content-right-panel .fw-attachment-content-add-library-btn{opacity:1}.fw-attachment .fw-attachment-content-error{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;padding-inline:8px;padding-block:4px;display:-ms-flexbox;display:flex;gap:8px}.fw-attachment .fw-attachment-content-error .fw-attachment-content-error-icon{height:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.fw-attachment .fw-attachment-content-error .fw-attachment-content-error-message{width:auto;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;white-space:nowrap;color:#c82124;font-size:12px;font-weight:400;line-height:20px}.fw-attachment .fw-attachment-content-error .fw-attachment-content-reupload-btn{display:inline-block;width:auto;cursor:pointer;height:18px;padding:0;border:none;font-weight:500;font-family:inherit;font-size:12px;background-color:transparent;background-image:none;color:#2c5cc5}.fw-attachment--error-state .fw-attachment-content{background-color:#ffecf0}.fw-attachment--error-state .fw-attachment-content .fw-attachment-content-left-panel{max-width:calc(100% - 16px - 8px) !important}.fw-attachment--error-state .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-name{color:#c82124}.fw-attachment--error-state .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-file-extension{color:#c82124}.fw-attachment--error-state .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-size{color:#c82124}.fw-attachment--error-state .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn{background-color:#c82124}.fw-attachment--failed-state .fw-attachment-content{background-color:#ffecf0}.fw-attachment--failed-state .fw-attachment-content .fw-attachment-content-left-panel{max-width:calc(100% - 16px - 8px) !important}.fw-attachment--failed-state .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-name{color:#c82124}.fw-attachment--failed-state .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-file-extension{color:#c82124}.fw-attachment--failed-state .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-size{color:#c82124}.fw-attachment--failed-state .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn{background-color:#c82124}.fw-attachment--loading-state .fw-attachment-content .fw-attachment-content-left-panel{max-width:calc(100% - 16px - 8px) !important}.fw-attachment--loading-state .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn{background-color:transparent}.fw-attachment--loading-state .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn .fw-attachment-content-delete-btn-icon{--fw-icon-color:#2c5cc5}.fw-attachment--private-mode .fw-attachment-content{background-color:rgba(254, 220, 179, 0.5)}.fw-attachment--private-mode .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn{background-color:#e86f25}.fw-attachment--private-mode .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn .fw-attachment-content-delete-btn-icon{--fw-icon-color:#fff}";

const File2 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwDelete = index.createEvent(this, "fwDelete", 7);
    this.fwModifyLibrary = index.createEvent(this, "fwModifyLibrary", 7);
    this.fwReupload = index.createEvent(this, "fwReupload", 7);
    /**
     * Name of the attachment file to be displayed (including the file extension)
     */
    this.label = '';
    /**
     * File type
     */
    this.type = null;
    /**
     * Size of the attachment in bytes
     */
    this.size = 0;
    /**
     * Boolean used to display size as passed or convert them to relatives like KB, MB etc...
     */
    this.parseSize = true;
    /**
     * Set private mode for different styles
     */
    this.isPrivateMode = false;
    /**
     * Error message text to display below the attachment
     */
    this.errorMessage = '';
    /**
     * Boolean value to set if the attachment is added in library or not
     */
    this.addedToLibrary = false;
    /**
     * State of the attachment for styling
     */
    this.state = 'normal';
    /**
     * Index order of the attachment file starting from 0
     */
    this.index = -1;
    /**
     * To enable library adding related feature
     */
    this.enableLibraryAdding = false;
    this.modifyLibraryHandler = async (event) => {
      if (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
      this.fwModifyLibrary.emit({
        index: this.index,
        value: this.value,
        state: this.state,
        type: this.addedToLibrary ? 'REMOVE_FROM_LIBRARY' : 'ADD_TO_LIBRARY',
      });
    };
    this.deleteHandler = async (event) => {
      if (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
      this.fwDelete.emit({
        index: this.index,
        value: this.value,
        state: this.state,
      });
    };
    this.reUploadHandler = async (event) => {
      if (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
      this.fwReupload.emit({
        index: this.index,
        value: this.value,
        state: this.state,
      });
    };
  }
  componentDidRender() {
    const elSize = this.spanSize;
    if (elSize && !this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        const sizeW = elSize.clientWidth;
        const extensionW = this.spanExtension.clientWidth;
        if (sizeW > 0 || extensionW > 0) {
          this.spanName.style.maxWidth = `calc(100% - ${sizeW}px - 4px - ${extensionW})`;
        }
      });
      this.resizeObserver.observe(elSize);
    }
  }
  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
  getFileSize() {
    const bytes = this.size;
    if (bytes === 0) {
      return ' (0 B)';
    }
    const k = index$2.KB_TO_BYTE;
    const dm = 2;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return ` (${parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]})`;
  }
  getFilenameAndExtension() {
    if (!this.label || this.label === '') {
      return ['', ''];
    }
    const numLastIndex = this.label.lastIndexOf('.');
    if (numLastIndex > -1) {
      const strFileExtension = this.label.substring(numLastIndex + 1);
      return [
        this.label.substring(0, numLastIndex),
        strFileExtension && strFileExtension !== ''
          ? `.${strFileExtension}`
          : '',
      ];
    }
    else {
      return [this.label, ''];
    }
  }
  render() {
    var _a;
    const strClassName = 'fw-attachment';
    const boolErrorState = this.state === 'error';
    const boolFailedState = this.state === 'failed';
    const boolLoadingState = this.state === 'loading';
    const boolNormalState = this.state === 'normal';
    let strBaseClassName = strClassName;
    if (!boolNormalState) {
      strBaseClassName += ` ${strClassName}--${this.state}-state`;
    }
    else if (this.isPrivateMode) {
      strBaseClassName += ` ${strClassName}--private-mode`;
    }
    const strSize = this.parseSize ? this.getFileSize() : this.size;
    const arrFilebreak = this.getFilenameAndExtension();
    const strFileName = arrFilebreak && arrFilebreak.length > 0 ? arrFilebreak[0] : '';
    const strFileExtension = arrFilebreak && arrFilebreak.length > 1 ? arrFilebreak[1] : '';
    return (index.h(index.Host, null, index.h("div", { class: strBaseClassName }, index.h("div", { class: `${strClassName}-content` }, index.h("div", { class: `${strClassName}-content-left-panel` }, index.h("span", { class: `${strClassName}-content-icon` }, index.h("fw-icon", { dataSvg: ((_a = this.type) === null || _a === void 0 ? void 0 : _a.startsWith('image/')) === true
        ? iconImageType
        : iconFileType, color: boolErrorState || boolFailedState ? '#d72d30' : '#264966' })), index.h("span", { class: `${strClassName}-content-name`, ref: (el) => (this.spanName = el) }, strFileName), index.h("span", { class: `${strClassName}-content-file-extension`, ref: (el) => (this.spanExtension = el) }, strFileExtension), index.h("span", { class: `${strClassName}-content-size`, ref: (el) => (this.spanSize = el) }, strSize)), index.h("div", { class: `${strClassName}-content-right-panel` }, this.enableLibraryAdding && boolNormalState && (index.h("fw-tooltip", { trigger: 'hover', content: this.addedToLibrary
        ? Translation.TranslationController.t('fileUploader.removeFromLibrary')
        : Translation.TranslationController.t('fileUploader.saveInLibrary'), hoist: true }, index.h("div", { id: this.addedToLibrary
        ? 'removeFromLibraryBtn'
        : 'addToLibraryBtn', class: `${strClassName}-content-add-library-btn`, role: 'button', tabindex: '-1', onClick: this.modifyLibraryHandler, onKeyDown: index$1.handleKeyDown(this.modifyLibraryHandler) }, index.h("fw-icon", { id: this.addedToLibrary
        ? 'removeFromLibraryBtnIcon'
        : 'addToLibraryBtnIcon', class: `${strClassName}-content-add-library-btn-icon`, dataSvg: this.addedToLibrary ? iconAddedLibrary : iconAddLibrary, color: this.addedToLibrary ? '#2C5CC5' : '#475867' })))), !boolLoadingState && (index.h("div", { class: `${strClassName}-content-delete-btn`, role: 'button', tabindex: '0', onClick: this.deleteHandler, onKeyDown: index$1.handleKeyDown(this.deleteHandler) }, index.h("fw-icon", { class: `${strClassName}-content-delete-btn-icon`, name: 'cross', size: 6, library: 'system' }))), boolLoadingState && (index.h("fw-spinner", { size: 'large', class: `${strClassName}-content-spinner` })))), (boolErrorState || boolFailedState) && (index.h("div", { class: `${strClassName}-content-error` }, index.h("span", { class: `${strClassName}-content-error-icon` }, index.h("fw-icon", { name: 'error', size: 12, color: '#d72d30' })), index.h("span", { class: `${strClassName}-content-error-message` }, this.errorMessage), (boolErrorState || boolFailedState) && (index.h("button", { class: `${strClassName}-content-reupload-btn`, onClick: this.reUploadHandler }, Translation.TranslationController.t('fileUploader2.retry'))))))));
  }
  get host() { return index.getElement(this); }
};
File2.style = file2Css;

class UploaderFile {
  constructor(id, file, progress, lastServerResponse, error) {
    this.id = id;
    this.name = file.name;
    this.progress = progress || 0;
    this.size = file.size;
    this.type = file.type;
    this.file = file;
    this.error = error || '';
    this.lastServerResponse = lastServerResponse || null;
  }
  get state() {
    let state = 'normal';
    if (this.progress === 0 || this.progress === 100) {
      state = 'normal';
    }
    else if (this.progress < 0) {
      state = 'error';
    }
    else {
      state = 'loading';
    }
    return state;
  }
}

const fileUploader2Css = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;--max-attachment-block-width:320px;--max-attachment-block-height:auto}.file-uploader{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px;min-width:360px}.file-uploader__header{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px}.file-uploader__header__block{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;line-height:24px}.file-uploader__header__block__title{font-weight:600;font-size:16px;letter-spacing:-0.32px;color:#12344d;-ms-flex-positive:0;flex-grow:0}.file-uploader__header__block__title--uniform{font-size:12px;color:#475867}.file-uploader__header__block__title.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.file-uploader__header__block__option{-ms-flex-positive:0;flex-grow:0}.file-uploader__header__block__option a{text-decoration:none;color:#2c5cc5;font-size:12px;letter-spacing:0.07px}.file-uploader__header__block__option a:hover,.file-uploader__header__block__option a:focus{cursor:pointer}.file-uploader__body{display:-ms-flexbox;display:flex;width:100%;min-width:320px;min-height:153px;background:#fff;-ms-flex-pack:center;justify-content:center;border-radius:8px}.file-uploader__body--uniform{-webkit-margin-before:-12px;margin-block-start:-12px}.file-uploader__body--hide{display:none}.file-uploader__body__dropzone,.file-uploader__body__files{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;-ms-flex-pack:center;justify-content:center}.file-uploader__body__dropzone{-ms-flex-align:center;align-items:center;cursor:pointer;border:1px dashed var(--fw-file-uploader-border, #b1bdc8);border-radius:8px}.file-uploader__body__dropzone--disabled{opacity:0.8}.file-uploader__body__dropzone--error{border:1px dashed var(--fw-file-uploader-error-border, #d72d30);}.file-uploader__body__dropzone--error:hover,.file-uploader__body__dropzone--error:focus{border:1px solid var(--fw-file-uploader-error-border, #d72d30)}.file-uploader__body__dropzone--error:focus-visible{outline:0}.file-uploader__body__dropzone:hover,.file-uploader__body__dropzone:focus{position:cursor}.file-uploader__body__dropzone__center{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;-ms-flex-pack:justify;justify-content:space-between}.file-uploader__body__dropzone__center__clickable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-inline:0;margin-block:auto;-webkit-padding-before:28px;padding-block-start:28px;-webkit-padding-after:32px;padding-block-end:32px}.file-uploader__body__dropzone__center__clickable__icon{-webkit-margin-after:7px;margin-block-end:7px}.file-uploader__body__dropzone__center__clickable__text,.file-uploader__body__dropzone__center__clickable__error{line-height:20px;font-size:14px;font-weight:500;color:#12344d;-webkit-margin-before:9px;margin-block-start:9px;-webkit-margin-after:3px;margin-block-end:3px}.file-uploader__body__dropzone__center__clickable__text .highlight,.file-uploader__body__dropzone__center__clickable__error .highlight{color:#2c5cc5}.file-uploader__body__dropzone__center__clickable__text .highlight:hover,.file-uploader__body__dropzone__center__clickable__text .highlight:focus,.file-uploader__body__dropzone__center__clickable__error .highlight:hover,.file-uploader__body__dropzone__center__clickable__error .highlight:focus{cursor:pointer}.file-uploader__body__dropzone__center__clickable__error{color:#c82124}.file-uploader__body__dropzone__center__clickable__description{line-height:20px;font-size:12px;color:#92a2b1}.file-uploader__body__files{-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center}.file-uploader__body__files__center{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:12px}.file-uploader__body__files__restrict{max-width:var(--max-attachment-block-width);max-height:var(--max-attachment-block-height);overflow-y:auto}.file-uploader__body--on-drag{border:1px dashed var(--fw-file-uploader-border, #2c5cc5);background:#e5f2fd}";

let fileCount = 0;
const FileUploader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwChange = index.createEvent(this, "fwChange", 7);
    this.fwFileChange = index.createEvent(this, "fwFileChange", 7);
    this.fwFilesUploaded = index.createEvent(this, "fwFilesUploaded", 7);
    this.fwFileUploaded = index.createEvent(this, "fwFileUploaded", 7);
    this.fwFileReuploaded = index.createEvent(this, "fwFileReuploaded", 7);
    /**
     * name - field name
     */
    this.name = '';
    /**
     * Inline information text, hint text.
     */
    this.hintText = '';
    /**
     * accept - comma separated string. tells us what file formats file uploader should accept.
     */
    this.accept = '';
    /**
     * maxFileSize - maximum file size the file uploader must accept.
     */
    this.maxFileSize = 0;
    /**
     * acceptError - Error message to display when format is invalid.
     */
    // @i18n({ keyName: 'fileUploader2.acceptError' })
    this.acceptError = Translation.TranslationController.t('fileUploader2.acceptError');
    /**
     * maxFileSizeError - Error message to display when file size exceeds limit
     */
    // @i18n({ keyName: 'fileUploader2.maxFileSizeError' })
    this.maxFileSizeError = Translation.TranslationController.t('fileUploader2.maxFileSizeError');
    /**
     * totalFileSizeAllowedError - Total file size (combination of all files) allowed for upload.
     */
    this.totalFileSizeAllowedError = Translation.TranslationController.t('fileUploader2.totalFileSizeAllowedError');
    /**
     * maxFilesLimitError - Error message when going beyond files limit.
     */
    // @i18n({ keyName: 'fileUploader2.maxFilesLimitError' })
    this.maxFilesLimitError = Translation.TranslationController.t('fileUploader2.maxFilesLimitError');
    /**
     * actionURL - URL to make server call.
     */
    this.actionURL = '';
    /**
     * actionParams - additional information to send to server other than the file.
     */
    this.actionParams = {};
    /**
     * multiple - upload multiple files.
     */
    this.multiple = false;
    /**
     * Max files allowed to upload.
     */
    this.filesLimit = 10;
    /**
     * Max total size allowed for upload
     */
    this.totalFileSizeAllowed = 0;
    /**
     * Upload all files in one single shot
     */
    this.isBatchUpload = false;
    /**
     * modify request
     * @param xhr
     * @returns xhr
     */
    this.modifyRequest = (xhr) => xhr;
    /**
     * to load default values in file uploader component.
     */
    this.initialFiles = [];
    /**
     * restrict the width of the attachment in the file uploader
     */
    this.restrictAttachmentBlock = false;
    /**
     * Use this prop to show the label on the component.
     */
    this.hideLabel = true;
    /**
     * Use a simple interface for the single file mode.
     */
    this.simpleInterfaceForSingleMode = false;
    /**
     * field acts as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * To maintain the same label styling as other form elements.
     */
    this.isFormLabel = false;
    /**
     * errorText - errorText collection.
     * Mutable as this can be set from form control too based on form validations.
     */
    this.errorText = '';
    /**
     * files - files collection.
     */
    this.files = [];
    /**
     * private
     * fileInputElement
     */
    this.fileInputElement = null;
    /**
     * private
     * dropzoneContainer
     */
    this.dropzoneContainer = null;
    /**
     * private
     * fileUploadPromises
     */
    this.fileUploadPromises = {};
    /**
     * private
     * formDataCollection
     */
    this.formDataCollection = {};
    /**
     * private
     * isBatchUploadInProgress
     */
    this.isBatchUploadInProgress = false; /**
  
    * private
    * isInitialFilesChange Denotes if this is initial files change.
    */
    this.isInitialFilesChange = false;
  }
  /**
   * watcher filesChangeHandler
   * @param files files modified
   */
  filesChangeHandler(files) {
    if (!this.isInitialFilesChange) {
      this.fwChange.emit({
        name: this.name,
        files: files,
      });
    }
  }
  /**
   * componentWillLoad life cycle event
   */
  componentWillLoad() {
    this.handleInitialFilesChange(this.initialFiles);
  }
  handleInitialFilesChange(changedFiles) {
    this.isInitialFilesChange = true;
    this._reset(false, false);
    if (this.multiple) {
      changedFiles.forEach((initialFile) => this.setLocalFile(initialFile));
    }
    else {
      if (changedFiles.length) {
        this.setLocalFile(changedFiles[0]);
      }
    }
    this.isInitialFilesChange = false;
  }
  setLocalFile(initialFile) {
    this.addFileToFiles(initialFile.file, initialFile.progress, initialFile.lastServerResponse, initialFile.error);
    this.addFileToFormDataCollection(initialFile.file);
  }
  /**
   * private
   * isBatchAllow - will determine if this is a batch upload
   * @returns {boolean} isBatchAllow
   */
  isBatchAllow() {
    return this.isBatchUpload || !this.actionURL ? true : false;
  }
  /**
   * private
   * get all locally available files in the component
   * @returns FileList of all locally available files in the component
   */
  _getFiles() {
    return this.files;
  }
  /**
   * get all locally available files in the component
   * @returns FileList of all locally available files in the component
   */
  async getFiles() {
    return this._getFiles();
  }
  _getFilesList() {
    const data = new DataTransfer();
    this.files.forEach((file) => {
      const formDataFile = this.formDataCollection[file.id].get('file');
      data.items.add(formDataFile);
    });
    return data.files;
  }
  async getFilesList() {
    return this._getFilesList();
  }
  async setFocus() {
    this.dropzoneContainer.focus();
  }
  /**
   * private
   * reset file uploader
   */
  _reset(resetInput = true, resetErrors = true) {
    this.files = [];
    this.formDataCollection = {};
    this.fileUploadPromises = {};
    if (resetInput && this.fileInputElement) {
      this.fileInputElement.value = '';
    }
    if (resetErrors) {
      this.errorText = '';
    }
  }
  /**
   * reset file uploader
   */
  async reset() {
    this._reset();
  }
  /**
   * private
   * filesValidation validate collection of files
   * @param files files to be validated
   * @returns filesValidation
   */
  filesValidation(files) {
    let passed = true;
    const totalFiles = [...this.files, ...Array.from(files)];
    const totalSize = totalFiles.reduce((acc, obj) => acc + obj.size, 0);
    this.errorText = '';
    if (totalFiles.length > this.filesLimit) {
      this.errorText = this.maxFilesLimitError;
      passed = false;
    }
    else if (this.totalFileSizeAllowed !== 0 &&
      totalSize > this.totalFileSizeAllowed * index$2.MB_TO_KB * index$2.KB_TO_BYTE) {
      this.errorText = this.totalFileSizeAllowedError;
      passed = false;
    }
    else {
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        passed = this.fileValidation(file);
        if (!passed) {
          break;
        }
      }
    }
    return passed;
  }
  /**
   * private
   * fileValidation validate a file for upload
   * @param file
   * @returns
   */
  fileValidation(file) {
    let isPassed = true;
    const fileExtension = file.name;
    const fileSize = file.size;
    const errors = [];
    if (this.accept) {
      isPassed = this.accept
        .split(',')
        .filter((fileType) => fileType !== '')
        .some((fileType) => fileExtension.includes(fileType.trim()));
      if (!isPassed) {
        errors.push(this.acceptError);
      }
    }
    if (this.maxFileSize !== 0) {
      if (fileSize > this.maxFileSize * index$2.MB_TO_KB * index$2.KB_TO_BYTE) {
        isPassed = false;
        errors.push(this.maxFileSizeError);
      }
    }
    this.errorText = errors.length ? errors[0] : '';
    return isPassed;
  }
  /**
   * private
   * addFileToFormDataCollection - add a file to formDataCollection state
   * @param file file to add in formDataCollection
   */
  addFileToFormDataCollection(file) {
    const formData = new FormData();
    formData.append('file', file);
    this.formDataCollection[fileCount] = formData;
  }
  /**
   * private
   * removeFileFromFormDataCollection - remove a file from the formDataCollection state
   * @param fileId id of the file
   */
  removeFileFromFormDataCollection(fileId) {
    delete this.formDataCollection[fileId];
  }
  /**
   * private
   * findFileIndex - find the index of file in files state
   * @param fileId if of the file
   * @returns fileIndex
   */
  findFileIndex(fileId) {
    return this.files.findIndex((file) => file.id === parseInt(fileId));
  }
  /**
   * private
   * addFileToFiles - Add the file to the files state
   * @param file file to add to the files state
   * @param progress current upload progress state of the file
   * @param lastServerResponse last response from the server
   * @param error error message from the upload
   * @returns
   */
  addFileToFiles(file, progress, lastServerResponse, error) {
    const uploaderFile = new UploaderFile(++fileCount, file, progress, lastServerResponse, error);
    this.files = [...this.files, uploaderFile];
    return uploaderFile;
  }
  /**
   * private
   * removeFileFromFiles - remove file from the files state
   * @param fileId id of the file
   */
  removeFileFromFiles(fileId) {
    const fileIndex = this.findFileIndex(fileId);
    const removedFile = this.files[fileIndex];
    if (fileIndex >= 0) {
      const beforeFiles = this.files.slice(0, fileIndex);
      const afterFiles = this.files.slice(fileIndex + 1, this.files.length + 1);
      this.files = [...beforeFiles, ...afterFiles];
    }
    return removedFile;
  }
  /**
   * private
   * updateFileInFiles - update the file object in the files state
   */
  updateFileInFiles(fileId, updateObject, updateAction) {
    const fileIndex = this.findFileIndex(fileId);
    if (fileIndex >= 0) {
      this.files = [
        ...this.files.slice(0, fileIndex),
        Object.assign(this.files[fileIndex], updateObject),
        ...this.files.slice(fileIndex + 1, this.files.length),
      ];
    }
    this.fwFileChange.emit({
      name: this.name,
      file: this.files[fileId],
      action: updateAction ? updateAction : 'unknown',
      files: this._getFiles(),
      fileList: this._getFilesList(),
    });
  }
  /**
   * private
   * uploadFileLocally - upload the files locally to files and formDataCollection
   * @param file file to upload locally
   * @returns localFile local file state
   */
  uploadFileLocally(file) {
    const localFile = this.addFileToFiles(file);
    this.addFileToFormDataCollection(file);
    this.fwFileChange.emit({
      name: this.name,
      file: localFile,
      action: 'local-upload',
      files: this._getFiles(),
      fileList: this._getFilesList(),
    });
    return localFile;
  }
  /**
   * private
   * removeFileLocally - remove the file from the local states files and formDataCollection
   * @param fileId id of the file
   */
  removeFileLocally(fileId) {
    const removedFile = this.removeFileFromFiles(fileId);
    this.removeFileFromFormDataCollection(fileId);
    if (this.files.length === 0) {
      this._reset();
    }
    return removedFile;
  }
  /**
   * removeFileByUser remove file action is taken by the user
   * @param fileId file ID to remove from files collection
   */
  removeFileLocallyByUser(fileId) {
    const removedFile = this.removeFileLocally(fileId);
    this.fwFileChange.emit({
      name: this.name,
      file: removedFile,
      action: 'local-remove',
      files: this._getFiles(),
      fileList: this._getFilesList(),
    });
  }
  /**
   * private
   * uploadFile - upload file to the remote server.
   * @param fileId id of the file
   * @returns fileUploadPromise promise from the file upload that will return server response
   */
  uploadFile(fileId) {
    const formData = this.formDataCollection[fileId];
    this.updateFileInFiles(fileId, { progress: 1 }, 'remote-upload-progress');
    // adding extra information to formData before uploading
    for (const key in this.actionParams) {
      if (Object.prototype.hasOwnProperty.call(this.actionParams, key)) {
        formData.append(key, this.actionParams[key]);
      }
    }
    // creating and sending xhr requests
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (event) => this.updateFileInFiles(fileId, {
      progress: (event.loaded / event.total) * 100,
    }, 'remote-upload-progress'), false);
    const fileUploadPromise = new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          const serverResponse = {
            uploadStatus: xhr.status,
            response: xhr.response,
          };
          if (xhr.status === 200) {
            this.updateFileInFiles(fileId, { lastServerResponse: serverResponse }, 'remote-upload');
            resolve(Object.assign(Object.assign({}, serverResponse), { fileId: fileId }));
          }
          else {
            this.updateFileInFiles(fileId, {
              error: this.fileUploadError ||
                Translation.TranslationController.t('fileUploader2.fileUploadError'),
              progress: -1,
              lastServerResponse: serverResponse,
            }, 'remote-upload');
            reject(Object.assign(Object.assign({}, serverResponse), { fileId: fileId }));
          }
        }
      };
    });
    xhr.open('POST', this.actionURL);
    const modifiedRequest = this.modifyRequest(xhr);
    modifiedRequest.send(formData);
    return fileUploadPromise;
  }
  /**
   * uploadFile
   * @param fileId
   * @returns fileUploadPromise
   */
  async uploadFiles() {
    if (this.files.length &&
      this.isBatchAllow() &&
      !this.isBatchUploadInProgress) {
      this.isBatchUploadInProgress = true;
      for (const fileId in this.formDataCollection) {
        if (Object.prototype.hasOwnProperty.call(this.formDataCollection, fileId)) {
          const uploadPromise = this.uploadFile(fileId);
          this.fileUploadPromises[fileId] = uploadPromise;
        }
      }
      Promise.allSettled(Object.values(this.fileUploadPromises)).then((responses) => {
        let hasErrorFiles = false;
        this.fileUploadPromises = {};
        const responseValues = responses.map((response) => {
          var _a, _b;
          if (((_a = response.value) === null || _a === void 0 ? void 0 : _a.uploadStatus) === 200) {
            this.removeFileLocally((_b = response.value) === null || _b === void 0 ? void 0 : _b.fileId);
          }
          else {
            hasErrorFiles = true;
          }
          return response.value;
        });
        const responseValue = this.multiple
          ? responseValues
          : responseValues[0];
        this.fwFilesUploaded.emit(responseValue);
        if (!hasErrorFiles) {
          this.isBatchUploadInProgress = false;
        }
      });
    }
    else {
      console.log('uploadFiles is for batch upload');
    }
  }
  /**
   * retryFileUpload
   * @param fileId file ID to retry uploading to server
   */
  retryFileUpload(fileId) {
    this.updateFileInFiles(fileId, { error: '' }, 'remote-retry');
    const uploadPromise = this.uploadFile(fileId);
    uploadPromise.then((serverResponse) => {
      if (this.isBatchAllow()) {
        this.removeFileLocally(fileId);
        if (Object.keys(this.formDataCollection).length === 0) {
          this.isBatchUploadInProgress = false;
        }
      }
      this.fwFileReuploaded.emit(serverResponse);
    });
  }
  /**
   * private
   * fileHandler - handler for both drop and input change
   * @param event
   */
  fileHandler(event) {
    if (!this.multiple && this.files.length === 1) {
      this._reset(false);
    }
    const tempFiles = event.target.files || event.dataTransfer.files;
    let files = [];
    if (tempFiles.length) {
      files = this.multiple ? tempFiles : [tempFiles[0]];
    }
    if (files.length) {
      const passed = this.filesValidation(files);
      if (passed) {
        for (let index = 0; index < files.length; index++) {
          const file = files[index];
          const localFile = this.uploadFileLocally(file);
          if (!this.isBatchAllow()) {
            this.uploadFile(localFile.id).then((serverResponse) => {
              this.fwFileUploaded.emit(serverResponse);
            });
          }
        }
      }
    }
  }
  showSimpleInterface() {
    return (!this.multiple &&
      this.simpleInterfaceForSingleMode &&
      this.files.length === 1);
  }
  /**
   * private
   * drag and drop handler
   * @param event
   */
  dropHandler(event) {
    event.preventDefault();
    this.fileHandler(event);
  }
  /**
   * renderDropzone
   * @returns {JSX.Element}
   */
  renderDropzone() {
    return (index.h("div", { class: {
        'file-uploader__body__dropzone': true,
        'file-uploader__body__dropzone--disabled': this.isBatchUploadInProgress,
        'file-uploader__body__dropzone--error': !!this.errorText.length,
      }, key: 'dropzone', part: 'fw-file-uploader-dropzone', tabIndex: 0, onDrop: (event) => !this.isBatchUploadInProgress && this.dropHandler(event), onDragOver: (event) => event.preventDefault(), onClick: () => !this.isBatchUploadInProgress && this.fileInputElement.click(), onKeyUp: (event) => {
        if (event.key === 'Enter' || event.key === 'Space') {
          !this.isBatchUploadInProgress && this.fileInputElement.click();
        }
      }, ref: (el) => (this.dropzoneContainer = el), role: 'button' }, index.h("div", { class: 'file-uploader__body__dropzone__center' }, index.h("div", { class: 'file-uploader__body__dropzone__center__clickable', part: 'fw-file-uploader-clickable' }, index.h("div", { class: 'file-uploader__body__dropzone__center__clickable__icon' }, !this.errorText.length ? (index.h("div", { innerHTML: new DOMParser().parseFromString(fileDragSVG, 'text/html')
        .body.innerHTML })) : (index.h("div", { innerHTML: new DOMParser().parseFromString(fileErrorSVG, 'text/html')
        .body.innerHTML }))), !this.errorText.length ? (index.h("div", { class: 'file-uploader__body__dropzone__center__clickable__text', part: 'fw-file-uploader-text', innerHTML: this.text || Translation.TranslationController.t('fileUploader2.text') })) : (index.h("div", { class: 'file-uploader__body__dropzone__center__clickable__error', part: 'fw-file-uploader-error' }, this.errorText, ".", ' ', index.h("span", { class: 'highlight' }, Translation.TranslationController.t('fileUploader2.retry')))), this.description && (index.h("div", { class: 'file-uploader__body__dropzone__center__clickable__description', part: 'fw-file-uploader-desc' }, index.h("span", null, this.description)))))));
  }
  /**
   * renderFiles
   * @returns {JSX.Element}
   */
  renderFiles() {
    return this.files.length ? (index.h("div", { class: 'file-uploader__body__files', key: 'files' }, index.h("div", { class: {
        'file-uploader__body__files__restrict': this.restrictAttachmentBlock,
      } }, index.h("div", { class: 'file-uploader__body__files__center', part: 'fw-file-uploader-attachments-block' }, this.files.map((file) => {
      return (index.h("fw-file-2", { index: file.id, label: file.name, size: file.size, state: file.state, type: file.type, errorMessage: file.error, onFwDelete: (event) => {
          event.stopPropagation();
          this.removeFileLocallyByUser(event.detail.index);
        }, onFwReupload: (event) => {
          event.stopPropagation();
          this.retryFileUpload(event.detail.index);
        } }));
    }))))) : null;
  }
  /**
   * render
   * @returns {JSX.Element}
   */
  render() {
    const multipleFiles = this.multiple ? { multiple: true } : {};
    index$1.renderHiddenField(this.host, this.name, null, this._getFilesList());
    return (index.h("div", { class: 'file-uploader' }, (this.hintText.trim() !== '' || !this.hideLabel || this.required) && (index.h("div", { class: 'file-uploader__header' }, index.h("div", { class: 'file-uploader__header__block' }, (!this.hideLabel || this.required) && (index.h("div", { class: {
        'file-uploader__header__block__title': true,
        'file-uploader__header__block__title--uniform': this.isFormLabel,
        'required': this.required,
      } }, Translation.TranslationController.t('fileUploader2.attachFiles'))), index.h("div", { class: 'file-uploader__header__block__option' }, this.showSimpleInterface() && (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    index.h("a", { role: 'button', tabIndex: 0, onClick: () => this.fileInputElement.click(), onKeyDown: (ev) => ev.key === 'Enter' && this.fileInputElement.click() }, Translation.TranslationController.t('fileUploader2.uploadDifferentFile'))))), this.hintText.trim() !== '' ? (index.h("fw-inline-message", { open: true, type: 'info' }, this.hintText)) : null)), index.h("div", { class: {
        'file-uploader__body': true,
        'file-uploader__body--uniform': this.isFormLabel,
        'file-uploader__body--error': !!this.errorText.length,
        'file-uploader__body--hide': this.showSimpleInterface(),
      }, onDragOver: (ev) => {
        ev.currentTarget.classList.add('file-uploader__body--on-drag');
      }, onDragLeave: (ev) => {
        ev.currentTarget.classList.remove('file-uploader__body--on-drag');
      }, onDrop: (ev) => {
        ev.currentTarget.classList.remove('file-uploader__body--on-drag');
      } }, index.h("input", Object.assign({ type: 'file', name: this.name, hidden: true }, multipleFiles, { onChange: (ev) => {
        this.fileHandler(ev);
      }, accept: this.accept, ref: (el) => (this.fileInputElement = el) })), this.renderDropzone()), this.renderFiles()));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "files": ["filesChangeHandler"],
    "initialFiles": ["handleInitialFilesChange"]
  }; }
};
FileUploader.style = fileUploader2Css;

const inlineMessageCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{margin:0}.alert{position:relative;display:-ms-flexbox;display:flex;width:100%;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:inherit;padding:8px;background-color:transparent}.alert--success{background:#e0f5f1;border:1px solid #b4e5da}.alert--success .alert__message{-webkit-border-start:1px solid #b4e5da;border-inline-start:1px solid #b4e5da}.alert--warning{background:#fef1e1;border:1px solid #fedcb3}.alert--warning .alert__message{-webkit-border-start:1px solid #fedcb3;border-inline-start:1px solid #fedcb3}.alert--info{background:#e5f2fd;border:1px solid #bbdcfe}.alert--info .alert__message{-webkit-border-start:1px solid #bbdcfe;border-inline-start:1px solid #bbdcfe}.alert--error{border:1px solid #ffd0d6;background:#ffecf0}.alert--error .alert__message{-webkit-border-start:1px solid #ffd0d6;border-inline-start:1px solid #ffd0d6}.alert__icon{display:-ms-flexbox;display:flex;height:20px;-ms-flex-align:center;align-items:center;-webkit-margin-end:8px;margin-inline-end:8px;-webkit-box-sizing:border-box;box-sizing:border-box}.alert__message{-webkit-padding-start:12px;padding-inline-start:12px;-ms-flex:1 1 auto;flex:1 1 auto;color:#12344d;font-size:14px;font-weight:400;line-height:20px}.alert__message ::slotted(a){font-weight:500;color:#365dbe;text-decoration:none}.alert__close{display:-ms-flexbox;display:flex;height:20px;width:20px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer}";

const iconMap = {
  error: 'alert',
  warning: 'info',
  info: 'info',
  success: 'success',
};
const iconColorMap = {
  error: '#e43538',
  warning: '#c7502f',
  info: '#264966',
  success: '#00795b',
};
const InlineMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwShow = index.createEvent(this, "fwShow", 7);
    this.fwHide = index.createEvent(this, "fwHide", 7);
    /**
     * Makes the inline message closable.
     */
    this.closable = true;
    /**
     * The type of inline message to be displayed. Defaults to info.
     */
    this.type = 'info';
    /**
     * The duration in milliseconds for which inline message will be shown.
     */
    this.duration = Infinity;
    /**
     * Indicates whether the inline message is open or not.
     */
    this.open = true;
  }
  startAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = setTimeout(() => this.hide(), this.duration);
    }
  }
  handleOpen() {
    if (this.open) {
      this.host.style.display = 'flex';
      this.fwShow.emit();
      if (this.duration < Infinity) {
        this.startAutoHide();
      }
    }
    else {
      clearTimeout(this.autoHideTimeout);
      this.host.style.display = 'none';
      this.fwHide.emit();
    }
  }
  handleDurationChange() {
    this.startAutoHide();
  }
  async show() {
    if (this.open) {
      return;
    }
    this.open = true;
  }
  async hide() {
    if (!this.open) {
      return;
    }
    this.open = false;
  }
  connectedCallback() {
    this.host.style.display = this.open ? 'flex' : 'none';
  }
  disconnectedCallback() {
    clearTimeout(this.autoHideTimeout);
  }
  handleKeyUp(e) {
    if (e.code === 'Enter') {
      e.preventDefault();
      this.hide();
    }
  }
  handleClose() {
    this.hide();
  }
  render() {
    return (index.h(index.Host, { role: 'alert', "aria-hidden": this.open ? 'false' : 'true' }, index.h("div", { class: 'alert ' + 'alert--' + this.type }, index.h("span", { class: 'alert__icon' }, index.h("fw-icon", { size: 16, name: iconMap[this.type], color: iconColorMap[this.type] })), index.h("span", { class: 'alert__message' }, index.h("slot", null)), this.closable && (index.h("span", { class: 'alert__close', role: 'button', tabindex: '0', onKeyUp: (e) => this.handleKeyUp(e), onClick: () => this.handleClose() }, index.h("fw-icon", { name: 'cross', color: '#12344d', size: 8, library: 'system' }))))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "open": ["handleOpen"],
    "duration": ["handleDurationChange"]
  }; }
};
InlineMessage.style = inlineMessageCss;

const nestedSelectCss$1 = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.nest_indent{-webkit-border-start:1px solid #cfd7df;border-inline-start:1px solid #cfd7df;padding-block:10px 0px;padding-inline:10px 0px}";

const NestedNode = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * State to maintain selectedOption
     */
    this.selectedOption = null;
    /**
     * Options to pass through and loop
     */
    this.options = [];
    /**
     * level to keep track of selected options and
     * reset on parent option changes
     */
    this.level = 0;
    /**
     * Name of the field value gets updated to
     */
    this.name = '';
    /**
     * Current selected value if passed from initialvalues
     */
    this.value = '';
    /**
     * label
     */
    this.label = '';
    /**
     * OptionValue path
     */
    this.optionValuePath = 'id';
    /**
     * optionLabelPath
     */
    this.optionLabelPath = 'value';
  }
  optionsChanged() {
    this.selectedOption = null;
    this.selectRef.setSelectedValues('');
  }
  changed(event) {
    var _a;
    console.log('IN CHANGE in Level' + this.level, event.target.level);
    if (!event.detail.level) {
      event.detail.level = this.level;
      if ((_a = event.detail.meta.selectedOptions[0]) === null || _a === void 0 ? void 0 : _a.choices) {
        this.selectedOption = event.detail.meta.selectedOptions[0];
      }
    }
  }
  componentWillLoad() {
    if (this.value) {
      this.selectedOption = this.options.find((item) => item[this.optionValuePath] === this.value);
    }
  }
  getFirstlevelNestedSelect() {
    if (!this.selectedOption) {
      return null;
    }
    const { value } = this.selectProps(this.selectedOption.name);
    return (index.h("div", { class: 'nest_indent' }, index.h("fw-nested-node", { options: this.selectedOption.choices, name: this.selectedOption.name, label: this.selectedOption.label, value: value, level: this.level + 1, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, selectProps: this.selectProps })));
  }
  getNestedSelect() {
    if (!this.selectedOption || !this.selectedOption.choices) {
      return null;
    }
    const { value } = this.selectProps(this.selectedOption.name);
    return (index.h("fw-nested-node", { options: this.selectedOption.choices, name: this.selectedOption.name, label: this.selectedOption.label, value: value, level: this.level + 1, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, selectProps: this.selectProps }));
  }
  render() {
    return (index.h("div", { class: 'nest' }, index.h("fw-select", { label: this.label, options: this.options, name: this.name, value: this.value, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, ref: (select) => (this.selectRef = select) }), this.level === 0
      ? this.getFirstlevelNestedSelect()
      : this.getNestedSelect()));
  }
  static get watchers() { return {
    "options": ["optionsChanged"]
  }; }
};
NestedNode.style = nestedSelectCss$1;

const nestedSelectCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.nest_indent{-webkit-border-start:1px solid #cfd7df;border-inline-start:1px solid #cfd7df;padding-block:10px 0px;padding-inline:10px 0px}";

const NestedSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwChange = index.createEvent(this, "fwChange", 7);
    this.selections = [];
    this.selectedItems = {};
    /**
     * Options to display
     */
    this.options = [];
    /**
     * Name of first level field
     */
    this.name = '';
    /**
     * label
     */
    this.label = '';
    /**
     * Initial value from first level choices
     */
    this.value = '';
    /**
     * OptionValuePath referred from field
     */
    this.optionValuePath = 'id';
    /**
     * OptionLabelPath referred from field
     */
    this.optionLabelPath = 'value';
  }
  changed(event) {
    if (!event.detail.meta) {
      return;
    }
    this.selections[event.detail.level] = event.detail.meta.selectedOptions[0];
    const itemsToRemove = this.selections.length - (event.detail.level + 1);
    if (itemsToRemove > 0) {
      this.selections = this.selections.slice(0, event.detail.level + 1);
    }
    this.getSelectedId(this.selections[event.detail.level], event.detail.name);
    if (!this.selections[event.detail.level].choices) {
      this.fwChange.emit(Object.assign({}, this.selectedItems));
    }
  }
  getSelectedId(selectedValues, name) {
    const id = selectedValues[this.optionValuePath];
    if (id) {
      this.selectedItems = Object.assign(Object.assign({}, this.selectedItems), { [name]: selectedValues[this.optionValuePath] });
    }
    else {
      delete this.selectedItems[name];
    }
  }
  render() {
    return (index.h("fw-nested-node", { options: this.options, name: this.name, value: this.value, label: this.label, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, selectProps: this.selectProps }));
  }
};
NestedSelect.style = nestedSelectCss;

const radioCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.radio-container{display:inline-block;position:relative;-webkit-padding-start:22px;padding-inline-start:22px;-webkit-margin-end:10px;margin-inline-end:10px;max-width:80ch;word-wrap:break-word}:host(:focus) input[type=radio]+label::before{border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5;border-color:#081824}:host(:focus) input[type=radio][disabled]+label::before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}:host(:hover) input[type=radio]+label::before{-webkit-box-shadow:0 0 0 5px #ebeff3;box-shadow:0 0 0 5px #ebeff3;border-color:#081824}:host(:hover) input[type=radio][disabled]+label{cursor:not-allowed}:host(:hover) input[type=radio][disabled]+label::before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}#description{font-size:12px;color:#475867;letter-spacing:0;line-height:20px;position:relative;font-weight:400}input[type=radio]{display:none}input[type=radio]+label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-margin-after:4px;margin-block-end:4px;vertical-align:middle;font-size:14px;line-height:20px;font-weight:400;color:#12344d}input[type=radio]+label .with-description{font-weight:600}input[type=radio]+label::before,input[type=radio]+label::after{content:\"\";display:block;position:absolute;inset-block-start:0;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (prefers-reduced-motion: reduce){input[type=radio]+label::before{-webkit-transition:none;transition:none}}input[type=radio]+label::before{inset-inline-start:0;border:1px solid #cfd7df;border-radius:50px;inset-block-start:4px;width:14px;height:14px;background:#fff;-webkit-transition:all 0.3s ease;transition:all 0.3s ease}@media screen and (prefers-reduced-motion: reduce){input[type=radio]+label.error::before{-webkit-transition:none;transition:none}}input[type=radio]+label.error::before{inset-inline-start:0;border:1px solid #d72d30;border-radius:50px;inset-block-start:4px;width:14px;height:14px;background:#fff;-webkit-transition:all 0.3s ease;transition:all 0.3s ease}@media screen and (prefers-reduced-motion: reduce){input[type=radio]+label::after{-webkit-transition:none;transition:none}}input[type=radio]+label::after{inset-inline-start:3px;border-radius:100%;width:8px;height:8px;opacity:0;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box}input[type=radio]:checked+label::before{background:#fff;border-color:#2c5cc5;-webkit-box-shadow:none;box-shadow:none}input[type=radio]:checked+label::after{border-radius:50%;background-color:#2c5cc5;opacity:1;inset-block-start:7px}input[type=radio]:checked:focus+label::before{border-color:#3868d3;-webkit-box-shadow:0 0 4px 1px rgba(44, 92, 197, 0.6);box-shadow:0 0 4px 1px rgba(44, 92, 197, 0.6)}input[type=radio]:checked:focus+label::after{background-color:#3868d3}input[type=radio][disabled]+label{color:#92a2b1}input[type=radio][disabled]+label .label-field{color:#92a2b1}input[type=radio][disabled]+label::before{border-color:#dadfe3;background-color:#ebeff3}input[type=radio][disabled]+label::after{border-color:#ebeff3;background-color:#dadfe3}input[type=radio][disabled]:checked+label{color:#92a2b1}:host(.fw-radio-group__radio){-webkit-margin-after:8px;margin-block-end:8px}:host(.fw-radio-group__radio--last){-webkit-margin-after:0px;margin-block-end:0px}";

const Radio = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwSelect = index.createEvent(this, "fwSelect", 7);
    this.fwDeselect = index.createEvent(this, "fwDeselect", 7);
    this.fwFocus = index.createEvent(this, "fwFocus", 7);
    this.fwBlur = index.createEvent(this, "fwBlur", 7);
    this.fwChange = index.createEvent(this, "fwChange", 7);
    /**
     * Sets the state to selected. If the attribute’s value is undefined, the value is set to false.
     */
    this.checked = false;
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Description to be displayed for the checkbox.
     */
    this.description = '';
    /**
     * @deprecated Use `description` instead.
     * Label displayed on the interface, for the check box.
     */
    this.label = '';
    /**
     * Identifier corresponding to the component, that is saved when the form data is saved.
     */
    this.value = '';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Theme based on which the radio button is styled.
     */
    this.state = 'normal';
  }
  componentDidLoad() {
    this.radio.checked = this.checked;
    this.radio.disabled = this.disabled;
  }
  checkChanged(isChecked) {
    if (!this.disabled) {
      if (isChecked) {
        this.fwSelect.emit({
          value: this.value,
          checked: true,
        });
      }
      else {
        this.fwDeselect.emit({
          value: this.value,
          checked: false,
        });
      }
    }
    this.radio.checked = isChecked;
  }
  disabledChanged(isDisabled) {
    this.radio.disabled = isDisabled;
  }
  onFocus() {
    this.fwFocus.emit();
  }
  onBlur(e) {
    this.fwBlur.emit({
      event: e,
      name: this.name,
    });
  }
  toggle(e) {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
    this.fwChange.emit({
      event: e,
      name: this.name,
      value: this.checked ? this.value : undefined,
    });
  }
  /**
   * Sets focus on a specific `fw-radio`.
   */
  async setFocus() {
    var _a;
    (_a = this.host) === null || _a === void 0 ? void 0 : _a.focus();
  }
  render() {
    return (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    index.h(index.Host, { onClick: (e) => this.toggle(e), role: 'radio', tabIndex: '-1', "aria-labelledby": 'label', "aria-describedby": `description`, "aria-disabled": this.disabled ? 'true' : 'false', "aria-checked": this.checked ? 'true' : 'false', onFocus: () => this.onFocus(), onBlur: (e) => this.onBlur(e), "aria-invalid": this.state === 'error' }, index.h("div", { class: 'radio-container' }, index.h("input", { type: 'radio', ref: (el) => (this.radio = el), name: this.name }), index.h("label", { class: { error: this.state === 'error' } }, index.h("span", { id: 'label', class: {
        'with-description': this.description !== '',
      } }, index.h("slot", null)), this.description !== '' || this.label !== '' ? (index.h("div", { id: 'description' }, this.description ? this.description : this.label)) : ('')))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "checked": ["checkChanged"],
    "disabled": ["disabledChanged"]
  }; }
};
Radio.style = radioCss;

const radioGroupCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}";

const RadioGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwChange = index.createEvent(this, "fwChange", 7);
    this.selectedIndex = 0;
    /**
     * If true, a radio group can be saved without selecting any option. If an option is selected, the selection can be cleared. If the attribute’s value is undefined, the value is set to false.
     */
    this.allowEmpty = false;
    /**
     * Label for the component
     */
    this.label = '';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Indicates the direction of the radio buttons alignment, defaults to vertical alignment.
     */
    this.orientation = 'column';
    /**
     * Specifies the input radio group as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Hint text displayed below the radio group.
     */
    this.hintText = '';
    /**
     * Warning text displayed below the radio group.
     */
    this.warningText = '';
    /**
     * Error text displayed below the radio group.
     */
    this.errorText = '';
    /**
     * Theme based on which the radio group is styled.
     */
    this.state = 'normal';
    this.hasHintTextSlot = false;
    this.hasWarningTextSlot = false;
    this.hasErrorTextSlot = false;
    this.onSelect = (ev) => {
      const selectedRadio = ev.target;
      if (selectedRadio) {
        this.value = selectedRadio.value;
      }
    };
    this.onDeselect = async (ev) => {
      const selectedRadio = ev.target;
      if (this.allowEmpty && selectedRadio.value === this.value) {
        this.value = undefined;
      }
      await this.updateRadios();
    };
  }
  async valueChanged() {
    await this.updateRadios();
  }
  handleKeydown(ev) {
    if (ev.code === 'ArrowDown' ||
      ev.code === 'ArrowRight' ||
      ev.code === 'ArrowLeft' ||
      ev.code === 'ArrowUp' ||
      ev.code === 'Space') {
      ev.preventDefault();
    }
  }
  handleKeyup(event) {
    const radios = this.radios;
    const supportedKeyStrokes = [
      'ArrowDown',
      'ArrowRight',
      'ArrowUp',
      'ArrowLeft',
      'Space',
    ];
    const previousSelected = this.selectedIndex;
    switch (event.code) {
      case 'ArrowDown':
      case 'ArrowRight':
        radios[previousSelected].setAttribute('tabindex', '-1');
        radios[previousSelected].checked = false;
        // set currently selectedIndex using roving tabindex technique
        this.selectedIndex = ++this.selectedIndex % radios.length;
        radios[this.selectedIndex].setAttribute('tabindex', '0');
        radios[this.selectedIndex].checked = true;
        radios[this.selectedIndex].focus();
        this.value = radios[this.selectedIndex].value;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        radios[previousSelected].setAttribute('tabindex', '-1');
        radios[previousSelected].checked = false;
        // set currently selectedIndex using roving tabindex technique
        this.selectedIndex =
          this.selectedIndex === 0 ? radios.length - 1 : --this.selectedIndex;
        radios[this.selectedIndex].setAttribute('tabindex', '0');
        radios[this.selectedIndex].checked = true;
        radios[this.selectedIndex].focus();
        this.value = radios[this.selectedIndex].value;
        break;
      case 'Space':
        /**
         * This case is executed only when none of the radios are checked
         * and we first tab into the radio group.
         */
        radios[0].checked = true;
        radios[0].focus();
        this.value = radios[0].value;
        break;
    }
    if (supportedKeyStrokes.includes(event.code)) {
      this.fwChange.emit({
        event,
        name: this.name,
        value: this.value,
      });
    }
  }
  async connectedCallback() {
    const el = this.host;
    this.radios = Array.from(this.host.querySelectorAll('fw-radio')).filter((radio) => !radio.disabled);
    if (this.value === undefined) {
      const radio = index$1.findCheckedOption(el, 'fw-radio');
      if (radio !== undefined) {
        await radio.componentOnReady();
        if (this.value === undefined) {
          this.value = radio.value;
        }
      }
    }
    this.mutationO = index$1.watchForOptions(el, 'fw-radio', async (newOption) => {
      if (newOption !== undefined) {
        newOption
          .componentOnReady()
          .then(() => {
          this.value = newOption.value;
        })
          .catch();
      }
      else {
        await this.updateRadios();
      }
    });
  }
  componentDidLoad() {
    const fieldControl = this.host.querySelector('.field-input');
    if (fieldControl) {
      fieldControl.style.display = 'flex';
      fieldControl.style.flexDirection = this.orientation;
    }
    const slottedElements = this.host.querySelectorAll('fw-radio');
    slottedElements.forEach((radio, index) => {
      if (this.orientation === 'column') {
        radio.classList.add('fw-radio-group__radio');
        radio.classList.toggle('fw-radio-group__radio--last', index === slottedElements.length - 1);
      }
    });
  }
  componentWillLoad() {
    this.checkSlotContent();
  }
  checkSlotContent() {
    this.hasHintTextSlot = index$1.hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = index$1.hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = index$1.hasSlot(this.host, 'error-text');
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }
  async updateRadios() {
    /**
     * Make sure we get all radios first
     * so values are up to date prior
     * to caching the radio group value
     */
    const radios = await this.radios;
    const { value } = this;
    let hasChecked = false;
    radios.forEach((radio, index) => {
      if (!hasChecked && radio.value === value) {
        // correct value for this radio
        // but this radio isn't checked yet
        // and we haven't found a checked yet
        hasChecked = true;
        radio.checked = true;
        radio.setAttribute('tabindex', '0');
        this.selectedIndex = index;
      }
      else {
        // this radio doesn't have the correct value
        // or the radio group has been already checked
        radio.setAttribute('tabindex', '-1');
        radio.checked = false;
      }
    });
    // Reset value if
    if (!hasChecked) {
      radios.length !== 0 && radios[0].setAttribute('tabindex', '0');
      this.selectedIndex = 0;
      this.value = undefined;
    }
  }
  getAriaDescribedBy() {
    if (this.state === 'normal')
      return `hint-${this.name}`;
    else if (this.state === 'error')
      return `error-${this.name}`;
    else if (this.state === 'warning')
      return `warning-${this.name}`;
    return null;
  }
  /**
   * Sets focus on a specific `fw-radio`.
   */
  async setFocus() {
    var _a, _b;
    const radios = this.radios;
    (_b = (_a = radios[0]) === null || _a === void 0 ? void 0 : _a.setFocus) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  render() {
    const { host, name, value } = this;
    const hasLabel = !!this.label;
    const hasHintText = this.hintText ? true : this.hasHintTextSlot;
    const hasErrorText = this.errorText ? true : this.hasErrorTextSlot;
    const hasWarningText = this.warningText ? true : this.hasWarningTextSlot;
    const showHintText = this.state === 'normal' ? true : false;
    const showErrorText = this.state === 'error' ? true : false;
    const showWarningText = this.state === 'warning' ? true : false;
    const labelId = this.label && this.name
      ? `${this.label}-${this.name}`
      : this.label
        ? this.label
        : this.name && this.name;
    const hintTextId = `hint-${this.name}`;
    const warningTextId = `warning-${this.name}`;
    const errorTextId = `error-${this.name}`;
    index$1.renderHiddenField(host, name, value);
    return (index.h(index.Host, { role: 'radiogroup', "aria-labelledby": labelId, onFwSelect: this.onSelect, onFwDeselect: this.onDeselect, "aria-describedby": this.getAriaDescribedBy() }, index.h("div", { class: {
        'field-control': true,
      } }, hasLabel && (index.h("label", { id: labelId, class: {
        'field-control-label': true,
        'required': this.required,
      }, "aria-hidden": hasLabel ? 'false' : 'true' }, this.label)), index.h("div", { class: 'field-input' }, index.h("slot", null)), showHintText && hasHintText && (index.h("div", { id: hintTextId, class: 'field-control-hint-text', "aria-hidden": hasHintText ? 'false' : 'true' }, index.h("slot", { name: 'hint-text' }, this.hintText))), showErrorText && hasErrorText && (index.h("div", { id: errorTextId, class: 'field-control-error-text', "aria-hidden": hasErrorText ? 'false' : 'true' }, index.h("slot", { name: 'error-text' }, this.errorText))), showWarningText && hasWarningText && (index.h("div", { id: warningTextId, class: 'field-control-warning-text', "aria-hidden": hasWarningText ? 'false' : 'true' }, index.h("slot", { name: 'warning-text' }, this.warningText))))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
RadioGroup.style = radioGroupCss;

const textareaCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.textarea-container{-webkit-margin-after:var(--fw-textarea-margin-bottom, 0px);margin-block-end:var(--fw-textarea-margin-bottom, 0px);width:inherit}.textarea-container-inner{display:block;width:var(--fw-textarea-width, 100%);position:relative}.textarea-container-inner textarea{border:0;border:1px solid #cfd7df;border-radius:4px;-webkit-padding-after:5px;padding-block-end:5px;padding-inline:12px;-webkit-padding-before:4px;padding-block-start:4px;background-color:#fff;-webkit-box-shadow:none;box-shadow:none;min-height:var(--fw-textarea-min-height, 24px);font-size:14px;font-weight:500;letter-spacing:0;line-height:20px;font-family:inherit;cursor:text;display:inline-block;color:var(--fw-textarea-input-color, #12344d);}@media screen and (prefers-reduced-motion: reduce){.textarea-container-inner textarea:hover,.textarea-container-inner textarea:focus{-webkit-transition:none;transition:none}}.textarea-container-inner textarea:hover{border:1px #475867 solid;-webkit-transition:0.2s linear;transition:0.2s linear}.textarea-container-inner textarea:focus{outline:none;background:#fff;border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5}.textarea-container-inner textarea[disabled]{color:#92a2b1;background-color:#f5f7f9;border-style:solid}.textarea-container-inner textarea[disabled]:hover,.textarea-container-inner textarea[disabled]:focus{border:1px solid #cfd7df;cursor:not-allowed}.textarea-container-inner+.help-block{font-size:12px;-webkit-margin-before:3px;margin-block-start:3px;color:#92a2b1;position:inherit;-webkit-margin-after:0;margin-block-end:0;display:block;-webkit-padding-start:2px;padding-inline-start:2px}.textarea-container-inner.error>textarea{border-color:#d72d30}.textarea-container-inner.error>textarea:focus{-webkit-box-shadow:none;box-shadow:none;border-color:#d72d30}.textarea-container-inner.error>textarea:hover{border-color:#d72d30}.textarea-container-inner.error+.help-block{color:#d72d30}.textarea-container-inner.warning>textarea{border-color:#f8ab59}.textarea-container-inner.warning>textarea:focus{-webkit-box-shadow:none;box-shadow:none;border-color:#f8ab59}.textarea-container-inner.warning>textarea:hover{border-color:#f8ab59}.textarea-container-inner.warning+.help-block{color:#f8ab59}::-webkit-input-placeholder{color:#92a2b1;opacity:1}::-moz-placeholder{color:#92a2b1;opacity:1}:-ms-input-placeholder{color:#92a2b1;opacity:1}::-ms-input-placeholder{color:#92a2b1;opacity:1}::placeholder{color:#92a2b1;opacity:1}::-webkit-input-placeholder{color:#92a2b1}::-moz-placeholder{color:#92a2b1}:-ms-input-placeholder{color:#92a2b1}:-moz-placeholder{color:#92a2b1}.responsive{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}";

const Textarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwFocus = index.createEvent(this, "fwFocus", 7);
    this.fwBlur = index.createEvent(this, "fwBlur", 7);
    this.fwInput = index.createEvent(this, "fwInput", 7);
    this.hasFocus = false;
    this.hasHintTextSlot = false;
    this.hasWarningTextSlot = false;
    this.hasErrorTextSlot = false;
    /**
     * Label displayed on the interface, for the component.
     */
    this.label = '';
    /**
     * Default value displayed in the input box.
     */
    this.value = '';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Theme based on which the input box is styled.
     */
    this.state = 'normal';
    /**
     * Type of text wrapping used by the input box. If the value is hard, the text in the textarea is wrapped (contains line breaks) when the form data is saved. If the value is soft, the text in the textarea is saved as a single line, when the form data is saved.
     */
    this.wrap = 'soft';
    /**
     * Specifies the way in which the text area can be resized
     */
    this.resize = 'both';
    /**
     * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to false.
     */
    this.readonly = false;
    /**
     * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Disables the text area on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
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
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.fwInput.emit({
        event: ev,
        name: this.name,
        value: this.getValue(),
      });
    };
    this.onFocus = () => {
      this.hasFocus = true;
      this.fwFocus.emit();
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.fwBlur.emit({
        event: ev,
        name: this.name,
      });
    };
    this.debouncedResizeTextArea = index$1.debounce((_e) => {
      const lineBreaksCount = this.nativeInput.value.split('\n').length + 1;
      const rows = this.rows ? this.rows : 2;
      const isLineBreakBetweenRange = lineBreaksCount >= rows && lineBreaksCount <= this.maxRows;
      if (isLineBreakBetweenRange) {
        this.nativeInput.rows = lineBreaksCount;
      }
      if (lineBreaksCount <= rows) {
        this.nativeInput.rows = rows;
      }
      if (lineBreaksCount > this.maxRows) {
        this.nativeInput.rows = this.maxRows;
      }
    }, this, this.maxRowsDebounceTimer ? this.maxRowsDebounceTimer : 200);
  }
  getValue() {
    return this.value || '';
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  /**
   * Sets focus on a specific `fw-textarea`. Use this method instead of the global `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  rowsChangeHandler() {
    if (this.maxRows) {
      this.removeListeners();
      this.addListeners();
    }
  }
  maxRowsChangeHandler() {
    this.removeListeners();
    this.addListeners();
  }
  componentWillLoad() {
    this.checkSlotContent();
  }
  checkSlotContent() {
    this.hasHintTextSlot = index$1.hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = index$1.hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = index$1.hasSlot(this.host, 'error-text');
  }
  getAriaDescribedBy() {
    if (this.state === 'normal')
      return `hint-${this.name}`;
    else if (this.state === 'error')
      return `error-${this.name}`;
    else if (this.state === 'warning')
      return `warning-${this.name}`;
    return null;
  }
  componentDidLoad() {
    if (this.maxRows) {
      this.addListeners();
    }
  }
  addListeners() {
    this.nativeInput.addEventListener('change', this.debouncedResizeTextArea);
    this.nativeInput.addEventListener('keydown', this.debouncedResizeTextArea);
  }
  removeListeners() {
    this.nativeInput.removeEventListener('change', this.debouncedResizeTextArea);
    this.nativeInput.removeEventListener('keydown', this.debouncedResizeTextArea);
  }
  render() {
    const { host, name, value } = this;
    const styleResizeTextArea = { resize: this.resize };
    index$1.renderHiddenField(host, name, value);
    return (index.h(fieldControl.FieldControl, { inputId: this.name, label: this.label, labelId: `${this.label}-${this.name}`, state: this.state, hintTextId: `hint-${this.name}`, hintText: this.hintText, hasHintTextSlot: this.hasHintTextSlot, errorTextId: `error-${this.name}`, errorText: this.errorText, hasErrorTextSlot: this.hasErrorTextSlot, warningTextId: `warning-${this.name}`, warningText: this.warningText, hasWarningTextSlot: this.hasWarningTextSlot, required: this.required }, index.h("div", { "aria-disabled": this.disabled, class: {
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
      } }, index.h("div", { class: 'textarea-container' }, index.h("div", { class: {
        'textarea-container-inner': true,
        [this.state]: true,
      } }, index.h("textarea", { class: {
        responsive: this.cols === undefined,
      }, style: styleResizeTextArea, ref: (input) => (this.nativeInput = input), disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, required: this.required, value: this.value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, rows: this.rows, "data-max-rows": this.maxRows, cols: this.cols, wrap: this.wrap, id: this.name, "aria-invalid": this.state === 'error', "aria-describedby": this.getAriaDescribedBy() }))))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "rows": ["rowsChangeHandler"],
    "maxRows": ["maxRowsChangeHandler"]
  }; }
};
Textarea.style = textareaCss;

const timepickerCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}";

const Timepicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fwChange = index.createEvent(this, "fwChange", 7);
    this.fwBlur = index.createEvent(this, "fwBlur", 7);
    this.fwFocus = index.createEvent(this, "fwFocus", 7);
    /**
     * State for all the time values
     */
    this.timeValues = [];
    /**
     * Set true to disable the element
     */
    this.disabled = false;
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Time interval between the values displayed in the list, specified in minutes.
     */
    this.interval = 30;
    /**
     * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute's value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Theme based on which the input of the timepicker is styled.
     */
    this.state = 'normal';
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
     * Placement of the options list with respect to timepicker.
     */
    this.optionsPlacement = 'bottom';
    /**
     * Whether the arrow/caret should be shown in the timepicker.
     */
    this.caret = true;
    /**
     * Whether the dropdown should be same width as that of the input.
     */
    this.sameWidth = true;
    /**
     * Whether clicking on the already selected option disables it.
     */
    this.allowDeselect = true;
    /**
     * If true, the user cannot type in the text input
     */
    this.readonly = false;
    this.getTimeOptionsMeta = (nonMeridianFormat) => {
      const preferredFormat = this.format;
      const timeIntervalArgs = {
        interval: this.interval,
        startTime: format(parse(this.minTime, preferredFormat, new Date()), nonMeridianFormat, {
          locale: this.langModule,
        }),
        endTime: format(parse(this.maxTime, preferredFormat, new Date()), nonMeridianFormat, {
          locale: this.langModule,
        }),
      };
      return timeIntervalArgs;
    };
    this.setTimeValues = () => {
      const nonMeridianFormat = 'HH:mm';
      const { interval, startTime, endTime } = this.getTimeOptionsMeta(nonMeridianFormat);
      let currentTimeInMs = parse(startTime, nonMeridianFormat, new Date()).valueOf();
      const endTimeInMs = parse(endTime, nonMeridianFormat, new Date()).valueOf();
      while (currentTimeInMs <= endTimeInMs) {
        this.timeValues.push({
          displayFormat: format(currentTimeInMs, this.format, {
            locale: this.langModule,
          }),
          value: format(currentTimeInMs, nonMeridianFormat, {
            locale: this.langModule,
          }),
        });
        currentTimeInMs = addMinutes(currentTimeInMs, interval).valueOf();
      }
    };
    this.onBlur = (e) => {
      this.fwBlur.emit({
        event: e,
        name: this.name,
      });
    };
    this.onFocus = () => {
      this.fwFocus.emit();
    };
  }
  currentTimeLabel(time) {
    return time.displayFormat;
  }
  currentTimeValue(time) {
    return time.value;
  }
  setTimeValue(e) {
    const { value } = e.detail;
    if (value)
      this.fwChange.emit({
        event: e,
        name: this.name,
        value: value,
      });
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
  }
  /**
   * Sets focus on a specific `fw-timepicker`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  async handleLocaleChange(newLocale) {
    var _a, _b;
    this.langModule = await Translation.TranslationController.getDateLangModule(newLocale);
    this.format =
      this.format || ((_b = (_a = this.langModule) === null || _a === void 0 ? void 0 : _a.formatLong) === null || _b === void 0 ? void 0 : _b.time({ width: 'short' }));
    this.minTime = isMatch(this.minTime, this.format)
      ? this.minTime
      : format(startOfDay(new Date()), this.format);
    this.maxTime = isMatch(this.maxTime, this.format)
      ? this.maxTime
      : format(endOfDay(new Date()), this.format);
  }
  async componentWillLoad() {
    await this.handleLocaleChange(this.locale);
    this.setTimeValues();
  }
  render() {
    const { host, name, value } = this;
    index$1.renderHiddenField(host, name, value);
    return (index.h("fw-select", { name: this.name, label: this.label, hintText: this.hintText, errorText: this.errorText, warningText: this.warningText, disabled: this.disabled, value: this.value, required: this.required, onFwChange: (e) => this.setTimeValue(e), onFwBlur: this.onBlur, ref: (el) => (this.nativeInput = el), state: this.state, placeholder: this.placeholder, optionsPlacement: this.optionsPlacement, caret: this.caret, sameWidth: this.sameWidth, allowDeselect: this.allowDeselect, readonly: this.readonly }, this.timeValues.map((time) => (index.h("fw-select-option", { value: this.currentTimeValue(time) }, this.currentTimeLabel(time))))));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "locale": ["handleLocaleChange"]
  }; }
};
Timepicker.style = timepickerCss;

exports.fw_datepicker = Datepicker;
exports.fw_file_2 = File2;
exports.fw_file_uploader_2 = FileUploader;
exports.fw_inline_message = InlineMessage;
exports.fw_nested_node = NestedNode;
exports.fw_nested_select = NestedSelect;
exports.fw_radio = Radio;
exports.fw_radio_group = RadioGroup;
exports.fw_textarea = Textarea;
exports.fw_timepicker = Timepicker;
