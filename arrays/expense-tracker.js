const account = {
    name: 'John Smith',
    expenses: [], 
    income: [],
    addExpense: function (desc, amt) {
        this.expenses.push({description: desc, amount: amt})
    },
    addIncome: function (desc, amt) {
        this.income.push({description: desc, amount: amt})
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function (thing) {
            totalExpenses += thing.amount
        })
        this.income.forEach(function (thing) {
            totalIncome += thing.amount
        })
        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income and $${totalExpenses} in expenses.`
    }
}

// 1. add income array to account (start empty)
// 2. set up addIncome method >> description, amount
// 3. tweak getAccountSummary (total income) - (total expenses)
// John Smith has a balance of $XX. $XX in income. $XX in expenses.

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Work', 1000)
console.log(account.getAccountSummary())