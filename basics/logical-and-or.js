let temp = 1

console.log('')

if (temp >= 60 && temp <= 90) {
    console.log('It is between 60 and 90.')
} else if (temp <= 0 || temp >= 90) {
    console.log('Do not go outside.')
} else {
    console.log('Do what you want')
}

console.log('')


// Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

console.log('')

if (isGuestOneVegan && isGuestTwoVegan ) {
    console.log('Here are some things for you dirty plant eaters.')
} else if (isGuestOneVegan || isGuestTwoVegan ) {
    console.log('Since one of you is vegan you get to pick from a few of our vegan dishes, but not all of them sucker.')
} else {
    console.log('You two are not vegan so we are all cool')
}

console.log('')

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up some vegan options.
// Else, offer up anything on the menu

