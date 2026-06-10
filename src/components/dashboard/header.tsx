import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-900">Super Admin Dashboard</h1>
      <div className="flex items-center gap-3 bg-white p-2 rounded-full border px-4 shadow-sm">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900 leading-none">Md Shakil</span>
          <span className="text-xs text-gray-500">Super Admin</span>
        </div>
      </div>
    </header>
  );
}