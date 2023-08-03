function first(x) {
  console.log("I'm in first");
  second(x + 1);
}

function second(x) {
  console.log("I'm in second");
  third(x + 2);
}

function third(x) {
  console.log("I'm in third");
  fourth(x + 3);
}
function fourth(x) {
  console.log(x);
}
first(10);
