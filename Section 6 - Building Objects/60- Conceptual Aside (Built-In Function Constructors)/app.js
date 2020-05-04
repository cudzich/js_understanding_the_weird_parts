// We can enhance the default objects available in JS by adding to the
// objects prototype, below we add a isGreaterThan(limit) function to the
// String objects prototype. Now every String obj has access to this method.
String.prototype.isGreaterThan = function(limit) {
  return this.length > limit;
}

console.log("John".isGreaterThan(10));

// FYI: JS doesn't automatically wrap a primitve number to a Number object.
Number.prototype.isPositive = function() {
  return this > 0; // 'this' is the primitive value of number object.
}

console.log(Number(3).isPositive());
