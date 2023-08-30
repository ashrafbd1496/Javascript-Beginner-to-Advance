//String is a combine of many characters

//in js single or double quote has no difference

//'string' "string"

//['s', 't', 'r','i','n','g']

var str = "something"; //string literal, most of the time we will use this way
var str2 = String("something"); //string constructor
console.log(str2);

//convert a number to strig by adding quote with a number
var n = 10;
//var str3 = n + ''
var str3 = n.toString();
console.log(typeof str3);

//convert nummber into string using string constructor
var n = 10;
var str4 = String(n);
console.log(typeof str4);
