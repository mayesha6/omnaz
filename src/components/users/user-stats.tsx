import { Card, CardContent } from "@/components/ui/card";
import { Users, Activity, Clock } from "lucide-react";

export function UserStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <Card>
        <CardContent className="p-4 flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <Users size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase">Total Users</p>
            <p className="text-2xl font-bold">1,240</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex items-center gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-lg">
            <Activity size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase">Active Now</p>
            <p className="text-2xl font-bold">842</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex items-center gap-4">
          <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase">In Trial</p>
            <p className="text-2xl font-bold">128</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}