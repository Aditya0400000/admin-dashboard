import { useState } from "react"
import { User, Bell, Lock, Camera } from "lucide-react"


export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });

  const toggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }) );
  };


  return (
   <div className="max-w-3xl space-y-6">
    {/* Profile section */}
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-800 p-6">
      <div className="flex items-center gap-2 mb-5">
        <User size={18} className="text-blue-600" />
        <h3 className="font-semibold text-slate-800 dark:text-slate-100">Profile</h3>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-semibold" > 
            A
          </div>
          <button className="absolute -bottom-1 -right-1 bg-slate-800 dark:bg-slate-700 text-white text-xl font-semibold" >
            <Camera size={12} />
          </button>
        </div>
        <div>
          <p className="font-medium text-slate-800 dark:text-slate-100">Aryan Sharma</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">admin@company.com</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-slate-500 dark:text-slate-400 mb-1 block">Full Name</label>
          <input 
          defaultValue="Aryan Sharma"
          className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
        Save Changes
      </button>
    </div>

    {/* Notification Section */}
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
      <div className="flex items-center gap-2 mb-5">
        <Bell size={18}  className="text-blue-600"/>
        <h3 className="font-semibold text-slate-800 dark:text-slate-100">Notifications</h3>
      </div>

      {[
        { key: "email", label: "Email Notifications", desc:"Recieve updates via email" },
        { key: "push", label: "Push Notification", desc: "Recieve push alerts on browser"},
        { key: "sms", label: "SMS Alerts", desc: "Get textmessage for important updates" },
      ].map((item) => (
        <div 
        key={item.key}
        className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">

          <div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{item.label}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
          </div>
          <button
          onClick={() => toggle(item.key)}
          className={`w-11 h-6 rounded-full transition-colors duration-200 relative flex-shrink-0 ${
            notifications[item.key] ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
          }`}
          >
            <span 
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
              notifications[item.key] ? "translate-x-5" : "translate-x-0.5"
            }`}
            />
          </button>
        </div>
      ))}
    </div>

    {/* Security Section */}
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-salte-200 dark:border-slate-800 p-6">
      <div className="flex items-center gap-2 mb-5">
        <Lock size={18} className="text-blue-600" />
        <h3 className="font-semibold text-slate-800 dark:text-slate-100">Security</h3>
      </div>
      <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
        Change Password →
      </button>
    </div>

   </div>
  )
}

