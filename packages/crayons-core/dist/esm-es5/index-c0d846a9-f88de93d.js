import{b as buildFormatLongFn,a as buildLocalizeFn,c as buildMatchPatternFn,d as buildMatchFn}from"./index-dc611d24-9b65abdc.js";var formatDistanceLocale={lessThanXSeconds:{one:"секунд хүрэхгүй",other:"{{count}} секунд хүрэхгүй"},xSeconds:{one:"1 секунд",other:"{{count}} секунд"},halfAMinute:"хагас минут",lessThanXMinutes:{one:"минут хүрэхгүй",other:"{{count}} минут хүрэхгүй"},xMinutes:{one:"1 минут",other:"{{count}} минут"},aboutXHours:{one:"ойролцоогоор 1 цаг",other:"ойролцоогоор {{count}} цаг"},xHours:{one:"1 цаг",other:"{{count}} цаг"},xDays:{one:"1 өдөр",other:"{{count}} өдөр"},aboutXWeeks:{one:"ойролцоогоор 1 долоо хоног",other:"ойролцоогоор {{count}} долоо хоног"},xWeeks:{one:"1 долоо хоног",other:"{{count}} долоо хоног"},aboutXMonths:{one:"ойролцоогоор 1 сар",other:"ойролцоогоор {{count}} сар"},xMonths:{one:"1 сар",other:"{{count}} сар"},aboutXYears:{one:"ойролцоогоор 1 жил",other:"ойролцоогоор {{count}} жил"},xYears:{one:"1 жил",other:"{{count}} жил"},overXYears:{one:"1 жил гаран",other:"{{count}} жил гаран"},almostXYears:{one:"бараг 1 жил",other:"бараг {{count}} жил"}};function formatDistance(a,e,t){t=t||{};var i;if(typeof formatDistanceLocale[a]==="string"){i=formatDistanceLocale[a]}else if(e===1){i=formatDistanceLocale[a].one}else{i=formatDistanceLocale[a].other.replace("{{count}}",e)}if(t.addSuffix){var r=i.split(" ");var n=r.pop();i=r.join(" ");switch(n){case"секунд":i+=" секундийн";break;case"минут":i+=" минутын";break;case"цаг":i+=" цагийн";break;case"өдөр":i+=" өдрийн";break;case"сар":i+=" сарын";break;case"жил":i+=" жилийн";break;case"хоног":i+=" хоногийн";break;case"гаран":i+=" гараны";break;case"хүрэхгүй":i+=" хүрэхгүй хугацааны";break;default:i+=n+"-н"}if(t.comparison>0){return i+" дараа"}else{return i+" өмнө"}}return i}var dateFormats={full:"y 'оны' MMMM'ын' d, EEEE 'гараг'",long:"y 'оны' MMMM'ын' d",medium:"y 'оны' MMM'ын' d",short:"y.MM.dd"};var timeFormats={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"};var dateTimeFormats={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"};var formatLong={date:buildFormatLongFn({formats:dateFormats,defaultWidth:"full"}),time:buildFormatLongFn({formats:timeFormats,defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:dateTimeFormats,defaultWidth:"full"})};var formatRelativeLocale={lastWeek:"'өнгөрсөн' eeee 'гарагийн' p 'цагт'",yesterday:"'өчигдөр' p 'цагт'",today:"'өнөөдөр' p 'цагт'",tomorrow:"'маргааш' p 'цагт'",nextWeek:"'ирэх' eeee 'гарагийн' p 'цагт'",other:"P"};function formatRelative(a,e,t,i){return formatRelativeLocale[a]}var eraValues={narrow:["НТӨ","НТ"],abbreviated:["НТӨ","НТ"],wide:["нийтийн тооллын өмнөх","нийтийн тооллын"]};var quarterValues={narrow:["I","II","III","IV"],abbreviated:["I улирал","II улирал","III улирал","IV улирал"],wide:["1-р улирал","2-р улирал","3-р улирал","4-р улирал"]};var monthValues={narrow:["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],abbreviated:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],wide:["Нэгдүгээр сар","Хоёрдугаар сар","Гуравдугаар сар","Дөрөвдүгээр сар","Тавдугаар сар","Зургаадугаар сар","Долоодугаар сар","Наймдугаар сар","Есдүгээр сар","Аравдугаар сар","Арваннэгдүгээр сар","Арван хоёрдугаар сар"]};var formattingMonthValues={narrow:["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],abbreviated:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],wide:["нэгдүгээр сар","хоёрдугаар сар","гуравдугаар сар","дөрөвдүгээр сар","тавдугаар сар","зургаадугаар сар","долоодугаар сар","наймдугаар сар","есдүгээр сар","аравдугаар сар","арваннэгдүгээр сар","арван хоёрдугаар сар"]};var dayValues={narrow:["Н","Д","М","Л","П","Б","Б"],short:["Ня","Да","Мя","Лх","Пү","Ба","Бя"],abbreviated:["Ням","Дав","Мяг","Лха","Пүр","Баа","Бям"],wide:["Ням","Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба"]};var formattingDayValues={narrow:["Н","Д","М","Л","П","Б","Б"],short:["Ня","Да","Мя","Лх","Пү","Ба","Бя"],abbreviated:["Ням","Дав","Мяг","Лха","Пүр","Баа","Бям"],wide:["ням","даваа","мягмар","лхагва","пүрэв","баасан","бямба"]};var dayPeriodValues={narrow:{am:"ү.ө.",pm:"ү.х.",midnight:"шөнө дунд",noon:"үд дунд",morning:"өглөө",afternoon:"өдөр",evening:"орой",night:"шөнө"},abbreviated:{am:"ү.ө.",pm:"ү.х.",midnight:"шөнө дунд",noon:"үд дунд",morning:"өглөө",afternoon:"өдөр",evening:"орой",night:"шөнө"},wide:{am:"ү.ө.",pm:"ү.х.",midnight:"шөнө дунд",noon:"үд дунд",morning:"өглөө",afternoon:"өдөр",evening:"орой",night:"шөнө"}};function ordinalNumber(a,e){var t=Number(a);return t}var localize={ordinalNumber:ordinalNumber,era:buildLocalizeFn({values:eraValues,defaultWidth:"wide"}),quarter:buildLocalizeFn({values:quarterValues,defaultWidth:"wide",argumentCallback:function a(e){return Number(e)-1}}),month:buildLocalizeFn({values:monthValues,defaultWidth:"wide",formattingValues:formattingMonthValues,defaultFormattingWidth:"wide"}),day:buildLocalizeFn({values:dayValues,defaultWidth:"wide",formattingValues:formattingDayValues,defaultFormattingWidth:"wide"}),dayPeriod:buildLocalizeFn({values:dayPeriodValues,defaultWidth:"wide"})};var matchOrdinalNumberPattern=/\d+/i;var parseOrdinalNumberPattern=/\d+/i;var matchEraPatterns={narrow:/^(нтө|нт)/i,abbreviated:/^(нтө|нт)/i,wide:/^(нийтийн тооллын өмнө|нийтийн тооллын)/i};var parseEraPatterns={any:[/^(нтө|нийтийн тооллын өмнө)/i,/^(нт|нийтийн тооллын)/i]};var matchQuarterPatterns={narrow:/^(iv|iii|ii|i)/i,abbreviated:/^(iv|iii|ii|i) улирал/i,wide:/^[1-4]-р улирал/i};var parseQuarterPatterns={any:[/^(i(\s|$)|1)/i,/^(ii(\s|$)|2)/i,/^(iii(\s|$)|3)/i,/^(iv(\s|$)|4)/i]};var matchMonthPatterns={narrow:/^(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i)/i,abbreviated:/^(1-р сар|2-р сар|3-р сар|4-р сар|5-р сар|6-р сар|7-р сар|8-р сар|9-р сар|10-р сар|11-р сар|12-р сар)/i,wide:/^(нэгдүгээр сар|хоёрдугаар сар|гуравдугаар сар|дөрөвдүгээр сар|тавдугаар сар|зургаадугаар сар|долоодугаар сар|наймдугаар сар|есдүгээр сар|аравдугаар сар|арван нэгдүгээр сар|арван хоёрдугаар сар)/i};var parseMonthPatterns={narrow:[/^i$/i,/^ii$/i,/^iii$/i,/^iv$/i,/^v$/i,/^vi$/i,/^vii$/i,/^viii$/i,/^ix$/i,/^x$/i,/^xi$/i,/^xii$/i],any:[/^(1|нэгдүгээр)/i,/^(2|хоёрдугаар)/i,/^(3|гуравдугаар)/i,/^(4|дөрөвдүгээр)/i,/^(5|тавдугаар)/i,/^(6|зургаадугаар)/i,/^(7|долоодугаар)/i,/^(8|наймдугаар)/i,/^(9|есдүгээр)/i,/^(10|аравдугаар)/i,/^(11|арван нэгдүгээр)/i,/^(12|арван хоёрдугаар)/i]};var matchDayPatterns={narrow:/^[ндмлпбб]/i,short:/^(ня|да|мя|лх|пү|ба|бя)/i,abbreviated:/^(ням|дав|мяг|лха|пүр|баа|бям)/i,wide:/^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i};var parseDayPatterns={narrow:[/^н/i,/^д/i,/^м/i,/^л/i,/^п/i,/^б/i,/^б/i],any:[/^ня/i,/^да/i,/^мя/i,/^лх/i,/^пү/i,/^ба/i,/^бя/i]};var matchDayPeriodPatterns={narrow:/^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i,any:/^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i};var parseDayPeriodPatterns={any:{am:/^ү\.ө\./i,pm:/^ү\.х\./i,midnight:/^шөнө дунд/i,noon:/^үд дунд/i,morning:/өглөө/i,afternoon:/өдөр/i,evening:/орой/i,night:/шөнө/i}};var match={ordinalNumber:buildMatchPatternFn({matchPattern:matchOrdinalNumberPattern,parsePattern:parseOrdinalNumberPattern,valueCallback:function a(e){return parseInt(e,10)}}),era:buildMatchFn({matchPatterns:matchEraPatterns,defaultMatchWidth:"wide",parsePatterns:parseEraPatterns,defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:matchQuarterPatterns,defaultMatchWidth:"wide",parsePatterns:parseQuarterPatterns,defaultParseWidth:"any",valueCallback:function a(e){return e+1}}),month:buildMatchFn({matchPatterns:matchMonthPatterns,defaultMatchWidth:"wide",parsePatterns:parseMonthPatterns,defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:matchDayPatterns,defaultMatchWidth:"wide",parsePatterns:parseDayPatterns,defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:matchDayPeriodPatterns,defaultMatchWidth:"any",parsePatterns:parseDayPeriodPatterns,defaultParseWidth:"any"})};var locale={code:"mn",formatDistance:formatDistance,formatLong:formatLong,formatRelative:formatRelative,localize:localize,match:match,options:{weekStartsOn:1,firstWeekContainsDate:1}};export default locale;