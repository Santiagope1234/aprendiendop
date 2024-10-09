let menuBtn = document.querySelector('.hamburguer')
let menu = document.querySelector('.menu-mobile')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
})

