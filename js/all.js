const nav = document.querySelector("nav");
const logoBig = document.querySelector(".logoBig");
const slogan=document.querySelector(".slogan")
function navOn() {
  if (window.scrollY > 0) {
    nav.classList.add("navOn");
    logoBig.classList.add("logoOut");
    slogan.classList.add("sloganOut")
  } else {
    nav.classList.remove("navOn");
    logoBig.classList.remove("logoOut");
    slogan.classList.remove("sloganOut")
  }
}

window.addEventListener("scroll", navOn);

console.log(nav);
