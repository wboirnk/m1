// loading

window.onload=()=>{
  setTimeout(function(){
    const body = document.querySelector("body");
  const bodyMask = document.querySelector(".loading");
  body.classList.add("loading-all");
  bodyMask.classList.add("loading-done");
  },1500)
}

// nav動畫

const nav = document.querySelector("nav");
const logoBig = document.querySelector(".logoBig");
const slogan = document.querySelector(".slogan");
const menuBtn = document.querySelector(".menu-fix-btn");
function navOn() {
  if (window.scrollY > 30) {
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

// footer動畫
