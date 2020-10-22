// Array Methods
// name of the file 4-arrays_search_location_methods.js

//! Search and Location Methods indexOf() and includes()

//---------------############-------------

/**
 1- array.indexOf(searchElement[, fromIndex]) ==> method returns the first index at which a given element can be found in the array, or -1 if it is not present.

***** searchElement − Element to locate in the array.

****fromIndex -  The index at which to begin the search.

*/

//🧪🧪🧪🧪🧪🧪🧪🧪🧪

const arrNumbers = [66, 7, 8, 33, 55, 222];

const indexOfElement = arrNumbers.indexOf(55);
console.log("indexOfElement ==> ", indexOfElement); // 4

const indexOfElement2 = arrNumbers.indexOf(7);
console.log("indexOfElement2 ==> ", indexOfElement2); // 1

const indexOfElement3 = arrNumbers.indexOf(7, 2);

console.log("indexOfElement3 ==> ", indexOfElement3); // -1

const arrNumbers2 = [66, 7, 8, 33, 55, 7, 222];

const indexOfElement4 = arrNumbers2.indexOf(7, 2);
console.log("indexOfElement4 ==> ", indexOfElement4); // 5

//--------------###########--------------------------------------------------------

/**
2- array.includes(valueToFind, startIndex) ==> method determines whether an array includes a certain value, returning true or false .

**** valueToFind - The value to search for.

**** startIndex - The position in this array at which to begin searching for valueToFind
 */

//🧪🧪🧪🧪🧪🧪

const chrsArray = ["A", "B", "C"];

const isIncludes = chrsArray.includes("B");
console.log("isIncludes ==> ", isIncludes); // true

const isIncludes2 = chrsArray.includes("b");
console.log("isIncludes2 ==> ", isIncludes2); // false

const isIncludes3 = chrsArray.includes("B", 2);

console.log("isIncludes3 ==> ", isIncludes3); // false
