const input = 905;

if (input % 400 == 0 || (input % 4 == 0 && input % 100 != 0)) {
  console.log("Leap Year");
  // } else if (input % 100 == 0) {
  //   console.log(" Not Leap Year");
  // } else if (input % 4 == 0 && input % 100 != 0) {
  //   console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}
