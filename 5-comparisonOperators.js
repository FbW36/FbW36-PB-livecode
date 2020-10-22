// 3 > 1 or 4 < 5 or 6 == 6

let num1 = 8;
let num2 = 12;
let res = num1 > num2;
console.log(res); // false

let res2 = num1 < num2;

console.log(res2); // true

let value1 = 20;
let value2 = 20;

let res3 = value1 == value2;

console.log(res3); // true

let value3 = 33;
let value4 = "33";

// == check just the value
let res4 = value3 == value4;

console.log(res4); // true
// === check the value and data type
let res5 = value3 === value4;

console.log(res5); // false

let value5 = true;
let value6 = "true";

console.log(value5 == value6); // false

let test = "anything.."; // ==> we set value to Variable
// let test2 == 'somthing' // ==> NOT valid
// let test === 'NOT valid' // ==> not valid

// == OR === are comparison

console.log(44 == 44); // true
console.log(10 === "10"); // false

let value7 = "100";
let value8 = "100";
console.log(value7 === value8); // true

// is Bigger or Equal   7 >= 7      ===> valid
// is Smaller or Equal  9 <= 8      ==> valid

// 6 => 8   ===> not valid
// 5 =<     ===> not valid

let value9 = 8;
let value10 = 8;

console.log(value9 <= value10); // true
console.log(value9 >= value10); // true

console.log("10" >= 10); // true

//console.log(4 >= "4" && typeof 4 == typeof "4");

// not Equal !

console.log(8 == 8); // true

console.log(6 == "6"); // true
console.log(6 != "6"); // false

console.log(7 === "7"); // false
console.log(7 !== "7"); // true
console.log(7 !== 7); // false

// 5 === '5' Reverse 5 !== '5'
// 5 == '5'  Reverse  5 != '5'

console.log(7 === "7"); // false

console.log(!true); // false
