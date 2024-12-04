import React from 'react';
import { Users, Award, Building2, Code2 } from 'lucide-react';

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard icon={<Users className="w-8 h-8" />} number="20+" label="Clients Worldwide" />
          <StatCard icon={<Award className="w-8 h-8" />} number="15+" label="Years Experience" />
          <StatCard icon={<Building2 className="w-8 h-8" />} number="50+" label="Projects Delivered" />
          <StatCard icon={<Code2 className="w-8 h-8" />} number="10+" label="Industry Experts" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <div className="relative group">
      <div
        className="relative p-6 rounded-xl border border-white/[0.08] bg-black/20 hover:bg-black/30 transition-colors duration-300">
        <div className="stat-card relative p-6 rounded-xl transition-all duration-300">
          <div className="flex flex-col items-center">

            <div className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>

            <div
              className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              {number}
            </div>

            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {label}
            </div>
          </div>
        </div>

        <div
          className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"/>
      </div>
    </div>
      );
      }
