// Array Methods
// name of the file 5-arrays_reordering_methods.js

//! Reordering Methods    reverse()

/**
1 - array.reverse() ==> method reverses the element of an array. The first array element becomes the last and the last becomes the first.
 */

//🧪🧪🧪🧪🧪

const arrToReverse = [77, 6, 9, "a", "b", 1, true, "test"];

console.log("arrToReverse ==> ", arrToReverse); // [77, 6, 9, "a", "b", 1, true, "test"]

arrToReverse.reverse();

console.log("arrToReverse ==> ", arrToReverse);
/**
 [
  'test', true, 1,
  'b',    'a',  9,
  6,      77
]
 */

const arrToReverse2 = [
  77,
  6,
  9,
  "a",
  ["Alex", "Max", "Tommy"],
  "b",
  1,
  true,
  "test",
];

arrToReverse2[4].reverse();

console.log("arrToReverse2 ==> ", arrToReverse2); // [ 77, 6, 9, 'a', [ 'Tommy', 'Max', 'Alex' ], 'b', 1, true, 'test' ]

arrToReverse2.reverse();

console.log("arrToReverse2 ==> ", arrToReverse2); // [ 'test', true, 1, 'b', [ 'Tommy', 'Max', 'Alex' ], 'a', 9, 6, 77 ]

//--------------------#############--------------------------
