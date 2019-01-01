"use strict";
exports.__esModule = true;
var src_1 = require("../src");
console.log(src_1.isInt(15));
// => true
console.log(src_1.isInt(Math.PI));
// => false
console.log(src_1.random());
// Integer between 1 and 10 (include)
console.log(src_1.random(false));
// Float between 1 and 10
src_1.random();
console.log(src_1.random(100));
// Between 1 and 100
console.log(src_1.random(0, 1));
// Between 0 and 1
console.log(src_1.random(['un', 'deux', 'trois']));
// Return either 'un', 'deux' or 'trois'
console.log(src_1.range(5, 10));
// => [5, 6, 7, 8, 9, 10]
console.log(src_1.range(10, 0, 400, -200, 200));
// => -190
