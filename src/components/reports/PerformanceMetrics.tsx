import React from 'react';
import { BarChart, Activity, Clock, Users } from 'lucide-react';

const metrics = [
  {
    id: 1,
    title: 'Patient Satisfaction',
    value: '4.8/5',
    trend: '+0.2',
    period: 'vs last month',
    icon: Users,
  },
  {
    id: 2,
    title: 'Average Wait Time',
    value: '12 mins',
    trend: '-2',
    period: 'vs last month',
    icon: Clock,
  },
  {
    id: 3,
    title: 'Appointments/Day',
    value: '42',
    trend: '+5',
    period: 'vs last month',
    icon: Activity,
  },
  {
    id: 4,
    title: 'Resource Utilization',
    value: '87%',
    trend: '+3%',
    period: 'vs last month',
    icon: BarChart,
  },
];

export default function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.id} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-semibold text-gray-900 mt-2">
                  {metric.value}
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-green-600">{metric.trend}</span>
                  <span className="text-sm text-gray-500 ml-1">{metric.period}</span>
                </div>
              </div>
              <div className="bg-[#005EB8]/10 p-2 rounded-lg">
                <Icon className="h-6 w-6 text-[#005EB8]" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}