// Not all browsers support Object.create()
// Use polyfill to bridge the gap, and add functionality on the go.
if(!Object.create) {
  Object.create = function(o) {
    if(arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  }
}

var person = {
  firstname: 'default',
  lastname: 'default',
  greet: function() {
    return 'Hi ' + this.firstname;
  }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);
