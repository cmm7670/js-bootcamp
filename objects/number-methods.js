/*
let num = 951.656

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 1
let max = 2
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)
*/

// Challenge area
// generate random number between 1 and 5 >> pass in guess >> true if correct >> false if not correct

let lowEnd = 1
let highEnd = 5

let makeGuess = function (guess) {
    let randomAnswer = Math.floor(Math.random() * (highEnd - lowEnd + 1)) + lowEnd
    console.log(`The randomAnswer is ${randomAnswer}. The guess was ${guess}.`)
    return guess === randomAnswer
}

console.log(makeGuess(2))