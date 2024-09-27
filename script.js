let menuBtn = document.querySelector('.hamburguer')
let menuMbl = document.querySelector('.menu-mobile')

menuBtn.addEventListener('click', ()=>{
  menuMbl.classList.toggle("active")
})

let menuCr = document.querySelector('.cerrar')

menuCr.addEventListener('click', ()=>{
  menuMbl.classList.remove("active")
})