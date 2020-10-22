// Array Methods
// name of the file 3-arrays_manipulation_methods.js

//! Manipulation Methods  concat(), slice() and splice()

//-----------------######----------------
/**
 1 - array.concat(value1, value2, ..., valueN) ==> method returns a new array that includes values from other arrays and additional items. It accepts any number of arguments – either arrays or values.

 *****valueN − Arrays and/or values to concatenate to the resulting array.
 */

//🧪🧪🧪🧪🧪🧪

const arrNum1 = [1, 2, 3, 4];
const arrStr1 = ["A", "B", "C"];

// Merge arr1 and str1 Together by concat
const res = arrNum1.concat(arrStr1);

console.log("res ==> ", res);
/**
  [
  1,   2,   3,   4,
  'A', 'B', 'C'
 ]
 */

//🧪🧪🧪🧪🧪🧪
const res2 = ["Alex", "Tommy"].concat([88, 9, 0]);
console.log("res2 ==> ", res2); // [ 'Alex', 'Tommy', 88, 9, 0 ]

// 🧪🧪🧪🧪🧪
// array.concat(value1, value2, ..., valueN)
const arrNames = ["Max", "Alex", "Tommy", "Jon"];

const res3 = arrNames.concat(1, 2, 3, true, ["A", "B"]);

console.log("res3 ==> ", res3);
/**
  [
  'Max',   'Alex',
  'Tommy', 'Jon',
  1,       2,
  3,       true,
  'A',     'B'
]
 */

//-------------------------###########-----------

/**
 2- array.slice( begin [,end] ) ==> method extracts a section of an array and returns a new array.

**** begin − Zero-based index at which to begin extraction.

**** end − Zero-based index at which to end extraction.
 */

//🧪🧪🧪🧪🧪🧪🧪🧪

const arrStringsNumbers = ["A", -99, "B", "C", 88, 9, 2, -9, 0];

// -99,'B','C',88,9
const res4 = arrStringsNumbers.slice(1, 6);
console.log("res4 ==> ", res4); // [ -99, 'B', 'C', 88 , 9]

const res5 = arrStringsNumbers.slice(3);
console.log("res5 ==> ", res5); //[ 'C', 88, 9, 2, -9, 0 ]

const res6 = arrStringsNumbers.slice(1, 2);
console.log("res6 ==> ", res6); // [ -99 ]

//---------------------🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖------------------

/* 
3 - array.splice(index, howMany, [element1][, ..., elementN]) ==> method changes the content of an array, adding new elements while removing old elements.

 *** index − Index at which to start changing the array.

 ***** howMany − An integer indicating the number of old array elements to remove. If howMany is 0, no elements are removed.

****** element1, ..., elementN − The elements to add to the array. If you don't specify any elements, splice simply removes the elements from the array.
*/

//🧪🧪🧪🧪🧪🧪

const greeting = ["Have", "a", "nice", "day!"];

greeting.splice(2, 1);

console.log("greeting ==> ", greeting); // [ 'Have', 'a', 'day!' ]

const arrNum2 = [1, 2, 6, 88, 99, 0];

arrNum2.splice(2);
console.log("arrNum2 ==> ", arrNum2); // [ 1, 2 ]

arrNum2.push("a", "b", "c");

console.log("arrNum2 ==> ", arrNum2); // [ 1, 2, 'a', 'b', 'c' ]

// from index 2 remove 2 elements and add 3 new elements
arrNum2.splice(2, 2, true, "Alex", "foo");

console.log("arrNum2 ==> ", arrNum2); // [ 1, 2, true, 'Alex', 'foo', 'c' ]

arrNum2.splice(3, 0, "test", "Christin");

console.log("arrNum2 ==> ", arrNum2); // [ 1, 2, true, 'test', 'Christin', 'Alex', 'foo', 'c' ]

//----------------------###############-----------------------

//? What will be the content of the samurai array, after running the following code?
const samurai = [];
samurai.push("Oda");
samurai.unshift("Tomoe");
samurai.splice(1, 0, "Hattori", "Takeda");
samurai.pop();
