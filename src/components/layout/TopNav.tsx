import { Search, Mic, Settings, Bell } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="bg-primary w-full">
      <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold tracking-tight">ChargeFlow</h1>

        {/* Search */}
        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-96">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 text-sm text-gray-700 outline-none bg-transparent"
          />
          <Mic size={18} className="text-gray-400 ml-2 cursor-pointer" />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button className="text-white/80 hover:text-white transition-colors">
            <Settings size={20} />
          </button>
          <button className="text-white/80 hover:text-white transition-colors relative">
            <Bell size={20} />
          </button>
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center cursor-pointer overflow-hidden">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=ChargeFlow"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
