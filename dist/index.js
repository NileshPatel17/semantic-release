"use strict";
exports.__esModule = true;
exports.version = exports.packageName = exports.author = exports.beta = exports.divide = exports.multiply = exports.add = void 0;
var _a = require('./package.json'), author = _a.author, packageName = _a.name, version = _a.version;
exports.author = author;
exports.packageName = packageName;
exports.version = version;
function add(a, b) {
    return a + b;
}
exports.add = add;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function divide(a, b) {
    return a / b;
}
exports.divide = divide;
function beta() {
    return "version: " + version;
}
exports.beta = beta;
