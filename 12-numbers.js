// the numbers is one the data types in JS
// we have Methods to Dealing numbers

let num = 4;
let num2 = 5.88;
let num3 = 1e9;
let num4 = Infinity;

console.log(num3); // 1000000000

let x = 0.1;
let y = 0.2;

console.log(x + y); // 0.30000000000000004  <== number

// toFixed  ==> method formats a number
let sum = x + y; // 0.30000000000000004  <== number
let formateNumber = sum.toFixed(2); // toFixed() ==>  Fixed the number BUT change the data type to string

console.log(formateNumber); // 0.30

console.log(typeof formateNumber); // string
console.log(formateNumber + 3); // 0.303

let x1 = 6.7;
let y1 = 3.2;

let sum2 = x1 + y1;
console.log(sum2); // 9.9

let x2 = 0.6;
let y2 = 0.4;

let sum3 = x2 + y2;
console.log(sum3); // 1

let x3 = 5; // 5
let y3 = 21; // 21

let test = x3.toFixed(2); // 5.00

console.log(test); // 5.00

let fixedY3 = y3.toFixed(3); // 21.000

let numberX = 0.1;
let numberY = 0.2;

let sumXY = numberX + numberY;
console.log(sumXY); // 0.30000000000000004

let fixedXY = sumXY.toFixed(4); // 0.3000

console.log(typeof sumXY); //number
console.log(typeof fixedXY); // string ==> 0.3000

console.log(typeof fixedXY * 1); // NaN

console.log(typeof (fixedXY * 1)); // number ==> 0.3000
//************ */
let stringNumber = "2875";

console.log(typeof stringNumber); // string

let fixToNumber = stringNumber * 1;

console.log(typeof fixToNumber); // number
//*************** */
// isNaN()  ===> Method check if the input is not any number return boolean (true or false)

let str = "hallo";
let numberXX = 99;
let strNum = "30";
let bool = true;

console.log(isNaN(str)); // true ==> str is not any number
console.log(isNaN(numberXX)); // false ==> numberXX is number
console.log(isNaN(strNum)); // false ==> strNum is number
console.log(isNaN(bool)); // false ==> bool is number
console.log(true * true); // 1
console.log(false * false); // 0

let cssProp = "100px";

console.log(isNaN(cssProp)); // true ==> cssProp is not any number

console.log(1 === 1);
//true     === check the value and data type ==> the value is 1 and the data type is number for both
console.log(3 === "3"); // false
console.log(3 == "3"); // true

console.log("hallo" * 1); // NaN   not a number
console.log("A" / "B"); // NaN

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// NaN   is not a number
//_________________________________

// isFinite(Argument)  try converts the argument to number and return true or false

console.log(isFinite(77)); // true
console.log(isFinite("21")); // true
console.log(isFinite("test")); // false

console.log("22" * 1); // 22

// ____________________
// parseInt(Argument)  ==> converts the argument to int number
let numberYY = 10;
let numberZZ = 7.18;
let numberBB = -70;
let strYY = "100px";

console.log(parseInt(numberYY)); // 10  ===>  10
console.log(parseInt(numberZZ)); // 7.18 ===>  7
console.log(parseInt(numberBB)); // -70 ===>  -70
console.log(parseInt(strYY)); // "100px" ===> 100

let codeX = "426bbhjx4646n492";

console.log(parseInt(codeX)); // "426bbhjx4646n492"  ===> 426
console.log(parseInt("a1234")); // NaN
console.log(parseInt("12.5em")); // 12

console.log(typeof NaN);
