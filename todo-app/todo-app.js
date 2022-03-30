const toDoList = fetchToDos()

const searchFilter = {
    searchText: '',
    hideCompleted: false
}

renderToDoList(toDoList, searchFilter)

document.querySelector('#todo-filter').addEventListener('input', function(e) {
    searchFilter.searchText = e.target.value
    renderToDoList(toDoList, searchFilter)
})

document.querySelector('#todo-to-add').addEventListener('submit', function (e) {
    e.preventDefault()
    toDoList.push({
        id: uuidv4(),
        toDoItem: e.target.elements.todoToAdd.value,
        completedStatus: false
    })
    saveToDos(toDoList)
    renderToDoList(toDoList, searchFilter)
    e.target.elements.todoToAdd.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    searchFilter.hideCompleted = e.target.checked
    renderToDoList(toDoList, searchFilter)
})