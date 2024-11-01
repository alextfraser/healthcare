import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string | number;
  trend?: string;
  icon: LucideIcon;
  trendUp?: boolean;
}

export default function MetricsCard({ title, value, trend, icon: Icon, trendUp }: MetricsCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-2">{value}</p>
          {trend && (
            <p className={`text-sm mt-2 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
              {trend}
            </p>
          )}
        </div>
        <div className="bg-[#005EB8]/10 h-12 w-12 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-[#005EB8]" />
        </div>
      </div>
    </div>
  );
}