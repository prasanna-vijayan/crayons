System.register(["./p-f66870bc.system.js","./p-e77bbe74.system.js"],(function(t){"use strict";var a,n,e,r,i;return{setters:[function(t){a=t.f;n=t.a;e=t.b;r=t.m},function(t){i=t.a}],execute:function(){var o={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]};var m={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]};var g={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jän","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]};var d={narrow:g.narrow,abbreviated:["Jän.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:g.wide};var h={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]};var s={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}};var u={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}};var v=function t(a,n){var e=Number(a);return e+"."};var c={ordinalNumber:v,era:i({values:o,defaultWidth:"wide"}),quarter:i({values:m,defaultWidth:"wide",argumentCallback:function t(a){return a-1}}),month:i({values:g,formattingValues:d,defaultWidth:"wide"}),day:i({values:h,defaultWidth:"wide"}),dayPeriod:i({values:s,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"})};var b=t("default",{code:"de-AT",formatDistance:a,formatLong:n,formatRelative:e,localize:c,match:r,options:{weekStartsOn:1,firstWeekContainsDate:4}})}}}));