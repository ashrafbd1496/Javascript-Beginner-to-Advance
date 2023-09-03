//we can access object using dot notaion and array notation
//dot notation
var point = {
  x: 34,
  y: 64,
  z: 87,
};
//console.log(point.y); //output 64
//console.log(point.y + point.z); //output 151

var show = 'z'
console.log(point[show])

//array notation
//when we did not know with which data we need to work/console or it will come with variable/ dynamically then we use array notation. Otherwise always we use dot notation
//console.log(point["x"]); //output 34
//console.log(point["z"]); //output 87
