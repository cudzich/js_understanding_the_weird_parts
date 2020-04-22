// 'this' is immedietly available at the global execution level.
// at the global execution context 'this' is set to the window object
function a() {
  console.log(this); // points to global 'this' object when invoking a function
}

b = function() {
  console.log(this);
}

a();
b();

// if object holds a value, its a property
// if objects holds a functions, its a method
var c = {
  name: 'The c object',
  log: function() {
    // use self which points to object's namespace
    // scope chain allows for the variable discovery
    let self = this;

    self.name = 'Updated name object';
    console.log(self);

    var setName = function(newName) {
      self.name = newName;
    }
    setName('Updated again! the c object');
    console.log(self);
  }
}

// Im assuming that if a function is created in the global
// execution context the this keyword is assigned by reference

// Objects have their own namespace, therefore the 'this' reference
// on a method points to itself (the object), unless..
// a method has an internal function, within the internal functions
// this is set to global 'this'
c.log();
