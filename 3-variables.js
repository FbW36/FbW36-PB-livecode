// data types
//a- Primitives data types
console.log(100); // ==>  Numbers
console.log(false, true); // ==> Boolean
console.log("hallo javascript", "anything...."); // ==> String
console.log(undefined); // ==> Undefined
console.log(null); // ==> null

//Variables ==> var, let and const
var name = "Alex";
console.log(name); // Alex
//console.log(lastName);

let firstName = "Tommy";
let age = 29;
let city = "Berlin";

console.log(firstName, age, city);

// typeof ==> JavaScript Keyword

console.log(typeof "Max"); // ==>  string
console.log(typeof 200); // ==> number
console.log(typeof true); // ==> boolean
console.log(typeof "1000"); // ==> string

// variables with let

let person = "Ghassan";
let city2 = "Berlin";
let age2 = 29;
console.log(person, city2);
// '1' + '1' = '11'
console.log(
  "Hallo my name is " +
    person +
    ". I live in " +
    city2 +
    ". I am" +
    age2 +
    " years old."
);

let str1 = "First string";
let str2 = "Second string";

let str3 = str1 + " " + str2;
let str4 = "Tom " + 27;
let str5 = "1" + "1";
console.log(str3); // First string Second string
console.log(str4); // Tom 27
console.log(str5); // 11

// Changing the Variables  Values
let str6 = "Could change!!";

console.log(str6);

str6 = 10000;
console.log(str6);

str6 = false;
console.log(str6);
// Mathematical Expressions ==> + - * / and %
let num1 = 6;
let num2 = 4;
let num3 = 5;

let add = num1 + num2; // ==>  10
let sub = num1 - num3; // ==> 1
let mal = num2 * 2; // ==> 8
let div = 8 / num2; // ==>  2

let module1 = 8 % 2; // 2 2 2 2  Reminder 0
let module2 = 9 % 2; // 2 2 2 2 reminder 1
let module3 = 9 % 3; // 3 3 3 reminder 0
let evenNum = 20;
console.log("is even ==> ", evenNum % 2 == 0); //is even ==>  true
let oddNum = 43;
console.log("is even ==> ", oddNum % 2 == 0); // is even ==>  false

// ( = ) give a value
// ( == ) comparison  ==> Value 1 == Value 2
//b- Structure data types ==> after few weeks ==> const
