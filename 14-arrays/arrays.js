/**
 //! Javascript Overview ==> SUMMARY

 //! 🤖 The core language features of JavaScript are defined in ECMA-262 as a pseudo language named ECMAScript.
  ECMAScript contains all of the basic syntax, operators, data types, and objects necessary to complete basic computing tasks, though it provides no way to get input or to produce output. Understanding ECMAScript and its intricacies is vital to a complete understanding of JavaScript as implemented in web browsers. The following are some of the basic elements of ECMAScript:


 1) The basic data types in ECMAScript are Undefined, Null, Boolean, Number, String, and Symbol(not Included in our Curriculum).

 2) Unlike other languages, there’s no separate data type for integers versus floating-point values; the Number type represents all numbers. 
 
 */

// Arrays ==> ColleCtion RefeRenCe type 💾

/**
 Arrays are one of the most common data types. Using them, you can handle collections of items. If your programming background is in a strongly typed language such as C, you probably think of arrays as sequential chunks of memory that house items of the same type, where each chunk of memory is of fixed size and has an associated index through which you can easily access it.
But as with many things in JavaScript, arrays come with a twist: They’re just objects. Although this leads to some unfortunate side effects, primarily in terms of performance, it also has some benefits. For example, arrays can access methods, like other objects—methods that will make our lives a lot easier.
In this section, we’ll first look at ways to create arrays. Then we’ll explore how to add items to and remove items from different positions in an array. Finally, we’ll examine the built-in array methods that will make our array-handling code much more elegant.
 */

/**
 the Array type is probably the most used in ECMAScript. An ECMAScript array is very different from arrays in most other programming languages. As in other languages, ECMAScript arrays are ordered lists of data, but unlike in other languages, they can hold any type of data in each slot. This means that it’s possible to create an array that has a string in the first position, a number in the second, an object in the third, and so on. ECMAScript arrays are also dynamically sized, automatically growing to accommodate any data that is added to them.
 */

/**
 The Array object lets you store 💽 multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.

 */

// Creating arrays ==> Syntax

/**
 create an array is by using array literal notation. An array literal is specified by using square brackets and placing a comma-separated list of items between them, as in this example:

    let colors = ["red", "blue", "green"]; // Creates an array with three strings
    let names = []; // Creates an empty array by using empty square brackets

   let values = [1,2,]; // Creates an array with 2 items. Shows the effects of leaving a comma after the last value in an array literal: values is a two-item array containing the values 1 and 2.

    
   let options = [,,,,,]; // Creates an array with 5 empty items

    In this code, the first line creates an array with three string values. The second line creates an empty array by using empty square brackets. The third line shows the effects of leaving a comma after the last value in an array literal: values is a two-item array containing the values 1 and 2.
*/

//const colors = ["red",1,true,{},[]];

const colors = ["red", "blue", "green"]; // Creates an array with three strings

console.log("colors ==> ", colors); // [ 'red', 'blue', 'green' ]

const emptyArray = []; // Create an empty array
console.log("emptyArray ==> ", emptyArray); // []

const arrayEmptyStr = [""]; // Create an array with single item
console.log("arrayEmptyStr ==> ", arrayEmptyStr); // [ '' ]

const slotsArray = ["", , ,]; // Creates an array with 4 items. Shows the effects of leaving a comma after the first value in an array literal and last item in array was removed

console.log("slotsArray ==> ", slotsArray); //  [ '', <2 empty items> ] ==> ['', Undefined , Undefined]
console.log("slotsArray length==> ", slotsArray.length); // 3 ==> the items in array

const slotsArrayPt2 = ["", , , 1];
console.log("slotsArrayPt2 ==> ", slotsArrayPt2); // [ '', <2 empty items>, 1 ] == ['', Undefined , Undefined,1]

console.log("slotsArrayPt2 ==> ", slotsArrayPt2.length); // 4 ==> the items in array

const slotsArrayPt3 = ["", , , 1];

console.log("slotsArrayPt3 ==> ", typeof slotsArrayPt3); // object

let name = "Alex";
const slotsArrayPt4 = ["", name, , 1];

console.log("slotsArrayPt4 ==> ", slotsArrayPt4); // [ '', 'Alex', <1 empty item>, 1 ]

// Indexing into Arrays
// To get and set array values, you use square brackets and provide the zero-based numeric index of the value, as shown here:

// colors = ["red", "blue", "green"]; // Creates an array with three strings
// colors[0] // display the first item
// colors[2] = "black" // change the third item
// colors[3] = "brown" //

// let(var) vs const
// we can create a Variable with let and const
// var works same as let
let stringWithLet = "Tommy";
console.log("stringWithLet ==> ", stringWithLet); // Tommy
stringWithLet = "Alex";
console.log("stringWithLet ==> ", stringWithLet); // Alex

const stringWithConst = "Ghassan";
console.log("stringWithConst ==> ", stringWithConst); // Ghassan

//stringWithConst = "Alex";
//console.log("stringWithConst ==> ", stringWithConst); // TypeError: Assignment to constant variable.

let arrayWithLet = ["red", "blue", "green"];

console.log("arrayWithLet ==> ", arrayWithLet); // [ 'red', 'blue', 'green' ]

arrayWithLet = "change the data type"; // change the data type for arrayWithLet

console.log("arrayWithLet ==> ", arrayWithLet); // change the data type

// var works same as let

const arrayWithConst = ["red", "blue", "green"];
console.log("arrayWithConst ==> ", arrayWithConst); // [ 'red', 'blue', 'green' ]

// arrayWithConst = 3; // change the value and data type for arrayWithConst ==> TypeError: Assignment to constant variable.

//console.log("arrayWithConst ==> ", arrayWithConst);

const colors2 = ["red", "blue", "green", "test"]; // Creates an array with three strings
// indexing array item start from 0
// Get item in array
let secondItem = colors2[1]; // get Second item in array colors2
console.log("secondItem ==> ", secondItem); // blue

console.log("first item ==> ", colors2[0]); //  red

console.log("3rd item ==> ", colors2[2]); //  green ==> 3rd item

console.log("array length ===> ", colors2.length); // 3

// To get the last item in any array ==> length of the array - 1
// colors2.length - 1 ==> get the last item in colors2 (array)

console.log("last item in array==> ", colors2[colors2.length - 1]); //  test

/**
 The index provided within the square brackets indicates the value being accessed. If the index is less than the number of items in the array, then it will return the value stored in the corresponding item, as colors2[0] displays "red" in this example. Setting a value works in the same way, replacing the value in the designated position. If a value is set to an index that is past the end of the array, as with colors2[3] in this example, the array length is automatically expanded to be that index plus 1 (so the length becomes 4 in this example because the index being used is 3).
 */

// fruits = ["apple", "orange", "mango"];
// fruits[0] is the first element
// fruits[1] is the second element
// fruits[2] is the third element

// Get items in array
const fruits = ["orange", "mango", "apple"]; // create array with 2 items

console.log("fruits ==> ", fruits); // [ 'orange', 'mango' ]
console.log("fruits length==> ", fruits.length); // 2

console.log("Get the second item in fruits ==> ", fruits[1]); // mango
console.log("Get the last item in fruits ==> ", fruits[fruits.length - 1]); //  apple

// Set item in array

const chrs = ["A", "B", "C"]; // create an array with 3 items
console.log("chrs ==> ", chrs); // [ 'A', 'B', 'C' ]

chrs[1] = "change the second item";

console.log("chrs ==> ", chrs); // [ 'A', 'change the second item', 'C' ]

chrs[0] = 1;
console.log("chrs ==> ", chrs); //  [ 1, 'change the second item', 'C' ]

chrs[8] = "hack the array";

console.log("chrs ==> ", chrs); //  [ 1, 'change the second item', 'C', <5 empty (undefined) items>, 'hack the array' ]

console.log("chrs length==> ", chrs.length); // 9

//--------------#################------------------------

/**
 Let’s start with a simple example in which we create an array of ninjas and an array of
samurai.
 */

//🧪🧪🧪🧪🧪
// const ninjas = ["Kuma", "Hattori", "Yagyu"] // To create an array, we can use an array literal []

//const samurai = ["Oda", "Tomoe"]
//(ninjas.length === 3, "There are three ninjas") //The length property tells us the size of the array.

// (samurai.length === 2, "And only two samurai")

// 🚀 EX1 : 'Germany Spain Italy USA' ==> Picking random country.

// 🚀 EX2 : 'Alex Max Tommy' ==> Picking random name and print 'Hallo ${name}'

// 🚀  To SOLVE ==> EX5 : '-1 7 -33 -8 9' ==> pick random number all the numbers Should be Absolute (not Negative numbers)

// =====================================>>>>>>>>>>>>>>>>>>>
