// The for/in statement loops through the properties of an object.
// The block of code inside the loop will be executed once for each property.

// Do not use the for/in statement to loop through arrays where index order is important.
// Use for…in to iterate over the properties of an object

//1.

const person = {
  name: "Alex",
  age: 29,
  city: "Berlin",
  email: "alex@yahoo.com",
};

for (let key in person) {
  console.log("person key==> ", key);
  console.log("person value==> ", person[key]);
}

/**
person key==>  name
person value==>  Alex
person key==>  age
person value==>  29
person key==>  city
person value==>  Berlin
person key==>  email
person value==>  alex@yahoo.com
 */

const keys = [];
const values = [];

for (let key in person) {
  keys.push(key);
  values.push(person[key]);
}

console.log("keys ==> ", keys); // [ 'name', 'age', 'city', 'email' ]
console.log("values ==> ", values); //  [ 'Alex', 29, 'Berlin', 'alex@yahoo.com' ]

//------------------##############----------------------

//3.

const user1 = {
  name: "Pilar",
  email: "pilar@gmail.com",
  tel: 123456,
};
const user2 = {
  name: "Tommy",
  email: "tommy@gmail.com",
  tel: 123456678,
};

const user3 = {
  name: "Jon",
  email: "jonney1234@gmail.com",
  tel: 123456678,
};

const emails = [];

function getEmails(obj) {
  for (let key in obj) {
    // To get just the emails we Should Check if the key Equal email
    if (key === "email") {
      // console.log("getEmails ==> key ==> ", key);
      // console.log("getEmails ==> values ==> obj[key]==> ", obj[key]);

      emails.push(obj[key]);
    }
  }
}

getEmails(user1);
getEmails(user2);
getEmails(user3);

console.log("emails ==> ", emails.join()); // pilar@gmail.com,tommy@gmail.com,jonney1234@gmail.com
//  Pilar,pilar@gmail.com,123456,Tommy,tommy@gmail.com,123456678
//--------------######--------
