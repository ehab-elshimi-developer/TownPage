let menuList = document.querySelector(".nav .menu");
let menuBtn = document.querySelector(".menu-icon");
let bars = `<i class="fa-solid fa-bars fa-beat"></i>`;
let closeBtn = `<i class="fa-solid fa-close"></i>`;
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  let content = menuBtn.innerHTML;
  if (content.includes(bars)) {
    menuBtn.innerHTML = "";
    menuBtn.innerHTML = closeBtn;
    menuList.classList.toggle("active");
  } else if (content.includes(closeBtn)) {
    menuBtn.innerHTML = "";
    menuBtn.innerHTML = bars;
    menuList.classList.remove("active");
  }
});

window.addEventListener("scroll", (e) => {
  e.preventDefault();
  menuList.classList.remove("active");
  menuBtn.innerHTML = "";
  menuBtn.innerHTML = bars;
});
