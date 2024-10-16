let texto = document.querySelector("#texto")
let parrafo = document.querySelector("#parrafo")

texto.addEventListener('keyup', () => {
    let texto2 = texto.value
    parrafo.innerHTML = texto2
})