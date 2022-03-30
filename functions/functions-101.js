// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)


// Challenge Area

// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function(degFahrenheit) {
    let degCelsius = (degFahrenheit - 32) * (5/9)
    return degCelsius
}

// Call a couple of times (32 >> 0) (68 >> 20)
let firstRes = convertFahrenheitToCelsius(32)
let secondRes = convertFahrenheitToCelsius(68)

// Print the converted values
console.log(firstRes)
console.log(secondRes)