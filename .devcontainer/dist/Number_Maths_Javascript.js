"use strict";
const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));
Number.MAX_VALUE;
Number.MIN_VALUE;
// +++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++
console.log(Math);
console.log(Math.random());
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);
const min = 10;
const max = 20;
console.log(Math.random() * (max - min + 1) + min);
