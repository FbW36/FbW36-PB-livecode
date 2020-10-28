// Global Scope Or Script Scope

// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// To create a function we can use a function declaration.
// Syntax:
// function name() {
//     body of the function
// }

// 1.

function myFunction() {
  console.log("Javascript");
}

myFunction();
myFunction();
myFunction();

// a) The functions Impact the Environment
// b) The functions with return Statement
// c) The functions Impact the Environment and return

// ---------##---------
// 2.
// The function has full access to the outer variable. It can modify it as well.

// a) The functions Impact the Environment
let userName = "Alex";

function changeUserName() {
  userName = "Tommy";
}

console.log("userName Before call the function==> ", userName);
changeUserName();
console.log("userName After call the function==> ", userName);
console.log(changeUserName()); // undefined

// ---------##---------
// Global Scope
// 3.
// A variable declared inside a function is only visible inside that function.
// The outer variable is only used if there's no local scope.
// If a same-named variable is declared inside the function, then it shows the Inner one(in local scope)

// b) The functions with return Statement
let userName2 = "Jon";

function testScope() {
  let userName2 = "Max";

  return userName2;
}

console.log(testScope()); // Max
console.log(userName2); // Jon

// Global variables are visible from any function.
let userName3 = "Gbruv";
function testGlobalVars() {
  return userName3;
}

console.log(testGlobalVars()); // Gbruv

// c) The functions Impact the Environment and return

let number = 5;

function impactAndReturn() {
  number = number * 2;
  //let Modified = number * 2;
  return "Hello Alex";
  // console.log("Hello Alex"); ==> even if we have console.log("Hello Alex") without return Statement the impactAndReturn function return Undefined
}
console.log("impactAndReturn() ==> ", impactAndReturn()); // Hello Alex

console.log("number ==> ", number); // 10
//console.log("Modified ==> ", Modified); // ReferenceError: Modified is not defined
// ---------##---------
// A word on naming functions:
// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

// For instance, functions that start with "show" usually show something.

// Function starting with…

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.

let isAdmin = false;

function switchAdmin() {
  isAdmin = true;
  return `The admin switched to ${isAdmin}`;
}

console.log("switchAdmin ==> ", switchAdmin()); // The admin switched to true

console.log("isAdmin ==> ", isAdmin); // true
