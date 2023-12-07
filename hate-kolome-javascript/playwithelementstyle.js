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
