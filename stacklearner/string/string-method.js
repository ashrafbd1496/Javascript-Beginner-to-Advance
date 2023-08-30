//concate string
var a = "My name is";
var b = "Ashraf";
var c = a.concat(" ", b);
console.log(c); // output My name is Ashraf

//substring will separate from mentioned character position
var d = c.substring(8);
console.log(d); //output is Ashraf

//will separate index 5 to index 8 character
var e = c.substring(5, 8);
console.log(e); //output me

//know the letter by its index
console.log(c.charAt(5)); //output m

//will return true is the setence start will used letter or word
console.log(c.startsWith("y")); //output false
console.log(c.startsWith("My")); //output true

console.log(c.endsWith("a")); //output flase

console.log(c.toUpperCase()); //output MY NAME IS ASHRAF
console.log(c.toLowerCase()); //output my name is ashraf

//will remove space
console.log("       hjfdf        ".trim());

//will convert into string to array using space or comma
console.log(c.split(" ")); //output [ 'My', 'name', 'is', 'Ashraf' ]
