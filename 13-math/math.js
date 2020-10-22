//!           The Math Object
/**
 * 
 * The Math object contains properties and methods to aid in complex mathematical calculations.
 * 
 The math object provides you properties and methods for mathematical constants and functions. Unlike other global objects, Math is not a constructor. All the properties and methods of Math are static and can be called by using Math as an object without creating it.
 */

//--------------################----------------------

//!          Math Methods
// WE GO Through 8 Math methods ==>  min(), max(), pow(), abs(), round(), floor(), ceil() and random().

//  round(), floor() and ceil() ==> calls  Rounding Methods Because rounding decimal values into integers.
// The Math object also contains many methods aimed at performing both simple and complex mathematical calculations.

// The min() and max() methods determine which number is the smallest or largest in a group of numbers. These methods accept any number of parameters, as shown in the following example:

/**
 let max = Math.max(3, 54, 32, 16); 
 console.log(max); // Out of the numbers 3, 54, 32, and 16, Math.max() returns the number 54
 let min = Math.min(3, 54, 32, 16); 
 console.log(min); //  Math.min() returns the number 3
 */

let max = Math.max(3, 55, 7, -8, 0);
console.log("max ==> ", max); // 55

let min = Math.min(3, 55, 7, -8, 0);
console.log("min ==> ", min); // -8

//! 1 - Math.min(value1, value2, ... valueN )  ==> Returns the smallest of zero or more numbers.

/**
 value = Math.min(10, 20, -1, 100)
 value = Math.min(-1, -3, -40)
 value = Math.min(0, -1)
 value = Math.min(100)
 */

let value1 = Math.min(10, -2, 0, 77);
console.log("value1 ==> ", value1); // -2
let value2 = Math.min(1, 3, 0, 44); // 0

//! 2 - Math.max(value1, value2, ... valueN ) ==> Returns the largest of zero or more numbers.

/**
 value = Math.max(10, 20, -1, 100)
 value = Math.max(-1, -3, -40)
 value = Math.max(0, -1)
 value = Math.max(100)˚
 */

let value3 = Math.max(0, 99, 4, 11);
console.log("value3 ==> ", value3); // 99

let value4 = Math.max(23, 4, 6, 8);
console.log("value4 ==> ", value4); // 23

//  These methods are useful for avoiding extra loops and if statements to determine the maximum and min value out of a group of numbers.

//-------------------##############---------------------

//! 3 - Math.pow(base, exponent ) ==> returns the base to the exponent power.

/**
 value = Math.pow(7, 2)
 value = Math.pow(8, 8)
 value = Math.pow(-1, 2)
 value = Math.pow(0, 10)
 */
// 7 ** 2

let numPow1 = Math.pow(5, 3);
console.log("numPow1 ==> ", numPow1); // 125

// Second way to power number without math.pow()
let power1 = 5 ** 3;
console.log("power1 ==> ", power1); // 125

let numPow2 = Math.pow(0, 10);
console.log("numPow2 ==> ", numPow2); // 0

// Math.pow(base, exponent ) ==> returns the base to the exponent power.
let numPow3 = Math.pow(-2, 3); // -2 * -2 = +4  ==> 4 * -2 = -8

console.log("numPow3 ==>", numPow3);

let numPow4 = Math.pow(-2, 4); // -2 * -2 * -2 * -2
console.log("numPow4 ==>", numPow4); // 16

//! 4 - Math.abs( x ) ==>  returns the absolute value of a x.

/**
 value = Math.abs(-1)
 value = Math.abs(null) // 0
 value = Math.abs(20)
 value = Math.abs("string") // NaN
 */

// Math.abs( x ) ==>  returns the absolute value of a x.
// absolute numbers are the numbers Bigger than 0
let absNum1 = Math.abs(-55);
console.log("absNum1 ==> ", absNum1); // 55

let absNum2 = Math.abs(-3);
console.log("absNum2 ==>", absNum2); // 3

let absNum3 = Math.abs(true);
console.log("absNum3 ==>", absNum3); // 1

let absNum4 = Math.abs(false); // 0

let absNum5 = Math.abs("abc"); // NaN

let absNum6 = Math.abs(null); // 0

let absNum7 = Math.abs(11); // 11

let absNum8 = Math.abs(0); // 0

let absNum9 = Math.abs("-33"); // change the string number "-33" to number -33 than to absolute number 33
console.log("absNum9 ==> ", absNum9); // 33

let absNum10 = Math.abs(3.6);
console.log("absNum10 ==> ", absNum10); // 3.6

let absNum11 = Math.abs(-0.6);
console.log("absNum11 ==> ", absNum11); // 0.6

let ABS = Math.abs(1 / 3);
console.log("ABS ==> ", ABS); // 0.3333333333333333

let div = 1 / 3;
console.log("1 / 3 ===> ", div); // 0.3333333333333333

//

/**%%%%%%%%%%%%%%%%%%%%%%%% */
