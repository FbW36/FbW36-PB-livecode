// Array Methods
// name of the file 6-arrays_conversion_methods.js

//! Conversion Methods    toString() and join()

/**
1 - array.toString() ==> method returns a string representing the source code of the  specified array and its elements.
 */

//🧪🧪🧪🧪

const colors = ["red", "blue", "green"];

const arrayToString = colors.toString();

console.log("arrayToString ==> ", arrayToString); // red,blue,green

const myArray = [1, 33, 44, true, "Alex", ["A", "B"]];

const myArrayToString = myArray.toString();

console.log("myArrayToString ==> ", myArrayToString); // 1,33,44,true,Alex,A,B

//-------------------🤖🤖🤖🤖------------

/**
 2 - array.join(separator) ==> method joins all the elements of an array into a string.

 separator − Specifies a string to separate each element of the array. If omitted, the array elements are separated with a comma.
 */

const myArr = ["a", 1, true, "Alex"];

const joinMyArr = myArr.join();

console.log("joinMyArr ==> ", joinMyArr); // a,1,true,Alex

const myArr2 = ["a", 1, true, "Alex"];

const joinMyArr2 = myArr2.join("$");

console.log("joinMyArr2 ==> ", joinMyArr2); // a$1$true$Alex

const names = ["Max", "Tommy", "Alex"];

const joinNames = names.join(" ");

console.log("joinNames ==> ", joinNames); // Max Tommy Alex

//🧪🧪🧪🧪🧪🧪🧪🧪

//? input "f-o-o"  ==> output "oof"

//? input 'ES6 in Practice' ==> output "ecitcarP ni 6SE"
