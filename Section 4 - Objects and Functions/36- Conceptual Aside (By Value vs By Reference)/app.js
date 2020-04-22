// By value, primitive types
var a = 3;
var b;
// new memory location is created w/ a copy of the primitive value.
b = a;
a = 2;
console.log(a);
console.log(b);


// By reference, all objects incl. functions
var c = { greeting: 'hi' };
var d;

d = c; //  d & c now point to the same memory location
if(d === c){
  console.log(true);
}

c.greeting = "hello"; // mutate

console.log(c);
console.log(d);

// By reference as parameters

function change(obj) {
  obj.greeting = "HOLA";
}

change(c);
console.log(c);
console.log(d);

// EXCEPTION: equals operator sets up new memory space(address)
c = { greeting: 'howdy'}; // the object is set to a new memory
console.log(c);
console.log(d);
