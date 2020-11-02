// Arrow Functions are very convenient for simple one-line actions, when we’re just too lazy to write many words.

// The examples below take arguments from the left of => and evaluated the right-side expression with them.

/*
Arrow functions are handy for one-liners. They come in two flavors:
Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result.
With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.
*/

//1.

// classic function
function foo(x, y) {
  return x + y;
}
console.log("foo ==> ", foo(10, 4)); // 14

const foo2 = function (x, y) {
  return x + y;
};
console.log("foo2 ==> ", foo2(10, 4)); // 14

// arrow function

// () => expression

const foo3 = (x, y) => {
  return x + y;
};
console.log("foo3 ==> ", foo3(10, 4)); // 14

const foo4 = (x, y) => x + y;

console.log("foo4 ==> ", foo4(10, 4)); // 14

//------------############-----------------

//2.
// If we have only one argument, then parentheses can be omitted

const userName = (name) => " Hallo " + name;
console.log("userName ==> ", userName("Alex"));

const userName2 = name => " Hallo " + name;
console.log("userName2 ==> ", userName2("Alex"));

// Only one argument NOT 0 Arguments OR more than one Argument 

const str = () => 'Good morning'
console.log('str ==> ', str()) // Good morning
/**
 * NOT valid Because we Removed the parentheses with 0 Arguments
 const str =  => 'Good morning'
 console.log('str ==> ', str()) // SyntaxError: Unexpected token
 */

const greeting = (greet, name) => greet + ' ' + name
console.log('greeting => ', greeting('Good Evening', 'Max')) //   Good Evening Max

//-----------######-----------------

//3.

// Math.pow(base, exponent)
const power = (base, exponent) => {
  // 
  let result = 1

  for (let i = 1; i <= exponent; i++) {
    // result = 1 (i = 1) ==> i < exponent (true) >>> result * base(2) ==> result = 2 ==> i + 1 = 2
    // result = 2 (i = 2) ==> i < exponent (true) >>> result * base(2) ==> result = 4 ==> i + 1 = 3
    // result = 4 (i = 3) ==> i < exponent (true) >>> result * base(2) ==> result = 8 ==> i + 1 = 4
    // result = 8 (i = 4) ==> i < exponent (true) >>> result * base(2) ==> result = 16 ==> i + 1 = 5
    // result = 16 (i = 5) ==> i < exponent (false) >>> for loop Stop 
    result = result * base
  }
  return result
}

console.log('power ==> ', power(2, 4)) // 16 ==>   2 * 2 * 2 * 2
//console.log('power ==> ', power(5, 2)) // 25 ==> 5 * 5
//console.log('power ==> ', power(3, 3)) // 27 ==> 3 * 3 * 3

