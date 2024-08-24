"use strict";
const sr = 400;
const bal = new Number(400);
console.log(sr === bal); //false
console.log(sr == bal); //true
console.log(bal);
console.log(bal.toString().length);
console.log(bal.toFixed(2));
console.log(bal.toPrecision(2));
const balance2 = new Number(3.14159);
console.log(balance2.toPrecision(2));
const hundred = 1000000;
// console.log(hundred.toLocaleString('en-'));
//Roman Number Conversion
function toRoman(numberz) {
    const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const decimalValues = [1, 5, 10, 50, 100, 500, 1000];
    let result = '';
    for (let i = decimalValues.length - 1; i >= 0; i--) {
        while (numberz >= decimalValues[i]) {
            result += romanNumerals[i];
            numberz -= decimalValues[i];
        }
    }
    return result;
}
const numberz = 1234;
const romanNumeralz = toRoman(numberz);
console.log(romanNumeralz); // Output: MCCXXXIV
// Use toLocaleString() to format the result
console.log(romanNumeralz.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
// Output: MCCXXXIV USD (Note: This is just an example, as Roman numerals are not supported by toLocaleString())
const number = 1234;
const formattedNumber = number.toLocaleString('en-US');
console.log(formattedNumber); // Output: 1,234
const romanNumeral = toRoman(number);
console.log(romanNumeral); // Output: MCCXXXIV
console.log(Number.EPSILON);
console.log(typeof Number.POSITIVE_INFINITY);
