"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Smartphone, TrendingUp, Info } from "lucide-react";
import Image from "next/image";

export default function PushNotificationPage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const displayTitle = title || "Flash Sale: 20% Off Everything";
  const displayMessage = message || "Grab your favorite items at a discounted price for the next 24...";

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Send Push Notification</h1>
        <p className="text-gray-500 text-sm">Compose and send a push notification to your user base.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Form Area */}
        <div className="lg:col-span-3">
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Compose Message</CardTitle>
              <CardDescription>Configure the message details that will be delivered to your global user base.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Notification Title</label>
                <Input 
                  placeholder="e.g., New Feature Update!" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Message Content</label>
                <Textarea 
                  placeholder="Type your message here..." 
                  className="min-h-[120px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Target Audience</label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Active Users</SelectItem>
                    <SelectItem value="subscribers">Subscribers Only</SelectItem>
                    <SelectItem value="inactive">Inactive Users</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="outline" className="w-32 font-semibold">Save Draft</Button>
                <Button className="bg-[#0070f3] hover:bg-blue-700 text-white gap-2 font-semibold">
                  <Send size={18} /> Send Notification
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Preview Area */}
        <div className="lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">Device Preview</h3>
            <div className="p-2 bg-white rounded-md border shadow-sm">
              <Smartphone size={20} className="text-gray-500" />
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="relative w-full h-[600px]">
            {/* Background Image */}
            <Image 
              src="/images/PhoneFrame.png" 
              alt="Mobile Preview Background" 
              fill
              className="relative"
              priority
            />
            
          </div>
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 mt-auto">
            <Card className="bg-blue-50/50 border-blue-100">
              <CardContent className="p-4">
                <p className="text-xs font-semibold text-gray-500 mb-1">Estimated Reach</p>
                <h3 className="text-xl font-bold text-blue-600 mb-1">124,500</h3>
                <p className="text-[10px] text-green-600 font-medium flex items-center gap-1">
                  <TrendingUp size={12} /> +12% vs last
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-50 border-slate-200">
              <CardContent className="p-4">
                <p className="text-xs font-semibold text-gray-500 mb-1">Avg. Open Rate</p>
                <h3 className="text-xl font-bold text-gray-900 mb-1">4.2%</h3>
                <p className="text-[10px] text-gray-500 flex items-center gap-1">
                  <Info size={12} /> Industry avg: 3.8%
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}