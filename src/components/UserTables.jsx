import React, { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Search, ChevronUp, ChevronDown  } from 'lucide-react';
import { users } from '../data/mockData'

const ROWS_PER_PAGE = 5;
export default function UserTables() {
    const [search, setSearch] = useState("");
    const [sortKey, setSortKey] = useState("name");
    const [sortDir, setSortDir] = useState("asc");
    const [page, setPage] = useState(1);

    const filtered = useMemo(() => {
        return users.filter(
            (U) =>
                U.name.toLowerCase().includes(search.toLowerCase()) ||
                U.email.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    const sorted = useMemo(() => {
        return [...filtered].sort((a, b) => {
            const valA = a[sortKey].toLowerCase();
            const valB = b[sortKey].toLowerCase();
            if (valA < valB) return sortDir === "asc" ? -1 : 1;
            if (valA > valB) return sortDir === "asc" ? 1 : -1;
            return 0;
        });
    }, [filtered, sortKey, sortDir]);

    const totalPages = Math.ceil(sorted.length / ROWS_PER_PAGE);
    const paginated = sorted.slice(
        (page - 1) * ROWS_PER_PAGE,
        page * ROWS_PER_PAGE
    );

    const handleSort = (key) => {
        if (sortKey === key){
            setSortDir(sortDir === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortDir("asc");
        }
    };

    const SortIcon = ({ colKey }) => {
        if (sortKey !== colKey) return null;
        return sortDir === "asc" ? <ChevronUp size={14} />:<ChevronDown size={14} />;
    };


  return (
    <div className='bg-white rounded-xl border border-slate-200 overflow-hidden'>
        {/* SearchBar */}
        <div className='p-4 border-b border-slate-200'>
            <div className='flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg w-full sm:w-72'>
                <Search size={18} className="text-slate-400" />
                <input 
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                }}
                placeholder='Search by name or email...'
                className='bg-transparent outline-none text-sm w-full'
                />
            </div>
        </div>

        {/* Table */}
        <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
                <thead>
                    <tr className='text-left text-slate-500 border-b border-slate-200'>
                        {["name", "email", "role", "status"].map((col) => (
                        <th
                         key={col}
                         onClick={() => handleSort(col)}
                         className='px-5 py-3 font-medium cursor-pointer select-none hover:text-slate-800'
                        >
                            <div>
                            {col}
                            <SortIcon colKey={col} />
                            </div>
                        </th>
                        ))}    
                    </tr>
                </thead>
                <tbody>
                    {paginated.map((U) => (
                        <tr
                        key={U.id}
                        className='border-b border-slate-100 hover:bg-slate-50 transition-colors duration-150'
                        >
                            <td className='px-5 py-3 font-medium text-slate-800'>{U.name}</td>
                            <td className='px-5 py-3 text-slate-500'>{U.email}</td>
                            <td className='px-5 py-3 text-slate-500'>{U.role}</td>
                            <td className='px-5 py-3'>
                                <span 
                                className={`px-2 py-1 rouded-full text-xs font-medium ${
                                    U.status === "Active"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                                >
                                    {U.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                    {paginated.length === 0 && (
                        <tr>
                            <td colSpan={4} className='text-center py-6 text-slate-400'>
                                No User Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

        {/* Pagination */}
        <div className='flex items-center justify-between p-4 border-slate-200 text-sm text-slate-500'>
            <span>
                Page {page} of {totalPages || 1}
            </span>
            <div className='flex gap-2'>
                <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className='p-2 rounded-lg border border-slate-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100'
                >
                    <ChevronLeft size={16} />
                </button>
                <button 
                disabled={page === totalPages || totalPages === 0}
                onClick={() => setPage((p) => p + 1)}
                className='p-2 rounded-lg border border-slate-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100'
                >
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    </div>
  )
}


