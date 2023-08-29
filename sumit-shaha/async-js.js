//JavaScript is a synchronous programming language at its core.

console.log('Line 1 code');

    // setTimeout is an asynchronous function
    setTimeout(function(){
        console.log('after 2 second executing Line 2 code');
    },2000);


console.log('Line 3 code'); 

//When using the JavaScript function setTimeout(), we can specify a callback function to be executed on time-out:

setTimeout(jstimeout, 3000);

function jstimeout() {
  console.log('delayed settimeout');
}

// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead

setTimeout(function() { jscallback("I love You !!!"); }, 3000);

function jscallback(value) {
  console.log(value);
}

//When using the JavaScript function setInterval(), we can specify a callback function to be executed for each interval:

setInterval(myinterval, 1000);

function myinterval() {
  let d = new Date();
  console.log(
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds()
  );
 
}

