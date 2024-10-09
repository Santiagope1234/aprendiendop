let menuBtn = document.querySelector('.hamburguer')
let menu = document.querySelector(".menu-mobile")
let closeMenu = document.querySelector("#close-menu")

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active")
})

closeMenu.addEventListener('click', () => {
  menu.classList.remove("active")
})