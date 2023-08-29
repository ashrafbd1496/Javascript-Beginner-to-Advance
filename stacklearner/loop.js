//for loop
/**
 * for (var i = 0; i < 10; i++) {
  console.log(i + 1 + " Ashraf");
}
//to print 10th number
for (var i = 9; i < 10; i++) {
  console.log(i + 1 + " 10th tomo output");
}
//to print 1 to 10
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
 */

// print odd number only
/*

for (var i = 0; i <= 10; i++) {
    if(i%2 ===1){
        console.log('odd numbers '+ i);
    }
  
}
*/

//print odd and even number
/**
 * for (var i = 0; i <= 10; i++) {
  if (i % 2 === 1) {
    console.log("odd numbers " + i);
  } else {
    console.log("even numbers " + i);
  }
}

 */

//summation of 1 to 10
/**
 * var sum = 0;
for (var i = 1; i <= 10; i++) {
  console.log(sum + " + " + i + " = " + (sum + i));
  sum += i;
  //console.log(sum);
}
console.log("Result = " + sum);

 */

//summation of even numbers
var mysum = 0;
for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log((mysum += i));
  }
}

//summation of even numbers another way
let sum = 0;

for (let i = 2; i <= 100; i += 2) {
  console.log((sum += i));
}
