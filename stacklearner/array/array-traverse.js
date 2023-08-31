//Traverse an Array

var arrTraverse = [4,6,8,8,10,54]

 for (let i = 0; i < arrTraverse.length; i++) {
    //console.log(arrTraverse[i])
     // if we want to increase each array values 2 plus
    arrTraverse[i] = arrTraverse[i] + 2
    
 }
 console.log(arrTraverse)

 // to get summation of array values
 var arr = [5,8,6,9,10,24]
 var sum = 0;
 for(i=0; i<arr.length; i++){
    sum += arr[i]
    console.log('summation of arr data ' +sum)//output 6 14 24 34 46 102
 }

 //get even numbers of an array
 for(var i =0; i<arr.length; i++){
    if(arr[i]%2 ===0){
        console.log('Even Numbers ' +arr[i])
    }
 }

  //get summation even numbers of an array
  var sum = 0
  for(var i =0; i<arr.length; i++){
    if(arr[i]%2 ===0){
        sum+= arr[i]   
    }
    
 }
 console.log('Summation of Even Numbers ' +sum)

  //get summation odd numbers of an array
  var sum = 0
  for(var i =0; i<arr.length; i++){
    if(arr[i]%2 ===1){
        sum+= arr[i]   
    }
    
 }
 console.log('Summation of Odd Numbers ' +sum)

  //get odd numbers of an array
  for(var i =0; i<arr.length; i++){
    if(arr[i]%2 ===1){
        console.log('Odd Numbers ' +arr[i])
    }
 }
