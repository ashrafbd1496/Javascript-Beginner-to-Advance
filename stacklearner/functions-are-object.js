var Rect = new Function(
  "width",
  "height",
  `this.width = width;
    this.heigt = height;

    this.draw = function () {
    console.log("I am a rectangle");
    this.printProperties();
    console.log(this);
    };

    this.printProperties = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.heigt);
    };`
);

var rect5 = new Rect(4, 2);
console.log(rect5);

//look the function property at console
function test() {
  console.log("Testing js function are object");
}
console.log(test.name, test.length); //output: test 0
