import { f as formatDistance } from './index-f5fe0470-d6f777a8.js';
import { f as formatRelative, l as localize, m as match } from './index-3a85bc08-25fe9472.js';
import { b as buildFormatLongFn } from './index-dc611d24-e7c453b4.js';

var dateFormats = {
  full: 'EEEE, d MMMM yyyy',
  "long": 'd MMMM yyyy',
  medium: 'd MMM yyyy',
  "short": 'dd/MM/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  "long": 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  "short": 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  "long": "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  "short": '{{date}}, {{time}}'
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

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (South Africa).
 * @language English
 * @iso-639-2 eng
 * @author Shaila Kavrakova [@shaykav]{@link https://github.com/shaykav}
 */

var locale = {
  code: 'en-ZA',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0,
    // Sunday is the first day of the week.
    firstWeekContainsDate: 1 // The week that contains Jan 1st is the first week of the year.

  }
};

export default locale;
