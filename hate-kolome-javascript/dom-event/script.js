// Start Writing Code Here
function showAlert() {
  alert("Test");
}

const clickmeBtn = document.getElementById("btn-click-me");

//console.dir(clickmeBtn);

//html event -onlick
clickmeBtn.onclick = function () {
  alert("Clicked ME");
};

clickmeBtn.onmouseover = function () {
  // alert("Mouse Overd");
};

// Event Listener
//yourElement.addEventListener(typeofEvent, handler);

const box1 = document.getElementById("box1");
//console.dir(box1);

box1.addEventListener("copy", function () {
  alert("Never copy the article");
});

//change browser default behaviour using eventListener

const link = document.getElementById("link");
link.addEventListener("click", function (event) {
  event.preventDefault();

  var newUrl = "https://ashrafbd.hashnode.dev"; // Replace with your desired URL
  window.location.href = newUrl;
});

//Event Deligation and an Enent only after load markup

document.addEventListener("DOMContentLoaded", function () {
  console.log("Markup is ready");
  var box4 = document.getElementById("box4");

  box4.addEventListener("click", function (event) {
    // Check if the clicked element or its parent is an <li> element
    var clickedLi = event.target.closest("li");
    if (clickedLi && clickedLi !== document.querySelector("#link")) {
      console.log("Clicked on a List item");
    }
  });

  $(document).ready(function () {
    //add an event after loading specific element
    var img1 = document.querySelector("img[alt = valid-img");
    var img2 = document.querySelector("img[alt = invalid-img");

    img1.addEventListener("load", function () {
      console.log("Image 1 has successfully Loaded!");
    });

    img2.addEventListener("error", function () {
      console.log("Image Cannot be loaded!");
    });
  });
});
