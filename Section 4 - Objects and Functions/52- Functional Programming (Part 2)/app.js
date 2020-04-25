_.times(3, function() { console.log('hi')});

var arr = _.map([1,2,3], function(item) { return item*2 });
console.log(arr);

var random = _.random(1,10);
console.log('random: ', random);
