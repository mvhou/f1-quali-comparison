"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var conv = require("./conversions");
var log = function (x, name) {
    if (name === void 0) { name = ''; }
    console.log(x);
    return (x);
};
var driverNumbers = [
    '44',
    '77',
    '5',
    '7'
];
var getData = function (data) { return JSON.parse(data).Races; };
fs.readFile('data/2017.json', function (_, f) {
    var data = getData(f);
    var results = {};
    data.forEach(function (race) {
        results[race.raceName] = race.QualifyingResults.filter(function (d) { return driverNumbers.includes(d.number); })
            .map(function (driver) { return [driver.Driver.driverId, conv.toMs(driver.Q1), conv.toMs(driver.Q2), conv.toMs(driver.Q3)]; });
    });
    console.log(results);
});
