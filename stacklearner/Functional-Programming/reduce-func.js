//Reduce Methods:  work with 2 value to additioon, subtraction, object, filter etc.

var arr = [1, 2, 6, 50, 8, 9];

var sum = arr.reduce(function (prev, curr) {
  return prev + curr;
}, 100); //100 will add with the current value
console.log(sum); //output 126

//how to get max value of array with reduce function

var max = arr.reduce(function (prev, curr) {
  return Math.max(prev, curr);
}, 0);

console.log(max); //output 50

//out custom reduce function
