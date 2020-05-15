(function(global, $) {

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // You can define properties in this scope which won't be exposed to
    // the outside of this library, meaning users won't have access to it.
    // Thanks to closures and lexical environment.
    var supportedLangs = ['en', 'pl', 'es'];

    var greetings = {
      en: 'Hello',
      pl: 'Czesc',
      es: 'Hola'
    };

    var formalGreetings = {
      en: 'Greetings',
      pl: 'Witamy',
      es: 'Saludos'
    };

    var logMessages = {
      en: 'Logged in',
      pl: 'Zalogowany',
      es: 'Inicio sesion'
    };

    // Properties and methods shared with all children of Greetr.
    Greetr.prototype = {

      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      },

      validate: function() {
        if (supportedLangs.indexOf(this.language) === -1) {
          throw "Invalid language";
        }
      },

      greeting: function() {
        return greetings[this.language] + ' ' +
                this.firstName + '!';
      },

      formalGreeting: function() {
        return formalGreetings[this.language] + ' ' +
                this.fullName();
      },

      greet: function(formal) {
        var msg;

        // if undefined or null it will be coerced to 'false'
        if(formal) {
          msg = this.formalGreeting();
        } else {
          msg = this.greeting();
        }

        if(console) {
          console.log(msg);
        }

        // this refers to the calling object at execution time
        // makes the method chainable
        return this;
      },

      log: function() {
        if(console) {
          console.log(logMessages[this.language] + ': ' +
                      this.fullName()
          );
        }
        return this; // make chainable
      },

      setLang: function(lang) {
        this.language = lang;

        this.validate();

        return this;
      }

    };

    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
