jQuery(document).ready(function ($) {
  var selectBox = document.getElementById("box1");

  console.dir(selectBox);

  //create new p or div in document

  var newParagraph = document.createElement("p");

  newParagraph.textContent = "Javascript dom";

  console.log(newParagraph);

  var newDiv = document.createElement("div");

  //add content into div

  var bro = "Zunayed Ahmed";

  var onlyContent = (newDiv.textContent = "Developer " + bro);

  console.log(onlyContent);

  //add html tag into div

  newDiv.innerHTML = "<p>Dom manipulation</p>";

  console.log(newDiv);
});
