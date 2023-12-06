//map() tranverse an array and  make a copy of array finally return a new array
var arr = [1, 2, 3, 4, 5];

var sqrArr = arr.map(function (value) {
  //return Math.floor(Math.random() * 100);
  return value * value;
});
console.log(arr); // Original array is unchanged
console.log(sqrArr); // New array with modified values

//how the map() function  created
//step -1
console.log(`How the map() created\n step -1`);

function myMap(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i] * arr[i];
    newArr.push(temp);
  }
  return newArr;
}
console.log(myMap(arr));

//Step -2
console.log("Step -2");

function myMap(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = (function (value) {
      return value * value * value;
    })(arr[i]);
    newArr.push(temp);
  }
  return newArr;
}

var qb = myMap(arr, function (value) {
  return value * value * value;
});

console.log(qb);

// using forEach()
// var arr2 = [3, 4, 9, 7];
// var fArr = [];

// arr2.forEach(function (value) {
//   fArr.push(Math.floor(Math.random() * 100));
// });

// console.log(fArr);
// console.log(arr2);
