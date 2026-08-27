import React from 'react'
import { Search, Bell, Menu } from 'lucide-react';

export default function Navbar({ setOpen }) {
  return (
    <header className='flex items-center justify-between bg-white px-6 py-4 border-b border-slate-200 sticky top-0 z-10'>
        <div className='flex items-center gap-4'>
            <button className='md:hidden' onClick={() => setOpen(true)}>
                <Menu size={22} />
            </button>
            <div className='hidden sm:flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg w-64'>
                <Search size={18} className='text-slate-400' />
                <input 
                placeholder='Search...'
                className='bg-transparent outline-none text-sm w-full'
                />
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <button className='relative'>
                <Bell size={20} className='text-slate-600' />
                <span className='absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full' />
            </button>
            <div className='w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold'>
                A
            </div>
        </div>
    </header>
  );
}


