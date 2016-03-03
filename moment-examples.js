var moment = require('moment')
var now = moment()

var timestamp = 1456963246034
var timestampMoment = moment.utc(timestamp)
console.log(timestampMoment.local().format('h:mm a'))

//
// now.subtract(1, 'year')
//
// console.log(now.format())
// console.log(now.format('MMM Do YYYY, h:mma'))
