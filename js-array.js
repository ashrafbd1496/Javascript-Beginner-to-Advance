
var testArray = ['ashraf','jahir', 'Jabbar', 'Shafiq','jahid'];

//Access all array items
for (var i = 0; i < testArray.length; i++){
    console.log('Array item ' + testArray[i]);
}
// looping array using Array.forEach() function
const cars = ["Volvo", "BMW", "Toyota"];
let text = "<ul>";
cars.forEach(carFunction);
text +="</ul>";

function carFunction(value){
    text += "<li>" + value + "</li>";
}
console.log('loop using forEach '+text);


//add new item at last 
testArray.push('Nabil');
console.log('New item added at last ' + testArray);

// remove item from last 
testArray.pop();
console.log('last item removed ' + testArray);

// sort array
testArray.sort();

console.log('array sorted ' + testArray);

// add item at start
testArray.unshift('Jahed');
console.log('added item at start '+ testArray);

// remove item from start
testArray.shift();
console.log('removed item from start '+ testArray);

//to know array index
console.log(testArray.indexOf('Jabbar'));

//Array Splice
//console.log(testArray.splice(1,3));
var spliceArray = testArray.splice(3);
console.log('splice array ' +spliceArray);
console.log('after splice ' +testArray);

//copy array
var copyArray = testArray;
console.log('Its copy of testArray ' +copyArray);

// changed array value
copyArray[2] = ['changed ashraf'];
console.log(copyArray);
console.log(testArray);

// Recognize array or object
console.log('this is array ?'+ Array.isArray(testArray));