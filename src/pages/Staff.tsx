import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import StaffSchedule from '../components/staff/StaffSchedule';
import StaffAvailability from '../components/staff/StaffAvailability';
import { UserPlus, Calendar as CalendarIcon } from 'lucide-react';

export default function Staff() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
              <div className="flex space-x-4">
                <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  Manage Shifts
                </button>
                <button className="flex items-center px-4 py-2 bg-[#005EB8] text-white rounded-lg hover:bg-[#004C93]">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Add Staff Member
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <StaffSchedule />
              <StaffAvailability />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}