// In JS functions are objects
// They contain "code" property that is invokable
// They can contain primitves, other objects, or functions
// They have a name property that is optional (anonymous function)
function greet() {
  console.log(hi);
}

greet.language = 'english';

console.log(greet.language);
