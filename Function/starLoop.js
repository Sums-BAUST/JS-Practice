// // left Triangle
// const input = 5;
// function leftTriangle(input) {
//   for (let x = 1; x <= input; x++) {
//     for (let y = 1; y <= x; y++) {
//       process.stdout.write("*");

//     console.log("");
//   }
// }
// leftTriangle(5);

// // left reverse triangle
// const input = 5;
// function leftRevTriangle(input) {
//   for (x = input; x >= 1; x--) {
//     for (y = x; y >= 1; y--) {
//       process.stdout.write("*");
//     }
//     console.log("");
//   }
// }
// leftRevTriangle(5);

// // Right Triangle
// let input = 5;
// function rightTriangle(input) {
//   for (let x = 1; x <= input; x++) {
//     for (let y = 0; y < input - x; y++) {
//       process.stdout.write(" ");
//     }
//     for (let z = 0; z < x; z++) {
//       process.stdout.write("*");
//     }
//     console.log();
//   }
// }
// rightTriangle(5);

// // right reverse Triangle
// let input = 5;
// function rightRevTriangle(input) {
//   for (let x = input; x >= 1; x--) {
//     for (let y = input - x; y < 0; y--) {
//       process.stdout.write(" ");
//     }
//     for (let z = 0; z < x; z++) {
//       process.stdout.write("*");
//     }
//     console.log();
//   }
// }
// rightRevTriangle(5);

// pyramid
// let input = 5;
// function pyramid(input) {
//   for (let x = 1; x <= input; x++) {
//     for (let y = 1; y <= input - x; y++) {
//       process.stdout.write(" ");
//     }
//     for (let z = 0; z < 2 * x - 1; z++) {
//       process.stdout.write("*");
//     }
//     console.log();
//   }
// }
// pyramid(10);

// // reverse pyramid
// let input = 5;
// function reversePyramid(input) {
//   for (let x = 0; x < input; x++) {
//     for (let y = 0; y < x; y++) {
//       process.stdout.write(" ");
//     }
//     for (let z = 0; z < 2 * (input - x) - 1; z++) {
//       process.stdout.write("*");
//     }
//     console.log();
//   }
// }
// reversePyramid(10);

//  diamond
// let input = 5;
// function diamond(input) {
//   for (let x = 1; x <= input; x++) {
//     for (let y = 1; y <= input - x; y++) {
//       process.stdout.write(" ");
//     }
//     for (let z = 0; z < 2 * x - 1; z++) {
//       process.stdout.write("*");
//     }
//     console.log();
//   }
//   for (let x = 1; x < input; x++) {
//     for (let y = 0; y < x; y++) {
//       process.stdout.write(" ");
//     }
//     for (let z = 0; z < 2 * (input - x) - 1; z++) {
//       process.stdout.write("*");
//     }
//     console.log();
//   }
// }
// diamond(5);
