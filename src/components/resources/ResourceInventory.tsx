import React from 'react';
import { Box, Syringe, Thermometer, CrossIcon } from 'lucide-react';

const inventory = [
  {
    id: 1,
    name: 'Flu Vaccines',
    category: 'Vaccines',
    stock: 145,
    minimum: 100,
    status: 'Good',
    expiryDate: '2024-12-31',
    icon: Syringe,
  },
  {
    id: 2,
    name: 'Blood Pressure Monitors',
    category: 'Equipment',
    stock: 8,
    minimum: 5,
    status: 'Good',
    lastCalibration: '2024-02-01',
    icon: Thermometer,
  },
  {
    id: 3,
    name: 'First Aid Kits',
    category: 'Supplies',
    stock: 12,
    minimum: 15,
    status: 'Low',
    expiryDate: '2024-06-30',
    icon: CrossIcon,
  },
];

export default function ResourceInventory() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Inventory Status</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {inventory.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Icon className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      item.status === 'Good' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {item.stock} units
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.expiryDate 
                      ? `Expires: ${item.expiryDate}`
                      : `Last Calibrated: ${item.lastCalibration}`}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}