//Memoizatio: is a technic to  avoid a function recalculation which is very heavy calculation

// function add(x) {
//   return 10 + x;
// }

// //higher order function
// function memo(func) {
//     let cache = {};

//     return function (x) {

//         //console.log(cache)//{ '10': 20 }

//         if (cache[x]) {
//             console.log("result from cache");
//             return cache[x];
//         } else {
//             console.log("calculating result");

//             const result = func(x);
//             cache[x] = result;
//             return result;
//         }
//     };
// }
// const calculate = memo(add);

// console.log(calculate(10));
// console.log(calculate(10));

//if there are one more paratmeter
function add(...x) {
  // ...x is rest operator
  return x.reduce((sum, curVal) => sum + curVal);
}

//higher order function
function memo(func) {
  let cache = {};

  return function (...x) {
    console.log(cache); //{ '10': 20 }

    const key = JSON.stringify(x);
    console.log(key);

    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(...x);
      cache[key] = result;
      return result;
    }
  };
}
const calculate = memo(add);

console.log(calculate(10, 20, 30, 40, 50));
console.log(calculate(10, 20, 30, 40, 50));
