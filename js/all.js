// loading

window.onload = () => {
  const body = document.querySelector("body");
  const bodyMask = document.querySelector(".loading");
  body.classList.add("loading-all");
  bodyMask.classList.add("loading-done");
};

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
const footerPc = document.querySelector(".footer-pc");
const footerMb= document.querySelector(".footer-mb")
window.onscroll = () => {
  
  let cHeight = document.documentElement.clientHeight;
  let sHeight = document.documentElement.scrollHeight;
  let sTop = document.documentElement.scrollTop;

  
  if (sTop>5328||sHeight == cHeight + Math.floor(sTop)) {
    
    footerPc.classList.add("footer-on");
    footerMb.classList.add("footerMb-on");
  }
//   else if(sHeight == cHeight + sTop){
// footerPc.classList.add("footer-on");
//     footerMb.classList.add("footerMb-on");
//   }
  
//   if (sHeight == cHeight + sTop) {
//     footerPc.classList.add("footer-on");
//     footerMb.classList.add("footerMb-on");
//   }else if(sTop>7806){
// console.log("a");
//   }
};
// if(scrollHeight==clientHeight+scrollTop){
//   footerPc.classList.add("footer-on");
// }
