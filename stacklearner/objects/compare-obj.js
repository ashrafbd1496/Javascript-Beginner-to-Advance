//comparing two objects
var obj1 = {
  a: 43,
  b: 47,
};

var obj2 = {
  a: 43,
  b: 47,
};
console.log(obj1 === obj2); //output false

//custom  way
if (obj1.a === obj2.a && obj1.b === obj2.b) {
  console.log(true); //output true
} else {
  console.log(false);
}

// Easiest way

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); //output true
