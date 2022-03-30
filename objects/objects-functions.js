let myBook = {
    title: 'How to Make Friends and Influence People',
    author: 'Douche McDonald',
    pageCount: 269
}

let yourBook = {
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    pageCount: 69
}

let getSummary = (book) => {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let myBookSummary = getSummary(myBook)
let yourBookSummary = getSummary(yourBook)

console.log(myBookSummary.summary)

// Challenge area
// Create function - take fahrenheit in >> return object with all three

let tempsConverted = (tempFahr) => {
    // convert to celsius and store in variable
    let tempCels = (tempFahr - 32) * (5/9)
    // convert to kelvin and store in variable
    let tempKelv = tempCels + 273.15
    // return object with three strings
    return {
        fahrString: `${tempFahr} degrees Fahrenheit is ${tempFahr} degrees Fahrenheit.`,
        celsString: `${tempFahr} degrees Fahrenheit is ${tempCels} degrees Celsius.`,
        kelvString: `${tempFahr} degrees Fahrenheit is ${tempKelv} Kelvin.`
    }
}

// create three function calls
let fullThing = tempsConverted(0)

// log to console

console.log('')
console.log(fullThing.fahrString)
console.log(fullThing.celsString)
console.log(fullThing.kelvString)
console.log('')


let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5/9),
        celsius: (fahrenheit - 32) * (5/9)
    }
}

let temps = convertFahrenheit(74)
console.log(temps)