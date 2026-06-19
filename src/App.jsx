import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import Summary from './components/Summary';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'Groceries', amount: 1500, category: 'Food', date: '2024-06-01' },
      { id: 2, title: 'Netflix', amount: 649, category: 'Entertainment', date: '2024-06-03' },
      { id: 3, title: 'Bus Pass', amount: 500, category: 'Transport', date: '2024-06-05' },
      { id: 4, title: 'Medicine', amount: 350, category: 'Health', date: '2024-06-08' },
      { id: 5, title: 'Electricity Bill', amount: 1200, category: 'Utilities', date: '2024-06-10' },
    ];
  });

  const [filter, setFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses(prev => [{ ...expense, id: Date.now() }, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  };

  const categories = ['All', 'Food', 'Transport', 'Entertainment', 'Health', 'Utilities', 'Shopping', 'Other'];

  const filteredExpenses = filter === 'All'
    ? expenses
    : expenses.filter(e => e.category === filter);

  const totalAmount = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">💸</span>
            <span className="logo-text">SpendWise</span>
          </div>
          <nav className="nav">
            <button
              className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >Dashboard</button>
            <button
              className={`nav-btn ${activeTab === 'add' ? 'active' : ''}`}
              onClick={() => setActiveTab('add')}
            >+ Add Expense</button>
          </nav>
        </div>
      </header>

      <main className="main">
        {activeTab === 'dashboard' ? (
          <>
            <Summary expenses={expenses} total={totalAmount} />

            <div className="chart-section">
              <h2 className="section-title">Spending by Category</h2>
              <ExpenseChart expenses={expenses} />
            </div>

            <div className="list-section">
              <div className="list-header">
                <h2 className="section-title">Transactions</h2>
                <div className="filter-group">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      className={`filter-btn ${filter === cat ? 'active' : ''}`}
                      onClick={() => setFilter(cat)}
                    >{cat}</button>
                  ))}
                </div>
              </div>
              <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
            </div>
          </>
        ) : (
          <div className="add-section">
            <h2 className="section-title">Add New Expense</h2>
            <ExpenseForm onAdd={addExpense} onSuccess={() => setActiveTab('dashboard')} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
