// can be reused for looping over arr element and applying some custom
// function that is passed in.
function mapForEach(arr, fn) {

  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    );
  }
  return newArr;
}

var arr1 = [1,2,3];

// Utilize functional programming to redefine passed function
var arr2 = mapForEach(arr1, function(item) {
  return item*2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
  return item < 2;
})
console.log(arr3);


var checkPastLimit = function(limiter, item) {
  return item < limiter;
}

// use bind to return a new function with a pre-set limiter parameter.
// FUNCTION CURRYING
var arr4 = mapForEach(arr1, checkPastLimit.bind(this,3));
console.log(arr4);

// checkPastlimit bind can be simplified by creating a new function that accepts
// a limiter parameter, returns a function object, and binds the passed in limiter
// to the newly return function object
var limitCheck = function (limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
}

// alternative from above
var limitCheck2 = function(limiter) {
  return checkPastLimit.bind(this, limiter);
}

var arr5 = mapForEach(arr1, limitCheck(3));
var arr6 = mapForEach(arr1, limitCheck2(1));
console.log(arr5);
console.log(arr6);
