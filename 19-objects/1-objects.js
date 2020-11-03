// A JavaScript object literal is a comma-separated list of key-value pairs wrapped in curly braces.
// Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.

//🧪

// Without Object

let UserName = "John";
let UserAge = 30;

// With object
const user = {
  // an object
  name: "John", // by key (name) store value 'John'
  age: 30, // by key (age) store value 30
  greeting: () => "Hallo John",
  address: {
    street: "Berliner str. 18",
    postCode: 12345,
    nestedTest: {
      test: "nested prop",
    },
  },
};

//1- dot notation
console.log("user ==> ", user);
console.log("user.name ==> ", user.name);
console.log("user.age ==> ", user.age);
console.log("user.greeting ==> ", user.greeting());
console.log("user.address ==> ", user.address.postCode);
console.log("user.nestedTest ==> ", user.address.nestedTest.test);

// The last property in the list may end with a comma. That is called a "TRAILING" or “HANGING” comma. Makes it easier to add/remove/move around properties.
user.isAdmin = true;
user.name = "Alex";
console.log("user updated ==> ", user);

//2- bracket notation

let userName = "name";

console.log("user['name'] ==> ", user["name"]);
console.log("user[userName] ==> ", user[userName]);
console.log("user['greeting'] ==> ", user["greeting"]());

console.log("user['address']['street'] ==> ", user["address"]["street"]);
console.log(
  "user['address']['nestedTest']['test'] ==> ",
  user["address"]["nestedTest"]["test"]
);

//-----------------------######-----------------------------
//user2

const user2 = {
  name: "Jon",
  age: 29,
  "likes birds": true,
};

//console.log('user2 ==> ', user2.likes birds) // not valid ==> SyntaxError: missing ) after argument list
console.log("user2 ==> ", user2["likes birds"]); // valid ==> true

// For multi word properties, the dot access doesn’t work: user.likes birds = true

//-----------------------######-----------------------------

// user3

const user3 = {
  name: "Tommy",
};

// get
console.log("user3 ==> ", user3); // { name: 'Tommy' }

console.log("user3.name ==> ", user3.name); // Tommy
console.log("user3.age ==> ", user3.age); // undefined

// set
user3.name = "Pilar";
console.log("user3.name ==> ", user3.name); // Pilar
user3.age = 24;
console.log("user3.age ==> ", user3.age); // 24

console.log("user3 ==> ", user3); // { name: 'Pilar', age: 24 }
// ----------------//---------------- //
// We can use square brackets in an object literal. That’s called COMPUTED PROPERTIES works with objects keys NOT values

let fruit = "kiwi";

const fruitBucket = {
  [fruit]: 5,
  fruit: fruit,
  fruit2: [fruit, "apple"],
};

console.log("fruitBucket ==> ", fruitBucket); //    { kiwi: 5, fruit: 'kiwi', fruit2: [ 'kiwi', 'apple' ] }

// ---------##---------
// Comparing Objects:

const personA = {
  // nested object
  name: {
    first_name: "John",
    last_name: "Doe",
  },
  age: 32,
  address: {
    strNum: 55,
    strName: "Abc",
    pinCode: 12334,
    country: "Germany",
  },
};

const personB = {
  // nested object
  name: {
    first_name: "John",
    last_name: "Doe",
  },
  age: 32,
  address: {
    strNum: 55,
    strName: "Abc",
    pinCode: 12334,
    country: "Germany",
  },
};

console.log("personA == personB ?? ", personA == personB); //  false

let user_name_a = "Alex";
let user_name_b = "Alex";
console.log("user_name_a == user_name_b ?? ", user_name_a == user_name_b); //  true

// ---------##---------
// In real code we often use existing variables as values for property names.
// Property value shorthand
// properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.
// Instead of name:name and age:age  we can just write name and age, like this:

let name = "pilar";
let age = 27;

const person = {
  name,
  age,
};
console.log("person ==> ", person); // { name: 'pilar', age: 27 }

function createUser(userName, userEmail) {
  return {
    userName,
    userEmail,
  };
}

console.log("createUser ==> ", createUser("Jon", "jon@gmail.com"));
//{ userName: 'Jon', userEmail: 'jon@gmail.com' }
console.log("createUser ==> ", createUser("Alex", "alex@gmail.com"));
// { userName: 'Alex', userEmail: 'alex@gmail.com' }
console.log("createUser ==> ", createUser("Tommy", "tommy@gmail.com"));
// { userName: 'Tommy', userEmail: 'tommy@gmail.com' }

//-----------------#######----------------------
// this ==> Keyword ref to the Object or class scope
// this keyword not work with arrow function in objects
// this keyword just work with function (classic) in objects
const product = {
  name: "T-shirt",
  brand: "nike",
  size: "m",
  getProduct: function () {
    return `${this.name}, brand is ${this.brand}, size is ${this.size}`;
  },
  // getProduct: () =>
  // `${this.name}, brand is ${this.brand}, size is ${this.size}`,
  // getProduct: () => "T-shirt, brand is nike, size is m",
};
console.log("product ==> ", product.getProduct()); // T-shirt, brand is nike, size is m
