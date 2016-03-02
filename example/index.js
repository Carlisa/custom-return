"use strict";

const customReturn = require("../lib");

let noop = customReturn();
noop();
// undefined
// Nothing happened :D

let magic = customReturn(42);
console.log(magic());
// => 42
