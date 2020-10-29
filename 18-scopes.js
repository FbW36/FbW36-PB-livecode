//!     Javascript Scopes
// The scope is an important concept that manages the availability of variables.
//-----------------------------------------

// let, const and var

//1- Global scope
// The global scope is the outermost scope. It is accessible from any inner scope.

let globalVar = "Good morning";

//---------------------##########--------------------
// let and const

//2- Block scope
// A code block in JavaScript defines a scope for variables declared using let and const:
// for, if and {}
//! var is not block scoped

if (true) {
  let blockVarWithLet = "Hi I am let";
  const blockVarWithConst = "Hi I am const";

  var notBlockScope = "Hi I am not block scope";

  console.log("Inside if statement  ==> ", blockVarWithLet); // Inside if statement  ==>  Hi I am let
  console.log("Inside if statement  ==> ", blockVarWithConst); // Inside if statement  ==>  Hi I am const
  console.log("Inside if statement  ==> ", notBlockScope); // Inside if statement  ==>  Hi I am not block scope
}

console.log("Outside if statement  ==> ", notBlockScope); // Outside if statement  ==>  Hi I am not block scope

//console.log("Outside if statement  ==> ", blockVarWithConst); // ReferenceError: blockVarWithConst is not defined
//console.log("Outside if statement  ==> ", blockVarWithLet); // ReferenceError: blockVarWithLet is not defined

//------------

{
  let blockVarWithLet2 = "Hi I am let";
  const blockVarWithConst2 = "Hi I am const";

  var notBlockScope2 = "Hi I am not block scope";

  console.log("Inside {} statement  ==> ", blockVarWithLet2); // Inside {} statement  ==>  Hi I am let
  console.log("Inside {} statement  ==> ", blockVarWithConst2); // Inside {} statement  ==>  Hi I am const
  console.log("Inside {} statement  ==> ", notBlockScope2); // Inside {} statement  ==>  Hi I am not block scope
}
console.log("Outside {} statement  ==> ", notBlockScope2); // Outside {} statement  ==>  Hi I am not block scope

//console.log("Outside {} statement  ==> ", blockVarWithConst2); // ReferenceError: blockVarWithConst is not defined
//console.log("Outside {} statement  ==> ", blockVarWithLet2); // ReferenceError: blockVarWithLet is not defined

//-------------

for (let i = 0; i < 3; i++) {
  let blockVarWithLet3 = "Hi I am let";
  const blockVarWithConst3 = "Hi I am const";
  var notBlockScope3 = "Hi I am not block scope";
  console.log("Inside for statement  ==> ", blockVarWithLet3); // Inside for statement  ==>  Hi I am let
  console.log("Inside for statement  ==> ", blockVarWithConst3); // Inside for statement  ==>  Hi I am const
  console.log("Inside for statement  ==> ", notBlockScope3); // Inside {} statement  ==>  Hi I am not block scope

  console.log("Inside for statement (i) ==> ", i);
}
console.log("Outside for statement  ==> ", notBlockScope3); // Outside for statement  ==>  Hi I am not block scope

//console.log("Outside for statement (i) ==> ", i); // ReferenceError: i is not defined
//console.log("Outside for statement  ==> ", blockVarWithConst3); // ReferenceError: blockVarWithConst is not defined
//console.log("Outside for statement  ==> ", blockVarWithLet3); // ReferenceError: blockVarWithLet is not defined

//---------------------##########--------------------
// let, const and var

//3- Lexical/local scope
// It is Not accessible from outer scopes
// Lexical/local scope accessible in the function Itself and any SUB scopes a part of this function

function testLocalScope() {
  // Please Don’t use var anymore
  let localWithLet = "Hi I am local with let";
  var localWithVar = "Hi I am local with var";
  if (true) {
    let testBlock = "Hallo";
    console.log(
      "Inside testLocalScope Inside if Statement  ==> ",
      localWithLet
    ); // Inside testLocalScope Inside if Statement  ==>  Hi I am local with let
  }
  //console.log("Inside testLocalScope outside if Statement  ==> ", testBlock); // ReferenceError: testBlock is not defined
  console.log("Inside testLocalScope ==> ", localWithLet); // Inside testLocalScope ==>  Hi I am local with let
}
testLocalScope();

//console.log("Outside testLocalScope ==> ", localWithVar); // ReferenceError: localWithLet is not defined
//console.log("Outside testLocalScope ==> ", localWithLet); // ReferenceError: localWithLet is not defined

//---------------------##########--------------------
// let, const and var

//4- closure
//closure created with nested function

function closureScope() {
  let closureWithlet = "closure with let";

  function nestedFunction() {
    let nestedVarInsideFunction = "nested Inside function";
    console.log(closureWithlet); // closure with let
  }
  //console.log(nestedVarInsideFunction); // ReferenceError: nestedVarInsideFunction is not defined
  nestedFunction();
}
closureScope();

function foo() {
  let cond = 5;

  let str = "";
  let arr = [];

  for (let i = 0; i < cond; i++) {
    let blockScopeInsideForLoop = "block Scope Inside For Loop";
    //console.log(cond, blockScopeInsideForLoop);
    arr.push(i);
    str = str + i + " ";
    console.log(str);
  }
  console.log(str); // 0 1 2 3 4
  console.log(arr); // [ 0, 1, 2, 3, 4 ]

  // console.log(blockScopeInsideForLoop); // ReferenceError: blockScopeInsideForLoop is not defined
}
foo();

//---------------------##########--------------------
