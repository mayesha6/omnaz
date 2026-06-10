"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "JAN", total: 150 },
  { name: "FEB", total: 230 },
  { name: "MAR", total: 180 },
  { name: "APR", total: 320 },
  { name: "MAY", total: 250 },
  { name: "JUN", total: 350 },
  { name: "JUL", total: 280 },
  { name: "AUG", total: 340 },
  { name: "SEP", total: 260 },
  { name: "OCT", total: 400 },
  { name: "NOV", total: 310 },
  { name: "DEC", total: 380 },
];

export function RevenueBarChart() {
  return (
    <div className="h-[300px] w-full mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0070f3" stopOpacity={1} />
              <stop offset="100%" stopColor="#001f3f" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#888888' }} 
            dy={10}
          />
          <YAxis hide />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Bar dataKey="total" fill="url(#colorTotal)" radius={[4, 4, 0, 0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}