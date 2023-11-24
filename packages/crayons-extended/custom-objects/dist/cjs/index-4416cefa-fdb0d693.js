'use strict';

const indexF5fe0470 = require('./index-f5fe0470-55249c4c.js');
const index3a85bc08 = require('./index-3a85bc08-5cc65aaf.js');
const index2847d9a8 = require('./index-2847d9a8-58918f29.js');
require('./index-dc611d24-837e1145.js');

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
  formatDistance: indexF5fe0470.formatDistance,
  formatLong: index2847d9a8.formatLong,
  formatRelative: index3a85bc08.formatRelative,
  localize: index3a85bc08.localize,
  match: index3a85bc08.match,
  options: {
    weekStartsOn: 1
    /* Monday */
    ,
    firstWeekContainsDate: 4
  }
};

exports.default = locale;
