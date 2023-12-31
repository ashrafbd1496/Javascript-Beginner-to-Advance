# Javascript Beginner to Advance course 
    Stack Learner, Sumit Shaha, W3Schools

### To run js program in vs code terminal we can use - command

```
node filename.js
```

### Notes:

**we can print or save the page using window.print();**

_we need to use document.write() for testing purpose only._

- A good practice is to put spaces around operators ( = + - \* / ):

_Fixed values are called Literals._

1.  Numbers are not allowed as the first character in names
2.  All JavaScript identifiers are case sensitive.
3.  Hyphens are not allowed in JavaScript. They are reserved for subtractions.

> JavaScript programmers tend to use camel case that starts with a lowercase letter: firstName, lastName, masterCard, interCity.

> Code after double slashes // or between /_ and _/ is treated as a comment.

### When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

### The difference between var and let is as follows:

> Variables declared with var can be declared inside a scope and accessed from outside of that scope (function or global scope).
> On the other hand, variables declared with let are block-scoped, meaning they can only be accessed within the block (e.g., inside an if statement or loop) in which they are declared and are not accessible from outside of that block.

> Var and let both are hoisted but var show undefined and let show work as temporal dead zone.
> let and const have block scope.

> const could not be reassigned. const variables must be assigned a value when they are declared:

> Note that strings are compared alphabetically:

> If you add a number and a string, the result will be a string!

=======

> A const variable cannot be reassigned

> JavaScript const variables must be assigned a value when they are declared:

> we can Change the elements of constant array, can Change the properties of constant object

> A callback is a function passed as an argument to another function.This technique allows a function to call another function. A callback function can run after another function has finished.

> JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

### Here are some other ways to write the callback function (x) => x >= 0:

```
function is_positive(x) { return x >= 0; }
const isPositive = (x) => x >= 0;
var isPositive = function(x) { return x >= 0; };
```

### Array:

> ডিরেক্ট অ্যারে কপি করাকে কপি বাই রেফারেন্স বলে, আর স্লাইস ইউজ করে কপি করাকে কপি বাই ভ্যালু বলে। এখানে শুধু ভ্যালু বা আইটেমগুলোই কপি হবে নতুন অ্যারেতে। কিন্তু দুইটা অ্যারে সম্পূর্ন পৃথক পৃথক দুইটা অবজেক্ট

> The Difference Between Arrays and Objects
> In JavaScript, arrays use numbered indexes. In JavaScript, objects use named indexes . Arrays are a special kind of objects, with numbered indexes.

> Create new array line newjsArray = new Array() or newjsArray = [];
> The typeof operator returns object because a JavaScript array is an object.

> JavaScript does not support associative arrays. We should use objects when we want the element names to be strings (text).We should use arrays when you want the element names to be numbers.

> To recognize an Js Array we can us Array.isArray(); or can use instanceof like- arrayName instanceof Array;

### Functions

> we can use variable, string, boolean, array or object as function argument

> Passing by value: In pass-by-value, a copy of the original variable is created and passed to the function. Any changes made to the copy of the variable in the function do not affect the original variable.

> Passing by reference: in pass-by-reference, the address of the original variable is passed to the function. Any changes made to the original variable in the function will also affect the original variable.

> The () operator in JavaScript is called the call operator. It is used to call a function.

### Execution context and Stack

> জাভাস্ক্রিপ্ট এর গ্লোবাল এক্সিকিউশন কন্টেক্সট হচ্ছে ব্রাউজারের window অবজেক্ট। কোনো গ্লোবাল ভ্যারিয়েবল ডিক্লেয়ার করা বা window অবজেক্ট এ অ্যাসাইন করা একই কথা

> হোইস্টিং এটা জাভাস্ক্রিপ্ট এর ডিফল্ট বিহেভিয়ার , এজন্যে আসলে আমরা চাইলে একটা ফাংশন ডিক্লেয়ার করার আগে সেটাকে কল করতে পারি।

> অটোম্যাটিকালি গ্লোবাল ভ্যারিয়েবল জাভাস্ক্রিপ্ট এর ‘strict mode’ এ কাজ করবে না।

> JavaScript has 3 types of scope:

1. Block scope
2. Function scope
3. Global scope

> Variables declared inside a { } block cannot be accessed from outside the block. Variables declared with the var keyword can NOT have block scope.Variables declared inside a { } block can be accessed from outside the block.

> Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

> A closure is a function having access to the parent scope, even after the parent function has closed.

> alert is used to display messages or information to the user, whereas prompt is used to gather input from the user in the form of text.

> The console.dir() function is a method available developer console for logging an object's properties in a detailed and interactive way

> ফাংশন বানানোর সাথে সাথেই সেটাকে কল করতে চাই সেক্ষেত্রে আমরা ইফি Immediately Invoked Function Expressions (IIFE) টেকনিক ইউজ করতে পারি

### Stack Learner

> constructor name fist letter must be capital
> Prototype হইলো অবজেক্ট এর parent, তার যতগুলো অবজেক্ট তৈরি করা হবে, সবাই এই prototype এর প্রপার্টি পাবে। স্বভাব চরিত্র parent এর মত হবে আর কি।
> এখন যদি এমন হয় ধরেন একটা অবজেক্ট এ একটা ফাংশন ৫০০ বার ডাকা লাগছে, কিন্তু ফাংশনের কোন পরিবর্তন দরকার হয়নি, তো আমার ৫০০ বার কল করা টা বোকামি, শুধু শুধু রিসোর্সেস নষ্ট। তার চাইতে prototype এর কাছে ফাংশন টা রেখে আসতে হবে। যেহেতু সবগুলোর prototype একই, তো এই ফাংশন এক ডাকে পাওয়া যাবে।

### this:

    Functons are special type of object in javascript which is executable.

    What is this?
    In JavaScript, the this keyword refers to an object.

    Which object depends on how this is being invoked (used or called).

    The this keyword refers to different objects depending on how it is used:

    In an object method, this refers to the object.
    Alone, this refers to the global object.
    In a function, this refers to the global object.
    In a function, in strict mode, this is undefined.
    In an event, this refers to the element that received the event.
    Methods like call(), apply(), and bind() can refer this to any object.

> The call() and apply() methods are almost the same, but they have a slight difference. The call() method takes the arguments as individual parameters, while the apply() method takes the arguments as an array.

> is the process of hiding the implementation details of an object and only exposing the essential features to the user.

> Ternary Operator - condition ? ture side : false side
> logical And shortform- isOk && console.log('Everything is OK')
> logical OR shortform- var fullName = name || "HM Nayem";

### Array
    Insert 10 and 34 to index 2 without removing any data
    var arr = [1,2,3,4,5,6]
    arr.splice(2, 0, 10, 34)
    console.log(arr)

    //will remove 1 data ex  3rd no data
    arr.splice(3, 1); //here 3 is position and 1 is number of data
    console.log(arr);

    //remove will remove index 2 data and will insert there 21
    var newArr = [4, 5, 8, 10, 54, 20];
    newArr.splice(2, 1, 21);
    console.log(newArr);

    String + Array = object

    delete obj.x to delete a property from object

    compare two objet console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

### Functions
    Every functions need to return something either it will return undefined
    like console.log('hello')// output hello and undefined becasue console.log()
    function did not return anything.

    After using return function will end there, will not execute anything more

    a. Global variable is accessible from anywhere
    b. Parent function has no access of child function
    c. Child function has access of parent function variable

    forEach() function modify original array and return array

    map() traverse an array and  make a copy of array finally return a new array

### JS DOM
	HTML dom event attribtue use korar khetre function ta global scope a likhte hobe, nahole kaj korbe na
	
>	shorthand version of document ready
	<script>
	 $(function(){
	 //code goes here
	 });
	</script>
	
	Modern style using async/await
	asyc funciton documentReady(){
	await window.load;
	 //code goes here
	 }
	 documentReady();
> 
	
	

    

[জাভাস্ক্রিপ্ট ডেভেলপারদের জন্য 40টি প্রয়োজনীয় ইন্টারভিউ প্রশ্ন](https://hashdork.com/bn/interview-questions-for-javascript-developers/)

[Javascript Built-in Functions](https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm)

[Awesome README](https://github.com/matiassingers/awesome-readme)

[Awesome README in Dev.to](https://dev.to/documatic/awesome-readme-examples-for-writing-better-readmes-3eh3)

[Readme Generator](https://rahuldkjain.github.io/gh-profile-readme-generator/)

[Make Readme](https://www.makeareadme.com/)
