"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { EditUserModal } from "@/components/users/edit-user-modal";

export default function UserDetailsPage() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">User Details</h1>
        <p className="text-gray-500 text-sm">Update the account and profile information for this user.</p>
      </div>

      {/* Profile Header Card */}
      <Card className="mb-6">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">Sarah Montgomery</h2>
              <p className="text-gray-500 text-sm mb-2">Global Product Strategist</p>
              <div className="flex gap-2">
                <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-50">ACTIVE USER</Badge>
                <Badge variant="outline" className="text-gray-500">HQ TEAM</Badge>
              </div>
            </div>
          </div>
          {/* Added onClick event here */}
          <Button variant="outline" onClick={() => setEditModalOpen(true)}>
            Edit Profile
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Account Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Account Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-medium">jane.doe@example.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">Jane Doe</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Joined</p>
              <p className="font-medium">October 12, 2023</p>
            </div>
          </CardContent>
        </Card>

        {/* Subscription */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Subscription</CardTitle>
            <Button variant="link" className="text-blue-600 px-0">Manage Plan</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <p className="text-sm text-gray-500">Current Plan</p>
                <p className="font-bold text-lg">Pro Tier</p>
              </div>
              <span className="text-blue-600 font-semibold">$25/mo</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium text-green-600">Active</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Billing Cycle</p>
                <p className="font-medium">Monthly</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Started</p>
                <p className="font-medium">Oct 12, 2023</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Renews (Expiry)</p>
                <p className="font-medium">Nov 12, 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Danger Zone */}
      <Card className="border-red-100">
        <CardHeader>
          <CardTitle className="text-lg text-red-600">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="font-semibold">Cancel Subscription</p>
            <p className="text-sm text-gray-500">Immediately revokes Pro tier access and halts billing.</p>
          </div>
          <Button variant="destructive" className="bg-red-500 hover:bg-red-600">Cancel Plan</Button>
        </CardContent>
      </Card>

      {/* Added Modal Component here */}
      <EditUserModal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)} />
    </div>
  );
}