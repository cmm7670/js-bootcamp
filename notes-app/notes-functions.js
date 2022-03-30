// Read existing notes from local storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteElement = document.createElement('div')
    const textElement = document.createElement('span')
    const button = document.createElement('button')

    // Setup the remove note button
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', function (e) { // Don't have to use e here
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title text
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'Unnamed note'
    }

    noteElement.appendChild(textElement)

    return noteElement
}

// Render application notes
const renderNotes = function (passedNotes, passedFilters) {
    const filteredNotes = passedNotes.filter(function (note) {
        return note.title.toLowerCase().includes(passedFilters.searchText.toLowerCase())
    })
    
    document.querySelector('#note-list').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#note-list').appendChild(noteElement)
    })
}

// Save the notes to local storage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}