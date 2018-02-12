const belgiumCalendar = require('./belgium');
const usCalendar = require('./unitedStates');

module.exports = {
  dates: function() {

    // Get localized celebration names
    return belgiumCalendar.dates().concat( usCalendar.dates() );
  }
};
