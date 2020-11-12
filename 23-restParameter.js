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
//let bread = sandwich2.bread;
//let meat = sandwich2.meat;

let { bread, meat, toppings, test } = sandwich2;
test = "Alex";
console.log(
  `bread: ${bread}, meat: ${meat}, toppings: ${toppings}, test: ${test}`
);
// bread: dutch crunch, meat: tuna, toppings: lettuce,tomato,mustard, test: Alex

//-------------------#########-----------

/**
 * B- Destructuring Arrays
   Values can also be destructured from arrays. Imagine that we wanted to assign the first value of an array to a variable name:
 */

//const [firstAnimal] = ["Horse", "Mouse", "Cat"];
const animals = ["Horse", "Mouse", "Cat"];

//let animals_1 = animals[0];
//let animals_2 = animals[1];
//let animals_3 = animals[2];

let [animals_1, animals_2, animals_3] = animals;

console.log(
  `animals_1 ==> ${animals_1}, animals_2 ==> ${animals_2}, animals_3 ==> ${animals_3}`
);
// animals_1 ==> Horse, animals_2 ==> Mouse, animals_3 ==> Cat

/**
 We can also pass over unnecessary values with list matching using commas. List matching occurs when commas take the place of elements that should be skipped. With the same array, we can access the last value by replacing the first two values with commas:
 */

const [, , item3] = ["Horse", "Mouse", "Cat"];

console.log("item3 ==> ", item3);

//------------#######---------------

// Rest parameter
// The spread operator can also be used to get the remaining items in the array:

const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [item1, ...restItems] = lakes;

console.log("restItems ==> ", restItems); // [ 'Marlette', 'Fallen Leaf', 'Cascade' ]

//-----------##########--------------

const morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly",
};
const dinner = "mac and cheese";
const backpackingMeals = { ...morning, dinner };
/**
 {
  breakfast: 'oatmeal',
  lunch: 'peanut butter and jelly',
  dinner: 'mac and cheese'
}
 */

console.log(backpackingMeals);
