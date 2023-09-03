var obj = {
  x: 45,
  y: 56,
  z: 67,
};
// get the keys in object
console.log(Object.keys(obj)); //output [ 'x', 'y', 'z' ]

//get the values of object
console.log(Object.values(obj)); //output [ 45, 56, 67 ]

//get the all keys and values of an object
console.log(Object.entries(obj));
//output [ [ 'x', 45 ], [ 'y', 56 ], [ 'z', 67 ] ]

var obj2 = obj;
obj2.x = 90;
obj2.y = 89;
console.log(obj); //output { x: 90, y: 89, z: 67 }

console.log(obj2); //output { x: 90, y: 89, z: 67 }
//changed obj properties too because obj2 changed the reference of obj properties

var obj2 = Object.assign({}, obj); //created new object
obj2.x = 34;
console.log(obj); //output { x: 90, y: 89, z: 67 }

console.log(obj2); //output { x: 34, y: 89, z: 67 }
