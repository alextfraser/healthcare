import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import PerformanceMetrics from '../components/reports/PerformanceMetrics';
import ActivityLog from '../components/reports/ActivityLog';
import { Download, Calendar } from 'lucide-react';

export default function Reports() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
              <div className="flex space-x-4">
                <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Calendar className="h-5 w-5 mr-2" />
                  Last 30 Days
                </button>
                <button className="flex items-center px-4 py-2 bg-[#005EB8] text-white rounded-lg hover:bg-[#004C93]">
                  <Download className="h-5 w-5 mr-2" />
                  Export Report
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <PerformanceMetrics />
              <ActivityLog />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}