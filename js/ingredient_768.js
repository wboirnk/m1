window.addEventListener("resize", () => {
  location.reload();
})
window.addEventListener('DOMContentLoaded', () => {
  const contents1 = document.querySelectorAll(
    ".ingredient1 .ingredient1-contents"
  );
  Array.prototype.forEach.call(contents1, (c) => {
    c.dataset.height = c.offsetHeight;
    c.setAttribute("style", "height: 0");
  });
  const heading = document.querySelectorAll(".ingredient1-container-heading");
  
  //.ingredient1-container-title 被點擊時，加入 .active， .ingredient1-contents的高度抓 data-height 的
  Array.prototype.forEach.call(heading, (heading) => {
  
    heading.addEventListener("click", (click) => {
      //開啟一個就關閉前一個
      const active1 = document.querySelectorAll(".active1");
      Array.prototype.forEach.call(active1, (act1) => {
        act1.classList.remove("active1");
        
        act1.parentNode
          .querySelector(".ingredient1-contents")
          .setAttribute("style", "height: 0");
      });
  
      click.target.classList.toggle("active1"); // 加入/移除 .active
      // .ingredient1-container-title 同一層的 .ingredient1-contents
      const content1 = click.target.parentNode.querySelector(
        ".ingredient1-contents"
      );
      const height1 = content1.dataset.height; // 從 dat-height1 抓原本高度
  
      // 判斷 .ingredient1-container-title 有沒有 .active
      if (click.target.classList.contains("active1")) {
        // 有 .active，就設高
        content1.setAttribute("style", "height: " + height1 + "px");
      } else {
        // 沒有，高度歸 0
        content1.setAttribute("style", "height: 0");
      }
    });
  
    // 如果 .ingredient1-container-title 有 data-expanded="true"，就預設開啟
    if (heading.dataset.expanded === "true") {
      heading.click();
    }
  });
})


