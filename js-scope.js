//local scope
function localScope(){
    var local = 'I am local ot my own fumction';
    console.log(local);
}
localScope();

//but if we call as below , will show error!
function localScope(){
    var local = 'I am local ot my own fumction';
   
}
localScope();
//console.log('we can call local herer ' + local);

//Global Scope
var globalVar = 'I am a Global Variable';

function globalScope(){
    console.log('Inside a function: ' + globalVar);

}
globalScope();
console.log('Outside Function: ' + globalVar);

// Local and Global Function
function aGlobalFunc() {
    console.log('Global Function');
    function localFunc() {
       console.log('Local Function');
    }
    localFunc();
 }
 aGlobalFunc();

 //but if we call localFunc outsite aGlobalFunc , we will get an error;
 function aGlobalFunc() {
    console.log('Global Function');
    function localFunc() {
       console.log('Local Function');
    }
    localFunc();
 }
 aGlobalFunc();
 //localFunc();

 // local and global object
 var person = {
    name: 'Ashraf Uddin',
    age: 32
 }
 console.log(person);

 // using template literals backticks (`) 
 console.log(`Global Object with template literal, ${person.name}`);

 //Local object
 function objFunc(){
    var localObj = {
        name: "Local Object",
        subject: "javascript"
    }
    console.log(localObj);
 }
 objFunc();

 //will show error for calling localObject outside function
 //console.log(localObj);

 //Parent and child function
 function parentFunction() {
    //some codes here
    function childFunction() {
       //some more codes
    } 
 }

 //লেক্সিকাল স্কোপিং(Lexical Scoping): we can call a, in childFunction 
 function parentFunction() {
    var a = 6;
    function childFunction() {
       var b = 4;
       console.log('Sum: ' + (a + b));
    } 
    childFunction();
 }

 // Block Scope
 {
    let x = 2;
    console.log('Block scope ' + x);
 }

//console.log(x); x can not be used here

//Variables declared inside a { } block can be accessed from outside the block.
{
    x = 2;

}
console.log('variable outsite scope '+ 2); //x can be used here

