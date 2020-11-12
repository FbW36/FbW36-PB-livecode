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

//---------##############---------
//2. The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const numbers3 = [2, 3, 4, 5, 6, 7, 1];

const filteredNumbers3 = numbers3.filter((item) => item > 4);

console.log("filteredNumbers3 ==> ", filteredNumbers3); // [ 5, 6, 7 ]

//----------#######--------

const numbers4 = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
  [88, 4],
];

const oddNumbersRes2 = numbers4.map((item) =>
  item.filter((num) => num % 2 === 1)
);

console.log("oddNumbersRes2 => ", oddNumbersRes2); //   [ [ 1, 1 ], [ 11, 9 ], [ 7, 7, 27 ], [ 7 ], [ 3, 7 ], [] ]

//--------------##########----------------

//3. The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

// Get the sum of the numbers in numbersToReduce array
const numbersToReduce = [1, 2, 3, 4, 5, 6];

// first way to solve the task
let box = 0;
for (let item of numbersToReduce) {
  box += item;
}

console.log("box ===> ", box); // 21

// 2nd to solve the task

let box2 = 0;

numbersToReduce.map(function (item) {
  box2 += item;
});

console.log("box2 ===> ", box2); // 21

/// 3rd way to solve the task with reduce

const sum = numbersToReduce.reduce((box, item) => box + item, 0);
console.log("sum ==> ", sum); // 21

// new task ==> add Hallo Before each item in names array ==> out array
const names2 = ["Alex", "Jon", "Tommy"];

const newNames2 = names2.reduce((box, item) => {
  box.push("Hallo " + item);
  return box;
}, []);
console.log("newNames2 ==> ", newNames2); // [ 'Hallo Alex', 'Hallo Jon', 'Hallo Tommy' ]

//#### is better to use map

const newNames3 = names2.map((item) => "Hallo " + item);
console.log("newNames3 ==> ", newNames3); // [ 'Hallo Alex', 'Hallo Jon', 'Hallo Tommy' ]

//-------------##########----------------

// Get the odd numbers and put them in one array
const nestedNumbers = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
  [88, 4],
];

const oddNumbersWithReduce = nestedNumbers.reduce(function (box, item) {
  console.log("item ==> ", item);
  /**
    item ==>  [ 1, 2, 1, 24 ]
    item ==>  [ 8, 11, 9, 4 ]
    item ==>  [ 7, 0, 7, 27 ]
    item ==>  [ 7, 4, 28, 14 ]
    item ==>  [ 3, 10, 26, 7 ]
    item ==>  [ 88, 4 ]
   */
  item.map((num) => {
    console.log("num ==> ", num);
    if (num % 2 === 1) {
      box.push(num);
    }
  });
  return box;
}, []);

console.log("oddNumbersWithReduce ==> ", oddNumbersWithReduce);
/**
 [
  1,  1, 11, 9, 7,
  7, 27,  7, 3, 7
]
 */

/**
 
  INPUT
[
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],     
  [7, 4, 28, 14],   
  [3, 10, 26, 7],
  [88, 4],
];

   OUTPUT
     
   {
     odd1: 1,
     odd2: 1,
     odd3: 11,
     odd4: 9,
     odd5: 7,
     odd6: 7,
     odd7 : 27,
     odd8: 7,
     odd9: 3,
     odd10:7
   }

 */

const INPUT_ARRAY = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
  [88, 4],
];

//Start from 1 and Increment by 1 with each Iteration
let order = 1;

// To reduce INPUT_ARRAY to object

function reducerFunction(box, item) {
  //console.log("reducerFunction ==> item ==> ", item);

  item.map((numInItem) => {
    //console.log("reducerFunction ==> item ==> map ==> numInItem ==> ", numInItem);

    if (numInItem % 2 === 1) {
      //console.log("reducerFunction ==> item ==> map ==> numInItem ==> if(numInItem % 2 === 1) ==> ", numInItem)
      box["odd" + order++] = numInItem;
    }
  });
  return box;
}
const oddNumbersObject = INPUT_ARRAY.reduce(reducerFunction, {});

console.log("oddNumbersObject ==> ", oddNumbersObject);

//---------------######------------

//4. The sort() method sorts the elements of an array in place and returns the sorted array.

const arrayToSort = [3, 1, 66];

const sortedArray = arrayToSort.sort((test1, test2) => {
  return test2 - test1; // 99 - 0
});

console.log("sortedArray ==> ", sortedArray);
//---------------------###############---------------

//5. The forEach() method executes a provided function once for each array element.

//! forEach() return nothing!
// return Statement Inside forEach make no Sense

const numbers_test = [1, 2, 99, 4, 5, 6, 7, 6];

const even_box = [];
const even_numbers_map = numbers_test.map((num) => {
  if (num % 2 === 0) {
    even_box.push(num);
    return num;
  }
});

/**
 [
  undefined,
   2,
  undefined,
   4,
  undefined,
   6,
  undefined,
   6
]
 */
console.log("even_numbers_map ==> ", even_numbers_map);
console.log("even_box ==> ", even_box); // [ 2, 4, 6, 6 ]

// forEach()
const even_box_with_forEach = [];

const even_numbers_forEach = numbers_test.forEach((num) => {
  if (num % 2 === 0) {
    even_box_with_forEach.push(num);
  }
});
console.log("even_numbers_forEach ==> ", even_numbers_forEach); // undefined Because forEach return nothing
console.log("even_box_with_forEach ==> ", even_box_with_forEach); // [ 2, 4, 6, 6 ]

//--------#########------------

//------------############---------------

/*
//! task
const input = [
  [['javascript','alex'], 2, 1],
  [8, 11, {key1:'nextjs', key2:'nestjs'}, 4],
  [7, ['methods', 'task'], 27],
  [7 , 28, 14],
  [3, 10, 26, 7],
  [{key1:'anguler'}, 4],
];
output ===> ['TPIRCSAVAJ', 'XELA','NEXTJS','NESTJS','SDOHTEM','KSAT','ANGULER']

*/
