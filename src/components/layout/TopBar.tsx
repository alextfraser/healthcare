import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center flex-1">
        <div className="max-w-md w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:border-transparent"
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">Dr. Sarah Smith</div>
            <div className="text-xs text-gray-500">GP Partner</div>
          </div>
          <UserCircle className="h-8 w-8 text-gray-600" />
        </div>
      </div>
    </div>
  );
}