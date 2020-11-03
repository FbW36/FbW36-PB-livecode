// A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.
// Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.

//🧪

// The last property in the list may end with a comma. That is called a "TRAILING" or “HANGING” comma. Makes it easier to add/remove/move around properties.

//-----------------------######-----------------------------
//user2

// bracket notation
// For multi word properties, the dot access doesn’t work: user.likes birds = true

//-----------------------######-----------------------------

// user3

// ----------------//---------------- //
// We can use square brackets in an object literal. That’s called COMPUTED PROPERTIES.

// ---------##---------
// Reserved words are allowed as property names

// ---------##---------
// Comparing Objects:

// ---------##---------
// In real code we often use existing variables as values for property names.

// Property value shorthand
// properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.
// Instead of name:name we can just write name, like this:

// ---------##---------
// Property existence test, “in” operator
// A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!
// Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

// ---------##---------
