//Global Rules
console.log(this);

console.log(this === window);

function helloThis(){
    console.log(this);
}
helloThis();

function unNamed() {
    this.name = 'Ashraf Uddin';
 }
 
 unNamed();
console.log(name);


//Object Rules

var myCustomObj = {
    name: 'Ashraf Uddin',
    age: 35,
    job: 'Service',
    msg: function() {
         console.log('My name is '+ this.name);
    },

    isTrue: function(){
        console.log(this === myCustomObj);
    }
 }

 myCustomObj.isTrue();

 var myCustomObj = {
    name: 'Umar Faruque',
    age: 21,
    job: 'Student',
    anotherObj: {
       name: 'Umar',
       msg: function() {
          console.log('My name is: ' + this.name);
       }
    }
 }
 myCustomObj.anotherObj.msg();


 var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
       name: 'Ahmed Zonayed',
       value: function() {
          console.log(this);
       }
    }
 }
 myCustomObj.anotherObj.value();

 // Clear Rules(স্পষ্ট রুল)সঃ 

 var myCustomObj = {
    name: 'Jakir Hossain',
    age: 21,
    job: 'Student',
    anotherObj: {
       name: 'Ahmed Zonayed',
       value: function() {
          console.log(this);
       }
    }
 }
 myCustomObj.anotherObj.value.call(myCustomObj);

 // new কীওয়ার্ড রুলসঃ 
 function Person(name) {
    this.name = name;
  }
  
  const person = new Person("Ashraf Uddin");
  
  console.log(person.name); // "John Doe"



  class newClass {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const newclass = new newClass("Umar Faruque");
  
  newclass.sayHello(); // "Hello, my name is John Doe"

  