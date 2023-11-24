import{b as buildFormatLongFn,a as buildLocalizeFn,c as buildMatchPatternFn,d as buildMatchFn}from"./index-dc611d24-e7c453b4.js";var formatDistanceLocale={lessThanXSeconds:{one:"mwens pase yon segond",other:"mwens pase {{count}} segond"},xSeconds:{one:"1 segond",other:"{{count}} segond"},halfAMinute:"30 segond",lessThanXMinutes:{one:"mwens pase yon minit",other:"mwens pase {{count}} minit"},xMinutes:{one:"1 minit",other:"{{count}} minit"},aboutXHours:{one:"anviwon inè",other:"anviwon {{count}} è"},xHours:{one:"1 lè",other:"{{count}} lè"},xDays:{one:"1 jou",other:"{{count}} jou"},aboutXWeeks:{one:"anviwon 1 semèn",other:"anviwon {{count}} semèn"},xWeeks:{one:"1 semèn",other:"{{count}} semèn"},aboutXMonths:{one:"anviwon 1 mwa",other:"anviwon {{count}} mwa"},xMonths:{one:"1 mwa",other:"{{count}} mwa"},aboutXYears:{one:"anviwon 1 an",other:"anviwon {{count}} an"},xYears:{one:"1 an",other:"{{count}} an"},overXYears:{one:"plis pase 1 an",other:"plis pase {{count}} an"},almostXYears:{one:"prèske 1 an",other:"prèske {{count}} an"}};function formatDistance(a,e,t){t=t||{};var n;if(typeof formatDistanceLocale[a]==="string"){n=formatDistanceLocale[a]}else if(e===1){n=formatDistanceLocale[a].one}else{n=formatDistanceLocale[a].other.replace("{{count}}",e)}if(t.addSuffix){if(t.comparison>0){return"nan "+n}else{return"sa fè "+n}}return n}var dateFormats={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"};var timeFormats={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var dateTimeFormats={full:"{{date}} 'nan lè' {{time}}",long:"{{date}} 'nan lè' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var formatLong={date:buildFormatLongFn({formats:dateFormats,defaultWidth:"full"}),time:buildFormatLongFn({formats:timeFormats,defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:dateTimeFormats,defaultWidth:"full"})};var formatRelativeLocale={lastWeek:"eeee 'pase nan lè' p",yesterday:"'yè nan lè' p",today:"'jodi a' p",tomorrow:"'demen nan lè' p'",nextWeek:"eeee 'pwochen nan lè' p",other:"P"};function formatRelative(a,e,t,n){return formatRelativeLocale[a]}var eraValues={narrow:["av. J.-K","ap. J.-K"],abbreviated:["av. J.-K","ap. J.-K"],wide:["anvan Jezi Kris","apre Jezi Kris"]};var quarterValues={narrow:["T1","T2","T3","T4"],abbreviated:["1ye trim.","2yèm trim.","3yèm trim.","4yèm trim."],wide:["1ye trimès","2yèm trimès","3yèm trimès","4yèm trimès"]};var monthValues={narrow:["J","F","M","A","M","J","J","O","S","O","N","D"],abbreviated:["janv.","fevr.","mas","avr.","me","jen","jiyè","out","sept.","okt.","nov.","des."],wide:["janvye","fevrye","mas","avril","me","jen","jiyè","out","septanm","oktòb","novanm","desanm"]};var dayValues={narrow:["D","L","M","M","J","V","S"],short:["di","le","ma","mè","je","va","sa"],abbreviated:["dim.","len.","mad.","mèk.","jed.","van.","sam."],wide:["dimanch","lendi","madi","mèkredi","jedi","vandredi","samdi"]};var dayPeriodValues={narrow:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"swa",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"maten",afternoon:"aprèmidi",evening:"swa",night:"maten"},wide:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"nan maten",afternoon:"nan aprèmidi",evening:"nan aswè",night:"nan maten"}};function ordinalNumber(a,e){var t=Number(a);var n=e||{};var i=String(n.unit);var r;if(t===0){return t}if(i==="year"||i==="hour"||i==="week"){if(t===1){r="ye"}else{r="yèm"}}else{if(t===1){r="ye"}else{r="yèm"}}return t+r}var localize={ordinalNumber:ordinalNumber,era:buildLocalizeFn({values:eraValues,defaultWidth:"wide"}),quarter:buildLocalizeFn({values:quarterValues,defaultWidth:"wide",argumentCallback:function a(e){return Number(e)-1}}),month:buildLocalizeFn({values:monthValues,defaultWidth:"wide"}),day:buildLocalizeFn({values:dayValues,defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:dayPeriodValues,defaultWidth:"wide"})};var matchOrdinalNumberPattern=/^(\d+)(ye|yèm)?/i;var parseOrdinalNumberPattern=/\d+/i;var matchEraPatterns={narrow:/^(av\.J\.K|ap\.J\.K|ap\.J\.-K)/i,abbreviated:/^(av\.J\.-K|av\.J-K|apr\.J\.-K|apr\.J-K|ap\.J-K)/i,wide:/^(avan Jezi Kris|apre Jezi Kris)/i};var parseEraPatterns={any:[/^av/i,/^ap/i]};var matchQuarterPatterns={narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](ye|yèm)? trimès/i};var parseQuarterPatterns={any:[/1/i,/2/i,/3/i,/4/i]};var matchMonthPatterns={narrow:/^[jfmasond]/i,abbreviated:/^(janv|fevr|mas|avr|me|jen|jiyè|out|sept|okt|nov|des)\.?/i,wide:/^(janvye|fevrye|mas|avril|me|jen|jiyè|out|septanm|oktòb|novanm|desanm)/i};var parseMonthPatterns={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^o/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^av/i,/^me/i,/^je/i,/^ji/i,/^ou/i,/^s/i,/^ok/i,/^n/i,/^d/i]};var matchDayPatterns={narrow:/^[lmjvsd]/i,short:/^(di|le|ma|me|je|va|sa)/i,abbreviated:/^(dim|len|mad|mèk|jed|van|sam)\.?/i,wide:/^(dimanch|lendi|madi|mèkredi|jedi|vandredi|samdi)/i};var parseDayPatterns={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^le/i,/^ma/i,/^mè/i,/^je/i,/^va/i,/^sa/i]};var matchDayPeriodPatterns={narrow:/^(a|p|minwit|midi|mat\.?|ap\.?m\.?|swa)/i,any:/^([ap]\.?\s?m\.?|nan maten|nan aprèmidi|nan aswè)/i};var parseDayPeriodPatterns={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/sw/i,night:/nwit/i}};var match={ordinalNumber:buildMatchPatternFn({matchPattern:matchOrdinalNumberPattern,parsePattern:parseOrdinalNumberPattern,valueCallback:function a(e){return parseInt(e,10)}}),era:buildMatchFn({matchPatterns:matchEraPatterns,defaultMatchWidth:"wide",parsePatterns:parseEraPatterns,defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:matchQuarterPatterns,defaultMatchWidth:"wide",parsePatterns:parseQuarterPatterns,defaultParseWidth:"any",valueCallback:function a(e){return e+1}}),month:buildMatchFn({matchPatterns:matchMonthPatterns,defaultMatchWidth:"wide",parsePatterns:parseMonthPatterns,defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:matchDayPatterns,defaultMatchWidth:"wide",parsePatterns:parseDayPatterns,defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:matchDayPeriodPatterns,defaultMatchWidth:"any",parsePatterns:parseDayPeriodPatterns,defaultParseWidth:"any"})};var locale={code:"ht",formatDistance:formatDistance,formatLong:formatLong,formatRelative:formatRelative,localize:localize,match:match,options:{weekStartsOn:1,firstWeekContainsDate:4}};export default locale;