`All js runs inside execution context.
Either in global or inside a functions execution context

According to MDN, Scope is "The current context of execution"

When functions are ran, a local memory environment
is created for the functions execution context.
The memory environment is destroyed after the function has returned
(or maybe not always...)
`;
function add2(x) {
  // result only accessible inside add2's execution context
  const result =  x + 2;
  return result;
}

const five = add2(3);
const six = add2(4);
console.log(five);
console.log(six);


// `
// Functions have access to variables outside its own
// execution context.
// `;
// function addFive(x) {
//   const f =  x + five;
//   return f;
// }
// const ten = addFive(5);
// const seven = addFive(2);
//
// console.log(ten);
// console.log(seven);