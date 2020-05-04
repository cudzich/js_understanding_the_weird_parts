function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

var john = new Person();
console.log(john);

// Function Constructors are normal functions that are used to
// to construct objects.

// 'new' operator creates an EC, which is used to call the function with
// its 'this' reference, function is called and methods/properties are created
// object reference is returned to the memory (variable, ex. john)
