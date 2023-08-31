//Array is a Data Structure where we can organize multiple data under a single variable

//array index start from zero(0)

var myArr = [1, 2, 3, 4, 5];
console.log(myArr[2]); //output 3

//last data
console.log(myArr[4]); //output 5

//add new item
myArr[5] = 6;
console.log(myArr); //output [ 1, 2, 3, 4, 5, 6 ]

//insert data in any index
myArr[12] = 7;
console.log(myArr);

//lenth
console.log(myArr.length);

//override
myArr[5] = 10;
console.log(myArr);

//array creation touch way(constructor pattern)
//var arr = []
var arr = Array(1, 2, 3);
console.log(arr);

