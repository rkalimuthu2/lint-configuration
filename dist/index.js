"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
var add_1 = require("./operations/add");
Object.defineProperty(exports, "add", { enumerable: true, get: function () { return add_1.add; } });
var subtract_1 = require("./operations/subtract");
Object.defineProperty(exports, "subtract", { enumerable: true, get: function () { return subtract_1.subtract; } });
var multiply_1 = require("./operations/multiply");
Object.defineProperty(exports, "multiply", { enumerable: true, get: function () { return multiply_1.multiply; } });
var divide_1 = require("./operations/divide");
Object.defineProperty(exports, "divide", { enumerable: true, get: function () { return divide_1.divide; } });
