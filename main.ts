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

import number from "inquirer/lib/prompts/number";

//
console.log("TYPESCRIPT");
//Primitives
let a:number=12;
let b:number=15.15;
let str:string = "TYPESCRIPT";
let ch:string ='a';
console.table([a,b,str,ch]);
console.table([a,b,str,ch]);
//Here characters are single elements of string
//Reference Data Types: () {} []
// Arrays
let c =[1,2,3,4,5,"TYPESCRIPT",{name: "typescriptor"}];
let k:number[]=[1,0,1];
let d=c;
d=[1,2,3,4];
console.log(c)
console.log(d);
//tuples: fixing the type of array-like data structure elements
let tuple: [string,number] =["TYPESCRIPT",20];
console.log(tuple);
//Enumerations: enums
enum UserRoles{
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin"
}
enum StatusCodes{
  ABANDONED="abandoned status code 500",
  NOTFOUND ="not found status code 404",
  OK="OK 200"
}
console.log(StatusCodes.OK);
console.log(UserRoles.GUEST);
//Functions
function abcd(): void{
 console.log("Hey");
}
//non returnable :void
abcd();
//map
let obj={
  a:"TYPESCRIPT",
  b:"IS",
  c:"BETTER"
}
console.log(obj)
//Any,Unknown,Void,Null,Undefined,Never
let x: any;
// x:boolean : Error
x=true;
let y:boolean;
y=false;

let z:unknown;
z=0;
z="Aniket";
if (typeof z == "string")
  z=z.toUpperCase();
console.log(z);
let p : string | null;
p = "TYPESCRIPT"
 
//never
function abcde():never{
  while (true) {}
}
abcd();
console.log("heylloo");

//Type inference
let num="12";
console.log(typeof(num)); //we did not need to infer the type of data stored  to num
//Understanding Type Inference
let num0:number=12; //TYpe annotations
console.log(typeof(num0));

function func(a:number,b:number):void{
  console.log(a+b);
}
func(0,1);

//Interfaces and Type Aliases

function func3(a:number , b:string){
let  l=a.toPrecision();
  console.log(l);
  console.log(b.charAt(0));
}
func3(15,"Interfaces");

//Interfaces describes the shape of an object
//Type Aliases : User-Defined types

interface User
{
  age:number,
  name: string,
  email:string,
  password:string,
  gender?:string
}
function getDataOfUser(obj:User){
   console.log(obj.name);
   console.log(obj.gender);//undefined
}
//using interfaces to define object shapes
getDataOfUser({
  age: 20, name: "Aniket", email: "abcd@gmail.com", password: "1234",
  nm: "",
  changeName: function (): void {
    throw new Error("Function not implemented.");
  }
});

//Extending Interfaces
interface Usr{
  name: string;
  email:string;
  password: string;
}

interface Admin extends Usr{
  admin:boolean;
}
function f3(obj5: Admin){
  console.log(obj5)
}
f3({name: "Aniket Datta",email:"abcdefghij@gmail.com",password: "1234567890",admin:true});

//Merging of two interfaces with same name
interface Abcd{
  name: string;
}
interface Abcd{
  email: string
}
function f4(obj:Abcd){
 console.log(obj.name);
 console.log(obj.email); 
}
f4({name: "Aniket",email:"xyz@rediffmail.com"});


//Type Aliases

type sankhya = number | null;
type arg = number | string | null;
let n1: sankhya;
let n2:arg;
n1=5;
n2="TYPESCRIPT";

//Intersection Types
type you = {
name: string,
email: string,
}

type adm = User & {
  getDetails(ur:string):void;
}

function funcuser(a:adm){
  a.getDetails
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

class Device{
  name="lg";
  price=12000;
  category="digital";
}
let d1= new Device();
let d2 = new Device();

class Bottle{
  radius = 120;
  price = 100;
  color = "white";
}
let b1 = new Bottle();

//ek aisi machine jo produce kr rhi hain final consumable product ,aise hi machine ko constructor bolte hain , (aur jo bane hue object ko destroy krne mein madat kre woh destructor)
//constructor -> object creator, class mein instantiate krne mein 

class BottleMaker{
  constructor(public name: string,public price:number){}
}
let bottle1=new BottleMaker("Milton",1200);

class HumanMaker{
  age=0;
  constructor(public name:string,public ishandsome:boolean){}

}
let human = new HumanMaker("Aniket",true);

// class Music{
//   constructor(public name:string,public artist:string,public thumbnail:symbol|string,public length: number,public free: number){}
// }
class Music {
  public name;
  public artist;
  public thumbnail;
  public length;
  public free;
  constructor(name: string,artist: string,thumbnail: symbol | string,length: number,free: boolean){
    this.name = name;
    this.artist = artist;
    this.thumbnail = thumbnail;
    this.length=length;
    this.free=free;
  }
}

let song = new Music("chal chhaiyaan chhaaiyaan","vaiyaa","chaiyaan.jpg",100,true);

//This keyword
class CLN{
  name="anonymous";
  changeSomeMoreStuff(){
    console.log("Hey");
  }
  changeName(){
    console.log(this.name);
    this.changeSomeMoreStuff();
  }

}
let obj4 = new CLN();
obj4.changeName();

//access modifiers
//public
class PublicAccess{
constructor(public nm: string){
  this.nm=nm;
}
changing(){
  this.nm="Learner";
  console.log(this.nm);
}
}
let bew=new PublicAccess("LearningMe");
bew.nm="MeLearning";
bew.changing()

//private
class BottleMakerTwo{
  constructor(private name:string){
    this.name=name;
  }
  changing2(){
    this.name="Milton";
    console.log(this.name);
  }
}
let bottleobj=new BottleMakerTwo("MILTON");
bottleobj.changing2();
//bottleobj.name=""; not accessible
//Same class only for private
//Protected

class BottleMakerThree{
  protected num:number=5;
  constructor(protected name: string){}
}
class MetalBottleMaker extends BottleMakerThree{
  constructor(name: string){
    super(name);
  }
  getValue(){
    console.log(this.name,this.num);
  }
}
let b6=new MetalBottleMaker("MILTON");
b6.getValue();

// Define an interface for the InheritanceIndustry
interface InheritanceIndustry {
  name: string;
  address: string;
  executor: Executor;
  beneficiaries: Beneficiary[];
}

// Define an interface for the Executor
interface Executor {
  name: string;
  address: string;
  email: string;
  phone: string;
}

// Define an interface for the Beneficiary
interface Beneficiary {
  name: string;
  address: string;
  percentage: number;
}

// Define a class for the InheritanceIndustry
class InheritanceIndustryImpl implements InheritanceIndustry {
  public name: string;
  public address: string;
  public executor: Executor;
  public beneficiaries: Beneficiary[];

  constructor(
    name: string,
    address: string,
    executor: Executor,
    beneficiaries: Beneficiary[]
  ) {
    this.name = name;
    this.address = address;
    this.executor = executor;
    this.beneficiaries = beneficiaries;
  }

  // Method to calculate the total percentage of beneficiaries
  public calculateTotalPercentage(): number {
    return this.beneficiaries.reduce((acc, beneficiary) => acc + beneficiary.percentage, 0);
  }

  // Method to add a new beneficiary
  public addBeneficiary(beneficiary: Beneficiary): void {
    this.beneficiaries.push(beneficiary);
  }

  // Method to remove a beneficiary
  public removeBeneficiary(beneficiary: Beneficiary): void {
    const index = this.beneficiaries.indexOf(beneficiary);
    if (index !== -1) {
      this.beneficiaries.splice(index, 1);
    }
  }
}

// Define a class for the Executor
class ExecutorImpl implements Executor {
  public name: string;
  public address: string;
  public email: string;
  public phone: string;

  constructor(
    name: string,
    address: string,
    email: string,
    phone: string
  ) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
  }
}
//protected
class BottleMakers{
// private name = "Milton";
protected name="MILTON";
}
class MetalBottleMakers extends BottleMakers{
public material = "metal";
changeName(){
  this.name="Milton";
  console.log(this.name,this.material);
}
}
let b7=new MetalBottleMakers();
b7.changeName();
//Readonly properties
class User{
  constructor(public readonly nm:string){ }
  changeName(){
    // this.nm="hello"; readonly variables value cannot be rewritten
  }
}
let u1=new User("RO");
u1.changeName();

class Users{
  constructor(public name: string,public age: number,public gender?:string){
    this.name=name;
    this.age=age;
    this.gender=gender;
  }
}

let U4=new Users("Aniket Datta",20,"male");
let U5= new Users("Aniket Datta",20);
//parameter properties
class User7{
  constructor(public name: string,public age: number){ 
    this.name=name;
    this.age=age;   
  }
  getName(){
   return this.name;
  }
  setName(value: string){
    this.name = value;
  }
}
let u5=new User7("harsh",25);
u5.setName("RAM");
u5.getName();
//get and set
class Userz{
  constructor(public _name:string,public _age: number){ }
  get name() {
    return this._name;
  }
  set name(value:string)
  {
    this._name=value;
  }
  get age(){
    return this._age;
  }
  set age(value:number){
     this._age=value;
  }
}
let u6=new Userz("aniket",25);
u6.name // name and age behave like attributes and not methods
u6.age

//static members

// 01. accessing class properties without new keyword
//In TypeScript, the static keyword is used to declare a static member of a class. 
//Static members are shared by all instances of the class 
//and can be accessed without creating an instance of the class.
class Hero{
  static version=1.0;
  static getRandomNumber(){
    return Math.random();
  }
}
// 02. static: object can be accessed only once

class Calculator {
  add(arg0: number, arg1: number): any {
    throw new Error("Method not implemented.");
  }
  static PI: number = 3.14;

  static calculateCircleArea(radius: number): number {
    return Calculator.PI * radius ** 2;
  }
}

console.log(Calculator.PI); // 3.14
console.log(Calculator.calculateCircleArea(5)); // 78.5

//Abstract Classes and Methods

class Numbers{
  //static members
  static getRandomNum(){
    return Math.random()*100;
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

abstract class food {
  constructor(protected gas:number,public gasName:string){ }
}
class Vegies extends food{

}
class nonvegies extends food{

}

abstract class Controller {
  abstract index(): void;
  abstract show(id: number): void;
  abstract store(): void;
  abstract update(id: number): void;
  abstract destroy(id: number): void;
}

class UserController extends Controller {
  index(): void {
    // Implement user index logic
  }

  show(id: number): void {
    // Implement user show logic
  }

  store(): void {
    // Implement user store logic
  }

  update(id: number): void {
    // Implement user update logic
  }

  destroy(id: number): void {
    // Implement user destroy logic
  }
}

class ProductController extends Controller {
  index(): void {
    // Implement product index logic
  }

  show(id: number): void {
    // Implement product show logic
  }

  store(): void {
    // Implement product store logic
  }

  update(id: number): void {
    // Implement product update logic
  }

  destroy(id: number): void {
    // Implement product destroy logic
  }
}
abstract class Service {
  abstract getAll(): Promise<any>;
  abstract get(id: number): Promise<any>;
  abstract create(data: any): Promise<any>;
  abstract update(id: number, data: any): Promise<any>;
  abstract delete(id: number): Promise<any>;
}

class UserService extends Service {
  async getAll(): Promise<any> {
    // Implement user get all logic
  }

  async get(id: number): Promise<any> {
    // Implement user get logic
  }

  async create(data: any): Promise<any> {
    // Implement user create logic
  }

  async update(id: number, data: any): Promise<any> {
    // Implement user update logic
  }

  async delete(id: number): Promise<any> {
    // Implement user delete logic
  }
}

class ProductService extends Service {
  get(id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  create(data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  update(id: number, data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async getAll(): Promise<any> {
    // Implement product get all logic
  }

}

//Functions -> code reusability,simplifying tasks ,Do not Repeat Yourself
//Function Types 
//Optional and default parameters
//Rest Parameters
//overloads

//Function Types:
//returneable functions
function func9():string{
  return "hey";
}
//void returning functions
function functnonreturnablefunc():void{

}
//callbacks
// function callback(name:string,cb:(value:string)){}

function ghijkl(name: string, age: number,cb:()=>void){ 
  cb()
}

ghijkl("harsh",25,()=>{
  console.log("abcdefghijkl");
})
//Callback Functions : (function as an arguement of another function)
function understand(name: string , age: number, cb2:(arg: string)=>void){
  cb2("hey");
}
understand("KNOWLEDGE",25,(arg: string)=>{
  console.log("FUNCTIONS");
})
//optional and Default parameters
//default parameters
function hardwork(name: string,age: number,gender?: string){

}
//arguements
hardwork("harsh",25,"male");
hardwork("whoami",20,"female");

//Rest Parameter
function restoperatedfunction(...args:number[]){

}
restoperatedfunction(1,2,3,4,5,6,7,8,9,0);

//Rest/spread Operator
function summation(...args:number[]):number{
  let sum = 0;
for(let i:number=0;i<args.length;i++){
 sum=sum + args[i];
}
return sum;
}
summation(1,2,3,4,5,6,7,8,9,0)
console.log("Sum of first nine natural numbers with rest operator function:",summation(1,2,3,4,5,6,7,8,9,0));

function friends(...args:string[]){
  for(let i:number=0;i<args.length;i++){
    console.log(args[i]);
   }
}
friends("Aniket","Ram");

let arr:number[]=[0,1,2,3,4,5];
let arr1:number []=[...arr];
console.log(arr1);

//spread
const arr0 = [1, 2, 3];
const arr2 = [...arr0, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };
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

function logger(a:any){
   //a. -> intellisense not working , cant detect whether a is a string or number
}

logger("hey");
//logger(12);
function logger2 (a: string | null | undefined | string | number){
  //a.
}
logger2("hey");
logger2(undefined);
logger2(10);

//hum ek function ko use krte waqt bata sakte hain ki function arguement kis type se treat kre?
function func8<T>(a:T){
  console.log(a);
  
}
func8<string>("GENERICS");
func8<number>(10);

//shortening console.log()
function log<T>(a:T){
  console.log(a);
}
log<string>("hey");
log<number>(5);
log<undefined>(undefined);
log<null>(null);

//Generic inferencing
//Generic functions
function lg<T>(val: T){
console.log(val);
}
lg("Aniket"); //<string> not written here


//generic functions with string literals
function abcdef<T>(a: T, b: T):T{
  //return "hey" as T;
    return <T> "hey"
}
abcdef<string>("hey","hello");

//generic interface
interface INF<T>{
  name: string;
  age: number;
  key: T;
}
function info(obj: INF<string>){

}
info({name:"foo",age:25,key: "arv"});

//generic class
class objmaker<T>{
  constructor(key: T){}

}
let variable= new objmaker<string>("hey");
let variable0= new objmaker("hey");
console.log(variable,variable0);


//Modules
//Exporting and importing modules
//Default exports

