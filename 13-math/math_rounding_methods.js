/*
*** Rounding Methods

 The next group of methods has to do with rounding decimal values into integers
 */
//  Math.round() , Math.floor() and Math.ceil() ==> rounding decimal values into integers. 3 methods handle rounding in different ways

// numbers with decimal 2.4, 0.6, 11.777 ....
// integers the numbers without decimal  ==> 1 , 2 , 4 , 99 , 0 , -2 , 7 , -44

//! 5 - Math.round( x ) ==> method represents a standard round function, which rounds up if the number is at least halfway to the next integer value (0.5 or higher) and rounds down if not.

/**
 Math.round(25.9)
 Math.round(25.5)
 Math.round(25.1)
 */

let round1 = Math.round(3.5);
console.log("round1 ==> ", round1); // 4

let round2 = Math.round(3.49);
console.log("round2 ==> ", round2); // 3

let round3 = Math.round(2.2);
console.log("round3 ==> ", round3); // 2

let round4 = Math.round(6.7); //
console.log("round4 ==> ", round4); // 7

let round5 = Math.round(-5.6);
// 3 > 2
// -3 < -2
console.log("round5 ==> ", round5); // -6

//! 6 - Math.floor( x ) ==> method  represents the floor function, which always rounds numbers down to the nearest integer value.

/*
Math.floor(25.9)
Math.floor(25.5)
Math.floor(25.1)
*/

let floor1 = Math.floor(11.5);
console.log("floor1 ==> ", floor1); // 11

let floor2 = Math.floor(4.9);
console.log("floor2 ==> ", floor2); // 4

//! 7 - Math.ceil( x ) ==> method represents the ceiling function, which always rounds numbers up to the nearest integer value.

/**
 Math.ceil(25.9)
 Math.ceil(25.5)
 Math.ceil(25.1)
 */

let ceil1 = Math.ceil(99.1); // 100
let ceil2 = Math.ceil(7.5); // 8
let ceil3 = Math.ceil(4.000000000001); // 5
