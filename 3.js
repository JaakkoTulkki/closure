`
From MDN

"A closure is the combination of a function bundled together (enclosed)
 with references to its surrounding state (the lexical environment).
 In other words, a closure gives you access to an outer 
 function’s scope from an inner function."
 
Other: a function that remembers outer variables and functions that were defined at the time of the definition
of the function.

`;

function foo(x) {
  let c = 0;
  function bar() {
    c += x;
    return c;
  }
  return bar;
}

const fizz = foo(2);

console.log(fizz());
console.log(fizz());
console.log(fizz());

// const buzz = foo(5);
// console.log(buzz());
// console.log(buzz());
// console.log(buzz());

// console.log(fizz === buzz);
// console.log(fizz === fizz);
// console.log(buzz === buzz);

`
Thus, returned functions have "memory".
The functions fizz and buzz "remember" what was on the outer scope.

How do they do it?
Functions in JS are also objects (Function object).
They have an internal property called [[Environment]]
https://www.ecma-international.org/ecma-262/10.0/index.html#Title

Was called at some point [[Scope]]
https://www.ecma-international.org/ecma-262/5.1/#sec-15.3.3

The references to the variables are stored in this hidden object.
`;