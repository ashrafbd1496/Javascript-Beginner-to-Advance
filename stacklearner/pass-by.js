//primitive data pass by value
var n = 10;
function change(n) {
  n = n + 100;
  console.log(n);
}
change(n);
console.log(n);

//non-primitive or object type data pass by reference
var obj = {
  a: 10,
  b: 20
};
function changeMe(obj) {
  obj.a = obj.a + 100;
  obj.b = obj.b + 100;
  console.log(obj);
}
changeMe(obj);
console.log(obj);
