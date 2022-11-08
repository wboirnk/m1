gsap.registerPlugin(ScrollTrigger, TextPlugin);

// const instagramMove = document.querySelector('.contact-instagram-group')
// const facebookMove = document.querySelector('.contact-facebook-group')

const contactAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-group", // 決定scrolltrigger要以哪一個元素作為觸發基準點
      markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
      start: "top 35%", // 決定動畫開始點的位置
      end: "top 1%", // 決定動畫結束點的位置
    
    },
  });



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