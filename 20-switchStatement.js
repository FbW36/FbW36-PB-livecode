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
console.log(months(1));
