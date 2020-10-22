/**
 * The length property of a String object contains the length of the string, in UTF-16 code units.
 *  length is a read-only data property of string instances. */

let str = "  Ha llo fbw36 1fmlo-";
console.log(str.length);

console.log("javascript".length);

// the item Location in string = length - 1 ==> we target the chr. by Location
// length start from 1
// index start from 0

console.log("javascript"[2]); // v

let str2 = "javascript";

console.log("str2 ==> ", str2[2]); // v

let str3 = "javascript";

console.log("str3 ==> ", str3["2"]); // v

let str4 = "javascript";

console.log("str4 ==> ", str4["a"]); // undefined

let str5 = "javascript and php and node test anything";
// get the last index
console.log("str5 ==> ", str5[str5.length - 1]); // t

let x = "hallo world";
console.log(x[x.length - 1]); // d

let str6 = "my name is ghassan";
// h index 0
// a index 1
// l index 2
// l index 3
// o index 4
console.log("str6 ==> ", str6.length - 1); // 17

console.log(str6[str6.length - 1]); // n

console.log(str6[str6.length - 3]); // s

let str7 = "b";

console.log("str7 ==> ", str7[str7.length - 1]); //b

// str7.length() <=== that not valid

/*__________________________*/
/**
 * The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting  the search at fromIndex. Returns -1 if the value is not found.
 * */
// with index we start from 0
let str8 = "abcde";
// index of a ==> 0
// index of b ==> 1
// index of c ==> 2
console.log("str8 ==> ", str8.indexOf("b")); //  1
console.log("str8 ==> ", str8.indexOf("e")); //  4
console.log("str8 ==> ", str8.indexOf("z")); //  -1

let str9 = "method returns the index within the calling String";
console.log("str9 ==> ", str9.indexOf("within")); // 25

let str10 = "hallo";
// h
// H
console.log("str10 ==> ", str10.indexOf("hallo")); // 0

console.log("str10 ==> ", str10.indexOf("Hallo")); // -1
/**_________________________________ */

/**
 * The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
 */

let str11 = "hallo";
// h ==> 0
// a ==> 1
// l ==> 2
// l ==> 3
// o ==> 4
console.log("str11 ==> ", str11.indexOf("l")); // 2

console.log("str11 ==> ", str11.lastIndexOf("l")); // 3

let str12 = "hallo";
// h ==> 0
// a ==> 1
// l ==> 2
// l ==> 3
// o ==> 4
console.log("str12 ==> ", str12.indexOf("h")); // 0

console.log("str12 ==> ", str12.lastIndexOf("h")); // 0

let str13 = "halhlo";
// h ==> 0
// a ==> 1
// l ==> 2
// h ==> 3
// l ==> 4
// o ==> 5
console.log("str13 ==> ", str13.indexOf("h")); // 0

console.log("str13 ==> ", str13.lastIndexOf("h")); // 3

/**_______________________ */
/**
 * The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
 *  */

let person = "My name is Tommy";

console.log("person ==> ", person.includes("name")); // true
console.log("person ==> ", person.includes("naMe")); // false
console.log("person ==> ", person.includes("tommy")); // false
/**_______________________ */

/**
 * The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. */

let str14 = "The quick brown fox jumps over the lazy dog.";

// str14.slice(start point ,end point)
// str14.slice(4 , 15) // ==> quick brown

console.log("str14 ==> ", str14.slice(4, 15)); // quick brown
console.log("str14 ==> ", str14.slice(4)); // quick brown fox jumps over the lazy dog.

/**___________________ */

/**The substring() method returns the part of the string between the start and end indexes, or to the end of the string. */

let str15 = "javascript is cool";

console.log("str15 ==> ", str15.substring(4, 10)); // script
console.log("str15 ==> ", str15.substring(5)); // cript is cool

/**___________________ */

/**The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
 *  The pattern can be a string or a RegExp,
 *  and the replacement can be a string or a function to be called for each match.
 *  If pattern is a string, only the first occurrence will be replaced. */

let str16 =
  "The quick brown fox jumps. over the lazy dog. If the dog reacted, was it really lazy?";

console.log("str16 ==> ", str16.replace(" ", "*")); // The*quick brown fox jumps. over the lazy dog. If the dog reacted, was it really lazy?

console.log("str16 ==> ", str16.replace(".", "-")); // The quick brown fox jumps- over the lazy dog. If the dog reacted, was it really lazy?

/** ____________________ */

/**The toUpperCase() method returns the calling string value converted to uppercase
 *  (the value will be converted to a string if it isn't one). */

let str17 = "Nice WeAther toDay";

console.log("str17 ===> ", str17.toUpperCase()); // NICE WEATHER TODAY

/**_______________________ */

let str18 = "The Quick brown fox jAmps over The lazy dog.";

console.log("str18 ===> ", str18.toLowerCase()); // the quick brown fox jamps over the lazy dog.

/**___________________ */

/** The trim() method removes whitespace from both ends of a string.
 *  Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.)
 *  and all the line terminator characters (LF, CR, etc.). */

let str19 = "       The Quick brown fox jAmps over The lazy         dog.    "; // The Quick brown fox jAmps over The lazy         dog.

console.log("str19 ====> ", str19.trim()); // The Quick brown fox jAmps over The lazy         dog.

console.log("str19 ====> ", str19.trimStart()); //  The Quick brown fox jAmps over The lazy         dog.

console.log("str19 ====> ", str19.length); //  63
console.log("str19 ====> ", str19.trim().length); // 52
console.log("str19 ====> ", str19.trimStart().length); // 56

/**_________________ */

/**The String object's charAt() method returns a new string consisting of
 * the single UTF-16 code unit located at the specified offset into the string. */

let str20 = "The quick brown fox jumps over the lazy dog.";

console.log("str20 ==> ", str20.charAt(8)); //  k

console.log("str20 ==> ", str20[8]); // k

/**_________________ */

/**The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. */

let str21 = "My name is Alex";
let str22 = "my name is alex";
let str23 = "👏😊😔";

console.log("str21 ==> ", str21.charCodeAt(0)); // 77
console.log("str22 ==> ", str22.charCodeAt(0)); // 109

console.log("str23 👏==> ", str23.charCodeAt(0)); // 55357

/**The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units. */

console.log("str22 👏==> ", String.fromCharCode(77)); // M

/**____________ */

/**The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
 *   The division is done by searching for a pattern;
 *  where the pattern is provided as the first parameter in the method's call.   */
// split     string ===> array

let str24 = "The quick brown fox jumps over the lazy dog.";

console.log("str24 ===> ", str24.split(" ")); // ['The',   'quick','brown', 'fox','jumps', 'over','the',   'lazy','dog.' ]
console.log("str24 ===> ", typeof str24); //  string
console.log("str24 ===> ", typeof str24.split(" ")); // object[array]

let str25 = "A BC";

console.log("str25 ==> ", str25.split("B")); // [ 'A ', 'C' ]
console.log("str24 ===> ", str24.split()); // [ 'The quick brown fox jumps over the lazy dog.' ]
console.log("str24 ===> ", str24.split(""));
/**
 * 
 *  [
  'T', 'h', 'e', ' ', 'q', 'u', 'i',
  'c', 'k', ' ', 'b', 'r', 'o', 'w',
  'n', ' ', 'f', 'o', 'x', ' ', 'j',
  'u', 'm', 'p', 's', ' ', 'o', 'v',
  'e', 'r', ' ', 't', 'h', 'e', ' ',
  'l', 'a', 'z', 'y', ' ', 'd', 'o',
  'g', '.'
]
 */

let str26 = "hallo* world**";
console.log("str26 ==> ", str26.split("**")); // [ 'hallo* world', '' ]
console.log("str26 ==> ", str26.split("*")); // [ 'hallo', ' world', '', '' ]

let str27 = "A BBCB";

console.log("str27 ==> ", str27.split("B")); //[ 'A ', '', 'C', '' ]

let str28 = "A BBBCBB";

console.log("str28 ==> ", str28.split("B")); // [ 'A ', '', '', 'C', '', '' ]

let str29 = "ABBBCBB";

console.log("str29 ==> ", str29.split("B")); //  [ 'A', '', '', 'C', '', '' ]

//escape characters

let str30 = "I like javascript";

let str31 = "I like javascript";
//  ==> /
// ===>  \
let str32 = 'I like \n "javascript';
let str33 = 'I like  "javascript';

console.log("str32 ==> ", str32);

console.log("str32 ==> ", str32.split(" "));
