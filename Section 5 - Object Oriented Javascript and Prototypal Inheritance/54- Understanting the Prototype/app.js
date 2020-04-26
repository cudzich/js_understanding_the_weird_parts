var person = {
  first: 'Default',
  last: 'Default',
  getFullName: function () { // this refers to passed EC.
    return this.first + ' ' + this.last;
  }
};

var john = {
  first: 'John',
  last: 'Doe'
};

// demonstration purposes only, do not set the __proto__ this way.
john.__proto__ = person;
// john is the caller, it doesn't find getFullName in its object,
// therefore JS will go down the prototype chain, in this case 'person'.
// getFullName is found, john EC(this) is passed in and function is executed.
console.log(john.getFullName()); // John Doe

var mary = {
  first: 'Mary',
  // missing last var
};
mary.__proto__ = person;
console.log(mary.getFullName()); // Mary Default
// 'this' in the getFullName() EC resolves to the caller (mary)
// name is a property of mary, however, last is not! JS will go down the
// prototype chain (mary->person). last is a property of person obj. its returned.
