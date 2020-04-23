/* function statement, buildFunctions
*  declare empty arr
*  for loop, from 0-2
*    push a function expression to array
*      console.log(i)
*
*  return array
*
*  x = run buildfunctions
*  run individual function expressions f[0]()
*/
function buildFunctions() {
  var arr = [];

  for(var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    })
  }

  return arr;
}

var fs = buildFunctions();
fs[0](); // PRINTS 3
fs[1](); // PRINTS 3
fs[2](); // PRINTS 3

// ******** //
// invoke a function to instantiate its own EC
// where we can pass in a reference to outer
// environment and attach it to the function expression
function build() {
  var arr = [];
  for(var i = 0; i < 3; i++) {
    arr.push(
      (function(j){
        return function() {
          console.log(j);
        }
      }(i))
    )
  }
  return arr;
}

var fd = build();
fd[0](); // PRINTS 1
fd[1](); // PRINTS 2
fd[2](); // PRINTS 3
