import { useState } from 'react'
import DashboardLayout from "./layouts/DashboardLayout";
import SpotlightCard from './components/SpotlightCard';
import { stats } from './data/mockData';

function App() {
  const [active, setActive] = useState("Dashboard");

  return (
    <DashboardLayout active={active} setActive={setActive}>
      <h2 className='text-2xl font-bold text-slate-800 mb-6'>{active}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {stats.map((s) => (
          <SpotlightCard key={s.title}>
            <p className='text-slate-500 text-sm'>{s.title}</p>
            <h3 className='text-2xl font-bold text-slate-800 mt-1'>{s.value}</h3>
            <span className={`text-sm font-medium ${s.positive ? "text-green-600" : "text-red-600"}`}>
              {s.change}
            </span>
          </SpotlightCard>
        ))}

      </div>
    </DashboardLayout>
  );
}

export default App
