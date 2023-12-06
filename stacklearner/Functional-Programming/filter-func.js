//filter() function: it use to generate new array from an existing array using some condition like odd/even number, multiply with 5 or any, or another specific condition

var arr = [2, 4, 5, 6, 8];

var filterArray = arr.filter(function (value) {
  //return value%2 ===0
  //return value%2 ===1
  return value > 4;
});
console.log(filterArray); //output [ 2, 4, 6, 8 ]
console.log(filterArray); //output [[ 5 ][ 5 ]
console.log(filterArray); //output [ 5, 6, 8 ][ 5, 6, 8 ][ 5, 6, 8 ]

// our custom filter function
//step -1
function myFilter(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}
console.log(myFilter(arr)); //output [ 2, 4, 6, 8 ]

//step - 2
var arr2 = [2, 9, 5, 3, 8];
function myFilter(arr2, clbk) {
  var newArr = [];
  for (var i = 0; i < arr2.length; i++) {
    if (clbk(arr2[i], i, arr2)) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}
console.log(
  myFilter(arr2, function (value) {
    return value % 2 === 1;
  })
);

console.log(
  myFilter(arr2, function (value) {
    return value > 2;
  })
);
