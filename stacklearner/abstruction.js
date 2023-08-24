//abstruction

var Rectangle = function (width, height) {
  //var name = 'Ashraf';
  this.width = width;
  this.heigt = height;

  var postion = {
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
    console.log("Position: X=" + postion.x + " Y=" + postion.y);
  };
};

var rect1 = new Rectangle(12, 34);
//console.log(rect1.name);
rect1.draw();
