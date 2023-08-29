function jsCloser(){
    var x = 10;
    return function(){
        var y =23;
        console.log('Sum: ' + (x+y));

    }
}
jsCloser()(); 
// here parent funciton called at first () and child function callted at second ();

//or we can put parent function in a variable after execution
var closerVar = jsCloser()
var total = closerVar();
console.log(total);

function addNumbers() {
    var num1 = prompt("Enter the first number:");
    var num2 = prompt("Enter the second number:");
  
    var sum = parseInt(num1) + parseInt(num2);
  
    alert("The sum of " + num1 + " and " + num2 + " is " + sum);
  }
  
  addNumbers();


//var hr = document.createElement("hr");
//document.body.appendChild(hr);

const add = function(){
    let counter =0;
    return function (){
        counter +=1; 
        return counter;
    }
}();
function myCounter(){
    document.getElementById("counter").innerHTML = add();
}

//console.dir(myCounter);

/**
 * Function to add two numbers
function addNumbers(a, b) {
    return a + b;
  }
  
  // Taking input for the first number using alert
  const num1 = parseFloat(prompt('Enter the first number:'));
  
  // Taking input for the second number using alert
  const num2 = parseFloat(prompt('Enter the second number:'));
  
  // Calling the addNumbers function and displaying the result using alert
  const sum = addNumbers(num1, num2);
  alert(`Sum: ${sum}`);
  */

  // the way to use promt and alert
  const userInput = prompt("Please enter your name:");
  if (userInput !== null) {
   alert("Hello, " + userInput + "!");
  } else {
    alert("User cancelled the prompt.");
  }
  