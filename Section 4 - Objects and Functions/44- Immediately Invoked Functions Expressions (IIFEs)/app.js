// function statement
function greet(name) {
  console.log('Hello ' + name);
}
greet('nick');  // invoke it

// function expression
var greetFunc = function(name) { //
  console.log('Hello ' + name);
}
greetFunc('nick');

// because function expression is a type of special object,
// it has a 'code' property WHICH can be invoked immediately.
// using an Immediately Invoked Function Expression (IFFE)
var greeting = function(name) { //
  return name;
}('john');
// function expressions return a value! greeting now holds what the IFFE returned
console.log(greeting);




// function expression executed immediately (on the fly)
// parenthis are used to trick the syntax parses, () are used for grouping
// then we define our function and invoke it with ().
(function(name) {
  console.log('hhhhiii ' + name);
}('test'));
