// We can pass arbitrary data to functions using parameters (also called function arguments) .
// Parameters to a function behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself.

// 1.

function greeting() {
  return "Hello";
}

console.log("greeting() ==> ", greeting()); // Hello

//--------------####---------------
// The Functions Are Reusable Components
function greeting2(name) {
  return "Hello " + name;
}

console.log("greeting2() ==> ", greeting2("Alex")); // Hello Alex
console.log("greeting2() ==> ", greeting2("Sara")); // Hello Sara
console.log("greeting2() ==> ", greeting2("Luke")); // Hello Luke

// ---------##---------
// 2.

function addNumbers(num1, num2, num3) {
  return `The sum of numbers is ${num1 + num2 + num3}`;
}

console.log("addNumbers ==> ", addNumbers(4, 6, 8)); // The sum of numbers is 18

// ---------##---------
// 3.
// The default values of the parameters are undefined.

function defaultParams(p1, p2) {
  return `p1 ==> ${p1}, p2 ==> ${p2}`;
}
console.log("defaultParams() ==> ", defaultParams("javascript")); //  p1 ==> javascript, p2 ==> undefined

// ---------##---------
// 4.
