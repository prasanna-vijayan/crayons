System.register(["./p-e77bbe74.system.js","./p-ab7244e7.system.js","./p-7bdde1a0.system.js"],(function(e){"use strict";var t,a,r,n,i,o;return{setters:[function(e){t=e.b;a=e.a;r=e.c;n=e.d},function(e){i=e.t;o=e.i},function(){}],execute:function(){var u={lessThanXSeconds:{one:"по-малко от секунда",other:"по-малко от {{count}} секунди"},xSeconds:{one:"1 секунда",other:"{{count}} секунди"},halfAMinute:"половин минута",lessThanXMinutes:{one:"по-малко от минута",other:"по-малко от {{count}} минути"},xMinutes:{one:"1 минута",other:"{{count}} минути"},aboutXHours:{one:"около час",other:"около {{count}} часа"},xHours:{one:"1 час",other:"{{count}} часа"},xDays:{one:"1 ден",other:"{{count}} дни"},aboutXWeeks:{one:"около седмица",other:"около {{count}} седмици"},xWeeks:{one:"1 седмица",other:"{{count}} седмици"},aboutXMonths:{one:"около месец",other:"около {{count}} месеца"},xMonths:{one:"1 месец",other:"{{count}} месеца"},aboutXYears:{one:"около година",other:"около {{count}} години"},xYears:{one:"1 година",other:"{{count}} години"},overXYears:{one:"над година",other:"над {{count}} години"},almostXYears:{one:"почти година",other:"почти {{count}} години"}};var s=function e(t,a){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var n=u[t];var i;if(typeof n==="string"){i=n}else if(a===1){i=n.one}else{i=n.other.replace("{{count}}",String(a))}if(r.addSuffix){if(r.comparison&&r.comparison>0){return"след "+i}else{return"преди "+i}}return i};var d={full:"EEEE, dd MMMM yyyy",long:"dd MMMM yyyy",medium:"dd MMM yyyy",short:"dd/MM/yyyy"};var c={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"H:mm"};var f={any:"{{date}} {{time}}"};var v={date:t({formats:d,defaultWidth:"full"}),time:t({formats:c,defaultWidth:"full"}),dateTime:t({formats:f,defaultWidth:"any"})};var h=["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"];function l(e){var t=h[e];switch(e){case 0:case 3:case 6:return"'миналата "+t+" в' p";case 1:case 2:case 4:case 5:return"'миналия "+t+" в' p"}}function m(e){var t=h[e];if(e===2){return"'във "+t+" в' p"}else{return"'в "+t+" в' p"}}function y(e){var t=h[e];switch(e){case 0:case 3:case 6:return"'следващата "+t+" в' p";case 1:case 2:case 4:case 5:return"'следващия "+t+" в' p"}}var b=function e(t,a,r){var n=i(t);var u=n.getUTCDay();if(o(n,a,r)){return m(u)}else{return l(u)}};var w=function e(t,a,r){var n=i(t);var u=n.getUTCDay();if(o(n,a,r)){return m(u)}else{return y(u)}};var p={lastWeek:b,yesterday:"'вчера в' p",today:"'днес в' p",tomorrow:"'утре в' p",nextWeek:w,other:"P"};var M=function e(t,a,r,n){var i=p[t];if(typeof i==="function"){return i(a,r,n)}return i};var W={narrow:["пр.н.е.","н.е."],abbreviated:["преди н. е.","н. е."],wide:["преди новата ера","новата ера"]};var g={narrow:["1","2","3","4"],abbreviated:["1-во тримес.","2-ро тримес.","3-то тримес.","4-то тримес."],wide:["1-во тримесечие","2-ро тримесечие","3-то тримесечие","4-то тримесечие"]};var P={abbreviated:["яну","фев","мар","апр","май","юни","юли","авг","сеп","окт","ное","дек"],wide:["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"]};var k={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вто","сря","чет","пет","съб"],wide:["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"]};var x={wide:{am:"преди обяд",pm:"след обяд",midnight:"в полунощ",noon:"на обяд",morning:"сутринта",afternoon:"следобед",evening:"вечерта",night:"през нощта"}};function H(e){return e==="year"||e==="week"||e==="minute"||e==="second"}function X(e){return e==="quarter"}function S(e,t,a,r,n){var i=X(t)?n:H(t)?r:a;return e+"-"+i}var z=function e(t){var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var r=String(a.unit);var n=Number(t);if(n===0){return S(0,r,"ев","ева","ево")}else if(n%1e3===0){return S(n,r,"ен","на","но")}else if(n%100===0){return S(n,r,"тен","тна","тно")}var i=n%100;if(i>20||i<10){switch(i%10){case 1:return S(n,r,"ви","ва","во");case 2:return S(n,r,"ри","ра","ро");case 7:case 8:return S(n,r,"ми","ма","мо")}}return S(n,r,"ти","та","то")};var C={ordinalNumber:z,era:a({values:W,defaultWidth:"wide"}),quarter:a({values:g,defaultWidth:"wide",argumentCallback:function e(t){return Number(t)-1}}),month:a({values:P,defaultWidth:"wide"}),day:a({values:k,defaultWidth:"wide"}),dayPeriod:a({values:x,defaultWidth:"wide"})};var D=/^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i;var N=/\d+/i;var T={narrow:/^((пр)?н\.?\s?е\.?)/i,abbreviated:/^((пр)?н\.?\s?е\.?)/i,wide:/^(преди новата ера|новата ера|нова ера)/i};var E={any:[/^п/i,/^н/i]};var Y={narrow:/^[1234]/i,abbreviated:/^[1234](-?[врт]?o?)? тримес.?/i,wide:/^[1234](-?[врт]?о?)? тримесечие/i};var j={any:[/1/i,/2/i,/3/i,/4/i]};var q={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)/i,abbreviated:/^(нед|пон|вто|сря|чет|пет|съб)/i,wide:/^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i};var U={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н[ед]/i,/^п[он]/i,/^вт/i,/^ср/i,/^ч[ет]/i,/^п[ет]/i,/^с[ъб]/i]};var A={abbreviated:/^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,wide:/^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i};var I={any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^май/i,/^юн/i,/^юл/i,/^ав/i,/^се/i,/^окт/i,/^но/i,/^де/i]};var L={any:/^(преди о|след о|в по|на о|през|веч|сут|следо)/i};var O={any:{am:/^преди о/i,pm:/^след о/i,midnight:/^в пол/i,noon:/^на об/i,morning:/^сут/i,afternoon:/^следо/i,evening:/^веч/i,night:/^през н/i}};var R={ordinalNumber:r({matchPattern:D,parsePattern:N,valueCallback:function e(t){return parseInt(t,10)}}),era:n({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),quarter:n({matchPatterns:Y,defaultMatchWidth:"wide",parsePatterns:j,defaultParseWidth:"any",valueCallback:function e(t){return Number(t)+1}}),month:n({matchPatterns:A,defaultMatchWidth:"wide",parsePatterns:I,defaultParseWidth:"any"}),day:n({matchPatterns:q,defaultMatchWidth:"wide",parsePatterns:U,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:L,defaultMatchWidth:"any",parsePatterns:O,defaultParseWidth:"any"})};var B=e("default",{code:"bg",formatDistance:s,formatLong:v,formatRelative:M,localize:C,match:R,options:{weekStartsOn:1,firstWeekContainsDate:1}})}}}));