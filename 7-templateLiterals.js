/**
 * Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
 *
 */

let str = "javascript";
let str2 = "PHP";

let name = "Alex";
let city = "Berlin";
let age = 29;

let person =
  "Hallo my name is " +
  name +
  "." +
  " I am " +
  age +
  " years old and I live in " +
  city;
// "Hallo my name is Alex. I am 29 years old and I live in Berlin"

console.log("person ==> ", person);

let strEs6 = `Hallo my name is ${name}. I am ${age} years old and I live in ${city}`;
let str2Es6 = `Hallo my name is ${name}. I am ${
  age * 2
} years old and I live in ${city}`;

// Hallo my name is Alex. I am 29 years old and I live in 29

console.log("strEs6 ==> ", strEs6);
console.log("str2Es6 ==> ", str2Es6);
