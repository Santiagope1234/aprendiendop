let menuH = document.querySelector('.hamburguer')
let menuM = document.querySelector('.content-menu')
let cerrar = document.querySelector('.cerrar')

menuH.addEventListener('click', ()=>{
    menuM.classList.toggle("active")
  })

cerrar.addEventListener('click', ()=>{
    menuM.classList.remove("active")
  })



