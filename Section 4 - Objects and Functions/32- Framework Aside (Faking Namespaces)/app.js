var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet);

var english = {};
var spanish = {};

// In JS we can utilize objects as a namespace in order to prevent
// collisions during variable/function call or assignment
english.greet = 'Hello!';
spanish.greet = 'Hola!';
console.log('English container,', english.greet);
console.log('Spanish container,', spanish.greet);

// Deeply nested namespace can provide a layer of seperation between common
// variables or functions. It can also be utilized to provide fallback
// functionality or extend capabilities without errors
var italian = {
  greetings: {
    basic: 'Hello in Italian'
  }
};
console.log('Italian container: fallback,', italian.greetings.basic);

italian.greetings.greet = 'Extended or improved greet in Italian';
console.log('New greet in Italian,', italian.greetings.greet);
