//factory pattern, here createRect is a factory

/**
 * 
 * var createRect = function (width, height) {
  return {
    width: width,
    heigt: height,

    draw: function () {
      console.log("I am a rectangle");
      this.printProperties();
      console.log(this);
    },

    printProperties: function () {
      console.log("My width is " + this.width);
      console.log("My height is " + this.heigt);
    },
  };
};

var rect1 = createRect(34, 23);
rect1.draw();

var rect2 = createRect(42, 58);
rect2.draw();

var rect3 = createRect(42, 58);
rect3.draw();
 */

// Constructor pattern

//constructor has no need comma,
/**
 * var Rectangle = function (width, height) {
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

var rect4 = new Rectangle(12, 34);
rect4.draw();

 */

// constructor  property
var obj = {};
var obj = new Object();

// write in console to see
//rect1.constructor;

//rect4.constructor;

//string constructor

var str = new String(str);
//console.log(str.constructor);
console.log("My Strng is " + str);
