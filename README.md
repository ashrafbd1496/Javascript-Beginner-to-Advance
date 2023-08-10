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

<<<<<<< HEAD
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
[Javascript Built-in Functions](https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm)

[Awesome README](https://github.com/matiassingers/awesome-readme)

[Awesome README in Dev.to](https://dev.to/documatic/awesome-readme-examples-for-writing-better-readmes-3eh3)

[Readme Generator](https://rahuldkjain.github.io/gh-profile-readme-generator/)

[Make Readme](https://www.makeareadme.com/)







    
