const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


const backDoorsArray = document.querySelectorAll(".backDoor");
backDoorsArray.forEach(element => {
  element.addEventListener("click", function toggleDoor() {
    element.children[0].classList.toggle("doorOpen");
  });
});

// WORK WITH JSON