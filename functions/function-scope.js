// Global scope (convertFahrenheitToCelsius, firstRes, secondRes)
  // Local scope (degCelsius, degFahrenheit)
    // Local scope (isFreezing)


let convertFahrenheitToCelsius = function(degFahrenheit) {
    let degCelsius = (degFahrenheit - 32) * (5/9)

    if (celsius <= 0) {
        let isFreezing = true
    }

    return degCelsius
}

let firstRes = convertFahrenheitToCelsius(32)
let secondRes = convertFahrenheitToCelsius(68)

console.log(firstRes)
console.log(secondRes)