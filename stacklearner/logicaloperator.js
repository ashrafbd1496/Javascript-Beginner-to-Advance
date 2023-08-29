// && || !

// A && B
// true && true = true
// true && false = false
// false && true = false
// true && true = true
// false && false = false

// A || B
//true || true = true
//true  || false = true
//false || true = true
//false || false = false

var a = 10;
var b = 20;
var c = 40;
var d = 50;

// and operator
if (a > b && c > d) {
  console.log("A is greater that B and c is greater than D");
} else {
  console.log("At least one condition is false");
}
//or operator

if (a > b || c > d) {
    console.log("A is greater that B or c is greater than D");
  } else {
    console.log("At least one condition is false");
  }

  //not operator
  var check = !(a>b)
  console.log(check)