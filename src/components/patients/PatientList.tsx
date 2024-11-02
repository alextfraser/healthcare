import React from 'react';
import { User, Phone, Mail, Calendar } from 'lucide-react';

const patients = [
  {
    id: 'P-1234',
    name: 'John Smith',
    age: 45,
    contact: '07700 900123',
    email: 'j.smith@email.com',
    lastVisit: '2024-02-15',
    nextAppointment: '2024-03-20',
    status: 'Active',
  },
  {
    id: 'P-1235',
    name: 'Emma Wilson',
    age: 32,
    contact: '07700 900124',
    email: 'e.wilson@email.com',
    lastVisit: '2024-02-20',
    nextAppointment: '2024-03-15',
    status: 'Active',
  },
  {
    id: 'P-1236',
    name: 'Michael Brown',
    age: 58,
    contact: '07700 900125',
    email: 'm.brown@email.com',
    lastVisit: '2024-02-10',
    nextAppointment: null,
    status: 'Inactive',
  },
];

export default function PatientList() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Visit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Next Appointment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <User className="h-10 w-10 text-gray-400 bg-gray-100 rounded-full p-2" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                      <div className="text-sm text-gray-500">ID: {patient.id}</div>
                      <div className="text-sm text-gray-500">Age: {patient.age}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <Phone className="h-4 w-4 mr-2" />
                      {patient.contact}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Mail className="h-4 w-4 mr-2" />
                      {patient.email}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {patient.lastVisit}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {patient.nextAppointment || 'No upcoming appointments'}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    patient.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}