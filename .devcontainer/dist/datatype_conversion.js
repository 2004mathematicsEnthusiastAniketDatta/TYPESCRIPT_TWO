"use strict";
let score = 33;
console.log(typeof score);
let s = "33";
console.log(typeof (s));
let valueInNumber = Number(s);
console.log(typeof (valueInNumber));
let k = Number("18abpcsrr4566888fgghnj");
console.log(typeof (k));
console.log(k); //NaN
console.log(Number(null)); //0

//Number(All falsy values) : 0 , Number(all truthy values): 1
