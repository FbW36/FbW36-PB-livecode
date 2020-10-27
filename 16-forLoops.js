// For loop statement

// Loops are used to repeat our actions.

// In computer sicience, a loop is a sequence of instructions that is continually repeated until a certain condition is met.

// ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8"]

//  for loop

//  syntax: for(begin; condition; step) { ...body}

for (let i = 0; i <= 3; i++) {
  // i = 0 check 0 <= 3 ==> true ==> RUN THE BODY {console.log(i);} ==> 0 + 1 = 1 (i + 1)
  // i = 1 check 1 <= 3 ==> true ==> RUN THE BODY {console.log(i);} ==> 1 + 1 = 2 (i + 1)
  // i = 2 check 2 <= 3 ==> true ==> RUN THE BODY {console.log(i);} ==> 2 + 1 = 3 (i + 1)
  // i = 3 check 3 <= 3 ==> true ==> RUN THE BODY {console.log(i);} ==> 3 + 1 = 4 (i + 1)
  // i = 4 check 4 <= 3 ==> false ==> STOP THE LOOP (THE BODY NOT RUN {console.log(i);} )
  console.log(i);
}
//console("i  ", i); //  i is not defined
console.log("3 <= 3  ", 3 <= 3); // true
console.log("3 < 3  ", 3 < 3); // false

//1-  begin(i = 0) : Executes once upon entering the loop.

//2- condition(i <= 3): Checked before every loop iteration. If false, the loop stops.

//3-  body({console.log(i)}): Runs again and again while the condition is truthy.

//4-  step(i++): Executes after the body on each iteration.

/*********************************************/
// Tasks:
/*********************************************/

// 1. Print the value of i if i starts from 0 and i is less than 3.

for (let i = 0; i < 3; i++) {
  // i = 0 ==> check 0 < 3 ==> true ==> RUN THE BODY {console.log(i); print 0 } ==> 0 + 1 = 1 ( i++ (i + 1))
  // i = 1 ==> check 1 < 3 ==> true ==> RUN THE BODY {console.log(i); print 1 } ==> 1 + 1 = 2 ( i++ (i + 1))
  // i = 2 ==> check 2 < 3 ==> true ==> RUN THE BODY {console.log(i); print 2 } ==> 2 + 1 = 3 ( i++ (i + 1))
  // i = 3 ==> check 3 < 3 ==> false ==> FOR LOOP STOP NOT RUN THE BODY AND NOT PRINT ANYTHING
  console.log(i);
}

/*********************************************/

//2 .

const names = ["Alex", "Tommy", "Max", "Ghassan"];

for (let i = 0; i < names.length; i++) {
  let greeting = "Hallo " + names[i];
  console.log(greeting);
}
/**
 Hallo Alex
 Hallo Tommy
 Hallo Max
 Hallo Ghassan
 */

/*********************************************/

// 3 .
// print Hallo + name for the first and second items
// print Good evening + name for the rest items
const names2 = ["Alex", "Tommy", "Max", "Ghassan"];

for (let i = 0; i < names2.length; i++) {
  let greeting;
  if (i < 2) {
    greeting = "Hallo " + names2[i];
  } else {
    greeting = "Good evening " + names2[i];
  }

  //console.log("names2 ==> ", "i =  ", i, " ", greeting);
  console.log(`names2 ==> i = ${i} ${greeting}`);
}
/**
 names2 ==>  i =   0   Hallo Alex
 names2 ==>  i =   1   Hallo Tommy
 names2 ==>  i =   2   Good evening Max
 names2 ==>  i =   3   Good evening Ghassan
 */

/*********************************************/
// 4.

const numbers = [2, 4, 5, 6, 77, 9, 11, 33];

// print the odd
// print the even numbers

// steps:
// use for lop
// i = 0 Because the first index in the numbers array is 0
// i < numbers.length
// i++
// in for body ==>
// check if the item % 2 == 0 it means the item is even
// else the item in odd

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(`${numbers[i]} is even`);
  } else {
    console.log(`${numbers[i]} is odd`);
  }
}
/**
 2 is even
4 is even
5 is odd
6 is even
77 is odd
9 is odd
11 is odd
33 is odd
 */

/*********************************************/

// 5.

// input ==> ['Laura','Muhasin','Sara', 'Tony']
// output ==> ['Hallo Laura','Hallo Muhasin','Hallo Sara', 'Hallo Tony']

const names3 = ["Laura", "Muhasin", "Sara", "Tony"];
const box = [];
for (let i = 0; i < names3.length; i++) {
  box.push("Hallo " + names3[i]);
  console.log("Box inside for loop ==> ", box);
}

console.log("Box outside for loop ==> ", box);

/**
 Box inside for loop ==>  [ 'Hallo Laura' ]
 Box inside for loop ==>  [ 'Hallo Laura', 'Hallo Muhasin' ]
 Box inside for loop ==>  [ 'Hallo Laura', 'Hallo Muhasin', 'Hallo Sara' ]
 Box inside for loop ==>  [ 'Hallo Laura', 'Hallo Muhasin', 'Hallo Sara', 'Hallo Tony' ]
 Box outside for loop ==>  [ 'Hallo Laura', 'Hallo Muhasin', 'Hallo Sara', 'Hallo Tony' ]
 */

/*********************************************/

//6.

// output ==>
// H
// He
// Hel
// Hell
// Hello
// Hello
// Hello W
// Hello Wo
// Hello Wor
// Hello Worl
// Hello World
// Hello World.

let myString = "Hello World.";

let box2 = "";
for (let i = 0; i < myString.length; i++) {
  let chr = myString[i];
  box2 = box2 + chr;

  console.log(box2);
}

/*********************************************/
// input ==> [2, 4, 5, 6, 77, 9, 11, 33] ==> output ==> [2,4,6] [5,77,9,11,33]

const numbers2 = [2, 4, 5, 6, 77, 9, 11, 33];

const evenBox = [];
const oddBox = [];

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 == 0) {
    evenBox.push(numbers2[i]);
  } else {
    oddBox.push(numbers2[i]);
  }
}

console.log(evenBox, " ", oddBox); // [ 2, 4, 6 ]   [ 5, 77, 9, 11, 33 ]
