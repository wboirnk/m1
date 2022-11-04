gsap.registerPlugin(ScrollTrigger, TextPlugin);

const aboutTitleAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".about", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    start: "top 35%", // 決定動畫開始點的位置
    end: "top 1%", // 決定動畫結束點的位置
    scrub: false, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
    // pin: true,
  },
});

// 動畫done
aboutTitleAnimation.to(".about-title", {
  // !以高度為百分比 目前這塊是1294 100vh 不確定是否要一起
  //! 要從反方向過來就是css top給反方向素質
  top: "2.31%",
  duration: "0.5",
  opacity: "1",
});

aboutTitleAnimation.to(".about-slogan", {
  top: "110px",
  duration: "0.5",
  opacity: "1",
});
aboutTitleAnimation.to(".about-content-text", {
  top: "-50px",
  duration: "0.5",
  opacity: "1",
});
aboutTitleAnimation.to(".about-content-img", {
  top: "0",
  duration: "0.5",
  opacity: "1",
});
aboutTitleAnimation.to(".spilt-title", {
  top: "30px",
  duration: "0.5",
  opacity: "1",
});
aboutTitleAnimation.to(".spilt-slogan", {
  top: "80px",
  duration: "0.5",
  opacity: "1",
});
aboutTitleAnimation.to(".spilt-content-img", {
  // top: "80px",
  marginTop: "60px",
  marginRight: "20px",
  marginBottom: "55px",
  duration: "0.5",
  opacity: "1",
});
aboutTitleAnimation.to(".spilt-content-text-group", {
  // top: "80px",
  duration: "0.5",
  opacity: "1",
});

const teaTypeTitleAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".tea-type-title-group", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    start: "top 35%", // 決定動畫開始點的位置
    end: "top 1%", // 決定動畫結束點的位置
    // scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  },
});

teaTypeTitleAnimation.fromTo(
  ".tea-type-title-group",
  { autoAlpha: 0 },
  { autoAlpha: 1, duration: 0.5 }
);

const teaTypeAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".tea-type", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    start: "top 35%", // 決定動畫開始點的位置
    end: "top 1%", // 決定動畫結束點的位置
    // scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  },
});

teaTypeAnimation.fromTo(
  ".tea-type",
  { autoAlpha: 0 },
  { autoAlpha: 1, duration: 0.5 }
);
const teaTypeSwiperPcAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".tea-type-swiper", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    start: "top 35%", // 決定動畫開始點的位置
    end: "top 1%", // 決定動畫結束點的位置
    // scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  },
});

teaTypeSwiperPcAnimation.fromTo(
  ".tea-type-swiper",
  { autoAlpha: 0 },
  { autoAlpha: 1, duration: 0.5 }
);
const teaTypeSwiperMbAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".tea-type-swiper-mb", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    start: "top 35%", // 決定動畫開始點的位置
    end: "top 1%", // 決定動畫結束點的位置
    // scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  },
});

teaTypeSwiperMbAnimation.fromTo(
  ".tea-type-swiper-mb",
  { autoAlpha: 0 },
  { autoAlpha: 1, duration: 0.5 }
);
const newsAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".news", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    start: "top 35%", // 決定動畫開始點的位置
    end: "top 1%", // 決定動畫結束點的位置
    // scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  },
});

newsAnimation.fromTo(
  ".news",
  { autoAlpha: 0 },
  { autoAlpha: 1, duration: 0.5 }
);



