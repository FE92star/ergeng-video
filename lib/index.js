"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tupleType = exports.loggingIdentity = exports.swap = exports.createArray = exports.multiply = exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
exports.createArray = createArray;
function swap(turple) {
    return [turple[1], turple[0]];
}
exports.swap = swap;
function loggingIdentity(args) {
    console.log(args.length);
    return args;
}
exports.loggingIdentity = loggingIdentity;
exports.tupleType = ["semlinker", true];
