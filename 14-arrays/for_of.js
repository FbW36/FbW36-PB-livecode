// for of ==> The for...of statement creates a loop iterating over an array

/**
 for (variable of array) {
  statement
}

variable: 
On each iteration a value of a different property is assigned to variable. variable may be declared with const, let, or var.

array: array


 */
//--------------###########-------------
//1.

const users = [
  { name: "Alex", email: "alex@yahoo.com" },
  { name: "Max", email: "max@yahoo.com" },
  { name: "Tommmy", email: "tom@yahoo.com" },
];
// output ==> alex@yahoo.com, max@yahoo.com, tom@yahoo.com

const usersEmails = [];
const usersNames = [];

function getEmailsAnaNames(usersArray) {
  for (let item of usersArray) {
    for (let keyInObj in item) {
      if (keyInObj === "email") {
        console.log("keyInObj ==> ", keyInObj);
        console.log("item[keyInObj] ==> ", item[keyInObj]);
        usersEmails.push(item[keyInObj]);
      }
      if (keyInObj === "name") {
        usersNames.push(item[keyInObj]);
      }
    }
  }
}

getEmailsAnaNames(users);

console.log("usersEmails ==> ", usersEmails.join(", ")); // alex@yahoo.com, max@yahoo.com, tom@yahoo.com

console.log("usersNames ==> ", usersNames.join(", ")); // Alex, Max, Tommy
//---------------'############------------------
// 2.

const numbers = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
  [88, 4],
];

const evenNumbers = [];

// Create function to get the even numbers from numbers array

function getEvenNumbers(arr) {
  for (let i of arr) {
    console.log("i ==> ", i);
    console.log("i.length ==> ", i.length);

    for (let j of i) {
      console.log("j ==> ", j);
      if (j % 2 === 0) {
        console.log("(j) in if statement ==> ", j);
        evenNumbers.push(j);
      }
    }
  }
}

getEvenNumbers(numbers);

console.log("evenNumbers ==> ", evenNumbers);
/**
  [
  2, 24,  8,  4,  0,
  4, 28, 14, 10, 26
]
 */
