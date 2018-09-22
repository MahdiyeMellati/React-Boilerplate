var moment=require('moment');
console.log(moment().format());

var now= moment();
console.log('Current timestamp is ' +now.unix());
var timestamp= 1537605719;
var currentMoment= moment.unix(timestamp);
console.log('current moment: ',currentMoment.format('MMM D,YY @ h:mm A'));
