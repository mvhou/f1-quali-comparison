"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = exports.toMs = exports.formatTime = void 0;
var formatTime = function (time, width) { return String(Math.round(time)).padStart(width, '0'); };
exports.formatTime = formatTime;
var toMs = function (time) { return (time === undefined || time === 'N/A' || time === "") ? 'N/A' : (Number.parseInt(time[0]) * 60000) + (Number.parseInt(time.slice(2, 4)) * 1000) + Number.parseInt(time.slice(5)); };
exports.toMs = toMs;
var toString = function (time) { return (time === undefined || time === 'N/A') ? 'N/A' : "".concat((0, exports.formatTime)((time / 1000) / 60, 2), ":").concat((0, exports.formatTime)((time / 1000) % 60, 2), ".").concat((0, exports.formatTime)(time % 1000, 3)); };
exports.toString = toString;
