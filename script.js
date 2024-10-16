let menuBtn = document.querySelector('.hamburguer')
<<<<<<< HEAD
let menu = document.querySelector(".menu-mobile")
let closeMenu = document.querySelector("#close-menu")

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active")
})

closeMenu.addEventListener('click', () => {
  menu.classList.remove("active")
=======
let menuMbl = document.querySelector('.menu-mobile')

menuBtn.addEventListener('click', ()=>{
  menuMbl.classList.toggle("active")
})

let menuCr = document.querySelector('.cerrar')

menuCr.addEventListener('click', ()=>{
  menuMbl.classList.remove("active")
>>>>>>> 302e9a078e05d66d94a4313531005838c627e623
})