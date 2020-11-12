// Revision:

//1. task  INPUT ==>  [3, null, 'a', 4 , 'test', 0, 2] ==> OUTPUT ==> [4, 8, 6]

const INPUT_1 = [3, null, "a", 4, "test", -3, -5, 0, 2, NaN];

const input_1 = INPUT_1.filter((item) => {
  //1. with filter we check the type of item if number and bigger than 0 ==> return item * 2
  // item = 3 ==> check: typeof item(3) is number ==> true ==> check: item(3) bigger than 0 ==> true ==> return item(3)
  // item = null ==> check: typeof item(null) is number ==> false ==> NOT RETURN THE item(null)
  return typeof item === "number" && item > 0;
})
  .reverse()
  .map((num) => num * 2);
//2. reverse the Resulting array
//3. map Through the array and take each item * 2
console.log("input_1 ==> ", input_1); //  [ 4, 8, 6 ]

//-----------############-----------------

//2.
// INPUT_1 ==> ['test','react', 'alex', 'javascript','tommy']  ==> OUTPUT ==> ['react', 'javascript', 'tommy']
// INPUT_2 ==> ['test','123','react', 'alex','a', 'javascript','tommy']  ==> OUTPUT ==> ['react', 'javascript', 'tommy']
// INPUT_3 ==> ['test','react','jon', 'alex', 'javascript','tommy']  ==> OUTPUT ==> ['react', 'javascript', 'tommy']

const input_1_1 = ["test", "react", "alex", "javascript", "tommy"];
const input_2 = ["test", "123", "react", "alex", "a", "javascript", "tommy"];
const input_3 = ["test", "react", "jon", "alex", "javascript", "tommy"];

function filterInputs(arr) {
  const box = [];
  for (let elem of arr) {
    if (elem.length > 4) {
      box.push(elem);
    }
  }

  return box;
}

console.log("filterInputs input_1_1==> ", filterInputs(input_1_1)); // ['react', 'javascript', 'tommy']
console.log("filterInputs input_2==> ", filterInputs(input_2)); // ['react', 'javascript', 'tommy']
console.log("filterInputs input_3==> ", filterInputs(input_3)); // ['react', 'javascript', 'tommy']

//----------------###########------------

// get the item index with map/forEach

// const getItemAndIndex = ["Alex", "Jon", "Max"].map((item) => ({ name: item }));

const getItemAndIndex = ["Alex", "Jon", "Max"].map((item, idx) => {
  return { name: "Hallo " + item, index: idx };
});

console.log("getItemAndIndex ==> ", getItemAndIndex);

/**
  [
  { name: 'Hallo Alex', index: 0 },
  { name: 'Hallo Jon', index: 1 },
  { name: 'Hallo Max', index: 2 }
]
 */

//-----------------########---------------

const input_1_1_1 = ["test", "react", "alex", "javascript", "tommy"];
const input_2_1 = ["test", "123", "react", "alex", "a", "javascript", "tommy"];
const input_3_1 = ["test", "react", "jon", "alex", "javascript", "tommy"];

function namesObject(arr) {
  // your code
  const box = {};
  let counter = 1;
  for (let item of arr) {
    // box["name_" + counter++] = item;
    item.length > 4 && (box["name_" + counter++] = item);
  }

  return box;
}

console.log("namesObject input_1_1_1==> ", namesObject(input_1_1_1));
console.log("namesObject input_2_1==> ", namesObject(input_2_1));
console.log("namesObject input_3_1==> ", namesObject(input_3_1));

/**
 {
     name_1:'react',
     name_2: 'javascript',
     name_3: 'tommy',
     ....
 }
 */
