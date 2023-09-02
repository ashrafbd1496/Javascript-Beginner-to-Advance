// Reverse an Array manually

var arrRev = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < arrRev.length / 2; i++) {
  var temp = arrRev[i];
  arrRev[i] = arrRev[arrRev.length - 1 - i];
  arrRev[arrRev.length - 1 - i] = temp;
}
console.log(arrRev);

//another way
var ar = [1, 2, 3, 4, 5];

for (i = ar.length - 1; i >= 0; i--) {
  ar.push(ar[i]);
}
console.log(ar.slice(ar.length / 2));

//Reverse using method
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.reverse());
