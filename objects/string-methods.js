let name = ' Charlie Mayo  '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim method
console.log(name.trim())
console.log(name.trim().length)

// Challenge area

// isValidPassword
// length is more than 8 and it doesn't contain the word password

let isValidPassword = function (password) {
    /*
    if (password.length < 8 || password.includes('password')) {
        return true
    } else {
        return false
    }
    */
   return password.length < 8 || password.includes('password')
}



console.log(isValidPassword('asdf'))    // expect true
console.log(isValidPassword('abc123!@#$'))  // expect false
console.log(isValidPassword('aspassworddf'))    // expect true