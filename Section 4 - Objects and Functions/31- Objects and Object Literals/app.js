// shorthand for creating objects, allows for immediate property assignment
var Tony = {
  firstName: 'Tony',
  lastName: 'Smith',
  address: {
    street: '111 Main st',
    city: 'New Ark',
    state: 'NY'
  }
};

console.log(Tony);

// Access object by property in a function
function greet(person) {
  console.log('Hi', person.firstName );
}
greet(Tony);

// Create an object on the fly, utilize whitespace if needed.
greet({
  firstName: 'Nick',
  lastName: 'Terry'
});
