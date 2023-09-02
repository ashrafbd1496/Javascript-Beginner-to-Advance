//Multidimensional array
var marks = [
  [45, 67, 86, 64, 90],
  [55, 67, 90, 87, 98],
  [67, 88, 98, 84, 79],
];
//console.log(marks[0]);
//console.log(marks[0][0]);

//console.log(marks[1]);

for (var i = 0; i < marks.length; i++) {
  for (var j = 0; j < marks[i].length; j++) {
    console.log("Element " + i + ": " + marks[i][j]);
  }
} //output as bellow
// Element 0: 45
// Element 0: 67
// Element 0: 86
// Element 0: 64
// Element 0: 90
// Element 1: 55
// Element 1: 67
// Element 1: 90
// Element 1: 87
// Element 1: 98
// Element 2: 67
// Element 2: 88
// Element 2: 98
// Element 2: 84
// Element 2: 79
