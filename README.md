# 💸 SpendWise — Expense Tracker

A beautiful and modern **Expense Tracker** built with **React + Vite + Recharts**.  
Track your daily spending, view category charts, and manage your finances — all saved in localStorage.

---

## 🚀 Features

- ✅ Add & delete expenses with title, amount, category, and date
- 📊 Interactive **Pie Chart** showing spending by category
- 💾 Data saved in **LocalStorage** (persists on refresh)
- 🔍 Filter transactions by category
- 📱 Fully **responsive** design (mobile + desktop)
- 🌙 Sleek **dark theme** UI

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Fast build tool |
| Recharts | Charts & data visualization |
| LocalStorage | Data persistence |
| CSS3 | Custom dark theme styling |

---

## 📁 Project Structure

```
expense-tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx    # Add expense form with validation
│   │   ├── ExpenseList.jsx    # List of all expenses
│   │   ├── ExpenseChart.jsx   # Pie chart visualization
│   │   └── Summary.jsx        # Stats cards (total, month, count)
│   ├── App.jsx                # Main app + state management
│   ├── App.css                # All styles
│   └── main.jsx               # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/expense-tracker.git
cd expense-tracker
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚢 Deploy to GitHub Pages

### Step 1 — Build and deploy
```bash
npm run deploy
```

### Step 2 — Enable GitHub Pages
Go to your repo → **Settings** → **Pages** → Source: `gh-pages` branch → **Save**

Your app will be live at:
```
https://YOUR_USERNAME.github.io/expense-tracker/
```

---

## 📋 What I Learned

- React `useState` and `useEffect` hooks
- Lifting state up between components
- `localStorage` for data persistence
- Recharts `PieChart` with custom styling
- Form validation in React
- Component-based architecture



---

## 👤 Author

**Jatinmor89** — [GitHub](https://github.com/Jatinmor89)

---

## 📄 License

MIT License
