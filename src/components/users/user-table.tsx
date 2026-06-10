"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Ban, MoreVertical } from "lucide-react";
import { EditUserModal } from "./edit-user-modal";
import Link from "next/link";

const mockUsers = Array(8).fill({
  id: "1",
  name: "Sarah Jenkins",
  email: "jane.doe@example.com",
  status: "Subscribed",
  activity: "12",
  avatar: "https://github.com/shadcn.png"
});

export function UserTable() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg border shadow-sm mt-6">
      <div className="p-4 border-b">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input placeholder="Search users by name or email..." className="pl-10" />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>USER</TableHead>
            <TableHead>EMAIL ADDRESS</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>LAST ACTIVITY</TableHead>
            <TableHead className="text-right">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user, idx) => (
            <TableRow key={idx}>
              <TableCell className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <span className="font-medium">{user.name}</span>
              </TableCell>
              <TableCell className="text-gray-500">{user.email}</TableCell>
              <TableCell>
                <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200">
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-gray-500">{user.activity} mins ago</TableCell>
              <TableCell className="text-right space-x-2">
                <Link href={`/users/${user.id}`}>
                  <Button variant="ghost" size="icon" className="text-gray-500"><Eye size={18} /></Button>
                </Link>
                <Button variant="ghost" size="icon" className="text-gray-500"><Ban size={18} /></Button>
                <Button variant="ghost" size="icon" className="text-gray-500" onClick={() => setEditModalOpen(true)}>
                  <MoreVertical size={18} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="p-4 border-t flex items-center justify-between text-sm text-gray-500">
        <span>Showing 1 to 8 of 8,429 users</span>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="default" size="sm" className="bg-blue-600">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <span className="px-2">...</span>
          <Button variant="outline" size="sm">105</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>

      <EditUserModal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)} />
    </div>
  );
}