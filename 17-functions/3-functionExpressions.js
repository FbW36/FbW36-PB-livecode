// There is another syntax for creating a function that is called a Function Expression.
// The function is created and assigned to the variable explicitly, like any other value. No matter how the function is defined, it’s just a value stored in the variable sayHi.
// In JavaScript, a function is a value, so we can deal with it as a value.

// Function Expressions have a semicolon ; at the end, but Function Declaration does not.
// A Function Expression is used inside the statement: let sayHi = ...;, as a value. It’s not a code block.
// The semicolon ; is recommended at the end of statements, no matter what is the value.
// So the semicolons are not related to the Function Expressions in any way, they just terminate the statements.

// A function is a value representing an “action”
// Regular values like strings or numbers represent the data.
// A function can be perceived as an action.
// We can pass it between variables and run when we want.

// 1. create function with function keyword
function greeting() {
  return "Good morning";
}

console.log("greeting() ==> ", greeting()); // Good morning

// ---------##---------
// 2. create function with let/const/var keyword

const greeting2 = function () {
  return "Good evening";
};

console.log("greeting2() ==> ", greeting2()); // Good evening

// ---------##---------
console.log("greeting3() ==> ", greeting3());
function greeting3() {
  return "Good morning greeting3";
}

//console.log("greeting4() ==> ", greeting4());

const greeting4 = function () {
  return "Good evening from greeting4";
};

// Function Declaration vs Function Expression

// Function Expression
// A Function Expression is created when the execution reaches it and is usable from then on.
// Once the execution flow passes to the right side of the assignment let sum = function… , the function is created and can be used (assigned, called, etc. ) from now on.
// Function Expressions are created when the execution reaches them.

// Function Declaration
// A Function Declaration is usable in the whole script/code block.
// When JavaScript prepares to run the script or a code block, it first looks for Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.
// After all of the Function Declarations are processed, the execution goes on.
// A function declared as a Function Declaration can be called earlier than it is defined.
// When a Function Declaration is made within a code block, it is visible everywhere inside that block. But not outside of it.

// When should you choose Function Declaration versus Function Expression?
// First consider Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.
// Function Declarations are more “eye-catching”.
