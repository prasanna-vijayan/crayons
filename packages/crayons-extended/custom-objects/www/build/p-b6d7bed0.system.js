System.register(["./p-e77bbe74.system.js"],(function(e){"use strict";var a,t,r,o;return{setters:[function(e){a=e.b;t=e.a;r=e.c;o=e.d}],execute:function(){var n={lessThanXSeconds:{one:"menos dun segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos dun minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"arredor dunha hora",other:"arredor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"arredor dunha semana",other:"arredor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"arredor de 1 mes",other:"arredor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"arredor dun ano",other:"arredor de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"máis dun ano",other:"máis de {{count}} anos"},almostXYears:{one:"case un ano",other:"case {{count}} anos"}};function i(e,a,t){t=t||{};var r;if(typeof n[e]==="string"){r=n[e]}else if(a===1){r=n[e].one}else{r=n[e].other.replace("{{count}}",a)}if(t.addSuffix){if(t.comparison>0){return"en "+r}else{return"hai "+r}}return r}var d={full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"};var s={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var m={full:"{{date}} 'ás' {{time}}",long:"{{date}} 'ás' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var u={date:a({formats:d,defaultWidth:"full"}),time:a({formats:s,defaultWidth:"full"}),dateTime:a({formats:m,defaultWidth:"full"})};var h={lastWeek:"'o' eeee 'pasado á' LT",yesterday:"'onte á' p",today:"'hoxe á' p",tomorrow:"'mañá á' p",nextWeek:"eeee 'á' p",other:"P"};var l={lastWeek:"'o' eeee 'pasado ás' p",yesterday:"'onte ás' p",today:"'hoxe ás' p",tomorrow:"'mañá ás' p",nextWeek:"eeee 'ás' p",other:"P"};function c(e,a,t,r){if(a.getUTCHours()!==1){return l[e]}return h[e]}var v={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despois de cristo"]};var f={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]};var b={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["xan","feb","mar","abr","mai","xun","xul","ago","set","out","nov","dec"],wide:["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro"]};var g={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","me","xo","ve","sa"],abbreviated:["dom","lun","mar","mer","xov","ven","sab"],wide:["domingo","luns","martes","mércores","xoves","venres","sábado"]};var x={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañá",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediodía",morning:"mañá",afternoon:"tarde",evening:"tardiña",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediodía",morning:"mañá",afternoon:"tarde",evening:"tardiña",night:"noite"}};var p={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediodía",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediodía",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"}};function w(e){var a=Number(e);return a+"º"}var y={ordinalNumber:w,era:t({values:v,defaultWidth:"wide"}),quarter:t({values:f,defaultWidth:"wide",argumentCallback:function e(a){return Number(a)-1}}),month:t({values:b,defaultWidth:"wide"}),day:t({values:g,defaultWidth:"wide"}),dayPeriod:t({values:x,defaultWidth:"wide",formattingValues:p,defaultFormattingWidth:"wide"})};var M=/^(\d+)(º)?/i;var W=/\d+/i;var P={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era com[uú]n|despois de cristo|era com[uú]n)/i};var k={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era com[uú]n)/i,/^(despois de cristo|era com[uú]n)/i]};var H={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i};var T={any:[/1/i,/2/i,/3/i,/4/i]};var C={narrow:/^[xfmasond]/i,abbreviated:/^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i,wide:/^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i};var z={narrow:[/^x/i,/^f/i,/^m/i,/^a/i,/^m/i,/^x/i,/^x/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^xan/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^xun/i,/^xul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dec/i]};var X={narrow:/^[dlmxvs]/i,short:/^(do|lu|ma|me|xo|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|xov|ven|sab)/i,wide:/^(domingo|luns|martes|m[eé]rcores|xoves|venres|s[áa]bado)/i};var A={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^x/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^me/i,/^xo/i,/^ve/i,/^sa/i]};var D={narrow:/^(a|p|mn|md|(da|[aá]s) (mañ[aá]|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|medianoite|mediod[ií]a|(da|[aá]s) (mañ[aá]|tarde|noite))/i};var S={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañ[aá]/i,afternoon:/tarde/i,evening:/tardiña/i,night:/noite/i}};var j={ordinalNumber:r({matchPattern:M,parsePattern:W,valueCallback:function e(a){return parseInt(a,10)}}),era:o({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),quarter:o({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any",valueCallback:function e(a){return a+1}}),month:o({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),day:o({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:D,defaultMatchWidth:"any",parsePatterns:S,defaultParseWidth:"any"})};var E=e("default",{code:"gl",formatDistance:i,formatLong:u,formatRelative:c,localize:y,match:j,options:{weekStartsOn:1,firstWeekContainsDate:1}})}}}));