const nav = document.querySelector("nav");
const logoBig = document.querySelector(".logoBig");
const slogan=document.querySelector(".slogan")
const menuBtn=document.querySelector(".menu-fix-btn")
function navOn() {
  if (window.scrollY > 0) {
    nav.classList.add("navOn");
    // logoBig.classList.add("logoOut");
    // slogan.classList.add("sloganOut");
    menuBtn.classList.add("menu-on");
  } else {
    nav.classList.remove("navOn");
    // logoBig.classList.remove("logoOut");
    // slogan.classList.remove("sloganOut")
    menuBtn.classList.remove("menu-on");
  }
}

window.addEventListener("scroll", navOn);

// console.log(nav);
