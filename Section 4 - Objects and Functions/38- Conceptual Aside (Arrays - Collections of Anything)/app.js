let arr = [
  2,
  false,
  {
    name: "Tony"
  },
  function(name) {
    let greet = 'Hello ';
    console.log(greet + name);
  }
];

arr[3](arr[2].name);
