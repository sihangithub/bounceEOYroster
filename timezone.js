
const date = new Date()

var utcOffset = date.getTimezoneOffset()
date.setMinutes(date.getMinutes() + utcOffset)

const singaporeTimeZoneOffset = 60 * 8
date.setMinutes(date.getMinutes() + singaporeTimeZoneOffset)

module.exports = date