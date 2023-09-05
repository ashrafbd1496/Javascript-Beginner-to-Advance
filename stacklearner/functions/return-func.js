function sumAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
var a = sumAll(1, 4, 5);
var b = sumAll(1, 10, 90);
console.log(a, b); //output 10 101

//retrun object
function person(name, email) {
  return {
    name: name,
    email: email,
  };
  console.log("It will not shown");
}
var p = person("Ashraf", "asraf1496@gmail.com");
console.log(p); // output { name: 'Ashraf', email: 'asraf1496@gmail.com' }
