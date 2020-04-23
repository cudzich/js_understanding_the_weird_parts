function sayHiLater() {
  var greeting = 'Hi!';

  // setTimeout(function, time)
  setTimeout(function() {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

// build a function that accepts a callback
function tellMeWhenDone(callback) {
  var a = 1000; // somework
  var b = 22220; // somework

  callback(); // the 'callback', it runs the function I give it
}

tellMeWhenDone(function() {
  alert('I am done');
})
