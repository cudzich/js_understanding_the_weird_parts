function greet(firstName, lastName, language='d') {

  if(arguments.length == 0) {
    console.log('missing parameters!');
  }

  console.log(firstName);
  console.log(lastName);
  console.log(language);
  console.log(arguments);
}

// parameters/arguments are undefined through hoisting
greet();
