'use strict';

const indexDc611d24 = require('./index-dc611d24-355bee26.js');

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: '少於 1 秒',
    other: '少於 {{count}} 秒'
  },
  xSeconds: {
    one: '1 秒',
    other: '{{count}} 秒'
  },
  halfAMinute: '半分鐘',
  lessThanXMinutes: {
    one: '少於 1 分鐘',
    other: '少於 {{count}} 分鐘'
  },
  xMinutes: {
    one: '1 分鐘',
    other: '{{count}} 分鐘'
  },
  xHours: {
    one: '1 小時',
    other: '{{count}} 小時'
  },
  aboutXHours: {
    one: '大約 1 小時',
    other: '大約 {{count}} 小時'
  },
  xDays: {
    one: '1 天',
    other: '{{count}} 天'
  },
  aboutXWeeks: {
    one: '大約 1 個星期',
    other: '大約 {{count}} 個星期'
  },
  xWeeks: {
    one: '1 個星期',
    other: '{{count}} 個星期'
  },
  aboutXMonths: {
    one: '大約 1 個月',
    other: '大約 {{count}} 個月'
  },
  xMonths: {
    one: '1 個月',
    other: '{{count}} 個月'
  },
  aboutXYears: {
    one: '大約 1 年',
    other: '大約 {{count}} 年'
  },
  xYears: {
    one: '1 年',
    other: '{{count}} 年'
  },
  overXYears: {
    one: '超過 1 年',
    other: '超過 {{count}} 年'
  },
  almostXYears: {
    one: '將近 1 年',
    other: '將近 {{count}} 年'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return result + '內';
    } else {
      return result + '前';
    }
  }

  return result;
}

var dateFormats = {
  full: "y'年'M'月'd'日' EEEE",
  "long": "y'年'M'月'd'日'",
  medium: 'yyyy-MM-dd',
  "short": 'yy-MM-dd'
};
var timeFormats = {
  full: 'zzzz a h:mm:ss',
  "long": 'z a h:mm:ss',
  medium: 'a h:mm:ss',
  "short": 'a h:mm'
};
var dateTimeFormats = {
  full: '{{date}} {{time}}',
  "long": '{{date}} {{time}}',
  medium: '{{date}} {{time}}',
  "short": '{{date}} {{time}}'
};
var formatLong = {
  date: indexDc611d24.buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: indexDc611d24.buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: indexDc611d24.buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "'上個'eeee p",
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: "'下個'eeee p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

var eraValues = {
  narrow: ['前', '公元'],
  abbreviated: ['前', '公元'],
  wide: ['公元前', '公元']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['第一季', '第二季', '第三季', '第四季'],
  wide: ['第一季度', '第二季度', '第三季度', '第四季度']
};
var monthValues = {
  narrow: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
  abbreviated: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  wide: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
};
var dayValues = {
  narrow: ['日', '一', '二', '三', '四', '五', '六'],
  "short": ['日', '一', '二', '三', '四', '五', '六'],
  abbreviated: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
  wide: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
};
var dayPeriodValues = {
  narrow: {
    am: '上',
    pm: '下',
    midnight: '午夜',
    noon: '晌',
    morning: '早',
    afternoon: '午',
    evening: '晚',
    night: '夜'
  },
  abbreviated: {
    am: '上午',
    pm: '下午',
    midnight: '午夜',
    noon: '中午',
    morning: '上午',
    afternoon: '下午',
    evening: '晚上',
    night: '夜晚'
  },
  wide: {
    am: '上午',
    pm: '下午',
    midnight: '午夜',
    noon: '中午',
    morning: '上午',
    afternoon: '下午',
    evening: '晚上',
    night: '夜晚'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: '上',
    pm: '下',
    midnight: '午夜',
    noon: '晌',
    morning: '早',
    afternoon: '午',
    evening: '晚',
    night: '夜'
  },
  abbreviated: {
    am: '上午',
    pm: '下午',
    midnight: '午夜',
    noon: '中午',
    morning: '上午',
    afternoon: '下午',
    evening: '晚上',
    night: '夜晚'
  },
  wide: {
    am: '上午',
    pm: '下午',
    midnight: '午夜',
    noon: '中午',
    morning: '上午',
    afternoon: '下午',
    evening: '晚上',
    night: '夜晚'
  }
};

function ordinalNumber(dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var options = dirtyOptions || {};
  var unit = String(options.unit);

  switch (unit) {
    case 'date':
      return number.toString() + '日';

    case 'hour':
      return number.toString() + '時';

    case 'minute':
      return number.toString() + '分';

    case 'second':
      return number.toString() + '秒';

    default:
      return '第 ' + number.toString();
  }
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: indexDc611d24.buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: indexDc611d24.buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: indexDc611d24.buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: indexDc611d24.buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: indexDc611d24.buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};

var matchOrdinalNumberPattern = /^(第\s*)?\d+(日|時|分|秒)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
};
var parseEraPatterns = {
  any: [/^(前)/i, /^(公元)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]季/i,
  wide: /^第[一二三四]季度/i
};
var parseQuarterPatterns = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
};
var matchMonthPatterns = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
};
var parseMonthPatterns = {
  narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i],
  any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]
};
var matchDayPatterns = {
  narrow: /^[一二三四五六日]/i,
  "short": /^[一二三四五六日]/i,
  abbreviated: /^週[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
};
var parseDayPatterns = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
};
var matchDayPeriodPatterns = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^上午?/i,
    pm: /^下午?/i,
    midnight: /^午夜/i,
    noon: /^[中正]午/i,
    morning: /^早上/i,
    afternoon: /^下午/i,
    evening: /^晚上?/i,
    night: /^凌晨/i
  }
};
var match = {
  ordinalNumber: indexDc611d24.buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: indexDc611d24.buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: indexDc611d24.buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: indexDc611d24.buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: indexDc611d24.buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: indexDc611d24.buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary Chinese Traditional locale.
 * @language Chinese Traditional
 * @iso-639-2 zho
 * @author Gary Ip [@gaplo]{@link https://github.com/gaplo}
 */

var locale = {
  code: 'zh-HK',
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

exports.default = locale;
