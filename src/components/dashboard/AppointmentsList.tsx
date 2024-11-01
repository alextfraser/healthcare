import React from 'react';
import { Clock } from 'lucide-react';

const appointments = [
  {
    id: 1,
    time: '09:00',
    patientId: 'P-1234',
    type: 'Regular Checkup',
    status: 'Checked In',
    waitTime: '5 mins',
  },
  {
    id: 2,
    time: '09:15',
    patientId: 'P-1235',
    type: 'Follow-up',
    status: 'Waiting',
    waitTime: '10 mins',
  },
  {
    id: 3,
    time: '09:30',
    patientId: 'P-1236',
    type: 'Urgent Care',
    status: 'In Progress',
    waitTime: '0 mins',
  },
];

export default function AppointmentsList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Today's Appointments</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{appointment.time}</p>
                  <p className="text-sm text-gray-500">Patient ID: {appointment.patientId}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{appointment.type}</p>
                <p className="text-sm text-gray-500">Wait: {appointment.waitTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}