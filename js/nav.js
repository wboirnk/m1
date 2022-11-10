gsap.registerPlugin(ScrollTrigger, TextPlugin);

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

const footerAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: "footer", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    start: "top 87%", // 決定動畫開始點的位置
    end: "top 1%", // 決定動畫結束點的位置
    // scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  },
});
footerAnimation.fromTo(
  "footer",
  { autoAlpha: 0 , yPercent: "50"},
  { autoAlpha: 1,  yPercent: "0",duration: 0.5 }
);
