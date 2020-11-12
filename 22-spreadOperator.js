// The Spread Operator
/**
 The spread operator is three dots (...) that perform several different tasks. First, the spread operator allows us to combine the contents of arrays. For example, if we had two arrays, we could make a third array that combines the two arrays into one
 */

//! 🚀🚀🚀 The spread operator clones the arrays and object

const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
// Spread Operator copy JUST the Elementals inside the array
// ...peaks ==> "Tallac", "Ralston", "Rose"
// ...canyons ==> "Ward", "Blackwood"
//console.log("...peaks ==> ",  ...peaks );

const mergeArrays = [...peaks, ...canyons];

console.log("mergeArrays ==> ", mergeArrays); // [ 'Tallac', 'Ralston', 'Rose', 'Ward', 'Blackwood' ]

const addMoreElem = [...mergeArrays, "Alex", ...peaks];
console.log("addMoreElem ==> ", addMoreElem);

//-------------##########--------------

// The spread operator can also be used for objects

const user = {
  name: "Alex",
  email: "alex@gmail.com",
};

const card = {
  item_1: "t-shirt",
  item_2: "laptop",
};

const margeObjects = {
  ...user,
  ...card,
  name: "Tommy",
  age: 28,
  oldName: user.name,
};
console.log("margeObjects ==> ", margeObjects);

/**
 {
  name: 'Alex',
  email: 'alex@gmail.com',
  item_1: 't-shirt',
  item_2: 'laptop'
}
 */

/**
  {
  name: 'Tommy',
  email: 'alex@gmail.com',
  item_1: 't-shirt',
  item_2: 'laptop'
}
  */

/**
    {
  name: 'Tommy',
  email: 'alex@gmail.com',
  item_1: 't-shirt',
  item_2: 'laptop',
  age: 28
}
   */

//---------#######---------------

const user2 = {
  name: "Pilar",
  email: "pilar@yahoo.com",
};

const user_2_Info = {
  city: "Berlin",
  age: 27,
  email: "pilar@gmail.com",
};

const USER = {
  ...user2,
  ...user_2_Info,
  email: [user2.email, user_2_Info.email],
};

USER.email.push("pilar@test.de");

console.log("USER ==> ", USER);
/**
  {
  name: 'Pilar',
  email: [ 'pilar@yahoo.com', 'pilar@gmail.com', 'pilar@test.de' ],
  city: 'Berlin',
  age: 27
}
 */
