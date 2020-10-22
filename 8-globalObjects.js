/*let str = "hallo";
console.log("str ==> ", str);
let str2 = "hallo";
console.log("str2 ==> ", str2);
let str3 = "hallo";
console.log("str3 ===> ", str3);*/

// isNan()  ==> function Takes Argument and Check if the value is not number
let str = "hallo";
//let checkValue = isNaN(!str);
let checkValue = isNaN(str);
console.log("str ==> ", str); // hallo
console.log("checkValue == >", checkValue); // true

let number = 22;
let checkValue2 = isNaN(number);
console.log("checkValue2 ==> ", checkValue2); //

//let value = 44;
/*let value = "hallo";
if (!isNaN(value)) {
  console.log("inside if ==> ", value * 2);
} else {
  console.log("Error the value is not number!");
}*/

// Number()    we pass string number, ex: '50' ==> Number('50') ===> 50

// Problem 😔
let value1 = "50";
let value2 = "40";

let sum = value1 + value2;

console.log("sum ==> ", sum); // 5040

// solve the problem 🚀

let sum2 = Number(value1) + Number(value2);

console.log("sum2 ==> ", sum2);

// parseInt() ,  parseFloat()

//let floatNum = 3.4;
// string number ==> int number we can use parseInt('11.45') ==> 11
let floatNum = "3.4";

let intNum = 6;
//let floatNum2 = 8.99;
let floatNum2 = "8.99"; // string number

console.log("parseInt(floatNum)  ==> ", parseInt(floatNum));
console.log("parseFloat(intNum)  ==> ", parseFloat(intNum));
console.log("parseFloat(floatNum2)  ==> ", parseFloat(floatNum2));

console.log(floatNum2 + 3); // 8.993
console.log(parseFloat(floatNum2) + 3); //11.99
