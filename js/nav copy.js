// window.onload.setTimeout(()=>{
//   const body = document.querySelector("body");
//   const bodyMask = document.querySelector(".loading");
//   body.classList.add("loading-all");
//   bodyMask.classList.add("loading-done");
// },3000)

window.onload=()=>{
  setTimeout(function(){
    const body = document.querySelector("body");
  const bodyMask = document.querySelector(".loading");
  body.classList.add("loading-all");
  bodyMask.classList.add("loading-done");
  },1500)
}

// window.onload = () => {
//   const body = document.querySelector("body");
//   const bodyMask = document.querySelector(".loading");
//   body.classList.add("loading-all");
//   bodyMask.classList.add("loading-done");
// };

const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-fix-btn");
function navOn() {
  if (window.scrollY > 0) {
    // nav.classList.add("navOn");
    menuBtn.classList.add("menu-on");
  } else {
    // nav.classList.remove("navOn");
    menuBtn.classList.remove("menu-on");
  }
}

window.addEventListener("scroll", navOn);

const footerPc = document.querySelector(".footer-pc");
const footerMb = document.querySelector(".footer-mb");
window.onscroll = () => {
  let cHeight = document.documentElement.clientHeight;
  let sHeight = document.documentElement.scrollHeight;
  let sTop = document.documentElement.scrollTop;
  if (sTop > 5328 || sHeight == cHeight + Math.floor(sTop)) {
    if (sTop>5328) {
    }else if (sHeight == cHeight + Math.floor(sTop)){
    }
    footerPc.classList.add("footer-on");
    footerMb.classList.add("footerMb-on");
  }
};
