//! 8 - Math.random() ==> method returns a random number between 0 (inclusive) and 1 (exclusive).

/**
 The Math.random() This is a favorite tool of web sites that are trying to display random quotes or random facts upon entry of a web site. You can use Math.random() to select numbers within a certain integer range by using the following formula:

    number = Math.floor( ( Math.random() * total_number_of_choices ) + 1)
 */

/**
  value = Math.random( )
  value = Math.random( )
  value = Math.random( )
  value = Math.random( )
  */
let value1 = Math.random();
console.log("value1 ==> ", value1);

let value2 = Math.random();
console.log("value2 ==> ", value2);

let value3 = Math.random();
console.log("value3 ==> ", value3);

/**
   The Math.floor() method is used here because Math.random() always returns a decimal value, meaning that multiplying it by a number and adding another still yields a decimal value. So, if you wanted to select a number between 1 and 10, the code would look like this:
    
   Math.floor(Math.random() * choices ) + 1 ) // Number of choices with the first possible value being 1

   Math.floor((Math.random() * 10 ) + 1 ) // You see 10 possible values (1 through 10), with the first possible value being 1.
*/

//let randomNum1 = Math.random() * 3;

// 3*1 =3
// 3 * 0.9 = 2.7
// 10 * 0.9 = 9
// 5 * 0.5 = 2.5

// 7 * 0.7 ==> less then 7
// x * (number Smaller than 1) ==> number Smaller than x

//let randomNum1 = Math.random() * 3;
//✏️
let randomNum1 = Math.floor(Math.random() * 3); // 0, 1, 2 no way to get 3

console.log("randomNum1 ==> ", randomNum1);

//✏️
let randomNum2 = Math.floor(Math.random() * 3) + 1; //  1, 2 and 3 no way to get 0
// Math.floor(Math.random() * choices ) + 1 )
console.log("randomNum2 ==> ", randomNum2);

//✏️
let randomCeil1 = Math.ceil(Math.random() * 3); // 0, 1, 2 and 3

let test = Math.ceil(0 * 1000);
console.log("test ==> ", test); // 0
/**
 🚀 Write Program to Generates Random rgb Background color
 r = Math.floor(Math.random() * 256)
 g = Math.floor(Math.random() * 256)
 b = Math.floor(Math.random() * 256)
  bgColor = `rgb(${r}, ${g}, ${b})`
  bgColor
  // run at ===> jsbin
 // test ==> https://www.w3schools.com/colors/colors_rgb.asp
 */

// Write Program to Generates Random rgb Background color

// rgb ==> 0 to 255
// rgb(55,0,255)

let x = Math.ceil(Math.random() * 255);
//let x = Math.floor(Math.random * 256)
let y = Math.ceil(Math.random() * 255);
let z = Math.ceil(Math.random() * 255);
console.log("x:", x, "y:", y, "z:", z);
//rgb(x , y, z)
let BackgroundColor = `rgb(${x},${y},${z})`;
console.log(BackgroundColor);

/*
console.log("x", x);
console.log("x", x);
console.log("x", x);
console.log("x", x);
console.log("x", x);
let testWithFunction = () => Math.ceil(Math.random() * 255);

console.log("testWithFunction ==> ", testWithFunction());
console.log("testWithFunction ==> ", testWithFunction());
console.log("testWithFunction ==> ", testWithFunction());
*/

/**
  number of choices and the first possible value
    upperValue = 10
    lowerValue = 2
    choices = upperValue - lowerValue + 1;
    Math.floor(Math.random() * choices + lowerValue) // number between 2 and 10, inclusive
      number of choices and the first possible value
 */

let min = 5;
let max = 8;
// choices = upperValue - lowerValue + 1;
// Math.floor(Math.random() * (max - min + 1) + min)

let choices = max - min + 1;
let yourChoices = Math.floor(Math.random() * choices + min);

//let yourChoices = Math.floor(Math.random() * (max - min + 1) + min)
console.log("yourChoices ==> ", yourChoices);

/**%%%%%%%%%%%%%%%%%%%%%%%% */

// 🚀 EXE1 : 'ABCDEFGH' ==> Picking random chr.

// 🚀 EXE2 : '%&§ !* @= ' ==> Picking random sy.

// 🚀 EX3 : Write Program to Generates Random rgba Background color.

/**
 🚀  Write Program to Generates Random  HEX Background color
    randomColor = Math.floor(Math.random() * 16777215).toString(16) // Number 16 represent the hexadecimal value. ie when you convert the number to string using the javascript toString method then using the radix 16 you will get the result in hexadecimal format.

   RUN ==> Jsbin
 
  TEST ==> https://www.daftlogic.com/projects-hex-colour-tester.htm?hex=FF0066
 */
