//Pure functon produces the same output for the same input
// has no side effects

function sqr(n) {
  return n * n;
}
console.log(sqr(3));
console.log(sqr(5));
console.log(sqr(9));

//impure function
var n = 10;

function change() {
  n = 100;
}
change();
console.log(n);

//example of impure function which has side effect
var point = {
  x: 29,
  y: 34,
};
function printPoint(point) {
  point.x = 100;
  point.y = 300;
  console.log(point);
}
printPoint(point);
console.log(point);
