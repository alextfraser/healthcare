import React from 'react';
import { Clock, AlertCircle, CheckCircle, User } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'appointment',
    description: 'New appointment booked',
    details: 'Dr. Smith with Patient #1234',
    time: '10 minutes ago',
    status: 'success',
  },
  {
    id: 2,
    type: 'alert',
    description: 'Low inventory alert',
    details: 'Flu vaccines below minimum threshold',
    time: '30 minutes ago',
    status: 'warning',
  },
  {
    id: 3,
    type: 'system',
    description: 'System maintenance',
    details: 'Scheduled backup completed',
    time: '1 hour ago',
    status: 'success',
  },
];

export default function ActivityLog() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-full ${
                activity.status === 'success' 
                  ? 'bg-green-100' 
                  : 'bg-yellow-100'
              }`}>
                {activity.type === 'appointment' ? (
                  <User className={`h-5 w-5 ${
                    activity.status === 'success' 
                      ? 'text-green-600' 
                      : 'text-yellow-600'
                  }`} />
                ) : activity.type === 'alert' ? (
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {activity.description}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {activity.details}
                </p>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {activity.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}