// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Default', score = 0) {
    return `Name: ${name} - Score: ${score}`
    // return 'Name: ' + name + ' - Score: ' + score
}


let scoreText = getScoreText('Roger', 89)
console.log(scoreText)


// Challenge area
// totalBill, tipPercent (default of .2)
// A 25% tip on $40 would be $10
let calculateTip = function (totalBill, tipPercent = .2) {
    // return totalBill * tipPercent
    let tipAmount = totalBill * tipPercent
    tipPercent = tipPercent * 100
    return `A ${tipPercent}% tip on $${totalBill} would be $${tipAmount}`
}

//let tipAmount = calculateTip(100, .1)
//console.log(tipAmount)

let tipMesssage = calculateTip(40)
console.log(tipMesssage)




let name = 'Jen'
let age = 20
console.log(`Hey, my name is ${name}! I am ${age} years old.`)