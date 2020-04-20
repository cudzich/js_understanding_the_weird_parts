
// long running function
function waitTime(ms) {
  waitThisAmount= ms + new Date().getTime();
  while(new Date() < waitThisAmount) {}
  console.log('finished function');
}


// event handler, in this case its triggered by a click.
function clickHandler() {
  console.log('click event!');
}

// listen for event and execute the event handler
document.addEventListener('click', clickHandler);

// invoke async funcion & inform user of GEC finish.
waitTime(3000);
console.log('finished GEC');
