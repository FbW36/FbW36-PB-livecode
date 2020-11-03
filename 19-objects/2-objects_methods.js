//1- Object.keys()
// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

const user = {
  name: "Jon",
  email: "jon@yahoo.com",
  tel: 12345678,
  isAdmin: false,
};

const objectToArray = Object.keys(user);
console.log("objectToArray ==> ", objectToArray);
// [ 'name', 'email', 'tel', 'isAdmin' ]

console.log("Object.keys(user) ==> ", Object.keys(user));
// [ 'name', 'email', 'tel', 'isAdmin' ]
// ---------##---------
//2- Object.values()
// The Object.values() method returns an array of a given object's own enumerable property values

const objectToArray2 = Object.values(user);

console.log("objectToArray2 ==> ", objectToArray2);
// [ 'Jon', 'jon@yahoo.com', 12345678, false ]

// ---------##---------
//3- Object.entries() creates an array of arrays. Each inner array has two item. The first item is the property; the second item is the value.

const objectToArray3 = Object.entries(user);
console.log("objectToArray3 ==> ", objectToArray3);

/**
  [
    [ 'name', 'Jon' ],
    [ 'email', 'jon@yahoo.com' ],
    [ 'tel', 12345678 ],
    [ 'isAdmin', false ]
 ]
 */
