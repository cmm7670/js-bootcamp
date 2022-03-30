let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`The title of my book is ${myBook.title} and it is written by ${myBook.author}. It has ${myBook.pageCount} pages.`)

myBook.title = 'Animal Farm'

console.log(`Now the title of my book is ${myBook.title}`)

// Challenge area

// name, age, location >> person
let person = {
    name: 'Max',
    age: 5,
    location: 'Yukon, Oklahoma'
}

// Max is 5 and lives in Yukon.
console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)

// Increase age by 1 and print message again.
person.age = person.age + 1

console.log(`Now ${person.name} is ${person.age} years old, but he still lives in ${person.location}`)