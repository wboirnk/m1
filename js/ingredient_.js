// .ingredient-container-title 被點擊時，加入 .active， .ingredient-contents的高度抓 data-width 的
window.addEventListener("resize", () => {
  location.reload();
})
const contents = document.querySelectorAll(".ingredient .ingredient-contents");
Array.prototype.forEach.call(contents, (c) => {
  c.dataset.width = c.offsetWidth;
  c.setAttribute("style", "width: 0");
});
const titles = document.querySelectorAll(".ingredient-container-heading");
Array.prototype.forEach.call(titles, (titles) => {

  titles.addEventListener("click", (click) => {
    //開啟一個就關閉前一個
    const active = document.querySelectorAll(".active");
    Array.prototype.forEach.call(active, (act) => {
      act.classList.remove("active");
     
      act.parentNode
        .querySelector(".ingredient-contents")
        .setAttribute("style", "width: 0");
    });
    click.target.classList.toggle("active"); // 加入/移除 .active
    // .ingredient-container-title 同一層的 .ingredient-contents
    const content = click.target.parentNode.querySelector(
      ".ingredient-contents"
    );
    const width = content.dataset.width; // 從 dat-width 抓原本高度
    // 判斷 .ingredient-container-title 有沒有 .active
    if (click.target.classList.contains("active")) {
      // 有 .active，就設高
      content.setAttribute("style", "width: " + width + "px");
    } else {
      // 沒有，高度歸 0
      content.setAttribute("style", "width:0");
    }
  });

  // 如果 .ingredient-container-title 有 data-expanded="true"，就預設開啟
  if (titles.dataset.expanded === "true") {
    titles.click();
  }
});

//     }else if ((widthOutput <= 768 )){
// }

// window.addEventListener("resize", resizeListener)
