import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import PatientList from '../components/patients/PatientList';
import { Search, Filter, UserPlus } from 'lucide-react';

export default function Patients() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Patients</h1>
              <button className="flex items-center px-4 py-2 bg-[#005EB8] text-white rounded-lg hover:bg-[#004C93]">
                <UserPlus className="h-5 w-5 mr-2" />
                Add Patient
              </button>
            </div>
            
            <div className="mb-6 flex space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:border-transparent"
                />
              </div>
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>
            
            <PatientList />
          </div>
        </main>
      </div>
    </div>
  );
}