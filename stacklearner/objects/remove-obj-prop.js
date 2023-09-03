//remove properties from object
var obj = {
  x: 43,
  y: 34,
  z: 56,
};

delete obj.x;
console.log(obj); //output { y: 34, z: 56 }

