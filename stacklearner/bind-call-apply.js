// call, Apply and bind method

function myCall(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

//call and apply method almost same , has a little different

myCall.call({ a: 40, b: 34 }, 4, 4);
myCall.apply({ a: 240, b: 512 }, [23, 34]);

//myCall.apply({});
//myCall();

//w3schools call methos example
const people = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const men1 = {
  firstName: "Jakir",
  lastName: "Hossain",
};
const men2 = {
  firstName: "Jahid",
  lastName: "Hasan",
};
//console.log(people.fullName.call(person1));
//console.log(people.fullName.call(men2));

//it takes arguments
const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};
//console.log(person.fullName.call(person1, "Dhaka", "chittagong"));

//apply method, it takes agruments as array
//console.log(person.fullName.call(person1, ["Dhaka", "chittagong"]));

//bind method, it's did not call/ invoke immediately

//myCall.bind({ a: 5, b: 6 }, 7, 9)();
//myCall.bind({ a: 5, b: 6 }, 7, 9).call();

//const myBind = myCall.bind({ a: 5, b: 6 }, 7, 9);
//myBind();

const myBind = myCall.bind({ a: 5, b: 6 });
myBind(4, 5);

const testbind = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("ourbind");
    x.innerHTML = this.firstName + " " + this.lastName;
  },
};

setTimeout(testbind.display, 3000);

//another example of bind() use

const myFunc = function () {
  console.log(this.name);
};
const myObj = {
  name: "Ashraf",
  age: 34,
};
const bindFunc = myFunc.bind(myObj);
bindFunc();
