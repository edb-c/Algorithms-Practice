var _ = require("underscore");

var evens = _.reject([1, 2, 3, 4, 5, 6], num => num % 2 != 0);

console.log("Evens");
console.log(evens);
