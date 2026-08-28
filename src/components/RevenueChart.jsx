import React from 'react'
import { revenueData }from "../data/mockData"
import { 
    LineChart, 
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    BarChart,
    Bar,

     } 
from "recharts"

export default function RevenueChart() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {/* Linechart */}
        <div className='bg-white rounded-xl border border-slate-200 p-5 '>
            <h3 className='text-slate-800 font-semibold mb-4'>Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={280}>
                <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray= "3 3" stroke="#e2e8fo" />
                    <XAxis dataKey="month" stroke='#94a3b8' fontSize={12} />
                    <YAxis stroke='#94a3b8' fontSize={12} />
                    <Tooltip 
                    contentStyle={{
                        borderRadius:"8px",
                        border: "1px solid #e2e8f0",
                    }}
                    />
                    <Line 
                    type='monotone'
                    dataKey='revenue'
                    stroke='#2563eb'
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "#2563eb" }}
                    activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
      
      {/* Barchart */}
      <div className='bg-white rounded-xl border border-slate-200 p-5'>
        <h3 className='text-slate-800 font-semibold mb-4'>Monthly Salary</h3>
        <ResponsiveContainer width="100%" height={200}>
            <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke='#94a3b8' fontSize={12} />
                <Tooltip 
                contentStyle={{
                    borderRadius: '8px',
                    border:"1px solid #e2e8f0",
                }}
                />
                <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} /> 
            </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

