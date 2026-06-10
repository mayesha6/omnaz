import { LayoutDashboard, Users, LineChart, Bell, LogOut, HardHat } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col justify-between fixed left-0 top-0">
      <div className="p-6">
        <div className="flex flex-col items-center mb-10">
          <HardHat className="h-10 w-10 mb-2" />
          <h2 className="text-xl font-bold tracking-tight">OZMAN</h2>
        </div>
        
        <nav className="space-y-2">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 bg-[#0070f3] text-white rounded-md text-sm font-medium">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/users" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium">
            <Users size={18} /> User
          </Link>
          <Link href="/revenue" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium">
            <LineChart size={18} /> Revenue Analytics
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium">
            <Bell size={18} /> Push Notification
          </Link>
        </nav>
      </div>

      <div className="p-6">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-red-600 bg-red-50 hover:bg-red-100 rounded-md text-sm font-medium">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
}