const listaUsuarios = [];

cargarUsuariosDesdeLocalStorage();

let botonOne = document.querySelector('#boton-one');
let botonTwo = document.querySelector('#boton-two');
let nombreInput = document.querySelector('#nombre');
let apellidoInput = document.querySelector('#apellido');
let noteTitleInput = document.querySelector('#note-tittle');
let noteDescInput = document.querySelector('#note-desc');

let currentUser = null; // Variable para almacenar el usuario actual

botonOne.addEventListener('click', (e) => {
    e.preventDefault();
    crearUsuario();
    nombreInput.disabled = true;
    apellidoInput.disabled = true;
    botonOne.classList.replace('buttons', 'none');
});

function crearUsuario() {
    let nombre = nombreInput.value.trim();
    let apellido = apellidoInput.value.trim();

    // Verificar si el usuario ya existe en listaUsuarios
    let usuarioExistente = listaUsuarios.find(usuario => 
        usuario.nombreForm === nombre && usuario.apellidoForm === apellido
    );

    if (usuarioExistente) {
        // Si el usuario existe, lo asignamos como usuario actual
        currentUser = usuarioExistente;
    } else {
        // Si no existe, creamos uno nuevo y lo agregamos a listaUsuarios
        let usuario = {
            nombreForm: nombre,
            apellidoForm: apellido,
            listaNotas: [],
        };
        listaUsuarios.push(usuario);
        currentUser = usuario;
    }

    // Guardar en localStorage
    guardarUsuariosEnLocalStorage();
}

botonTwo.addEventListener('click', (e) => {
    e.preventDefault();
    crearNota();
});

function crearNota() {
    let noteTitle = noteTitleInput.value.trim();
    let noteDesc = noteDescInput.value.trim();

    let nota = {
        noteTitle,
        noteDesc,
    };

    if (currentUser) {
        currentUser.listaNotas.push(nota);
        // Guardar en localStorage
        guardarUsuariosEnLocalStorage();
        // Aquí puedes agregar código para actualizar la interfaz y mostrar la nota
    } else {
        alert('Por favor, crea un usuario primero.');
    }
}

function guardarUsuariosEnLocalStorage() {
    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
}

function cargarUsuariosDesdeLocalStorage() {
    const usuariosGuardados = localStorage.getItem('listaUsuarios');
    if (usuariosGuardados) {
        listaUsuarios.push(...JSON.parse(usuariosGuardados));
    }
}
