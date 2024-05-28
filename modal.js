const mdlBtn = document.getElementById("modal-open");
const keep = document.getElementById("keep");
const discrd = document.getElementById("discard");
const modal = document.querySelector(".asrf-modal");
const malert = document.querySelector(".asrf-alert");
const mdlclose = document.querySelector(".close");
const alertclose = document.querySelector(".alert-close");

mdlBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("active");
});

modal.addEventListener("click", function (e) {
  if (e.target == this) {
    modal.classList.remove("active");
    console.log(e.target);
  }
});

mdlclose.addEventListener("click", function () {
  malert.style.display = "flex";
});

alertclose.addEventListener("click", function () {
  malert.style.display = "none";
});
keep.addEventListener("click", function () {
  malert.style.display = "none";
});
discrd.addEventListener("click", function () {
  malert.style.display = "none";
  modal.classList.remove("active");
});
