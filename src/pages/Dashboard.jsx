import SpotlightCard from "../components/SpotlightCard";
import RevenueChart from "../components/RevenueChart";
import { stats } from "../data/mockData";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <SpotlightCard key={s.title}>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{s.title}</p>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-1">{s.value}</h3>
            <span className={`text-sm font-medium ${s.positive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
              {s.change}
            </span>
          </SpotlightCard>
        ))}
      </div>
      <RevenueChart />
    </div>
  );
}