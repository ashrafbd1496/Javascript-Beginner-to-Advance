# Sumit Saha Javascript Tutorial Practice
### To run js program in vs code terminal we can use - command
```
node filename.js
```

### Notes: 
__we can print or save the page using window.print();__

*we need to use document.write() for testing purpose only.*

* A good practice is to put spaces around operators ( = + - * / ):

_Fixed values are called Literals._

1.  Numbers are not allowed as the first character in names
2.  All JavaScript identifiers are case sensitive.
3.  Hyphens are not allowed in JavaScript. They are reserved for subtractions.

> JavaScript programmers tend to use camel case that starts with a lowercase letter: firstName, lastName, masterCard, interCity.

> Code after double slashes // or between /* and */ is treated as a comment.

### When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

### The difference between var and let is as follows:

> Variables declared with var can be declared inside a scope and accessed from outside of that scope (function or global scope).
On the other hand, variables declared with let are block-scoped, meaning they can only be accessed within the block (e.g., inside an if statement or loop) in which they are declared and are not accessible from outside of that block.

>Var and let both are hoisted but var show undefined and let show work as temporal dead zone.
> let and const have block scope.

> const could not be reassigned. const variables must be assigned a value when they are declared:

> Note that strings are compared alphabetically:

> If you add a number and a string, the result will be a string!


=======
> A const variable cannot be reassigned

> JavaScript const variables must be assigned a value when they are declared:

> we can Change the elements of constant array,  can Change the properties of constant object

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
In JavaScript, arrays use numbered indexes. In JavaScript, objects use named indexes . Arrays are a special kind of objects, with numbered indexes.

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

> হোইস্টিং  এটা জাভাস্ক্রিপ্ট এর ডিফল্ট বিহেভিয়ার , এজন্যে আসলে আমরা চাইলে একটা ফাংশন ডিক্লেয়ার করার আগে সেটাকে কল করতে পারি।

> অটোম্যাটিকালি গ্লোবাল ভ্যারিয়েবল জাভাস্ক্রিপ্ট এর ‘strict mode’ এ কাজ করবে না।

> JavaScript has 3 types of scope:
1. Block scope
2. Function scope
2. Global scope

> Variables declared inside a { } block cannot be accessed from outside the block. Variables declared with the var keyword can NOT have block scope.Variables declared inside a { } block can be accessed from outside the block.

> Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

> A closure is a function having access to the parent scope, even after the parent function has closed.

> alert is used to display messages or information to the user, whereas prompt is used to gather input from the user in the form of text.

> The console.dir() function is a method available  developer console for logging an object's properties in a detailed and interactive way

> ফাংশন বানানোর সাথে সাথেই সেটাকে কল করতে চাই সেক্ষেত্রে আমরা ইফি Immediately Invoked Function Expressions (IIFE) টেকনিক ইউজ করতে পারি

> 


[Javascript Built-in Functions](https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm)

[Awesome README](https://github.com/matiassingers/awesome-readme)

[Awesome README in Dev.to](https://dev.to/documatic/awesome-readme-examples-for-writing-better-readmes-3eh3)

[Readme Generator](https://rahuldkjain.github.io/gh-profile-readme-generator/)

[Make Readme](https://www.makeareadme.com/)







    
