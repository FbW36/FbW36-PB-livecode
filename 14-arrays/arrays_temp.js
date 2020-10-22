// ColleCtion RefeRenCe types 💾

/**
 the Array type is probably the most used in ECMAScript. An ECMAScript array is very different from arrays in most other programming languages. As in other languages, ECMAScript arrays are ordered lists of data, but unlike in other languages, they can hold any type of data in each slot. This means that it’s possible to create an array that has a string in the first position, a number in the second, an object in the third, and so on. ECMAScript arrays are also dynamically sized, automatically growing to accommodate any data that is added to them.
 */

/**
 The Array object lets you store 💽 multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.

 */

// Syntax

/**
 create an array is by using array literal notation. An array literal is specified by using square brackets and placing a comma-separated list of items between them, as in this example:

     let colors = ["red", "blue", "green"]; // Creates an array with three strings
    let names = []; // Creates an empty array by using empty square brackets

   let values = [1,2,]; // Creates an array with 2 items. Shows the effects of leaving a comma after the last value in an array literal: values is a two-item array containing the values 1 and 2.

    
   let options = [,,,,,]; // Creates an array with 5 empty items

    In this code, the first line creates an array with three string values. The second line creates an empty array by using empty square brackets. The third line shows the effects of leaving a comma after the last value in an array literal: values is a two-item array containing the values 1 and 2.
*/

// Indexing into Arrays
// To get and set array values, you use square brackets and provide the zero-based numeric index of the value, as shown here:

// colors = ["red", "blue", "green"]; // Creates an array with three strings
// colors[0] // display the first item
// colors[2] = "black" // change the third item
// colors[3] = "brown" //

/**
 The index provided within the square brackets indicates the value being accessed. If the index is less than the number of items in the array, then it will return the value stored in the corresponding item, as colors[0] displays "red" in this example. Setting a value works in the same way, replacing the value in the designated position. If a value is set to an index that is past the end of the array, as with colors[3] in this example, the array length is automatically expanded to be that index plus 1 (so the length becomes 4 in this example because the index being used is 3).
 */

// fruits = ["apple", "orange", "mango"];
// fruits[0] is the first element
// fruits[1] is the second element
// fruits[2] is the third element

// 🚀 EX1 : 'Germany Spain Italy USA' ==> Picking random country.

// 🚀 EX2 : 'Alex Luke Tommy' ==> Picking random name and print 'Hallo ${name}'

// 🚀  To SOLVE ==> EX5 : '-1 7 -33 -8 9' ==> pick random number all the numbers Should be Absolute (not Negative numbers)

// =====================================>>>>>>>>>>>>>>>>>>>
// Array Properties

//---------------------------##########----------------
//! 🤥 array.length ==> Returns the length of the array.

// The number of items in an array is stored in the length property, which always returns 0 or more.
// colors = ["red", "blue", "green"]; // creates an array with three strings
//  names = []; // creates an empty array
// colors.length
// names.length

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


let colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"]; 

let lowerValue = 0
let upperValue = colors.length-1 // The length of the array minus 1, which is the last position in an array.
let choices = upperValue - lowerValue + 1;
let selectFrom = Math.floor(Math.random() * choices + lowerValue);
let color = colors[selectFrom];



*/

//---------------------------##########----------------

// Array Methods  🤖🤖🤖
/**
 * Stack Methods ==> push(), pop()
 * Queue Methods ==>  unshift(), shift()
 * Manipulation Methods ==> slice(), splice(), concat()
 * Search and Location Methods ==> indexOf, includes()
 * Reordering Methods ==> reverse(), sort()
 * Conversion Methods ==> toString(), join()
 *
 */

// -----------------------------#########--------------------
// 1 - 🧹 array.pop() ==> method removes the last element from an array and returns that element.

// The pop() method, on the other hand, removes the last item in the array, decrements the array’s length, and returns that item
// item = colors.pop(); // get the last item
// item
// colors.length

//------------------------###########--------------------------------
// 2 - ➕ array.push(element1, ..., elementN) ==>  method appends the given element(s) in the last of the array and returns the length of the new array.

//The push() method accepts any number of arguments and adds them to the end of the array, return- ing the array’s new length
// colors = [] // create an array
// count = colors.push("red", "green"); // push two items
// count
// count = colors.push("black"); // push another item on
// count
//In this code, an array is created for use as a stack (note that there’s no special code required to make this work; push() and pop() are default methods on arrays.

// The stack methods may be used in combination with all of the other array methods as well
// colors = ["red", "blue"] // array is initialized with two values
// colors.push("brown") // add another item. A third value is added via push()
// colors[3] = "black" // add an item. Fourth is added by direct assignment into position 3
// colors.length
// item = colors.pop() // When pop() is called, it returns the string "black", which was the last value added to the array.
// item

//------------------------###########--------------------------------

// 3 - 🧹 array.shift() ==> method removes the first element from an array and returns that element.

// colors = ["red", "blue"] // array is initialized with two values
// item = colors.shift()
// item
// colors.length

// colors = []
// count = colors.push("red", "green"); // push two items
// count
// count = colors.push("black"); // push another item on
// count
// item = colors.shift() 🔦// remove the first item
// item
// colors.length
// This example creates an array of three colors using the push() method. The highlighted line shows the shift() method being used to retrieve the first item in the array, which is "red"

//------------------------###########--------------------------------

// 4 - ➕ array.unshift( element1, ..., elementN ) ==> method adds one or more elements to the beginning of an array and returns the new length of the array.

// colors = []
// count = colors.unshift("red", "green"); // push two items
// count
// count = colors.unshift("black"); // push another item on
// count
// let item = colors.pop(); // remove the last item
// item
// colors.length
// In this code, an array is created and then populated by using unshift(). First "red" and "green" are added to the array, and then "black" is added, resulting in an order of "black", "red", "green". When pop() is called, it removes the last item, "green", and returns it.

//------------------------###########--------------------------------

// 5 - ✏️ array.splice(index, howMany, [element1][, ..., elementN]) ==> method changes the content of an array, adding new elements while removing old elements.
// index − Index at which to start changing the array.
// howMany − An integer indicating the number of old array elements to remove. If howMany is 0, no elements are removed.
// element1, ..., elementN − The elements to add to the array. If you don't specify any elements, splice simply removes the elements from the array.

// The splice() method always returns an array that contains any items that were removed from the array (or an empty array if no items were removed). These three uses are illustrated in the fol- lowing code
// colors = ["red", "green", "blue"] // colors array containing three items
//removed = colors.splice(0,1); // When splice is called the first time, it simply removes the first item, leaving colors with the items "green" and "blue".

// colors
// removed
// removed = colors.splice(1, 0, "yellow", "orange"); // The second time splice() is called, it inserts two items at position 1, resulting in colors containing "green", "yellow", "orange", and "blue"
// colors
// removed // empty. Not item has been removed. No items are removed at this point, so an empty array is returned.
// removed = colors.splice(1, 1, "red", "purple") // insert two values, remove one. The last time splice() is called, it removes one item, beginning in position 1, and inserts "red" and "purple"
// colors
// removed // one item in array

//------------------------###########--------------------------------

// 6 - 🥑 array.slice( begin [,end] ) ==> method extracts a section of an array and returns a new array.

// begin − Zero-based index at which to begin extraction. As a negative index, start indicates an offset from the end of the sequence.

// end − Zero-based index at which to end extraction.

//Keep in mind that this operation does not affect the original array in any way.
// colors = ["red", "green", "blue", "yellow", "purple"] // the colors array starts out with five items
// colors2 = colors.slice(1) // extracts from index one to the end.
// colors2
// colors3 = colors.slice(1, 4) // extracts from index one to index 4
// colors3

//------------------------###########--------------------------------

// 7 - ⏭ array.concat(value1, value2, ..., valueN) ==> method returns a new array comprised of this array joined with two or more arrays.

//valueN − Arrays and/or values to concatenate to the resulting array.

// array1 = [1, 'A', true, [1,2,3], null]
// arr2 = [ 'x', 'y', 'z']
// results =  array1.concat(arr2)

// xx = [1, 'A', true, [1,2,3], null]
// yy = [ 'x', 'y', 'z']
// results =  yy.concat(xx, yy)

// If the values are not arrays, they are simply appended to the end of the resulting array
// colors = ["red", "green", "blue"] // colors array containing three values
// colors2 = colors.concat("yellow", ["black", "brown"]) // The concat() method is called on colors, passing in the string "yellow" and an array containing "black" and "brown"
// colors
// colors2

//------------------------###########--------------------------------

// 8 - array.reverse() ==> method reverses the element of an array. The first array element becomes the last and the last becomes the first.

//------------------------###########--------------------------------

// 9 - array.indexOf(searchElement[, fromIndex]) ==> method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// searchElement − Element to locate in the array.

//  The index at which to begin the search. Defaults to 0, i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, -1 is returned.

//------------------------###########--------------------------------

// 10 - array.includes(valueToFind, startIndex) ==> method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// valueToFind - The value to search for.

// startIndex - The position in this array at which to begin searching for valueToFind

//------------------------###########--------------------------------

// 11 - array.join(separator) ==> method joins all the elements of an array into a string.

// separator − Specifies a string to separate each element of the array. If omitted, the array elements are separated with a comma.

//------------------------###########--------------------------------

// 12 - array.sort() ==> method sorts the elements of an array.

//------------------------###########--------------------------------

// 13 - array.toString() ==> method returns a string representing the source code of the specified array and its elements.
