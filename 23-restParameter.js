//  destructuring Objects and Arrays, Rest parameter

/**
 Since ES2016, JavaScript syntax has supported creative ways of scoping variables within objects and arrays. These creative techniques are widely used among the React community. Let’s take a look at a few of them, including destructuring, object literal enhancement, and the spread operator.
 */

//-------------########---------------

/**
    * A- destructuring Objects
        Destructuring assignment allows you to locally scope fields within an object and to declare which values will be used. Consider the sandwich object. It has four keys, but we only want to use the values of two. We can scope bread and meat to be used locally:
  */
const sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"],
};

//const bread = sandwich.bread;
//const meat = sandwich.meat;

//const { bread, meat } = sandwich;

//console.log(`bread: ${bread}, meat: ${meat}`); // bread: dutch crunch, meat: tuna
//---------------############-------------
//! destructuring clone the contents
/**
 const sandwich = {
bread: "dutch crunch",
meat: "tuna",
cheese: "swiss",
toppings: ["lettuce", "tomato", "mustard"]
};
let { bread, meat } = sandwich;
    bread = "garlic";
    meat = "turkey";
console.log(bread); // garlic console.log(meat); // turkey
console.log(sandwich.bread, sandwich.meat);
 */

const sandwich2 = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"],
};
//const bread = sandwich.bread; ==> ref
//const meat = sandwich.meat; ==> ref
let { bread, meat } = sandwich2; // clone
bread = "garlic";
meat = "turkey";
console.log("{ bread, meat } clone==> ", `bread: ${bread}, meat: ${meat}`);
console.log(
  " sandwich2 origin==> ",
  `bread: ${sandwich2.bread}, meat: ${sandwich2.meat}`
);
//-------------------#########-----------

/**
 * B- Destructuring Arrays
   Values can also be destructured from arrays. Imagine that we wanted to assign the first value of an array to a variable name:
 */

const [firstAnimal] = ["Horse", "Mouse", "Cat"];

/**
 We can also pass over unnecessary values with list matching using commas. List matching occurs when commas take the place of elements that should be skipped. With the same array, we can access the last value by replacing the first two values with commas:
 */

const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"];

//------------#######---------------

// Rest parameter
// The spread operator can also be used to get the remaining items in the array:

const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;

//-----------##########--------------

const morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly",
};
const dinner = "mac and cheese";
const backpackingMeals = {
  ...morning,
  dinner,
};

// console.log(backpackingMeals);
