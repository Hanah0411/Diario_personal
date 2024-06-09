document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const addNoteBtn = document.getElementById('add-note-btn');
    const notesContainer = document.getElementById('notes-container');

    // Cargar notas desde Local Storage al inicio
    loadNotes();

    addNoteBtn.addEventListener('click', () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            addNoteAndSaveToLocalStorage(noteText);
            noteInput.value = '';
        }
    });

    function addNoteAndSaveToLocalStorage(noteText) {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.textContent = noteText;
        notesContainer.appendChild(noteElement);

        // Guardar la nota en el almacenamiento local
        saveNoteToLocalStorage(noteText);
    }

    function saveNoteToLocalStorage(noteText) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(noteText);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function loadNotes() {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(noteText => addNoteAndSaveToLocalStorage(noteText));
    }
});

