var a = 10;

function x() {
  var a = 30;
  function y() {
    var a = 20;
    console.log("value of y " + a);
  }
  y(); //output 20
  console.log("value of x " + a);
}
x(); //output 30
console.log(a); // output 10

function test(n) {
  function a() {
    return n % 3 === 0;
  }

  function b() {
    return n % 5 === 0;
  }

  if (a() && b()) {
    console.log(n + " n is divided by both 3 and 5");
  } else {
    console.log("Not a valid number");
  }
}
test(10); //output not a valid number
test(15); //output 15 is divided by both 3 and 5


Remember:   a. Global variable is accessible from anywhere
            b. Parent function has no access of child function
            c. Child function has access of parent function variable
