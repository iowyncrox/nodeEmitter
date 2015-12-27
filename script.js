'use strict';
const util = require('util');
const event = require('events');
const emitter = new event.EventEmitter();

console.log(event);

emitter.on("customEvent", function (message, status) {
    console.log(message);
    console.log(status);
});

emitter.emit("customEvent", "Hello World", 200);