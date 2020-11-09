// Higher-order functions are functions that take other functions as arguments or return functions as their results.

function higherOrder(alex) {
  return alex();
}

console.log(
  "higherOrder ==> ",
  higherOrder(() => "Good Morning")
); // Good Morning

//------------###########---------------

//! Arrays higher order methods

//1. The map() method creates a new array with the results of calling a provided function on every element in the calling array.

const numbers = [2, 4, 5, 6, 7, 8]; // take each item in numbers * 2

//a. classic for loop

const res1 = [];

for (let i = 0; i < numbers.length; i++) {
  res1.push(numbers[i] * 2);
}
console.log("res1 ==> ", res1); //  [ 4, 8, 10, 12, 14, 16 ]

// b. for of loop

const res2 = [];

for (let item of numbers) {
  res2.push(item * 2);
}

console.log("res2 ==> ", res2); // [ 4, 8, 10, 12, 14, 16 ]

//c. map()

const res3 = numbers.map((item) => item * 2);

console.log("res3 ==> ", res3); //  [ 4, 8, 10, 12, 14, 16 ]

//-----------#######---------------

const names = ["Alex", "Jon", "Pilar"]; // output Before Each item in names array we add Good morning

const namesCallback = (item) => "Good morning " + item;

const newNames = names.map(namesCallback);

console.log("newNames ==> ", newNames);

//------------#######------------

const numbers2 = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
  [88, 4],
];

const oddNumbersRes = [];
const oddNumbers = numbers2.map((item) => {
  return item.map((j) => {
    if (j % 2 === 1) {
      oddNumbersRes.push(j);
      return j;
    }
  });
});

console.log("oddNumbers ==> ", oddNumbers);
console.log("oddNumbersRes ==> ", oddNumbersRes);
/**
 [
  1,  1, 11, 9, 7,
  7, 27,  7, 3, 7
]
 */
