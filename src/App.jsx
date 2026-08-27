import { useState } from 'react'
import DashboardLayout from "./layouts/DashboardLayout";
import { Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';

function App() {
const [open, setOpen] = useState(false);

  return (
    <DashboardLayout open={open} setOpen={setOpen}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} /> 
      </Routes>
    </DashboardLayout>
  );
}

export default App
