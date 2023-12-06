//forEach funtion for array traverse
//forEach() modify original array and return it
var arr = [7, 5, 9, 10, 12, 34];
var sum = 0;
arr.forEach(function (value, index, arr) {
  //console.log(value, index, arr)
  sum += value;
});
console.log('sum of arr values '+sum);

//How the forEach function created
var arr2 = [7, 5, 9, 10, 12, 34];
function ourForEach(arr2) {
  for (var i = 0; i < arr2.length; i++) {
    //console.log(i); //to retrive indexes
    console.log(arr2[i]);
  }
}
ourForEach(arr2);

//using callback
var arr3 = [1, 2, 3, 4, 5, 52];
function fEach(arr3, cb) {
  for (var i = 0; i < arr3.length; i++) {
    cb(arr3[i], i, arr3);
  }
}
var sum = 0;
fEach(arr3, function (value, index, arr3) {
    console.log(value, index, arr)
  sum += value;
});
console.log('Sum of arr3 values '+sum);


//if we want to increase array value 5
var arr4 = [10, 12, 15, 18, 20, 23];

fEach(arr4, function (value, index, arr4) {
    console.log(value, index, arr4)
    arr4[index]= value +5
});
console.log(arr4)