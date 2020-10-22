// Array Methods

// name of the file 2-arrays_queue_methods.js

//! Queue Methods    shift() and unshift()

/**
 Just as stacks restrict access in a LIFO data structure, queues restrict access in a first-in-first-out (FIFO) data structure. A queue adds items to the end of a list and retrieves items from the front of the list. Because the push() method adds items to the end of an array, all that is needed to emulate a queue is a method to retrieve the first item in the array. The array method for this is called shift(), which removes the first item in the array and returns it, decrementing the length of the array by one. Using shift() in combination with push() allows arrays to be used as queues:
 */

// The array method for this is called shift(), which removes the first item in the array and returns it, decrementing the length of the array by one.

//🧪🧪🧪🧪🧪🧪🧪🧪🧪🧪🧪

const colors = [];
console.log("colors ==> ", colors); //  []
console.log("colors ==> ", colors.length); // 0

colors.push("red", "green");
console.log("colors ==> ", colors); // [ 'red', 'green' ]

console.log("colors ==> ", colors.length); // 2

colors.push("black");
console.log("colors ==> ", colors); // [ 'red', 'green', 'black' ]
console.log("colors ==> ", colors.length); // 3

// highlighted
colors.shift();
console.log("colors ==> ", colors); // [ 'green', 'black' ]
console.log("colors ==> ", colors.length); // 2

/**
 This example creates an array of three colors using the push() method. The highlighted line shows the shift() method being used to retrieve the first item in the array, which is "red". With that item removed, "green" is moved into the first position and "black" is moved into the second, leaving the array with two items.
 */

/**
  ECMAScript also provides an unshift() method for arrays. As the name indicates, unshift() does the opposite of shift(): it adds any number of items to the front of an array and returns the new array length. By using unshift() in combination with pop(), it’s possible to emulate a queue in the opposite direction, where new values are added to the front of the array and values are retrieved off the back, as in this example:
  */

//🧪🧪🧪🧪🧪🧪🧪

const colors2 = [];
console.log("colors2 ==> ", colors2); // []
console.log("colors2 ==> ", colors2.length); // 0

colors2.unshift("black");

console.log("colors2 ==> ", colors2); //  [ 'black' ]
console.log("colors2 ==> ", colors2.length); // 1

colors2.pop();
console.log("colors2 ==> ", colors2); // []
console.log("colors2 ==> ", colors2.length); // 0

/**
 In this code, an array is created and then populated by using unshift(). 
 */
