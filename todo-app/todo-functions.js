// 1. Wire up button event
// 2. Remove todo by id
// 3. Save and rerender the todos list


// Fetch existing ToDos from local storage
const fetchToDos = function () {
    const toDoJSON = localStorage.getItem('toDos')

    if (toDoJSON !== null) {
        return JSON.parse(toDoJSON)
    } else {
        return []
    }
}

// Save ToDos to local storage
const saveToDos = function (toDoList) {
    localStorage.setItem('toDos', JSON.stringify(toDoList))
}

// Render application todos based on filters
const renderToDoList = function (originalList, filters) {
    const filteredToDoList = originalList.filter(function (item) {
        if (!filters.hideCompleted) {
            return item.toDoItem.toLowerCase().includes(filters.searchText.toLowerCase())
        } else {
            return (item.toDoItem.toLowerCase().includes(filters.searchText.toLowerCase()) && !item.completedStatus)
        }
    })

    const toDoListFiltered = filteredToDoList.filter(function (item) {
        return !item.completedStatus
    })

    document.querySelector('#todo-list').innerHTML = ''
    document.querySelector('#left-todo-message').innerHTML = ''
    document.querySelector('#left-todo-message').appendChild(generateSummaryDOM(toDoListFiltered))

    filteredToDoList.forEach(function (item) {
        document.querySelector('#todo-list').appendChild(generateToDoDOM(item))
    })
}

// Remove ToDo by ID
const deleteToDo = function (id) {
    const toDoIndex = toDoList.findIndex(function (item) {
        return item.id === id
    })
    if (toDoIndex > -1) {
        toDoList.splice(toDoIndex, 1)
    }
}

// Get the DOM elements for an individual note
const generateToDoDOM = function (item) {
    const toDoElement = document.createElement('div')
    const toDoText = document.createElement('span')
    const toDoCheckbox = document.createElement('input')
    const removeToDo = document.createElement('button')

    // Set up the checkbox for a ToDo item
    toDoCheckbox.setAttribute('type', 'checkbox')
    toDoElement.appendChild(toDoCheckbox)

    // Set up the text for a ToDo item
    toDoText.textContent = item.toDoItem
    toDoElement.appendChild(toDoText)

    // Set up the button for a ToDo item
    removeToDo.textContent = 'x'
    toDoElement.appendChild(removeToDo)
    removeToDo.addEventListener('click', function () {
        deleteToDo(item.id)
        saveToDos(toDoList)
        renderToDoList(toDoList, searchFilter)
    })

    return toDoElement
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (toDoListFiltered) {
    const toDoCountParagraph = document.createElement('h2')
    toDoCountParagraph.textContent = `You have ${toDoListFiltered.length} thing(s) left to do.`
    return toDoCountParagraph
}