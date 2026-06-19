const categoryEmojis = {
  Food: '🍔', Transport: '🚌', Entertainment: '🎬',
  Health: '💊', Utilities: '⚡', Shopping: '🛍️', Other: '📦'
};

function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <div className="empty-state">
        <p>🧾</p>
        <p>No expenses found</p>
      </div>
    );
  }

  return (
    <div className="expense-list">
      {expenses.map(expense => (
        <div key={expense.id} className="expense-item">
          <div className="expense-left">
            <div className="expense-emoji">{categoryEmojis[expense.category] || '📦'}</div>
            <div>
              <div className="expense-title">{expense.title}</div>
              <div className="expense-meta">
                {expense.date} &nbsp;•&nbsp;
                <span className="category-badge">{expense.category}</span>
              </div>
            </div>
          </div>
          <div className="expense-right">
            <span className="expense-amount">−₹{Number(expense.amount).toLocaleString('en-IN')}</span>
            <button className="delete-btn" onClick={() => onDelete(expense.id)} title="Delete">✕</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
