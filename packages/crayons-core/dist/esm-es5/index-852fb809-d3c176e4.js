import{b as buildFormatLongFn,a as buildLocalizeFn,c as buildMatchPatternFn,d as buildMatchFn}from"./index-dc611d24-9b65abdc.js";var formatDistanceLocale={lessThanXSeconds:{one:"פחות משנייה",two:"פחות משתי שניות",other:"פחות מ־{{count}} שניות"},xSeconds:{one:"שנייה",two:"שתי שניות",other:"{{count}} שניות"},halfAMinute:"חצי דקה",lessThanXMinutes:{one:"פחות מדקה",two:"פחות משתי דקות",other:"פחות מ־{{count}} דקות"},xMinutes:{one:"דקה",two:"שתי דקות",other:"{{count}} דקות"},aboutXHours:{one:"כשעה",two:"כשעתיים",other:"כ־{{count}} שעות"},xHours:{one:"שעה",two:"שעתיים",other:"{{count}} שעות"},xDays:{one:"יום",two:"יומיים",other:"{{count}} ימים"},aboutXWeeks:{one:"כשבוע",two:"כשבועיים",other:"כ־{{count}} שבועות"},xWeeks:{one:"שבוע",two:"שבועיים",other:"{{count}} שבועות"},aboutXMonths:{one:"כחודש",two:"כחודשיים",other:"כ־{{count}} חודשים"},xMonths:{one:"חודש",two:"חודשיים",other:"{{count}} חודשים"},aboutXYears:{one:"כשנה",two:"כשנתיים",other:"כ־{{count}} שנים"},xYears:{one:"שנה",two:"שנתיים",other:"{{count}} שנים"},overXYears:{one:"יותר משנה",two:"יותר משנתיים",other:"יותר מ־{{count}} שנים"},almostXYears:{one:"כמעט שנה",two:"כמעט שנתיים",other:"כמעט {{count}} שנים"}};function formatDistance(a,t,e){e=e||{};if(a==="xDays"&&e.addSuffix&&t<=2){var r={1:"אתמול",2:"שלשום"};var i={1:"מחר",2:"מחרתיים"};return e.comparison>0?i[t]:r[t]}var n;if(typeof formatDistanceLocale[a]==="string"){n=formatDistanceLocale[a]}else if(t===1){n=formatDistanceLocale[a].one}else if(t===2){n=formatDistanceLocale[a].two}else{n=formatDistanceLocale[a].other.replace("{{count}}",t)}if(e.addSuffix){if(e.comparison>0){return"בעוד "+n}else{return"לפני "+n}}return n}var dateFormats={full:"EEEE, d בMMMM y",long:"d בMMMM y",medium:"d בMMM y",short:"d.M.y"};var timeFormats={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"};var dateTimeFormats={full:"{{date}} 'בשעה' {{time}}",long:"{{date}} 'בשעה' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var formatLong={date:buildFormatLongFn({formats:dateFormats,defaultWidth:"full"}),time:buildFormatLongFn({formats:timeFormats,defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:dateTimeFormats,defaultWidth:"full"})};var formatRelativeLocale={lastWeek:"eeee 'שעבר בשעה' p",yesterday:"'אתמול בשעה' p",today:"'היום בשעה' p",tomorrow:"'מחר בשעה' p",nextWeek:"eeee 'בשעה' p",other:"P"};function formatRelative(a,t,e,r){return formatRelativeLocale[a]}var eraValues={narrow:["לפנה״ס","לספירה"],abbreviated:["לפנה״ס","לספירה"],wide:["לפני הספירה","לספירה"]};var quarterValues={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["רבעון 1","רבעון 2","רבעון 3","רבעון 4"]};var monthValues={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"],wide:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"]};var dayValues={narrow:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],short:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],abbreviated:["יום א׳","יום ב׳","יום ג׳","יום ד׳","יום ה׳","יום ו׳","שבת"],wide:["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת"]};var dayPeriodValues={narrow:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"},abbreviated:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"},wide:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"}};var formattingDayPeriodValues={narrow:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"בצהריים",evening:"בערב",night:"בלילה"},abbreviated:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"אחר הצהריים",evening:"בערב",night:"בלילה"},wide:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"אחר הצהריים",evening:"בערב",night:"בלילה"}};function ordinalNumber(a,t){var e=Number(a);if(e<=0||e>10)return e;var r=t||{};var i=String(r.unit);var n=["year","hour","minute","second"].indexOf(i)>=0;var o=["ראשון","שני","שלישי","רביעי","חמישי","שישי","שביעי","שמיני","תשיעי","עשירי"];var d=["ראשונה","שנייה","שלישית","רביעית","חמישית","שישית","שביעית","שמינית","תשיעית","עשירית"];var s=e-1;return n?d[s]:o[s]}var localize={ordinalNumber:ordinalNumber,era:buildLocalizeFn({values:eraValues,defaultWidth:"wide"}),quarter:buildLocalizeFn({values:quarterValues,defaultWidth:"wide",argumentCallback:function a(t){return Number(t)-1}}),month:buildLocalizeFn({values:monthValues,defaultWidth:"wide"}),day:buildLocalizeFn({values:dayValues,defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:dayPeriodValues,defaultWidth:"wide",formattingValues:formattingDayPeriodValues,defaultFormattingWidth:"wide"})};var matchOrdinalNumberPattern=/^(\d+|(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי|שמיני|תשיעי|עשירי|ראשונה|שנייה|שלישית|רביעית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית))/i;var parseOrdinalNumberPattern=/^(\d+|רא|שנ|של|רב|ח|שי|שב|שמ|ת|ע)/i;var matchEraPatterns={narrow:/^ל(ספירה|פנה״ס)/i,abbreviated:/^ל(ספירה|פנה״ס)/i,wide:/^ל(פני ה)?ספירה/i};var parseEraPatterns={any:[/^לפ/i,/^לס/i]};var matchQuarterPatterns={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^רבעון [1234]/i};var parseQuarterPatterns={any:[/1/i,/2/i,/3/i,/4/i]};var matchMonthPatterns={narrow:/^\d+/i,abbreviated:/^(ינו|פבר|מרץ|אפר|מאי|יוני|יולי|אוג|ספט|אוק|נוב|דצמ)׳?/i,wide:/^(ינואר|פברואר|מרץ|אפריל|מאי|יוני|יולי|אוגוסט|ספטמבר|אוקטובר|נובמבר|דצמבר)/i};var parseMonthPatterns={narrow:[/^1$/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^7/i,/^8/i,/^9/i,/^10/i,/^11/i,/^12/i],any:[/^ינ/i,/^פ/i,/^מר/i,/^אפ/i,/^מא/i,/^יונ/i,/^יול/i,/^אוג/i,/^ס/i,/^אוק/i,/^נ/i,/^ד/i]};var matchDayPatterns={narrow:/^[אבגדהוש]׳/i,short:/^[אבגדהוש]׳/i,abbreviated:/^(שבת|יום (א|ב|ג|ד|ה|ו)׳)/i,wide:/^יום (ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/i};var parseDayPatterns={abbreviated:[/א׳$/i,/ב׳$/i,/ג׳$/i,/ד׳$/i,/ה׳$/i,/ו׳$/i,/^ש/i],wide:[/ן$/i,/ני$/i,/לישי$/i,/עי$/i,/מישי$/i,/שישי$/i,/ת$/i],any:[/^א/i,/^ב/i,/^ג/i,/^ד/i,/^ה/i,/^ו/i,/^ש/i]};var matchDayPeriodPatterns={any:/^(אחר ה|ב)?(חצות|צהריים|בוקר|ערב|לילה|אחה״צ|לפנה״צ)/i};var parseDayPeriodPatterns={any:{am:/^לפ/i,pm:/^אחה/i,midnight:/^ח/i,noon:/^צ/i,morning:/בוקר/i,afternoon:/בצ|אחר/i,evening:/ערב/i,night:/לילה/i}};var ordinalName=["רא","שנ","של","רב","ח","שי","שב","שמ","ת","ע"];var match={ordinalNumber:buildMatchPatternFn({matchPattern:matchOrdinalNumberPattern,parsePattern:parseOrdinalNumberPattern,valueCallback:function a(t){var e=parseInt(t,10);return isNaN(e)?ordinalName.indexOf(t)+1:e}}),era:buildMatchFn({matchPatterns:matchEraPatterns,defaultMatchWidth:"wide",parsePatterns:parseEraPatterns,defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:matchQuarterPatterns,defaultMatchWidth:"wide",parsePatterns:parseQuarterPatterns,defaultParseWidth:"any",valueCallback:function a(t){return t+1}}),month:buildMatchFn({matchPatterns:matchMonthPatterns,defaultMatchWidth:"wide",parsePatterns:parseMonthPatterns,defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:matchDayPatterns,defaultMatchWidth:"wide",parsePatterns:parseDayPatterns,defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:matchDayPeriodPatterns,defaultMatchWidth:"any",parsePatterns:parseDayPeriodPatterns,defaultParseWidth:"any"})};var locale={code:"he",formatDistance:formatDistance,formatLong:formatLong,formatRelative:formatRelative,localize:localize,match:match,options:{weekStartsOn:0,firstWeekContainsDate:1}};export default locale;