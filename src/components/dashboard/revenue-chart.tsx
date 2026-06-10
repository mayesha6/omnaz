"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Mon', total: 2300 },
  { name: 'Tue', total: 2700 },
  { name: 'Wed', total: 3100 },
  { name: 'Thu', total: 2800 },
  { name: 'Fri', total: 3400 },
  { name: 'Sat', total: 2100 },
  { name: 'Sun', total: 2900 },
];

export function RevenueChart() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-base font-semibold">7-Day Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="total" stroke="#0070f3" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}