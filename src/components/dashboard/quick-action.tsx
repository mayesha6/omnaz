import { Card, CardContent } from "@/components/ui/card";
import { Users, Bell, MessageSquare, DollarSign, ChevronRight } from "lucide-react";

const actions = [
  { title: "Manage Users", desc: "View all subscribers", icon: <Users className="text-blue-500" size={20} />, bg: "bg-blue-50" },
  { title: "Push Notifications", desc: "Send to user segments", icon: <Bell className="text-purple-500" size={20} />, bg: "bg-purple-50" },
  { title: "Support Inbox", desc: "3 unread messages", icon: <MessageSquare className="text-green-500" size={20} />, bg: "bg-green-50" },
  { title: "Revenue Analytics", desc: "Detailed insights", icon: <DollarSign className="text-orange-500" size={20} />, bg: "bg-orange-50" },
];

export function QuickActions() {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="flex flex-col gap-3">
        {actions.map((action, index) => (
          <Card key={index} className="hover:bg-gray-50 cursor-pointer transition-colors">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-md ${action.bg}`}>
                  {action.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{action.title}</h4>
                  <p className="text-xs text-gray-500">{action.desc}</p>
                </div>
              </div>
              <ChevronRight className="text-gray-400" size={20} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}