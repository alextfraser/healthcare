import React from 'react';
import { Clock, Calendar } from 'lucide-react';

const schedule = [
  {
    id: 1,
    name: 'Dr. Sarah Smith',
    shift: 'Morning',
    time: '08:00 - 16:00',
    room: 'Room 1',
    patients: 12,
    status: 'On Duty',
  },
  {
    id: 2,
    name: 'Dr. James Wilson',
    shift: 'Morning',
    time: '09:00 - 17:00',
    room: 'Room 2',
    patients: 10,
    status: 'Break',
  },
  {
    id: 3,
    name: 'Nurse Helen Brown',
    shift: 'Evening',
    time: '14:00 - 22:00',
    room: 'Room 3',
    patients: 15,
    status: 'On Duty',
  },
];

export default function StaffSchedule() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Today's Schedule</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {schedule.map((staff) => (
          <div key={staff.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="font-medium text-gray-900">{staff.name}</p>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {staff.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {staff.room}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  staff.status === 'On Duty' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {staff.status}
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  {staff.patients} patients today
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}