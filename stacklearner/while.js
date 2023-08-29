//while loop
/**
 * var i = 0;
while (i < 10) {
  console.log("Ashraf");
  i++;
}
 */




// random number selection and declare winner when get 9
/**
 * 

var isRunning = true

while (isRunning) {
    var rand = Math.floor(Math.random() * 10 +1)
    if (rand === 9) { 
        console.log('Winner Winner chicken dinner')
        isRunning= false
        
    }else{
        console.log('You have got ' + rand)
    }

}
 */

//do while loop
var isRunning = false
do{
    console.log('I am Running')
}while(isRunning)