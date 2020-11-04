// switch statement is a different approach to handle the conditions

// what month is this? Print it to the console as a word!

function months(month) {
  if (month === 1) {
    return "Its January!";
  } else if (month === 2) {
    return "Its February";
  } else if (month === 3) {
    return "Its March";
  } else if (month === 4) {
    return "Its April";
  } else if (month === 5) {
    return "Its May";
  } else if (month === 6) {
    return "Its June";
  } else if (month === 7) {
    return "Its July";
  } else if (month === 8) {
    return "Its August";
  } else if (month === 9) {
    return "Its September";
  } else if (month === 10) {
    return "Its October";
  } else if (month === 11) {
    return "Its November";
  } else if (month === 12) {
    return "Its December";
  } else {
    return "Error cases!!!"; // 13
  }
}
console.log("if else ==> ", months(1));
console.log("if else ==> ", months(9));
console.log("if else ==> ", months(13));

//----------------#############-------------------

//! Switch Statement

/**
  switch(month){
    case 1:
        'Its January!'
        break;

      default:
          'default case'
  }
 */

let currentMonth;

function months2(month) {
  switch (month) {
    case 1:
      currentMonth = "Its January!";
      break;
    case 2:
      currentMonth = "Its February";
      break;
    case 3:
      currentMonth = "Its March";
      break;
    case 4:
      currentMonth = "Its April";
      break;
    case 5:
      currentMonth = "Its May";
      break;
    case 6:
      currentMonth = "Its June";
      break;
    default:
      currentMonth = "default case";
  }
}

console.log("months2(4) currentMonth==> ", months2(4), currentMonth); // months2(4) currentMonth==>  undefined Its April
console.log("months2(5) currentMonth==> ", months2(5), currentMonth); // months2(5) currentMonth==>  undefined Its May
console.log("months2(6) currentMonth==> ", months2(6), currentMonth); // months2(6) currentMonth==>  undefined Its June

function months3(month) {
  switch (month) {
    case 1:
      return "Its January!";

    case 2:
      return "Its February";

    case 3:
      return "Its March";

    case 4:
      return "Its April";

    case 5:
      return "Its May";

    case 6:
      return "Its June";

    default:
      return "default case";
  }
}
console.log("months3(4) ==> ", months3(4)); // months3(4) ==>  Its April
console.log("months3(5) ==> ", months3(5)); // months3(5) ==>  Its May
console.log("months3(6) ==> ", months3(6)); // months3(6) ==>  Its June

//-------------------############--------------------

function evenOrOdd(num) {
  if (isNaN(num)) {
    return num + " is not a number";
  } else {
    switch (num % 2) {
      case 0:
        return `${num} is even`;
      case 1:
        return `${num} is odd`;
      default:
        return `${num} is not even or odd number`;
    }
  }
}

console.log("evenOrOdd ==> ", evenOrOdd(3));
console.log("evenOrOdd ==> ", evenOrOdd(8));
console.log("evenOrOdd ==> ", evenOrOdd("test"));
console.log("evenOrOdd ==> ", evenOrOdd(2.4));

//-------------#####-------------------
// We user return to get output from switch and stop the Process
// We use break to stop the process but switch return undefined
function seasons(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
    case 3:
      return "Hello winter!";

    case 4:
    case 5:
      return "Hallo Spring";

    case 6:
    case 7:
    case 8:
      return "Hallo Summer";

    case 9:
    case 10:
    case 11:
      return "Hallo Autumn";

    default:
      return "Error cases";
  }
}

console.log("seasons ==> ", seasons(3)); // Hello winter!
console.log("seasons ==> ", seasons(1)); // Hello winter!

console.log("seasons ==> ", seasons(4)); // Hallo Spring

console.log("seasons ==> ", seasons(7)); // Hallo Summer

console.log("seasons ==> ", seasons(11)); // Hallo Autumn
