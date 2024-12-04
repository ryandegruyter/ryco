import React from 'react';

interface TechCardProps {
  name: string;
  icon: string;
}

export function TechCard({ name, icon }: TechCardProps) {
  return (
    <div className="relative group">
      <div
        className="relative p-6 rounded-xl border border-white/[0.08] bg-black/20 hover:bg-black/30 transition-colors duration-300">
        <div className="tech-card relative p-6 rounded-xl transition-all duration-300">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <img
                src={icon}
                alt={`${name} logo`}
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                style={{filter: 'brightness(0) invert(1)'}}
              />
            </div>
            <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
            {name}
          </span>
          </div>
        </div>
      </div>
        <div
          className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"/>
      </div>
      );
      }
