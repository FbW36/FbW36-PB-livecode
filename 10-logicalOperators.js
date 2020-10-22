// or ==> ||   good dude 😇  if || find first true case it will take it
// and ==> &&  bad dude 😈   if && find first false case will take Otherwise will Continue to the end

let testOr = 3 || 5;

console.log("testOr ==> ", testOr);

let testAnd = 8 && 11;

console.log("testAnd ==> ", testAnd);

let testOr2 = false || true || true;

console.log("testOr2 ==> ", testOr2); // true

let testOr3 = false || false || true;

console.log("testOr3 ==> ", testOr3); // true

let testOr4 = false || false || false;

console.log("testOr4 ==> ", testOr4); // false

let testOr5 = false || "hallo" || false;

console.log("testOr5 ==> ", testOr5); // 'hallo'

let testOr6 = false || "" || "test";
console.log("testOr5 ==> ", testOr6); // 'test'

let testOr7 = false || " " || "test";
console.log("testOr7 ==> ", testOr7); // ' '

// Bug 😭
let value1 = "      ";
let value2 = false;
let value3 = "abc";

let results = value1 || value2 || value3;

console.log("results ==> ", results); // "   "
/** ____________________ */
// fix the bug 🚀

value1 = value1.trim();

let results2 = value1 || value2 || value3;

console.log("results2 ==> ", results2); // "abc"

/** _________________ */

//    ||   😇  => pick the first Truth case Otherwise will Continue to the end

console.log(!!"a"); // true
console.log(false); // false
console.log(!!""); // false

console.log("a" || "b" || "c"); // a
console.log(false || "b" || "c"); // b
console.log(false || "" || null || undefined || 0 || "Welcome to javascript"); // "Welcome to javascript"
//console.log(false || "" || null || undefined || 1 || "Welcome to javascript"); // 1

/** _____________________ */

//    &&  😈  ==> pick the first False case Otherwise Continue to end

console.log("a" && "b" && "c"); // c
console.log("a" && "b" && "c" && "d"); // d
console.log("a" && "b" && "c" && "d" && "e"); // e

console.log(false && "b" && "c"); // false
console.log(false && false && "c"); // false  the first :)
console.log("false" && " " && !null && undefined && "Welcome to javascript"); // undefined
console.log("false" && " " && null && undefined && "Welcome to javascript"); // null
console.log("false" && " " && !null && !!undefined && "Welcome to javascript"); // !!undefined ==> false
console.log("false" && " " && !null && !undefined && "Welcome to javascript"); // Welcome to javascript

/** ________________ */

console.log(("a" && "b") || false || null); // b

console.log(("a" && "") || false || null); //null
console.log(("a" && "") || false || null || "hallo"); // hallo

console.log(("a" && "") || false || (null && "hallo")); // null
