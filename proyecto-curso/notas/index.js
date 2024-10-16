const userForm = document.getElementById('userForm');
const noteForm = document.getElementById('noteForm');
const notesContainer = document.getElementById('notesContainer');
let currentUser = null;

function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

userForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  if (nombre && apellido) {
    currentUser = `${nombre}_${apellido}`;
    noteForm.style.display = 'block';
    displayNotes();
    userForm.style.display = 'none';
  }
});

noteForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const titulo = document.getElementById('titulo').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();
  if (titulo && descripcion) {
    addNote(titulo, descripcion);
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
  }
});

function addNote(titulo, descripcion) {
  const notes = getFromLocalStorage(currentUser);
  const newNote = { id: Date.now(), titulo, descripcion };
  notes.push(newNote);
  saveToLocalStorage(currentUser, notes);
  displayNotes();
}

function displayNotes() {
  const notes = getFromLocalStorage(currentUser);
  notesContainer.innerHTML = '';
  notes.map((note) => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
      <h3>${note.titulo}</h3>
      <p>${note.descripcion}</p>
      <button onclick="deleteNote(${note.id})">
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    `;
    notesContainer.appendChild(noteElement);
  });
}

function deleteNote(noteId) {
  let notes = getFromLocalStorage(currentUser);
  const noteIndex = notes.findIndex(note => note.id === noteId);
  if (noteIndex !== -1) {
    saveToLocalStorage(currentUser, notes);
    displayNotes();
  }
}
