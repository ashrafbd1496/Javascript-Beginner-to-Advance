const acc_header = document.querySelectorAll(".accordion-header");

acc_header.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      item.nextElementSibling.style.display = "block";
    } else {
      item.nextElementSibling.style.display = "none";
    }
  });
});
