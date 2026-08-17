const userName = "Shefaul Islam";
const income = 50000;

//Multiple expenses
const rent = 15000;
const food = 5000;
const transportation = 3000;
const entertainment = 2000;

// Calculate total expenses
const totalExpenses = rent + food + transportation + entertainment;

// Calculate tax (10% of income)
const tax = income * 0.1;

// Calculate net income after tax
const netIncome = income - tax;

// Calculate remaining balance after expenses
const balance = netIncome - totalExpenses;

// Saving 20% of the remaining balance
const savings = balance * 0.2;

// Determine the financial health status
let finalStatus = "";

if (savings >= 1000) {
  finalStatus = "Excellent! You are saving well!";
} else if (savings >= 500) {
  finalStatus = "Good! You have a decent saving amount.";
} else if (savings >= 100) {
  finalStatus = "Needs Improvement. Consider reducing expenses.";
} else {
  finalStatus = "Critical! Your savings are too low!";
}

// Check if expenses exceed income
let overspendingMessage = "";
if (totalExpenses > income) {
  overspendingMessage = "Warning: You are spending more than your income!";
}

// Display the results
console.log(`User Name: ${userName}`);
console.log(`Income: $${income}`);
console.log(`Total Expenses: $${totalExpenses}`);
console.log(`Tax: $${tax}`);
console.log(`Net Income: $${netIncome}`);
console.log(`Remaining Balance: $${balance}`);
console.log(`Savings: $${savings}`);
console.log(`Final Balance after Savings: $${balance - savings}`);
console.log(finalStatus);

if (overspendingMessage) {
  console.log(overspendingMessage);
}
