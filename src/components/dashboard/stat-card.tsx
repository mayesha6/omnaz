import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  borderColor?: string;
}

export function StatCard({ title, value, icon, borderColor = "border-gray-200" }: StatCardProps) {
  return (
    <Card className={`border-t-4 ${borderColor}`}>
      <CardContent className="p-6">
        <div className="flex flex-col gap-2">
          <div className="mb-2">{icon}</div>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
}