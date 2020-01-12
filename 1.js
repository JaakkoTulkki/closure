`
According to MDN, Scope is "The current context of execution"

All js runs inside execution context.
Either in global or inside a function's execution context

When functions are ran, a local memory environment
is created for the function's execution context.

Scope basically is "what data I have available on any given line of code".
`;
function add2(x) {
  // constant "result" only accessible inside add2's execution context
  const result =  x + 2;
  return result;
}

const five = add2(3);
const six = add2(4);
console.log(five);
console.log(six);

//
// `
// Functions have access to variables outside its own
// execution context.
// `;
// const outer = 5;
//
// function addFive(x) {
//   const f =  x + outer;
//   return f;
// }
// const ten = addFive(5);
// const seven = addFive(2);
//
// console.log(ten);
// console.log(seven);