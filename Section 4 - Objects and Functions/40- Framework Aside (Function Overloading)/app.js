// Function overloading - allows a function to have different number or parameters
// However, in JS, functions in JS are first class functions (they are objects)
// So function overloading is not available.

function greet(firstname, lastname, language) {
  language = language || 'en';

  if (language == 'en') {
    console.log('Hello ' + firstname + ' ' + lastname);
  }

  if (language == 'es') {
    console.log('Hola ' + firstname + ' ' + lastname);
  }
}

function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, 'es');
}

greetEnglish('John', 'Doe');
greetSpanish('Nick', 'Raspusse');
