//there are  hidden booleans
// ! ==> Reverse almost anything
// !true ==> false
// !false ==> true
// !!true  ==> true
let boolean1 = true;
let boolean2 = false;

let hiddenBoolean1 = null;
console.log("hiddenBoolean1 ==> null ==> ", !!hiddenBoolean1); // false
let hiddenBoolean2 = undefined;
console.log("hiddenBoolean2 ==> undefined ==> ", !!hiddenBoolean2); // false

//let hiddenBoolean3 = " ".trim();
let hiddenBoolean3 = "";
console.log("hiddenBoolean3 ==> ' ' ==> ", !!hiddenBoolean3); // false

// 0 ==> false       1 -> Infinity ==> true
let hiddenBoolean4 = 0;
console.log("hiddenBoolean4 ==> 0 ==> ", !!hiddenBoolean4); // false

let hiddenBoolean5 = 1;

console.log("hiddenBoolean5 ==> 1 ==> ", !!hiddenBoolean5); // true

let hiddenBoolean6 = -1;

console.log("hiddenBoolean6 ==> -1 ==> ", !!hiddenBoolean6); // true
