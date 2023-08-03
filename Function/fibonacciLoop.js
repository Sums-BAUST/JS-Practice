const position = 22;
if (position === 1 || position === 2) {
  console.log(1);
} else {
  let x = 1;
  let y = 1;

  let i = 3;
  while (i <= position) {
    const temp = x;
    x = y;
    y = temp + y;
    i++;
    console.log("This loop ran");
  }
  console.log(y);
}
