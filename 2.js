`
Lexical Scope

MDN:
"The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within 
the source code to determine where that variable is available.
Nested functions have access to variables declared in their outer scope."

In other words:
Where a function gets declared determines what data the function has access to.

Thus, the scoping is static.
`;
const exclaim = '!';
function outer() {
  const c = 'outer' + exclaim;
  function inner() {
    function nestedInner() {
      return c;
    };
    return nestedInner;
  }
  return inner();
}

const thisIsInner = outer();
console.log(thisIsInner());