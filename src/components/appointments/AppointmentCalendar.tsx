import React from 'react';
import { Clock, User, FileText } from 'lucide-react';

const appointments = [
  {
    id: 1,
    time: '09:00',
    patient: 'John Smith',
    type: 'Regular Checkup',
    duration: '15 mins',
    notes: 'Follow-up on blood pressure medication',
    status: 'Scheduled',
  },
  {
    id: 2,
    time: '09:30',
    patient: 'Emma Wilson',
    type: 'Urgent Care',
    duration: '30 mins',
    notes: 'Severe migraine symptoms',
    status: 'In Progress',
  },
  {
    id: 3,
    time: '10:15',
    patient: 'Michael Brown',
    type: 'Review',
    duration: '20 mins',
    notes: 'Diabetes management review',
    status: 'Scheduled',
  },
];

export default function AppointmentCalendar() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Today's Schedule</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-[#005EB8] text-white rounded-md hover:bg-[#004C93]">
              New Appointment
            </button>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                  <p className="text-sm text-gray-500">{appointment.duration}</p>
                </div>
              </div>
              
              <div className="flex-1 px-4">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <p className="text-sm font-medium text-gray-900">{appointment.patient}</p>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <FileText className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-500">{appointment.notes}</p>
                </div>
              </div>
              
              <div>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  appointment.status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {appointment.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}