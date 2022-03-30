// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any
// parent/ancestor scope

// Global Scope (varOne)
  // Local Scope (varTwo)
    // Local Scope (varFour)
  // Local Scope (varThree)

let varOne = 'variableOne'

console.log('')

if (true) {
    console.log(varOne)
    let varTwo = 'variableTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'variableFour'
    }
}

if (true) {
    let varThree = 'variableThree'
}

console.log(varTwo)

console.log('')