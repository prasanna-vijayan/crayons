import{b as e,a as t,c as n,d as a}from"./p-ff9194c0.js";var r={lessThanXSeconds:{one:"1秒未満",other:"{{count}}秒未満",oneWithSuffix:"約1秒",otherWithSuffix:"約{{count}}秒"},xSeconds:{one:"1秒",other:"{{count}}秒"},halfAMinute:"30秒",lessThanXMinutes:{one:"1分未満",other:"{{count}}分未満",oneWithSuffix:"約1分",otherWithSuffix:"約{{count}}分"},xMinutes:{one:"1分",other:"{{count}}分"},aboutXHours:{one:"約1時間",other:"約{{count}}時間"},xHours:{one:"1時間",other:"{{count}}時間"},xDays:{one:"1日",other:"{{count}}日"},aboutXWeeks:{one:"約1週間",other:"約{{count}}週間"},xWeeks:{one:"1週間",other:"{{count}}週間"},aboutXMonths:{one:"約1か月",other:"約{{count}}か月"},xMonths:{one:"1か月",other:"{{count}}か月"},aboutXYears:{one:"約1年",other:"約{{count}}年"},xYears:{one:"1年",other:"{{count}}年"},overXYears:{one:"1年以上",other:"{{count}}年以上"},almostXYears:{one:"1年近く",other:"{{count}}年近く"}},o={date:e({formats:{full:"y年M月d日EEEE",long:"y年M月d日",medium:"y/MM/dd",short:"y/MM/dd"},defaultWidth:"full"}),time:e({formats:{full:"H時mm分ss秒 zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:e({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},i={lastWeek:"先週のeeeeのp",yesterday:"昨日のp",today:"今日のp",tomorrow:"明日のp",nextWeek:"翌週のeeeeのp",other:"P"},d={code:"ja",formatDistance:function(e,t,n){var a;n=n||{};var o=r[e];return a="string"==typeof o?o:1===t?n.addSuffix&&o.oneWithSuffix?o.oneWithSuffix:o.one:n.addSuffix&&o.otherWithSuffix?o.otherWithSuffix.replace("{{count}}",String(t)):o.other.replace("{{count}}",String(t)),n.addSuffix?n.comparison&&n.comparison>0?a+"後":a+"前":a},formatLong:o,formatRelative:function(e){return i[e]},localize:{ordinalNumber:function(e,t){var n=Number(e);switch(String((t||{}).unit)){case"year":return"".concat(n,"年");case"quarter":return"第".concat(n,"四半期");case"month":return"".concat(n,"月");case"week":return"第".concat(n,"週");case"date":return"".concat(n,"日");case"hour":return"".concat(n,"時");case"minute":return"".concat(n,"分");case"second":return"".concat(n,"秒");default:return"".concat(n)}},era:t({values:{narrow:["BC","AC"],abbreviated:["紀元前","西暦"],wide:["紀元前","西暦"]},defaultWidth:"wide"}),quarter:t({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["第1四半期","第2四半期","第3四半期","第4四半期"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:t({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},defaultWidth:"wide"}),day:t({values:{narrow:["日","月","火","水","木","金","土"],short:["日","月","火","水","木","金","土"],abbreviated:["日","月","火","水","木","金","土"],wide:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},defaultWidth:"wide"}),dayPeriod:t({values:{narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},defaultWidth:"wide",formattingValues:{narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:n({matchPattern:/^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:a({matchPatterns:{narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(紀元[前後]|西暦)/i,wide:/^(紀元[前後]|西暦)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^B/i,/^A/i],any:[/^(紀元前)/i,/^(西暦|紀元後)/i]},defaultParseWidth:"any"}),quarter:a({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^第[1234一二三四１２３４]四半期/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:a({matchPatterns:{narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])月/i,wide:/^([123456789]|1[012])月/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},defaultParseWidth:"any"}),day:a({matchPatterns:{narrow:/^[日月火水木金土]/,short:/^[日月火水木金土]/,abbreviated:/^[日月火水木金土]/,wide:/^[日月火水木金土]曜日/},defaultMatchWidth:"wide",parsePatterns:{any:[/^日/,/^月/,/^火/,/^水/,/^木/,/^金/,/^土/]},defaultParseWidth:"any"}),dayPeriod:a({matchPatterns:{any:/^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^(A|午前)/i,pm:/^(P|午後)/i,midnight:/^深夜|真夜中/i,noon:/^正午/i,morning:/^朝/i,afternoon:/^午後/i,evening:/^夜/i,night:/^深夜/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};export default d;