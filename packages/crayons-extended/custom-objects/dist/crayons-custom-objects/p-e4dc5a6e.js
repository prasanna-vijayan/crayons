import{f as a,a as t,b as n,m as e}from"./p-b271887a.js";import{a as i}from"./p-ff9194c0.js";var r={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},o={narrow:r.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:r.wide},m={code:"de",formatDistance:a,formatLong:t,formatRelative:n,localize:{ordinalNumber:function(a){return Number(a)+"."},era:i({values:{narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},defaultWidth:"wide"}),quarter:i({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:i({values:r,formattingValues:o,defaultWidth:"wide"}),day:i({values:{narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},defaultWidth:"wide"}),dayPeriod:i({values:{narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},defaultWidth:"wide",formattingValues:{narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},defaultFormattingWidth:"wide"})},match:e,options:{weekStartsOn:1,firstWeekContainsDate:4}};export default m;