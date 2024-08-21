"use strict";
// Primitive Datatypes
// 7 types: String , Number , Boolean , null , undefined , Symbol , BigInt
const scr = 100;
const scrValue = 100.3;
// const isloggedin: number = false;
const outsidetemp = null;
// let userEmail;
const id = Symbol('123');
const anotherid = Symbol('456');
console.log(id === anotherid);
// const bigNumber:BigInt = 3456543578665855n;
//Non-Primitve Datatypes in C
//Reference types: 
// Arrays , Objects , Functions
const heroes = ["Shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
};
const myfunction = function () {
    console.log("Hello world");
};
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myfunction);
