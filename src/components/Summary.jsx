const categoryEmojis = {
  Food: '🍔', Transport: '🚌', Entertainment: '🎬',
  Health: '💊', Utilities: '⚡', Shopping: '🛍️', Other: '📦'
};

function Summary({ expenses, total }) {
  const thisMonth = new Date().getMonth();
  const monthExpenses = expenses.filter(e => new Date(e.date).getMonth() === thisMonth);
  const monthTotal = monthExpenses.reduce((s, e) => s + Number(e.amount), 0);

  const topCategory = expenses.length > 0
    ? Object.entries(
        expenses.reduce((acc, e) => {
          acc[e.category] = (acc[e.category] || 0) + Number(e.amount);
          return acc;
        }, {})
      ).sort((a, b) => b[1] - a[1])[0]
    : null;

  return (
    <div className="summary-grid">
      <div className="summary-card">
        <div className="summary-icon">💰</div>
        <div className="summary-info">
          <div className="summary-label">Total Spent</div>
          <div className="summary-value highlight">₹{total.toLocaleString('en-IN')}</div>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon">📅</div>
        <div className="summary-info">
          <div className="summary-label">This Month</div>
          <div className="summary-value">₹{monthTotal.toLocaleString('en-IN')}</div>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon">📊</div>
        <div className="summary-info">
          <div className="summary-label">Transactions</div>
          <div className="summary-value">{expenses.length}</div>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon">{topCategory ? categoryEmojis[topCategory[0]] || '📦' : '🏷️'}</div>
        <div className="summary-info">
          <div className="summary-label">Top Category</div>
          <div className="summary-value">{topCategory ? topCategory[0] : '—'}</div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
