// call, Apply and bind method

function myCall() {
  console.log(this);
  console.log(this.a + this.b);
}


//call and apply method almost same , has a little different

myCall.call({a: 40, b:34}); 

//myCall.apply({});
//myCall();