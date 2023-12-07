jQuery(document).ready(function ($) {
  var newDiv = document.createElement("div");
  //console.dir(newDiv.style);

  newDiv.classList.add("box");
  newDiv.setAttribute("id", "box5");

  var box4 = document.getElementById("box4");
  box4.insertAdjacentElement("afterend", newDiv);

  //add style

  newDiv.innerHTML = "<h4>Box5</h4>" + "<p>Box5 created using JS</p>";

  newDiv.style.backgroundColor = "teal";

  console.log(newDiv);
});
// To make one element a child of another element at the end

box1 = document.getElementById("box1");
box2 = document.getElementById("box2");

box1.appendChild(box2);

//change position of box
box3 = document.getElementById("box3");
box3.insertAdjacentElement("beforebegin", box4);

//remove element using child node

console.dir(box4.childNodes);
box4.childNodes[3].remove();

//remove using child
var box3 = document.getElementById("box3");
var box3p = document.querySelector("#box3>p");

box3.removeChild(box3p);

//direct remove
//box2.remove();
