import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Settings, BarChart3, X } from "lucide-react";

const links = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Users", path: "/users", icon: Users },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed md:static z-30 top-0 left-0 h-screen w-64 bg-slate-900 dark:bg-slate-950 text-white
        transform transition-transform duration-300 ease-in-out border-r border-transparent dark:border-slate-800
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-700 dark:border-slate-800">
          <h1 className="text-xl font-bold">Admin<span className="text-blue-500">Panel</span></h1>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <link.icon size={20} />
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}