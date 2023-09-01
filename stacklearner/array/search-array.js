//sercah in array
var sercahInArray = [5, 43, 35, 64, 35, 34, 64, 89];
var isFound = false;
var find = 35;
for (let i = 0; i < sercahInArray.length; i++) {
  if (sercahInArray[i] === find) {
    console.log("Data found at index " + i);
    isFound = true;
    break;
  }
}
if (!isFound) {
  console.log("Data not found");
}

//Example 2(More Efficient way)
var arr = [10, 25, 30, 50, 70, 52, 30, 57, 45];

var item = 30;

for (var i = 0; i < arr.length; i++) {
  if (item == arr[i]) {
    console.log("Data Found at " + i + " index.");
    break;
  }
}
if (arr[i] != item) {
  console.log("Item not found");
}

// show all the indexs if item match
function findAllIndexes(array, item2) {
  // Create an empty array to store the indexes.
  const indexes = [];

  // Iterate over the array.
  for (let i = 0; i < array.length; i++) {
    // If the current element is equal to the item, add the index to the array.
    if (array[i] === item2) {
      indexes.push(i);
    }
  }

  // Return the array of indexes.
  return indexes;
}

// Initialize the array and the item.
const array = [10, 25, 30, 50, 70, 52, 30, 57, 45];
const item2 = 30;

// Find all the indexes of the item in the array.
const indexes = findAllIndexes(array, item2);

// Print the indexes.
console.log("The indexes of " + item2 + " in the array are: " + indexes);

//Another way to found all indexes
var arr = [10, 25, 30, 50, 70, 52, 30, 57, 45];
var item = 30;

var foundIndices = [];

for (var i = 0; i < arr.length; i++) {
  if (item === arr[i]) {
    foundIndices.push(i);
  }
}

if (foundIndices.length > 0) {
  console.log("Item found at indices:", foundIndices);
} else {
  console.log("Item not found");
}
