import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


import './components/Expenses/Expenses.css';
import { useState } from 'react';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toiled Paper',
    amount: 94.20,
    date: new Date(2020, 7, 14)
  }, {
    id: 'e2',
    title: 'Toiled Paper',
    amount: 94.20,
    date: new Date(2020, 7, 28)
  }, {
    id: 'e3',
    title: 'Toiled Paper',
    amount: 94.20,
    date: new Date(2020, 7, 29)
  }, {
    id: 'e4',
    title: 'Toiled Paper',
    amount: 94.20,
    date: new Date(2020, 7, 30)
  }
]
function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addSaveExpense = (savedExpenseData) => {
    setExpenses(prev => [savedExpenseData, ...prev])
  }
  return (
    <div>
      <NewExpense onAddExpense={addSaveExpense} />
      {<Expenses items={expenses} />}
    </div>
  );
}

export default App;
