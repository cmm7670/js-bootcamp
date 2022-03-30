const toDoList = [{
    toDoItem: 'Take out the trash',
    completedStatus: false
}, {
    toDoItem: 'Walk the dog',
    completedStatus: true
}, {
    toDoItem: 'Eat some fruit',
    completedStatus: false
}, {
    toDoItem: 'Wash my pants',
    completedStatus: true
}, {
    toDoItem: 'Buy something cheap',
    completedStatus: false
}]

const deleteToDo = function (list, searchString) {
    const indexToDelete = list.findIndex(function (note) {
        return note.toDoItem.toLowerCase() === searchString.toLowerCase()
    })
    if (indexToDelete > -1) {
        toDoList.splice(indexToDelete, 1)
    } 
}

const getThingsToDo = function (listToSearch) {
    return listToSearch.filter(function (listItem) {
        return !listItem.completedStatus
    })
}

const sortToDoList = function (listOfToDos) {
    listOfToDos.sort(function (a, b) {
        if (!a.completedStatus && b.completedStatus) {
            return -1
        } else if (a.completedStatus && !b.completedStatus) {
            return 1
        } else {
            return 0
        }
    })
}

sortToDoList(toDoList)
console.log(toDoList)

// console.log(getThingsToDo(toDoList))

// deleteToDo(toDoList, 'Walk the dog')
// console.log(toDoList)