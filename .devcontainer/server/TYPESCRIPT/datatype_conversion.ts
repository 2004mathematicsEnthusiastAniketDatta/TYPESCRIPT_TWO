let score: Number = 33;
console.log(typeof score);

let s: Number | String = "33";
console.log(typeof (s));

let valueInNumber=Number(s);
console.log(typeof (valueInNumber));
let k : any = Number("18abpcsrr4566888fgghnj");

console.log(typeof (k));

console.log(k); //NaN
console.log(Number(null));

let  isLgdIn: Boolean | Number = true;


console.log(typeof isLgdIn);