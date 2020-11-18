/**
 Primitives
- If a primitive type is assigned to a variable, we can think of that variable as containing the primitive value.

- When we assign these variables to other variables using =, we copy the value to the new variable. They are copied by value.

- Changing one does not change the other. Think of the variables as having no relationship to each other.
 */

let name = "Tommy";

let person = name;

console.log("name ==> ", name); // name ==>  Tommy

console.log("person ==> ", person); // person ==>  Tommy

name = "Alex";

console.log("name ==> ", name); // name ==> Alex

console.log("person ==> ", person); // person ==> Tommy

//---------------#################------------

/**
  Reference data type Objects And Arrays

  -Variables that are assigned a non-primitive value are given a reference to that 
  value. That reference points to the object’s location in memory. The variables don’t actually contain the value.
  */
// Array
const array_1 = [1, 2, 3, 4, 5];

const array_2 = array_1;

console.log("array_1 ==> ", array_1); // array_1 ==>  [ 1, 2, 3, 4, 5 ]
console.log("array_2 ==> ", array_2); // array_2 ==>  [ 1, 2, 3, 4, 5 ]

array_1.push("This is not clone!");

console.log("array_1 ==> ", array_1); // array_1 ==>  [ 1, 2, 3, 4, 5, 'This is not clone!' ]
console.log("array_2 ==> ", array_2); // array_2 ==>  [ 1, 2, 3, 4, 5, 'This is not clone!' ]

// Objects

const object_1 = { name: "Jon", age: 30 };

const object_2 = object_1;

console.log("object_1 ==> ", object_1); // object_1 ==>  { name: 'Jon', age: 30 }
console.log("object_2 ==> ", object_2); // object_2 ==>  { name: 'Jon', age: 30 }

object_2.name = "Pilar";

console.log("object_1 ==> ", object_1); // object_1 ==>  { name: 'Pilar', age: 30 }
console.log("object_2 ==> ", object_2); // object_2 ==>  { name: 'Pilar', age: 30 }

//----------------#######--------------------------

/**
   Clone 
   - We can clone with Spread Operator  It’s work with objects and Arrays 
*/

// Array
const array_c_1 = [1, 2, 3, 4, 5];

const array_c_2 = [...array_c_1]; // [1, 2, 3, 4, 5]

console.log("array_c_1 ==> ", array_c_1); // array_c_1 ==>  [ 1, 2, 3, 4, 5 ]
console.log("array_c_2 ==> ", array_c_2); // array_c_2 ==>  [ 1, 2, 3, 4, 5 ]

array_c_1.pop();
array_c_1.pop();

console.log("array_c_1 ==> ", array_c_1); // array_c_1 ==>  [ 1, 2, 3 ]
console.log("array_c_2 ==> ", array_c_2); // array_c_2 ==>  [ 1, 2, 3, 4, 5 ]

// Objects

const object_c_1 = { name: "Jon", age: 30 };

const object_c_2 = { ...object_c_1 };

console.log("object_c_1 ==> ", object_c_1); // object_c_1 ==>  { name: 'Jon', age: 30 }
console.log("object_c_2 ==> ", object_c_2); // object_c_2 ==>  { name: 'Jon', age: 30 }

object_c_1.city = "Berlin";
object_c_1.name = "Alex";

console.log("object_c_1 ==> ", object_c_1); // object_c_1 ==>  { name: 'Alex', age: 30, city: 'Berlin' }
console.log("object_c_2 ==> ", object_c_2); // object_c_2 ==>  { name: 'Jon', age: 30 }
