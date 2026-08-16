const userName = "Shefaul Islam";
const income = 50000;

//Multiple expenses
let rent = 15000;
let food = 5000;
let transportation = 3000;
let entertainment = 2000;

// Calculate total expenses
let totalExpenses = rent + food + transportation + entertainment;

// Calculate tax (10% of income)
let tax = income * 0.1;

// Calculate net income after tax
let netIncome = income - tax;

// Calculate remaining balance after expenses
let balance = netIncome - totalExpenses;

// Saving 20% of the remaining balance
let savings = balance * 0.2;

// Display the results
console.log(`User Name: ${userName}`);
console.log(`Income: $${income}`);
console.log(`Total Expenses: $${totalExpenses}`);
console.log(`Tax: $${tax}`);
console.log(`Net Income: $${netIncome}`);
console.log(`Remaining Balance: $${balance}`);
console.log(`Savings: $${savings}`);
console.log(`Final Balance after Savings: $${blance - saving}`);
