"use strict";
//single-threaded javascript
//Google V8 Engine or spider monkey as JS Engines for frontend on-Browser work
//Javascript Engine atleast consists of a Call Stack and a Memory Heap which will run on one thread
//The javascript Engines themselves run in several threads(proccesses) that do different things: compressor for example, Garbage Collection,etc.,
//In Ahead of time Compilation all the code is converted to machine language at once, and then written to a file in assembly, so that the computer can run the software, which can even happen after a long time the file was created
//Compiler mainly performs this task: Lexical Analysis , Syntactical Analysis and Parsing 
//In Interpretation  , the interpreter goes through initial pass and then executes the source code line by line. During the runtime, while running line by line, the code is also compiled into machine language
//Types
//Source Code -> Byte Code ->Portable file -> Assembly level Instructions -> Machine Code -> Binary code  ,ther are a number of intermeddiate files and languages between each of the stage 
//In the Just-In Time compilation approach , the entire code is translated into machine language in a single step and is executed immediately afterwards, During the conversion proccess no intermeddiate files are created;instead , the code is directly compiled into machine language in a single step and is executed immediately afterward. During the conversion proccess,no intermediate files are created ; instead the code is directly compiled 
//Generally, for your code to execute, the programming language needs to be transformed into machine code. There are several approaches to how and when this transformation can happen.
//The most common way of transforming the code is by performing ahead-of-time compilation. It works exactly as it sounds: the code is transformed into machine code before the execution of your program during the compilation stage.
//This approach is used by many programming languages such as C++, Java, and others.
//On the other side of the table, we have interpretation: each line of the code will be executed at runtime. This approach is usually taken by dynamically typed languages like JavaScript and Python because it’s impossible to know the exact type before execution.
//Because ahead-of-time compilation can assess all the code together, it can provide better optimization and eventually produce more performant code. Interpretation, on the other side, is simpler to implement, but it’s usually slower than the compiled option.
//To transform the code faster and more effectively for dynamic languages, a new approach was created called Just-in-Time (JIT) compilation. It combines the best from interpretation and compilation.
//While using interpretation as a base method, V8 can detect functions that are used more frequently than others and compile them using type information from previous executions.
//However, there is a chance that the type might change. We need to de-optimize compiled code and fallback to interpretation instead (after that, we can recompile the function after getting new type feedback). 
//Let's explore each part of JIT compilation in more detail.
//V8 uses an interpreter called Ignition. Initially, it takes an abstract syntax tree and generates byte code.
//Byte code instructions also have metadata, such as source line positions for future debugging. Generally, byte code instructions match the JS abstractions.
//Now let's take our example and generate byte code for it manually:
/*function foo() {
  let bar = 1;
  return bar;
}
  LdaSmi #1 // write 1 to accumulator
Star r0   // read to r0 (bar) from accumulator
Ldar r0   // write from r0 (bar) to accumulator
Return    // returns accumulator*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//
console.log("TYPESCRIPT");
//Primitives
let a = 12;
let b = 15.15;
let str = "TYPESCRIPT";
let ch = 'a';
console.table([a, b, str, ch]);
console.table([a, b, str, ch]);
//Here characters are single elements of string
//Reference Data Types: () {} []
// Arrays
let c = [1, 2, 3, 4, 5, "TYPESCRIPT", { name: "typescriptor" }];
let k = [1, 0, 1];
let d = c;
d = [1, 2, 3, 4];
console.log(c);
console.log(d);
//tuples: fixing the type of array-like data structure elements
let tuple = ["TYPESCRIPT", 20];
console.log(tuple);
//Enumerations: enums
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
    StatusCodes["OK"] = "OK 200";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.OK);
console.log(UserRoles.GUEST);
//Functions
function abcd() {
    console.log("Hey");
}
//non returnable :void
abcd();
//map
let obj = {
    a: "TYPESCRIPT",
    b: "IS",
    c: "BETTER"
};
console.log(obj);
//Any,Unknown,Void,Null,Undefined,Never
let x;
// x:boolean : Error
x = true;
let y;
y = false;
let z;
z = 0;
z = "Aniket";
if (typeof z == "string")
    z = z.toUpperCase();
console.log(z);
let p;
p = "TYPESCRIPT";
//never
function abcde() {
    while (true) { }
}
abcd();
console.log("heylloo");
//Type inference
let num = "12";
console.log(typeof (num)); //we did not need to infer the type of data stored  to num
//Understanding Type Inference
let num0 = 12; //TYpe annotations
console.log(typeof (num0));
function func(a, b) {
    console.log(a + b);
}
func(0, 1);
//Interfaces and Type Aliases
function func3(a, b) {
    let l = a.toPrecision();
    console.log(l);
    console.log(b.charAt(0));
}
func3(15, "Interfaces");
function getDataOfUser(obj) {
    console.log(obj.name);
    console.log(obj.gender); //undefined
}
//using interfaces to define object shapes
getDataOfUser({
    age: 20, name: "Aniket", email: "abcd@gmail.com", password: "1234",
    nm: "",
    changeName: function () {
        throw new Error("Function not implemented.");
    }
});
function f3(obj5) {
    console.log(obj5);
}
f3({ name: "Aniket Datta", email: "abcdefghij@gmail.com", password: "1234567890", admin: true });
function f4(obj) {
    console.log(obj.name);
    console.log(obj.email);
}
f4({ name: "Aniket", email: "xyz@rediffmail.com" });
let n1;
let n2;
n1 = 5;
n2 = "TYPESCRIPT";
function funcuser(a) {
    a.getDetails;
}
// types cannot be merged
// type num=number;
// type num=null;
// CLASSES AND OBJECTS
//Topics to be covered:
//Class definition
//Constructors
//Access modifiers(public , private , protected)
//Readonly properties
//Optional properties
//Parameter properties
//Getters and Setters
//Static members
//Abstract classes and methods
class Device {
    constructor() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
}
let d1 = new Device();
let d2 = new Device();
class Bottle {
    constructor() {
        this.radius = 120;
        this.price = 100;
        this.color = "white";
    }
}
let b1 = new Bottle();
//ek aisi machine jo produce kr rhi hain final consumable product ,aise hi machine ko constructor bolte hain , (aur jo bane hue object ko destroy krne mein madat kre woh destructor)
//constructor -> object creator, class mein instantiate krne mein 
class BottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let bottle1 = new BottleMaker("Milton", 1200);
class HumanMaker {
    constructor(name, ishandsome) {
        this.name = name;
        this.ishandsome = ishandsome;
        this.age = 0;
    }
}
let human = new HumanMaker("Aniket", true);
// class Music{
//   constructor(public name:string,public artist:string,public thumbnail:symbol|string,public length: number,public free: number){}
// }
class Music {
    constructor(name, artist, thumbnail, length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
}
let song = new Music("chal chhaiyaan chhaaiyaan", "vaiyaa", "chaiyaan.jpg", 100, true);
//This keyword
class CLN {
    constructor() {
        this.name = "anonymous";
    }
    changeSomeMoreStuff() {
        console.log("Hey");
    }
    changeName() {
        console.log(this.name);
        this.changeSomeMoreStuff();
    }
}
let obj4 = new CLN();
obj4.changeName();
//access modifiers
//public
class PublicAccess {
    constructor(nm) {
        this.nm = nm;
        this.nm = nm;
    }
    changing() {
        this.nm = "Learner";
        console.log(this.nm);
    }
}
let bew = new PublicAccess("LearningMe");
bew.nm = "MeLearning";
bew.changing();
//private
class BottleMakerTwo {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    changing2() {
        this.name = "Milton";
        console.log(this.name);
    }
}
let bottleobj = new BottleMakerTwo("MILTON");
bottleobj.changing2();
//bottleobj.name=""; not accessible
//Same class only for private
//Protected
class BottleMakerThree {
    constructor(name) {
        this.name = name;
        this.num = 5;
    }
}
class MetalBottleMaker extends BottleMakerThree {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name, this.num);
    }
}
let b6 = new MetalBottleMaker("MILTON");
b6.getValue();
// Define a class for the InheritanceIndustry
class InheritanceIndustryImpl {
    constructor(name, address, executor, beneficiaries) {
        this.name = name;
        this.address = address;
        this.executor = executor;
        this.beneficiaries = beneficiaries;
    }
    // Method to calculate the total percentage of beneficiaries
    calculateTotalPercentage() {
        return this.beneficiaries.reduce((acc, beneficiary) => acc + beneficiary.percentage, 0);
    }
    // Method to add a new beneficiary
    addBeneficiary(beneficiary) {
        this.beneficiaries.push(beneficiary);
    }
    // Method to remove a beneficiary
    removeBeneficiary(beneficiary) {
        const index = this.beneficiaries.indexOf(beneficiary);
        if (index !== -1) {
            this.beneficiaries.splice(index, 1);
        }
    }
}
// Define a class for the Executor
class ExecutorImpl {
    constructor(name, address, email, phone) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
}
//protected
class BottleMakers {
    constructor() {
        // private name = "Milton";
        this.name = "MILTON";
    }
}
class MetalBottleMakers extends BottleMakers {
    constructor() {
        super(...arguments);
        this.material = "metal";
    }
    changeName() {
        this.name = "Milton";
        console.log(this.name, this.material);
    }
}
let b7 = new MetalBottleMakers();
b7.changeName();
//Readonly properties
class User {
    constructor(nm) {
        this.nm = nm;
    }
    changeName() {
        // this.nm="hello"; readonly variables value cannot be rewritten
    }
}
let u1 = new User("RO");
u1.changeName();
class Users {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let U4 = new Users("Aniket Datta", 20, "male");
let U5 = new Users("Aniket Datta", 20);
//parameter properties
class User7 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
}
let u5 = new User7("harsh", 25);
u5.setName("RAM");
u5.getName();
//get and set
class Userz {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
let u6 = new Userz("aniket", 25);
u6.name; // name and age behave like attributes and not methods
u6.age;
//static members
// 01. accessing class properties without new keyword
//In TypeScript, the static keyword is used to declare a static member of a class. 
//Static members are shared by all instances of the class 
//and can be accessed without creating an instance of the class.
class Hero {
    static getRandomNumber() {
        return Math.random();
    }
}
Hero.version = 1.0;
// 02. static: object can be accessed only once
class Calculator {
    add(arg0, arg1) {
        throw new Error("Method not implemented.");
    }
    static calculateCircleArea(radius) {
        return Calculator.PI * radius ** 2;
    }
}
Calculator.PI = 3.14;
console.log(Calculator.PI); // 3.14
console.log(Calculator.calculateCircleArea(5)); // 78.5
//Abstract Classes and Methods
class Numbers {
    //static members
    static getRandomNum() {
        return Math.random() * 100;
    }
}
console.log(Numbers.getRandomNum());
//paytm/phonepe/gpay payment
//Mango tree / Banyan Tree,humans: abstract : have some meaning but the meaning is hidden
//Payment
// class Payment{
//   constructor(protected amount: number,protected account: number){
//    isPaymentValid(amount: number){
//     return this.amount > 0;
//    }
//   }
// }
// function isPaymentValid(amount: number, number: any) {
//   throw new Error("Function not implemented.");
// }
class food {
    constructor(gas, gasName) {
        this.gas = gas;
        this.gasName = gasName;
    }
}
class Vegies extends food {
}
class nonvegies extends food {
}
class Controller {
}
class UserController extends Controller {
    index() {
        // Implement user index logic
    }
    show(id) {
        // Implement user show logic
    }
    store() {
        // Implement user store logic
    }
    update(id) {
        // Implement user update logic
    }
    destroy(id) {
        // Implement user destroy logic
    }
}
class ProductController extends Controller {
    index() {
        // Implement product index logic
    }
    show(id) {
        // Implement product show logic
    }
    store() {
        // Implement product store logic
    }
    update(id) {
        // Implement product update logic
    }
    destroy(id) {
        // Implement product destroy logic
    }
}
class Service {
}
class UserService extends Service {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // Implement user get all logic
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implement user get logic
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implement user create logic
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implement user update logic
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implement user delete logic
        });
    }
}
class ProductService extends Service {
    get(id) {
        throw new Error("Method not implemented.");
    }
    create(data) {
        throw new Error("Method not implemented.");
    }
    update(id, data) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // Implement product get all logic
        });
    }
}
//Functions -> code reusability,simplifying tasks ,Do not Repeat Yourself
//Function Types 
//Optional and default parameters
//Rest Parameters
//overloads
//Function Types:
//returneable functions
function func9() {
    return "hey";
}
//void returning functions
function functnonreturnablefunc() {
}
//callbacks
// function callback(name:string,cb:(value:string)){}
function ghijkl(name, age, cb) {
    cb();
}
ghijkl("harsh", 25, () => {
    console.log("abcdefghijkl");
});
//Callback Functions : (function as an arguement of another function)
function understand(name, age, cb2) {
    cb2("hey");
}
understand("KNOWLEDGE", 25, (arg) => {
    console.log("FUNCTIONS");
});
//optional and Default parameters
//default parameters
function hardwork(name, age, gender) {
}
//arguements
hardwork("harsh", 25, "male");
hardwork("whoami", 20, "female");
//Rest Parameter
function restoperatedfunction(...args) {
}
restoperatedfunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
//Rest/spread Operator
function summation(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    return sum;
}
summation(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
console.log("Sum of first nine natural numbers with rest operator function:", summation(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
function friends(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
friends("Aniket", "Ram");
let arr = [0, 1, 2, 3, 4, 5];
let arr1 = [...arr];
console.log(arr1);
//spread
const arr0 = [1, 2, 3];
const arr2 = [...arr0, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]
const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign(Object.assign({}, obj1), { c: 3, d: 4 });
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }
//Function Overloading
// class NClass {
//   constructor(public ooo: () => void = NClass.defaultOoo) {}
//   static defaultOoo(): void {}
// }
// const instance = new NClass();
// instance.ooo(); // Okay
// class NClass {
//   constructor(public ooo: () => void) {}
// }
// class Calculators {
//   add(x: number, y: number): number;
//   add(x: string, y: string | number): string;
//   add(x: any, y: any): any {
//     return x + y;
//   }
// }
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.add('a', 'b')); // "ab"
//Generics
//Generic functions
//Generic interfaces
//Generic classes
//humein ek function banana hain jo ki accept krega koi bhi value and usey print karega
function logger(a) {
    //a. -> intellisense not working , cant detect whether a is a string or number
}
logger("hey");
//logger(12);
function logger2(a) {
    //a.
}
logger2("hey");
logger2(undefined);
logger2(10);
//hum ek function ko use krte waqt bata sakte hain ki function arguement kis type se treat kre?
function func8(a) {
    console.log(a);
}
func8("GENERICS");
func8(10);
//shortening console.log()
function log(a) {
    console.log(a);
}
log("hey");
log(5);
log(undefined);
log(null);
//Generic inferencing
//Generic functions
function lg(val) {
    console.log(val);
}
lg("Aniket"); //<string> not written here
//generic functions with string literals
function abcdef(a, b) {
    //return "hey" as T;
    return "hey";
}
abcdef("hey", "hello");
function info(obj) {
}
info({ name: "foo", age: 25, key: "arv" });
//generic class
class objmaker {
    constructor(key) { }
}
let variable = new objmaker("hey");
let variable0 = new objmaker("hey");
console.log(variable, variable0);
//Type Assertions
//Type casting
//Non-null assertion operator
//type assertion  : this is required when we know more about the type of the variable than typescript
// let typeassert:any =12;
//console.log((typeassert as string).charAt(0));
//(typeassert as string).charAt(0);
// <number>typeassert
// console.log(typeof typeassert)
let typeassert;
typeassert = "hello";
console.log(typeassert.charAt(0));
typeassert.charAt(0);
//Type Guards
//Using typeof and instanceof
//Partial , required and readonly
function abdv(arg) {
    if (typeof arg === "number") {
        return "number";
    }
    else if (typeof arg === "string") {
        return "string";
    }
    else {
        throw new Error("pagal hu mein");
    }
}
console.log(abdv(12));
console.log(abdv("hello"));
console.log(abdv(undefined));
//instanceof
class TVRemote {
    switchTvoff() {
        console.log("Switching off tv");
    }
}
class CarRemote {
    switchCarOff() {
        console.log("Switch off car");
    }
}
const tv = new TVRemote();
const car = new CarRemote();
function switchoffkaro(device) {
    if (device instanceof TVRemote) {
        device.switchTvoff();
    }
    else if (device instanceof CarRemote) {
        device.switchCarOff();
    }
}
switchoffkaro(tv);
