import React from 'react';
import {
  BarChart3,
  Calendar,
  Users,
  Bell,
  Home,
  Settings,
  LogOut,
  Boxes,
  ClipboardList,
  UserCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';


const menuItems = [
  { icon: Home, label: 'Overview', href: '/dashboard' },
  { icon: Users, label: 'Patients', href: '/dashboard/patients' },
  { icon: Calendar, label: 'Appointments', href: '/dashboard/appointments' },
  { icon: UserCircle, label: 'Staff', href: '/dashboard/staff' },
  { icon: Boxes, label: 'Resources', href: '/dashboard/resources' },
  { icon: ClipboardList, label: 'Reports', href: '/dashboard/reports' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export default function Sidebar() {
  return (
    <div className="bg-white h-screen w-64 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <BarChart3 className="h-6 w-6 text-[#005EB8]" />
          <span className="text-lg font-bold text-gray-800">PracticePulse</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
        <div>
      {menuItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
            location.pathname === item.href 
              ? 'bg-blue-100 text-blue-600' 
              : 'hover:bg-gray-100'
          }`}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center space-x-3 text-gray-700 w-full p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}