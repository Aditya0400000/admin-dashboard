import { Search, Bell, Menu, Sun, Moon } from "lucide-react";

export default function Navbar({ setOpen, darkMode, setDarkMode }) {
  return (
    <header className="flex items-center justify-between bg-white dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10 transition-colors duration-300">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-slate-600 dark:text-slate-300" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
        <div className="hidden sm:flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-64">
          <Search size={18} className="text-slate-400" />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-slate-600" />
          )}
        </button>
        <button className="relative">
          <Bell size={20} className="text-slate-600 dark:text-slate-300" />
          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full" />
        </button>
        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
          A
        </div>
      </div>
    </header>
  );
}