# 📊 Admin Analytics Dashboard

A modern, fully responsive admin dashboard built with **React** and **Tailwind CSS**, featuring real-time analytics visualization, user management, and dark mode support.

🔗 **Live Demo:** [https://admin-dashboard-xi-gilt.vercel.app/]
---

## ✨ Features

- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🌗 **Dark/Light Mode** — Toggle between themes with smooth transitions
- 📊 **Data Visualization** — Interactive line and bar charts using Recharts
- 🔍 **Users Table** — Search, sort, and paginate through user data
- ⚙️ **Settings Panel** — Profile management and notification preferences
- ✨ **Spotlight Hover Effect** — Mouse-tracking glow animation on cards
- 🧭 **Client-side Routing** — Seamless navigation with React Router

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 19 (Vite) |
| Styling | Tailwind CSS v4 |
| Routing | React Router DOM |
| Charts | Recharts |
| Icons | Lucide React |


---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/Aditya0400000/admin-dashboard.git
cd admin-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 📁 Project Structure

```
admin-dashboard/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SpotlightCard.jsx
│   │   ├── UserTables.jsx
│   │   └── RevenueChart.jsx
│   ├── pages/             # Route-level pages
│   │   ├── Dashboard.jsx
│   │   ├── Users.jsx
│   │   ├── Analytics.jsx
│   │   └── Settings.jsx
│   ├── layouts/            # Layout wrappers
│   │   └── DashboardLayout.jsx
│   ├── data/               # Mock data
│   │   └── mockData.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## 🧑‍💻 Author

**Aditya**
- GitHub: [@Aditya0400000](https://github.com/Aditya0400000)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).