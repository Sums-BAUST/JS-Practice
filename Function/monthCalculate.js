const month = "February";
const year = 1900;

function daysOfMonth(month, year) {
  if (
    month === "January" ||
    month === "March" ||
    month === "May" ||
    month === "July" ||
    month === "August" ||
    month === "October" ||
    month === "December"
  ) {
    return "31 Days";
  } else if (month === "February") {
    if (leapYear(year)) {
      return "29 Days";
    } else {
      return "28 Days";
    }
  } else {
    return "30 Days";
  }
}

function leapYear(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(daysOfMonth("March", 2001));
