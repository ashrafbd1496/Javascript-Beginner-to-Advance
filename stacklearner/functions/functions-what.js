// Invoking  a function

function add(a, b) {
  var result = a + b;
  console.log(result);
}
function sub(a, b) {
  var result = a - b;
  console.log(result);
}
function mul(a, b) {
  var result = a * b;
  console.log(result);
}
add(45, 89);
sub(89, 25);
mul(12, 32);

// function less way

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

sum1 = 0;
for (var i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}
console.log(sum1);

sum2 = 0;
for (var i = 0; i < arr2.length; i++) {
  sum2 += arr2[i];
}
console.log(sum2);

sum3 = 0;
for (var i = 0; i < arr3.length; i++) {
  sum3 += arr3[i];
}
console.log(sum3);

//using a function
function arrFunc(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
arrFunc(arr1);
arrFunc(arr2);
arrFunc(arr3);
