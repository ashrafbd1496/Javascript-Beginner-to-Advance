//Function Expression: function can react as variable

var funcExp = function add(a, b) {
  return a + b;
};
console.log(funcExp(12, 45)); // output 57

//a function without name called: anonymous function
var funcExp = function (a, b) {
  return a + b;
};
console.log(funcExp(12, 45)); // output 57

//another example of anonymous function
setTimeout(function () {
  console.log("Wait 3 second to see me");
}, 3000);

//we can save a function in a variable
var saveFucn = funcExp;
console.log(saveFucn(5, 89)); //output 94

//here is a important thing that we called savFucn after setTimeout() function but yet it executed before setTimeout() function. It's call async
