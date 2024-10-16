let contenedorNota = document.querySelector('#segundo-contenedor-herramienta-notas')
let botonHerramienta = document.querySelector('#boton-herramienta-notas')
let input = document.querySelector('#input-herramienta-notas')

botonHerramienta.addEventListener('click', (e) => {
    e.preventDefault()
    mostrarNota()
})

function mostrarNota() {
    let div = document.createElement('div')
    let li = document.createElement('li')
    li.innerHTML = input.value
    div.appendChild(li)
    contenedorNota.appendChild(div)
}