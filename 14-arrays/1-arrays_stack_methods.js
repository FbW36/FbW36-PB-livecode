// Array Methods
// name of the file 1-arrays_stack_methods.js

//! Stack Methods    pop() and push()

/**
 * One of the interesting things about ECMAScript arrays is that they provide a method to make an array behave like other data structures. An array object can act just like a stack, which is one of a group of data structures that restrict the insertion and removal of items. A stack is referred to as a last-in-first-out (LIFO) structure, meaning that the most recently added item is the first one removed. The insertion (called a push) and removal (called a pop) of items in a stack occur at only one point: the top of the stack. ECMAScript arrays provide push() and pop() specifically to allow stack-
 like behavior.
 */

// -----------------------------#########--------------------
/*
 The push() method accepts any number of arguments and adds them to the end of the array, returning the array’s new length. The pop() method, on the other hand, removes the last item in the array, decrements the array’s length, and returns that item. Consider this example:
 */

//🧪🧪🧪🧪🧪🧪🧪
//let colors = []; // create an array
//let count = colors.push("red", "green"); // push two items alert
//  count; // 2

const names = [];
console.log("names ==> ", names); // []
console.log("names length ==> ", names.length); // 0

// javascript read the code from TOP to BOTTOM and LEFT to RIGHT

names.push("Alex");
console.log("names ==> ", names); // [ 'Alex' ]
console.log("names length ==> ", names.length); // 1

names.push("Tommy", "Max");

console.log("names ==> ", names); // [ 'Alex', 'Tommy', 'Max' ]
console.log("names length ==> ", names.length); // 3

names.push(true, false, [1, "A", [], true], 6666, null, undefined, {
  city: "Berlin",
});

console.log("names ==> ", names);
/**
   [
  'Alex',
  'Tommy',
  'Max',
  true,
  false,
  [ 1, 'A', [], true ],
  6666,
  null,
  undefined,
  { city: 'Berlin' }
]
 */
console.log("names length ==> ", names.length); // 10

names[5][1];
console.log("names[5][1] ==> ", names[5][1]); //names[5] ==>  [1, "A", [], true] ==> names[5][1] ==> A

names[5][3] = "test";
console.log("names ==> ", names);
/**
   [
  'Alex',
  'Tommy',
  'Max',
  true,
  false,
  [ 1, 'A', [], 'test' ],
  6666,
  null,
  undefined,
  { city: 'Berlin' }
]
 */

console.log("names.push ( 'C ', 'D ' ) ==>", names.push("C", "D")); // 12
console.log(names);
/**
 [
  'Alex',
  'Tommy',
  'Max',
  true,
  false,
  [ 1, 'A', [], 'test' ],
  6666,
  null,
  undefined,
  { city: 'Berlin' },
  'C',
  'D'
]
 */
// count = colors.push("black"); // push another item on
// count; // 3

// let item = colors.pop(); // get the last item
// item // "black"
// colors.length

/**
 In this code, an array is created for use as a stack (note that there’s no special code required to make this work; push() and pop() are default methods on arrays). First, two strings are pushed onto the end of the array using push(), and the result is stored in the variable count (which gets the value of 2).
 */

/**
  Then, another value is pushed on, and the result is once again stored in count. Because there are now three items in the array, push() returns 3. When pop() is called, it returns the last item in the array, which is the string "black". The array then has only two items left.
  */

/**
   The stack methods may be used in combination with all of the other array methods as well, as in this example:
   */
//The pop() method, on the other hand, removes the last item in the array, decrements the array’s length, and returns that item.

// 🧪🧪🧪🧪🧪🧪🧪
//let colors = ["red", "blue"];
// colors.push("brown"); // add another item
// colors[3] = "black";  // add an item
// colors.length // 4

//let item = colors.pop(); // get the last item
// item; // "black"

const colors2 = ["red", "blue"];
colors2.push("Green");
console.log("colors2 ==> ", colors2); // [ 'red', 'blue', 'Green' ]
console.log("colors2 ==> ", colors2.length); // 3

console.log("colors2.pop() ==> ", colors2.pop()); // Green

console.log("colors2 ==> ", colors2); //  [ 'red', 'blue' ]
console.log("colors2 ==> ", colors2.length); // 2

/**
 Here, an array is initialized with two values. A third value is added via push(), and a fourth is added by direct assignment into position 3. When pop() is called, it returns the string "black", which was the last value added to the array.
 */
