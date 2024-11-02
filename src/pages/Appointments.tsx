import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import AppointmentCalendar from '../components/appointments/AppointmentCalendar';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

export default function Appointments() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg">
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                    <span className="text-sm font-medium">Today</span>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <AppointmentCalendar />
          </div>
        </main>
      </div>
    </div>
  );
}