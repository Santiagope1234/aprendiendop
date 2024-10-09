let menuBtn = document.querySelector(".hamburguer")
let menu = document.querySelector(".menu-mobile")
let closeBtn = document.querySelector(".equis")

menuBtn.addEventListener("click", () => {
    menu.classList.add("active")
    menuBtn.classList.add('active')
}) 

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active")
    menuBtn.classList.remove('active')

})
