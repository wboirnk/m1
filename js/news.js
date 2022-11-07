

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const newsTitleAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".news-container",
    start: 'top 55%',
    end: 'top 50%',
    markers: false,
    scrub: true, 
  },
});

newsTitleAnimation.to(".news-container-topbox", {
  duration: "10",
  opacity: "1",
});

newsTitleAnimation.to(".news-container-midbox", {
  duration: "10",
  opacity: "1",
  delay: 200,
});

newsTitleAnimation.to(".news-container-botbox", {
  duration: "10",
  opacity: "1",
  delay: 200,
});

