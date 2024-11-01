import React from 'react';
import {
  Users,
  Calendar,
  Clock,
  AlertTriangle,
  Activity,
  UserCheck,
  Bed,
  Syringe,
} from 'lucide-react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import MetricsCard from '../components/dashboard/MetricsCard';
import AppointmentsList from '../components/dashboard/AppointmentsList';
import StaffStatus from '../components/dashboard/StaffStatus';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <MetricsCard
                title="Total Patients"
                value="2,547"
                trend="+2.5% from last month"
                icon={Users}
                trendUp={true}
              />
              <MetricsCard
                title="Today's Appointments"
                value="42"
                trend="4 slots available"
                icon={Calendar}
                trendUp={true}
              />
              <MetricsCard
                title="Average Wait Time"
                value="12 mins"
                trend="-3 mins from last week"
                icon={Clock}
                trendUp={true}
              />
              <MetricsCard
                title="DNA Rate"
                value="4.2%"
                trend="+0.3% from last week"
                icon={AlertTriangle}
                trendUp={false}
              />
            </div>
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AppointmentsList />
              <StaffStatus />
            </div>
            
            {/* Resource Status */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricsCard
                title="Available Rooms"
                value="3/8"
                icon={Bed}
              />
              <MetricsCard
                title="Patients Waiting"
                value="6"
                trend="Average: 8 mins"
                icon={UserCheck}
              />
              <MetricsCard
                title="Urgent Cases"
                value="2"
                icon={Activity}
              />
              <MetricsCard
                title="Vaccine Stock"
                value="94%"
                trend="Reorder needed: Flu"
                icon={Syringe}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}