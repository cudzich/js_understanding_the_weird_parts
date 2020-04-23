function greet(whatToSay) {

  return function(name) {
    console.log(whatToSay + ' ' + name);
  }

}
// we're invoking a function that returns a function, we then invoke it.
greet('Hello')('Tony');
// or assign the returned function and invoke it.
var sayHi = greet('Hi');
sayHi('Nick');
