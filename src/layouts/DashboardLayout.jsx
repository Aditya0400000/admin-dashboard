import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';


export default function DashboardLayout({ children, active, setActive }) {
    const [open, setOpen] = useState(false);

    return (
    <div className='flex min-h-screen bg-slate-50'>
      <Sidebar active={active} setActive={setActive} open={open} setOpen={setOpen} />
      <div className='flex-1 flex flex-col'>
        <Navbar setOpen={setOpen} />
        <main className='p-6'>{children}</main>
      </div>
    </div>
  );
}


