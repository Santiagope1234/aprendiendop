const listaUsuarios = [
    {
        nombre: 'rafael',
        telefono: '04127113895',
        email: 'ralskdhals',
        listadeanmigos: [],
        comentarios: [],
        publicaciones: []
    },
    {
        nombre: 'Dacid',
        telefono: '04127113895',
        email: 'something@asdjk.com'
    },
    {
        nombre: 'Santiago',
        telefono: '04127113895',
        email: 'something@asdjk.com'
    },
    {
        nombre: 'Aaron',
        telefono: '04127113895',
        email: 'something@asdjk.com'
    },
    {
        nombre: 'Jesus',
        telefono: '04127113895',
        email: 'something@asdjk.com'
    },
    {
        nombre: 'Diego',
        telefono: '04127113895',
        email: 'something@asdjk.com'
    },
]

function crearUsuarios() {
    let nombre = prompt("Nombre")
    let telefono = prompt("Telefono")
    let email = prompt("Email")
    let usuario = {
        nombre,
        telefono,
        email, 
    }
    listaUsuarios.push(usuario)
}

function removeLastUser() {
    listaUsuarios.pop()
}
function colocarDePrimero() {
    return listaUsuarios.unshift(2)
}
function removerElPrimero() {
    return listaUsuarios.shift()
}

const usuarioEliminado = removerElPrimero()

// //function comun
// function saludo() {
//     listaUsuarios.forEach((usuario) => {
//         console.log("Hola " + usuario.nombre)
//     })
// }

// //function en variable y constante
// const removerUsuario = () => {
//     console.log('Hola')
// }

// //function autoinvocada
// (function() {
//     console.log('')
// })()

listaUsuarios.map(({email}) => {
    console.log(email)
})

let usuario = {
    nombre: 'santiago',
    telefono: '04127113895',
    email: 'ralskdhals',
    saludar: () => {console.log(this.nombre + ' Hola')}
}