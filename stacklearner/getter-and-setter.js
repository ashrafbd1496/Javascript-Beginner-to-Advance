//Getters and setters

var Rectangle = function (width, height) {
  //var name = 'Ashraf';
  this.width = width;
  this.heigt = height;

  var position = {
    x: 45,
    y: 34,
  };

  var printProperties = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.heigt);
  }.bind(this);

  this.draw = function () {
    console.log("I am a rectangle");
    printProperties();
    console.log("Position: X=" + position.x + " Y=" + position.y);
  };

  //getter and setter

  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value;
    },
  });
};

var rect7 = new Rectangle(12, 34);

//console.log(rect1.name);

rect7.draw();

rect7.position = {
  x: 434,
  y: -435,
};

console.log(rect7.position);
