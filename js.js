"use strict"

const EventEmitter = require("events").EventEmitter;
const util = require("util");

var Employee = function (id, name, city) {
    this.id = id;
    this.name = name;
    this.city = city;
};

util.inherits(Employee, EventEmitter);

var ron = new Employee(10, "Ron", "Mars");

ron.on("customEvent", function () {
    console.log(this.id + " " + this.name + " " + this.city);
});

ron.emit("customEvent");
