/*
* JSON is a subset of JS object literal, meaning
* JSON is a valid object literal
* object literal is not valid json
* JSON has stricter rules about what it can be, how it is structured.
*/

var myObject = {
  firstname: 'Mary',
  lastname: 'Smith'
};

// return valid JSON
console.log(JSON.stringify(myObject));

// returns valid JS object
var parsedObject = JSON.parse('{ "firstName": "Nancy", "lastName": "Barn" }');
console.log("parsedObject", parsedObject);
