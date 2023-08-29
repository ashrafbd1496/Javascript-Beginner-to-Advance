
//Immediately Invoked Function Expressions (IIFE) , ফাংশন বানানোর সাথে সাথেই সেটাকে কল করতে চাই সেক্ষেত্রে আমরা ইফি Immediately Invoked Function Expressions (IIFE) টেকনিক ইউজ করতে পারি

(function aDemoFunc(){
    console.log("Javascript Immediately Invoked Function Expressions");
})();



var sum = (function(){
    return 10+23;
})();

console.log(sum);

var controller = (function(){
    var a = {
        name: 'ashraf',
        uid: 2323
    };
    return a;
})();
console.log(controller);

var interface = (function(){
    return 'Hello ' + controller.name;
})();

console.log(interface);