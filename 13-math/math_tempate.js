// The Math Object

/**
 * 
 * The Math object contains properties and methods to aid in complex mathematical calculations.
 * 
 The math object provides you properties and methods for mathematical constants and functions. Unlike other global objects, Math is not a constructor. All the properties and methods of Math are static and can be called by using Math as an object without creating it.


 */

/**
 */

//--------------################----------------------

// Math Methods
// WE GO Through 8 Math methods ==>  min(), max(), pow(), abs(), round(), floor(), ceil() and random().

// The Math object also contains many methods aimed at performing both simple and complex mathematical calculations.

// The min() and max() methods determine which number is the smallest or largest in a group of numbers. These methods accept any number of parameters, as shown in the following example:

/**
 let max = Math.max(3, 54, 32, 16); console.log(max); // Out of the numbers 3, 54, 32, and 16, Math.max() returns the number 54
 let min = Math.min(3, 54, 32, 16); console.log(min); //  Math.min() returns the number 3
 */

// 1 - Math.min(value1, value2, ... valueN )  ==> Returns the smallest of zero or more numbers.

/**
 value = Math.min(10, 20, -1, 100)
 value = Math.min(-1, -3, -40)
 value = Math.min(0, -1)
 value = Math.min(100)
 */

// 2 - Math.max(value1, value2, ... valueN ) ==> Returns the largest of zero or more numbers.

/**
 value = Math.max(10, 20, -1, 100)
 value = Math.max(-1, -3, -40)
 value = Math.max(0, -1)
 value = Math.max(100)
 */

//  These methods are useful for avoiding extra loops and if statements to deter- mine the maximum value out of a group of numbers.

// 3 - Math.pow(base, exponent ) ==> returns the base to the exponent power.

/**
 value = Math.pow(7, 2)
 value = Math.pow(8, 8)
 value = Math.pow(-1, 2)
 value = Math.pow(0, 10)
 */
// 7 ** 2

//-------------------##############---------------------

/*
 Rounding Methods

 The next group of methods has to do with rounding decimal values into integers
 */
//  Math.round() , Math.floor() and Math.ceil() ==> rounding decimal values into integers. 3 methods handle rounding in different ways

// 4 - Math.round( x ) ==> method represents a standard round function, which rounds up if the number is at least halfway to the next integer value (0.5 or higher) and rounds down if not.

/**
 Math.round(25.9)
 Math.round(25.5)
 Math.round(25.1)
 */

// 5 - Math.floor( x ) ==> method  represents the floor function, which always rounds numbers down to the nearest integer value.

/*
Math.floor(25.9)
Math.floor(25.5)
Math.floor(25.1)
*/

// 6 - Math.ceil( x ) ==> method represents the ceiling function, which always rounds numbers up to the nearest integer value.

/**
 Math.ceil(25.9)
 Math.ceil(25.5)
 Math.ceil(25.1)
 */

/**%%%%%%%%%%%%%%%%%%%%%%%% */

// 7 - Math.random() ==> method returns a random number between 0 (inclusive) and 1 (exclusive).

/**
 The Math.random() method returns a random number between the 0 and the 1, not including either 0 or 1. This is a favorite tool of web sites that are trying to display random quotes or random facts upon entry of a web site. You can use Math.random() to select numbers within a certain integer range by using the following formula:

    number = Math.floor(Math.random() * total_number_of_choices + first_possible_value)
 */

/**
  value = Math.random( )
  value = Math.random( )
  value = Math.random( )
  value = Math.random( )
  */

/**
   The Math.floor() method is used here because Math.random() always returns a decimal value, meaning that multiplying it by a number and adding another still yields a decimal value. So, if you wanted to select a number between 1 and 10, the code would look like this:
    
   Math.floor((Math.random() * 10 )+ 1) // You see 10 possible values (1 through 10), with the first possible value being 1.

   Math.floor((Math.random() * 9 )+ 2) // select a number between 2 and 10, then the code would look like this:
    


    number of choices and the first possible value
    upperValue = 10
    lowerValue = 2
    choices = upperValue - lowerValue + 1;
    Math.floor(Math.random() * choices + lowerValue) // number between 2 and 10, inclusive
      number of choices and the first possible value
   */

/**
     B -  number of choices and the first possible value
      Math.floor(Math.random() * maxNumber ) + minNumber
    */

/**
 * 🚀 Write Program to Generates Random rgb Background color
 x = Math.floor(Math.random() * 256)
 y = Math.floor(Math.random() * 256)
 z = Math.floor(Math.random() * 256)
  bgColor = `rgb(${x}, ${y}, ${z})`
  bgColor
  // run at ===> jsbin
 // test ==> https://www.w3schools.com/colors/colors_rgb.asp
 */

/**
 🚀  Write Program to Generates Random  HEX Background color
    randomColor = Math.floor(Math.random()*16777215).toString(16) // Number 16 represent the hexadecimal value. ie when you convert the number to string using the javascript toString method then using the radix 16 you will get the result in hexadecimal format.

   RUN ==> Jsbin
 
  TEST ==> https://www.daftlogic.com/projects-hex-colour-tester.htm?hex=FF0066
 */

/**%%%%%%%%%%%%%%%%%%%%%%%% */

// 🚀 EXE1 : 'ABCDEFGH' ==> Picking random chr.

// 🚀 EXE2 : '%&§!*@=' ==> Picking random sy.

// 🚀 EX3 : Write Program to Generates Random rgba Background color.

/**%%%%%%%%%%%%%%%%%%%%%%%% */

// 8 - Math.abs( x ) ==>  returns the absolute value of a x.

/**
 value = Math.abs(-1)
 value = Math.abs(null) // 0
 value = Math.abs(20)
 value = Math.abs("string") // NaN
 */

// 🚀 EXE1 : 'ABCDEFGH' ==> Picking random chr.

// 🚀 EXE2 : '%&§!*@=' ==> Picking random sy.
