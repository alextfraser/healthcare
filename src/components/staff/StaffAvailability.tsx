import React from 'react';
import { UserCircle } from 'lucide-react';

const availability = [
  { id: 1, day: 'Mon', morning: ['Dr. Smith', 'Dr. Wilson'], evening: ['Dr. Brown', 'Dr. Davis'] },
  { id: 2, day: 'Tue', morning: ['Dr. Wilson', 'Dr. Davis'], evening: ['Dr. Smith', 'Dr. Brown'] },
  { id: 3, day: 'Wed', morning: ['Dr. Brown', 'Dr. Smith'], evening: ['Dr. Wilson', 'Dr. Davis'] },
  { id: 4, day: 'Thu', morning: ['Dr. Davis', 'Dr. Brown'], evening: ['Dr. Smith', 'Dr. Wilson'] },
  { id: 5, day: 'Fri', morning: ['Dr. Smith', 'Dr. Davis'], evening: ['Dr. Brown', 'Dr. Wilson'] },
];

export default function StaffAvailability() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Weekly Availability</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-5 gap-4">
          {availability.map((day) => (
            <div key={day.id} className="text-center">
              <div className="font-medium text-gray-900 mb-2">{day.day}</div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="text-xs font-medium text-gray-500 mb-2">Morning</p>
                  {day.morning.map((doctor, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-1 mb-1">
                      <UserCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-xs text-gray-700">{doctor}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-50 p-2 rounded-lg">
                  <p className="text-xs font-medium text-gray-500 mb-2">Evening</p>
                  {day.evening.map((doctor, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-1 mb-1">
                      <UserCircle className="h-4 w-4 text-purple-500" />
                      <span className="text-xs text-gray-700">{doctor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}