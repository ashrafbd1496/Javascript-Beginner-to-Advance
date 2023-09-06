//First class function
// 5. we can pass function as an argument, it's call higher order function

function add(a, b) {
  return a + b; //5+6 =11
}

function manipulate(a, b, func) {
  var c = a + b; //5+6 =11
  var d = a - b; //5-6 = -1


  //   function multiply() {
  //     var m = func(a, b);
  //     return c * d * m;   //11*-1*11 =-121
  //   }


  return function () {
    var m = func(a, b);
    return c * d * m; //11*-1*11 =-121
  };
}

var result = manipulate(5, 6, add);
console.log(result());

// 6. we can return function from another function
