const tea = document.querySelector("#tea")
const mySwiper = document.querySelector(".mySwiper")
const recommend = document.querySelector("#recommend")
const menu = document.querySelector(".menu-frame")
const fruitTea = document.querySelector("#fruit")
const mellow = document.querySelector("#mellow")
const milkTea = document.querySelector("#milk-tea")
const totemUp = document.querySelector(".totem-up")
const totemBottom = document.querySelector(".totem-bottom")
const mobileSwiper = document.querySelector(".tea-type-swiper")


recommend.addEventListener('click',function(){
    mySwiper.style.display = ""
    mobileSwiper.style.display = ""
    totemBottom.style.display = ""
    totemUp.style.display = ""
    menu.style.display = "none"
    // mySwiper.style.display = "flex"
    // mobileSwiper.style.display = "flex"
})

function menuArea(){
    totemBottom.style.display = "none"
    // swiperTotem.style.display = "none"
    totemUp.style.display = "none"
    mySwiper.style.display = "none"
    mobileSwiper.style.display = "none"
    menu.style.display = "flex"

}

tea.addEventListener('click',function(){
    menuArea();
    menu.innerHTML = `
    <img src="../img/menu-img/mobilemenu_tea_title.png" alt="" id="mobile-menu-title">
<picture class="totem-up">
    <source media="(min-width: 1400px)" srcset="../img/menu-img/totem_up.png">
    <source media="(min-width: 1084px)" srcset="../img/menu-img/menu_totem_up_960.png">
    <source media="(min-width: 860px)" srcset="../img/menu-img/menu_totem_up_960.png">
    <source media="(min-width: 540px)" srcset="../img/menu-img/menu_totem_up_768.png">
    <img alt="" src="../img/menu-img/menu_totem_up_768.png">
</picture>
<picture class="totem-bottom">
    <source media="(min-width: 1400px)" srcset="../img/menu-img/totem_bottom.png">
    <source media="(min-width: 1084px)" srcset="../img/menu-img/menu_totem_bottom_960.png">
    <source media="(min-width: 860px)" srcset="../img/menu-img/menu_totem_bottom_960.png">
    <source media="(min-width: 540px)" srcset="../img/menu-img/menu_totem_bottom_768.png">
    <img alt="" src="../img/menu-img/menu_totem_bottom_768.png">
</picture>

    <div class="beverage-menu">
    <img src="../img/menu-img/tea.png" alt="" class="beverage-photo">
    <img src="../img/menu-img/menu-full-totem.png" alt="" class="menu-mobile-totem">
    <div class="menu-highlight-block"></div>
    <picture class="menu-block-content">
        <source media="(min-width: 1400px)" srcset="../img/menu-img/menu_board_1903.png">
        <source media="(min-width: 1084px)" srcset="../img/menu-img/menu_board_1400.png">
        <source media="(min-width: 860px)" srcset="../img/menu-img/menu_board_960.png">
        <source media="(min-width: 540px)" srcset="../img/menu-img/menu_board_960.png">
        <img class="" alt="" src="../img/menu-img/menu_board_360.png">
    </picture>
    
   
        <div class="menu-block">
        <div class="menu-block-title">
            <h1>菜單</h1>
            <div class="title-slash"></div>
        </div>
                <p>牧一春紅茶 $30</p>
                <p>青翠綠茶 $30</p>
                <p>冷杉青茶 $30</p>
                <p>使用台灣1600公尺高海拔茶葉</p>
                <p>(杉林溪初夏摘小葉烏龍)</p>
                <p>珍珠紅/綠/青茶 $30</p>
        </div>
        
</div>`
})

fruitTea.addEventListener('click',function(){
    menuArea();
    menu.innerHTML = `
    <img src="../img/menu-img/mobilemenu_fruit_title.png" alt="" id="mobile-menu-title">
    <picture class="totem-up">
    <source media="(min-width: 1400px)" srcset="../img/menu-img/totem_up.png">
    <source media="(min-width: 1084px)" srcset="../img/menu-img/menu_totem_up_960.png">
    <source media="(min-width: 860px)" srcset="../img/menu-img/menu_totem_up_960.png">
    <source media="(min-width: 540px)" srcset="../img/menu-img/menu_totem_up_768.png">
    <img class="" alt="" src="../img/menu-img/menu_totem_up_768.png">
</picture>
<picture class="totem-bottom">
    <source media="(min-width: 1400px)" srcset="../img/menu-img/totem_bottom.png">
    <source media="(min-width: 1084px)" srcset="../img/menu-img/menu_totem_bottom_960.png">
    <source media="(min-width: 860px)" srcset="../img/menu-img/menu_totem_bottom_960.png">
    <source media="(min-width: 540px)" srcset="../img/menu-img/menu_totem_bottom_768.png">
    <img class="" alt="" src="../img/menu-img/menu_totem_bottom_768.png">
</picture>
  
<div class="beverage-menu">
    <img src="../img/menu-img/guava_green_tea.png" alt="" class="beverage-photo">
    <img src="../img/menu-img/menu-full-totem.png" alt="" class="menu-mobile-totem">
    <div class="menu-highlight-block"></div>
    <picture class="menu-block-content">
        <source media="(min-width: 1400px)" srcset="../img/menu-img/menu_board_1903.png">
        <source media="(min-width: 1084px)" srcset="../img/menu-img/menu_board_1400.png">
        <source media="(min-width: 860px)" srcset="../img/menu-img/menu_board_960.png">
        <source media="(min-width: 540px)" srcset="../img/menu-img/menu_board_960.png">
        <img class="" alt="" src="../img/menu-img/menu_board_360.png">
    </picture>
        <div class="menu-block">
        <div class="menu-block-title" id="menu-block-fruit-title">
            <h1>菜單</h1>
            <div class="title-slash"></div>
        </div>
            <div class="menu-block-text">
                <div class="menu-block-text-left">
                    <p>琥珀綠/青茶 $40</p>
                    <p>微檸紅/綠/青茶 $35</p>
                    <p>鮮檸紅/綠/青茶 $45</p>
                    <p>老梅紅茶 $45</p>
                    <p>芭樂綠茶 $50</p>
                    <p>百香綠茶 $50</p>
                </div>
                <div class="menu-block-text-right">
                    <p>芒果綠茶 $55</p>
                    <p>橙果綠茶 $50</p>
                    <p>金桔綠茶 $45</p>
                    <p>蜂蜜綠/紅茶 $50</p>
                    <p>養樂多綠茶 $50</p>
                </div>
            </div>
           
        </div>
</div>`
})


mellow.addEventListener('click',function(){
    menuArea();
    menu.innerHTML = `
    <img src="../img/menu-img/mobilemenu_mellow_title.png" alt="" id="mobile-menu-title">
    <picture class="totem-up">
    <source media="(min-width: 1400px)" srcset="../img/menu-img/totem_up.png">
    <source media="(min-width: 1084px)" srcset="../img/menu-img/menu_totem_up_960.png">
    <source media="(min-width: 860px)" srcset="../img/menu-img/menu_totem_up_960.png">
    <source media="(min-width: 540px)" srcset="../img/menu-img/menu_totem_up_768.png">
    <img class="" alt="" src="../img/menu-img/menu_totem_up_768.png">
</picture>
<picture class="totem-bottom">
    <source media="(min-width: 1400px)" srcset="../img/menu-img/totem_bottom.png">
    <source media="(min-width: 1084px)" srcset="../img/menu-img/menu_totem_bottom_960.png">
    <source media="(min-width: 860px)" srcset="../img/menu-img/menu_totem_bottom_960.png">
    <source media="(min-width: 540px)" srcset="../img/menu-img/menu_totem_bottom_768.png">
    <img class="" alt="" src="../img/menu-img/menu_totem_bottom_768.png">
</picture>
    <div class="beverage-menu">
        <img src="../img/menu-img/wax_gourd.png" alt="" class="beverage-photo">
        <img src="../img/menu-img/menu-full-totem.png" alt="" class="menu-mobile-totem">
        <div class="menu-highlight-block"></div>
        <picture class="menu-block-content">
        <source media="(min-width: 1400px)" srcset="../img/menu-img/menu_board_1903.png">
        <source media="(min-width: 1084px)" srcset="../img/menu-img/menu_board_1400.png">
        <source media="(min-width: 860px)" srcset="../img/menu-img/menu_board_960.png">
        <source media="(min-width: 540px)" srcset="../img/menu-img/menu_board_960.png">
        <img class="" alt="" src="../img/menu-img/menu_board_360.png">
    </picture>
        <div class="menu-block">
        <div class="menu-block-title" id="menu-block-mellow-title">
            <h1>菜單</h1>
            <div class="title-slash"></div>
        </div>
                <div class="menu-block-text">
                    <div class="menu-block-text-left">
                        <p>琥珀冬瓜 $40</p>
                        <p>青檸冬瓜 $35</p>
                        <p>冰糖梅飲 $45</p>
                        <p>青檸汁 $45</p>
                        <p>百香純飲 $50</p>
                        <p>鮮榨橙汁 $50</p>
                        <p>芭樂純飲 $55</p>
                        <p>鮮檸芭樂汁 $50</p>
                        <p>芭樂多多 $45</p>
                    </div>
                    <div class="menu-block-text-right">
                    <p>冰糖桔汁 $50</p>
                    <p>金桔檸檬 $50</p>
                    <p>蜂蜜桔汁 $55</p>
                    <p>龍眼蜜露 $50</p>
                    <p>青檸蜜露 $55</p>
                    <p>純蜜愛玉 $50</p>
                    <p>純蜜檸檬愛玉 $55</p>
                    <p>鮮檸養樂多 $55</p>
                    </div>
                </div>
        </div>
    </div>`
})

milkTea.addEventListener('click',function(){
    menuArea();
    menu.innerHTML = `
    <img src="../img/menu-img/mobilemenu_milktea_title.png" alt="" id="mobile-menu-title">
    <picture class="totem-up">
    <source media="(min-width: 1400px)" srcset="../img/menu-img/totem_up.png">
    <source media="(min-width: 1084px)" srcset="../img/menu-img/menu_totem_up_960.png">
    <source media="(min-width: 860px)" srcset="../img/menu-img/menu_totem_up_960.png">
    <source media="(min-width: 540px)" srcset="../img/menu-img/menu_totem_up_768.png">
    <img class="" alt="" src="../img/menu-img/menu_totem_up_768.png">
</picture>
<picture class="totem-bottom">
    <source media="(min-width: 1400px)" srcset="../img/menu-img/totem_bottom.png">
    <source media="(min-width: 1084px)" srcset="../img/menu-img/menu_totem_bottom_960.png">
    <source media="(min-width: 860px)" srcset="../img/menu-img/menu_totem_bottom_960.png">
    <source media="(min-width: 540px)" srcset="../img/menu-img/menu_totem_bottom_768.png">
    <img class="" alt="" src="../img/menu-img/menu_totem_bottom_768.png">
</picture>
    <div class="beverage-menu">
    <img src="../img/menu-img/black_tea_latte.png" alt="" class="beverage-photo">
    <img src="../img/menu-img/menu-full-totem.png" alt="" class="menu-mobile-totem">
    <div class="menu-highlight-block"></div>
    <picture class="menu-block-content">
        <source media="(min-width: 1400px)" srcset="../img/menu-img/menu_board_1903.png">
        <source media="(min-width: 1084px)" srcset="../img/menu-img/menu_board_1400.png">
        <source media="(min-width: 860px)" srcset="../img/menu-img/menu_board_960.png">
        <source media="(min-width: 540px)" srcset="../img/menu-img/menu_board_960.png">
        <img class="" alt="" src="../img/menu-img/menu_board_360.png">
    </picture>
        <div class="menu-block">
        <div class="menu-block-title" id="menu-block-milktea-title">
        <h1>菜單</h1>
        <div class="title-slash"></div>
    </div>
            <div class="menu-block-text">
            <div class="menu-block-text-left">
                <p>極濃紅拿鐵 $40</p>
                <p>青翠綠拿鐵 $35</p>
                <p>琥珀拿鐵 $45</p>
                <p>苦甜可可飲 $45</p>
                <p>珍珠紅/綠拿鐵 $50</p>
            </div>
            <div class="menu-block-text-right">
                <p>大紫芋燒奶 $50</p>
                <p>純鮮奶珍珠 $55</p>
                <p>橙果綠茶 $50</p>
                <p>奶蓋紅/綠/青 $50</p>
                <p>奶蓋紅/綠拿鐵 $60</p>
            </div>
        </div>
</div>`
})





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
  