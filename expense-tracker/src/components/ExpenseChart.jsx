import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#6c63ff', '#f43f5e', '#10b981', '#f59e0b', '#06b6d4', '#ec4899', '#8b5cf6'];

function ExpenseChart({ expenses }) {
  const data = Object.entries(
    expenses.reduce((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + Number(e.amount);
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  if (data.length === 0) {
    return <div style={{ textAlign: 'center', padding: '40px', color: '#475569' }}>No data to display</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={110}
          paddingAngle={4}
          dataKey="value"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(val) => [`₹${val.toLocaleString('en-IN')}`, 'Amount']}
          contentStyle={{ background: '#1a1a2e', border: '1px solid #2a2a3d', borderRadius: '8px', color: '#e2e8f0' }}
        />
        <Legend
          formatter={(value) => <span style={{ color: '#94a3b8', fontSize: '13px' }}>{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ExpenseChart;
