import{f as formatDistance,l as localize,m as match}from"./index-e1f984e1-7f1c9bd7.js";import{f as formatRelative}from"./index-5f0fd88a-7fe4fae4.js";import{b as buildFormatLongFn}from"./index-dc611d24-9b65abdc.js";var dateFormats={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"yy-MM-dd"};var timeFormats={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var dateTimeFormats={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var formatLong={date:buildFormatLongFn({formats:dateFormats,defaultWidth:"full"}),time:buildFormatLongFn({formats:timeFormats,defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:dateTimeFormats,defaultWidth:"full"})};var locale={code:"fr-CA",formatDistance:formatDistance,formatLong:formatLong,formatRelative:formatRelative,localize:localize,match:match,options:{weekStartsOn:0,firstWeekContainsDate:1}};export default locale;