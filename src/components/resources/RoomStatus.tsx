import React from 'react';
import { DoorClosed, Users, Clock } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Consultation Room 1',
    status: 'Occupied',
    currentDoctor: 'Dr. Sarah Smith',
    nextAvailable: '10:30 AM',
    equipment: ['BP Monitor', 'ECG'],
  },
  {
    id: 2,
    name: 'Consultation Room 2',
    status: 'Available',
    nextBooking: '11:00 AM',
    equipment: ['BP Monitor', 'Spirometer'],
  },
  {
    id: 3,
    name: 'Treatment Room',
    status: 'Maintenance',
    maintenanceEnd: '12:00 PM',
    equipment: ['Defibrillator', 'Emergency Cart'],
  },
];

export default function RoomStatus() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Room Status</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {rooms.map((room) => (
          <div key={room.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <DoorClosed className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{room.name}</p>
                  <p className="text-sm text-gray-500">
                    {room.equipment.join(' • ')}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  room.status === 'Available'
                    ? 'bg-green-100 text-green-800'
                    : room.status === 'Occupied'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {room.status}
                </span>
                <div className="mt-1 text-sm text-gray-500">
                  {room.status === 'Occupied' && (
                    <div className="flex items-center justify-end space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{room.currentDoctor}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-end space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      {room.nextAvailable 
                        ? `Next available: ${room.nextAvailable}`
                        : room.nextBooking
                        ? `Next booking: ${room.nextBooking}`
                        : `Available after: ${room.maintenanceEnd}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}