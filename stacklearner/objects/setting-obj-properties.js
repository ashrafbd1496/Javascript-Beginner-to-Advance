var obj = {
    x: 20,
    y: 34,
    z:56
}

//add new properties
obj.d = 56
console.log(obj)//output { x: 20, y: 34, z: 56, d: 56 }

//check a properties which is not exist
console.log(obj.b)//output undefined

//update existing properties
obj.x = 50
console.log(obj) //output { x: 50, y: 34, z: 56, d: 56 }

//add properties using variable and array notation
var newProp = 'w'
obj[newProp]= 65
console.log(obj) //output { x: 50, y: 34, z: 56, d: 56, w: 65 }

