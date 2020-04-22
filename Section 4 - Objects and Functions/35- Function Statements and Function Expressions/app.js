let a;

greet();

// function statement, it does not result in a value
// It is hoisted, during the creation phase of the
// global execution context it is put into memory.
// Therefore you can call it before declaring it.
function greet() {
  console.log('hi');
}

// function expression, returns a value in this case a new function object
// The function has no name therefore its anonymous. During the creation of the
// execution context, anonymousGreet variable is set to undefined.
// Function Expressions aren't hoisted, so it isn't set to the function expression's
// value until the code is run.
var anonymousGreet = function() {
  console.log('hi');
}

anonymousGreet();

function log(a) {
  a();
}

log(function() {
  console.log('hi from function expresson created on the go');
});
