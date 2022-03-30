let myAccount = {
    name: 'Charlie Mayo',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    // account = {}
    account.expenses = account.expenses + amount
    // console.log(account)
}

// addExpense(myAccount, 2.5)
// console.log(myAccount)

// addIncome >> account, amount
let addIncome = (account, amount) => {
    account.income = account.income + amount
}

// resetAccount >> account >> reset income and expenses to 0
let resetAccount = (account) => {
    account.income = 0
    account.expenses = 0
}

// getAccountSummary >> 'Account for XXXX has $XXX. $XXX in income. $XXX in expenses.' >> return as string and print to console
let getAccountSummary = (account) => {
    return `The account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income and $${account.expenses} in expenses.`
}

// addIncome
addIncome(myAccount, 25)
// addExpense
addExpense(myAccount, 3)
// addExpense
addExpense(myAccount, 10)
// getAccountSummary
let messageToPrint = getAccountSummary(myAccount)
console.log(messageToPrint)
// resetAccount
resetAccount(myAccount)
// getAccountSummary
let messageToPrint1 = getAccountSummary(myAccount)
console.log(messageToPrint1)


