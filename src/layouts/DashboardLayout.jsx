import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children, open, setOpen, darkMode, setDarkMode,  }) {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar setOpen={setOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}