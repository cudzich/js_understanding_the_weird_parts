/* Object is a collection of references to properties/methods.
* Object can contain a primitive, objects, functions
*/

// How to create an object from parent.
var person = new Object();

// Computed member access operator [], alternative = bracket notation
// Used to set access properties. Associativity = ... [...]
person['firstName'] = 'Tony';
person['lastName'] = 'Smith';
console.log(person);

// You can substitute the property name with a variable that holds the proprty name
var firstNameProperty = 'firstName';
console.log(person[firstNameProperty]);

// Alternative way of accessing object members is the dot notation.
console.log(person.lastName);

// Example: attach another object to the person object.
person.address = new Object();
// Dot access has left to right associativity = ...   .    ...
person.address.street = "111 Main St";
