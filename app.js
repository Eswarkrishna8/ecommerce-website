const closeBtn = document.querySelector(".close");
const openBtn = document.querySelector(".ham");
const menu = document.querySelector(".menu");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
