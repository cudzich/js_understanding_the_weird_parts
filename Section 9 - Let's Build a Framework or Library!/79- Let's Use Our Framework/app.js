var g = G$('John', 'Doe');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

// Attach click event to login button
$('#login').click(function() {

  // create a greeter object
  var loginGrtr = G$('John', 'Doe');

  // hide the html login form
  $('#logindiv').hide();

  // Set language based on what is chosen (thanks to jQuery)
  // Execute HTMLGreeting, pass in the selector and boolean for formal
  // log to console.
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})
