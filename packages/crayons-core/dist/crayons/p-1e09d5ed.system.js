System.register(["./p-d74d0fc8.system.js","./p-6fb516eb.system.js","./p-05d88764.system.js"],(function(t){"use strict";var e,a,m,s,f;return{setters:[function(t){e=t.f},function(t){a=t.b},function(t){m=t.f;s=t.l;f=t.m}],execute:function(){var d={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"};var i={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};var o={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var l={date:a({formats:d,defaultWidth:"full"}),time:a({formats:i,defaultWidth:"full"}),dateTime:a({formats:o,defaultWidth:"full"})};var r=t("default",{code:"en-US",formatDistance:e,formatLong:l,formatRelative:m,localize:s,match:f,options:{weekStartsOn:0,firstWeekContainsDate:1}})}}}));