// Conditional Statements if-else

// Logical Thinking:
//Sunny
// 1. if sunny dress in shorts and light top
// 2. if sunny wear a face cap or hat
//Rainy
// 1. if rainy take along an umbrella
// 2. if rainy wear a rainboot
// 3. if rainy use a car where possible
// Cloudy
// 1. if cloudy  dress in your finnest as possible
// 2. if cloudy  wear any sheos of your choice
// Snowy
// 1. if snow wear a winter jacket or mantle
// 2. if snow wear a snow boot
// 3. if snow check the traffic before going out

/********************************************************/

// Sometimes, we need to perform different actions based on different conditions.
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

let weather = "Sunny";

if (weather === "Sunny") {
  console.log("Bring your sun glasses"); // Bring your sun glasses
}

if (weather === "Rainy") {
  // never executes Because weather is not Equal to Rainy
  console.log("never executes");
}

/********************************************************/

// 1.
// Input: 21 and 3.
// if 21 is divisible by 3 then print- Yes, 21 is a multiple of 3
// if 21 is not divisible by 3 then print- No, 21 is not a multiple of 3

//let num1 = 21;
let num1 = 21;
let num2 = 3;

console.log("num1 % num2 === 0   ", num1 % num2 === 0); //   true
if (num1 % num2 === 0) {
  console.log("Yes, 21 is a multiple of 3");
} else {
  console.log("No, 21 is not a multiple of 3");
}

/********************************************************/

// 2.
// Input: varA and varB
// if varA is not equal to varB, print- Booleans are not equal to strings!
// else, print- Booleans are equal to strings!

let varA = false;
let varB = "false";

if (varA !== varB) {
  // Booleans are not equal to strings!
  console.log(varA !== varB); //true
  console.log("Booleans are not equal to strings!");
} else {
  console.log(varA !== varB); // false
  console.log("Booleans are equal to strings!");
}

/********************************************************/
// 3.
// We can also pass a pre-evaluated boolean value to if, like this:

// Input: year and cond
// If the condition is true, then print - Yes, it is 2020.
// else, print- You are not up to date.

let year = 2010;
let cond = year === 2020;

if (cond) {
  console.log(cond); // true
  console.log("Yes, it is 2020.");
} else {
  console.log(cond); // false

  console.log("You are not up to date."); // You are not up to date.
}
/********************************************************/
//Todos: user ip we check if user ip in Forbidden ips list
// if true Print the user ip Forbidden
// else print handle the request

let userIp = "192.0.0.1";

const list_of_forbidden_ips = [
  "111.0.1.1",
  "192.0.0.2",
  "192.0.0.1",
  "192.1.0.1",
];

if (list_of_forbidden_ips.includes(userIp)) {
  console.log(` The user ip (${userIp}) Forbidden.`); // The user ip (192.0.0.1) Forbidden.
} else {
  console.log(" handle the request"); // handle the request
}

/********************************************************/

// 4.
// Sometimes, we need to assign a variable depending on a condition.

// Input: age
// if age is grater than 18, then allow access (accessAllowed is true)
// else deny access (accessAllowed is false)

let age = 17;

let accessAllowed;

if (age >= 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log("accessAllowed ==> ", accessAllowed); // accessAllowed ==>  false

/********************************************************/
// program to check if the connection in the website is Secure for the Following Websites https://gbruv.com   and  http://www.movs4u.com
// https ==> Secure
// http ==> NOT Secure

let website = "https://gbruv.com";
//let website = "http://www.movs4u.com";

let strToArr = website.split(":");

console.log("strToArr", strToArr); // [ 'https', '//gbruv.com' ]

let ssl = strToArr[0];
console.log("ssl ==> ", ssl); // https

if (ssl === "https") {
  //condition block
  console.log("The connection in the website is Secure");
} else {
  console.log("Not secure");
}
/********************************************* */

// block term
{
  // block of code
}

/********************************************* */

// 5.

// Input: company, language, statementTrue and statementFalse
// if the company is Netscape, print true statement
// else print false statement

let company = "Netscape";
let language = "javaScript";

let statementTrue = `${company} created ${language}`;
let statementFalse = `${company} not created ${language}`;

if (company === "Netscape") {
  console.log(statementTrue); // Netscape created javaScript
} else {
  console.log(statementFalse);
}

// Ternary Operator Es6
/**
 Ternary Operator Syntax   condition ? condition True : condition False
 */

company === "Netscape"
  ? console.log(statementTrue)
  : console.log(statementFalse);

/********************************************************/
// 7.

// Inputs:
// weather
// tan

// Possible Outputs:
// "Don't forget your sunglasses!"
// "Don't forget your sunblocker"
// "enjoy!"
// "Don't forget your umbrella!"

// if weather is sunny OR weather is snowy, print - "Don't forget your sunglasses!"
// if you don't want a tan, print "Don't forget your sunblocker", else print "enjoy!"
// else print "Don't forget your umbrella!"

let weather2 = "Sunny";

if (weather2 === "Sunny" || weather2 === "Snowy") {
  console.log(weather2, " Don't forget your sunglasses!"); //Don't forget your sunglasses!

  let noToTan = true;
  if (noToTan === true) {
    console.log(weather2, " Don't forget your sunblocker"); //Don't forget your sunblocker
  } else {
    console.log(weather2, " Enjoy!");
  }
}

//------######---------

let weather3 = "Sunny";

if (weather3 === "Sunny" || weather3 === "Snowy") {
  console.log(weather3, " Don't forget your sunglasses!"); //Don't forget your sunglasses!

  let noToTan = false;
  if (noToTan === true) {
    console.log(weather3, " Don't forget your sunblocker");
  } else {
    console.log(weather3, " Enjoy!"); // Enjoy!
  }
}

//---------#####-------

let weather4 = "Rainy";

if (weather4 === "Sunny" || weather4 === "Snowy") {
  console.log(weather4, " Don't forget your sunglasses!"); //Don't forget your sunglasses!

  let noToTan = false;
  if (noToTan === true) {
    console.log(weather4, " Don't forget your sunblocker");
  } else {
    console.log(weather4, " Enjoy!"); // Enjoy!
  }
} else {
  console.log(weather4, " Don't forget your umbrella!");
}

/*####################################################*/
// Several conditions: “else if”

// 1.

// Input:
// time2

// If time is less than 10, greeting is "Good morning!", print greeting.
// If time is grater than/equal to 10 AND less than 20, greeting is "Good day!", print greeting.
// Else greeting is "Good evening!", print greeting.

let time = 22;
let greeting;

if (time < 10) {
  greeting = "Good morning!";
} else if (time >= 10 && time < 20) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}

console.log("greeting ==> ", greeting);

console.log("time >= 10==> ", time >= 10); // time >= 10==>  true
console.log("time < 20==> ", time < 20); // time < 20==>  false
console.log("time >= 10 && time < 20 ", time >= 10 && time < 20); // time >= 10 && time < 20  false

/********************************************************/
// 2.

// Input: first name and age

// If age is less than 13, print ${firstname} is a kid.
// If age is grater than/equal to 13 AND less than 20, print ${firstname} is a teenager.
// If age is grater than/equal to 20 AND less than 30, print ${firstname} is a young man.
// Else print ${firstname} is a man.

let firstName = "John";
let agE = 30;

if (agE < 13) {
  console.log(`${firstName} is a kid.`); // John is a kid.
} else if (agE >= 13 && agE < 20) {
  console.log(`${firstName} is a teenager.`); // John is a teenager.
} else if (agE >= 20 && agE < 30) {
  console.log(`${firstName} is a young man.`); // John is a young man.
} else {
  console.log(`${firstName} is a man.`); // John is a man.
}

/********************************************************/
// 3.

// Inputs:
// weather
// tan

// Possible Outputs:
// "Don't forget your sunglasses!"
// "Don't forget your sunblocker"
// "enjoy!"
// "Don't forget your umbrella!"

// if weather is sunny, print - "Don't forget your sunglasses!"
// if weather is sunny and you don't want a tan, print "Don't forget your sunblocker", else print "enjoy!"
// if weather is snowy, print - "Don't forget your coat!"
// else print "Don't forget your umbrella!"
