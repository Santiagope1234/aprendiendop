const usuarios = []
let usuariosEnLocalStorage;
let persona;

if (localStorage.getItem('usuarios')) {
  usuariosEnLocalStorage = (JSON.parse(localStorage.getItem('usuarios')))
  console.log(usuariosEnLocalStorage)
  console.log(usuariosEnLocalStorage.filter((usuario) => usuario.nombre === 'Rafael'))
}

let btn = document.querySelector('#button')

btn.addEventListener('click', (e) => {
  e.preventDefault()

  crearUsuario()
  crearDivEnHTML()
})

function crearUsuario() {
  let nombre = document.querySelector('#name').value
  let edad = document.querySelector('#age').value
  let ciudad = document.querySelector('#city').value
  let listaDeAmigos = []
  let usuario = {
    nombre,
    edad,
    ciudad,
    listaDeAmigos
  }

  usuariosEnLocalStorage.push(usuario)
  localStorage.setItem('usuarios', JSON.stringify(usuariosEnLocalStorage))
  console.log(usuariosEnLocalStorage)
}

function addNewFriend(user) {
  let nombreAmigo = prompt('Nombre del amigo')
  let edadAmigo = prompt('Edad del amigo')
  let ciudadAmigo = prompt('Ciudad del amigo')
  let amigo = {
    nombreAmigo,
    edadAmigo,
    ciudadAmigo,
  }

  return usuarios[user].listaDeAmigos.push(amigo)
}

function crearDivEnHTML() {
  const div = document.createElement('div')
  const h2 = document.createElement('h2')
  const body = document.body; // Seleccionamos el cuerpo del documento como padre

  h2.innerHTML = 'hola'
  body.appendChild(h2) // Agregamos el h2 al cuerpo
  body.insertBefore(div, h2) // Insertamos el div antes del h2
}