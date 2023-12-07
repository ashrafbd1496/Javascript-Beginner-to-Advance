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

  //add class into div
  var classAdded = newDiv.classList.add("new-class");

  console.log(classAdded);

  //for old browser
  var oldbrowserClass = (newDiv.className += " old-new-div");
  console.log(oldbrowserClass);

  //Remove class
  var RemoveClass = newDiv.classList.remove("new-class");

  //Replace existing class for old browser
  newDiv.className = newDiv.className.replace(/old-new-div$/, " ");

  //setAttribute
  var setAttribute = newDiv.setAttribute("data-attr", "myattribute");

  console.log(newDiv);

  //Remove attrinute
  var removeAtrribute = newDiv.removeAttribute("data-attr");

  console.log(newDiv);

  var RemoveClassAttr = newDiv.removeAttribute("class");

  console.log(newDiv);
});
