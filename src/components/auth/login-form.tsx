import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { HardHat } from "lucide-react";

export function LoginForm() {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
      <div className="flex flex-col items-center mb-8">
        <HardHat className="h-10 w-10 mb-2" />
        <h1 className="text-2xl font-bold">OZMAN</h1>
        <p className="text-sm text-gray-500">Construction Cost SaaS Admin Portal</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Welcome back</h2>
        <p className="text-sm text-gray-500">Enter your credentials to manage your projects</p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address</label>
          <Input type="email" placeholder="admin@ozman.construction" className="w-full" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Password</label>
            <a href="#" className="text-xs text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <Input type="password" placeholder="••••••••" className="w-full" />
        </div>

        <div className="flex items-center space-x-2 py-2">
          <Checkbox id="remember" />
          <label htmlFor="remember" className="text-sm text-gray-600">
            Remember this device for 30 days
          </label>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Sign In to Dashboard →
        </Button>
      </form>

      <div className="mt-8 text-center text-xs text-gray-400 space-x-4">
        <a href="#">Privacy Policy</a>
        <span>•</span>
        <a href="#">Terms of Service</a>
        <span>•</span>
        <a href="#">Support</a>
      </div>
    </div>
  );
}