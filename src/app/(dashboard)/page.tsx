import { Header } from "@/components/dashboard/header";
import { StatCard } from "@/components/dashboard/stat-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { Users, CheckCircle, Clock, UserX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { QuickActions } from "@/components/dashboard/quick-action";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total users" value="1,247" icon={<Users className="text-blue-500 bg-blue-50 p-1.5 rounded-md" size={32} />} borderColor="border-blue-400" />
        <StatCard title="Active subscriptions" value="34" icon={<CheckCircle className="text-green-500 bg-green-50 p-1.5 rounded-md" size={32} />} borderColor="border-green-400" />
        <StatCard title="Trial Users" value="213" icon={<Clock className="text-purple-500 bg-purple-50 p-1.5 rounded-md" size={32} />} borderColor="border-purple-400" />
        <StatCard title="Cancelled users" value="142" icon={<UserX className="text-orange-500 bg-orange-50 p-1.5 rounded-md" size={32} />} borderColor="border-orange-400" />
      </div>

      {/* Revenue Summary Cards */}
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Revenue</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-gray-500 font-medium mb-1">Daily</p>
            <p className="text-xl font-bold text-gray-900">$2,840</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-gray-500 font-medium mb-1">Weekly</p>
            <p className="text-xl font-bold text-gray-900">$18,950</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-gray-500 font-medium mb-1">Monthly</p>
            <p className="text-xl font-bold text-gray-900">$78,400</p>
          </CardContent>
        </Card>
      </div>

      <RevenueChart />
      <QuickActions />
    </div>
  );
}