/**
 * 
 * function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;

    
     //we can use myDisplayer function inside this function
     //but we will loss control of our myCalculator function
     
    myDisplayer(sum);
  }
  
  myCalculator(5, 5);
 */


// using call back function
function myCalculator(num1, num2, callback) {
  let sum = num1 + num2;
  if(callback) callback(sum);
  return sum;

}
const result = myCalculator(5, 5);
console.log(result);