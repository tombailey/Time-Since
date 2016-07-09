var MS_IN_SEC = 1000;
var MS_IN_MIN = MS_IN_SEC * 60;
var MS_IN_HOUR = MS_IN_MIN * 60;
var MS_IN_DAY = MS_IN_HOUR * 24;
var MS_IN_WEEK = MS_IN_DAY * 7;

module.exports = {
  "since": function(timestamp) {
    return {
      "millis": function() {
        return Date.now() - timestamp;
      }, "secs": function() {
        return Math.floor((Date.now() - timestamp) / MS_IN_SEC);
      }, "mins": function() {
        return Math.floor((Date.now() - timestamp) / MS_IN_MIN);
      }, "hours": function() {
        return Math.floor((Date.now() - timestamp) / MS_IN_HOUR);
      }, "days": function() {
        return Math.floor((Date.now() - timestamp) / MS_IN_DAY);
      }, "weeks": function() {
        return Math.floor((Date.now() - timestamp) / MS_IN_WEEK);
      }
    };
  }
};
