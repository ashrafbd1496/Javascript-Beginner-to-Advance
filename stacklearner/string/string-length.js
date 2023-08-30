//get the text length using our custom lenght variable

var str = "I am learning Javascript";
//console.log(str.charAt(12));

var ourLength = 0;

while (true) {
  if (str.charAt(ourLength) == "") {
    break;
  } else {
    ourLength++;
  }
}
console.log(ourLength);

//using built-in lenth method
console.log(str.length)