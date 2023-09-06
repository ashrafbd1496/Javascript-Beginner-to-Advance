//First Class function
// 1. A Function can be stored in variable
function add(a, b) {
  return a + b;
}
var sum = add;
console.log(sum(4, 6));

// 2. A function cab be stored in an Array

var arr = [];
arr.push(add);
//console.log(arr)
console.log("Function stored in an array " + arr[0](6, 8));

// 3. A function can be stored in an object

var obj = {
  x: 23,
  y: 45,
  plus: add,
};
console.log("Function stored in object " + obj.plus(5, 6));

// 4. we can create functoion as we need
setTimeout(function () {
  console.log("wait to see me created");
}, 3000);
