//And OR shorthand episode no 27

//var name = "";
var name = "Mr";

var fullName = "";
name.length === 0 ? (fullName = "Ashraf") : (fullName = name);
console.log(fullName);

//shorform, it will work for single statement
//ekhane  empty string data false hisebe kaj kore ba false return kore
var fullName = name || "HM Nayem";

//another example
var isOk = true;
//var isOk = false
if (isOk) {
  console.log("Everything is ok");
}
//shortfom, it will work form single  statement
isOk && console.log("Everything is OK");
