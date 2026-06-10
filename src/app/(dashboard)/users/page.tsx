import { UserTable } from "@/components/users/user-table";
import { UserStats } from "@/components/users/user-stats";

export default function UsersPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Role & User Management</h1>
        <p className="text-gray-500 text-sm">Approve and manage user role requests</p>
      </div>

      <UserTable />
      <UserStats />
    </div>
  );
}