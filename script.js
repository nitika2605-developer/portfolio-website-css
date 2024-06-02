const hamburgerElement = document.getElementById("hamburger")
const navbarElement = document.querySelector(".navbar")

hamburgerElement.addEventListener("click", function () {
  this.classList.toggle("active");
  navbarElement.classList.toggle("active")
});
