System.register(["./p-e77bbe74.system.js"],(function(e){"use strict";var i,a,t,r;return{setters:[function(e){i=e.b;a=e.a;t=e.c;r=e.d}],execute:function(){var n={lessThanXSeconds:{one:"секунд хүрэхгүй",other:"{{count}} секунд хүрэхгүй"},xSeconds:{one:"1 секунд",other:"{{count}} секунд"},halfAMinute:"хагас минут",lessThanXMinutes:{one:"минут хүрэхгүй",other:"{{count}} минут хүрэхгүй"},xMinutes:{one:"1 минут",other:"{{count}} минут"},aboutXHours:{one:"ойролцоогоор 1 цаг",other:"ойролцоогоор {{count}} цаг"},xHours:{one:"1 цаг",other:"{{count}} цаг"},xDays:{one:"1 өдөр",other:"{{count}} өдөр"},aboutXWeeks:{one:"ойролцоогоор 1 долоо хоног",other:"ойролцоогоор {{count}} долоо хоног"},xWeeks:{one:"1 долоо хоног",other:"{{count}} долоо хоног"},aboutXMonths:{one:"ойролцоогоор 1 сар",other:"ойролцоогоор {{count}} сар"},xMonths:{one:"1 сар",other:"{{count}} сар"},aboutXYears:{one:"ойролцоогоор 1 жил",other:"ойролцоогоор {{count}} жил"},xYears:{one:"1 жил",other:"{{count}} жил"},overXYears:{one:"1 жил гаран",other:"{{count}} жил гаран"},almostXYears:{one:"бараг 1 жил",other:"бараг {{count}} жил"}};function o(e,i,a){a=a||{};var t;if(typeof n[e]==="string"){t=n[e]}else if(i===1){t=n[e].one}else{t=n[e].other.replace("{{count}}",i)}if(a.addSuffix){var r=t.split(" ");var o=r.pop();t=r.join(" ");switch(o){case"секунд":t+=" секундийн";break;case"минут":t+=" минутын";break;case"цаг":t+=" цагийн";break;case"өдөр":t+=" өдрийн";break;case"сар":t+=" сарын";break;case"жил":t+=" жилийн";break;case"хоног":t+=" хоногийн";break;case"гаран":t+=" гараны";break;case"хүрэхгүй":t+=" хүрэхгүй хугацааны";break;default:t+=o+"-н"}if(a.comparison>0){return t+" дараа"}else{return t+" өмнө"}}return t}var d={full:"y 'оны' MMMM'ын' d, EEEE 'гараг'",long:"y 'оны' MMMM'ын' d",medium:"y 'оны' MMM'ын' d",short:"y.MM.dd"};var s={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"};var u={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"};var h={date:i({formats:d,defaultWidth:"full"}),time:i({formats:s,defaultWidth:"full"}),dateTime:i({formats:u,defaultWidth:"full"})};var v={lastWeek:"'өнгөрсөн' eeee 'гарагийн' p 'цагт'",yesterday:"'өчигдөр' p 'цагт'",today:"'өнөөдөр' p 'цагт'",tomorrow:"'маргааш' p 'цагт'",nextWeek:"'ирэх' eeee 'гарагийн' p 'цагт'",other:"P"};function l(e,i,a,t){return v[e]}var m={narrow:["НТӨ","НТ"],abbreviated:["НТӨ","НТ"],wide:["нийтийн тооллын өмнөх","нийтийн тооллын"]};var c={narrow:["I","II","III","IV"],abbreviated:["I улирал","II улирал","III улирал","IV улирал"],wide:["1-р улирал","2-р улирал","3-р улирал","4-р улирал"]};var f={narrow:["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],abbreviated:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],wide:["Нэгдүгээр сар","Хоёрдугаар сар","Гуравдугаар сар","Дөрөвдүгээр сар","Тавдугаар сар","Зургаадугаар сар","Долоодугаар сар","Наймдугаар сар","Есдүгээр сар","Аравдугаар сар","Арваннэгдүгээр сар","Арван хоёрдугаар сар"]};var I={narrow:["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],abbreviated:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],wide:["нэгдүгээр сар","хоёрдугаар сар","гуравдугаар сар","дөрөвдүгээр сар","тавдугаар сар","зургаадугаар сар","долоодугаар сар","наймдугаар сар","есдүгээр сар","аравдугаар сар","арваннэгдүгээр сар","арван хоёрдугаар сар"]};var b={narrow:["Н","Д","М","Л","П","Б","Б"],short:["Ня","Да","Мя","Лх","Пү","Ба","Бя"],abbreviated:["Ням","Дав","Мяг","Лха","Пүр","Баа","Бям"],wide:["Ням","Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба"]};var w={narrow:["Н","Д","М","Л","П","Б","Б"],short:["Ня","Да","Мя","Лх","Пү","Ба","Бя"],abbreviated:["Ням","Дав","Мяг","Лха","Пүр","Баа","Бям"],wide:["ням","даваа","мягмар","лхагва","пүрэв","баасан","бямба"]};var g={narrow:{am:"ү.ө.",pm:"ү.х.",midnight:"шөнө дунд",noon:"үд дунд",morning:"өглөө",afternoon:"өдөр",evening:"орой",night:"шөнө"},abbreviated:{am:"ү.ө.",pm:"ү.х.",midnight:"шөнө дунд",noon:"үд дунд",morning:"өглөө",afternoon:"өдөр",evening:"орой",night:"шөнө"},wide:{am:"ү.ө.",pm:"ү.х.",midnight:"шөнө дунд",noon:"үд дунд",morning:"өглөө",afternoon:"өдөр",evening:"орой",night:"шөнө"}};function y(e,i){var a=Number(e);return a}var W={ordinalNumber:y,era:a({values:m,defaultWidth:"wide"}),quarter:a({values:c,defaultWidth:"wide",argumentCallback:function e(i){return Number(i)-1}}),month:a({values:f,defaultWidth:"wide",formattingValues:I,defaultFormattingWidth:"wide"}),day:a({values:b,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"}),dayPeriod:a({values:g,defaultWidth:"wide"})};var p=/\d+/i;var M=/\d+/i;var P={narrow:/^(нтө|нт)/i,abbreviated:/^(нтө|нт)/i,wide:/^(нийтийн тооллын өмнө|нийтийн тооллын)/i};var k={any:[/^(нтө|нийтийн тооллын өмнө)/i,/^(нт|нийтийн тооллын)/i]};var x={narrow:/^(iv|iii|ii|i)/i,abbreviated:/^(iv|iii|ii|i) улирал/i,wide:/^[1-4]-р улирал/i};var X={any:[/^(i(\s|$)|1)/i,/^(ii(\s|$)|2)/i,/^(iii(\s|$)|3)/i,/^(iv(\s|$)|4)/i]};var $={narrow:/^(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i)/i,abbreviated:/^(1-р сар|2-р сар|3-р сар|4-р сар|5-р сар|6-р сар|7-р сар|8-р сар|9-р сар|10-р сар|11-р сар|12-р сар)/i,wide:/^(нэгдүгээр сар|хоёрдугаар сар|гуравдугаар сар|дөрөвдүгээр сар|тавдугаар сар|зургаадугаар сар|долоодугаар сар|наймдугаар сар|есдүгээр сар|аравдугаар сар|арван нэгдүгээр сар|арван хоёрдугаар сар)/i};var V={narrow:[/^i$/i,/^ii$/i,/^iii$/i,/^iv$/i,/^v$/i,/^vi$/i,/^vii$/i,/^viii$/i,/^ix$/i,/^x$/i,/^xi$/i,/^xii$/i],any:[/^(1|нэгдүгээр)/i,/^(2|хоёрдугаар)/i,/^(3|гуравдугаар)/i,/^(4|дөрөвдүгээр)/i,/^(5|тавдугаар)/i,/^(6|зургаадугаар)/i,/^(7|долоодугаар)/i,/^(8|наймдугаар)/i,/^(9|есдүгээр)/i,/^(10|аравдугаар)/i,/^(11|арван нэгдүгээр)/i,/^(12|арван хоёрдугаар)/i]};var z={narrow:/^[ндмлпбб]/i,short:/^(ня|да|мя|лх|пү|ба|бя)/i,abbreviated:/^(ням|дав|мяг|лха|пүр|баа|бям)/i,wide:/^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i};var H={narrow:[/^н/i,/^д/i,/^м/i,/^л/i,/^п/i,/^б/i,/^б/i],any:[/^ня/i,/^да/i,/^мя/i,/^лх/i,/^пү/i,/^ба/i,/^бя/i]};var S={narrow:/^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i,any:/^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i};var C={any:{am:/^ү\.ө\./i,pm:/^ү\.х\./i,midnight:/^шөнө дунд/i,noon:/^үд дунд/i,morning:/өглөө/i,afternoon:/өдөр/i,evening:/орой/i,night:/шөнө/i}};var E={ordinalNumber:t({matchPattern:p,parsePattern:M,valueCallback:function e(i){return parseInt(i,10)}}),era:r({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),quarter:r({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any",valueCallback:function e(i){return i+1}}),month:r({matchPatterns:$,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),day:r({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:S,defaultMatchWidth:"any",parsePatterns:C,defaultParseWidth:"any"})};var N=e("default",{code:"mn",formatDistance:o,formatLong:h,formatRelative:l,localize:W,match:E,options:{weekStartsOn:1,firstWeekContainsDate:1}})}}}));