(function(global, $) {
    // Front facing function which return a function constructor
    // so the user doesn't have to instantiate each time with a 'new' keyword
    var Greetr = function(firstName, lastName, language) {
      return new Greetr.init(firstName, lastName, language);
    }

    // Use parent prototype to create helper methods for each child,
    // offsetting memory allocation.
    Greetr.prototype = {
      
    };

    // Our internal function object which we use to set up defaults
    Greetr.init = function(firstName, lastName, language) {

      var self = this;
      self.firstName = firstName || 'None';
      self.lastName = lastName || 'None';
      self.language = language || 'en';

    }

    // parent prototype is assigned to child. Prototypal inheritance.
    Greetr.init.prototype = Greetr.prototype;

    // Expose object to use thruogh Greeter or G$ on global object
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
