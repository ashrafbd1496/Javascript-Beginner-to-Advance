var arr = [1, 2, 3, 4, 5, 6];

//insert 10 and 34 to index 2 without removing any data
arr.splice(2, 0, 10, 34);
console.log(arr);

//arr[1]= 9
//arr.push(9) //output 9 added at last
//arr.unshift(9)//added 9 at first
//console.log(arr)

// remove data
// arr[2] = undefined
// console.log(arr) //output [ 1, 2, undefined, 34, 3, 4, 5, 6 ]

arr.pop(); //will remove data from last
arr.shift(); //will remove data from begin
console.log(arr);

//will remove 1 data ex  3rd no data
arr.splice(3, 1); //here 3 is position and 1 is number of data
console.log(arr);

//remove 1 more data
arr.splice(2, 2);
console.log(arr);

//remove will remove index 2 data and will insert there 21
var newArr = [4, 5, 8, 10, 54, 20];
newArr.splice(2, 1, 21);
console.log(newArr);
