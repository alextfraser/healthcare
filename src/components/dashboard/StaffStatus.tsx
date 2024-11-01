import React from 'react';
import { UserCircle } from 'lucide-react';

const staffMembers = [
  {
    id: 1,
    name: 'Dr. Sarah Smith',
    role: 'GP Partner',
    status: 'Available',
    room: 'Room 1',
  },
  {
    id: 2,
    name: 'Dr. James Wilson',
    role: 'GP',
    status: 'With Patient',
    room: 'Room 2',
  },
  {
    id: 3,
    name: 'Nurse Helen Brown',
    role: 'Practice Nurse',
    status: 'Break',
    room: 'Room 3',
  },
];

export default function StaffStatus() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Staff On Duty</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {staffMembers.map((staff) => (
          <div key={staff.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <UserCircle className="h-10 w-10 text-gray-400" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">{staff.name}</p>
                <p className="text-sm text-gray-500">{staff.role}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{staff.status}</p>
                <p className="text-sm text-gray-500">{staff.room}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}