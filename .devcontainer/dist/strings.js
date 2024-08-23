"use strict";
const name01 = "hitesh";
const repoCount = 50;
// console.log(name01 + repoCount+" Value")
console.log(`Hello my name is ${name01} and my repo count is ${repoCount}`);
const gameName = new String(`Frontend`);
console.log(gameName);
console.log(gameName[0]);
console.log(gameName[5]);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));
//Hoisting - Hoisting in JavaScript refers to the process of moving variable and function declarations to the top of their scope, 
//regardless of where they are actually defined in the code. 
//This means that variables and functions are moved to the top of their scope,
// making them available for use throughout the entire scope, even before they are actually declared.
// console.log(a);
// let a: Number = 12;
const newString = gameName.substring(0, 5);
console.log(newString);
const anotherStr = gameName.slice(-8, 5);
console.log(anotherStr);
//trim
let hello = " HOLA DUNIYA ";
console.log(hello.trim());
//replace
const url = "https://www.meta.ai/about%20meta";
console.log(url.replace('%20', '-'));
//split
console.log(hello.split(' '));
