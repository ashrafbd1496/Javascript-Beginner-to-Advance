var arr = [4, 5, 6, 7, 8];
var arr2 = [9, 7, 6, 3, 7];

//console.log(arr.join(' '))//output 4 5 6 7 8 string with space
//console.log(arr.join(','))//output 4 5 6 7 8 string with comma
console.log(arr.join(" | ")); //output 4 | 5 | 6 | 7 | 8

//array fill with a number
console.log(arr.fill(0)); //output [ 0, 0, 0, 0, 0 ]

//concate two array
var arr3 = arr.concat(arr2);
console.log(arr3); //output [
//     0, 0, 0, 0, 0,
//     9, 7, 6, 3, 7
//   ]

//check array that it is an array
console.log(Array.isArray(arr3)); //output true

//generate another array from an array
var arr4 = [2, 4, 6, 6, 7];
var arr5 = Array.from(arr4);

console.log('Cloned arr4 '+ arr5);
arr5.push(6)
console.log(arr5)
