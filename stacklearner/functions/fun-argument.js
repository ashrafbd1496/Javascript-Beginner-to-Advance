
//retrieve arguments with parameter
function test(a, b, c) {
  //console.log(arguments);
  //console.log(typeof a);

  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
test(42, 48, 60);


// retrieve arguments without parameters
function sumAll(){
    var sum = 0;
    for(var i = 0; i< arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}
sumAll(1,4,5)
sumAll(1,10,90)