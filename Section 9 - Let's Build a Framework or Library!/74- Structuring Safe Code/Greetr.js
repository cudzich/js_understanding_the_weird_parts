// Create a new execution context for the library
// this will prevent collisions and allow code reusability
(function(global, $) {
  // some work
  console.log('test');
}(window, jQuery));
