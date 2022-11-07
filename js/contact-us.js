gsap.registerPlugin(ScrollTrigger, TextPlugin);

// const instagramMove = document.querySelector('.contact-instagram-group')
// const facebookMove = document.querySelector('.contact-facebook-group')

const contactAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-group", // 決定scrolltrigger要以哪一個元素作為觸發基準點
      markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
      start: "top 35%", // 決定動畫開始點的位置
      end: "top 1%", // 決定動畫結束點的位置
      // scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      // pin: true,
    //   autoAlpha:1,
    //   duration:2.5,
    //   repeat:-1,
    },
  });

//   contactTitleAnimation.fromto(".contact-title", {
//     !以高度為百分比 目前這塊是1294 100vh 不確定是否要一起
//     ! 要從反方向過來就是css top給反方向素質
//     top: "2.31%",
//     duration: "10",
//     opacity: "1",
//     autoAlpha:1,
//     duration:2.5,
//     repeat:-1,
//   });
// const timeline = gsap.timeline()

contactAnimation.fromTo('.contact-title',  
{autoAlpha: 0},
{autoAlpha: 1, duration: 0.5})

contactAnimation.fromTo('.contact-line',  
{autoAlpha: 0},
{autoAlpha: 1, duration: 0.5})

contactAnimation.fromTo('.contact-content',  
{autoAlpha: 0},
{autoAlpha: 1, duration: 0.5})

contactAnimation.fromTo(
  ".contact-instagram-group",
  { autoAlpha: 0 },
  { autoAlpha: 1, duration: 0.5 }
);
contactAnimation.fromTo(
  ".contact-facebook-group",
  { autoAlpha: 0 },
  { autoAlpha: 1, duration: 0.5 }
);


// document.querySelector("body").addEventListener("wheel", contactAnimation);

// function contactAnimation(){
//   let contactTitle = document.querySelector('.contact-title')
//   contactTitle.style.display = 'block'

//   let contactLine = document.querySelector('.contact-line')
//   contactLine.style.display = 'block'

//   let contactContent = document.querySelector('.contact-content')
//   contactContent.style.display = 'block'

//   let contactIcon = document.querySelector('.contact-icon-group')
//   contactIcon.style.display = 'block'
// }