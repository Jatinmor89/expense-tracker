import { useState } from 'react';

const categories = ['Food', 'Transport', 'Entertainment', 'Health', 'Utilities', 'Shopping', 'Other'];

function ExpenseForm({ onAdd, onSuccess }) {
  const [form, setForm] = useState({ title: '', amount: '', category: 'Food', date: new Date().toISOString().split('T')[0] });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (!form.amount || isNaN(form.amount) || Number(form.amount) <= 0) e.amount = 'Enter a valid amount';
    if (!form.date) e.date = 'Date is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    onAdd({ ...form, amount: Number(form.amount) });
    setForm({ title: '', amount: '', category: 'Food', date: new Date().toISOString().split('T')[0] });
    onSuccess();
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Title</label>
        <input className="form-input" name="title" value={form.title} onChange={handleChange} placeholder="e.g. Grocery shopping" />
        {errors.title && <span className="form-error">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Amount (₹)</label>
        <input className="form-input" name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="e.g. 500" min="1" />
        {errors.amount && <span className="form-error">{errors.amount}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Category</label>
        <select className="form-select" name="category" value={form.category} onChange={handleChange}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Date</label>
        <input className="form-input" name="date" type="date" value={form.date} onChange={handleChange} />
        {errors.date && <span className="form-error">{errors.date}</span>}
      </div>

      <button type="submit" className="submit-btn">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
