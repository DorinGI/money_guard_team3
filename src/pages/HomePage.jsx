import React from 'react';

function HomePage() {
  const expenses = [
    { id: 1, name: 'Rent', amount: -500 },
    { id: 2, name: 'Groceries', amount: -100 },
    { id: 3, name: 'Salary', amount: 1500 },
  ];

  return (
    <div>
      <h1>Expenses & Incomes</h1>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.name}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
