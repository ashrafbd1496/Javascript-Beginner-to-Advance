//Callback function explained

// function callBack(a, b) {
//   var c = a + b;
//   var d = a - b;
//   var result = sum(c, d);
//   return result;
// }
// function sum(a, b) {
//   return a + b;
// }
// console.log(callBack(5, 6));//output 10

//now using sum function as callback
function callBack(a, b, cb) {
  var c = a + b;    //5+6 =11
  var d = a - b;    //5-6 = -1
  var result = cb(c, d);
  return result;
}
  function sum(a, b) {
    return a + b;
  }
var rs = callBack(5, 6, sum);
console.log(rs);    //output 10

var rs2 = callBack(5,6, function(c,d){
    //console.log(c,d)
    return c-d  //11--1=12
})
console.log(rs2)    //output 12

