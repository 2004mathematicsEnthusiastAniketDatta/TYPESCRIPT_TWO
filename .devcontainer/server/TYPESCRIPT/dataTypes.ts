"use strict";
// alert("hello world");
// alert(3 + 3);
console.log(3+3);
console.log("HUSSEN  AND HITESH SIRS ARE GREAT TEACHERS");
let foo: string | null | undefined;
let doo: string | null = 'bar';
doo = null; // Okay
let roo: string | null; // or
let robo: string | undefined;
let nm: String = "Daemon";
let age: Number = 18;
let isLoggedIn:Boolean = false;
let state: any = null;
roo =null
// number =>2 to the power 53
// bigint => 9836283226n
// string => "" | ''
// boolean => true / false
// null seems to be a data type =>standalone value that is an object in javascript
//undefined => unassigned variables are assumed to have the type undefined within them
//undefined is the value of a variable just before temporal dead zone
//symbol : unique data types

console.table([typeof(foo),typeof(doo),typeof(roo),typeof(robo),typeof(nm),typeof(nm),typeof(age),typeof(isLoggedIn),typeof(state)]);
console.log(typeof(Symbol));
console.log(typeof undefined);