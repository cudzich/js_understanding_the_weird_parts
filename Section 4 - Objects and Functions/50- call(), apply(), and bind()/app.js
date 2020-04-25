var person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    var fullname = this.firstName + ' ' + this.lastName;
    return fullname;
  }
}

// bind(person) replaces 'this' global with person scope
var logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
}.bind(person);

logName('en');


var nameLog = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
}

// .call invokes the function and enables 'this' to be passed in
// as the first argument. Does not make a copy of the function object.
nameLog.call(person, 'en', 'es');
// .apply is exactly the same as .call with the exception that the arguments
// must be passed in as an array. ex below or .apply(person, arrayReference)
nameLog.apply(person, ['es', 'en']);

let arr = ['pl', 'it'];
// Example of creating a function on the fly and invoking it with .call or .apply
(function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
}).apply(person, arr);

// function borrowing
var person2 = {
  firstName: 'Jane',
  lastName: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying, used with bind
function multiply(a,b) {
  return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));
