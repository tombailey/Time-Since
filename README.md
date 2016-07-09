# time-since

## Introduction

This is a Node.js based module to convert timestamps to meaningful seconds, minutes, hours, days and weeks.

## Dependencies

None, apart from Node.js itself.

## Examples

Do an npm install time-since.

```javascript
var time = require("time-since");

var epoch = new Date(0);
console.log("ms: " + time.since(epoch).millis());
console.log("s: " + time.since(epoch).secs());
console.log("m: " + time.since(epoch).mins());
console.log("h: " + time.since(epoch).hours());
console.log("d: " + time.since(epoch).days());
console.log("w: " + time.since(epoch).weeks());
```

## License

Apache 2 (go mad)
