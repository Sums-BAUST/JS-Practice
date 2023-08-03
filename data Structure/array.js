// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]);
// }

let arr = [1, 2, 3, 4, 5];

let x = arr.length - 1;
for (let i = 0; i <= x; i++) {
  arr[i] = arr[i] + 5;
}

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}
