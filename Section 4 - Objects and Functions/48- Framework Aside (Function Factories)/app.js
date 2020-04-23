function makeGreeting(language) {

  return function(firstName, lastName) {

    // language points to the EC it was created in
    if (language == 'en') {
      console.log('Hello ' + firstName + ' ' + lastName);
    }

    if (language == 'es') {
      console.log('Holla ' + firstName + ' ' + lastName);
    }

    return language;

  }

}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

// language var points to the EC it was created in
// makeGreeting('en')
var test = greetEnglish('John', 'Doe');
console.log('lang, ', test);
// language var points to the EC it was created in
// makeGreeting('es')
greetSpanish('John', 'Doe');
