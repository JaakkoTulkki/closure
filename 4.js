function multiply(x, y) {
  return x * y;
}

const multiplyByTwo = (x) => multiply(x, 2);
const multiplyByFour = (x) => multiply(x, 4);

console.log(multiplyByTwo(5));
console.log(multiplyByFour(5));


// function executeOnlyTwice(f) {
//   let counter = 0;
//
//   return function (...args) {
//     if(counter >=2) {
//       throw new Error('You can only execute this function 2 times');
//     }
//     counter++;
//     return f(...args);
//   }
// }
//
// const newMultiply = executeOnlyTwice(multiply);
// console.log(newMultiply(2, 4));
// console.log(newMultiply(2, 7));
// // console.log(newMultiply(2, 4));

