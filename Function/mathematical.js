const x = 10;
const y = 15;

function sum(x, y) {
  a = x + y;
  console.log("Sum is " + a);
}
function sub(x, y) {
  if (x > y) {
    console.log("Sub is " + (x - y));
  } else {
    console.log("Sub is " + (y - x));
  }
}
function mul(x, y) {
  console.log("mul is " + x * y);
}
function div(x, y) {
  if (x > y) {
    console.log("Sub is " + x / y);
  } else {
    console.log("Sub is " + y / x);
  }
}

function all(a, b) {
  sum(a, b);
  sub(a, b);
  mul(a, b);
  div(a, b);
}
all(x, y);
