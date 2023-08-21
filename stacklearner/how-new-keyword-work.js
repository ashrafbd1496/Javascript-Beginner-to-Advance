// Constructor pattern

//constructor has no need comma,
var Rectangle = function (width, height) {
  this.width = width;
  this.heigt = height;

  this.draw = function () {
    console.log("I am a rectangle");
    this.printProperties();
    console.log(this);
  };

  this.printProperties = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.heigt);
  };
};

var rect3 = new Rectangle(12, 34);
rect3.draw();

function myNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArry = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArry.slice(1));

  return obj;
}

var rect4 = myNew(Rectangle, 45, 30);
rect4.draw();

