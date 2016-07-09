var time = require("./lib.js");

var epoch = new Date(0);
console.log("ms: " + time.since(epoch).millis());
console.log("s: " + time.since(epoch).secs());
console.log("m: " + time.since(epoch).mins());
console.log("h: " + time.since(epoch).hours());
console.log("d: " + time.since(epoch).days());
console.log("w: " + time.since(epoch).weeks());
