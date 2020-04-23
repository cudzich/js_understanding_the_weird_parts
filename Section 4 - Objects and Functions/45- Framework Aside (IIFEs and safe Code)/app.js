var firstname = 'John';

// IIFE
// Creates its own execution context, this avoids properties
// and function collisions. If you want to access global variables
// pass in to the function
(function(global, name) {
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);

}(window,firstname)); // IIFE


console.log(greeting);
