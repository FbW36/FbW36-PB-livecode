// Array Length

//---------------------------##########----------------
// ! 🤥 array.length ==> Returns the length of the array.

// The number of items in an array is stored in the length property, which always returns 0 or more.
// colors = ["red", "blue", "green"]; // creates an array with three strings
//  names = []; // creates an empty array
// colors.length
// names.length

const colors = ["red", "blue", "green"]; // creates an array with three strings
console.log("colors length ==> ", colors.length); // 3

const names = []; // creates an empty array
console.log("names length ==> ", names.length); //  0

//🧪🧪🧪🧪🧪
// const ninjas = ["Kuma", "Hattori", "Yagyu"] // To create an array, we can use an array literal []

//const samurai = ["Oda", "Tomoe"]
//(ninjas[0] === "Kuma", "Kuma is the first ninja") //We access array items with index notation: The first item is indexed with 0, and the last with array.length – 1

//(samurai[samurai.length-1] === "Tomoe", "Tomoe is the last samurai")
//(ninjas[4] === undefined,"We get undefined if we try to access an out of bounds index") //Reading items outside the array bounds results in undefined.

// ninjas[4] = "Ishi"
// (ninjas.length === 5, "Arrays are automatically expanded") // Writing to indexes outside the array bounds extends the array.

// ninjas.length = 2;
// (ninjas.length === 2, "There are only two ninjas now")
//(ninjas[0] === "Kuma" && ninjas[1] === "Hattori","Kuma and Hattori")
//(ninjas[2] === undefined, "But we've lost Yagyu")

const ninjas = ["Kuma", "Hattori", "Yagyu"]; // To create an array, we can use an array literal []

console.log("check the second item in ninjas ==> ", ninjas[1] === "Kuma"); // false
console.log("check the first item in ninjas ==> ", ninjas[0] === "Kuma"); // true

/**
 Manually overriding the length property with a lower value deletes the excess items.
 */

/**
 On the other hand, if we try to write to a position outside of array bounds, as in
 */

// ninjas[4] = "Ishi";
/*
 the array will expand to accommodate the new situation. For example, see array.length.png : We’ve essentially created a hole in the array, and the item at index 3 is undefined. This also changes the value of the length property, which now reports a value of 5, even though one array item is undefined.
 */

//----------------🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖-----------------------------
// A unique characteristic of length is that it’s not read-only. By setting the length property, you can easily remove items from or add items to the end of the array.
// colors = ["red", "blue", "green"]; // creates an array with three strings
// colors.length = 2
// colors[2]
// Here, the array colors starts out with three values. Setting the length to 2 removes the last item (in position 2), making it no longer accessible using colors[2]

// If the length were set to a number greater than the number of items in the array, the new items would each get filled with the value of undefined
// colors = ["red", "blue", "green"]
// colors.length = 4
// colors[3]
// This code sets the length of the colors array to 4 even though it contains only three items. Position 3 does not exist in the array, so trying to access its value results in the special value undefined being returned

// The length property can also be helpful in adding items to the end of an array
// colors = ["red", "blue", "green"]
// colors[colors.length] = "black" // add a color (position 3), assigns a value to position 3
// colors[colors.length] = "brown" // add another color (position 4) assigns a value to index 3
// The last item in an array is always at position length – 1, so the next available open slot is at position length
//Each time an item is added after the last one in the array, the length property is automatically updated to reflect the change

// The new length is automatically calculated when an item is placed into a position that’s outside of the current array size, which is done by adding 1 to the position
// colors = ["red", "blue", "green"]; // creates an array with three strings
// colors[99] = "black"; // add a color (position 99)
// colors.length
// In this code, the colors array has a value inserted into position 99, resulting in a new length of 100 (99 + 1)!

/*
Many times, it’s just easier to use a function that handles the calculation of the total number of choices and the first possible value, as in this example:

upperValue = 10
lowerValue = 2
let choices = upperValue - lowerValue + 1;
let selectFrom = Math.floor(Math.random() * choices + lowerValue); // number between 2 and 10, inclusive



 The number of choices is calculated by subtracting the two values and adding one and then applying the previous formula to those numbers. So it’s possible to select a number between 2 and 10 (inclusive),  it’s easy to select a random item from an array, as shown here:


let colors = ["red", 9999, "green", "blue",777, "yellow", "black", "purple", "brown"]; 

let lowerValue = 0
let upperValue = colors.length-1 // The length of the array minus 1, which is the last position in an array.
let choices = upperValue - lowerValue + 1;
let selectFrom = Math.floor(Math.random() * choices + lowerValue);
let color = colors[selectFrom];

Task // with Math.random() ==> get random item from colors array, if the item is number set it to '' 

 
Enjoy the challenges



*/
