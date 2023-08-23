function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log(myFather);
console.log(myMother);

//Person.country = "Bangladesh";
Person.prototype.country = "Bangladesh";
console.log(myMother.country);

const ashraf = new String("ashraf");
console.dir(ashraf);
console.log(ashraf.toLocaleUpperCase());

//inster custom function into built in prototype(It should not)

String.prototype.doingFun = function () {
  return "I am doing Fun!";
};

const x = "Insert function into built in prototype";
console.log(x.doingFun());
