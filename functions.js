/**
 * function aFunc(parameters){
    //do something with the parameters
    // return result
}
aFunc(arguments);
*/

//function statement
function funcName(){
    //statements
}

//function expression
var myFunc = function(){
    //statement
}

//we can use variable, string, boolean, array or object as function argument
function printName(name, age){
    console.log('my name is : ' + name + ' and my age is: ' + age);
}

printName("Ashraf", 35);

//we can pass a function as argument in a function
function passFunction(name, callback){
    var myAge = 20;
    callback(myAge);
    console.log('Use of function inside function and my name is: ' + name);
}
function hello(age){
    //hello is callback function
    console.log('I am passed through argument and my age is: ' + age);
}

passFunction('Ashraf', hello);

//retun function from a funciton
function mainFunc(name){
    console.log('Its Return a function like ' + name);
    return function retFunc(ret){
        console.log('this function will be returened as '+ ret)
    }
}
mainFunc('retFunc')('Returned Function');

// pass-by-value
function passbyValue(a){
    a = a+1;
    console.log('The value of a in passByValue is:', a);
}
var a = 10;
console.log('The value of a after passByValue is:', a);

// passing by reference
function passbyReference(b){
    b[0] = b[0] + 1;
    console.log('The value of b[0] in passByReference is:', b[0]);
}
var b = [11];
passbyReference(b);
console.log('The value of b[0] after passByReference is:', b[0]);


// opportunity of function is get rid of rewrite code 
function bFunc(a, b){
    var sum = a + b;
    return sum ;

}
console.log(bFunc(85, 10));
console.log(bFunc(25, 12));
console.log(bFunc(3, 14));
console.log(bFunc(42, 58));

// Functions Used as Variable Values

let x = toCelsius(77);
let text = 'the temperature is ' + x + ' Censius ';
console.log(text);

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

