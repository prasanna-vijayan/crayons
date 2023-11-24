System.register(["./p-e77bbe74.system.js"],(function(e){"use strict";var t,a,n,r;return{setters:[function(e){t=e.a;a=e.b;n=e.c;r=e.d}],execute:function(){var i={locale:{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},number:{"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"}};var o={narrow:["ईसा-पूर्व","ईस्वी"],abbreviated:["ईसा-पूर्व","ईस्वी"],wide:["ईसा-पूर्व","ईसवी सन"]};var d={narrow:["1","2","3","4"],abbreviated:["ति1","ति2","ति3","ति4"],wide:["पहली तिमाही","दूसरी तिमाही","तीसरी तिमाही","चौथी तिमाही"]};var u={narrow:["ज","फ़","मा","अ","मई","जू","जु","अग","सि","अक्टू","न","दि"],abbreviated:["जन","फ़र","मार्च","अप्रैल","मई","जून","जुल","अग","सित","अक्टू","नव","दिस"],wide:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"]};var s={narrow:["र","सो","मं","बु","गु","शु","श"],short:["र","सो","मं","बु","गु","शु","श"],abbreviated:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],wide:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"]};var h={narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}};var m={narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}};var l=function e(t,a){var n=Number(t);return f(n)};function v(e){var t=e.toString().replace(/[१२३४५६७८९०]/g,(function(e){return i.number[e]}));return Number(t)}function f(e){return e.toString().replace(/\d/g,(function(e){return i.locale[e]}))}var c={ordinalNumber:l,era:t({values:o,defaultWidth:"wide"}),quarter:t({values:d,defaultWidth:"wide",argumentCallback:function e(t){return t-1}}),month:t({values:u,defaultWidth:"wide"}),day:t({values:s,defaultWidth:"wide"}),dayPeriod:t({values:h,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})};var g={lessThanXSeconds:{one:"१ सेकंड से कम",other:"{{count}} सेकंड से कम"},xSeconds:{one:"१ सेकंड",other:"{{count}} सेकंड"},halfAMinute:"आधा मिनट",lessThanXMinutes:{one:"१ मिनट से कम",other:"{{count}} मिनट से कम"},xMinutes:{one:"१ मिनट",other:"{{count}} मिनट"},aboutXHours:{one:"लगभग १ घंटा",other:"लगभग {{count}} घंटे"},xHours:{one:"१ घंटा",other:"{{count}} घंटे"},xDays:{one:"१ दिन",other:"{{count}} दिन"},aboutXWeeks:{one:"लगभग १ सप्ताह",other:"लगभग {{count}} सप्ताह"},xWeeks:{one:"१ सप्ताह",other:"{{count}} सप्ताह"},aboutXMonths:{one:"लगभग १ महीना",other:"लगभग {{count}} महीने"},xMonths:{one:"१ महीना",other:"{{count}} महीने"},aboutXYears:{one:"लगभग १ वर्ष",other:"लगभग {{count}} वर्ष"},xYears:{one:"१ वर्ष",other:"{{count}} वर्ष"},overXYears:{one:"१ वर्ष से अधिक",other:"{{count}} वर्ष से अधिक"},almostXYears:{one:"लगभग १ वर्ष",other:"लगभग {{count}} वर्ष"}};var b=function e(t,a,n){var r;var i=g[t];if(typeof i==="string"){r=i}else if(a===1){r=i.one}else{r=i.other.replace("{{count}}",f(a))}if(n!==null&&n!==void 0&&n.addSuffix){if(n.comparison&&n.comparison>0){return r+"मे "}else{return r+" पहले"}}return r};var w={full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"};var y={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};var p={full:"{{date}} 'को' {{time}}",long:"{{date}} 'को' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var W={date:a({formats:w,defaultWidth:"full"}),time:a({formats:y,defaultWidth:"full"}),dateTime:a({formats:p,defaultWidth:"full"})};var M={lastWeek:"'पिछले' eeee p",yesterday:"'कल' p",today:"'आज' p",tomorrow:"'कल' p",nextWeek:"eeee 'को' p",other:"P"};var P=function e(t,a,n,r){return M[t]};var x=/^[०१२३४५६७८९]+/i;var k=/^[०१२३४५६७८९]+/i;var X={narrow:/^(ईसा-पूर्व|ईस्वी)/i,abbreviated:/^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i,wide:/^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i};var S={any:[/^b/i,/^(a|c)/i]};var z={narrow:/^[1234]/i,abbreviated:/^ति[1234]/i,wide:/^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i};var C={any:[/1/i,/2/i,/3/i,/4/i]};var E={narrow:/^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i,abbreviated:/^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i,wide:/^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i};var N={narrow:[/^ज/i,/^फ़/i,/^मा/i,/^अप्/i,/^मई/i,/^जू/i,/^जु/i,/^अग/i,/^सि/i,/^अक्तू/i,/^न/i,/^दि/i],any:[/^जन/i,/^फ़/i,/^मा/i,/^अप्/i,/^मई/i,/^जू/i,/^जु/i,/^अग/i,/^सि/i,/^अक्तू/i,/^नव/i,/^दिस/i]};var Y={narrow:/^[रविसोममंगलबुधगुरुशुक्रशनि]/i,short:/^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,abbreviated:/^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,wide:/^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i};var D={narrow:[/^रवि/i,/^सोम/i,/^मंगल/i,/^बुध/i,/^गुरु/i,/^शुक्र/i,/^शनि/i],any:[/^रवि/i,/^सोम/i,/^मंगल/i,/^बुध/i,/^गुरु/i,/^शुक्र/i,/^शनि/i]};var T={narrow:/^(पू|अ|म|द.\?|सु|दो|शा|रा)/i,any:/^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i};var q={any:{am:/^पूर्वाह्न/i,pm:/^अपराह्न/i,midnight:/^मध्य/i,noon:/^दो/i,morning:/सु/i,afternoon:/दो/i,evening:/शा/i,night:/रा/i}};var H={ordinalNumber:n({matchPattern:x,parsePattern:k,valueCallback:v}),era:r({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),quarter:r({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any",valueCallback:function e(t){return t+1}}),month:r({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),day:r({matchPatterns:Y,defaultMatchWidth:"wide",parsePatterns:D,defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:T,defaultMatchWidth:"any",parsePatterns:q,defaultParseWidth:"any"})};var j=e("default",{code:"hi",formatDistance:b,formatLong:W,formatRelative:P,localize:c,match:H,options:{weekStartsOn:0,firstWeekContainsDate:4}})}}}));