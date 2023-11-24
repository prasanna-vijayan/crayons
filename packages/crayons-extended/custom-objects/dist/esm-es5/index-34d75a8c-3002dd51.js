import{b as buildFormatLongFn,a as buildLocalizeFn,c as buildMatchPatternFn,d as buildMatchFn}from"./index-dc611d24-e7c453b4.js";function futureSeconds(a){return a.replace(/sekuntia?/,"sekunnin")}function futureMinutes(a){return a.replace(/minuuttia?/,"minuutin")}function futureHours(a){return a.replace(/tuntia?/,"tunnin")}function futureDays(a){return a.replace(/päivää?/,"päivän")}function futureWeeks(a){return a.replace(/(viikko|viikkoa)/,"viikon")}function futureMonths(a){return a.replace(/(kuukausi|kuukautta)/,"kuukauden")}function futureYears(a){return a.replace(/(vuosi|vuotta)/,"vuoden")}var formatDistanceLocale={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:futureSeconds},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:futureSeconds},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function a(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:futureMinutes},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:futureMinutes},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:futureHours},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:futureHours},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:futureDays},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:futureWeeks},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:futureWeeks},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:futureMonths},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:futureMonths},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:futureYears},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:futureYears},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:futureYears},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:futureYears}};function formatDistance(a,e,t){t=t||{};var i=formatDistanceLocale[a];var u=e===1?i.one:i.other.replace("{{count}}",e);if(t.addSuffix){if(t.comparison>0){return i.futureTense(u)+" kuluttua"}else{return u+" sitten"}}return u}var dateFormats={full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"};var timeFormats={full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"};var dateTimeFormats={full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"};var formatLong={date:buildFormatLongFn({formats:dateFormats,defaultWidth:"full"}),time:buildFormatLongFn({formats:timeFormats,defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:dateTimeFormats,defaultWidth:"full"})};var formatRelativeLocale={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"};function formatRelative(a,e,t,i){return formatRelativeLocale[a]}var eraValues={narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]};var quarterValues={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]};var monthValues={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]};var formattingMonthValues={narrow:monthValues.narrow,abbreviated:monthValues.abbreviated,wide:monthValues.wide.map((function(a){return a+"ta"}))};var dayValues={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]};var formattingDayValues={narrow:dayValues.narrow,short:dayValues["short"],abbreviated:dayValues.abbreviated,wide:dayValues.wide.map((function(a){return a+"na"}))};var dayPeriodValues={narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}};function ordinalNumber(a){var e=Number(a);return e+"."}var localize={ordinalNumber:ordinalNumber,era:buildLocalizeFn({values:eraValues,defaultWidth:"wide"}),quarter:buildLocalizeFn({values:quarterValues,defaultWidth:"wide",argumentCallback:function a(e){return Number(e)-1}}),month:buildLocalizeFn({values:monthValues,formattingValues:formattingMonthValues,defaultWidth:"wide"}),day:buildLocalizeFn({values:dayValues,formattingValues:formattingDayValues,defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:dayPeriodValues,defaultWidth:"wide"})};var matchOrdinalNumberPattern=/^(\d+)(\.)/i;var parseOrdinalNumberPattern=/\d+/i;var matchEraPatterns={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i};var parseEraPatterns={any:[/^e/i,/^j/i]};var matchQuarterPatterns={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i};var parseQuarterPatterns={any:[/1/i,/2/i,/3/i,/4/i]};var matchMonthPatterns={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i};var parseMonthPatterns={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]};var matchDayPatterns={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i};var parseDayPatterns={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]};var matchDayPeriodPatterns={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i};var parseDayPeriodPatterns={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}};var match={ordinalNumber:buildMatchPatternFn({matchPattern:matchOrdinalNumberPattern,parsePattern:parseOrdinalNumberPattern,valueCallback:function a(e){return parseInt(e,10)}}),era:buildMatchFn({matchPatterns:matchEraPatterns,defaultMatchWidth:"wide",parsePatterns:parseEraPatterns,defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:matchQuarterPatterns,defaultMatchWidth:"wide",parsePatterns:parseQuarterPatterns,defaultParseWidth:"any",valueCallback:function a(e){return e+1}}),month:buildMatchFn({matchPatterns:matchMonthPatterns,defaultMatchWidth:"wide",parsePatterns:parseMonthPatterns,defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:matchDayPatterns,defaultMatchWidth:"wide",parsePatterns:parseDayPatterns,defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:matchDayPeriodPatterns,defaultMatchWidth:"any",parsePatterns:parseDayPeriodPatterns,defaultParseWidth:"any"})};var locale={code:"fi",formatDistance:formatDistance,formatLong:formatLong,formatRelative:formatRelative,localize:localize,match:match,options:{weekStartsOn:1,firstWeekContainsDate:4}};export default locale;