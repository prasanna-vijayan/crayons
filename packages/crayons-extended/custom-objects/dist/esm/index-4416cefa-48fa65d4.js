import { f as formatDistance } from './index-f5fe0470-d6f777a8.js';
import { f as formatRelative, l as localize, m as match } from './index-3a85bc08-25fe9472.js';
import { f as formatLong } from './index-2847d9a8-47dfbbfb.js';
import './index-dc611d24-e7c453b4.js';

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United Kingdom).
 * @language English
 * @iso-639-2 eng
 * @author Alex [@glintik]{@link https://github.com/glintik}
 */

var locale = {
  code: 'en-GB',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1
    /* Monday */
    ,
    firstWeekContainsDate: 4
  }
};

export default locale;
